import { ValueAnimationTransition } from "framer-motion";
export const framerMotionConfig: ValueAnimationTransition = {
  type: "spring",
  mass: 5,
  stiffness: 500,
  damping: 50,
  restDelta: 0.0001,
};
