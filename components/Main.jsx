import React from 'react'
import LeftM from "./LeftM"
import RightM from "./RightM"
const Main = () => {
  return (
    <span className='flex justify-between'>
        <LeftM/>
        <RightM/>
    </span>
  )
}

export default Main