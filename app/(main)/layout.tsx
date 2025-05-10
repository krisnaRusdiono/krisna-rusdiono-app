import Toolbar from '@/components/Toolbar';
import { ReactNode } from 'react'

const MainLayout = ({
  hero,
  project,
  skills,
}: {
  hero: ReactNode;
  project: ReactNode;
  skills: ReactNode;
}) => {
  return (
    <>
      <Toolbar />
      {hero}
      {skills}
      {project}
    </>
  );
};

export default MainLayout;
