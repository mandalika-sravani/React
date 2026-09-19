// useEffect() -- React Hook that tells React useEffect(function, [dependencies])
//    Uses - Event Listeners, DOM Manipulation, Subscriptions, Fetching Data from API

import React, {useEffect, useState} from "react";

function EffectComponent() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added");
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} * ${height}`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerWidth);
    }

    return(<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>)
}

export default EffectComponent