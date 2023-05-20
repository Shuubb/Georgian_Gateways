import { useState, useEffect, useRef, HTMLProps, createElement } from "react";
import { ReactNode } from "react";

interface FadeDivProps extends HTMLProps<any> {
  children?: ReactNode;
  startingOpacity?: number;
  element?: string;
}

FadeInDiv.defaultProps = {
  startingOpacity: 0,
  element: "div",
};

export default function FadeInDiv(props: FadeDivProps) {
  const { startingOpacity, element, children, style, ...baseAttributes } =
    props;
  const startOpacity = Number(startingOpacity);
  const [opacity, setOpacity] = useState(startOpacity);

  const animationRef = useRef<number>();

  const animateIn = () => {
    if (opacity < 1) setOpacity(opacity + 1 / 60);
    else if (opacity > 1) setOpacity(1);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animateIn);
    return () => {
      cancelAnimationFrame(animationRef.current!);
    };
  }, [opacity]);

  return createElement(
    element!,
    {
      ...baseAttributes,

      style: {
        opacity: opacity,
        ...style,
      },
    },
    children
  );
}
