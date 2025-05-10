import ContentContainer from '@/components/ContentContainer';
import { Typography } from '@mui/material';
import Image from 'next/image';
import TalentImage from '@/public/images/krisna-rusdiono.png';
import IcIndonesia from '@/public/images/ic_indonesia_fix.svg';

const HeroSlot = () => {
  const yearsOfExperience = new Date().getFullYear() - 2021;
  
  return (
    <ContentContainer className='pb-24 -mt-12' id='hero'>
      <div
        className='w-full flex flex-col justify-between items-center px-4 pt-4 gap-4'
        id='hero'
      >
        <div className='flex flex-col gap-2 items-center justify-center pb-12'>
          <Typography
            variant='h2'
            className='font-bold mx-auto text-center uppercase leading-[3.5rem] w-full flex items-center box-border px-4'
          >
            Krisna Rusdiono
          </Typography>
          <div className='w-full flex justify-between max-w-80 md:max-w-none'>
            <Typography>Web Developer</Typography>|
            <Typography>2021 - present</Typography>
          </div>
        </div>
        <div className='bg-slate-50 rounded-xl px-4 pt-8 flex items-end overflow-hidden [&>img]:hover:scale-110 drop-shadow-lg hover:drop-shadow-md'>
          <Image
            alt='main-picture'
            src={TalentImage}
            width={372}
            className='transition-all'
          />
        </div>
        <Typography
          variant='body2'
          className='italic text-center my-4 max-w-[34rem]'
        >
          I&apos;m a web developer with {yearsOfExperience} years of experience
          from Bandung <Image src={IcIndonesia} alt='indonesia' width={12} className='mx-2' />, specializing
          in TypeScript and frameworks like React, Next.js, Angular, and Vue.js.
          <br />
          <br />
          I focus on high output standards, writing clean, maintainable code to
          create intuitive and high-performance user interfaces.
        </Typography>
      </div>
    </ContentContainer>
  );
};

export default HeroSlot;
