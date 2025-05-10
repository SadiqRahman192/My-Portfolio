import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, useTexture } from "@react-three/drei";
import * as THREE from "three";

const FloatingObjects = () => {
  const mesh1 = useRef<THREE.Mesh>(null);
  const mesh2 = useRef<THREE.Mesh>(null);
  const mesh3 = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh1.current) {
      mesh1.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      mesh1.current.rotation.y += 0.005;
      mesh1.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
    
    if (mesh2.current) {
      mesh2.current.rotation.x += 0.003;
      mesh2.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.3;
      mesh2.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.7 + 2) * 0.2;
    }
    
    if (mesh3.current) {
      mesh3.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      mesh3.current.rotation.y += 0.004;
      mesh3.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.6 + 4) * 0.2;
    }
  });

  return (
    <>
      <mesh ref={mesh1} position={[-2, 0, 0]}>
        <torusKnotGeometry args={[0.5, 0.2, 128, 32]} />
        <meshStandardMaterial
          color="#9b87f5"
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
      
      <mesh ref={mesh2} position={[2, -0.5, 1]}>
        <icosahedronGeometry args={[0.7, 1]} />
        <meshStandardMaterial
          color="#7E69AB"
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
      
      <mesh ref={mesh3} position={[0, 1, -1]}>
        <octahedronGeometry args={[0.6]} />
        <meshStandardMaterial
          color="#0993D7"
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </>
  );
};

const ThreeDAnimation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#9b87f5" intensity={0.5} />
        <FloatingObjects />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDAnimation;