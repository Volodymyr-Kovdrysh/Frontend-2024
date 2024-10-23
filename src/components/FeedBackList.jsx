import {motion} from 'framer-motion';
import FeedBackItem from "./FeedBackItem.jsx";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext.jsx";
import Spinner from "../shared/Spinner.jsx";

const FeedBackList = () => {
    const {feedbacks, isLoading} = useContext(FeedbackContext);
    if (!isLoading && (!feedbacks || feedbacks.length === 0)) {
        return <p>Повідомлень немає</p>
    }


    return isLoading ? <Spinner/>: (
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
