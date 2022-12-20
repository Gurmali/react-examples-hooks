import React, { useState } from 'react'

function UseStateYT() {
    const [ count, setCount] = useState(0)
    
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    </div>
  )
}

export default UseStateYT