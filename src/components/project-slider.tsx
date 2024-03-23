'use client';

import '@splidejs/react-splide/css/core';

import Link from 'next/link';
import { useState } from 'react';

import { projectSlider } from '@/src/_lib/project-slider-lib';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-react';

export default function ProjectSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onMoved = (_splide: any, newIndex: any) => {
    setActiveIndex(newIndex);
  };

  const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('cursor', 'grabbing');
  };

  const onMouseUp = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('cursor', 'grab');
  };

  return (
    <article className='p-2 sm:p-4 md:p-0'>
      <figure className='h-full xl:h-auto'>
        <Splide
          className='h-full xl:h-auto'
          hasTrack={false}
          onMoved={onMoved}
          aria-label='...'
          options={{
            arrows: true,
            autoplay: true,
            interval: 5000,
            gap: 0,
            perPage: 1,
            pagination: false,
            pauseOnHover: true,
            trimSpaces: false,
            type: 'loop',
          }}>
          <SplideTrack className='h-full xl:h-auto'>
            {projectSlider.map(({ slider_id, slider_webm }) => (
              <SplideSlide className='h-full xl:h-auto' key={slider_id}>
                <video
                  className='block object-cover h-full cursor-grab'
                  width='auto'
                  height='auto'
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={slider_webm}
                  onMouseDown={onMouseDown}
                  onMouseUp={onMouseUp}
                />
              </SplideSlide>
            ))}
          </SplideTrack>
          <figcaption className='grid grid-cols-4 mt-2'>
            <div className='col-span-2 md:col-span-1'>
              <span className='text-15px'>
                Projects&nbsp;&nbsp;&nbsp;
                <span className='text-15px'>{activeIndex + 1}</span>
                &nbsp;/&nbsp;{projectSlider.length}
              </span>
            </div>
            <div className='items-start hidden splide__arrows md:flex'>
              <button className='splide__arrow splide__arrow--prev'>
                <IconArrowNarrowLeft
                  className='w-6 h-6 cursor-pointer'
                  stroke={1}
                />
              </button>
              <button className='splide__arrow splide__arrow--next'>
                <IconArrowNarrowRight
                  className='w-6 h-6 cursor-pointer'
                  stroke={1}
                />
              </button>
            </div>
            <div className='col-span-2'>
              <span className='text-15px'>
                {projectSlider[activeIndex].slider_project_title}
              </span>
              <Link
                className='flex items-center text-15px'
                href={projectSlider[activeIndex].slider_project_link}
                target='_blank'>
                <IconArrowNarrowRight className='w-6 h-6' stroke={1} />
                Open Project
              </Link>
            </div>
          </figcaption>
        </Splide>
      </figure>
    </article>
  );
}
