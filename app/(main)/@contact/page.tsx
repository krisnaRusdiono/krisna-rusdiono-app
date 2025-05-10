import ContentContainer from '@/components/ContentContainer';
import TransitionEnter from '@/components/Transition/Enter';
import CONTACT_DATA from '@/constants/contactData';
import { Divider, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const ContactSlot = () => (
  <ContentContainer
    id='contact'
    badge='contact'
    className='flex-col [&>p]:text-center gap-8 mx-auto max-w-[60rem]'
  >
    <div className='mt-24'>
      <TransitionEnter delay={0.1}>
        <Typography className='text-center'>
          Glad you read this 🙂, feel free to reach me on these platform!
        </Typography>
      </TransitionEnter>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-8'>
        {CONTACT_DATA.map(({ name, icon, url, value }, i) => (
          <TransitionEnter key={name} delay={i / 3}>
            <Link
              href={url}
              className='flex items-center gap-3 text-inherit no-underline hover:no-underline focus:outline-none p-4 bg-slate-200 rounded-full shadow-lg hover:shadow-md transition-all hover:bg-slate-50'
              target='_blank'
            >
              <Image
                src={icon}
                alt={`${name} icon`}
                width={32}
                height={32}
                className='[&>*]:fill-black'
              />
              <Divider orientation='vertical' />
              <Typography className='overflow-auto simple-scrollbar'>
                {value}
              </Typography>
            </Link>
          </TransitionEnter>
        ))}
      </div>
      <TransitionEnter delay={0.6}>
        <Typography className='text-center'>
          And for HR, i am more than happy to share with you my latest CV that
          you can download
          <a
            className='min-w-0 px-1 lowercase text-inherit hover:!bg-transparent'
            href='/api/download'
          >
            here
          </a>
        </Typography>
      </TransitionEnter>
    </div>
  </ContentContainer>
);

export default ContactSlot;
