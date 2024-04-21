import type { Metadata } from 'next';
import '@/styles/global.css';

import localFont from 'next/font/local';

const myFont = localFont({
  src: '../../public/fonts/neue-haas-grotesk.woff',
  weight: '400',
  style: 'normal',
});

export const metadata: Metadata = {
  title: 'mrkkvnsndvl',
  description: 'mrkkvnsndvl portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
