// click event --- An interaction when a user clicks on a specific element. The clicks 
//                  can be responded by passing a callback to the onClick event handler

import styles from './Button.module.css'

function Button() {

    const handleClick = (e) => e.target.textContent = "OUCH!";

    return (
        <button className={styles.button} 
                onClick={(e) => handleClick(e)}>Click Me! 😃</button>
        

    );
}

function ProfilePicture() {

    const imgUrl = './src/assets/unnamed.jpg';
    const handleClick = (e) => e.target.style.display = "none";

    return (
        <img src = {imgUrl} onClick={(e) => handleClick(e)}></img>
    );
}

export default Button
export { ProfilePicture }