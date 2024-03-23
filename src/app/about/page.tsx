import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import { education } from '@/src/_lib/education-lib';
import { skills } from '@/src/_lib/skills-lib';
import Navbar from '@/src/components/navbar';
import { TransitionProvider } from '@/src/contexts/transition-context';
import { IconArrowNarrowDown } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'About — markkevsandoval',
  description: "It's time to know me.",
};

export default function About() {
  return (
    <TransitionProvider>
      <main className='grid grid-cols-1 md:grid-cols-2'>
        <section className='col-start-1 p-2 sm:p-4'>
          <header>
            <Navbar />
          </header>
          <picture className='flex mt-4 md:hidden'>
            <Image
              className='w-auto h-auto'
              width={600}
              height={600}
              src='/webps/markkevsandoval.webp'
              alt="It's me"
              loading='lazy'
              unoptimized={true}
            />
          </picture>
          <div className='mt-48'>
            <h1 className='text-50px md:text-60px'>
              Frontend Developer. Mark Kevin Sandoval
            </h1>
            <div className='flex items-center w-full gap-x-8'>
              <a
                className='flex items-center'
                href='/jpgs/markkevsandoval.jpg'
                download='markkevsandoval'>
                <IconArrowNarrowDown
                  className='w-8 h-8 lg:w-10 lg:h-10'
                  stroke={1}
                />
                <span className='underline text-24px md:text-30px'>
                  press photo
                </span>
              </a>
              <a
                className='flex items-center'
                href='/pdfs/markkevsandoval-CV.pdf'
                download='markkevsandoval-CV'>
                <IconArrowNarrowDown
                  className='w-8 h-8 lg:w-10 lg:h-10'
                  stroke={1}
                />
                <span className='underline text-24px md:text-30px'>
                  full CV
                </span>
              </a>
            </div>
          </div>
          <div className='mt-8'>
            <p className='text-24px md:text-30px'>
              As a frontend developer, I focus on crafting visually appealing
              and intuitive user interfaces for websites and applications.
              Combining my expertise in design and coding, I bring web designs
              to life in the browser, ensuring that the site looks great and
              functions smoothly on all devices. Though challenging at times, I
              find frontend development rewarding because I can see the visual
              results of my efforts right on the screen, helping to improve the
              user's experience. With a keen eye for detail and a passion for
              creating exceptional digital experiences, I strive to deliver
              high-quality work that exceeds expectations. My goal is to create
              seamless and engaging interactions that captivate users and leave
              a lasting impression.
            </p>
          </div>
          <div className='mt-16'>
            <div>
              <h2 className='mb-2 border-b text-20px-leading border-b-black'>
                Personal
              </h2>
              <ul className='flex'>
                <li className='flex-[0_0_7em] text-20px-leading'>2002</li>
                <li className='flex-1 text-20px-leading'>
                  Born in Dagupan City, Filipino Nationality
                </li>
              </ul>
            </div>
            <div className='mt-6'>
              <h2 className='mb-2 border-b text-20px-leading border-b-black'>
                Technical Skills
              </h2>
              {skills.map(({ skill_id, skill_category, skill_title }) => (
                <React.Fragment key={skill_id}>
                  <ul className='flex'>
                    <li className='flex-[0_0_7em] text-20px-leading'>
                      {skill_category}
                    </li>
                    <li className='flex-1 text-20px-leading'>
                      {skill_title.join(', ')}
                    </li>
                  </ul>
                </React.Fragment>
              ))}
            </div>
            <div className='mt-6'>
              <h2 className='mb-2 border-b text-20px-leading border-b-black'>
                Education
              </h2>
              {education.map(
                ({ education_id, education_year, education_school }) => (
                  <ul key={education_id} className='flex'>
                    <li className='flex-[0_0_7em] text-20px-leading'>
                      {education_year}
                    </li>
                    <li className='flex-1 text-20px-leading'>
                      {education_school}
                    </li>
                  </ul>
                ),
              )}
            </div>
          </div>
        </section>
        <section className='hidden md:flex items-center justify-center h-screen col-start-2 px-8 py-20 sticky top-0 right-0 w-full bg-[#acbbb7]'>
          <Image
            className='object-contain w-auto h-full aspect-sqaure'
            width={600}
            height={600}
            src='/webps/markkevsandoval.webp'
            alt="It's me"
            loading='lazy'
            unoptimized={true}
          />
        </section>
      </main>
    </TransitionProvider>
  );
}
