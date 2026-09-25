import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvas3DProps {
  className?: string;
}

export const ThreeCanvas3D: React.FC<ThreeCanvas3DProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let isVisible = true;
    let animationFrameId: number;

    // Scene, Camera, Renderer with high performance settings
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.willChange = 'transform';
    container.appendChild(renderer.domElement);

    // Group for all 3D objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Complex 3D Crystal / Active Molecule (Dodecahedron with wireframe + solid core)
    const coreGeo = new THREE.IcosahedronGeometry(1.5, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x111116,
      emissive: 0x220505,
      roughness: 0.15,
      metalness: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 2. Wireframe Cage in glowing crimson
    const wireGeo = new THREE.IcosahedronGeometry(1.85, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    mainGroup.add(wireMesh);

    // 3. Orbital Rings (Athletic purity gyros)
    const ringGeo1 = new THREE.TorusGeometry(2.35, 0.03, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0xdc2626,
      roughness: 0.2,
      metalness: 0.8,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.65, 0.02, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.4,
      metalness: 0.6,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 4. Floating 3D Component Satellite Nodes
    const nodeCount = 14;
    const nodeGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xef4444,
      emissiveIntensity: 0.8,
      roughness: 0.1,
    });

    const nodesGroup = new THREE.Group();
    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 2.2 + (i % 3) * 0.3;
      node.position.set(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      );
      nodesGroup.add(node);
    }
    mainGroup.add(nodesGroup);

    // 5. Ambient Dust / Microscopic Crystals
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xef4444,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x0a0a0c, 3.5);
    scene.add(ambientLight);

    const redLight1 = new THREE.PointLight(0xef4444, 18, 20);
    redLight1.position.set(4, 3, 5);
    scene.add(redLight1);

    const redLight2 = new THREE.PointLight(0xdc2626, 12, 18);
    redLight2.position.set(-4, -3, 3);
    scene.add(redLight2);

    const whiteKeyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    whiteKeyLight.position.set(0, 6, 6);
    scene.add(whiteKeyLight);

    // Smooth Damped Mouse Tracking
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.7;
      targetRotationX = -y * 0.7;
    };

    container.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Smooth Resize Handler with debouncing
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Performance: Pause rendering when out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Ultra-Smooth 60-120fps Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Silky smooth lerp towards target mouse rotation + idle spin
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.04 + 0.004;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.04;

      // Complex relative rotations for 3D depth
      coreMesh.rotation.y = elapsedTime * 0.25;
      coreMesh.rotation.x = elapsedTime * 0.12;

      wireMesh.rotation.y = -elapsedTime * 0.2;
      wireMesh.rotation.z = elapsedTime * 0.16;

      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.x = -elapsedTime * 0.3;

      nodesGroup.rotation.y = elapsedTime * 0.12;
      nodesGroup.rotation.x = Math.sin(elapsedTime * 0.35) * 0.08;

      // Floating gentle bobbing
      mainGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.12;

      // Subtle particle rotation
      particleSystem.rotation.y = elapsedTime * 0.025;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[380px] pointer-events-auto transform-gpu select-none ${className}`}
      aria-hidden="true"
    />
  );
};
