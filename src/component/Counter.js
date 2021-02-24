import React, { useContext } from 'react'
import {CountContext} from '../App3'
function Counter() {
  const count = useContext(CountContext)
  return <h2>{count}</h2>
}
export default Counter