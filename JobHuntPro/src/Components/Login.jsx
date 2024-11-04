import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF, } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

function Login() {
    const [data,setData]=useState({
        email:'',
        password:''
    });
    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value});
        console.log(data);
    }
    // let jsonData=localStorage.getItem('myObj');
    // let myObj = JSON.parse(jsonData);
    //     console.log(myObj);

    const submit = async (e)=>{
        e.preventDefault();
        try{
       const responce = await fetch('http://localhost:3000/jobhuntpro/user/login', {
        method:'post',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
       });
       const myData = await responce.json();
       console.log(myData);
    }
    catch(err){
        console.log(err);
    }  

        
    }
  return (
    <div>
      <Container fluid style={{ background: 'whitesmoke', height: '85vh', width: '100%' }} className='lg:pt-16'>
                <Row>
                    <Col lg={3} sm={0}></Col>
                    <Col lg={6} sm={12} className='mt-4' style={{ background: 'white', boxShadow: '0px 10px 20px rgba(0,0,0,0.3)', borderRadius: '20px', }}>
                        <Row style={{ height: '370px' }}>
                            <Col lg={6} className='d-flex justify-content-center ' style={{ background: '#2323ebde', color: 'white', borderTopRightRadius: '120px', borderBottomRightRadius: '10%',borderBottomLeftRadius:'20px', borderTopLeftRadius: '20px', flexDirection: 'column', alignItems: 'center' }}>
                                <h2>Welcome Back!</h2>
                                <p className='text-center'>Enter your personal detail to find more job releted to you</p>
                                <button className='btn text-light border-light ps-5 pe-5'><Link to="/signup" className="text-light text-decoration-none">
                                    SIGN UP
                                </Link></button>
                            </Col>
                            <Col lg={6} className='text-center'>
                                <h2 className='mt-4'>Please Login!</h2>
                                <div className='icon-pre d-flex justify-content-center' style={{ gap: '30px', }}>
                                    <div className='icon border border-light rounded p-2 bg-light'><FaGoogle /></div>
                                    <div className='icon border border-light rounded p-2 bg-light'><FaFacebookF /></div>
                                    <div className='icon border border-light rounded p-2 bg-light'><FaGithub /></div>
                                    <div className='icon border border-light rounded p-2 bg-light'><FaLinkedinIn /></div>
                                </div>
                                <p>or use your email for registeration</p>
                                <form  onSubmit={submit}  id='form-group'>

                                    {/* <input required type="text" class='hidden' name='name' placeholder='Name' className='p-2 m-2 border-0 rounded mt-0' style={{ width: '90%', backgroundColor: '#f1f1f3fa', outline: 'none', }}></input> */}
                                    <input required type="email" class='hidden' name='email' onChange={handleChange} value={data.email} placeholder='Email' className='p-2 m-2 border-0 rounded ' style={{ width: '90%', backgroundColor: '#f1f1f3fa', outline: 'none', }}></input>
                                    <input required type="password" class='hidden' name='password' onChange={handleChange} value={data.password} placeholder='Password' className='p-2 m-2 border-0 rounded ' style={{ width: '90%', backgroundColor: '#f1f1f3fa', outline: 'none', }}></input>
                                
                                <button className='ps-2 pe-2 m-2'style={{border:'none', outline:'none'}}>Forgate Password</button><br/>
                                <button className='btn text-light border-0 ps-5 pe-5 mt-2' type='submit' style={{ background: '#2323ebde' }}><Link to="/dashboard" className="text-light text-decoration-none">
                                    LOG IN
                                </Link></button>
                                </form>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3} sm={0}></Col>
                </Row>
            </Container>

    </div>
  )
}

export default Login