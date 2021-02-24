import React, { useState } from 'react';

// React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序

function Example() {
  const [ age, setAge ] = useState(22)
  const [ sex, setSex ] = useState('男')
  const [ work, setWork ] = useState('前端程序员')
  return (
    <div>
      <p>JSBin 今年：{age}岁</p>
      <p>性别：{sex}</p>
      <p>工作是：{work}</p>
    </div>
  )
}
export default Example