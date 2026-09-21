// useContent() ---- React hook that alows you to share values betweeen multiple levels of 
//                      components without passing props through each level

import styles from './components.module.css';
import ComponentD from './ComponentD';
import React,{ useContext } from 'react';
import {UserContext} from './ComponentA.jsx';

function ComponentC() {

    const user = useContext(UserContext);

    return(
        <div className={styles.box}>
            <h1>Component C</h1>
            <h2>{`Welcome ${user}`}</h2>
            <ComponentD />
        </div>
    );

}

export default ComponentC