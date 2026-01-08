import React, { useState } from "react";




function HookApp() {
    var [counter, setCounter] = useState(0);



    function incrementCounter() {

        setCounter(counter + 1);
    }
    function decrementCounter() {
        setCounter(counter - 1);
    }

    return <div className="container">
        <h1>{counter}</h1>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>

    </div>;
}


export default HookApp;