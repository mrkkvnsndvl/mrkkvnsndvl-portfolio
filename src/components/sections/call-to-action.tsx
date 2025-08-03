import { ChevronRightIcon } from 'lucide-react';

import FadeIn from '@/components/shared/fade-in';
import { Button } from '@/components/ui/button';

const CallToAction = ({ isLoaded }: { isLoaded: boolean }) => {
  return (
    <FadeIn isLoaded={isLoaded} delay={300}>
      <section className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-2.5">
        <a
          className="w-full sm:w-auto"
          href="mailto:mrkkvnsndvl"
          target="_blank"
        >
          <Button
            variant="default"
            className="w-full sm:w-auto h-[34px] gap-2.5 pl-4 pr-3 rounded-full bg-neutral-900 text-neutral-50 cursor-pointer"
          >
            <span className="text-sm font-medium leading-5">Send an email</span>
            <ChevronRightIcon size={12} />
          </Button>
        </a>
        <Button
          variant="ghost"
          className="justify-center w-full gap-2 sm:w-auto sm:justify-start"
        >
          <div className="relative w-2 h-2 bg-red-500 rounded-full animate-pulse">
            <div className="absolute w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
          </div>
          <span className="text-sm leading-5 text-neutral-900">
            Currently unavailable
          </span>
        </Button>
      </section>
    </FadeIn>
  );
};

export default CallToAction;
