"use client"

import { useRef } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import * as THREE from "three"
import { TextureLoader } from "three"

function Sphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  // Using public high-res textures for Earth
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
    "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
    "https://unpkg.com/three-globe/example/img/earth-topology.png",
    "https://unpkg.com/three-globe/example/img/earth-water.png",
    "https://unpkg.com/three-globe/example/img/earth-water.png",
  ])

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.05
  })

  return (
    <group position={position} dispose={null}>
      {/* Earth Sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          normalMap={normalMap}
          specularMap={specularMap}
          shininess={5}
        />
      </mesh>
      
       {/* Clouds Sphere (slightly larger) */}
      <mesh>
        <sphereGeometry args={[2.53, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          transparent={true}
          opacity={0.4}
          depthWrite={false}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Atmosphere Glow (Simulated with simple scaling or custom shader, keeping simple for now) */}
       <mesh scale={[1.1, 1.1, 1.1]}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshBasicMaterial
          color="#004d40"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}

function Satellite() {
  const ref = useRef<THREE.Group>(null!)
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.5
    // Orbit logic
    ref.current.position.x = Math.cos(t) * 4
    ref.current.position.z = Math.sin(t) * 4
    ref.current.position.y = Math.sin(t * 0.5) * 1.5
    
    ref.current.lookAt(0, 0, 0)
    ref.current.rotateY(Math.PI / 2) // Orient panels
  })

  return (
    <group ref={ref}>
      {/* Satellite Body */}
      <mesh position={[0, 0, 0]}>
         <boxGeometry args={[0.2, 0.2, 0.4]} />
         <meshStandardMaterial color="silver" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Solar Panels */}
      <mesh position={[0.4, 0, 0]}>
         <boxGeometry args={[0.6, 0.02, 0.3]} />
         <meshStandardMaterial color="#223344" metalness={0.5} roughness={0.1} emissive="#001133" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[-0.4, 0, 0]}>
         <boxGeometry args={[0.6, 0.02, 0.3]} />
         <meshStandardMaterial color="#223344" metalness={0.5} roughness={0.1} emissive="#001133" emissiveIntensity={0.2} />
      </mesh>
      
      {/* Blinking Light */}
      <pointLight color="#00ff00" intensity={2} distance={1} position={[0, 0.1, 0]} />
    </group>
  )
}

export function EarthCanvas() {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} color="#444444" />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ccff" />
        
        <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Sphere position={[0, 0, 0]} />
        <Satellite />
        
        <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            enableRotate={true} 
            rotateSpeed={0.4}
            autoRotate={true}
            autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
