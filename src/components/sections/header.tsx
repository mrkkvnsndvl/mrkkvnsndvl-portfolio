import FadeIn from "@/components/shared/fade-in";

const Header = ({ isLoaded }: { isLoaded: boolean }) => {
  return (
    <FadeIn isLoaded={isLoaded} delay={100}>
      <header className="flex flex-col gap-1.5">
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl text-neutral-900">
          Mark Kevin J. Sandoval
        </h1>
        <p className="text-sm font-medium text-neutral-400">
          Software Developer | Virtual Assistant
        </p>
      </header>
    </FadeIn>
  );
};

export default Header;
