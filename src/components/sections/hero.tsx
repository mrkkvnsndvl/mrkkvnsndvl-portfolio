import { useTheme } from "../shared/theme-provider";
import { InteractiveHoverButton } from "../shared/interactive-hover-button";

export function Hero() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">@mrkkvnsndvl</h1>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Hello, I'm Mark Kevin Sandoval.
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            I'm a{" "}
            <span className="font-medium text-foreground">
              full-stack developer
            </span>{" "}
            specializing in building modern web applications that bridge
            functionality and user-friendly design.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Based in the Philippines, I'm currently an IT undergraduate and a{" "}
            <span className="font-medium text-foreground">
              Programmer Intern at Guanzon Group of Companies
            </span>
            .
          </p>

          <InteractiveHoverButton>Let's Connect</InteractiveHoverButton>
        </div>
      </div>

      <div className="relative">
        <img
          src={
            useTheme().theme === "dark"
              ? "/dark-mrkkvnsndvl.svg"
              : "/light-mrkkvnsndvl.svg"
          }
          alt="mrkkvnsndvl"
          draggable={false}
          className="object-contain"
        />
      </div>
    </div>
  );
}
