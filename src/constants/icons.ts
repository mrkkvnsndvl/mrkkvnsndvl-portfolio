import * as icons from "simple-icons";
import {
  ClockIcon,
  FolderCodeIcon,
  FolderIcon,
  GamepadIcon,
  Languages,
  PaintBucketIcon,
} from "lucide-react";
import { SkillIconsType } from "../types";

export const skillIcons: SkillIconsType = {
  androidStudio: icons.siAndroidstudio,
  apacheMaven: icons.siApachemaven,
  apacheNetbeans: icons.siApachenetbeanside,
  cSharp: icons.siSharp,
  css3: icons.siCss3,
  codeIgniter: icons.siCodeigniter,
  figma: icons.siFigma,
  git: icons.siGit,
  github: icons.siGithub,
  html5: icons.siHtml5,
  java: icons.siOpenjdk,
  javascript: icons.siJavascript,
  lua: icons.siLua,
  mariadb: icons.siMariadb,
  markdown: icons.siMarkdown,
  mysql: icons.siMysql,
  nextjs: icons.siNextdotjs,
  notion: icons.siNotion,
  php: icons.siPhp,
  postman: icons.siPostman,
  prisma: icons.siPrisma,
  react: icons.siReact,
  redux: icons.siRedux,
  sass: icons.siSass,
  tailwindcss: icons.siTailwindcss,
  typescript: icons.siTypescript,
  unity: icons.siUnity,
  vite: icons.siVite,
  vitest: icons.siVitest,
  visualStudioCode: icons.siDevbox,
  xampp: icons.siXampp,
  npm: icons.siNpm,

  desktopDevelopment: FolderCodeIcon,
  gameDevelopment: GamepadIcon,
  mobileDevelopment: FolderCodeIcon,
  projectManagement: FolderIcon,
  timeManagement: ClockIcon,
  uiuxDesign: PaintBucketIcon,
  webDevelopment: FolderCodeIcon,

  english: Languages,
  tagalog: Languages,
};
