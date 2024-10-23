import {motion} from 'framer-motion';
import FeedBackItem from "./FeedBackItem.jsx";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext.jsx";

const FeedBackList = () => {
    const {feedbacks} = useContext(FeedbackContext);
    if (!feedbacks || feedbacks.length === 0) {
        return <p>Повідомлень немає</p>
    }
    return (
        <div className="feedback-list">
            {feedbacks.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <FeedBackItem  item={item} />
                </motion.div>

                )
            )}
        </div>
    );
};

export default FeedBackList;
