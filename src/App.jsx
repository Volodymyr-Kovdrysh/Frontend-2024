
import Header from "./components/Header.jsx";
import FeedBackList from "./components/FeedBackList.jsx";
import {useState} from "react";
import FeedbackData from "./data/FeedbackData.js";
import FeedbackStat from "./components/FeedbackStat.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import {v4 as uuidv4} from "uuid";


function App() {
    const [feedbacks, setFeedbacks] = useState(FeedbackData);

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


    return (
    <>
        <Header />
        <div className="container">
            <FeedbackForm handleAdd={addFeedback}/>
            <FeedbackStat feedbacks={feedbacks} />
            <FeedBackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
        </div>

    </>
  )
}

export default App
