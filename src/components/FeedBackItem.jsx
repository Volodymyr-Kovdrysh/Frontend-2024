import Card from "../shared/Card.jsx";
import {FaTimes} from "react-icons/fa";

const FeedBackItem = ({item, handleDelete}) => {
    // const handlerClick = (item) => {
    //     console.log("Буде видалено", item)
    // }


    return (
        <Card>
            <div className="num-display"> {item.rating}</div>
            <button className="close" onClick={() => handleDelete(item.id)}>
                <FaTimes color="purple"/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

export default FeedBackItem;
