import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  css from "../assets/img/skillsIcons/css.png"
import  express from "../assets/img/skillsIcons/express-js.png"
import  flask from "../assets/img/skillsIcons/flask.png"
import  html from "../assets/img/skillsIcons/html.png"
import  java from "../assets/img/skillsIcons/Java.png"
import  javascript from "../assets/img/skillsIcons/javascript.png"
import  mongodb from "../assets/img/skillsIcons/mongodb.svg"
import  node from "../assets/img/skillsIcons/node.png"
import  postgresql from "../assets/img/skillsIcons/POSTGRESQL.png"
import  python from "../assets/img/skillsIcons/python.png"
import  react from "../assets/img/skillsIcons/react.png"
import  spring from "../assets/img/skillsIcons/spring.png"



const Skills = () => {
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
    };
    return ( 
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-box">
                        <h2>
                            Skills
                        </h2>
                        <p>
                            Some Languages and Frameworks I have used in previous Projects
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={javascript} alt="Skill"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Skill"/>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Skill"/>
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Skill"/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Skill"/>
                                <h5>Cascading Style Sheets-CSS</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="Skill"/>
                                <h5>Express.js</h5>
                            </div>
                            <div className="item">
                                <img src={flask} alt="Skill"/>
                                <h5>Flask</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Skill"/>
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Skill"/>
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={postgresql} alt="Skill"/>
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Skill"/>
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={spring} alt="Skill"/>
                                <h5>Spring Framework</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
 
export default Skills;