import Card from "react-bootstrap/Card";

const UserBehavior = () => {
  return (
    <Card className="mt-1">
      <Card.Body>
      <h3> User Behavior</h3>
        <img
          src="piechartline.png"
          style={{ width: "400px", height: "300px" }}
        ></img>
      </Card.Body>
    </Card>
  )
}

export default UserBehavior