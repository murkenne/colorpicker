import {puppyList} from './data.js'
import { useState } from 'react'
import './path-to-css.css'
function App() {
 const [puppies, setPuppies] = useState(puppyList); 
 const [featPupId, setFeatPupId] = useState(null);
  
console.log("puppyList: ", puppyList);
  return (
    <div className= "App">
    {puppies.map((puppy) => {
      {()=>{console.log("puppy id: ", puppy.id)}}
      onClick={()=>{ setFeatPupId(puppy.id)}}
      const featuredPup = puppies.find((pup)=> pup.id === featPupId)
      console.log(featuredPup);
    return <p onClick={()=>{}} key={puppy.id}>{puppy.name}</p>;
    
      })}
      {featPupId && (
        <div className='main-div'>
          <h2>{featuredPup.name}</h2>
          <ul className='list'>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App
