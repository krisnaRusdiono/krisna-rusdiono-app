import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import { ReactNode } from 'react';
import { APP_URL } from '@/constants/config';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: 'Aplikasi HR yang paling fleksibel | AkselHR',
  description:
    'Tingkatkan efisiensi HR dengan AkselHR, solusi lengkap untuk absensi, payroll, reimbursement, dan manajemen karyawan. Coba gratis sekarang!',
  openGraph: {
    title: 'Aplikasi HR yang paling fleksibel | AkselHR',
    description:
      'Tingkatkan efisiensi HR dengan AkselHR, solusi lengkap untuk absensi, payroll, reimbursement, dan manajemen karyawan. Coba gratis sekarang!',
    siteName: 'AkselHR',
    images: [
      {
        url: '/assets/metaimage.png',
        width: 800,
        height: 600,
        alt: 'AkselHR',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
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
