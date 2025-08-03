import { ArrowUpRight } from "lucide-react";

import { socialLinks } from "@/constants";

import FadeIn from "../shared/fade-in";

const GetInTouch = ({ isLoaded }: { isLoaded: boolean }) => {
  return (
    <FadeIn isLoaded={isLoaded} delay={500}>
      <section className="flex flex-col gap-6">
        <h2 className="text-sm uppercase text-neutral-400">
          LET'S GET IN TOUCH
        </h2>
        <div className="flex flex-wrap gap-6">
          {socialLinks.map((link) => (
            <div key={link.label} className="group">
              <a
                href={link.href}
                className="flex items-center gap-1 text-sm transition-colors text-neutral-900 hover:text-neutral-600 group"
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
};

export default GetInTouch;
