import React from 'react'
import {FaDotCircle} from 'react-icons/fa'

const Status = ({status}) => {
  return (
  <>
  
  {status == "active" &&  <div className='flex text-green-800 gap-3 items-center'><FaDotCircle/> {status}</div>}
  {status == "pending" &&  <div className='flex text-yellow-800 gap-3 items-center'><FaDotCircle/> {status}</div>}
  {status == "suspended" &&  <div className='flex text-red-800 gap-3 items-center'><FaDotCircle/> {status}</div>}
  
  </>
  )
}

export default Status