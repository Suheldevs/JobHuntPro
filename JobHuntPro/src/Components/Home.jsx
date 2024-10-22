import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import Category from "./Category";
import Jobs from "./Jobs";
import Company from "./Company";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
export default function Home() {

    return (
        <>
           
                <Container className="pt-16">
                    <Row>
                    <Col lg={6} sm={12} >
                    <Row>
                    <div className="">
<div class="h1 fw-bold text-center lg:pt-16">There Are <span className="p-c">93,178</span> Postings Here For you!</div>
<div className="ms-3 text-muted fw-bold fs-5">Find Jobs, Employment & Career Opportunities</div>
<div className="d-flex justify-between search mt-4 gap-2">
    <div className="d-flex">
    <span className="mt-4 me-2 h5 p-c"><FaSearch /></span><input type='text' placeholder="Job title, Keyword, Company "/>
    </div>
    <div className="d-flex">
    <span className="mt-4 me-2 h5 p-c"><SlLocationPin /></span><input type='text'  placeholder="City or Pincode"/>
    </div>
    <div className="d-flex">
    <div className="btn bg-p-c rounded white my-btn">Find Jobs</div>
    </div>
</div>
<div className="search-sugg mt-4"><h5 className="d-inline">Popular Searches : </h5><span className='btn'>Designer</span> <span className='btn'>Developer</span> <span className='btn'>IOS Devloper</span> <span className='btn'>Senior Engineer</span></div>
        </div>
                    </Row>
                    </Col>
                    <Col lg={6} sm={12}>
                    <div className="hero-right">
                        <div className="main-img">
                            <img src='Images/h4.png'/>
                        </div>
                        <div className=' cv'>
                <div className='h6'>Upload Your CV </div>
                <div className=''> It only takes a few seconds </div>
              </div>
              {/* <img src='Images/about_8.png' alt='about' className='img2' /> */}
                    </div>
                    </Col>
                    </Row>
                </Container>
                <Jobs />
                {/*<Company />
                 <Category />
                <Testimonials />
                <Footer /> */}
    
        </>
    )
};