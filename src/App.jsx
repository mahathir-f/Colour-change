import { useCallback, useEffect, useState } from 'react'
import "./App.css"
function App() {
  const [length, setlenth] = useState(8);
  const [Number, setNumber] = useState("false");
  const [character, setcharacter] = useState("false");
  const [password, setpassword] = useState("");
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLNMOPQRSTUVWXYZabcdefghijklnmopqrstuvwxyz"
    if (Number) str + "0123456789"
    if(character) str + "!~@#$%-^&*_+|/"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass)
  },[length,Number,character,setpassword])
  useEffect(()=>{
    passwordGenerator()

  },[length,Number,character,setpassword,passwordGenerator])

  return(
    <div className='y' >
    <div className='tx1 grid shadow-4xl place-content-center '>
    <h1 className='tx'>Password Generator</h1>
    <br/>
    <div>
    <input className='pass' type='text'
    value={password}
    placeholder='Password'
    readOnly
    />
    <button className='copy'>copy</button>
    </div>
    <div className=' my-3'>
    <input type="range" min={8}
    max={100} value={length} className=' cursor-pointer'
    onChange={(e)=>{setlenth(e.target.value)}} />
    <label className=' bg-slate-500 rounded-sm p-0.5'>Length:{length}</label>
    </div>
    <div>
    <input type="checkbox" 
    defaultChecked={Number}
    id='numberInput'
    onChange={()=>{setNumber((pev)=> !pev)}}/>
    <label className=' mx-3'>Add Number</label>
    </div>
    <div>
    <input type="checkbox" 
    defaultChecked={character}
    id='numberInput'
    onChange={()=>{setcharacter((pev)=> !pev)}}/>
    <label className=' mx-3'>Add character</label>
    </div>
    </div>
    </div>
  )
}

export default App
