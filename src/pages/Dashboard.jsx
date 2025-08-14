import React,{useState} from 'react'
import GeminiApi from '../GeminiApi'
import Meditation from '../components/Meditation'
import SessionLog from '../components/SessionLog'
function Dashboard() {

  return (
    <div className='bg-[#FFF4F3]'>
    <GeminiApi />
    <Meditation />
    <SessionLog />
    </div>
  )
}

export default Dashboard