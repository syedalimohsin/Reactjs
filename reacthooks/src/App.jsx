import React, { useState } from 'react';
import "./style.css";


const App = () => {
    // let count = 0;
    // var incremented;
    const [count, setCount] = useState(0);
    const IncNum = () => {
        console.log("Clicked");
        setCount(count +1);
        // count = incremented;
    };
    return (
        <>
            <h1> {count} </h1>
            <button className="button1" onClick={IncNum}> Click me</button>
        </>
    );
};

export default App;