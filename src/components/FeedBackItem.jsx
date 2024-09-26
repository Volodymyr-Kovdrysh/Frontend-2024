import Card from "../shared/Card.jsx";
import {FaTimes} from "react-icons/fa";

const FeedBackItem = ({item}) => {
    return (
        <Card>
            <div className="num-display"> {item.rating}</div>
            <button className="close" onClick={() => {
            }}>
                <FaTimes color="purple"/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

export default FeedBackItem;
