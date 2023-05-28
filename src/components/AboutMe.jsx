import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

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

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  color: #d3af37;
  -webkit-text-stroke: 1px #cc0000;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
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
  font-size: 20px;
  background-color: #d3af37;
  color: #000000;
  border-radius: 20px;
  border: 5px solid #000000;
  padding: 20px;
  width: 800px;
  max-width: 100%;
`;

const Description = styled.p`
  font-size: 20px;
`;

const Button = styled.button`
  font-size: 20px;
  background-color: #d3af37;
  color: #000000;
  border-radius: 20px;
  border: none;
  margin: auto;
  padding: 10px 20px;
  width: fit-content;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #ffffff;
    color: #cc0000;
  }
`;

const IronmanMini = styled.img`
  width: 30px; /* Adjust the width as desired */
  height: auto; /* Maintain aspect ratio */
  object-fit: contain; /* Preserve image proportions */
`;

const AboutMe = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Your Limit Is Your Only Imagination</Title>
          <WhatWeDo>
            <IronmanMini src="./img/ironmanmini.png" alt="ironman mini" />
            <Subtitle>
              <p>
                "The only way to do great work is to love what you do." - Steve
                Jobs
              </p>
              <p>
                Remember, being a software developer is a journey of continuous
                learning and growth. Stay inspired, persevere through
                challenges, and embrace the joy of creating and solving problems
                with code.
              </p>
            </Subtitle>
          </WhatWeDo>
          <Description>
            <Button>About Me</Button>
          </Description>
        </Right>
      </Container>
    </Section>
  );
};

export default AboutMe;
