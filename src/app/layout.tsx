import type { Metadata } from 'next';
import '@/src/styles/global.css';

import localFont from 'next/font/local';

const myFont = localFont({
  src: '../../public/fonts/neue-haas-grotesk.woff',
  weight: '400',
  style: 'normal',
});

export const metadata: Metadata = {
  title: 'markkevsandoval',
  description: 'markkevsandoval portfolio',
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
