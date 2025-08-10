import { useEffect, useState } from "react";

import CallToAction from "@/components/sections/call-to-action";
import Description from "@/components/sections/description";
import Experience from "@/components/sections/experience";
import GetInTouch from "@/components/sections/get-in-touch";
import Header from "@/components/sections/header";
import RealTimeClock from "@/components/sections/real-time-clock";
import Ticker from "@/components/shared/ticker";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setIsLoaded(true);
  }, []);

  return (
    <main className="relative flex flex-col items-center min-h-screen bg-white font-inter">
      <div
        id="main"
        className="w-full min-h-screen bg-white z-10 px-4 sm:px-6 md:px-8 py-6 sm:py-8 mb-[1500px] transition-all duration-500 ease-in-out shadow-[0_0_20px_rgba(0,0,0,0.1)]"
      >
        <article className="border-none bg-transparent mb-8 sm:mb-16 w-full max-w-[400px] mx-auto shadow-none">
          <div className="flex flex-col gap-8 p-0 sm:gap-12 sm:p-4">
            <Header isLoaded={isLoaded} />
            <Description isLoaded={isLoaded} />
            <CallToAction isLoaded={isLoaded} />
            <Experience isLoaded={isLoaded} />
            <GetInTouch isLoaded={isLoaded} />
            <RealTimeClock isLoaded={isLoaded} />
          </div>
        </article>
      </div>
      <Ticker />
    </main>
  );
};

export default App;
