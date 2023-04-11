import React from "react";
import Card from "react-bootstrap/Card";

const RegularForm = () => {
  return (
    <Card >
      <Card.Body>
        <div>
          <div>
            <h3>Stacked Form</h3>
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput2" className="form-label">
              password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="password"
            />
          </div>
          <button type="button" class="btn btn-primary">
            Submit
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RegularForm;
