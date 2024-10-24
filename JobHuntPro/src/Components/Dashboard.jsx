import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody } from "react-bootstrap";
import { FaBriefcase, FaFileAlt, FaEnvelope, FaBookmark } from "react-icons/fa";
import { Form ,Button } from "react-bootstrap";
const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Dashboard"); // State to track active section

  // Sidebar items
  const menuItems = [
    { name: "Dashboard"},
    { name: "Update Profile"},
    { name: "Upload your CV"},
    { name: "Manage Jobs" },
    { name: "All Applicants"},
    { name: "Shortlisted Resumes"},
    { name: "Packages"},
    { name: "Messages"},
    { name: "Resume Alerts"},
  ];

  // Render the content based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <>
          <Row className="mb-4">
            <Col lg={6} sm={12} className="d-flex justify-start">
            <div className="border rounded-circle">
              <img src="" alt="User" height={"80px"} width={"80px"}/>
            </div>
            </Col>
            <Col lg={6} sm={12} className="text-end">
            <h2> Mohd Suhel</h2>
            <p>Ready to jump back in?</p>
            </Col>
           
            </Row>
            <Row className="mb-4">
              <Col md={3}>
                <Card>
                  <Card.Body className="text-center">
                    <FaBriefcase size={100}  className="mb-0 rounded p-3 ms-5  ps-4  category-icon" />
                    <Card.Title>22</Card.Title>
                    <Card.Text>Posted Jobs</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="text-center">
                  <Card.Body>
                    <FaFileAlt size={100} className="mb-0 rounded p-3 ms-5  ps-4  category-icon" color="#ff5733" />
                    <Card.Title>9382</Card.Title>
                    <Card.Text>Applications</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="text-center">
                  <Card.Body>
                    <FaEnvelope size={100} className="mb-0 rounded p-3 ms-5  ps-4  category-icon" color="#ffc107" />
                    <Card.Title>74</Card.Title>
                    <Card.Text>Messages</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="text-center">
                  <Card.Body>
                    <FaBookmark size={100} className="mb-0 rounded p-3 ms-5  ps-4  category-icon" color="#28a745" />
                    <Card.Title>32</Card.Title>
                    <Card.Text>Shortlist</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={7} sm={12}>
              <Card className=''>
                <Card.Title className=" mb-0 mt-2 text-center pb-0">Your Profile Views</Card.Title>
                <CardBody className="text-center m-4"><img src="Images/dashboard-chart.png"></img> </CardBody>
              </Card>
              </Col>
              <Col lg={5} sm={12}>
              <div className="text-center h4 p-c">Notifications</div>
              <Card className="">
              <CardBody>
                <Card>
                  <span className="p-3">--Henry Wilson applied for a job Product Designer </span>
                </Card>
                <Card>
                  <span className="p-3">--Henry Wilson applied for a job Product Designer </span>
                </Card>
                <Card>
                  <span className="p-3">--Henry Wilson applied for a job Product Designer </span>
                </Card>
                <Card>
                  <span className="p-3">--Henry Wilson applied for a job Product Designer </span>
                </Card>
                <Card>
                  <span className="p-3">--Henry Wilson applied for a job Product Designer </span>
                </Card>
                <Card>
                  <span className="p-3">--Henry Wilson applied for a job Product Designer </span>
                </Card>
                <Card>
                  <span className="p-3">--Henry Wilson applied for a job Product Designer </span>
                </Card>
              </CardBody>
              </Card>
              </Col>
            </Row>
          </>
        );
      case "Update Profile":
        return (
          <Form className="p-4">
          <Row className="mt-3">
            <Col md={6}>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control className="form-input " type="text" placeholder="First Name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control className="form-input " type="text" placeholder="Last Name" />
              </Form.Group>
            </Col>
          </Row>
    
          <Row className="mt-3">
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control className="form-input " type="email" placeholder="mail@example.com" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="form-input " type="password" placeholder="Password" />
              </Form.Group>
            </Col>
          </Row>
    
          <Row className="mt-3">
            <Col md={6}>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control className="form-input " type="text" placeholder="123 214 12347" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control className="form-input " type="text" placeholder="Address" />
              </Form.Group>
            </Col>
          </Row>
    
          <Row className="mt-3">
            <Col md={6}>
              <Form.Group controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control className="form-input " as="select">
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formLanguage">
                <Form.Label>Language</Form.Label>
                <Form.Control className="form-input " as="select">
                  <option>Language</option>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
    
          <Row className="mt-3">
            <Col md={6}>
              <Form.Group controlId="formDOB">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control className="form-input " type="date" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formFile">
                <Form.Label>User Profile</Form.Label>
                 <Form.Control className="form-input " type="file" />
              </Form.Group>
            </Col>
          </Row>
    
          <Row className="mt-3">
          <Col md={6}>
              <Form.Group controlId="formLinkedIn">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control className="form-input " type="url" placeholder="https://linkedin.com" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formTwitter">
                <Form.Label>GitHub</Form.Label>
                <Form.Control className="form-input " type="url" placeholder="https://github.com" />
              </Form.Group>
            </Col>
          </Row>
    

    <div className="text-center mt-4">
          <Button className="my-btn" type="submit">
            UPDATE
          </Button>
          </div>
        </Form>
        );
      case "Upload your CV":
        return (
          <Card style={{height:"50vh"}}>
            <Card.Body>
              <Card.Title>Upload Your CV</Card.Title>
             <Form className="text-center bordered ">
              <div className="h3 p-c">Drop files here to upload</div>
              <div className="">To upload file size is (Max 5Mb) and allowed file types are (.doc, .docx, .pdf)</div>
              <div className="text-center d-flex justify-center mt-5">
              <input type="file" className="form-control my-btn" style={{width:'300px'}} placeholder="Upload Resume"/>
              </div>
             </Form>
             
            </Card.Body>
          </Card>
        );
      case "Manage Jobs":
        return (
          <Card>
            <Card.Body>
              <Card.Title>Manage Jobs</Card.Title>
              <p>List of jobs that the company has posted. You can edit or delete them.</p>
              {/* Add job management content */}
            </Card.Body>
          </Card>
        );
      case "Messages":
        return (
          <Card>
            <Card.Body>
              <Card.Title>Messages</Card.Title>
              <p>Here are the messages from applicants.</p>
              {/* Add message related content */}
            </Card.Body>
          </Card>
        );
      // Add more cases for other sections as needed
      default:
        return <h2>Select a section from the sidebar</h2>;
    }
  };

  return (
    <Container fluid className="p-4 ">
      <Row >
        {/* Sidebar */}
        <Col md={2} className="sidebar">
          <ul className="list-group">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`list-group-item ${activeSection === item.name ? "active" : ""}`}
                onClick={() => setActiveSection(item.name)}
                style={{ cursor: "pointer" }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </Col>

        {/* Dynamic Content */}
        <Col md={10} className="dashboard-content bg-light p-4 rounded">
          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
