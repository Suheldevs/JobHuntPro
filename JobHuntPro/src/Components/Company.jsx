import React from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import companyData from './Data/CompanyData';
import { useState } from 'react';
function Company() {
  const [show, setShow]=useState('4');
  const [count, setCount]=useState(true);
const viewMore = ()=>{
  if(count){
  setShow(companyData.length);
  setCount(false);
  }
  else{
    setShow('4');
    setCount(true);
  }
}
  return (
    <div>
        <Container>
            <Row >
{companyData.slice(0,show).map((cData)=>(
    <Col key={cData.id} xs={12} sm={6} lg={6}>
     <Card className="my-3 shadow-sm" style={{ borderRadius: '10px' }}>
     <Card.Body className="d-flex justify-content-between align-items-center">
       <div className="d-flex align-items-center">
         {/* Company Logo */}
         <img
           src={cData.logo}
           style={{ width: '50px', height: '50px', borderRadius: '50%' }}
           className="me-3"
         />
         {/* Company Details */}
         <div>
           <Card.Title className="mb-0">{cData.name}</Card.Title>
           <Row>
            <Col xs={8} className='d-flex'>
           <Card.Text className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
             {cData.location}
           </Card.Text>
           <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>
             {cData.category}
           </Card.Text>
           </Col>
           <Col xs={4}>
           <Card.Text className="text-muted text-end btn rounded rounded-pill" style={{ fontSize: '0.9rem' }}>
            Open Jobs -  {cData.job_opening}
           </Card.Text>
           </Col>
           </Row>

         </div>
       </div>

       {/* Job Openings Button */}
       
     </Card.Body>
   </Card>
   </Col>
))}
            </Row>
            <Row>
        <div className='btn' onClick={viewMore} id='more' >{count ? "Show":"Hide"}</div>
      </Row>
        </Container>
    </div>
  )
}

export default Company