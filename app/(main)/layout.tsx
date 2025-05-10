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
    </>
  );
};

export default MainLayout;
