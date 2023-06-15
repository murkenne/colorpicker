import {puppyList} from './data.js'
import { useState } from 'react'
function App() {
 const [puppies, setPuppies] = useState(puppyList); 
 const [featPupId, setFeatPupId] = useState(null);
  
console.log("puppyList: ", puppyList);
  return (
    <div className= "App">
    {puppies.map((puppy) => {
      {()=>{console.log("puppy id: ", puppy.id)}}
    return <p onClick={()=>{}} key={puppy.id}>{puppy.name}</p>;

      })}
    </div>
  );
}

export default App
