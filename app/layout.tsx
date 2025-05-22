import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import { ReactNode } from 'react';
import { APP_URL } from '@/constants/config';
import Toolbar from '@/components/Toolbar';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: 'Krisna Rusdiono | Software Engineer Portfolio',
  description:
    'Explore the portfolio of Krisna Rusdiono, a software engineer skilled in React, Next.js, Angular, and more. View projects, skills, and contact information.',
  keywords: [
    'Frontend Developer',
    'Portfolio',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Angular',
    'Vue Js',
    'Web Developer',
    'Software Engineer',
    'Indonesia',
    'Krisna Rusdiono Portfolio',
  ],
  authors: [{ name: 'Krisna Rusdiono', url: new URL(APP_URL) }],
  creator: 'Krisna Rusdiono',
  openGraph: {
    title: 'Krisna Rusdiono | Software Engineer Portfolio',
    description:
      'Software Engineer with 4+ years of experience. Check out my work, skills, and how to contact me.',
    url: new URL(APP_URL),
    siteName: 'Krisna Rusdiono Portfolio',
    images: [
      {
        url: 'https://krisna-rusdiono-app.vercel.app/images/krisna-rusdiono.png',
        width: 1200,
        height: 630,
        alt: 'Krisna Rusdiono Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
  hero,
  project,
  skills,
  contact,
}: Readonly<{
  children: ReactNode;
  hero: ReactNode;
  project: ReactNode;
  skills: ReactNode;
  contact: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.variable} antialiased m-0 simple-scrollbar`}
        id='__next'
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {children}
            <div className='bg-slate-100'>
              <Toolbar />
              {hero}
              {skills}
              {project}
              {contact}
              <div className='h-4 w-full bg-slate-900' />
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
