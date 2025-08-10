import FadeIn from "@/components/shared/fade-in";

const Description = ({ isLoaded }: { isLoaded: boolean }) => (
  <FadeIn isLoaded={isLoaded} delay={200}>
    <section className="flex flex-col gap-4 sm:gap-6">
      <p className="text-sm text-neutral-900">
        A passionate software developer and virtual assistant from the
        Philippines, dedicated to designing, building, and maintaining
        efficient, reliable, and user-focused software solutions.
      </p>
      <p className="text-sm text-neutral-900">
        <em>"Simplicity is the ultimate sophistication."</em> — Leonardo da
        Vinci
      </p>
      <img
        src="https://spotify-github-profile.kittinanx.com/api/view.svg?uid=kt7tlwuuqptqwn1w8yjaoyrwt&cover_image=true&theme=natemoo-re&show_offline=true&background_color=171717&interchange=true&bar_color=1db954&bar_color_cover=true"
        alt="Now Playing on Spotify"
        className="w-72"
      />
    </section>
  </FadeIn>
);

export default Description;
