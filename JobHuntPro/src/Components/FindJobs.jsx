import React from 'react';
import { Container, Row, Col, Card, Badge ,Button} from 'react-bootstrap';
import { FaHeart} from 'react-icons/fa';
import jobData from './Data/JobData';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const FindJobs = () => {
  const [show, setShow]=useState('8');
  const [count, setCount]=useState(true);
  const [searchInput, setSearchInput] = useState('');
const viewMore = ()=>{
  if(count){
  setShow(jobData.length);
  setCount(false);
  }
  else{
    setShow('8');
    setCount(true);
  }
}

const SearchData = (e)=>{
setSearchInput(e.target.value);
console.log(searchInput);

}
const filterjobData = jobData.filter((item)=>(
item.job_title.toLowerCase().includes(searchInput.toLowerCase())
))

const navigate = useNavigate();
const viewJob = (job)=>{
navigate(`/job-details`, {state:{job}})
}
  return (
    <>
    <div className='backgound p-5'>
    <div className='text-center text-light'>
        <div className='h2 mb-2'>Find Jobs</div>
        <div className='h6 d-flex text-center justify-center gap-2'><Link to='/' className='text-light'>Home</Link> -- Find Job </div>
    </div>
</div>
<Container className='my-5 searchbaar'>
  <Row>
    <Col lg={4}>
    <div className='w-100 '>
      <input type='text' value={searchInput} onChange={SearchData}  placeholder='Job Title, Company Name, Keyword' className='fs-5'/>
    </div>
    </Col>
    <Col lg={3}></Col>
    <Col lg={3}></Col>
    <Col lg={2}></Col>
  </Row>
</Container>
        
        <Container className="my-4 ">
    <Row className="g-4 ">
        {filterjobData.slice(0,show).map((job) => (
          <Col key={job.id} xs={12} sm={12} lg={3} md={6}  className='d-flex justify-center'>
            <Card className="shadow-md " style={{ width: '16rem', borderRadius: '10px', border: 'none' }}>
      <Card.Body className="text-center">
        {/* Full Time Badge */}
        <Badge bg={getBadgeType(job.job_type[0])} className="position-absolute bg-p-c" style={{ top: '10px', left: '10px' }}>
          {job.job_type[0]}
        </Badge>
        {/* Heart Icon */}
        <div className="position-absolute heart" style={{ top: '10px', right: '10px' }}>
          <FaHeart />
        </div>

        {/* Company/Job Image */}
        <div className="my-4 d-flex justify-center transition-all hover:scale-110 cursor-pointer">
          <img
            src={job.image_src} // replace with your logo image
            alt={job.job_title}
            className="rounded-circle"
            width="80"
            height="80"
          />
        </div>
        <Card.Title className="fw-bold">{job.job_title}</Card.Title>
    
        <Card.Text className="text-muted">
          {job.location}
        </Card.Text>
        <Button className="mt-3 mybtn2" onClick={()=>{viewJob(job)}}>
          APPLY NOW
        </Button>
      </Card.Body>
    </Card>
          </Col>
        ))}
      </Row>
     <div className='d-flex justify-center mt-5'>
        <div className='btn mybtn2 h6' onClick={viewMore} id='more' >{count ? "Show More":"Hide"}</div>
        </div>
    </Container>
    </>
  );
};

const getBadgeType = (type) => {
  switch (type) {
    case "Full Time":
      return "primary";
    case "Part Time":
      return "info";
    case "Freelancer":
      return "warning";
    case "Urgent":
      return "danger";
    case "Private":
      return "success";
    case "Temporary":
      return "secondary";
    default:
      return "light";
  }
};




{/* <Card className="h-100 shadow-sm border-0 px-4">
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={2}>
                    <img
                      src={job.image_src}
                      alt={`${job.company} logo`}
                      className="img-fluid rounded-circle"
                    />
                  </Col>
                  <Col xs={10}>
                    <Card.Title className="mb-1">{job.job_title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {job.company}
                    </Card.Subtitle>
                  </Col>
                </Row>
                <Row className="mt-3 ms-5">
                  <Col xs={4} className="d-flex align-items-center">
                    <FaMapMarkerAlt className="me-2" />
                    <span>{job.location}</span>
                  </Col>
                  <Col xs={4} className="d-flex align-items-center">
                    <FaClock className="me-2" />
                    <span>{job.post_time}</span>
                  </Col>
                  <Col xs={4} className="d-flex align-items-center">
                    <FaDollarSign className="me-2" />
                    <span>{job.salary}</span>
                  </Col>
                 
                </Row>
                <Row className="mt-3 ms-5">
                    <Col xs={6} className='d-flex gap-4'>
                  {job.job_type.map((type, index) => (
                    <Col xs="auto" key={index}>
                      <Badge bg={getBadgeType(type)} className='p-2 rounded rounded-pill px-3'>{type}</Badge>
                    </Col>
                ))}
                    </Col>
                    <Col xs={6}>
                    <Card.Subtitle className="mb-2 text-muted text-end pt-2">
                      {job.category}
                    </Card.Subtitle>
                    </Col>
                </Row>
              </Card.Body>
            </Card> */}





export default FindJobs;
