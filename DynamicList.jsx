import {useState} from 'react'

function DynamicList(){
 const[count,setCount] = useState(1);
 const[item,setItem] = useState([]);

 function additem(){
     setItem([...item, `item - ${count}`])
setCount(count+1)
 }

 
 

 return (
<>

  <ul>
    {item.map((item)=>{
        return <li key={item.toString()} onClick={(e)=>{
          e.target.remove()
        }}> {item}</li>
    })}

  </ul>
<button onClick={additem}>ADD item{count}</button>

</>

 )
}

export default DynamicList;
