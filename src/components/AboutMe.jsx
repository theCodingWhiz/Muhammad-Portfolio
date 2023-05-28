import React from "react";
import styled, { keyframes } from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  position: relative;
`;

const Right = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Line = styled.img`
  width: 50px;
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #cc0000;
`;

const Description = styled.p`
  font-size: 20px;
  background-color: #d3af37;
  color: #000000;
  border-radius: 20px;
  border: 5px solid #000000;
  padding: 20px;
  width: 800px;
  max-width: 100%;
`;

const Button = styled.button`
  background-color: #cc0000;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #ffffff;
    color: #cc0000;
  }
`;

const AboutMe = () => {
  return (
    <Section>
      <Container>
        <Left></Left>
        <Right>
          <Title>Your Limit Is Your Only Imagination</Title>
          <WhatWeDo>
            <Line src="./line.png" alt="Line" />
            <Subtitle>Check out my projects I've been working on!</Subtitle>
          </WhatWeDo>
          <Description>
            <Button>Projects</Button>
          </Description>
        </Right>
      </Container>
    </Section>
  );
};

export default AboutMe;
