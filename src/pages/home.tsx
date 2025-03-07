import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Footer } from "@/components/sections/footer";
import { useSkillsState } from "@/hooks/useSkillsState";
import { useProjectsState } from "@/hooks/useProjectsState";
import { useInitializeData } from "@/hooks/useInitializeData";
import { ModeToggle } from "@/components/shared/mode-toggle";
import ClickSpark from "@/components/shared/click-spark";
import { useTheme } from "@/components/shared/theme-provider";

export default function Page() {
  // Initialize data
  useInitializeData();

  // Use the custom hooks for state management
  useSkillsState();
  useProjectsState();

  // Get current theme
  const { theme } = useTheme();
  const sparkColor = theme === "light" ? "#222222" : "#fafafa";

  return (
    <ClickSpark
      sparkColor={sparkColor}
      sparkSize={5}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="font-geist">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
          <Hero />
          <Skills />
          <Projects />
          <div className="fixed bottom-8 right-8 z-50">
            <ModeToggle />
          </div>
        </div>
        <Footer />
      </div>
    </ClickSpark>
  );
}
