import React from "react";
import CardComponent from "./CardComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TableComponent from "./TableComponent";
import EmailStatics from "./EmailStatics";
import UserBehavior from "./UserBehavior";

const Dashboard = () => {
  return (
 
      <Row>
        <Row>
          <Col sm={3}>
            <CardComponent
              bottomText="Update"
              topText="Number 150GB"
              icon={<i className="fa fa-ravelry" aria-hidden="true"></i>}
            />
          </Col>

          <Col sm={3}>
            <CardComponent
              bottomText="Last Day"
              topText="Revenue $1,345"
              icon={<i className="fa fa-snowflake-o" aria-hidden="true"></i>}
            />
          </Col>
          <Col sm={3}>
            <CardComponent
              bottomText="In Last hours"
              topText="Errors 23"
              icon={
                <i
                  className="fa fa-exclamation-triangle"
                  aria-hidden="true"
                ></i>
              }
            />
          </Col>
          <Col sm={3}>
            <CardComponent
              bottomText="Update Nows"
              topText="Followers +45K"
              icon={<i className="fa fa-heart" aria-hidden="true"></i>}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <TableComponent />
          </Col>
        </Row>
        <Row>
          <Col>
            <EmailStatics />
          </Col>
          <Col>
            <UserBehavior />
          </Col>
        </Row>
      </Row>
   
  );
};

export default Dashboard;
