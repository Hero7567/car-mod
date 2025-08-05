import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Toolbar from './Toolbar';

function MercedesGLB({ color }) {
  const { scene } = useGLTF('/assets/models/mercedes_glb_amg.glb');

  // Apply the color to all mesh materials
  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.color.set(color);
    }
  });

  return <primitive object={scene} scale={0.5} />;
}

export default function CarViewer3D() {
  const [carColor, setCarColor] = useState('#ffffff');
  const [key, setKey] = useState(0); // To trigger full reset

  const handleColorChange = (color) => {
    setCarColor(color);
  };

  const handleReset = () => {
    setKey((prev) => prev + 1); // Remount MercedesGLB to reset everything
    setCarColor('#ffffff');
  };

  return (
    <>
      <Toolbar onColorChange={handleColorChange} onReset={handleReset} />
      <div style={{ width: '100%', height: '600px' }}>
        <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <MercedesGLB key={key} color={carColor} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}
