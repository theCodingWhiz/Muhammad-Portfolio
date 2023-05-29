import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef();
  const amplitude = 0.5; // Adjust the amplitude of the bouncing effect
  const frequency = 1; // Adjust the frequency of the bouncing effect

  useFrame((state) => {
    const positionY = Math.sin(state.clock.elapsedTime * frequency) * amplitude;
    textRef.current.position.y = positionY;
  });

  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <color attach="background" args={["#266ef6"]} />
          <Text
            ref={textRef}
            fontSize={1}
            color="#555"
            anchorX="center"
            anchorY="middle"
            maxWidth={6}
            textAlign="center"
            outlineWidth={0.05}
            outlineColor="#000"
          >
            theCodingWhiz
          </Text>
          <spotLight
            position={[0, 0, 5]}
            color="#ffffff"
            intensity={2} // Adjust the intensity of the spotlight
            angle={Math.PI / 8} // Adjust the angle of the spotlight
            penumbra={1} // Adjust the penumbra of the spotlight
          />
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
