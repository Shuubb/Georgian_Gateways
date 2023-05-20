import { useState, useEffect, useRef, createElement, HTMLProps } from "react";
import { ReactNode } from "react";

interface SlideDivProps extends HTMLProps<any> {
  children?: ReactNode;
  slideX?: number;
  slideY?: number;
  element?: string;
  style?: React.CSSProperties;
}

SlideInDiv.defaultProps = {
  slideX: 0,
  slideY: 0,
  element: "div",
  style: {},
};

export default function SlideInDiv(props: SlideDivProps) {
  const { slideX, slideY, element, children, style, ...baseAttributes } = props;
  const [xPos, setXPos] = useState(props.slideX!);
  const [yPos, setYPos] = useState(props.slideY!);

  const animationRef = useRef<number>();

  const animate = () => {
    if (xPos !== 0 && xPos * slideX! > 0) setXPos(xPos - slideX! / 60);
    if (yPos !== 0 && yPos * slideY! > 0) setYPos(yPos - slideY! / 60);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current!);
  }, [xPos, yPos]);

  return createElement(
    element!,
    {
      style: {
        transform: `translate(${xPos}px, ${yPos}px)`,
        ...style,
      },
      ...baseAttributes,
    },
    children
  );
}
