// import React from "react";

import { useState } from "react";

function Showdate(){

//    function for return current date
const[curdate,setCurdate] = useState(currentdate());
 
function currentdate(){
    return new Date().toLocaleTimeString();
}

function updatedate(){
    setCurdate(currentdate);
}

// for every one second updatedate() will call through setinterval

setInterval(updatedate,1000)
// console.log(curdate);




return(

    <>
    <h2 style={{color:'white', fontSize:'8rem'}}>{curdate}</h2>
    </>
)


}

export default Showdate;