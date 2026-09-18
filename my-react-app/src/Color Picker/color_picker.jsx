// COLOR PICKER

import styles from './color_picker.module.css';
import React, {useState} from "react";


function ColorPicker() {

    const [color, selector] = useState("#FFFFFF");

    function handleChangeColor(event) {
        selector(event.target.value);
    }

    return( 
        <div className={styles.container}>
            <h1>Color Picker</h1>
            <div className={styles.colorDisplay} style={{backgroundColor : color}}>
                <p>Selected Color : {color}</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleChangeColor} />

        </div>);

}

export default ColorPicker