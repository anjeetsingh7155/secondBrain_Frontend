import './App.css'
import { SignIn } from './Pages/SignIn'
import { DashBoard } from "./Pages/Dashboard"
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import { SignUp } from './Pages/SignUp'

function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
<Route path='/signup' element={<SignUp/>}/>
<Route path='/signin' element={<SignIn/>}/>
<Route path='/dashboard' element={<DashBoard/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
