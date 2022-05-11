
import { useState } from 'react';

const randomNumber = Math.trunc(Math.random() * 20 + 1)

const GameLogic = (props) => {
    const [userNumber, setUserNumber] = useState('');
    const [hiddenNumber, setHiddenNumber] = useState(randomNumber);

    const hiddenNumberGenerator = () => {
        setHiddenNumber(Math.trunc(Math.random() * 20 + 1));
        console.log(hiddenNumber);
    };


    const userNumberHandler = (e) => {
        e.preventDefault();
        setUserNumber(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <button onClick={hiddenNumberGenerator}>Generate a Random Number</button>
            <form type='submit'>
                <input
                onChange={userNumberHandler}
                    type='number'
                />
                <button onSubmit={submitHandler}>play</button>
            </form>
        </>
    )
}
export default GameLogic;