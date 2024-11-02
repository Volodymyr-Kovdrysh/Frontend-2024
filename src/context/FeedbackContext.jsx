import {createContext, useEffect, useState} from "react";
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

    const [user, setUser]= useState({login: true, email: ''});

    useEffect(()=>{
        getUser()
        fetchFeedbacks()
    }, [])

    const getUser= () => {
        if(!localStorage.getItem('app')){
            localStorage.setItem('app', JSON.stringify({...user}))
        }
        else {
            setUser(JSON.parse(localStorage.getItem('app')))
        }

    }

    const fetchFeedbacks = async () => {


        getDataFromGoogleApp(`${googleUrl}?method=GET`).then(data => {
            console.log('Data from Google',data)
            setFeedbacks(data.feedbacks)
            setIsloading(false)
        })
    };

    const deleteFeedback = async (id) => {
        if(window.confirm('Ви впевнені, що хочете видалити цей важливий відгук??')
        ){
            setIsloading(true)
            getDataFromGoogleApp(`${googleUrl}?method=DELETE&id=${id}`).then(data => {
                setFeedbacks(data.feedbacks)
                setIsloading(false)
            })
        }
    }

    const addFeedback = async (newFeedback) => {
        setIsloading(true)

        newFeedback.id = uuidv4()


        const {id, rating, text, email} = newFeedback
        getDataFromGoogleApp(`${googleUrl}?method=POST&id=${id}&rating=${rating}&text=${text}&email=${email}`).then(data => {
            setFeedbacks(data.feedbacks)
            setIsloading(false)
        })

    }

    const updateFeedback = async (id, updItem) => {
        setIsloading(true)

        getDataFromGoogleApp(`${googleUrl}?method=PUT&id=${id}&rating=${updItem.rating}&text=${updItem.text}`).then(data => {
            setFeedbacks(data.feedbacks)
            setFeedbackEdit({
                    item: {},
                    edit: false,
                })
            setIsloading(false)
        })
    }

    const editFeedback = (item) => {
        setFeedbackEdit({item, edit: true})
    }

    const login = (email='') => {
        setUser(prevState => {
            localStorage.setItem('app', JSON.stringify({...prevState, login: true, email}))
            return {...prevState, login: true, email}
        })
    }

    const logout = () => {
        setUser(prevState => {
        localStorage.setItem('app', JSON.stringify({...prevState, login: false, email: ''}))
        return {...prevState, login: false, email: ''}

        })
    }

    const register = (obj) => {
        alert(JSON.stringify(obj))
    }



    return <FeedbackContext.Provider value={{
        feedbacks,
        deleteFeedback,
        addFeedback,
        updateFeedback,
        editFeedback,
        feedbackEdit,
        isLoading,
        user,
        login,
        logout,
        register,
    }}>
        {children}
    </FeedbackContext.Provider>;
}

export default FeedbackContext;
