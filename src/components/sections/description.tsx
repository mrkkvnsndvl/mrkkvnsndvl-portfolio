import FadeIn from "@/components/shared/fade-in";

const Description = ({ isLoaded }: { isLoaded: boolean }) => (
  <FadeIn isLoaded={isLoaded} delay={200}>
    <section className="flex flex-col gap-4 sm:gap-6">
      <p className="text-sm text-neutral-900">
        A frontend developer and virtual assistant based in the Philippines,
        focused on building intuitive user interfaces and delivering dependable
        remote support to clients worldwide.
      </p>
      <p className="text-sm text-neutral-900">
        I embrace simplicity as a design principle. As David Allen insightfully
        said:{" "}
        <em>
          "Simplicity means to remove the clutter so that we can see the light."
        </em>
      </p>
    </section>
  </FadeIn>
);

export default Description;
