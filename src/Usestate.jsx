import { useState } from "react";

function Usestatefun() {
    const[val,setVal] = useState(10);
    function incre(){
        setVal(val+1)
        console.log("incre");
    }

    function triple(){
        setVal(val=>val+3)
  
    }
    return(
       
       
        <>
         <h2> you have cliked {val}</h2>
         <h2> the value you have clicked is {val%2==0? 'even':'odd'}</h2>
         <button onClick={incre}>add</button>
         <button onClick={triple}>triple</button>
        </>
    )
     
}

export default Usestatefun;
