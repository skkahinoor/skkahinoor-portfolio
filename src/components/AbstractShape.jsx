import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Text3D, Grid } from '@react-three/drei';
import * as THREE from 'three';

function FloatingWord({ text, basePosition, baseScale, color, targetSection, activeAlign, fontUrl, activeSectionIdxRef }) {
  const groupRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    // Read the active section index from the optimized shared ref
    const activeSectionIdx = activeSectionIdxRef.current;

    // Default (Hero layout)
    let targetX = basePosition[0];
    let targetY = basePosition[1];
    let targetZ = basePosition[2];
    let targetScale = baseScale;
    let targetOpacity = 0.35; // Hero opacity

    if (activeSectionIdx === 0) {
      // In Hero: Go back to original cluster coordinates
      targetX = basePosition[0];
      targetY = basePosition[1];
      targetZ = basePosition[2];
      targetScale = baseScale;
      targetOpacity = 0.35;
    } else if (activeSectionIdx === targetSection) {
      // Focused target section: Float at the side (left/right) closer to user
      targetX = activeAlign === 'left' ? -3.4 : 3.4;
      targetY = activeAlign === 'left' ? -0.4 : 0.4;
      targetZ = 2; // Move forward in Z space for 3D layered depth
      targetScale = baseScale * 1.25; // Scale up
      targetOpacity = 0.75; // Shine brightly
    } else {
      // Non-focused sections: Fade out completely to avoid clutter
      targetZ = -4; 
      targetOpacity = 0.0;
    }

    // Smooth position interpolation (t = 0.06 is very organic and smooth)
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.06);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.06);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.06);

    // Smooth scale interpolation
    const currentScale = groupRef.current.scale.x;
    const nextScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.06);
    groupRef.current.scale.set(nextScale, nextScale, nextScale);

    // Smooth opacity interpolation of mesh material
    if (materialRef.current) {
      materialRef.current.opacity = THREE.MathUtils.lerp(materialRef.current.opacity, targetOpacity, 0.06);
    }
  });

  return (
    <group ref={groupRef}>
      <Float
        speed={1.5 + Math.random() * 1.5}
        rotationIntensity={1.2}
        floatIntensity={1.5}
      >
        <Text3D
          font={fontUrl}
          size={1}
          height={0.18}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.03}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {text}
          <meshPhysicalMaterial
            ref={materialRef}
            color={color}
            emissive={color}
            emissiveIntensity={0.25}
            roughness={0.1}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.4}
            ior={1.5}
            transparent
            opacity={0.35}
          />
        </Text3D>
      </Float>
    </group>
  );
}

export default function AbstractShape() {
  const { viewport } = useThree();
  const gridGroupRef = useRef();
  const activeSectionIdxRef = useRef(0);
  const fontUrl = "/helvetiker_bold.typeface.json";

  // Dynamic responsive scale multiplier
  const responsiveScale = Math.min(1.1, viewport.width / 7.5);

  // Optimized single scroll event listener to calculate current active DOM section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills-marquee', 'skills', 'experience', 'projects', 'contact'];
      let activeIdx = 0;
      
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if section dominates the center of the screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            activeIdx = i;
            break;
          }
        }
      }
      activeSectionIdxRef.current = activeIdx;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once initially
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update Grid position on scroll frame updates
  useFrame((state) => {
    if (gridGroupRef.current) {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      
      // Map pixel scrolling to WebGL coordinates
      const yOffset = (scrollY / vh) * viewport.height;
      gridGroupRef.current.position.y = -yOffset;
    }
  });

  // Custom skills mapped to scrolling sections:
  // Sections: 0 = Hero, 1 = About, 2 = SkillsMarquee (Fades to 0), 3 = TechStack (Skills), 4 = Experience, 5 = Projects, 6 = Contact
  const techItems = [
    { text: "PHP", basePosition: [-3.5, 2, -1], baseScale: 0.45, color: "#8b5cf6", targetSection: 4, activeAlign: "right" }, // Active in Experience
    { text: "Laravel", basePosition: [3.5, -1.5, 0.5], baseScale: 0.4, color: "#ef4444", targetSection: 1, activeAlign: "right" }, // Active in About
    { text: "JS", basePosition: [-2.5, -2, 1], baseScale: 0.5, color: "#facc15", targetSection: 5, activeAlign: "left" }, // Active in Projects
    { text: "React", basePosition: [2.5, 2.5, -0.5], baseScale: 0.45, color: "#3b82f6", targetSection: 3, activeAlign: "left" }, // Active in TechStack (Skills)
    { text: "SQL", basePosition: [0, 2.8, -1], baseScale: 0.4, color: "#06b6d4", targetSection: 6, activeAlign: "right" }, // Active in Contact/Footer
    { text: "CSS", basePosition: [0, -2.8, 0.5], baseScale: 0.35, color: "#3b82f6", targetSection: 6, activeAlign: "left" }, // Active in Contact/Footer
  ];

  return (
    <group scale={responsiveScale}>
      {/* Scroll-synced 3D Background Grid */}
      <group ref={gridGroupRef}>
        <Grid
          renderOrder={-1}
          position={[0, -2, 0]}
          infiniteGrid
          cellSize={0.6}
          cellThickness={0.6}
          sectionSize={3.3}
          sectionThickness={1.5}
          sectionColor="#3b82f6"
          cellColor="#8b5cf6"
          fadeDistance={30}
        />
      </group>

      {/* Floating 3D Text Words */}
      {techItems.map((item, idx) => (
        <FloatingWord
          key={idx}
          text={item.text}
          basePosition={item.basePosition}
          baseScale={item.baseScale}
          color={item.color}
          targetSection={item.targetSection}
          activeAlign={item.activeAlign}
          fontUrl={fontUrl}
          activeSectionIdxRef={activeSectionIdxRef}
        />
      ))}
    </group>
  );
}
