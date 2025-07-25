

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup, Alert } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../css/ContactUs.css'; // Custom CSS for additional styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const airlines = [
    { name: "Air India", url: "https://www.airindia.in/contact-us.htm", logo: "https://www.tata.com/content/dam/tata/images/verticals/desktop/airindia_newlivery_card_hz_desktop_390x362.jpg" },
    { name: "IndiGo", url: "https://www.goindigo.in/contact-us.html", logo: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2024/04/indigo-a350-900-april-2024.png" },
  
    { name: "AirAsia", url: "https://www.airasia.com/en/gb", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/2560px-AirAsia_New_Logo.svg.png" },
  
    { 
      name: "Emirates", 
      url: "https://www.emirates.com/in/english/help/contact-us/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/2560px-Emirates_logo.svg.png" 
    },
    { 
      name: "Qatar Airways", 
      url: "https://www.qatarairways.com/en-in/contact-us.html",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/1200px-Qatar_Airways_Logo.svg.png" 
    }
  
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>Contact Our Travel Experts</h1>
            <p>We're available 24/7 to assist with your travel needs</p>
          </motion.div>
        </Container>
      </section>

      {/* Main Content */}
      <Container className="py-5">
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-5"
          >
            <div className="success-icon mb-4">
              <FaPaperPlane size={48} className="text-primary" />
              <div className="circle-animation"></div>
            </div>
            <h2 className="mb-3">Message Sent Successfully!</h2>
            <p className="lead mb-4">Thank you for contacting us. Our team will get back to you within 24 hours.</p>
            <Button 
              variant="outline-primary" 
              onClick={() => setSubmitted(false)}
              className="px-4"
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <Row className="g-4">
            {/* Contact Form */}
            <Col lg={7}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="contact-form-card">
                  <Card.Body className="p-4 p-md-5">
                    <h2 className="mb-4">Get in Touch</h2>
                    <Form onSubmit={handleSubmit}>
                      <Row className="g-3">
                        <Col md={6}>
                          <Form.Group controlId="formName" className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control 
                              type="text" 
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your name" 
                              required 
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                              type="email" 
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email" 
                              required 
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="formPhone" className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control 
                              type="tel" 
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Enter your phone number" 
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="formSubject" className="mb-3">
                            <Form.Label>Subject</Form.Label>
                            <Form.Select 
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select a subject</option>
                              <option>Flight Booking</option>
                              <option>Flight Cancellation</option>
                              <option>Baggage Query</option>
                              <option>Special Assistance</option>
                              <option>Other</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Form.Group controlId="formMessage" className="mb-4">
                            <Form.Label>Message</Form.Label>
                            <Form.Control 
                              as="textarea" 
                              rows={5} 
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Enter your message" 
                              required 
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Button 
                            variant="primary" 
                            type="submit" 
                            size="lg" 
                            className="w-100 submit-btn"
                          >
                            Send Message
                            <span className="btn-arrow">→</span>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            {/* Contact Information */}
            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="contact-info-card">
                  <Card.Body className="p-4 p-md-5">
                    <h2 className="mb-4">Contact Information</h2>
                    
                    <ListGroup variant="flush" className="mb-4">
                      <ListGroup.Item className="contact-info-item">
                        <div className="contact-icon bg-primary">
                          <FaHeadset className="text-white" />
                        </div>
                        <div className="contact-details">
                          <h5>24/7 Customer Support</h5>
                          <p>For immediate assistance with bookings or inquiries</p>
                          <a href="tel:+18002001234" className="contact-link">+1 800 200 1234</a>
                        </div>
                      </ListGroup.Item>
                      
                      <ListGroup.Item className="contact-info-item">
                        <div className="contact-icon bg-danger">
                          <FaEnvelope className="text-white" />
                        </div>
                        <div className="contact-details">
                          <h5>Email Us</h5>
                          <p>For general inquiries and feedback</p>
                          <a href="mailto:support@sunbeamtravel.com" className="contact-link">support@sunbeamtravel.com</a>
                        </div>
                      </ListGroup.Item>
                      
                      <ListGroup.Item className="contact-info-item">
                        <div className="contact-icon bg-success">
                          <FaMapMarkerAlt className="text-white" />
                        </div>
                        <div className="contact-details">
                          <h5>Corporate Office</h5>
                          <p>Sunbeam Travel Plaza, 123 Airport Road, Mumbai, Maharashtra 400099</p>
                        </div>
                      </ListGroup.Item>
                      
                      <ListGroup.Item className="contact-info-item">
                        <div className="contact-icon bg-warning">
                          <FaClock className="text-white" />
                        </div>
                        <div className="contact-details">
                          <h5>Working Hours</h5>
                          <p>Monday to Friday: 9:00 AM - 7:00 PM</p>
                          <p>Saturday: 10:00 AM - 4:00 PM</p>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>

                    <div className="social-section">
                      <h5 className="mb-3">Connect With Us</h5>
                      <div className="d-flex social-icons">
                        <motion.a 
                          href="#" 
                          whileHover={{ y: -3 }}
                          className="social-icon facebook"
                        >
                          <i className="bi bi-facebook"></i>
                        </motion.a>
                        <motion.a 
                          href="#" 
                          whileHover={{ y: -3 }}
                          className="social-icon twitter"
                        >
                          <i className="bi bi-twitter"></i>
                        </motion.a>
                        <motion.a 
                          href="#" 
                          whileHover={{ y: -3 }}
                          className="social-icon instagram"
                        >
                          <i className="bi bi-instagram"></i>
                        </motion.a>
                        <motion.a 
                          href="#" 
                          whileHover={{ y: -3 }}
                          className="social-icon linkedin"
                        >
                          <i className="bi bi-linkedin"></i>
                        </motion.a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        )}

        {/* Airline Partners Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="airline-partners mt-5"
        >
          <h2 className="text-center mb-4">Our Airline Partners</h2>
          <p className="text-center text-muted mb-5">Contact these airlines directly for flight-specific queries</p>
          
          <Row className="g-4 justify-content-center">
            {airlines.map((airline, index) => (
              <Col key={index} xs={6} md={4} lg={3} xl={2}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="airline-card"
                >
                  <a 
                    href={airline.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <Card className="h-100 border-0 shadow-sm text-center">
                      <Card.Img 
                        variant="top" 
                        src={airline.logo} 
                        alt={airline.name}
                        className="airline-logo p-3"
                      />
                      <Card.Body>
                        <Card.Title className="h6 mb-0">{airline.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </a>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.section>

        {/* FAQ CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-5"
        >
          <Alert variant="light" className="faq-alert">
            <Row className="align-items-center">
              <Col md={9}>
                <h3 className="mb-2">Need Help Immediately?</h3>
                <p className="mb-0">Check our FAQ section for quick answers to common questions</p>
              </Col>
              <Col md={3} className="text-md-end mt-3 mt-md-0">
                <Button variant="outline-primary" href="/faq" className="px-4">
                  Visit FAQ
                </Button>
              </Col>
            </Row>
          </Alert>
        </motion.div>
      </Container>
    </div>
  );
};

export default ContactUs;



