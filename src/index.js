import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
// import App, { add,sub,mul,div } from './App';

// ReactDOM.render(
//     <>
//         <App />,
//         <ul>
//             <li>The addition is: {add(40, 4)}</li>
//             <li>The subtraction is: {sub(40, 4)}</li>
//             <li>The multiplication is: {mul(40, 4)}</li>
//             <li>The division is: {div(40, 4)}</li>
//         </ul>

//     </>,
//     document.getElementById('root')
// )

import Card from './Card';

ReactDOM.render(
    <>
        <Card
            imgsrc="/img/memories.png"
            title="Songs"
            sname = "Memories"
            link="https://youtu.be/PTt4K686tVQ"
        />
        <Card
            imgsrc="/img/alone.jpg"
            title="Songs"
            sname = "Alone"
            link="https://youtu.be/bPs0xFd4skY"
        />
        <Card
            imgsrc="/img/lovely.jpg"
            title="Songs"
            sname = "Lovely"
            link="https://youtu.be/xirk18P889U"
        />
        <Card
            imgsrc="/img/dusktilldawn.jpg"
            title="Songs"
            sname = "Dusk till Dawn"
            link="https://youtu.be/p-eS-_olx9M"
        />
        

    </>,
    document.getElementById('root')
)