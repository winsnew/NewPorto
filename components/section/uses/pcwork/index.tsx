import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import * as THREE from "three";
import { PcContainer, PcLoading } from "../container";

export default function Uses() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create a sphere geometry and material
    const geometry = new THREE.SphereGeometry(2, 32, 16);
    const material = new THREE.MeshStandardMaterial({ color: "#32a852", metalness: 0.5, roughness: 0.2 });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.scale.set(0, 0, 0)
    scene.add(sphere);

    // Add lights to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Set up the camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Add some rotation for animation effect
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    setLoading(false)
    gsap.to(sphere.scale, {x: 1, y:1, z:1, duration:1.5, ease: "power2.out"})
    animate();

    // Clean up on unmount
    return () => {
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <PcContainer ref={mountRef}>
        {isLoading && <PcLoading/>}
    </PcContainer>
  );
}