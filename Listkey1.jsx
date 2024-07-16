

function Listkey1(){


     const people = [
      {name:"arun",age:20,
        skill:[
            {name:"reactjs",type:'backend'},
            {name:"node",type:'frontend'},
            {name:"express",type:'backend'},

        ]
      },
      {name:"raju",age:21,
        skill:[
            {name:"devips",type:'backend'},
            {name:"git",type:'frontend'},
            {name:"github",type:'backend'},

        ]
      },
      {name:"arun",age:20,
        skill:[
            {name:"html",type:'backend'},
            {name:"css",type:'frontend'},
            {name:"javascript",type:'backend'},

        ]
      }

     ]



  let styleforskill ={
    color:'white',margin:'2rem 2rem 2rem 0',
    fontSize:'1rem',border:'2px solid white'
  }
    return(
        <>
        <div className="app">
         
         {people.map((person,ind)=>
           
           <div key={ind}>
              <h2 style={{color:'yellow'}}>{person.name}</h2>
            <div className="skillsection" style={styleforskill}>
                {person.skill.map((skill,ind)=>
                
                <p key={ind}>Skill name :{skill.name} and type :{skill.type}</p>)}
                
                </div>  
      </div>  )}
         



        </div>
        </>
    )
} 
    
export default Listkey1