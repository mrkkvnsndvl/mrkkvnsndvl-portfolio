import { ReactNode } from "react";

export type TFadeIn = {
  isLoaded: boolean;
  delay: number;
  className?: string;
  children: ReactNode;
};

export type TExperience = {
  company: string;
  period: string;
  description: string;
};

export type TSocialLinks = {
  label: string;
  href: string;
};

export type TProjects = {
  illustration: string;
};

export type TTickerTrack = {
  children: React.ReactNode;
  direction?: "toLeft" | "toRight";
  speed?: number;
};
