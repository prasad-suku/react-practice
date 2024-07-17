import { useState } from "react";


export default function Cardetails() {
    const [car, setCar] = useState(
        {
            name: "ferrari",
            color: "red",
            type: "four wheel",
            year: 2000
        })


        console.log(car.color);

      function changeColor(){
        setCar((prev)=>{
            return {...prev,color:'green'}})
      }

        return (
            <>
            <p>Name : {car.name}</p>
            <p>color : {car.color}</p>
            <p>type : {car.type}</p>
            <p>year : {car.year}</p>
            <button onClick={changeColor}>Change color</button>
            </>
        )
}

