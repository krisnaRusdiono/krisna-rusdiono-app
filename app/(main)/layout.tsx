import Toolbar from '@/components/Toolbar';
import { APP_URL } from '@/constants/config';
import { Metadata } from 'next';
import { ReactNode } from 'react'

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

const MainLayout = ({
  hero,
  project,
  skills,
  contact,
}: {
  hero: ReactNode;
  project: ReactNode;
  skills: ReactNode;
  contact: ReactNode;
}) => {
  return (
    <div className='bg-slate-100'>
      <Toolbar />
      {hero}
      {skills}
      {project}
      {contact}
      <div className='h-4 w-full bg-slate-900' />
    </div>
  );
};

export default MainLayout;
