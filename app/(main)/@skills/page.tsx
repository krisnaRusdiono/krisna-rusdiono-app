import ContentContainer from '@/components/ContentContainer'
import SKILLS_DATA from '@/constants/skillsData';
import { Tooltip } from '@mui/material';
import Image from 'next/image';

const ExpertiseSlot = () => {
    return (
      <ContentContainer id='expertise' displayType='grid' className='bg-slate-100 grid-cols-4 gap-4' badge='Skills & Familiarity'>
        {SKILLS_DATA.map(({ icon, name }) => (
          <Tooltip title={name} key={name}>
            <Image src={icon} alt={name} width={62} className='mx-auto self-center' />
          </Tooltip>
        ))}
      </ContentContainer>
    );
}

export default ExpertiseSlot;
