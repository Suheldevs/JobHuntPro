import React from 'react'
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaClock, FaSearchLocation } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
function JobDetail() {
const location = useLocation();
const {job} = location.state || {} ;

  return (
    <>
<div className='backgound p-5'>
    <div className='text-center text-light'>
        <div className='h2 mb-2'>Job Detail</div>
        <div className='h6 d-flex text-center justify-center gap-2'><Link to='/' className='text-light'>Home</Link> -- JobDetail </div>
    </div>
</div>


    <Container className="my-5">
    {/* Job Header Section */}
    <Row>
      <Col md={8}>
        <Card className="shadow-sm">
          <Card.Body className="d-flex align-items-center">
            {/* Job Image */}
            <div className="text-center me-4">
              <img
                src={job.image_src}
                alt="Company Logo"
                className="rounded-circle"
                width="150"
                height="150"
              />
            </div>
            {/* Job Details */}
            <div className="w-100">
              <Row>
                <Col md={6}>
                  <h4 className="fw-bold mt-4 ">{job.job_title}</h4>
                  <p className="text-muted">{job.location}</p>
                  <Button className='bg-p-c my-btn'>APPLY NOW</Button>
                </Col>
                <Col md={6} className="text-muted">
                  <p>{job.salary}/Month</p>
                  <p className='d-flex gap-3'><FaPhone />{job.phone}</p>
                  <p className='d-flex gap-3'><FaEnvelope />{job.email}</p>
                  <Badge  className="me-2 bg-p-c">{job.job_type[0]}</Badge>
                  <Badge>7 Open Positions</Badge>
                  <p className='mt-2'>{job.exp} Expericence</p>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
        <Row className="mt-5">
      <Col md={12}>
        <Card className="shadow-sm">
          <Card.Body>
            <h5 className='text-light bg-p-c p-3 rounded'>Job Description</h5>
            <hr />
            <p className='text-muted h6'>
              " {job.job_Description} "
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
        <Row className="mt-5">
      <Col md={12}>
        <Card className="shadow-sm">
          <Card.Body>
            <h5 className='text-light bg-p-c p-3 rounded'>Job Experience & Skills</h5>
            <hr />
           <ol>
            {job.experience.map((exp,index)=>{
                return(
             <li key={index} className='text-muted my-2 h6'>--  {exp}</li>
                )
            })}
           </ol>
          </Card.Body>
        </Card>
      </Col>
    </Row>
<Row>
<Card className="shadow-sm my-4">
      <Card.Body>
        <h5 className="text-light bg-p-c p-3 rounded">Location</h5>
        <hr />
        {/* Google Maps Embed */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0573290547816!2d80.92874287577874!3d26.84670886361048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd4e44a3ea5b%3A0x80b79c4e05b3488b!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1697980234426!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map Location"
          ></iframe>
        </div>
      </Card.Body>
    </Card>
</Row>
      </Col>

      {/* Sidebar */}
      <Col md={4}>
        <Card className="shadow-sm mb-4">
          <Card.Body>
            <h5 className='d-flex gap-2'><FaSearchLocation className="me-2 p-c" /> Detail</h5>
            <hr />
            <p>Package: {job.salary}/Month</p>
            <p>{job.web}</p>
            <p className='d-flex gap-2'><FaPhone /> {job.phone}</p>
            <p className='d-flex gap-2'><FaEnvelope /> {job.email}</p>
            <p>Bachelor Degree</p>
            <p>{job.exp} Exp.</p>
          </Card.Body>
        </Card>

        <Card className="shadow-sm">
          <Card.Body>
            <h5 className='d-flex gap-2'><FaClock className="me-2 p-c" /> Opening Hours</h5>
            <hr />
            <p>Monday: 9 AM - 5 PM</p>
            <p>Tuesday: 9 AM - 5 PM</p>
            <p>Wednesday: 9 AM - 5 PM</p>
            <p>Thursday: 9 AM - 5 PM</p>
            <p>Friday: 9 AM - 5 PM</p>
          </Card.Body>
        </Card>
<Card className="shadow-sm my-4">
      <Card.Body>
      <h5 className='d-flex gap-2'><FaMapMarkerAlt className="me-2 p-c" /> Location</h5>
        <hr />
        {/* Google Maps Embed */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0573290547816!2d80.92874287577874!3d26.84670886361048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd4e44a3ea5b%3A0x80b79c4e05b3488b!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1697980234426!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map Location"
          ></iframe>
        </div>
      </Card.Body>
    </Card>
      </Col>
    </Row>

    {/* Job Description */}
  
  </Container>
  </>
  )
}

export default JobDetail