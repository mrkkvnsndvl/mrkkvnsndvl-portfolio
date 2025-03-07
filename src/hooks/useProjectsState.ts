import { useEffect } from "react";
import { useProjectsStore } from "@/stores/useProjectsStore";

export function useProjectsState() {
  const {
    projects,
    activeProjectTab,
    selectedCategories,
    selectedTechnologies,
    projectSearchValue,
    sortCriteria,
    sortDirection,
    setFilteredProjects,
  } = useProjectsStore();

  // Filter and sort projects
  useEffect(() => {
    let result = [...projects];

    // Filter by tab (featured or past)
    result = result.filter(
      (project) =>
        (activeProjectTab === "featured" && project.featured) ||
        (activeProjectTab === "past" && !project.featured)
    );

    // Apply category filters if any are selected
    if (selectedCategories.length > 0) {
      result = result.filter((project) =>
        selectedCategories.includes(project.category)
      );
    }

    // Apply technology filters if any are selected
    if (selectedTechnologies.length > 0) {
      result = result.filter((project) =>
        project.technologies.some((tech) => selectedTechnologies.includes(tech))
      );
    }

    // Apply search filter
    if (projectSearchValue.trim() !== "") {
      const searchLower = projectSearchValue.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchLower)
          )
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      if (sortCriteria === "title") {
        return sortDirection === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else if (sortCriteria === "date") {
        return sortDirection === "asc"
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });

    setFilteredProjects(result);
  }, [
    projects,
    activeProjectTab,
    selectedCategories,
    selectedTechnologies,
    projectSearchValue,
    sortCriteria,
    sortDirection,
    setFilteredProjects,
  ]);
}
