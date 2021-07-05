import React, { useState } from 'react'
import KeepAlive, { AliveScope } from 'react-activation'
// import { autoFixContext } from 'react-activation'
// import * as jsxRuntime from 'react/jsx-runtime'
// import * as jsxDevRuntime from 'react/jsx-dev-runtime'
// autoFixContext(
//   [jsxRuntime, 'jsx', 'jsxs', 'jsxDEV'],
//   [jsxDevRuntime, 'jsx', 'jsxs', 'jsxDEV']
// )

// const NotFound = (props) => {
//   return (
//     <div>
//       <div>404 Page</div>
//       <div>{props.location.pathname}</div>
//     </div>
//   )
// }

// const DecoratorCom = (TargetCom) => () => <TargetCom/>


function Counter() {
  const [count, setCount] = useState(1)

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => {
        setCount(count => count + 1)
        console.log('click ......')
        }}>Add+1</button>
    </div>
  )
}

function Test() {
  const [show, setShow] = useState(true)

  return (
    <AliveScope>
      <div>
        <button onClick={() => setShow(show => !show)}>Toggle</button>
        {show && (
          <KeepAlive>
            <Counter />
          </KeepAlive>
        )}
      </div>
    </AliveScope>
  )
}

export default Test