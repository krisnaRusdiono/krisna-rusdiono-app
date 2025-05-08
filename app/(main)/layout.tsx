import Toolbar from '@/components/Toolbar';
import { ReactNode } from 'react'

const MainLayout = ({
  hero,
}: {
  hero: ReactNode;
}) => {
  return (
    <>
      <Toolbar />
      {hero}
    </>
  );
};

export default MainLayout;
