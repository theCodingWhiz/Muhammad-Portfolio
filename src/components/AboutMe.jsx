import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

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
  color: #333d70;
  -webkit-text-stroke: 1px #acb0f7;
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

const Infinity_stones = styled.img`
  width: 150px;
  height: auto;
  object-fit: contain;
`;

const Subtitle = styled.h2`
  color: #cc0000;
  font-size: 20px;
  background-color: #6e5e8e;
  color: #ffffff;
  border-radius: 20px;
  // border: 5px solid #000000;
  padding: 20px;
  width: 800px;
  max-width: 100%;
`;

const Description = styled.p`
  font-size: 20px;
`;

const Button = styled.button`
  width: auto;
  height: auto;
  border-radius: 20px;
  // border: 5px solid #000000;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
  background-color: #6e5e8e;
  color: #000000;
  cursor: pointer;

  &:hover {
    background-color: #48315b;
    color: white;
  }
`;

const Infinity_gauntlet_textured_no_rig = (props) => {
  const { nodes, materials } = useGLTF(
    "/img/infinity_gauntlet_textured_no_rig-transformed.glb"
  );

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.infinitygauntlet_0}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

const AboutMe = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas
            camera={{ position: [1, 1, 2.5], near: 0.01, far: 100 }}
            style={{ width: "100%", height: "100%" }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Infinity_gauntlet_textured_no_rig />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Your Limit Is Your Only Imagination</Title>
          <WhatWeDo>
            <Infinity_stones
              src="./img/infinity_stones.png"
              alt="infinity stones"
            />
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
