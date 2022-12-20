import React, {useEffect, useState} from 'react'

function UseEffectCounterTime() {
    const [count, setCount] = useState(0)
    const [time, setTime] = useState(0)

    useEffect(() =>  {
        console.log('count 1 effect')
        document.title = count
    }, [count]
    )

    useEffect(() => {
        console.log('Creating timer')
        const interval = setInterval(() => {
            console.log('Interval executed')
            setTime(time => time +1)
        }, 1000)
        return () => {
            console.log('interval cleared')
            clearInterval(interval)
        }
    }, [])


  return (
    <div>
        <button onClick={() => setCount(count => count + 1)}>
            Increment Count({count})
        </button>
        <h2>Time is {time}</h2>
    </div>
  )
}

export default UseEffectCounterTime