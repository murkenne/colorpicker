import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className= 'App'>
      <Button count={count} setCount= {setCount}/>
      <p> You clicked{count}times</p>
      <button onClick={()=> setCount(count+1)}>Click me</button>
    </div>
    </>
  )
}

function Button(props){
   console.log("Props: ", props)
  return (
    <button
      onClick={() => {
        props.setCount(props.count);
      }}
    >
    
    </button>
  );
}
export default App
