

// function with props

export default function Propfun(prop){

     return(

        <div className="empdetails">
            <h2>Name : {prop.name}</h2>
            <h2>Age  : {prop.age}</h2>
            <h2>Place: {prop.place}</h2>
        </div>
     )

}