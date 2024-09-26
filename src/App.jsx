
import Header from "./components/Header.jsx";
import FeedBackList from "./components/FeedBackList.jsx";
import {useState} from "react";
import FeedbackData from "./data/FeedbackData.js";
import FeedbackStat from "./components/FeedbackStat.jsx";


function App() {
    const [feedbacks, setFeedbacks] = useState(FeedbackData);





    return (
    <>
        <Header />
        <div className="container">
            <FeedbackStat feedbacks={feedbacks} />
            <FeedBackList feedbacks={feedbacks}/>
        </div>

    </>
  )
}

export default App
