import React, {useRef, useState,useEffect} from 'react';
function Example() {
  const inputEl = useRef(null)
  const onButtonClick=()=>{
    inputEl.current.value = 'Hello,useRef'
  }
  const [text,setText] = useState('jsbin')
  const textRef = useRef()
  useEffect(()=>{
    textRef.current = text
    console.log('textRef.current',textRef.current)
  })
  return (
    <>
      {/* 保存input的ref到inputEl */}
      <input type="text" ref={inputEl}/>
      <button onClick={onButtonClick}>在input上展示文字</button>
      <br/>
      <br/>
      <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
    </>
  )
}
export default Example