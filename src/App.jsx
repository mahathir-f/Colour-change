import { useState } from 'react'
function App() {
  const [color, setcolor] = useState("#ffafcc")
  return(
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}>
    <div className="flexed flex  justify-center
      top-14 inset-x-0 px-2">
    <div className='flexed flex 
     justify-center gap-3 shadow-lg bg-slate-500 px-3 py-3 rounded-lg'>
     <button className=' outline-none px-4 top-10 rounded-lg'
     style={{backgroundColor:"skyblue"}} onClick={()=> setcolor("skyblue")}>skyblue</button>
     <button className=' outline-none px-4 top-10 rounded-lg'
     style={{backgroundColor:"gray"}}  onClick={()=> setcolor("gray")}>gray</button>
     <button className=' outline-none px-4 top-10 rounded-lg'
     style={{backgroundColor:"purple"}}  onClick={()=> setcolor("purple")}>purple</button>
     <button className=' outline-none px-4 top-10 rounded-lg'
     style={{backgroundColor:"#a3b18a"}}  onClick={()=> setcolor("#a3b18a")}>green</button>


    </div>
    </div>
    </div>

  )
}

export default App
