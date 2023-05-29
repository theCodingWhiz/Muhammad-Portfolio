import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: auto 20px;
  margin: auto;
`;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Title = styled.h1`
  font-size: 50px;
  color: #d3af37;
  -webkit-text-stroke: 1px #cc0000;
  text-align: center;
  margin: 0;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const IronmanMini = styled.img`
  width: 30px;
  height: auto;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  background-color: #d3af37;
  color: #000000;
  border-radius: 20px;
  border: 5px solid #000000;
  padding: 20px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 20px;
  background-color: #d3af37;
  color: #000000;
  border-radius: 20px;
  border: 5px solid #000000;
  padding: 10px;
  width: 100%;
`;

const Img = styled.img`
  width: auto;
  height: auto;
  object-fit: contain;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: animate 1.5s infinite ease alternate;

  @keyframes animate {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Hi, I'm Muhammad Omar</Title>
          <WhatWeDo>
            <IronmanMini src="./img/ironmanmini.png" alt="ironman mini" />
            <Subtitle>Thank you for visiting my portfolio!</Subtitle>
          </WhatWeDo>
          <Description>
            I am a full stack web developer with a passion for learning and
            creating. I am a graduate of the La Fosse Academy. I am currently
            looking for a role as a junior developer. I am a hardworking,
            self-motivated individual who is always looking to improve my
            skills. I am a team player who is always willing to help others. I
            am a quick learner who is always looking to learn new skills. I am a
            creative individual who is always looking to create new things. I am
            a problem solver who is always looking to solve problems. I am a
            good communicator who is always looking to communicate with others.
            I am a good listener who is always looking to listen to others. I am
            a good leader who is always looking to lead others.
          </Description>
        </Left>
        <Right>
          <Img src="./img/Marvel-Avengers-PNG.png" alt="Ironman" />
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
