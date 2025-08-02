import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddAirline = () => {
  const navigate = useNavigate();

  const submit = () => {
    const [airlineName, flightNumber] = useState("");
    const [airlineNoOfFlights, setAirlineNoOfFlights] = useState(0);

    const addAirline = async () => {};

    addAirline(airlineData);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white">
              <div className="d-flex justify-content-between align-items-center">
                <Button
                  variant="link"
                  className="text-white p-0"
                  onClick={handleBack}
                >
                  <FaArrowLeft className="me-2" />
                  Back to Airlines
                </Button>
                <h4 className="mb-0">
                  <FaPlane className="me-2" />
                  Add New Airline
                </h4>
              </div>
            </Card.Header>

            <Card.Body>
              {showSuccess && (
                <Alert
                  variant="success"
                  dismissible
                  onClose={() => setShowSuccess(false)}
                  className="animate__animated animate__fadeIn"
                >
                  <FaCheck className="me-2" />
                  Airline added successfully!
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Airline Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="airlineName"
                    placeholder="e.g. Delta Airlines"
                    value={formData.airlineName}
                    onChange={handleChange}
                    isInvalid={!!errors.airlineName}
                    className="py-2"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.airlineName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Number of Flights</Form.Label>
                  <Form.Control
                    type="number"
                    name="noOfFlights"
                    placeholder="e.g. 25"
                    value={formData.noOfFlights}
                    onChange={handleChange}
                    isInvalid={!!errors.noOfFlights}
                    min="0"
                    className="py-2"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.noOfFlights}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid gap-3">
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                    className="py-2 fw-bold"
                  >
                    {isSubmitting ? "Adding Airline..." : "Add Airline"}
                  </Button>

                  <Button
                    variant="outline-secondary"
                    onClick={handleBack}
                    className="py-2"
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddAirline;
