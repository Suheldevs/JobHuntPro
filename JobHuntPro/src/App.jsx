import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbaar from './Components/Navbaar'
import Home from './Components/Home'
import Category from './Components/Category';
import JobDetail from './Components/JobDetail';
import Footer from './Components/Footer';
import FindJobs from './Components/FindJobs';
function App() {

  return (  
    <Router>
      <Navbaar/>
      <Routes>
        {/* <Route path='/nav' element={<Navbaar/>}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/job-details' element={<JobDetail/>}/>
        <Route path='/findjobs' element={<FindJobs/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
