"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CyberBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 50);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(w, h);
    container.appendChild(renderer.domElement);

    // --- Particles ---
    const count = 350;
    const pos = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      sizes[i] = Math.random() * 2 + 0.5;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    particleGeo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      transparent: true,
      opacity: 0.7,
      color: "#00f2fe",
      sizeAttenuation: true,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    const velocities = Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 0.005,
      y: (Math.random() - 0.5) * 0.005,
    }));

    // --- Digital Grid ---
    const spacing = 1.5;
    const halfW = (w / 100) * 0.8;
    const halfH = (h / 100) * 0.8;
    const gridPositions: number[] = [];

    const cols = Math.floor((halfW * 2) / spacing);
    const rows = Math.floor((halfH * 2) / spacing);

    for (let c = 0; c <= cols; c++) {
      const x = -halfW + c * spacing;
      gridPositions.push(x, -halfH, -5, x, halfH, -5);
    }
    for (let r = 0; r <= rows; r++) {
      const y = -halfH + r * spacing;
      gridPositions.push(-halfW, y, -5, halfW, y, -5);
    }

    const gridGeo = new THREE.BufferGeometry();
    gridGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(gridPositions, 3)
    );
    const gridMat = new THREE.LineBasicMaterial({
      color: "#00f2fe",
      transparent: true,
      opacity: 0.06,
    });
    const grid = new THREE.LineSegments(gridGeo, gridMat);
    scene.add(grid);

    // --- Mouse tracking ---
    const mouse = { x: 0, y: 0 };
    const handleMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouse);

    // --- Resize ---
    const handleResize = () => {
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      camera.aspect = cw / ch;
      camera.updateProjectionMatrix();
      renderer.setSize(cw, ch);
    };
    window.addEventListener("resize", handleResize);

    // --- Animation loop ---
    let animationId: number;
    let frameCount = 0;
    const animate = (time: number) => {
      frameCount++;
      if (document.hidden && frameCount % 3 !== 0) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      const positionAttr = particleGeo.attributes.position;
      const posArray = positionAttr.array as Float32Array;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        posArray[i3] += velocities[i].x + mouse.x * 0.002;
        posArray[i3 + 1] += velocities[i].y + mouse.y * 0.002;
        posArray[i3 + 1] += Math.sin(time * 0.001 + i) * 0.0003;

        if (posArray[i3] > 20) posArray[i3] = -20;
        if (posArray[i3] < -20) posArray[i3] = 20;
        if (posArray[i3 + 1] > 20) posArray[i3 + 1] = -20;
        if (posArray[i3 + 1] < -20) posArray[i3 + 1] = 20;
      }
      positionAttr.needsUpdate = true;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      particleGeo.dispose();
      particleMat.dispose();
      gridGeo.dispose();
      gridMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />;
}
