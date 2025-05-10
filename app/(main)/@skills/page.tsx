import ContentContainer from '@/components/ContentContainer'
import TransitionEnter from '@/components/Transition/Enter';
import SKILLS_DATA from '@/constants/skillsData';
import { Tooltip } from '@mui/material';
import Image from 'next/image';

const ExpertiseSlot = () => {
    return (
      <ContentContainer
        id='skills'
        className='bg-white [&>div]:w-full [&>div]:max-w-[40rem]'
        badge='Skills & Familiarity'
      >
        <div className='w-full grid grid-cols-4 lg:grid-cols-6 gap-4 pt-4 mt-20 [&>div]:flex [&>div]:justify-center [&>div]:items-center'>
          {SKILLS_DATA.map(({ icon, name }, i) => (
            <TransitionEnter key={name} delay={i / 10}>
              <Tooltip title={name} className='hover:scale-110 transition-all'>
                <Image src={icon} alt={name} width={62} />
              </Tooltip>
            </TransitionEnter>
          ))}
        </div>
      </ContentContainer>
    );
}

export default ExpertiseSlot;
