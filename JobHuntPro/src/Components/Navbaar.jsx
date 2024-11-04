import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'; 

function Navbaar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbaar">
      <Container>
        <Navbar.Brand href="/" className='p-c-h jobhuntpro py-0 my-0 '>Job<span className='fs-4 text-danger hunt'>Hunt</span>Pro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link> 
            <Nav.Link as={NavLink} to="/findjobs">Find Jobs</Nav.Link> 
            <Nav.Link as={NavLink} to="/jobcategory">Job Category</Nav.Link> 
            <NavDropdown title="Dashboard" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/signup">Sign In</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/login">
                Log In
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/dashboard" >Account</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/dashboard" className='p-c fw-bold'>
              Upload your CV
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login" className='mybtn2 rounded py-0 pt-1 mx-4 lg:mb-0 log-in'>
              Login / Register
            </Nav.Link>
            <Nav.Link as={NavLink} to="/jobpost" eventKey={2} className='my-btn rounded'>
              Job Post
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaar;
