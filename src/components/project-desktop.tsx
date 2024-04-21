'use client';

import 'lazysizes';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';

import { projectDesktop } from '@/_lib/project-desktop-lib';

export default function ProjectDesktop() {
  const [showImage, setShowImage] = useState<number | null>(null);

  const onMouseEnter = useCallback((id: number) => setShowImage(id), []);
  const onMouseLeave = useCallback(() => setShowImage(null), []);

  const { project_contrast } =
    projectDesktop.find(({ project_id }) => project_id === showImage) || {};

  return (
    <section className='relative z-10 hidden p-4 mt-16 md:block'>
      <header className='grid grid-cols-4'>
        <span className='col-span-2 py-3 uppercase border-b border-black text-gray text-15px'>
          Project
        </span>
        <span
          className={clsx(
            'py-3 uppercase border-b text-end text-15px text-gray border-b-black',
            {
              'border-b-white text-white': project_contrast,
            },
          )}>
          Type
        </span>
        <span
          className={clsx(
            'py-3 uppercase border-b text-end text-15px text-gray border-b-black',
            {
              'border-b-white text-white': project_contrast,
            },
          )}>
          Created At
        </span>
      </header>
      {projectDesktop.toReversed().map(
        ({
          project_id,
          project_image,
          project_image_alt,
          project_title,
          project_type,
          project_created_at,
          project_link,
        }) => (
          <Link
            className='grid items-center grid-cols-4 group'
            key={project_id}
            href={project_link}
            target='_blank'
            onMouseEnter={() => onMouseEnter(project_id)}
            onMouseLeave={onMouseLeave}>
            <span className='col-span-2 py-3 transition-colors border-b border-black text-20px group-hover:text-gray'>
              {project_title}
            </span>
            <span
              className={clsx(
                'py-3 border-b border-b-black text-end text-20px',
                {
                  'border-b-white text-white': project_contrast,
                },
              )}>
              {project_type}
            </span>
            <span
              className={clsx(
                'py-3 border-b border-b-black text-end text-20px',
                {
                  'border-b-white text-white': project_contrast,
                },
              )}>
              {project_created_at}
            </span>
            {showImage === project_id && (
              <Image
                className='fixed top-0 right-0 w-1/2 z-[-1] pointer-events-none h-full object-cover lazyload'
                width={4000}
                height={4000}
                src={project_image}
                alt={project_image_alt}
                priority={true}
              />
            )}
          </Link>
        ),
      )}
    </section>
  );
}
