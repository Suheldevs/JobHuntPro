import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbaar from './Components/Navbaar'
import Home from './Components/Home'
import Category from './Components/Category';
import JobDetail from './Components/JobDetail';
import Footer from './Components/Footer';
import FindJobs from './Components/FindJobs';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
function App() {

  return (  
    <Router>
      <Navbaar/>
      <Routes>
        {/* <Route path='/nav' element={<Navbaar/>}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/jobcategory' element={<Category/>}/>
        <Route path='/job-details' element={<JobDetail/>}/>
        <Route path='/findjobs' element={<FindJobs/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
