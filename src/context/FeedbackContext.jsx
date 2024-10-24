import {createContext, useEffect, useState} from "react";
import FeedbackData from "../data/FeedbackData.js";
import {v4 as uuidv4} from "uuid";
import getDataFromGoogleApp from "../data/Utils.js";

const FeedbackContext = createContext()

const googleUrl = import.meta.env.VITE_apiURL

export const FeedbackProvider = ({ children }) => {


    const [feedbacks, setFeedbacks] = useState([]);
    const [isLoading, setIsloading] = useState(true)

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(()=>{
        // fetchFeedbacks()
        //     .then(data => {
        //         setFeedbacks(data);
        //         setIsloading(false)
        //     })
        //     .catch(error => {
        //         console.error('Error fetching feedbacks:', error);
        //     });
        fetchFeedbacks()
    }, [])

    const fetchFeedbacks = async () => {
        // const response = await fetch('http://localhost:3000/feedbacks');
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }
        // return await response.json();

        getDataFromGoogleApp(googleUrl).then(data => {
            console.log('Data from Google',data)
            setFeedbacks(data.feedbacks)
            setIsloading(false)
        })
    };

    const deleteFeedback = async (id) => {
        if(window.confirm('Ви впевнені, що хочете видалити цей важливий відгук??')
        ){
            setIsloading(true)
            const response = await fetch(`http://localhost:3000/feedbacks/${id}`, {
                method: "DELETE"
            })
            const data = await response.json()
            console.log("DELETE", data)
            setFeedbacks(feedbacks.filter(msg => msg.id !== id))
            setIsloading(false)
        }
    }

    const addFeedback = async (newFeedback) => {
        setIsloading(true)
        const response = await fetch('http://localhost:3000/feedbacks?_sort=id&_order=asc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        const data = await response.json()

        // newFeedback.id = uuidv4()
        setFeedbacks([data, ...feedbacks])
        setIsloading(false)
    }

    const updateFeedback = async (id, updItem) => {
        setIsloading(true)
        const response = await fetch(`http://localhost:3000/feedbacks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })
        const data = await response.json()
        setFeedbacks(feedbacks.map(item => item.id === id ? {...item, ...data } : item))
        // setFeedbacks(feedbacks.map(item => item.id === id ? {...item, ...updItem } : item))
        setFeedbackEdit({
            item: {},
            edit: false,
        })
        setIsloading(false)
    }

    const editFeedback = (item) => {
        setFeedbackEdit({item, edit: true})
    }



    return <FeedbackContext.Provider value={{
        feedbacks,
        deleteFeedback,
        addFeedback,
        updateFeedback,
        editFeedback,
        feedbackEdit,
        isLoading
    }}>
        {children}
    </FeedbackContext.Provider>;
}

export default FeedbackContext;
