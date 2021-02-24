import React from 'react';
import Buttons from './Example/Buttons'
import ShowArea from './Example/showArea'
import { Color } from './Example/color'
function Example() {
  return (
      <div>
          <Color>
            <ShowArea></ShowArea>
            <Buttons></Buttons>
          </Color>
      </div>
  )
}
export default Example