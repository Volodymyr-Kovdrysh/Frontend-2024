import {useContext, useEffect, useState} from 'react';
import FeedbackContext from "../context/FeedbackContext.jsx";


const RatingItem = ({nmbr, handlCh, selected}) => {
    return (
        <li>
            <input
                type="radio"
                id={`num${nmbr}`}
                value={`${nmbr}`}
                onChange={handlCh}
                checked={selected === nmbr}
            />
            <label htmlFor={`num${nmbr}`}>{nmbr}</label>
        </li>
    )
}

const RatingSelect = ({select}) => {
    const {feedbackEdit} = useContext(FeedbackContext)
    const [selected, setSelected] = useState(10);

    useEffect(()=>{
        if(feedbackEdit.edit === true) setSelected(+feedbackEdit.item.rating)
    },[feedbackEdit])

    const handleChange = e => {
        // console.log(e.currentTarget.value, typeof e.currentTarget.value);
        setSelected(Number(e.currentTarget.value));
        select(+e.currentTarget.value);
    }
    return (
        <ul className='rating'>
            {[1,2,3,4,5,6,7,8,9,10].map(i => <RatingItem key={i}
                                                         nmbr={i}
                                                         selected={selected}
                                                         handlCh={handleChange} />)}
        </ul>
    );
};

export default RatingSelect;
