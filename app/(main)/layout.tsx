import Toolbar from '@/components/Toolbar';
import { ReactNode } from 'react'

const MainLayout = ({
  hero,
  project,
}: {
  hero: ReactNode;
  project: ReactNode;
}) => {
  return (
    <>
      <Toolbar />
      {hero}
      {project}
    </>
  );
};

export default MainLayout;
