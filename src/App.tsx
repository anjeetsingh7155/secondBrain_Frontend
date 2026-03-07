import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './components/Icons/PlusIcon'
import { Card } from './components/ui/Card'
import { ShareIcon } from './components/Icons/ShareIcon'

function App() {

  return (<div className='p-4'>
    <div className='flex justify-end gap-2'>
          <Button variant='secondary' size='md' text='Share Brain' startIcon={<ShareIcon size='md'/>} ></Button>
      <Button variant='primary' size='md' text='Add Content' startIcon={<PlusIcon size='md'/>} ></Button>
    </div>
    
    <div  className='p-6 flex  gap-2 '>
     <Card title='Naukri' type='twitter' link='https://x.com/ANJEETSING2025/status/1966013982625481157?ref_src=twsrc%5Etfw%22%3ESeptember'/>
      <Card title='Ikkis Song' type='youtube' link='https://www.youtube.com/watch?v=zQ3zAbteaRo'/>  
    </div>
    </div>
  )
}

export default App
