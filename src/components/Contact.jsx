import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Left = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Input = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 20px;
  border: 5px solid #000000;
  padding: 20px;
  font-size: 20px;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  width: 500px;
  height: 200px;
  border-radius: 20px;
  border: 5px solid #000000;
  padding: 20px;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 20px;
  border: 5px solid #000000;
  padding: 20px;
  font-size: 20px;
  margin-bottom: 20px;
  background-color: #d3af37;
  color: #000000;
  cursor: pointer;
`;

const Right = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Contact Me</Title>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Subject" />
          <TextArea placeholder="Message" />
          <Button>Send</Button>
        </Left>
      </Container>
    </Section>
  );
};

export default Contact;
