import FadeIn from "@/components/shared/fade-in";
import { experiences } from "@/constants";

const Experience = ({ isLoaded }: { isLoaded: boolean }) => {
  return (
    <FadeIn isLoaded={isLoaded} delay={400}>
      <section className="flex flex-col gap-6">
        <h2 className="text-sm uppercase text-neutral-400">EXPERIENCE</h2>
        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <div key={exp.company} className="flex flex-col gap-1">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-neutral-900">
                  {exp.company}
                </span>
                <span className="text-sm text-neutral-500">{exp.period}</span>
              </div>
              <p className="text-sm text-neutral-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
};

export default Experience;
