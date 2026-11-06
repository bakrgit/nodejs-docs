import { useEffect, useRef, useState } from 'react'
import Icon from '../ui/Icon'

export default function PlaygroundEngine({ config, children }) {
  const [running, setRunning] = useState(false)
  const [states, setStates] = useState([])
  const timers = useRef([])

  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = [] }
  useEffect(() => clearTimers, [])

  const run = () => {
    if (running) return
    clearTimers(); setRunning(true)
    config.frames.forEach((frame, index) => {
      timers.current.push(setTimeout(() => {
        setStates(frame.states)
        if (index === config.frames.length - 1) setRunning(false)
      }, frame.delay))
    })
  }

  const reset = () => { clearTimers(); setRunning(false); setStates([]) }

  return <div className="playground-engine">
    {children?.({ running })}
    <div className="demo"><div><div><b>{config.title}</b><p>{config.description}</p></div><div className="playground-actions"><button onClick={run} disabled={running}><Icon name="play"/>{running ? 'جاري التشغيل' : 'شغّل المحاكاة'}</button><button className="secondary-action" onClick={reset} disabled={!states.length}>إعادة</button></div></div>{states.length > 0 && <div className="results">{config.labels.map((label,index)=><span className={states[index]?.includes('✓')?'success':''} key={label}><code>{label}</code><b>{states[index]}</b></span>)}</div>}</div>
  </div>
}
