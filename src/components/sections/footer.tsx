import { siDiscord, siFacebook, siGithub, siInstagram } from "simple-icons";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-16" id="lets-connect">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold">mrkkvnsndvl</h2>

            <div>
              <h3 className="font-medium text-sm mb-1">Address:</h3>
              <p className="text-muted-foreground text-sm">
                City of Dagupan, Pangasinan, Philippines
              </p>
            </div>

            <div>
              <h3 className="font-medium text-sm mb-1">Contact:</h3>
              <a
                href="tel:+63 (946) 734 0637"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
              >
                +63 (946) 734 0637
              </a>
              <a
                href="mailto:mrkkvnsndvl@gmail.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
              >
                mrkkvnsndvl@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex space-x-4 md:justify-end">
              <SocialLink
                href="https://discord.com/users/mrkkvnsndvl"
                icon={
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d={siDiscord.path} />
                  </svg>
                }
                label="Discord"
              />
              <SocialLink
                href="https://www.facebook.com/mrkkvnsndvl"
                icon={
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d={siFacebook.path} />
                  </svg>
                }
                label="Facebook"
              />
              <SocialLink
                href="https://github.com/mrkkvnsndvl"
                icon={
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d={siGithub.path} />
                  </svg>
                }
                label="GitHub"
              />
              <SocialLink
                href="https://www.instagram.com/mrkkvnsndvl"
                icon={
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d={siInstagram.path} />
                  </svg>
                }
                label="Instagram"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()}. Made with React. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
      aria-label={label}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  );
}
