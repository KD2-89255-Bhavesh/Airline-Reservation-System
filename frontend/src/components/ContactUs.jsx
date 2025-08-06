

// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Card, ListGroup, Alert } from 'react-bootstrap';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset, FaPaperPlane } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import '../css/ContactUs.css'; 

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const airlines = [
//     { name: "Air India", url: "https://www.airindia.in/contact-us.htm", logo: "https://www.tata.com/content/dam/tata/images/verticals/desktop/airindia_newlivery_card_hz_desktop_390x362.jpg" },
//     { name: "IndiGo", url: "https://www.goindigo.in/contact-us.html", logo: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2024/04/indigo-a350-900-april-2024.png" },
  
//     { name: "AirAsia", url: "https://www.airasia.com/en/gb", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/2560px-AirAsia_New_Logo.svg.png" },
  
//     { 
//       name: "Emirates", 
//       url: "https://www.emirates.com/in/english/help/contact-us/",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/2560px-Emirates_logo.svg.png" 
//     },
//     { 
//       name: "Qatar Airways", 
//       url: "https://www.qatarairways.com/en-in/contact-us.html",
//       logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/1200px-Qatar_Airways_Logo.svg.png" 
//     }
  
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate form submission
//     setTimeout(() => {
//       setSubmitted(true);
//     }, 1000);
//   };

//   return (
//     <div className="contact-page">
//       {/* Hero Section */}
//       <section className="contact-hero">
//         <div className="hero-overlay"></div>
//         <Container>
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="hero-content"
//           >
//             <h1>Contact Our Travel Experts</h1>
//             <p>We're available 24/7 to assist with your travel needs</p>
//           </motion.div>
//         </Container>
//       </section>

//       {/* Main Content */}
//       <Container className="py-5">
//         {submitted ? (
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="text-center py-5"
//           >
//             <div className="success-icon mb-4">
//               <FaPaperPlane size={48} className="text-primary" />
//               <div className="circle-animation"></div>
//             </div>
//             <h2 className="mb-3">Message Sent Successfully!</h2>
//             <p className="lead mb-4">Thank you for contacting us. Our team will get back to you within 24 hours.</p>
//             <Button 
//               variant="outline-primary" 
//               onClick={() => setSubmitted(false)}
//               className="px-4"
//             >
//               Send Another Message
//             </Button>
//           </motion.div>
//         ) : (
//           <Row className="g-4">
//             {/* Contact Form */}
//             <Col lg={7}>
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 <Card className="contact-form-card">
//                   <Card.Body className="p-4 p-md-5">
//                     <h2 className="mb-4">Get in Touch</h2>
//                     <Form onSubmit={handleSubmit}>
//                       <Row className="g-3">
//                         <Col md={6}>
//                           <Form.Group controlId="formName" className="mb-3">
//                             <Form.Label>Full Name</Form.Label>
//                             <Form.Control 
//                               type="text" 
//                               name="name"
//                               value={formData.name}
//                               onChange={handleChange}
//                               placeholder="Enter your name" 
//                               required 
//                             />
//                           </Form.Group>
//                         </Col>
//                         <Col md={6}>
//                           <Form.Group controlId="formEmail" className="mb-3">
//                             <Form.Label>Email address</Form.Label>
//                             <Form.Control 
//                               type="email" 
//                               name="email"
//                               value={formData.email}
//                               onChange={handleChange}
//                               placeholder="Enter your email" 
//                               required 
//                             />
//                           </Form.Group>
//                         </Col>
//                         <Col md={6}>
//                           <Form.Group controlId="formPhone" className="mb-3">
//                             <Form.Label>Phone Number</Form.Label>
//                             <Form.Control 
//                               type="tel" 
//                               name="phone"
//                               value={formData.phone}
//                               onChange={handleChange}
//                               placeholder="Enter your phone number" 
//                             />
//                           </Form.Group>
//                         </Col>
//                         <Col md={6}>
//                           <Form.Group controlId="formSubject" className="mb-3">
//                             <Form.Label>Subject</Form.Label>
//                             <Form.Select 
//                               name="subject"
//                               value={formData.subject}
//                               onChange={handleChange}
//                               required
//                             >
//                               <option value="">Select a subject</option>
//                               <option>Flight Booking</option>
//                               <option>Flight Cancellation</option>
//                               <option>Baggage Query</option>
//                               <option>Special Assistance</option>
//                               <option>Other</option>
//                             </Form.Select>
//                           </Form.Group>
//                         </Col>
//                         <Col xs={12}>
//                           <Form.Group controlId="formMessage" className="mb-4">
//                             <Form.Label>Message</Form.Label>
//                             <Form.Control 
//                               as="textarea" 
//                               rows={5} 
//                               name="message"
//                               value={formData.message}
//                               onChange={handleChange}
//                               placeholder="Enter your message" 
//                               required 
//                             />
//                           </Form.Group>
//                         </Col>
//                         <Col xs={12}>
//                           <Button 
//                             variant="primary" 
//                             type="submit" 
//                             size="lg" 
//                             className="w-100 submit-btn"
//                           >
//                             Send Message
//                             <span className="btn-arrow">→</span>
//                           </Button>
//                         </Col>
//                       </Row>
//                     </Form>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>

//             {/* Contact Information */}
//             <Col lg={5}>
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <Card className="contact-info-card">
//                   <Card.Body className="p-4 p-md-5">
//                     <h2 className="mb-4">Contact Information</h2>
                    
//                     <ListGroup variant="flush" className="mb-4">
//                       <ListGroup.Item className="contact-info-item">
//                         <div className="contact-icon bg-primary">
//                           <FaHeadset className="text-white" />
//                         </div>
//                         <div className="contact-details">
//                           <h5>24/7 Customer Support</h5>
//                           <p>For immediate assistance with bookings or inquiries</p>
//                           <a href="tel:+18002001234" className="contact-link">+1 800 200 1234</a>
//                         </div>
//                       </ListGroup.Item>
                      
//                       <ListGroup.Item className="contact-info-item">
//                         <div className="contact-icon bg-danger">
//                           <FaEnvelope className="text-white" />
//                         </div>
//                         <div className="contact-details">
//                           <h5>Email Us</h5>
//                           <p>For general inquiries and feedback</p>
//                           <a href="mailto:support@sunbeamtravel.com" className="contact-link">support@sunbeamtravel.com</a>
//                         </div>
//                       </ListGroup.Item>
                      
//                       <ListGroup.Item className="contact-info-item">
//                         <div className="contact-icon bg-success">
//                           <FaMapMarkerAlt className="text-white" />
//                         </div>
//                         <div className="contact-details">
//                           <h5>Corporate Office</h5>
//                           <p>Sunbeam Travel Plaza, 123 Airport Road, Mumbai, Maharashtra 400099</p>
//                         </div>
//                       </ListGroup.Item>
                      
//                       <ListGroup.Item className="contact-info-item">
//                         <div className="contact-icon bg-warning">
//                           <FaClock className="text-white" />
//                         </div>
//                         <div className="contact-details">
//                           <h5>Working Hours</h5>
//                           <p>Monday to Friday: 9:00 AM - 7:00 PM</p>
//                           <p>Saturday: 10:00 AM - 4:00 PM</p>
//                         </div>
//                       </ListGroup.Item>
//                     </ListGroup>

//                     <div className="social-section">
//                       <h5 className="mb-3">Connect With Us</h5>
//                       <div className="d-flex social-icons">
//                         <motion.a 
//                           href="#" 
//                           whileHover={{ y: -3 }}
//                           className="social-icon facebook"
//                         >
//                           <i className="bi bi-facebook"></i>
//                         </motion.a>
//                         <motion.a 
//                           href="#" 
//                           whileHover={{ y: -3 }}
//                           className="social-icon twitter"
//                         >
//                           <i className="bi bi-twitter"></i>
//                         </motion.a>
//                         <motion.a 
//                           href="#" 
//                           whileHover={{ y: -3 }}
//                           className="social-icon instagram"
//                         >
//                           <i className="bi bi-instagram"></i>
//                         </motion.a>
//                         <motion.a 
//                           href="#" 
//                           whileHover={{ y: -3 }}
//                           className="social-icon linkedin"
//                         >
//                           <i className="bi bi-linkedin"></i>
//                         </motion.a>
//                       </div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           </Row>
//         )}

//         {/* Airline Partners Section */}
//         <motion.section 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="airline-partners mt-5"
//         >
//           <h2 className="text-center mb-4">Our Airline Partners</h2>
//           <p className="text-center text-muted mb-5">Contact these airlines directly for flight-specific queries</p>
          
//           <Row className="g-4 justify-content-center">
//             {airlines.map((airline, index) => (
//               <Col key={index} xs={6} md={4} lg={3} xl={2}>
//                 <motion.div 
//                   whileHover={{ y: -5 }}
//                   className="airline-card"
//                 >
//                   <a 
//                     href={airline.url} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-decoration-none"
//                   >
//                     <Card className="h-100 border-0 shadow-sm text-center">
//                       <Card.Img 
//                         variant="top" 
//                         src={airline.logo} 
//                         alt={airline.name}
//                         className="airline-logo p-3"
//                       />
//                       <Card.Body>
//                         <Card.Title className="h6 mb-0">{airline.name}</Card.Title>
//                       </Card.Body>
//                     </Card>
//                   </a>
//                 </motion.div>
//               </Col>
//             ))}
//           </Row>
//         </motion.section>

//         {/* FAQ CTA */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="mt-5"
//         >
//           <Alert variant="light" className="faq-alert">
//             <Row className="align-items-center">
//               <Col md={9}>
//                 <h3 className="mb-2">Need Help Immediately?</h3>
//                 <p className="mb-0">Check our FAQ section for quick answers to common questions</p>
//               </Col>
//               <Col md={3} className="text-md-end mt-3 mt-md-0">
//                 <Button variant="outline-primary" href="/faq" className="px-4">
//                   Visit FAQ
//                 </Button>
//               </Col>
//             </Row>
//           </Alert>
//         </motion.div>
//       </Container>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup, Alert } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../css/ContactUs.css'; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const airlines = [
    { 
      name: "Air India", 
      url: "https://www.airindia.in/contact-us.html", 
      logo: "https://www.tata.com/content/dam/tata/images/verticals/desktop/airindia_newlivery_card_hz_desktop_390x362.jpg" 
    },
    { 
      name: "IndiGo", 
      url: "https://www.goindigo.in/contact-us.html", 
      logo: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2024/04/indigo-a350-900-april-2024.png" 
    },
    { 
      name: "Vistara", 
      url: "https://www.airvistara.com/in/en/contact-us", 
      logo: "https://tse2.mm.bing.net/th/id/OIP.m6V4MhNjm18_ox5pzRhuMwHaEK?pid=Api&P=0&h=180" 
    },
    { 
      name: "Emirates", 
      url: "https://www.emirates.com/in/english/help/contact-us/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/2560px-Emirates_logo.svg.png" 
    },
    { 
      name: "Qatar Airways", 
      url: "https://www.qatarairways.com/en-in/contact-us.html",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/1200px-Qatar_Airways_Logo.svg.png" 
    },
    
      { 
  name: "SpiceJet", 
  url: "https://www.spicejet.com/contact-us.aspx",

logo:"https://tse4.mm.bing.net/th/id/OIP.ykg5F5tAAZPNQ_gZgQCI8wHaE8?pid=Api&P=0&h=180"
}
    
   
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className="contact-page">
      {/* Enhanced Hero Section */}
      <section className="contact-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content text-center py-5"
          >
            <div className="hero-icon mb-4">
              <FaHeadset size={60} className="text-white" />
            </div>
            <h1 className="display-4 fw-bold text-white mb-3">
              Contact Our Travel Experts
            </h1>
            <p className="lead text-white-75 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
              We're available 24/7 to assist with your travel needs. Get personalized support for all your flight bookings and travel queries.
            </p>
            <div className="hero-stats d-flex justify-content-center gap-4 flex-wrap">
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">&lt;2hrs</div>
                <div className="stat-label">Response Time</div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Main Content */}
      <Container className="py-5" style={{ marginTop: '-50px', position: 'relative', zIndex: 10 }}>
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-5"
          >
            <Card className="success-card border-0 shadow-lg mx-auto" style={{ maxWidth: '500px' }}>
              <Card.Body className="p-5">
                <div className="success-animation mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="success-icon"
                  >
                    <FaCheckCircle size={64} className="text-success" />
                  </motion.div>
                </div>
                <h2 className="fw-bold text-primary mb-3">Message Sent Successfully!</h2>
                <p className="text-muted mb-4">Thank you for contacting us. Our travel experts will get back to you within 2 hours during business hours.</p>
                <div className="d-flex gap-3 justify-content-center">
                  <Button 
                    variant="primary"
                    onClick={() => setSubmitted(false)}
                    className="px-4 rounded-pill"
                  >
                    Send Another Message
                  </Button>
                  <Button 
                    variant="outline-primary"
                    href="/"
                    className="px-4 rounded-pill"
                  >
                    Back to Home
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        ) : (
          <Row className="g-5">
            {/* Enhanced Contact Form */}
            <Col lg={7}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="contact-form-card border-0 shadow-lg h-100">
                  <Card.Body className="p-4 p-md-5">
                    <div className="form-header mb-4">
                      <h2 className="fw-bold text-primary mb-2">Get in Touch</h2>
                      <p className="text-muted">Fill out the form below and we'll get back to you shortly</p>
                    </div>
                    
                    <Form onSubmit={handleSubmit}>
                      <Row className="g-4">
                        <Col md={6}>
                          <Form.Group className="form-floating">
                            <Form.Control 
                              type="text" 
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Full Name"
                              className="modern-input"
                              required 
                            />
                            <Form.Label>Full Name *</Form.Label>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="form-floating">
                            <Form.Control 
                              type="email" 
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Email Address"
                              className="modern-input"
                              required 
                            />
                            <Form.Label>Email Address *</Form.Label>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="form-floating">
                            <Form.Control 
                              type="tel" 
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Phone Number"
                              className="modern-input"
                            />
                            <Form.Label>Phone Number</Form.Label>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="form-floating">
                            <Form.Select 
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="modern-input"
                              required
                            >
                              <option value="">Select Subject</option>
                              <option value="flight-booking">Flight Booking</option>
                              <option value="flight-cancellation">Flight Cancellation</option>
                              <option value="baggage-query">Baggage Query</option>
                              <option value="special-assistance">Special Assistance</option>
                              <option value="refund">Refund Request</option>
                              <option value="other">Other</option>
                            </Form.Select>
                            <Form.Label>Subject *</Form.Label>
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Form.Group className="form-floating">
                            <Form.Control 
                              as="textarea" 
                              rows={5} 
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Your Message"
                              className="modern-input"
                              style={{ height: '120px' }}
                              required 
                            />
                            <Form.Label>Your Message *</Form.Label>
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Button 
                            variant="primary" 
                            type="submit" 
                            size="lg" 
                            className="w-100 submit-btn rounded-pill py-3"
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" />
                                Sending Message...
                              </>
                            ) : (
                              <>
                                <FaPaperPlane className="me-2" />
                                Send Message
                              </>
                            )}
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            {/* Enhanced Contact Information */}
            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="h-100"
              >
                <Card className="contact-info-card border-0 shadow-lg h-100">
                  <Card.Body className="p-4 p-md-5">
                    <h2 className="fw-bold text-primary mb-4">Contact Information</h2>
                    
                    <div className="contact-methods mb-5">
                      <div className="contact-item mb-4">
                        <div className="contact-icon-wrapper">
                          <div className="contact-icon bg-primary">
                            <FaHeadset className="text-white" />
                          </div>
                        </div>
                        <div className="contact-details">
                          <h5 className="fw-bold mb-2">24/7 Customer Support</h5>
                          <p className="text-muted mb-2">For immediate assistance with bookings</p>
                          <a href="tel:+18002001234" className="contact-link fw-bold">+1 800 200 1234</a>
                        </div>
                      </div>
                      
                      <div className="contact-item mb-4">
                        <div className="contact-icon-wrapper">
                          <div className="contact-icon bg-success">
                            <FaEnvelope className="text-white" />
                          </div>
                        </div>
                        <div className="contact-details">
                          <h5 className="fw-bold mb-2">Email Support</h5>
                          <p className="text-muted mb-2">For general inquiries and feedback</p>
                          <a href="mailto:support@sunbeamtravel.com" className="contact-link fw-bold">support@sunbeamtravel.com</a>
                        </div>
                      </div>
                      
                      <div className="contact-item mb-4">
                        <div className="contact-icon-wrapper">
                          <div className="contact-icon bg-danger">
                            <FaMapMarkerAlt className="text-white" />
                          </div>
                        </div>
                        <div className="contact-details">
                          <h5 className="fw-bold mb-2">Corporate Office</h5>
                          <p className="text-muted mb-0">Sunbeam Travel Plaza<br />123 Airport Road<br />Mumbai, Maharashtra 400099</p>
                        </div>
                      </div>
                      
                      <div className="contact-item">
                        <div className="contact-icon-wrapper">
                          <div className="contact-icon bg-warning">
                            <FaClock className="text-white" />
                          </div>
                        </div>
                        <div className="contact-details">
                          <h5 className="fw-bold mb-2">Business Hours</h5>
                          <p className="text-muted mb-1">Monday - Friday: 9:00 AM - 7:00 PM</p>
                          <p className="text-muted mb-0">Saturday: 10:00 AM - 4:00 PM</p>
                        </div>
                      </div>
                    </div>

                    <div className="social-section">
                      <h5 className="fw-bold mb-3">Connect With Us</h5>
                      <div className="social-icons-grid">
                        <motion.a 
                          href="#" 
                          whileHover={{ scale: 1.1 }}
                          className="social-icon facebook"
                        >
                          <i className="bi bi-facebook"></i>
                        </motion.a>
                        <motion.a 
                          href="#" 
                          whileHover={{ scale: 1.1 }}
                          className="social-icon twitter"
                        >
                          <i className="bi bi-twitter"></i>
                        </motion.a>
                        <motion.a 
                          href="#" 
                          whileHover={{ scale: 1.1 }}
                          className="social-icon instagram"
                        >
                          <i className="bi bi-instagram"></i>
                        </motion.a>
                        <motion.a 
                          href="#" 
                          whileHover={{ scale: 1.1 }}
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

        {/* Enhanced Airline Partners Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="airline-partners mt-5 pt-5"
        >
          <div className="text-center mb-5">
            <h2 className="fw-bold text-primary mb-3">Our Airline Partners</h2>
            <p className="text-muted lead mx-auto" style={{ maxWidth: '600px' }}>
              Contact these airlines directly for flight-specific queries and specialized support
            </p>
          </div>
          
          <Row className="g-4 justify-content-center">
            {airlines.map((airline, index) => (
              <Col key={index} xs={6} sm={4} md={3} lg={2}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="airline-card-wrapper"
                >
                  <a 
                    href={airline.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <Card className="airline-card border-0 shadow-sm h-100">
                      <div className="airline-logo-container p-3">
                        <Card.Img 
                          variant="top" 
                          src={airline.logo} 
                          alt={airline.name}
                          className="airline-logo"
                        />
                      </div>
                      <Card.Body className="text-center py-2">
                        <Card.Title className="h6 mb-0 text-dark">{airline.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </a>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.section>

        {/* Enhanced FAQ CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 pt-4"
        >
          <Card className="faq-cta-card border-0 shadow-lg">
            <Card.Body className="p-4 p-md-5">
              <Row className="align-items-center">
                <Col md={8}>
                  <div className="d-flex align-items-center">
                    <div className="faq-icon me-4">
                      <i className="bi bi-question-circle-fill text-primary" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <div>
                      <h3 className="fw-bold text-primary mb-2">Need Help Immediately?</h3>
                      <p className="text-muted mb-0 lead">Check our comprehensive FAQ section for instant answers to common travel questions</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
};

export default ContactUs;

