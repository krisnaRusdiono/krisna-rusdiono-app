'use client';

import { AppBar, Button, Divider, Toolbar as ToolbarMUI } from '@mui/material';
import { useEffect, useState } from 'react';

const Toolbar = () => {
    const [topView, setTopView] = useState<boolean>(false);

    const scrollTo = (id: string) => {
      const targetElement = document.getElementById(id);
      if (!targetElement) return;
      const targetTop = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: id === 'hero' ? 0 : targetTop, behavior: 'smooth' })
    }

    useEffect(() => {
      window.addEventListener('scroll', () => {
        setTopView(window.scrollY < 10);
      });
    }, [])

    return (
      <AppBar
        position='sticky'
        color={topView ? 'transparent' : 'default'}
        classes={{
          root: `${
            topView
              ? 'shadow-none'
              : 'bg-transparent box-border shadow-none p-4'
          } transition-all`,
        }}
      >
        <ToolbarMUI
          className={`${
            topView ? '' : `rounded-xl shadow-xl hover:shadow-md bg-[white]`
          } transition-all flex justify-center gap-2`}
        >
          <Button
            variant='text'
            classes={{
              root: 'min-w-4',
            }}
            onClick={() => scrollTo('hero')}
          >
            ME
          </Button>
          <Divider orientation='vertical' flexItem variant='middle' />
          <Button
            variant='text'
            classes={{
              root: 'min-w-4',
            }}
            onClick={() => scrollTo('project')}
          >
            Project Experiences
          </Button>
        </ToolbarMUI>
      </AppBar>
    );
};

export default Toolbar;
