import Card from "react-bootstrap/Card";

const CardComponent = ({ bottomText, topText, icon }) => {
  return (
    <Card className="mt-1" style={{width:"100%"}}>
    <Card.Body>
      <Card.Title> {icon}</Card.Title>
      <Card.Text>{topText}</Card.Text>
      <i className="fa fa-repeat" aria-hidden="true"></i>
      {bottomText}
    </Card.Body>
  </Card>
  )
}

export default CardComponent