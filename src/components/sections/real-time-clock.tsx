import { useEffect, useState } from "react";
import FadeIn from "@/components/shared/fade-in";

const RealTimeClock = ({ isLoaded }: { isLoaded: boolean }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Manila",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <FadeIn isLoaded={isLoaded} delay={600}>
      <footer className="flex items-center w-full text-sm text-neutral-400">
        <span>{time} PHT</span>
      </footer>
    </FadeIn>
  );
};

export default RealTimeClock;
