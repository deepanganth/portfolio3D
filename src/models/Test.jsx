/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 test.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/test-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} scale={[1, 0.43, 1]} />
      <mesh geometry={nodes.Sphere.geometry} material={materials['default']} position={[0, 1.1, 0]} scale={0.77} />
    </group>
  )
}

useGLTF.preload('/test-transformed.glb')
