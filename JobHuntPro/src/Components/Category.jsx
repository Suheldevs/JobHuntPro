import React, { useState } from 'react'
import categories from './Data/CategoryData';
import { Container, Row, Col, Card  } from 'react-bootstrap';
function Category() {
  const [show, setShow]=useState('6');
  const [count, setCount]=useState(true);
  const viewMore = ()=>{
    setShow(count? categories.length : 6);
    setCount(!count);
  }
  
 
  return (
    <div className='bg-light'>
      <Container>
        <Row className='mt-5'>
          <div className='text-center mt-5'>
            <div className='h2'>Popular Job Categories</div>
            <div className='h6 text-muted'>2024 jobs live - 293 added today.</div>
          </div>
        </Row>
      </Container>
        <Container className="" >
      <Row className="g-4 pt-5 ">
        {categories.slice(0,show).map((category) => (
          <Col key={category.id} xs={6} sm={6} md={4} lg={4}>
            <Card className="h-100 p-0 m-0 text-center shadow-sm category-card">
              <Card.Body>
                <Row>
                  <Col lg={4}>
                <div className="mb-0 rounded p-3 ps-4  fs-2 category-icon">
                  {category.icon}
                </div>
                </Col>
                <Col lg={8} className="mt-2">
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>({category.openPositions}) open positions</Card.Text>
                </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className='my-5 text-center pb-4'>
        <div className='my-btn px-3 rounded py-2 d-inline mb-5 hover:cursor-pointer' onClick={viewMore} id='more' >{count ? "Show":"Hide"}</div>
        </div>
    </Container>
    </div>
  )
}

export default Category