"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const SMALL_SCREEN = 768;
const MEDIUM_SCREEN = 1200;

function ParticleCloud({ count, color, speed, size }) {
  const pointsRef = useRef(null);

  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const offset = index * 3;
      const radius = THREE.MathUtils.randFloat(2.5, 8);
      const theta = THREE.MathUtils.randFloatSpread(Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);

      values[offset] = radius * Math.sin(phi) * Math.cos(theta);
      values[offset + 1] = radius * Math.sin(phi) * Math.sin(theta);
      values[offset + 2] = radius * Math.cos(phi);
    }

    return values;
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current || speed <= 0) {
      return;
    }

    pointsRef.current.rotation.y += delta * speed;
    pointsRef.current.rotation.x += delta * (speed * 0.35);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={size}
        sizeAttenuation
        opacity={1.0}
        transparent
        depthWrite={false}
        toneMapped={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function BackgroundParticles() {
  const [isWebGLReady, setIsWebGLReady] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [quality, setQuality] = useState({ count: 650, dpr: [1, 1.6], size: 0.06, speed: 0.12 });

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2") || canvas.getContext("webgl");
    setIsWebGLReady(Boolean(context));
  }, []);

  useEffect(() => {
    const updateTheme = () => {
      setIsDarkMode(document.body.classList.contains("dark-mode"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMotionPreference = () => {
      setIsReducedMotion(mediaQuery.matches);
    };

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => mediaQuery.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => {
      setIsDocumentVisible(document.visibilityState === "visible");
    };

    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    const updateQuality = () => {
      const width = window.innerWidth;

      if (width < SMALL_SCREEN) {
        setQuality({ count: 320, dpr: [1, 1.25], size: 0.075, speed: 0.08 });
        return;
      }

      if (width < MEDIUM_SCREEN) {
        setQuality({ count: 480, dpr: [1, 1.4], size: 0.065, speed: 0.1 });
        return;
      }

      setQuality({ count: 650, dpr: [1, 1.6], size: 0.06, speed: 0.12 });
    };

    updateQuality();
    window.addEventListener("resize", updateQuality);

    return () => window.removeEventListener("resize", updateQuality);
  }, []);

  if (!isWebGLReady) {
    return <div className="site-background-fallback" aria-hidden="true" />;
  }

  const shouldAnimate = isDocumentVisible && !isReducedMotion;
  const particleColor = isDarkMode ? "#ff8a8a" : "#ff2f2f";

  return (
    <div className="site-background" aria-hidden="true">
      <Canvas
        dpr={quality.dpr}
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        frameloop={shouldAnimate ? "always" : "never"}
      >
        <ParticleCloud
          count={quality.count}
          color={particleColor}
          size={quality.size}
          speed={shouldAnimate ? quality.speed : 0}
        />
      </Canvas>
    </div>
  );
}
