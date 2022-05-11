
import { useState } from 'react';

const GameLogic = (props) => {
    const [userNumber, setUserNumber] = useState('');
    const [hiddenNumber, setHiddenNumber] = useState('')

    const hiddenNumberGenerator = () => {
        setHiddenNumber(Math.trunc(Math.random() * 20 + 1));
        console.log(hiddenNumber);
    };


    const userNumberHandler = (e) => {
        e.preventDefault();
        setUserNumber(e.target.value)

    }

    return (
        <>
            <button onClick={hiddenNumberGenerator}>Generate a Random Number</button>
            <form type='submit'>
                <input
                onChange={userNumberHandler}
                    type='number'
                />
                <button>play</button>
            </form>
        </>
    )
}
export default GameLogic;