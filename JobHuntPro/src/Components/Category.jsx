import React, { useState } from 'react'
import categories from './Data/CategoryData';
import { Container, Row, Col, Card  } from 'react-bootstrap';
function Category() {
  const [show, setShow]=useState('6');
  const [count, setCount]=useState(true);
  const [searchInput,setSearchInput]=useState('');
  const viewMore = ()=>{
    if(count){
      setShow(categories.length);
      setCount(false);
    }
    else{
      setShow('6');
      setCount(true);
    }
  }
  
  const search = (event)=>{
      setSearchInput(event.target.value); 
  }

const filterData = categories.filter((item)=>item.name.toLowerCase().includes(searchInput.toLowerCase()));
  return (
    <div>
      <Container>
        <Row>
          <div className=''>
            <div className=''>Popular Job Categories</div>
            <div className=''>2024 jobs live - 293 added today.</div>
          </div>
        </Row>
      </Container>
        <Container className="" fluid>
      <Row className="g-4 ">
      <div className='form-contro'> <input type='text' id='input' placeholder='input' value={searchInput} onChange={search}/></div>
        {filterData.slice(0,show).map((category) => (
          <Col key={category.id} xs={6} sm={6} md={4} lg={4}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <div className="mb-3">
                  {category.icon}
                </div>
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>({category.openPositions}) open positions</Card.Text>
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

export default Category