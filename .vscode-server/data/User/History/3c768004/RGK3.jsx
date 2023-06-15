import {puppyList} from './data.js'
import { useState } from 'react'
function App() {
 const [puppies, setPuppies] = useState(puppyList); 
  
console.log("puppyList: ", puppyList);
  return (
    <>
    {
      puppies.map((puppy) => {
        return <p>{puppy.name}</p>
      })
    }
    
    </>
  )
}

export default App
