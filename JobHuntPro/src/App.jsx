import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbaar from './Components/Navbaar'
import Home from './Components/Home'
import Category from './Components/Category';
function App() {

  return (  
    <Router>
      <Navbaar/>
      <Routes>
        {/* <Route path='/nav' element={<Navbaar/>}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/category' element={<Category/>}/>
      </Routes>
    </Router>
  )
}

export default App
