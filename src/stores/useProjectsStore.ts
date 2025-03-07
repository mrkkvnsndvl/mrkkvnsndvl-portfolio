import { create } from "zustand";
import { Project } from "@/types";

interface ProjectsState {
  // Data
  projects: Project[];
  filteredProjects: Project[];

  // Filters and sorting
  activeProjectTab: string;
  selectedCategories: string[];
  selectedTechnologies: string[];
  projectSearchValue: string;
  sortCriteria: string;
  sortDirection: "asc" | "desc";

  // UI state
  showControls: boolean;
  showAllFeatured: boolean;
  showAllPast: boolean;

  // Actions
  setProjects: (projects: Project[]) => void;
  setFilteredProjects: (projects: Project[]) => void;
  setActiveProjectTab: (tab: string) => void;
  toggleCategory: (category: string) => void;
  toggleTechnology: (technology: string) => void;
  setProjectSearchValue: (value: string) => void;
  setSortCriteria: (criteria: string) => void;
  setSortDirection: (direction: "asc" | "desc") => void;
  setShowControls: (show: boolean) => void;
  setShowAllFeatured: (show: boolean) => void;
  setShowAllPast: (show: boolean) => void;
  toggleShowAllFeatured: () => void;
  toggleShowAllPast: () => void;
  clearProjectFilters: () => void;
}

export const useProjectsStore = create<ProjectsState>((set) => ({
  // Initial state
  projects: [],
  filteredProjects: [],
  activeProjectTab: "featured",
  selectedCategories: [],
  selectedTechnologies: [],
  projectSearchValue: "",
  sortCriteria: "date",
  sortDirection: "desc",
  showControls: false,
  showAllFeatured: false,
  showAllPast: false,

  // Actions
  setProjects: (projects) => set({ projects }),
  setFilteredProjects: (filteredProjects) => set({ filteredProjects }),
  setActiveProjectTab: (activeProjectTab) => set({ activeProjectTab }),
  toggleCategory: (category) =>
    set((state) => ({
      selectedCategories: state.selectedCategories.includes(category)
        ? state.selectedCategories.filter((c) => c !== category)
        : [...state.selectedCategories, category],
    })),
  toggleTechnology: (technology) =>
    set((state) => ({
      selectedTechnologies: state.selectedTechnologies.includes(technology)
        ? state.selectedTechnologies.filter((t) => t !== technology)
        : [...state.selectedTechnologies, technology],
    })),
  setProjectSearchValue: (projectSearchValue) => set({ projectSearchValue }),
  setSortCriteria: (sortCriteria) => set({ sortCriteria }),
  setSortDirection: (sortDirection) => set({ sortDirection }),
  setShowControls: (showControls) => set({ showControls }),
  setShowAllFeatured: (showAllFeatured) => set({ showAllFeatured }),
  setShowAllPast: (showAllPast) => set({ showAllPast }),
  toggleShowAllFeatured: () =>
    set((state) => ({ showAllFeatured: !state.showAllFeatured })),
  toggleShowAllPast: () =>
    set((state) => ({ showAllPast: !state.showAllPast })),
  clearProjectFilters: () =>
    set({
      selectedCategories: [],
      selectedTechnologies: [],
      projectSearchValue: "",
      sortCriteria: "date",
      sortDirection: "desc",
    }),
}));
