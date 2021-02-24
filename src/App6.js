import React, {useState, useMemo} from 'react';

function ChildComponent({name,children}) {
  function changeXiaohong(name) {
    console.log('她来了，她来了。小红向我们走来了')
    return `${name},小红向我们走来了` 
  }
  const actionXiaohong = useMemo(()=>changeXiaohong(name),[name])
  return (
    <div>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </div>
  )
}
function Example() {
    const [xiaohong,setXiaohong] = useState('小红待吃冰淇淋状态')
    const [xiaojun,setXiaojun] = useState('小军待吃冰淇淋状态')
    return (
      <div>
        <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
        <button onClick={()=>{setXiaojun(new Date().getTime()+',小军向我们走来了')}}>小军</button>
        <ChildComponent name={xiaohong}>{xiaojun}</ChildComponent>
      </div>
    )
}

export default Example