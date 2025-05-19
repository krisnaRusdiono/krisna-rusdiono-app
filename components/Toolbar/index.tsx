'use client';

import { AppBar, Button, Divider, Toolbar as ToolbarMUI } from '@mui/material';
import { useEffect, useState } from 'react';
import TransitionEnter from '../Transition/Enter';
import NavigationTitle from '@/enums/navigation';

const Toolbar = () => {
    const [topView, setTopView] = useState<boolean>(false);

    const scrollTo = (id: string) => {
      const targetElement = document.getElementById(id);
      if (!targetElement) return;
      const targetTop = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: id === NavigationTitle.HERO ? 0 : targetTop, behavior: 'smooth' })
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
          } transition-all flex justify-center gap-2 overflow-auto`}
        >
          <TransitionEnter delay={0.2}>
            <Button
              variant='text'
              classes={{
                root: 'min-w-4',
              }}
              onClick={() => scrollTo(NavigationTitle.HERO)}
            >
              {NavigationTitle.HERO}
            </Button>
          </TransitionEnter>
          <Divider orientation='vertical' flexItem variant='middle' />
          <TransitionEnter delay={0.4}>
            <Button
              variant='text'
              classes={{
                root: 'min-w-4',
              }}
              onClick={() => scrollTo(NavigationTitle.SKILLS)}
            >
              {NavigationTitle.SKILLS}
            </Button>
          </TransitionEnter>
          <Divider orientation='vertical' flexItem variant='middle' />
          <TransitionEnter delay={0.6}>
            <Button
              variant='text'
              classes={{
                root: 'min-w-4',
              }}
              onClick={() => scrollTo(NavigationTitle.PROJECT)}
            >
              {NavigationTitle.PROJECT}
            </Button>
          </TransitionEnter>
          <Divider orientation='vertical' flexItem variant='middle' />
          <TransitionEnter delay={0.8}>
            <Button
              variant='text'
              classes={{
                root: 'min-w-4',
              }}
              onClick={() => scrollTo(NavigationTitle.CONTACT)}
            >
              {NavigationTitle.CONTACT}
            </Button>
          </TransitionEnter>
        </ToolbarMUI>
      </AppBar>
    );
};

export default Toolbar;
