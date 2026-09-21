// useState() --- Re-renders the component when the state value changes

// useRef() --- "use reference" does not cause re-renders when its value changes.
//              When you want a component to "remember" some information, but you don't
//              want that information to trigger new renders

import React, {useState, useEffect, useRef} from "react";
import styles from './component.module.css';

function Component() {

    const inputRef1 = useRef(0);
    const inputRef2 = useRef(0);
    const inputRef3 = useRef(0);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "lightgreen";
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "lightblue";
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "lightpink";
    }

    return(
        <div className={styles.container}>
            <button onClick={handleClick1}>
                Click Me 1!
            </button> <br />
            <input ref={inputRef1} /> <br />

            <button onClick={handleClick2}>
                Click Me 2!
            </button> <br />
            <input ref={inputRef2} /> <br />

            <button onClick={handleClick3}>
                Click Me 3!
            </button> <br />
            <input ref={inputRef3} />
        </div> 
    );
}

export default Component