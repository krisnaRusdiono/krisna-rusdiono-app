import ContentContainer from '@/components/ContentContainer';
import { Typography } from '@mui/material';
import Image from 'next/image';
import TalentImage from '@/public/images/krisna-rusdiono.png';

const HeroSlot = () => (
  <ContentContainer className='py-8' id="hero">
    <div className='w-full flex flex-col justify-between items-center px-4 pt-4 gap-4' id="hero">
      <div
        className='flex flex-col gap-2 items-center justify-center py-12'
      >
        <Typography
          variant='h2'
          className='font-bold mx-auto text-center uppercase leading-[3.5rem] w-full flex items-center box-border px-4'
        >
          Krisna Rusdiono
        </Typography>
        <div className='w-full flex justify-between max-w-80 md:max-w-none'>
          <Typography>Web Developer</Typography>
          |
          <Typography>2021 - present</Typography>
        </div>
      </div>
      <div className='bg-slate-50 rounded-xl px-4 pt-8 flex items-end overflow-hidden hover:[&>img]:scale-110 drop-shadow-lg'>
        <Image alt='main-picture' src={TalentImage} width={372} className='transition-all' />
      </div>
    </div>
  </ContentContainer>
);

export default HeroSlot;
