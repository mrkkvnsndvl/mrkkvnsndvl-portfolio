import { useEffect, useRef, useState } from "react";

import { TTickerTrack } from "@/types";

const TickerTrack = ({
  children,
  direction = "toRight",
  speed = 30,
}: TTickerTrack) => {
  const [position, setPosition] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    let lastTime: number | null = null;
    const multiplier = direction === "toLeft" ? -1 : 1;

    const step = (time: number) => {
      if (lastTime !== null && contentRef.current) {
        const delta = time - lastTime;
        const contentWidth = contentRef.current.offsetWidth / 2;
        setPosition((prev) => {
          const next = prev + ((delta * speed) / 1000) * multiplier;
          if (direction === "toLeft" && next <= -contentWidth) return 0;
          if (direction === "toRight" && next >= 0) return -contentWidth;
          return next;
        });
      }
      lastTime = time;
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationRef.current!);
  }, [direction, speed]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        ref={contentRef}
        className="absolute flex gap-6"
        style={{
          transform: `translateX(${position}px)`,
          width: "max-content",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export default TickerTrack;
