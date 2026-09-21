// useContent() ---- React hook that alows you to share values betweeen multiple levels of 
//                      components without passing props through each level

import React,{ useContext } from 'react';
import styles from './components.module.css';
import {UserContext} from './ComponentA.jsx';

function ComponentD() {

    const user = useContext(UserContext);

    return(
        <div className={styles.box}>
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    );

}

export default ComponentD