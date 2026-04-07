import { Button } from '../components/ui/Button'
import { PlusIcon } from '../components/Icons/PlusIcon'
import { Card } from '../components/ui/Card'
import { ShareIcon } from '../components/Icons/ShareIcon'
import { CreateContentModel } from '../components/ui/CreateContentModel'
import { useState } from 'react'
import { SideBar } from '../components/ui/SideBar'




export const DashBoard = () =>{
    const [ModelOpen ,SetModelOpen] = useState(false)
      return (
        <div  >
      <SideBar></SideBar>
      <div className='p-4 ml-72 bg-blue-50 min-h-screen'>
         <CreateContentModel open = {ModelOpen} onClose={()=>{
          SetModelOpen(false) 
         }}/>
        <div className='flex justify-end gap-2'>
              <Button variant='secondary' size='md' text='Share Brain' startIcon={<ShareIcon size='md'/>} ></Button>
          <Button variant='primary' size='md' text='Add Content' startIcon={<PlusIcon size='md'/>} onClick={()=>{
            SetModelOpen(true)
          }} ></Button>
        </div>
    
        <div  className='p-6 flex  gap-2 '>
         <Card title='Naukri' type='twitter' link='https://x.com/lets_dig_deeper/status/2041112315878363523'/>
          <Card title='Ikkis Song' type='youtube' link='https://www.youtube.com/watch?v=5GCfYLguTIs'/>  
        </div>
        </div>
        </div>
      )
    
}