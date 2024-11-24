import { ScrollControlsState, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// Extend the type definition to include the scroll property
interface ExtendedScrollControlsState extends ScrollControlsState {
  scroll: {
    current: number;
  };
}
export const ScrollManager = ({
  section,
  onSectionChange,
}: {
  section: any;
  onSectionChange: (section: string | number) => void;
}) => {
  const data = useScroll() as ExtendedScrollControlsState;
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    data.fill.classList.add("top-0");
    data.fill.classList.add("absolute");
  }, [data.fill]);

  useEffect(() => {
    const targetScrollTop = section * data.el.clientHeight;
    gsap.to(data.el, {
      duration: 0.3,
      scrollTop: targetScrollTop,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);
    if (data.scroll.current > lastScroll.current && curSection === 0) {
      onSectionChange(1);
    }
    if (data.scroll.current < lastScroll.current && data.scroll.current < 1 / (data.pages - 1)) {
      onSectionChange(0);
    }
    lastScroll.current = data.scroll.current;
  });

  return null;
};
