import { useEffect, useState } from "react";

import TickerTrack from "@/components/shared/ticker-track";
import { projects } from "@/constants/index";

const shuffleArray = <T,>(arr: T[]): T[] => {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Ticker = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [shuffledRows, setShuffledRows] = useState<string[][]>([]);

  useEffect(() => {
    const onScroll = () => {
      const container = document.getElementById("main");
      if (container) {
        const rect = container.getBoundingClientRect();
        const progress = 1 - rect.bottom / window.innerHeight;
        setScrollProgress(Math.max(0, Math.min(progress * 2, 1)));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const shuffled = Array.from({ length: 3 }, () =>
      shuffleArray(projects.map((p) => p.illustration))
    );
    setShuffledRows(shuffled);
  }, []);

  return (
    <section
      className={`fixed inset-x-0 bottom-0 h-screen z-0 transition-transform duration-500 ease-in-out ${
        scrollProgress > 0 ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ opacity: scrollProgress }}
    >
      <div className="w-full h-full bg-[#fafafa] p-4 overflow-hidden">
        <div className="flex flex-col justify-between h-full gap-6">
          {shuffledRows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative h-[28vh]">
              <TickerTrack
                direction={rowIndex % 2 === 0 ? "toRight" : "toLeft"}
                speed={20}
              >
                {row.map((img, i) => (
                  <figure
                    key={`${rowIndex}-${i}`}
                    className="flex-shrink-0 w-[230px] sm:w-[280px] md:w-[330px] h-[28vh] rounded-lg overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={`Project ${i + 1}`}
                      className="object-cover w-full h-full"
                      width={330}
                      height={224}
                    />
                  </figure>
                ))}
              </TickerTrack>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ticker;
