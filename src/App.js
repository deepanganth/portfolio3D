import { Canvas,useLoader} from "react-three-fiber";
import { OrbitControls} from "@react-three/drei";
import {Physics, useBox, usePlane} from "@react-three/cannon";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import texture from "./images/Btexture1.jpg";
import './App.css'
import './styles.css';
import Section_2 from "./Section_2";
import Footer from "./footer/Footer";
import Toolset from "./toolset/Toolset";
import Work from "./work/work";

const bg1 = "images/Circle.png"

function Box(){
  const [ref] = useBox(() => ({mass:1, position:[2,10,3]}));
  const colorMap = useLoader(TextureLoader,texture)
  return(
    <mesh ref={ref} position={[2,10,3]} >
      <boxBufferGeometry attach = "geometry" args={[1.2,1.2,1.2]}/>
      <meshStandardMaterial map={colorMap}/>
    </mesh>
  ); 
}
function Box1(){
  const [ref] = useBox(() => ({mass:1, position:[2,11,2]}));
  return(
    <mesh ref={ref} position={[2,10,3]} >
      <boxBufferGeometry attach = "geometry" args={[.7,.7,.7]}/>
      <meshStandardMaterial color="#B9F3E4" />
    </mesh>
  ); 
}
function Box2(){
  const [ref] = useBox(() => ({mass:1, position:[3,12,0]}));
  return(
    <mesh ref={ref} position={[2,10,3]} >
      <boxBufferGeometry attach = "geometry" args={[.5,.5,.5]}/>
      <meshStandardMaterial color="#EA8FEA" />
    </mesh>
  ); 
}
function Box3(){
  const [ref] = useBox(() => ({mass:1, position:[1.5,13,3]}));
  return(
    <mesh ref={ref} position={[2,10,3]} >
      <boxBufferGeometry attach = "geometry" args={[.6,.6,1]}/>
      <meshStandardMaterial color="#FFEA20" />
    </mesh>
  ); 
}
function Box4(){
  const [ref] = useBox(() => ({mass:1, position:[2,14,3]}));
  return(
    <mesh ref={ref} position={[2,10,3]} >
      <boxBufferGeometry attach = "geometry" args={[.4,.4,.4]}/>
      <meshStandardMaterial color="#86C8BC" />
    </mesh>
  ); 
}

function Box5(){
  const [ref] = useBox(() => ({mass:1, position:[2,15,2]}));
  return(
    <mesh ref={ref} position={[2,10,3]} >
      <boxBufferGeometry attach = "geometry" args={[.7,.7,.7]}/>
      <meshStandardMaterial color="#F0FF42" />
    </mesh>
  ); 
}
function Box6(){
  const [ref] = useBox(() => ({mass:1, position:[1,16,0]}));
  return(
    <mesh ref={ref} position={[2,10,3]} >
      <boxBufferGeometry attach = "geometry" args={[.5,.5,.5]}/>
      <meshStandardMaterial color="#F9D8D6" />
    </mesh>
  ); 
}
function Box7(){
  const [ref] = useBox(() => ({mass:1, position:[1.5,17,3]}));
  return(
    <mesh ref={ref} position={[2,10,3]} >
      <sphereBufferGeometry attach = "geometry" args={[.5]}/>
      <meshStandardMaterial color="#A555EC" />
    </mesh>
  ); 
}
function Box8(){
  const [ref] = useBox(() => ({mass:1, position:[2,18,3]}));
  return(
    <mesh ref={ref} position={[2,10,3]} >
      <boxBufferGeometry attach = "geometry" args={[.4,.4,.4]}/>
      <meshStandardMaterial color="#EFF9DA" />
    </mesh>
  ); 
}

function Plane(){
  const [ref] = usePlane(()=> ({
    rotation: [-Math.PI/2,0,0],
    position: [2,.4,2.7]
  }));
  return(
    <mesh ref={ref} rotation={[Math.PI/2,0,0]} position={[2,.4,2.7]}>
      <planeBufferGeometry attach="geometry" args={[5,5,5]}/>
      <meshLambertMaterial attach="material" color="#383838"/>
    </mesh>
  ); 
}
function B_box(){
  return(
    <mesh position={[2,0,2.7]} rotation={[-Math.PI/2,0,0]}>
      <boxBufferGeometry attach = "geometry" args={[5,5,.8]}/>
      <meshPhongMaterial attach="material" color="#383838" />
    </mesh>
  ); 
}
function App() {
  return (
    <div>
      <div className="canvas3D">
        <Canvas camera={{ fov: 5, position: [-45, 32, 60]}}>
          <OrbitControls enableZoom={false} />
          <pointLight position={[0, 20, 10]} intensity={.5} />
          <ambientLight intensity={.5}/>
          <B_box/>
          <Physics>
            <Box/><Box1/><Box2/><Box3/><Box4/><Box5/><Box6/><Box7/><Box8/>
            <Plane/>
          </Physics>
        </Canvas>
      </div>
      <div className='section-1'>
        <div className="navbar">
          <div className="logo"></div>
          <p>Dev Deepan</p>
          <div className="dribbble"></div>
          <a href="">Dribbble</a>
          <div className="insta"></div>
          <a href="">Instagram</a>
        </div>
        <div className='Name'>
          <h1>Hello, my name's </h1>
          <h1>Deepan ganth</h1>
          <p>UI/UX DESIGNER - WEB DEVELOPER - 3D DESIGNER</p>
        </div>
      </div>
      <Work/>
      <Section_2 />
      <Toolset/>
      <Footer/>
    </div>

  ); 
}
export default App;