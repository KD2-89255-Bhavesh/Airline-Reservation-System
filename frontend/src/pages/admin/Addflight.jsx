import React, { useState } from 'react';
import { Form, Button, Container, Alert, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const AddFlightForm = () => {
  const [formData, setFormData] = useState({
    airline_id: '',
    flight_no: '',
    flight_has: 'economy',
    no_of_economy_seats: 0,
    no_of_first_seats: 0,
    no_of_business_seats: 0
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [airlines, setAirlines] = useState([]); // This would be populated from API


  const navigate = useNavigate()

  const back = () =>{
    navigate("/flightmanagement")
  }

  // This would come from an API call in a real app
  const mockAirlines = [
    { airline_id: 1, airline_name: 'Delta Airlines' },
    { airline_id: 2, airline_name: 'United Airlines' },
    { airline_id: 3, airline_name: 'American Airlines' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseInt(value) || 0
    }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.airline_id) {
      newErrors.airline_id = 'Please select an airline';
    }
    
    if (!formData.flight_no.trim()) {
      newErrors.flight_no = 'Flight number is required';
    } else if (formData.flight_no.length > 10) {
      newErrors.flight_no = 'Flight number must be 10 characters or less';
    }
    
    const totalSeats = 
      (parseInt(formData.no_of_economy_seats) || 0) +
      (parseInt(formData.no_of_first_seats) || 0) +
      (parseInt(formData.no_of_business_seats) || 0);
    
    if (totalSeats <= 0) {
      newErrors.seats = 'At least one seat must be added';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      // In a real app, this would be an API call
      console.log('Submitting flight data:', {
        ...formData,
        added_by: 1 // This would come from auth context
      });
      
      setSuccess(true);
      setFormData({
        airline_id: '',
        flight_no: '',
        flight_has: 'economy',
        no_of_economy_seats: 0,
        no_of_first_seats: 0,
        no_of_business_seats: 0
      });
      
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error adding flight:', error);
      setErrors({
        submit: 'Failed to add flight. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Add New Flight</h2>
      
      {success && (
        <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
          Flight added successfully!
        </Alert>
      )}
      
      {errors.submit && (
        <Alert variant="danger" onClose={() => setErrors({...errors, submit: ''})} dismissible>
          {errors.submit}
        </Alert>
      )}
      
      <Form onSubmit={handleSubmit}>
        {/* Airline Selection */}
        <Form.Group className="mb-3">
          <Form.Label>Airline</Form.Label>
          <Form.Select
            name="airline_id"
            value={formData.airline_id}
            onChange={handleChange}
            isInvalid={!!errors.airline_id}
          >
            <option value="">Select an airline</option>
            {mockAirlines.map(airline => (
              <option key={airline.airline_id} value={airline.airline_id}>
                {airline.airline_name}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.airline_id}
          </Form.Control.Feedback>
        </Form.Group>
        
        {/* Flight Number */}
        <Form.Group className="mb-3">
          <Form.Label>Flight Number</Form.Label>
          <Form.Control
            type="text"
            name="flight_no"
            value={formData.flight_no}
            onChange={handleChange}
            isInvalid={!!errors.flight_no}
            placeholder="Enter flight number (e.g., DL123)"
            maxLength={10}
          />
          <Form.Control.Feedback type="invalid">
            {errors.flight_no}
          </Form.Control.Feedback>
        </Form.Group>
        
        {/* Flight Class */}
        <Form.Group className="mb-3">
          <Form.Label>Flight Has</Form.Label>
          <Form.Select
            name="flight_has"
            value={formData.flight_has}
            onChange={handleChange}
          >
            <option value="economy">Economy Class</option>
            <option value="business">Business Class</option>
            <option value="first">First Class</option>
          </Form.Select>
        </Form.Group>
        
        {/* Seats Configuration */}
        <h5 className="mt-4 mb-3">Seat Configuration</h5>
        
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Economy Seats</Form.Label>
              <Form.Control
                type="number"
                name="no_of_economy_seats"
                value={formData.no_of_economy_seats}
                onChange={handleNumberChange}
                min="0"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Business Seats</Form.Label>
              <Form.Control
                type="number"
                name="no_of_business_seats"
                value={formData.no_of_business_seats}
                onChange={handleNumberChange}
                min="0"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>First Class Seats</Form.Label>
              <Form.Control
                type="number"
                name="no_of_first_seats"
                value={formData.no_of_first_seats}
                onChange={handleNumberChange}
                min="0"
              />
            </Form.Group>
          </Col>
        </Row>
        
        {errors.seats && (
          <Alert variant="danger" className="mb-3">
            {errors.seats}
          </Alert>
        )}
        
        <div className="d-grid gap-2">
          <Button 
          onClick={back}
            variant="primary" 
            type="submit"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding Flight...' : 'Add Flight'}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddFlightForm;