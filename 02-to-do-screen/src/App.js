import { useState } from "react";
import Input from "./component/Input";
import './index.css';
import Board from "./component/Board";

function App() {
  const [list, setList] = useState([])
  return (
  <div className="flex flex-col items-center justify-center m-1 p-1">
    <h1 className=" font-serif font-extrabold text-teal-500 text-2xl m-1 p-1">02 - To Do Screen</h1>
   <Input list={list} setList={setList} />
   
   <div className="grid grid-cols-3 gap-7 w-full h-full px-5 py-5 sm:p-10 md:p-14">
   {list.map((task, index) => <Board key={index} index={index} task={task} list={list} setList={setList}/>
    )} 
    </div> 
   </div>
   

  );
}

export default App;
