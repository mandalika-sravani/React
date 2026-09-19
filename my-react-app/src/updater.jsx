// updater function --- A function passed an argument to setState() usually
//                      Allow for safe updates based on the previous state 
//                      Used with multiple state updates and asynchronous functions 

import React, {useState} from "react";

function MyUpdateComponent () {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(c => c + 1);
        setCount(c => c + 1);
        //setCount(c => c + 1);
    }

    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
       // setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="count-button" onClick={decrement}>Decrement</button>
            <button className="count-button" onClick={reset}>Reset</button>
            <button className="count-button" onClick={increment}>Increment</button>
        </div>
    );
}

export default MyUpdateComponent