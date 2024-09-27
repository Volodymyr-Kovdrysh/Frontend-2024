import {useState} from 'react';
import Card from "../shared/Card.jsx";
import Button from "../shared/Button.jsx";
import RatingSelect from "./RatingSelect.jsx";

const FeedbackForm = ({handleAdd}) => {
    const [text, setText] = useState("");
    const [message, setMessage] = useState(null);
    const [rating, setRating] = useState(1);
    const [btnDisabled, setBtnDisabled] = useState(true);

    const handleTextChange = (e) => {

        const {value} = e.target
        // console.log(`'${value}'`, value.length);
        if (value === "") {
            setBtnDisabled(true);
            setMessage(null)
        } else if (value !== '' && value.trim().length < 11) {
            setMessage('Текст повинен містити щонайменше 10 символів')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false);
        }

        setText(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 0) {
            const newFeedback = {
                text: text.trim(),
                rating: rating,
            }

            console.log(newFeedback)
            handleAdd(newFeedback)
            setText('')
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Дайте оцінку нашому курсу</h2>
                <RatingSelect/>
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder={'Напишіть відгук'}
                        value={text}
                    />
                    <Button
                        type={'submit'}
                        isDisabled={btnDisabled}
                    >Надіслати</Button>
                </div>

                {message && <div className="message">{message}</div>}

            </form>
        </Card>
    );
};

export default FeedbackForm;
