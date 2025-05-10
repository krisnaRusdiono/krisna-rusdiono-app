import Toolbar from '@/components/Toolbar';
import { ReactNode } from 'react'

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
    <>
      <Toolbar />
      {hero}
      {skills}
      {project}
      {contact}
      <div className='h-4 w-full bg-slate-900' />
    </>
  );
};

export default MainLayout;
