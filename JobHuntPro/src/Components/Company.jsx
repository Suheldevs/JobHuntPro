import React from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import companyData from './Data/CompanyData';
import { useState } from 'react';
function Company() {
  const [show, setShow]=useState('4');
  const [count, setCount]=useState(true);
const viewMore = ()=>{
 setShow(count? companyData.length : 4)
 setCount(!count)
}
  return (
    <div className="bg-light mb-5">
        <Container>
            <Row >
{companyData.slice(0,show).map((cData)=>(
    <Col key={cData.id} xs={12} sm={6} lg={6}>
     <Card className="my-3 shadow-sm" style={{ borderRadius: '10px' }}>
     <Card.Body className="d-flex justify-content-between align-items-center">
       <div className="d-flex">
         {/* Company Logo */}
         <img
           src={cData.logo}
           style={{ width: '50px', height: '50px', borderRadius: '50%' }}
           className="me-3"
         />
         {/* Company Details */}
         <div>
           <Card.Title className="mb-0 mt-2">{cData.name}</Card.Title>
           <Row>
            <Col xs={7} className='d-flex'>
           <Card.Text className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
             {cData.location}
           </Card.Text>
           <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>
             {cData.category}
           </Card.Text>
           </Col>
           <Col xs={5}>
           <Card className="text-muted text-end p-1 rounded sm:d-none" style={{ fontSize: '0.9rem' }}>
            Open Jobs -  {cData.job_opening}
           </Card>
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
            <div className='my-2 text-center pb-4'>
        <div className='my-btn px-3 rounded py-2 d-inline mb-5 hover:cursor-pointer' onClick={viewMore} id='more' >{count ? "Show":"Hide"}</div>
        </div>
      </Row>
        </Container>
    </div>
  )
}

export default Company