import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  border: 5px solid #000000;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border-radius: 20px;
  border: 5px solid #000000;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  border: 5px solid #000000;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
  background-color: #ffd300;
  color: #000000;
  cursor: pointer;
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k5a8sq8",
        "template_5biib3q",
        ref.current,
        "fAlt7Bm__x2EAVCsy"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <form ref={ref} onSubmit={handleSubmit}>
          <Title>Contact Me</Title>
          <Input placeholder="Name" name="name" />
          <Input placeholder="Email" name="email" />
          <TextArea placeholder="Message" name="message" rows={10} />
          <Button type="submit">Send</Button>
          {success && (
            <p>Thank you for your message! I will get back to you soon.</p>
          )}
        </form>
      </Container>
    </Section>
  );
};

export default Contact;
