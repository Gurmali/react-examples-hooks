import React, { useState } from 'react'
import UseEffectCounterTime from './UseEffectCounterTime'

function UseEffectCounterContainer() {
    const [display, setDisplay] = useState(true)

  return (
    <div>
        <button onClick={ () => {
            setDisplay(!display)
        }}>
            Toggle Display
        </button>
        {display && <UseEffectCounterTime />}
    </div>
  )
}

export default UseEffectCounterContainer