import Navbar from '@/src/components/navbar';
import ProjectDeskop from '@/src/components/project-desktop';
import ProjectMobile from '@/src/components/project-mobile';
import ProjectSlider from '@/src/components/project-slider';
import { TransitionProvider } from '@/src/contexts/transition-context';

export default function Index() {
  return (
    <TransitionProvider>
      <header className='grid grid-cols-1 md:grid-cols-2'>
        <div className='p-2 sm:p-4'>
          <Navbar />
        </div>
        <ProjectSlider />
      </header>
      <main>
        <ProjectDeskop />
        <ProjectMobile />
      </main>
    </TransitionProvider>
  );
}
