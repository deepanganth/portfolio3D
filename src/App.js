import React from 'react';
import { Canvas, useLoader } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import {Physics,useBox, usePlane} from "@react-three/cannon";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import texture from "./images/Btexture.jpg";
import './App.css'
import './styles.css';

function Box(){
  const colorMap = useLoader(TextureLoader,texture)
  const [ref,api] = useBox(() => ({mass:.1,position:[0,10,0]}));
  return(
    <mesh onClick={() => api.velocity.set(0,4,0)} ref={ref} position={[0,.5,0]}>
      <boxBufferGeometry attach = "geometry"/>
      <meshStandardMaterial map={colorMap}/>
    </mesh>
  ); 
}
function Plane(){
  const [ref] = usePlane(() => ({rotation: [-Math.PI/2,0,0]}));
  return(
    <mesh position={[0,0,0]} rotation={[-Math.PI/2,0,0]}>
      <planeBufferGeometry attach = "geometry"args={[3,3]}/>
      <meshLambertMaterial attach = "material" color="0"/>
    </mesh>
  ); 
}


function App() {
  return (
    <Canvas>
      <OrbitControls />
      {/* <spotLight position={[100,100,100]} intensity={.5} angle={0.3}/> */}
      <ambientLight intensity={.5}/>
      <Physics>
        <Plane />
        <Stars/>
        <Box />
      </Physics>
    </Canvas>
  );
    
}

export default App;
