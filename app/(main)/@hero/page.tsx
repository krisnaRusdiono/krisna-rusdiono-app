'use client';

import ContentContainer from '@/components/ContentContainer';
import { Typography } from '@mui/material';
import Image from 'next/image';
import TalentImage from '@/public/images/krisna-rusdiono.png';
import IcIndonesia from '@/public/images/ic_indonesia_fix.svg';
import TransitionEnter from '@/components/Transition/Enter';
import { useAnimationControls } from 'motion/react';

const HeroSlot = () => {
  const yearsOfExperience = new Date().getFullYear() - 2021;
  const controls = useAnimationControls();

  const startAnimate = () => controls.start({ opacity: 1, scale: 1 });
  const endAnimate = () => {
    controls.start({ opacity: 0, scale: 0, transition: { duration: 0.5 } });
  };
  
  return (
    <ContentContainer
      className='pb-24 max-w-40 md:max-w-none mx-auto -mt-12'
      id='hero'
      onViewportEnter={startAnimate}
      onViewportLeave={endAnimate}
    >
      <div
        className='w-full flex flex-col justify-between items-center px-4 pt-4 gap-4 mt-20 box-border'
        id='hero'
      >
        <div className='flex flex-col gap-2 items-center justify-center pb-12'>
          <TransitionEnter delay={0.2} controls={controls}>
            <Typography className='text-5xl md:text-6xl font-extrabold mx-auto text-center uppercase leading-[3.5rem] w-full flex items-center box-border px-4'>
              Krisna Rusdiono
            </Typography>
          </TransitionEnter>
          <TransitionEnter controls={controls} className='flex w-full justify-center' delay={0.4}>
            <div className='w-full flex justify-between max-w-80 md:max-w-none'>
              <Typography>Software Engineer</Typography>|
              <Typography>2021 - present</Typography>
            </div>
          </TransitionEnter>
        </div>
        <TransitionEnter controls={controls} delay={0.6}>
          <div className='bg-slate-50 rounded-xl px-4 pt-8 flex items-end overflow-hidden [&>img]:hover:scale-110 drop-shadow-lg hover:drop-shadow-md'>
            <Image
              alt='main-picture'
              src={TalentImage}
              width={280}
              className='transition-all'
              priority
            />
          </div>
        </TransitionEnter>
        <TransitionEnter controls={controls} delay={0.8}>
          <Typography
            variant='body2'
            className='italic text-center my-4 max-w-[34rem]'
          >
            I&apos;m a Software Engineer with {yearsOfExperience} years of
            experience from Bandung{' '}
            <Image
              src={IcIndonesia}
              alt='indonesia'
              width={12}
              className='mx-2'
            />
            , specializing in TypeScript and frameworks like React, Next.js,
            Angular, and Vue.js.
            <br />
            <br />I focus on high output standards, writing clean, maintainable
            code to create intuitive and high-performance user interfaces.
          </Typography>
        </TransitionEnter>
      </div>
    </ContentContainer>
  );
};

export default HeroSlot;
