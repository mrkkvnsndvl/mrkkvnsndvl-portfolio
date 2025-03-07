import { SimpleIcon } from "simple-icons";
import { LucideIcon } from "lucide-react";

// Software skill icon names
export type SoftwareIconName =
  | "androidStudio"
  | "apacheMaven"
  | "apacheNetbeans"
  | "cSharp"
  | "css3"
  | "codeIgniter"
  | "figma"
  | "git"
  | "github"
  | "html5"
  | "java"
  | "javascript"
  | "lua"
  | "mariadb"
  | "markdown"
  | "mysql"
  | "nextjs"
  | "notion"
  | "php"
  | "postman"
  | "prisma"
  | "react"
  | "redux"
  | "sass"
  | "tailwindcss"
  | "typescript"
  | "unity"
  | "vite"
  | "vitest"
  | "visualStudioCode"
  | "xampp"
  | "npm";

// Expertise skill icon names
export type ExpertiseIconName =
  | "desktopDevelopment"
  | "gameDevelopment"
  | "mobileDevelopment"
  | "projectManagement"
  | "timeManagement"
  | "uiuxDesign"
  | "webDevelopment";

// Language skill icon names
export type LanguageIconName = "english" | "tagalog";

// Combined skill icon names
export type SkillIconName =
  | SoftwareIconName
  | ExpertiseIconName
  | LanguageIconName;

// Skill related types
export type Skill = {
  id: string;
  name: string;
  category: "Software" | "Expertise" | "Language";
  icon: SkillIconName;
  description?: string;
};

// Project related types
export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  featured: boolean;
  date: string;
};

// Icon mapping type
export type SkillIconsType = {
  [K in SoftwareIconName]: SimpleIcon;
} & {
  [K in ExpertiseIconName | LanguageIconName]: LucideIcon;
};
