import { Avatar } from "@/components/avatar";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls, Sky } from "@react-three/drei";
import { useControls } from "leva";

export const Canvas3DComponent = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Standing", "Falling"],
    },
  });

  return (
    <group position-y={-1}>
      <ambientLight intensity={2.5} />
      <ContactShadows
        opacity={0.42}
        scale={10}
        blur={1}
        far={10}
        resolution={256}
        color="#000000"
      />
      <Avatar animateProps={animation} />
      {animation === "Typing" && (
        <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
          <boxGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      )}

      <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
        <planeGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
};
