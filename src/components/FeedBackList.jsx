import FeedBackItem from "./FeedBackItem.jsx";

const FeedBackList = ({feedbacks}) => {
    if (!feedbacks || feedbacks.length === 0) {
        return <p>Повідомлень немає</p>
    }
    return (
        <div className="feedback-list">
            {feedbacks.map((item) => (
                    <FeedBackItem key={item.id} item={item} />
                )
            )}
        </div>
    );
};

export default FeedBackList;
