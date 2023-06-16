import {puppyList} from './data'
import { useState } from 'react'
import './path-to-css.css'

function App() {
 const [puppies, setPuppies] = useState(puppyList); 
 const [featPupId, setFeatPupId] = useState(null);

 const handleClick = (id) => {
}

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup);

//console.log("puppyList: ", puppyList);

  return (
    <div className= "App">
    {
    puppies.map((puppy) => {
      
     // onClick={()=>{setFeatPupId(puppy.id)}}
       return <p 
            
              onClick={()=>{}} key={puppy.id}>{puppy.name}</p>;
    
      })}

      {featPupId && (
        <div className='feature-pup'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App
