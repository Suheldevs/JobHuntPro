import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { json, Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF, } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/jobhuntpro/user/signin', {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
          alert("Login successfull");
          setTimeout(()=>{
            window.location.href="http://localhost:5173/login";
          },2000)
        }
        catch(err){
            console.log(err);
        }
      setFormData({
            name: '',
            email: '',
            password: ''
    })
 }



    // let json = JSON.stringify(formData);
    // localStorage.setItem('myObj', json);
    // window.location.href="http://localhost:3000/log-in";

    return (
        <>
            <Container fluid style={{ background: 'whitesmoke', height: '85vh', width: '100%' }} className='lg:pt-16'>
                <Row>
                    <Col lg={3} sm={0}></Col>
                    <Col lg={6} sm={12} className='mt-4' style={{ background: 'white', boxShadow: '0px 10px 20px rgba(0,0,0,0.3)', borderRadius: '20px', }}>
                        <Row style={{ height: '370px' }}>

                            <Col lg={6} className='text-center'>
                                <h2 className='mt-4'>Please Sign-Up!</h2>
                                <div className='icon-pre d-flex justify-content-center' style={{ gap: '30px', }}>
                                    <div className='icon border border-light rounded p-2 bg-light'><FaGoogle /></div>
                                    <div className='icon border border-light rounded p-2 bg-light'><FaFacebookF /></div>
                                    <div className='icon border border-light rounded p-2 bg-light'><FaGithub /></div>
                                    <div className='icon border border-light rounded p-2 bg-light'><FaLinkedinIn /></div>
                                </div>
                                <p>or use your email for registeration</p>
                                <form method='reset' onSubmit={handleSubmit} >
                                    <input required type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Name' className='p-2 m-2 border-0 rounded mt-0' style={{ width: '90%', backgroundColor: '#f1f1f3fa', outline: 'none', }}></input>
                                    <input required type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Email' className='p-2 m-2 border-0 rounded ' style={{ width: '90%', backgroundColor: '#f1f1f3fa', outline: 'none', }}></input>
                                    <input required type="password" name='password' value={formData.password} onChange={handleChange} placeholder='Password' className='p-2 m-2 border-0 rounded ' style={{ width: '90%', backgroundColor: '#f1f1f3fa', outline: 'none', }}></input>
                                    <button className='btn text-light border-0 ps-5 pe-5 mt-2' type='submit' style={{ background: '#2323ebde' }}>SIGN IN</button>
                                </form>
                            </Col>
                            <Col lg={6} className='d-flex justify-content-center ' style={{ background: '#2323ebde', color: 'white', borderTopLeftRadius: '10%', borderBottomLeftRadius: '120px', borderBottomRightRadius: '20px', borderTopRightRadius: '20px', flexDirection: 'column', alignItems: 'center' }}>
                                <h2>Welcome Back!</h2>
                                <p className='text-center'>Enter your personal detail to find more job releted to you</p>
                                <button className='btn text-light border-light ps-5 pe-5'><Link to="/login" className="text-light text-decoration-none">
                                    LOG IN
                                </Link></button>
                            </Col>

                        </Row>
                    </Col>
                    <Col lg={3} sm={0}></Col>
                </Row>
            </Container>
        </>
    )
}

export default Signup