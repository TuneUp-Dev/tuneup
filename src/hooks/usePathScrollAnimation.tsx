import { useRef, useEffect, useState } from "react";

export const usePathScrollAnimation = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [tailOffset, setTailOffset] = useState(0);
  const [tailLength, setTailLength] = useState(150);
  const animationFrameRef = useRef<number | null>(null);

  const handleScroll = () => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      const pathBoundingBox = pathRef.current.getBoundingClientRect();
      const middleOfScreen = window.innerHeight / 2;

      const relativeMiddle = middleOfScreen - pathBoundingBox.top;

      if (relativeMiddle >= 0 && relativeMiddle <= pathBoundingBox.height) {
        const progressRatio = Math.min(
          Math.max(relativeMiddle / pathBoundingBox.height, 0),
          1
        );

        const currentPoint = pathRef.current.getPointAtLength(
          progressRatio * pathLength
        );

        const newIconPosition = { x: currentPoint.x, y: currentPoint.y };
        setIconPosition(newIconPosition);

        const startPoint = pathRef.current.getPointAtLength(0);
        const distance = Math.sqrt(
          Math.pow(currentPoint.x - startPoint.x, 2) +
            Math.pow(currentPoint.y - startPoint.y, 2)
        );

        const dynamicTailLength = Math.min(150, Math.max(0, distance - 10));
        setTailLength(dynamicTailLength);

        const offset = progressRatio * pathLength - dynamicTailLength;
        setTailOffset(Math.max(offset, 0));
      }
    }
  };

  const optimizedHandleScroll = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(handleScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", optimizedHandleScroll);
    handleScroll(); // Initialize on mount

    return () => {
      window.removeEventListener("scroll", optimizedHandleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return { pathRef, iconPosition, tailOffset, tailLength };
};
