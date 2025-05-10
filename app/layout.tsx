import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import { ReactNode } from 'react';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Krisna Rusdiono | Software Engineer Portfolio',
  description:
    'Explore the portfolio of Krisna Rusdiono – a software engineer skilled in React, Next.js, Angular, and more. View projects, skills, and contact information.',
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
  authors: [{ name: 'Krisna Rusdiono', url: 'https://krisna-rusdiono-app.vercel.app/' }],
  creator: 'Krisna Rusdiono',
  metadataBase: new URL('https://krisna-rusdiono-app.vercel.app/'),
  openGraph: {
    title: 'Krisna Rusdiono | Software Engineer Portfolio',
    description:
      'Software Engineer with 4+ years of experience. Check out my work, skills, and how to contact me.',
    url: 'https://krisna-rusdiono-app.vercel.app/',
    siteName: 'Krisna Rusdiono Portfolio',
    images: [],
    locale: 'en_US',
    type: 'website',
  },
  themeColor: '#0ea5e9', // Tailwind sky-500
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.variable} antialiased m-0 simple-scrollbar`}
        id='__next'
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
