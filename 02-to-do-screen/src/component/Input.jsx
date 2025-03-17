import { useState } from "react"
import React from 'react'
const Input = ({list, setList}) => {
    const [input, setInput] = useState('')
    const handleAddTask = (e) => {
        
        e.preventDefault()
        if(!input){
            console.error("No any input")
            return
        }
        setList([...list, input]);
        setInput("")
    }
  return (
    
        <form action="" className="flex flex-row items-center">
            <input className="border-solid rounded-md py-2 px-2 border-lime-800 text-lg" type="text" 
            placeholder='Add a task'
            value = {input}
            onChange = {(e) => setInput(e.target.value)}/>
            <button className= "font-serif font-semibold text-teal-800 bg-violet-300 border-separate border-double rounded-md border-red-400 py-2 px-2" onClick={handleAddTask}>Add</button>
        </form>
    
  )
}

export default Input