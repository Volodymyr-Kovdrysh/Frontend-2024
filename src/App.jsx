
import Header from "./components/Header.jsx";
import FeedBackList from "./components/FeedBackList.jsx";
import {useState} from "react";
import FeedbackData from "./data/FeedbackData.js";
import FeedbackStat from "./components/FeedbackStat.jsx";


function App() {
    const [feedbacks, setFeedbacks] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if(window.confirm('Ви впевнені, що хочете видалити цей важливий відгук??')
        ){
            setFeedbacks(feedbacks.filter(msg => msg.id !== id))
        }
    }



    return (
    <>
        <Header />
        <div className="container">
            <FeedbackStat feedbacks={feedbacks} />
            <FeedBackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
        </div>

    </>
  )
}

export default App
