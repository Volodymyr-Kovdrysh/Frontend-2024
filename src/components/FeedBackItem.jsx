import Card from "../shared/Card.jsx";
import {FaEdit, FaTimes} from "react-icons/fa";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext.jsx";

const FeedBackItem = ({item}) => {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    // const handlerClick = (item) => {
    //     console.log("Буде видалено", item)
    // }


    return (
        <Card>
            <div className="num-display"> {item.rating}</div>
            <button className="close" onClick={() => deleteFeedback(item.id)}>
                <FaTimes color="purple"/>
            </button>
            <button className="edit" onClick={() => {
                editFeedback(item)
            }}>
                <FaEdit color={'purple'}/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

export default FeedBackItem;
