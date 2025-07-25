import React from "react";
import { Outlet } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";
import { Container, Row, Col, Card, Carousel, Accordion, Badge, Button } from "react-bootstrap";

function About() {
  
  const airlines = [
    {
      name: "Chhatrapati Shivaji Maharaj Airport",
      description: "Mumbai's premier airport with 30% cargo growth in FY22",
      imageUrl: "https://www.itln.in/h-upload/2022/04/18/24764-chhatrapati-shivaji-maharaj-intl-airport-cargo-handled-up-30-in-fy22.jpg",
      features: ["Award-winning architecture", "30% cargo growth", "Premium lounges"],
      rating: 4.8
    },
    {
      name: "Indian Airlines",
      description: "Historic carrier now merged with Air India",
      imageUrl: "https://www.airline-suppliers.com/wp-content/uploads/2017/10/vt-esd-indian-airlines-airbus-a320-231_PlanespottersNet_324245.jpg",
      features: ["Legacy carrier", "Extensive network", "Comfortable cabins"],
      rating: 4.2
    },
    {
      name: "Air India Express",
      description: "Low-cost international specialist",
      imageUrl: "https://pbs.twimg.com/media/DAbdHlRW0AAxgxq.jpg",
      features: ["Budget fares", "Reliable service", "Growing fleet"],
      rating: 4.0
    },
    {
      name: "Air India",
      description: "Revitalized national carrier under Tata",
      imageUrl: "https://www.tata.com/content/dam/tata/images/verticals/desktop/airindia_newlivery_card_hz_desktop_390x362.jpg",
      features: ["New aircraft", "Premium service", "Global routes"],
      rating: 4.5
    },
    {
      name: "IndiGo",
      description: "India's largest domestic airline",
      imageUrl: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2024/04/indigo-a350-900-april-2024.png",
      features: ["On-time leader", "Young fleet", "Extensive network"],
      rating: 4.7
    },

    

    {
      name: "Vistara",
      description: "Full-service airline joint venture of Tata and Singapore Airlines",
      imageUrl: "https://tse2.mm.bing.net/th/id/OIP.m6V4MhNjm18_ox5pzRhuMwHaEK?pid=Api&P=0&h=180",
      features: ["Premium economy class", "Business class service", "Excellent hospitality"],
      rating: 4.6,
      url: "https://www.airvistara.com/in/en/contact-us"
    }
  ];

  

  const testimonials = [
    {
      quote: "The premium lounge experience transformed my layover into a relaxing retreat.",
      author: "Rahul Sharma",
      role: "Frequent Flyer"
    },
    {
      quote: "Our family always feels welcome in the dedicated family zones.",
      author: "Priya Patel",
      role: "Family Traveler"
    },
    {
      quote: "As a business traveler, the private workspaces are a game-changer.",
      author: "Amit Joshi",
      role: "Business Executive"
    }
  ];

  return (
    <>
      <HomeNavbar />
      <main className="main-content">
        <Outlet />
        
        {/* Hero Carousel */}
        <Carousel fade controls={false} indicators={false} className="mb-5">
          <Carousel.Item className="position-relative">
            <div className="carousel-image-overlay"></div>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="First slide"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption className="text-start d-flex flex-column justify-content-center h-100">
              <div className="container">
                <h1 className="display-3 fw-bold mb-4">Elevate Your Journey</h1>
                <p className="lead mb-4">Discover unparalleled comfort with our premium travel partners</p>
                <Button variant="primary" size="lg" className="px-4">Explore Services</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Container className="py-5">
          {/* Features Section */}
          <Row className="mb-5">
            <Col className="text-center">
              <Badge bg="primary" pill className="mb-3 px-3 py-2">WHY CHOOSE US</Badge>
              <h2 className="display-5 fw-bold mb-4">Premium Travel Experiences</h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
                We partner with India's finest airlines to deliver exceptional service at every stage of your journey
              </p>
            </Col>
          </Row>

          <Row className="g-4 mb-5">
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-hover">
                <Card.Body className="p-4 text-center">
                  <div className="icon-circle bg-primary bg-opacity-10 text-primary mb-4 mx-auto">
                    <i className="bi bi-headset fs-3"></i>
                  </div>
                  <Card.Title as="h3" className="h4 mb-3">24/7 Support</Card.Title>
                  <Card.Text className="text-muted">
                    Round-the-clock assistance for all your travel needs
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-hover">
                <Card.Body className="p-4 text-center">
                  <div className="icon-circle bg-primary bg-opacity-10 text-primary mb-4 mx-auto">
                    <i className="bi bi-emoji-smile fs-3"></i>
                  </div>
                  <Card.Title as="h3" className="h4 mb-3">Happy Customers</Card.Title>
                  <Card.Text className="text-muted">
                    98% satisfaction rate from our valued travelers
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-hover">
                <Card.Body className="p-4 text-center">
                  <div className="icon-circle bg-primary bg-opacity-10 text-primary mb-4 mx-auto">
                    <i className="bi bi-airplane fs-3"></i>
                  </div>
                  <Card.Title as="h3" className="h4 mb-3">Extensive Network</Card.Title>
                  <Card.Text className="text-muted">
                    Connecting you to 100+ destinations worldwide
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-hover">
                <Card.Body className="p-4 text-center">
                  <div className="icon-circle bg-primary bg-opacity-10 text-primary mb-4 mx-auto">
                    <i className="bi bi-award fs-3"></i>
                  </div>
                  <Card.Title as="h3" className="h4 mb-3">Award Winning</Card.Title>
                  <Card.Text className="text-muted">
                    Recognized for excellence in travel services
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Airlines Section */}
          <Row className="mb-5">
            <Col className="text-center">
              <Badge bg="primary" pill className="mb-3 px-3 py-2">OUR PARTNERS</Badge>
              <h2 className="display-5 fw-bold mb-4">Airline Partners</h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
                Fly with confidence using our trusted airline partners
              </p>
            </Col>
          </Row>

          <Row className="g-4 mb-5">
            {airlines.map((airline, index) => (
              <Col key={index} md={6} lg={4}>
                <Card className="h-100 border-0 shadow-sm hover-scale">
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={airline.imageUrl} 
                      alt={airline.name}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Badge bg="warning" className="position-absolute top-0 end-0 m-2">
                      <i className="bi bi-star-fill me-1"></i> {airline.rating}
                    </Badge>
                  </div>
                  <Card.Body>
                    <Card.Title>{airline.name}</Card.Title>
                    <Card.Text className="text-muted mb-3">{airline.description}</Card.Text>
                    <ul className="list-unstyled">
                      {airline.features.map((feature, i) => (
                        <li key={i} className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-top-0">
                    <Button variant="outline-primary" className="w-100">View Details</Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Testimonial Carousel */}
          <Row className="mb-5">
            <Col className="text-center">
              <Badge bg="primary" pill className="mb-3 px-3 py-2">TESTIMONIALS</Badge>
              <h2 className="display-5 fw-bold mb-4">What Our Travelers Say</h2>
            </Col>
          </Row>

          <Carousel indicators={false} className="mb-5">
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <Card className="border-0 bg-light">
                  <Card.Body className="p-5 text-center">
                    <i className="bi bi-quote fs-1 text-primary opacity-25 mb-4"></i>
                    <p className="fs-4 fst-italic mb-4">"{testimonial.quote}"</p>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="ms-3 text-start">
                        <h5 className="mb-1">{testimonial.author}</h5>
                        <p className="text-muted mb-0">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>

          {/* FAQ Accordion */}
          <Row className="mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4">Frequently Asked Questions</h2>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How do I access premium lounges?</Accordion.Header>
                  <Accordion.Body>
                    Our premium lounges are accessible to business class travelers or through our lounge membership program. Some credit cards also offer complimentary access.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Which airlines do you partner with?</Accordion.Header>
                  <Accordion.Body>
                    We partner with all major Indian carriers including Air India, IndiGo, Vistara, and international partners through codeshare agreements.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Can I book flights directly through your service?</Accordion.Header>
                  <Accordion.Body>
                    Yes, we offer full-service flight booking with exclusive benefits not available when booking directly with airlines.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col lg={6}>
              <div className="bg-primary text-white p-5 rounded-3 h-100">
                <h3 className="fw-bold mb-4">Need Personalized Assistance?</h3>
                <p className="mb-4">Our travel experts are available 24/7 to help plan your perfect journey.</p>
                <Button variant="light" size="lg" className="px-4">
                  <i className="bi bi-telephone-outbound me-2"></i> Contact Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white pt-5 pb-4">
        <Container>
          <Row>
            <Col lg={4} className="mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4">Sunbeam Travel</h5>
              <p>Elevating your travel experience with premium services and exclusive partnerships.</p>
              <div className="social-icons">
                <a href="#" className="text-white me-3"><i className="bi bi-facebook fs-5"></i></a>
                <a href="#" className="text-white me-3"><i className="bi bi-twitter fs-5"></i></a>
                <a href="#" className="text-white me-3"><i className="bi bi-instagram fs-5"></i></a>
                <a href="#" className="text-white"><i className="bi bi-linkedin fs-5"></i></a>
              </div>
            </Col>
            <Col lg={2} md={4} className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Services</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Flight Booking</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Lounge Access</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">VIP Services</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Travel Insurance</a></li>
              </ul>
            </Col>
            <Col lg={2} md={4} className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Airlines</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Air India</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">IndiGo</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Vistara</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">International</a></li>
              </ul>
            </Col>
            <Col lg={4} md={4}>
              <h5 className="text-uppercase mb-4">Newsletter</h5>
              <p>Subscribe for exclusive travel deals and updates</p>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </Col>
          </Row>
          <hr className="my-4" />
          <Row>
            <Col md={6} className="text-center text-md-start">
              <p className="mb-0">© 2025 Sunbeam Travel. All rights reserved.</p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <p className="mb-0">
                <a href="#" className="text-white text-decoration-none me-3">Privacy Policy</a>
                <a href="#" className="text-white text-decoration-none">Terms of Service</a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default About;