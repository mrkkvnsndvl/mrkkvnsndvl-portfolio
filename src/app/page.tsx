import Navbar from '@/components/navbar';
import ProjectDeskop from '@/components/project-desktop';
import ProjectMobile from '@/components/project-mobile';
import ProjectSlider from '@/components/project-slider';
import { TransitionProvider } from '@/contexts/transition-context';

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
