import React from 'react'

const Board = ({task, index, list, setList}) => {
    const handleDelete = (e) =>{
        e.preventDefault();
        setList(list.filter((_,i) => i !== index))
    }
  return (
    <div className='w-full h-full flex flex-col items-center justify-center text-center text-blue-600'>
    {task}
    <div className='flex pt-5'>
        <button className='flex justify-end bg-red-400 text-teal-100 font-serif px-2 py-2 rounded-lg'
        onClick={handleDelete}>Remove</button>
    </div>
   </div>
  )
}

export default Board