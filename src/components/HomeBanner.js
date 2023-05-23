import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/world-spin.gif";
import TypingEffect from "./TypingEffect";

const HomeBanner = () => {
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1><TypingEffect/></h1>
              <p>
                As a junior software engineer, what motivates me most is developing innovative solutions to real-world challenges. I’m
                passionate about solving complex technical issues and successfully driving projects from conception to completion. Thanks for looking at my E-portfolio made using React.js.
              </p>
            </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default HomeBanner;
