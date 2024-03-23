import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Navbar from '@/components/navbar';
import { TransitionProvider } from '@/contexts/transition-context';

export const metadata: Metadata = {
  title: 'Contact — markkevsandoval',
  description: "Let's talk if you have any questions.",
};

export default function Contact() {
  return (
    <TransitionProvider>
      <main className='grid grid-cols-1 md:grid-cols-2'>
        <section className='col-start-1 p-2 sm:p-4'>
          <header>
            <Navbar />
          </header>
          <div className='mt-6 md:mt-20'>
            <p className='text-24px md:text-30px'>
              Frontend Developer.&nbsp;Mark Kevin Sandoval
            </p>
            <address className='mt-6 not-italic md:mt-9 text-24px md:text-30px'>
              Dagupan City,&nbsp;Pangasinan
              <br />
              Philippines
            </address>
            <Link
              className='underline break-words text-24px md:text-30px'
              href='mailto:sandoval.markkevin.j@gmail.com'>
              sandoval.markkevin.j@gmail.com
            </Link>
          </div>
        </section>
        <section className='sticky top-0 right-0 hidden w-full h-screen col-start-2 md:flex'>
          <Image
            className='object-cover w-auto h-auto'
            width={4000}
            height={4000}
            src='/webps/map-classic.webp'
            alt='Map'
            priority={true}
          />
        </section>
        <picture className='sticky top-0 right-0 block w-full h-screen mt-4 md:hidden'>
          <Image
            className='object-cover w-full h-full'
            width={4000}
            height={4000}
            src='/webps/map-classic.webp'
            alt='Map'
            priority={true}
          />
        </picture>
      </main>
    </TransitionProvider>
  );
}
