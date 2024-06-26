import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    <div className='min-w-screen min-h-screen bg-neutral-800 overflow-x-hidden'>
      <h1 className='bg-zinc-900 mt-10 h-9 w-full uppercase text-[#F0EBE3] text-xl font-bold flex items-center justify-center'>Random GIF</h1>
      <div className='flex items-center justify-center flex-col '>
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App
