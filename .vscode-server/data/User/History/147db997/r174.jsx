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
      {props.count}
    </button>
  );
}
export default App
