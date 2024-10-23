import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <Container>
        <Row>
          {/* Left Column - Logo and Contact Info */}
          <Col xs={12} md={4} className="mb-4">
            <div className="footer-logo mb-3">
              <img src="Images/banner-img-3.webp" alt="JobHuntPro" style={{ width: '100px' }} />
              <h5 className="mt-2">JobHuntPro</h5>
            </div>
            <p><strong>Call us</strong></p>
            <p><a href="tel:9519838720" className="text-primary">+91 9519838720</a></p>
            <p>Aliganj Lucknow, India</p>
            <p>Email: <a href="mailto:mohdsuhel.dev@gmail.com" className="text-dark">mohdsuhel.dev@gmail.com</a></p>
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
        <Row className="pt-4 border-top">
          <Col xs={12} md={6}>
            <p>© 2024 JobHuntPro. All Rights Reserved.</p>
          </Col>
          <Col xs={12} md={6} className="text-md-end d-flex">
            <a href="#facebook" className="text-dark me-3">
             <FaFacebook/>
            </a>
            <a href="#twitter" className="text-dark me-3">
             <FaTwitter/>
            </a>
            <a href="#instagram" className="text-dark">
             <FaGithub/>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
