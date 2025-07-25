import React from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const AddAirline = () => {

  const navigate = useNavigate()

  const back = () =>{
    navigate("/airlinemanagement")
  }

  return (
    <Container className="mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">Add New Airline</h2>
      
      {/* Success message placeholder */}
      <Alert variant="success" dismissible className="d-none">
        Airline added successfully!
      </Alert>
      
      {/* Error message placeholder */}
      <Alert variant="danger" dismissible className="d-none">
        Error message would appear here
      </Alert>
      
      <Form>
        <Form.Group className="mb-3" controlId="airlineName">
          <Form.Label>Airline Name</Form.Label>
          <Form.Control
            type="text"
            name="airline_name"
            placeholder="Enter airline name"
          />
          <Form.Control.Feedback type="invalid" className="d-none">
            Validation error would appear here
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="flightNumber">
          <Form.Label>Number of Flights</Form.Label>
          <Form.Control
            type="number"
            name="no_of_flights"
            placeholder="Enter number of flights"
            min="0"
          />
          <Form.Control.Feedback type="invalid" className="d-none">
            Validation error would appear here
          </Form.Control.Feedback>
        </Form.Group>
        
        <Button 
        onClick={back}
        variant="primary" type="submit">
          Add Airline
        </Button>
      </Form>
    </Container>
  );
};

export default AddAirline;