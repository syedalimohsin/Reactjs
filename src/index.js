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
import Sdata from './Data'

// Simple Component methods

// ReactDOM.render(
//     <>
//         <Card
//             imgsrc="/img/memories.png"
//             title="Songs"
//             sname = "Memories"
//             link="https://youtu.be/PTt4K686tVQ"
//         />
//         <Card
//             imgsrc="/img/alone.jpg"
//             title="Songs"
//             sname = "Alone"
//             link="https://youtu.be/bPs0xFd4skY"
//         />
//         <Card
//             imgsrc="/img/lovely.jpg"
//             title="Songs"
//             sname = "Lovely"
//             link="https://youtu.be/xirk18P889U"
//         />
//         <Card
//             imgsrc="/img/dusktilldawn.jpg"
//             title="Songs"
//             sname = "Dusk till Dawn"
//             link="https://youtu.be/p-eS-_olx9M"
//         />
        

//     </>,
//     document.getElementById('root')
// )


// By Arrays

// ReactDOM.render(
//     <>
//         <Card
//             imgsrc={Sdata[0].imgsrc}
//             title={Sdata[0].title}
//             sname = {Sdata[0].sname}
//             link={Sdata[0].link}
//         />
//         <Card
//             imgsrc={Sdata[1].imgsrc}
//             title={Sdata[1].title}
//             sname = {Sdata[1].sname}
//             link={Sdata[1].link}
//         />
//         <Card
//             imgsrc={Sdata[2].imgsrc}
//             title={Sdata[2].title}
//             sname = {Sdata[2].sname}
//             link={Sdata[2].link}
//         />
//         <Card
//             imgsrc={Sdata[3].imgsrc}
//             title={Sdata[3].title}
//             sname = {Sdata[3].sname}
//             link={Sdata[3].link}
//         />
        

//     </>,
//     document.getElementById('root')
// )

// By Array Map function

function ncard(val){
    return(
        <Card
            key = {val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname = {val.sname}
            link={val.link}
        />
    );
}

ReactDOM.render(
    <>
        {Sdata.map(ncard)}
    </>,
    document.getElementById('root')
)