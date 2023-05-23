import { Container, Row, Col } from "react-bootstrap";
import emailclosed from "../assets/img/skillsIcons/emailclosed.png"
import emailopen from "../assets/img/skillsIcons/emailopen.png"
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
const [state, handleSubmit] = useForm("xpzeepll");
if(state.succeeded){
    return <p>Thanks for getting in touch!</p>; 
}
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   let response = await fetch("http://localhost:3001/api/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Send"); 
  //   setFormDetails(formInitialDetails);
    
  //   if (response.status === 200) {
  //     setStatus({ success: true, message: 'Message sent successfully'});
  //   } else {
  //     setStatus({ success: false, message: 'Something went wrong, please try again later.'});
  //   }
  //   setTimeout(() => {
  //     setStatus({});
  //   }, 4000);
  // };

  return (

    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
            <Col size={12} md={6}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                    <input
                      id="firstName"
                      type="text" 
                      name="First Name"
                      placeholder="First Name"
                    />
                    <ValidationError 
                      prefix="First Name" 
                      field="First Name"
                      errors={state.errors}
                    />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input
                      id="lastName"
                      type="text" 
                      name="last Name"
                      placeholder="Last Name"

                    />
                    <ValidationError 
                      prefix="Last Name" 
                      field="Last Name"
                      errors={state.errors}
                    />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input
                      id="telephone"
                      type="tel" 
                      name="Telephone No."
                      placeholder="Telephone No."

                    />
                    <ValidationError 
                      prefix="Telephone" 
                      field="Telephone"
                      errors={state.errors}
                    />
                    </Col>
                    <Col size={12} className="px-1">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                      <button type="submit" disabled={state.submitting}><span>Send</span></button>
                    </Col>
                  </Row>
                </form>
            </Col>
            <Col>
              <div className="email-img">
                <img src={emailopen} alt="Email" className="open" />
                <img src={emailclosed} alt="Email" className="closed" />
              </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Contact;