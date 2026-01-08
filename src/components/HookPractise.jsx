import React, { useState } from "react";




function HookPractise() {
let time = new Date().toLocaleTimeString();

    var [counter, setCounter] = useState(time);


    function realTime() {
        setInterval(getTime, 1000);
    }
    function getTime() {
        let time = new Date().toLocaleTimeString();
        setCounter(time);
    }
    return <div className="container">
        <h1>{counter}</h1>
        <button onClick={realTime}>GET TIME</button>

    </div>;
}


export default HookPractise;