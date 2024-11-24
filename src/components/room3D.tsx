import { RoomsComponent } from "./Room";
import { Avatar } from "./avatar";
import { motion } from "framer-motion-3d";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  ScrollControlsState,
  useScroll,
} from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { animate, useMotionValue } from "framer-motion";
import { framerMotionConfig } from "@/assets/js/framerMotionConfig";
import { Group } from "three";

// Extend the type definition to include the scroll property
interface ExtendedScrollControlsState extends ScrollControlsState {
  scroll: {
    current: number;
  };
}
export const Room3D = ({
  menuOpened,
  posAvatar,
}: {
  menuOpened: boolean;
  posAvatar: { x: number; y: number };
}) => {
  const data = useScroll() as ExtendedScrollControlsState;
  const { viewport } = useThree();

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue(0);
  const cameraLookAtX = useMotionValue(0);

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef<Group | null>(null);

  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  useEffect(() => {
    setCharacterAnimation("Falling");

    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : section === 2 ? "Flying" : "Standing");
    }, 600);
  }, [section]);

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    return () =>
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
  }, []);

  return (
    <>
      <motion.group
        position={[1.9072935059634513, 0.14400000000000002, 2.681801948466054]}
        rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
        animate={"" + section}
        transition={{
          duration:
            section !== 1 || characterAnimation === "Falling"
              ? 0.6
              : posAvatar.x && posAvatar.y
                ? 0.1
                : 0.6,
        }}
        variants={{
          0: {
            // Home
            scaleX: windowWidth > 1280 ? 1.272 : 1.272,
            scaleY: windowWidth > 1280 ? 1.272 : 1.272,
            scaleZ: windowWidth > 1280 ? 1.272 : 1.272,
            x: windowWidth > 1280 ? 1.38 : 0,
            y: windowWidth > 1280 ? -0.006 : 0,
            z: windowWidth > 1280 ? 1.924 : -0.992,
          },
          1: {
            // About
            y: windowWidth > 1280 ? -viewport.height + 0.5 + posAvatar.y : -viewport.height + 0.5,
            x: windowWidth > 1280 ? 1.75 + posAvatar.x : 0.55,
            z: 6,
            rotateX: 0,
            rotateY: -0.5,
            rotateZ: 0,
          },
          2: {
            // Projects
            x: 0,
            y: -viewport.height * 2 + 0.5,
            z: 0,
            rotateX: -2,
            rotateY: -Math.PI / 8,
            rotateZ: 1.5,
            scaleX: 1.372,
            scaleY: 1.372,
            scaleZ: 1.372,
          },
          3: {
            // Contact
            y: -viewport.height * 3 + 1,
            x: 0.3,
            z: 8.5,
            rotateX: 0,
            rotateY: -Math.PI / 4,
            rotateZ: 0,
          },
        }}
      >
        <Avatar animateProps={characterAnimation} />
      </motion.group>
      <ambientLight intensity={1} />

      {/* <RoomSceneComponent /> */}
      {/* [1.5, 2, 3] */}
      <motion.group
        position={windowWidth > 1280 ? [1.5, 2, 3] : [0, 0, 0]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={Math.PI / 8}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={2.5} />
        <RoomsComponent section={section} />
        <group
          ref={characterContainerAboutRef}
          name="characterTyping"
          position={[0.34, -0.024, -1.324]}
          rotation={[-Math.PI, 1.489, -Math.PI]}
          scale={1.372}
        ></group>
      </motion.group>
      {/* <RoomSceneComponent /> */}

      {/* Mesh bg */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial opacity={0.8} transparent distort={0.4} speed={4} color={"red"} />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial opacity={0.8} transparent distort={1} speed={5} color="yellow" />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial opacity={0.8} transparent factor={1} speed={5} color={"blue"} />
          </mesh>
        </Float>
      </motion.group>
    </>
  );
};
