'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { links } from '@/src/_lib/link-lib';
import { IconArrowNarrowRight } from '@tabler/icons-react';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <p className='text-24px md:text-30px'>
        I architect worlds where tapping, swiping and scrolling unveil hidden
        depths. Through sleight of code, I conjure fluid interfaces from rigid
        devices to delight and empower. Though sites may appear bewitching
        magic, my method prizes logic and user needs above all. I ply my craft
        iteratively - testing, learning, refining. My aim is experiences so
        intuitive, they feel like second nature rather than technology. Join me
        in building more helpful, ethical digital spaces - whether for commerce,
        community or simply joy. There lies the true spellcraft.
      </p>
      <ul className='flex flex-row flex-wrap gap-x-3 lg:gap-x-6'>
        {links
          .filter((link) => link.path !== pathname)
          .map((link, index) => (
            <li className='flex items-center' key={index}>
              <IconArrowNarrowRight
                className='w-8 h-8 lg:w-10 lg:h-10'
                stroke={1}
              />
              <Link
                className='underline text-24px md:text-30px'
                href={link.path}>
                {link.link}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
