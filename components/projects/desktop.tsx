"use client";
import { Environment, Html, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { memo, useEffect, useRef, useState } from "react";
import * as THREE from "three";

// TODO: make orbit controls not laggy when hovering over the HTML component
// TODO: make the scene more responsive

const DesktopModel = memo(
  ({
    setOrbit,
    content,
  }: {
    setOrbit: React.Dispatch<React.SetStateAction<boolean>>;
    content: React.ReactNode;
  }) => {
    const { scene, nodes } = useGLTF("/models/Desktop.min.glb");
    const { camera } = useThree();
    const screenRef = useRef<THREE.Mesh>(null);
    const monitor = nodes["Ultrawide_Monitor"];
    const Github = nodes["github"] as THREE.Mesh;

    // * Replace the monitor screen with a custom HTML component
    useEffect(() => {
      monitor?.remove(nodes["Ultrawide_Monitor_Screen_0"]);
      if (screenRef.current) monitor?.add(screenRef.current);
    }, [monitor, nodes]);

    // * animate Github icon
    const githubButton = useRef<THREE.Mesh>(null);
    useFrame(() => {
      Github.position.y = Math.sin(performance.now() / 1000) * 0.05 + 0.2;
      if (githubButton.current)
        githubButton.current?.position.set(
          Github.position.x,
          Github.position.y,
          Github.position.z
        );
    });

    // * responsive camera
    useEffect(() => {
      const handleResize = () => {
        if (camera instanceof THREE.PerspectiveCamera) {
          camera.fov =
            window.innerWidth < 768 ? 100 : window.innerWidth < 1024 ? 60 : 45;
        }
      };
      window.addEventListener("resize", handleResize);
      window.addEventListener("orientationchange", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("orientationchange", handleResize);
      };
    }, [camera]);

    return (
      <primitive object={scene} scale={[60, 60, 60]} position={[0, -6, 0]}>
        <mesh rotation={[0, Math.PI / 2, Math.PI / 2]} ref={screenRef}>
          <Html occlude transform scale={[0.15, 0.3, 0.01]}>
            <div
              className="w-[32rem] h-[15.5rem] bg-black brightness-125 will-change-transform center"
              id="html-component"
              // * stop orbiting when hovering over the HTML component
              // ! prevent clicking on github logo by stopping propagation and style cursor default
              onPointerOver={(e) => {
                e.stopPropagation();
                setOrbit(false);
              }}
              onPointerOut={(e) => {
                e.stopPropagation();
                setOrbit(true);
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={{ cursor: "default" }}
            >
              {content}
            </div>
          </Html>
        </mesh>
        <mesh
          geometry={Github.geometry}
          position={[
            Github.position.x,
            Github.position.y - 0.1,
            Github.position.z,
          ]}
          ref={githubButton}
          scale={[0.1, 0.1, 0.1]}
          onClick={(e: Event) => {
            e.stopPropagation();
            window
              .open("https://github.com/AhmedHanye?tab=repositories", "_blank")
              ?.focus();
          }}
          onPointerOver={(e: Event) => {
            e.stopPropagation();
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={(e: Event) => {
            e.stopPropagation();
            document.body.style.cursor = "auto";
          }}
        >
          <sphereGeometry args={[1.3, 32, 32]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      </primitive>
    );
  }
);
DesktopModel.displayName = "DesktopModel";

const Desktop = memo(({ content }: { content: React.ReactNode }) => {
  const [orbit, setOrbit] = useState(true);
  return (
    <Canvas
      camera={{
        fov: window.innerWidth < 768 ? 100 : window.innerWidth < 1024 ? 60 : 45,
        position: [0, 15, 80],
      }}
      dpr={[1, window.innerWidth < 768 ? 1 : 2]}
      gl={{ antialias: false }}
      shadows={false}
    >
      <Environment preset="warehouse" />
      <OrbitControls
        enableDamping={true}
        minDistance={90}
        maxDistance={150}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        maxAzimuthAngle={Math.PI / 4}
        minAzimuthAngle={-Math.PI / 4}
        dampingFactor={0.05}
        rotateSpeed={0.5}
        zoomSpeed={0.6}
        enabled={orbit}
      />
      <DesktopModel setOrbit={setOrbit} content={content} />
    </Canvas>
  );
});
Desktop.displayName = "Desktop";
export default Desktop;
