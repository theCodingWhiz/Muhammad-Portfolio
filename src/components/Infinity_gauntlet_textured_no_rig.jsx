/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 infinity_gauntlet_textured_no_rig.gltf --transform
Author: CAPTAAINR (https://sketchfab.com/CAPTAAINR)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/infinity-gauntlet-textured-no-rig-29f35a6194cb4c36a2c271c747c72c80
Title: Infinity Gauntlet (Textured) (No Rig)
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF(
    "Muhammad-Omar-Portfolio/public/img/infinity_gauntlet_textured_no_rig-transformed.glb"
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
}
