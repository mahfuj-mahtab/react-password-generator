import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [isNum, setisNum] = useState(false)
  const [isChar, setisChar] = useState(false)
  const [password, setPassword] = useState('')
  const passwordGenarator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(isNum) str+= '1234567890'
    if(isChar) str+= '!@#$%^&*()_+-='
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str[char]
    }
    setPassword(pass)

  },[length,isNum,isChar,setPassword])
  useEffect(()=>{
    passwordGenarator()
  },[isNum,isChar,length,passwordGenarator])
  return (
    <>
    <h1 className='h1'>Password Generator</h1>
    <input className='input' type="text" value={password} placeholder='Password' readOnly/> <button>Copy</button> <br />
    <input type="range" name="" id="" min={3} max={100} value={length} onChange={(e)=>{setLength((a)=>(e.target.value))}}/> <p>Length : {length}</p> 
    <p> <input type="checkbox" name="" id="" defaultChecked={isNum} onChange={()=>{setisNum((prev)=>(!prev))}} /> 
    Number</p>
    <p> <input type="checkbox" name="" id="" defaultChecked={isChar} onChange={()=>{setisChar((prev)=>(!prev))}} /> 
    Char</p>
    </>
  )
}

export default App
