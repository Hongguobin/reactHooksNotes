import React, { useState, createContext } from 'react';
import Counter from './component/Counter'
export const CountContext = createContext({})

function Example4() {
  const [ count, setCount ] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
      <CountContext.Provider value={count}>
        <Counter></Counter>
      </CountContext.Provider>
    </div>
  )
}

export default Example4