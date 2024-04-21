'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

import { projectMobile } from '@/_lib/project-mobile-lib';
import { IconArrowRight } from '@tabler/icons-react';

const ProjectMobile = memo(() => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  const handleClickList = useCallback((id: number) => {
    setOpenProjectId((prevId) => (prevId === id ? null : id));
  }, []);

  useEffect(() => {
    if (openProjectId !== null) {
      const delay = 400;
      const el = bottomRef.current;
      if (!el) return;

      const scrollOptions: ScrollIntoViewOptions = {
        behavior: 'smooth',
        block: 'end',
      };

      requestAnimationFrame(() => {
        setTimeout(() => {
          el.scrollIntoView(scrollOptions);
        }, delay);
      });
    }
  }, [openProjectId]);

  const projectMobileVariants = {
    initial: {
      opacity: 0,
      height: 'auto',
    },
    animate: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      height: 'auto',
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <section className='block p-2 mt-16 md:p-4 md:hidden'>
      <header className='grid items-center grid-cols-2'>
        <span className='py-3 uppercase border-b text-gray border-b-black text-15px'>
          Project
        </span>
        <span className='py-3 uppercase border-b text-end text-gray border-b-black text-15px'>
          Type
        </span>
      </header>
      {projectMobile.toReversed().map(
        ({
          project_id,
          project_image,
          project_image_alt,
          project_title,
          project_type,
          project_created_at,
          project_link,
        }) => {
          return (
            <article
              className='grid items-center grid-cols-2 border-b border-b-black'
              onClick={() => handleClickList(project_id)}
              key={project_id}>
              <span className='py-3 transition-colors text-15px md:text-20px'>
                {project_title}
              </span>
              <span className='py-3 text-end text-15px md:text-20px'>
                {project_type}
              </span>
              <AnimatePresence>
                {openProjectId === project_id && (
                  <motion.div
                    className='h-auto col-span-2'
                    variants={projectMobileVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    ref={bottomRef}>
                    <Image
                      className='block w-full h-auto'
                      width={1080}
                      height={1080}
                      src={project_image}
                      alt={project_image_alt}
                      loading='lazy'
                    />
                    <div className='flex flex-row-reverse items-center justify-between w-full'>
                      <Link
                        className='flex items-center justify-end py-4 text-15px'
                        href={project_link}
                        target='_blank'
                        rel='noopener noreferrer'>
                        Open Project
                        <IconArrowRight className='w-5 h-5' stroke={1} />
                      </Link>
                      <time className='text-15px' dateTime={project_created_at}>
                        {project_created_at}
                      </time>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        },
      )}
    </section>
  );
});

export default ProjectMobile;
