import React from "react";
import 'antd/dist/antd.css';
import { Form,Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { notification } from "antd";
import {
  YOUR_SERVICE_ID,
  YOUR_TEMPLATE_ID,
  YOUR_USER_ID,
} from "./config.js";

function MailForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_USER_ID)
      .then(
        (result) => {
          console.log("result", result)
          console.log(result.text);
          notification.open({
            message: 'Conformation',
            description:
              'Email Has been sent successfully thank you',
            className: 'custom-class',
            style: {
              width: 600,
            },
          });
        
        },
        (error) => {
          console.log(error.text);
          notification.open({
            message: 'Failed to send',
            description:
              'please check and retry again...',
            className: 'custom-class',
            style: {
              width: 600,
            },
          });
        }
      );
  }
  return (
    <div className="col-sm">
    <h4>Drop a Message</h4>
    <Form onSubmit={sendEmail}>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control type="email"  name="receiver_name" placeholder="receiver@example.com" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control type="email" name="sender_name" placeholder="receiver@example.com" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" />
      </Form.Group>


      <Button type="submit" variant="outline-info" size="lg" block>Send</Button>
    </Form>
    </div>
  );
}

export default MailForm;
