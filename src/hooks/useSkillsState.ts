import { useEffect } from "react";
import { useSkillsStore } from "@/stores/useSkillsStore";

export function useSkillsState() {
  const {
    skills,
    activeSkillsTab,
    skillsSearchValue,
    skillsSortCriteria,
    skillsSortDirection,
    setFilteredSkills,
  } = useSkillsStore();

  // Filter and sort skills
  useEffect(() => {
    let result = [...skills];

    // Filter by tab (category)
    result = result.filter(
      (skill) => skill.category.toLowerCase() === activeSkillsTab.toLowerCase()
    );

    // Apply search filter
    if (skillsSearchValue.trim() !== "") {
      const searchLower = skillsSearchValue.toLowerCase();
      result = result.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchLower) ||
          skill.category.toLowerCase().includes(searchLower) ||
          (skill.description &&
            skill.description.toLowerCase().includes(searchLower))
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      if (skillsSortCriteria === "name") {
        return skillsSortDirection === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      return 0;
    });

    setFilteredSkills(result);
  }, [
    skills,
    activeSkillsTab,
    skillsSearchValue,
    skillsSortCriteria,
    skillsSortDirection,
    setFilteredSkills,
  ]);
}
