import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    </>
  )
}

function HeaderWithButton(){
  const [title,setTitle] = useState("Original Title")

  function HandleOnClick(){
    setTitle("Title changed to "+Math.random())
  }

  return <div>
    <button onClick={HandleOnClick}>Click here to change title</button>
    <Header title={title}></Header>
  </div>
}

function Header({title}){
  return <div>
    {title}
  </div>
}
export default App
