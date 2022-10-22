import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import Avatar from "./Avatar";
import { getMousePos } from "./utils"
import ReactDOM from "react-dom"
import {ContactShadows, Environment, OrbitControls, Html} from "@react-three/drei";

export default function App() {
  const d = 8.25
  const mouse = useRef({ x: 0, y: 0 })
  return (
  <>
   <Canvas 
      onMouseMove={e => (mouse.current = getMousePos(e))} camera={{ position: [0, 0, 4], fov: 50 }}
     >
        <Suspense fallback={null}>
          <Avatar 
          mouse={mouse}   />

        </Suspense>
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
      </Canvas>
  </>
  );
}