import React, { useRef, useEffect } from "react";
import { animate, stagger } from "framer-motion";
import { splitText } from "motion-plus"

type TextSplitAnimateProps = {
  text: string;
  threshold?: number;
  animation?: Parameters<typeof animate>[1];
  transition?: Parameters<typeof animate>[2];
  className?: string;
};

const TextSplitAnimate: React.FC<TextSplitAnimateProps> = ({
  text,
  threshold = 0.3,
  animation = { opacity: [0, 1], y: [20, 0] },
  transition = { type: "spring", duration: 1.2, bounce: 0, delay: stagger(0.07) },
  className = "",
}) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!textRef.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const { words } = splitText(textRef.current!);

              animate(words, animation, transition);

              observer.unobserve(textRef.current!);
            }
          });
        },
        { threshold }
      );

      observer.observe(textRef.current!);

      return () => observer.disconnect();
    });
  }, [animation, threshold, transition]);

  return <h1 ref={textRef} className={className}>{text}</h1>;
};

export default TextSplitAnimate;
