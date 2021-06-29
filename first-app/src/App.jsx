import React from 'react';

function App(){
    return (<h2>Two Numbers are 40 and 4</h2>)

}

function add(a,b){
    let sum = a+b;
    return sum;
}
function sub(a,b){
    let ans = a-b;
    return ans;
}

function mul(a,b){
    let ans = a*b;
    return ans;
}

function div(a,b){
    let ans = a/b;
    return ans;
}

export default App;
export {add,sub,mul,div};