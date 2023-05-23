import { Container, Row, Col, Tab } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import RobitImg from "../assets/img/Robit.png";
import TravelAppImg from "../assets/img/travelapp.png";
import TriviaAppImg from "../assets/img/triviaapp.png";



const Projects = () => {

    return (  
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>These are some of the first larger projects I completed. I hope to add many more</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Unity Game</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Travel App</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">Trivia App</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                            <div className="proj-imgbx">
                                <div>
                                <img src={RobitImg} alt="Robit App" />
                                </div>
                                <div className="proj-txtx">
                                <h4>Robit - Unity Platform Game</h4>
                                <span>A platform game built in Unity Engine and my first Unity Project.</span>
                                <h5><i>Technologies Used: Unity, C#, Adobe Photoshop</i></h5>
                                </div>
                            </div>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Row>
                            <div className="proj-imgbx">
                                <div>
                                <img src={TravelAppImg} alt="Travel App" />
                                </div>
                                <div className="proj-txtx">
                                <h4>Travel App - React App</h4>
                                <span>A Travel App Built in ReactJS for users to bucketlist countries they would like to visit.</span>
                                <h5><i>Tecnologies used: Javascript, React, Express.JS, MongoDB</i></h5>
                                </div>
                            </div>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Row>
                            <div className="proj-imgbx">
                                <div>
                                <img src={TriviaAppImg} alt="Trivia App" />
                                </div>
                                <div className="proj-txtx">
                                <h4>Trivia App - React App</h4>
                                <span>A simpslistic Trivia App made using a trivia API and react.  </span>
                                <h5><i>Technologies used: Javascript, React</i></h5>
                                </div>
                            </div>
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
 
export default Projects;