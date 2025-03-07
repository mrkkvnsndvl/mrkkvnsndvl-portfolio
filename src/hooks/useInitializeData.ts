import { useEffect } from "react";
import { useSkillsStore } from "@/stores/useSkillsStore";
import { useProjectsStore } from "@/stores/useProjectsStore";
import { skillsData } from "@/data/skillsData";
import { projectsData } from "@/data/projectsData";

export function useInitializeData() {
  const setSkills = useSkillsStore((state) => state.setSkills);
  const setProjects = useProjectsStore((state) => state.setProjects);

  useEffect(() => {
    // Initialize skills data
    setSkills(skillsData);

    // Initialize projects data
    setProjects(projectsData);
  }, [setSkills, setProjects]);
}
