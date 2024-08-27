
import React from 'react'
import Logic from './component/Logic'
import Industry from './component/Industry'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Location from './component/Location'
import Navbar from './component/Navbar'
import Footer from './Footer'



const App = () => {
  return (
    <div>
    {/* <Logic/> */}
    
     <Router> 
    
   <Navbar/>
   
  <Routes> 
   
  {/* <Route path='/Logic' element={<Logic/>}></Route> */}
  <Route path='/Logic' element={<Logic/>}></Route>
   
    <Route path='/Location' element={<Location/>}></Route>
    <Route path='/Industry' element={<Industry/>}></Route> 
  
   
    </Routes>

    <Footer/>
  </Router>

     
    </div>
  )
}

export default App