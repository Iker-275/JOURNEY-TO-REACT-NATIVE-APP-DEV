import React, { useState } from "react";




function HookPractise() {
let time = new Date().toLocaleTimeString();

    var [counter, setCounter] = useState(time);

console.log(time);

    function getTime() {
        let time = new Date().toLocaleTimeString();
        setCounter(time);
    }
    return <div className="container">
        <h1>{counter}</h1>
        <button onClick={getTime}>GET TIME</button>

    </div>;
}


export default HookPractise;