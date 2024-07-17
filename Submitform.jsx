import { useState } from "react";

import './index.css'

function Submitform(){
    
 const[input,setInput] =useState({
    email:"@gmail.com",
    phone:'+91'
 })

function handleSubmit(e){
    e.preventDefault();
    console.log("SUBMITED FORM");
    // console.log(input);
    
 
}

function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setInput((prev)=>{
        return{...prev,[name]:value}
    })

    
    
    
}

    return (
        <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name : <input type="text" onChange={handleChange} name='name' value={input.name}  />
          </label><br />

          <label htmlFor="age">
            age : <input type="text" onChange={handleChange} name="age"  />
          </label><br />

          <label htmlFor="email">
            Email : <input type="text" onChange={handleChange} name='email' value={input.email} />
          </label><br /><br />

          <label htmlFor="number">
            Phone : <input type="text" onChange={handleChange} name='phone' value={input.phone} />
          </label><br /><br />
          
          <button type="submit">Submit</button>

        </form>
        </>
    )
 

}

export default Submitform;