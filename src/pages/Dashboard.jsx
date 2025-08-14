import React,{useState} from 'react'
import GeminiApi from '../GeminiApi'
import Meditation from '../components/Meditation'
import SessionLog from '../components/SessionLog'
function Dashboard() {
  const [session,setSession]=useState(0)
  const [totalTime,setTotalTime]=useState(0)
  return (
    <div className='bg-[#FFF4F3]'>
    <GeminiApi />
    <Meditation  setSession={setSession} setTotalTime={setTotalTime} />
    <SessionLog  session={session} totalTime={totalTime}/>
    </div>
  )
}

export default Dashboard