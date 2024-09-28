import {useState} from 'react';


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
    const [selected, setSelected] = useState(10);
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
            {/*<li>*/}
            {/*    <input*/}
            {/*        type="radio"*/}
            {/*        id='num1'*/}
            {/*        value={'1'}*/}
            {/*        onChange={handleChange}*/}
            {/*        checked={selected === 1}*/}
            {/*    />*/}
            {/*    <label htmlFor="num1">1</label>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <input*/}
            {/*        type="radio"*/}
            {/*        id='num2'*/}
            {/*        value={'2'}*/}
            {/*        onChange={handleChange}*/}
            {/*        checked={selected === 2}*/}
            {/*    />*/}
            {/*    <label htmlFor="num2">2</label>*/}
            {/*</li>*/}
        </ul>
    );
};

export default RatingSelect;
