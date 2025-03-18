import { useEffect, useState } from 'react'

function App() {
  const [time, setTime] = useState(0)
  const [hour, setHour] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [intervalId, setIntervalId] = useState(0)

  useEffect(() => {
    updateTime();
  },[time])
  const handleHours = (e) =>{
    e.preventDefault();
    const hourTime = e.target.value * 1000 * 60 * 60; 
    setTime(time + (hourTime))
  }
  const handleMinutes= (e) =>{
    e.preventDefault();
    const minuteTime = e.target.value * 1000 * 60; 
    setTime(time + (minuteTime))
  }
  const handleSeconds = (e) =>{
    e.preventDefault();
    const secondTime = e.target.value * 1000; 
    setTime(time + (secondTime))
  }
  const handleStartTimer = (e) => {
    e.preventDefault();
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if(prevTime <= 1000) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1000
      })
    }, 1000)
    setIntervalId(interval);
  }

  const updateTime = () => {
    setHour(Math.floor(time / 1000 /60 /60) % 24) 
    setMin(Math.floor(time / 1000 / 60) % 60);
    setSec(Math.floor(time / 1000 ) % 60);
  }
  
  const handleStopTimer = (e) => {
    clearInterval(intervalId)
  }
  const handleReset = () => {
    setTime(0);
  }
  console.log(time);

  return (
    <>
      <div>
           03 - Timer App 
           <div>
            <select id="hours" onChange={handleHours}>
              { Array.from({length:24}, (_,i) => (
                <option key={i} value={i}>{i}</option>
              ))
              }
            </select>
            <select id="minutes" onChange={handleMinutes}>
              {
                Array.from({length:60}, (_, i) => (
                  <option key={i} value={i}>{i}</option>
                ))
              }
            </select>
            <select id="seconds" onChange={handleSeconds}>
            {
                Array.from({length:60}, (_, i) => (
                  <option key={i} value={i}>{i}</option>
                ))
              }
            </select>
           </div>

          <div>
            <span>{hour}:{min}:{sec}</span>
            <button onClick={handleStartTimer}>Start</button>
            <button onClick={handleStopTimer}>Stop</button>
            <button onClick={handleReset}>Reset</button>
          </div>
      </div>
    </>
  )
}

export default App
