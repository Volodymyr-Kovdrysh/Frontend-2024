import {createContext, useState} from "react";
import FeedbackData from "../data/FeedbackData.js";
import {v4 as uuidv4} from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {


    const [feedbacks, setFeedbacks] = useState(FeedbackData);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const deleteFeedback = (id) => {
        if(window.confirm('Ви впевнені, що хочете видалити цей важливий відгук??')
        ){
            setFeedbacks(feedbacks.filter(msg => msg.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedbacks([newFeedback, ...feedbacks])
    }

    const updateFeedback = (id, updItem) => {
        setFeedbacks(feedbacks.map(item => item.id === id ? {...item, ...updItem } : item))
        setFeedbackEdit({
            item: {},
            edit: false,
        })
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
        feedbackEdit
    }}>
        {children}
    </FeedbackContext.Provider>;
}

export default FeedbackContext;
