import { TFadeIn } from "@/types";

const FadeIn = ({ isLoaded, delay, className = "", children }: TFadeIn) => {
  return (
    <div
      className={`transition-all duration-500 ease-out ${
        isLoaded
          ? "opacity-100 blur-none translate-y-0"
          : "opacity-0 blur-[4px] translate-y-2"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
