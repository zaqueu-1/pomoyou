import React, {useState} from 'react'
import { useEffect } from 'react';
import './timer.css'
import { FaPause, FaPlay } from 'react-icons/fa'

function Timer() {

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(25)
  const [start, setStart] = useState(false)
  const [chosenMode, setChosenMode] = useState('pomodoro')
  var timer;
  let currentTimer = (minutes<10?'0'+minutes:minutes)+':'+(seconds<10?'0'+seconds:seconds);

  useEffect(() => {
    document.title = currentTimer;
  },[currentTimer])

  useEffect(() => {

    if (start) {
    timer = setInterval(() => {
      setSeconds(seconds => seconds - 1);
        
      if (seconds === 0 && minutes > 0) {
        setMinutes(minutes => minutes - 1);
        setSeconds(59);
      }

      if (seconds === 0 && minutes === 0 && chosenMode != 'pomodoro') {
        clearInterval(timer);
        setChosenMode('pomodoro')
        setStart(false);
        setMinutes(25);
        setSeconds(0);
      } else if (seconds === 0 && minutes === 0 && chosenMode === 'pomodoro') {
        clearInterval(timer);
        setChosenMode('short')
        setStart(false);
        setMinutes(5);
        setSeconds(0);
      }

    }, 1000)

    return () => clearInterval(timer);
  }
})

  const handleTimer = () => {
    setStart(true);

    if(start) {
      clearInterval(timer);
      setStart(false);
    }
  }

  const switchMode = (mode) => {

    switch (mode) {
      case 'pomodoro':
        clearInterval(timer);
        setChosenMode('pomodoro')
        setStart(false);
        setMinutes(25);
        setSeconds(0);
        break;
      case 'short':
        clearInterval(timer);
        setChosenMode('short')
        setStart(false);
        setMinutes(5);
        setSeconds(0);
        break;
      case 'long':
        clearInterval(timer);
        setChosenMode('long')
        setStart(false);
        setMinutes(15);
        setSeconds(0);
        break;
      default:
        break;
    }
  }


  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className='container'>
            <div className="mode">
              <button className={chosenMode === 'pomodoro' ? 'active' : 'mode-btn'} onClick={() => switchMode('pomodoro')}>POMODORO</button>
              <button className={chosenMode === 'short' ? 'active' : 'mode-btn'} onClick={() => switchMode('short')}>CURTO</button>
              <button className={chosenMode === 'long' ? 'active' : 'mode-btn'} onClick={() => switchMode('long')}>LONGO</button>
            </div>

            <h1 className='timer'>{currentTimer}</h1>
            <button className={start ? 'pause-color' : 'start-color'} onClick={handleTimer}>
              {start ? <FaPause className='icon'/> : <FaPlay className='icon'/>} 
              {start ? 'PAUSAR' : 'INICIAR'}
            </button>
        </div>
    </div>

  )
}

export default Timer