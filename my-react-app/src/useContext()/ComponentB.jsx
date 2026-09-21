// useContent() ---- React hook that alows you to share values betweeen multiple levels of 
//                      components without passing props through each level

import styles from './components.module.css';
import ComponentC from './ComponentC';
import React,{ useContext } from 'react';
import {UserContext} from './ComponentA.jsx';

function ComponentB() {

    const user = useContext(UserContext);

    return(
        <div className={styles.box}>
            <h1>Component B</h1>
            <h2>{`${user} Let's go ahead`}</h2>
            <ComponentC />
        </div>
    );

}

export default ComponentB