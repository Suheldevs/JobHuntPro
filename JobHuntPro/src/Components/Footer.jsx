import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <Container>
        <Row className='footer-section'>
          {/* Left Column - Logo and Contact Info */}
          <Col xs={12} md={4} className="mb-4">
            <div className="footer-logo mb-3">
              <img src="Images/banner-img-3.webp" alt="JobHuntPro" style={{ width: '100px' }} />
              <h5 className="mt-2">JobHuntPro</h5>
            </div>
            <p><strong>Call us</strong></p>
            <p><a href="tel:9500000000" className="text-primary">+91 xxxxxxxxx</a></p>
            <p>Aliganj Lucknow, India</p>
            <p>Email: <a href="mailto:mohdateek.dev@gmail.com" className="text-dark">mohdateek.dev@gmail.com</a></p>
          </Col>

          {/* For Candidates */}
          <Col xs={6} md={2} className="mb-4">
            <h6 className="mb-3">For Candidates</h6>
            <ul className="list-unstyled">
              <li><a href="#jobs" className="text-dark">Browse Jobs</a></li>
              <li><a href="#categories" className="text-dark">Browse Categories</a></li>
              <li><a href="#dashboard" className="text-dark">Candidate Dashboard</a></li>
              <li><a href="#alerts" className="text-dark">Job Alerts</a></li>
              <li><a href="#bookmarks" className="text-dark">My Bookmarks</a></li>
            </ul>
          </Col>

          {/* For Employers */}
          <Col xs={6} md={2} className="mb-4">
            <h6 className="mb-3">For Employers</h6>
            <ul className="list-unstyled">
              <li><a href="#candidates" className="text-dark">Browse Candidates</a></li>
              <li><a href="#employer-dashboard" className="text-dark">Employer Dashboard</a></li>
              <li><a href="#add-job" className="text-dark">Add Job</a></li>
              <li><a href="#packages" className="text-dark">Job Packages</a></li>
            </ul>
          </Col>

          {/* About Us */}
          <Col xs={6} md={2} className="mb-4">
            <h6 className="mb-3">About Us</h6>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-dark">About Us</a></li>
              <li><a href="#invoice" className="text-dark">Job Page Invoice</a></li>
              <li><a href="#terms" className="text-dark">Terms Page</a></li>
              <li><a href="#blog" className="text-dark">Blog</a></li>
              <li><a href="#contact" className="text-dark">Contact</a></li>
            </ul>
          </Col>

          {/* Helpful Resources */}
          <Col xs={6} md={2} className="mb-4">
            <h6 className="mb-3">Helpful Resources</h6>
            <ul className="list-unstyled">
              <li><a href="#site-map" className="text-dark">Site Map</a></li>
              <li><a href="#terms-of-use" className="text-dark">Terms of Use</a></li>
              <li><a href="#privacy" className="text-dark">Privacy Center</a></li>
              <li><a href="#security" className="text-dark">Security Center</a></li>
              <li><a href="#accessibility" className="text-dark">Accessibility Center</a></li>
            </ul>
          </Col>
        </Row>

        {/* Bottom Section */}
        <Row className="pt-2 border-top">
          <Col xs={12} md={6} className='mt-3'>
            <p>© 2025 JobHuntPro. All Rights Reserved.</p>
          </Col>
          <Col xs={12} md={6} className="text-md-end d-flex justify-center gap-2">
            <a href="#facebook" className=" p-2 fs-3  my-btn rounded white  ">
             <FaFacebook/>
            </a>
            <a href="#twitter" className="  p-2  fs-3 my-btn rounded white  ">
             <FaTwitter/>
            </a>
            <a href="#instagram" className="  p-2  fs-3 my-btn rounded white ">
             <FaGithub/>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
