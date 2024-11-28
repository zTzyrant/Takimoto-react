import { HomeLayout } from "@/layouts/homeLayout";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Canvas3DComponent } from "@/components/canvas3D";
import { Leva } from "leva";
import { Canvas, ThreeEvent } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import { HomeComponent } from "@/components/homeComponent";
import { ScrollManager } from "@/components/scrollManager";
import { Room3D } from "@/components/room3D";
import { MenuComponent } from "@/components/Menu";

export const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [section, setSection] = useState<string | number>(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const target = location.hash.slice(1);
      if (target === "about") {
        setSection(1);
      } else if (target === "projects") {
        setSection(2);
      } else if (target === "contact") {
        setSection(3);
      }
    } else {
      setSection(0);
    }
  }, [location]);

  return (
    <>
      <Navbar menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      <MenuComponent menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Scroll>
            <Room3D menuOpened={menuOpened} />
          </Scroll>
          <Scroll
            html
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              zIndex: 1,
              width: "100%",
              height: "100%",
            }}
          >
            <HomeComponent setSection={setSection} />
          </Scroll>
        </ScrollControls>
      </Canvas>

      <Leva hidden />
    </>
  );
};
