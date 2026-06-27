import './App.css'
import { SignIn } from './Pages/SignIn'
import { DashBoard } from "./Pages/Dashboard"
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import { SignUp } from './Pages/SignUp'
import { SharedBrain } from './Pages/SharedBrain'

function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
<Route path='/' element={<SignUp/>}/>
<Route path='/signin' element={<SignIn/>}/>
<Route path='/dashboard' element={<DashBoard/>}/>
<Route path='/share/:shareId' element={<SharedBrain/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
