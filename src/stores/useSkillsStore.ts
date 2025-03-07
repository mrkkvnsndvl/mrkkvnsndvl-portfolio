import { create } from "zustand";
import { Skill } from "@/types";

interface SkillsState {
  // Data
  skills: Skill[];
  filteredSkills: Skill[];

  // Filters and sorting
  activeSkillsTab: string;
  skillsSearchValue: string;
  skillsSortCriteria: string;
  skillsSortDirection: "asc" | "desc";

  // UI state
  showControls: boolean;
  showAllSoftware: boolean;

  // Actions
  setSkills: (skills: Skill[]) => void;
  setFilteredSkills: (skills: Skill[]) => void;
  setActiveSkillsTab: (tab: string) => void;
  setSkillsSearchValue: (value: string) => void;
  setSkillsSortCriteria: (criteria: string) => void;
  setSkillsSortDirection: (direction: "asc" | "desc") => void;
  setShowControls: (show: boolean) => void;
  setShowAllSoftware: (show: boolean) => void;
  toggleShowAllSoftware: () => void;
  clearSkillsFilters: () => void;
}

export const useSkillsStore = create<SkillsState>((set) => ({
  // Initial state
  skills: [],
  filteredSkills: [],
  activeSkillsTab: "software",
  skillsSearchValue: "",
  skillsSortCriteria: "name",
  skillsSortDirection: "asc",
  showControls: false,
  showAllSoftware: false,

  // Actions
  setSkills: (skills) => set({ skills }),
  setFilteredSkills: (filteredSkills) => set({ filteredSkills }),
  setActiveSkillsTab: (activeSkillsTab) => set({ activeSkillsTab }),
  setSkillsSearchValue: (skillsSearchValue) => set({ skillsSearchValue }),
  setSkillsSortCriteria: (skillsSortCriteria) => set({ skillsSortCriteria }),
  setSkillsSortDirection: (skillsSortDirection) => set({ skillsSortDirection }),
  setShowControls: (showControls) => set({ showControls }),
  setShowAllSoftware: (showAllSoftware) => set({ showAllSoftware }),
  toggleShowAllSoftware: () =>
    set((state) => ({ showAllSoftware: !state.showAllSoftware })),
  clearSkillsFilters: () =>
    set({
      skillsSearchValue: "",
      skillsSortCriteria: "name",
      skillsSortDirection: "asc",
    }),
}));
