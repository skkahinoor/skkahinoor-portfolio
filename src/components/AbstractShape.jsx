import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Text3D } from '@react-three/drei';

export default function AbstractShape() {
  const groupRef = useRef();
  const { width } = useThree((state) => state.viewport);

  // Responsive scale factor based on viewport width (typically 10-15 units wide)
  // If width is smaller (e.g. mobile), scale down from 1.2
  const responsiveScale = Math.min(1.2, width / 7);

  // Slow rotation for the entire cluster
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  const fontUrl = "/helvetiker_bold.typeface.json";
  
  // Custom skills distributed evenly across left, middle, and right
  const techItems = [
    { text: "PHP", position: [-3.5, 2, -1], scale: 0.45, color: "#8b5cf6" }, // Left Top
    { text: "Laravel", position: [3.5, -1.5, 0.5], scale: 0.4, color: "#ef4444" }, // Right Bottom
    { text: "JS", position: [-2.5, -2, 1], scale: 0.5, color: "#facc15" }, // Left Bottom
    { text: "React", position: [2.5, 2.5, -0.5], scale: 0.45, color: "#3b82f6" }, // Right Top
    { text: "SQL", position: [0, 2.8, -1], scale: 0.4, color: "#06b6d4" }, // Middle Top
    { text: "CSS", position: [0, -2.8, 0.5], scale: 0.35, color: "#3b82f6" }, // Middle Bottom
  ];

  return (
    <group ref={groupRef} scale={responsiveScale}>
      {techItems.map((item, idx) => (
        <Float 
          key={idx} 
          speed={2 + Math.random() * 2} 
          rotationIntensity={1.5} 
          floatIntensity={2}
          position={item.position}
        >
          <Text3D
            font={fontUrl}
            size={item.scale}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.03}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            {item.text}
            <meshPhysicalMaterial
              color={item.color}
              emissive={item.color}
              emissiveIntensity={0.3}
              roughness={0.1}
              metalness={0.8}
              clearcoat={1}
              clearcoatRoughness={0.1}
              transmission={0.4}
              ior={1.5}
            />
          </Text3D>
        </Float>
      ))}
    </group>
  );
}
