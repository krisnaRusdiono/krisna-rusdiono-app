'use client'
import * as motion from 'motion/react-client';
import { useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { Variants } from 'motion/react';
import noop from '@/utils/noop';
import TransitionEnter from '../Transition/Enter';

const ContentContainer = ({
  children,
  className,
  badge,
  id,
  displayType = 'flex',
  onViewportEnter = noop,
  onViewportLeave = noop,
}: {
  children: ReactNode;
  className?: string;
  id: string;
  badge?: string;
  displayType?: 'flex' | 'grid';
  onViewportEnter?: () => void;
  onViewportLeave?: () => void;
}) => {
  const theme = useTheme();
  const backgroundColor = theme.palette.background.default;

  const variants: Variants = {
    offscreen: {
      x: '-50%',
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      x: '0',
      rotate: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ amount: 0.5 }}
      className={`${className} relative ${displayType} gap-4 bg-[${backgroundColor}] h-auto px-6 pt-10 pb-24 justify-center box-border`}
      id={id}
      onViewportEnter={onViewportEnter}
      onViewportLeave={onViewportLeave}
    >
      <motion.div variants={variants}>
        {badge && (
          <TransitionEnter delay={0.2}>
            <div className='absolute bg-white left-1/2 -translate-x-1/2 rounded-2xl border shadow-lg hover:shadow-md px-4 py-2 box-border z-10 transition-all'>
              {badge}
            </div>
          </TransitionEnter>
        )}
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ContentContainer;
