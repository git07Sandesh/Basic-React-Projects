
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval;
    if (running)
    {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      },10);
    } else if (!running)
    {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[running])
  return (
    <div className="flex flex-col items-center justify-center m-2 py-8">
     <h1 className=' text-2xl font-serif font-bold p-3'>01-StopWatch</h1>
     <div className='text-lg font-serif font-semibold p-2 space-x-1'>
      <span className=''>{("0" + Math.floor(time / 3600000) % 60).slice(-2)}:</span>
      <span>{("0" + Math.floor(time / 60000) % 60).slice(-2)}:</span>
      <span>{("0" + Math.floor(time / 1000) % 60).slice(-2)}:</span>
      <span>{("0" + (time / 10)%100).slice(-2)}</span>
     </div>
     <div className='flex justify-around m-1 p-2'>
      {!running ?
     <button 
      className="border-solid border-2 border-red-400 rounded-lg m-1 p-1"
        onClick={() => setRunning(true)}>
          Start
      </button>: 
     <button className="border-solid border-2 border-red-400 rounded-lg m-1 p-1" onClick={() => setRunning(false)}>Stop</button>
    }
      
      <button className="border-solid border-2 border-red-400 rounded-lg m-1 p-1" onClick={() => {
          setTime(0);
          setRunning(false);  
        }}>Reset</button>
     </div>
    </div>
  );
}

export default App;
