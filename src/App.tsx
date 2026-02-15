import './App.css'
import { Button } from './components/ui/Button'
import { useState } from 'react'
import { PlusIcon } from './Icons/PlusIcon'

function App() {

 const [count ,setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center items-center flex-col h-screen gap-2'>
       <h1 className="text-3xl font-bold  text-center ">
        {count}
      </h1>
      <div className='flex justify-center gap-2'>
        <Button onClick={()=>{setCount(count+1)}} variant='primary' size='md' text='Count' startIcon={<PlusIcon size='md'/>}/>
      </div>
    </div>
    </>
  )
}

export default App
