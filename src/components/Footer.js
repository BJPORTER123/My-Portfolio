import { Container, Row, Col } from "react-bootstrap";
import profile from "../assets/img/profilephoto.png"
import linkedIn from "../assets/img/linkedin.png"
import github from "../assets/img/github.png"

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={profile} alt="profile" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/ben-porter-8b52a2266/"><img src={linkedIn} alt="linked In" /></a>
                <a href="https://github.com/BJPORTER123"><img src={github} alt="github" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;