'use client'

import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import GifRickrolled from '@/public/images/rick-rolled.gif';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TransitionEnter from '@/components/Transition/Enter';

export enum YesNoLabel {
    YES = 'Yes',
    NO = 'No'
}

const NotFoundPage = () => {
    const router = useRouter();
    const [labelNo, setLabelNo] = useState<YesNoLabel>(YesNoLabel.NO);

    const onMouseEnterNo = () => {
        setLabelNo(YesNoLabel.YES);
    }

    const onMouseLeaveNo = () => {
      setLabelNo(YesNoLabel.NO);
    };

    const onClickBack = () => {
        router.push('/')
    }

    return (
      <div className='flex justify-center items-center gap-8 flex-col w-auto min-w-screen bg-slate-100 h-auto min-h-screen overflow-hidden'>
        <TransitionEnter delay={0.3}>
          <Image
            src={GifRickrolled}
            alt='404'
            width={320}
            draggable={false}
            className='w-auto max-w-96 shadow-lg hover:shadow-md transition-shadow'
            layout='responsive'
          />
        </TransitionEnter>
        <div className='flex flex-col gap-2'>
          <TransitionEnter delay={0.5}>
            <Typography>Nothing to see here 🔎, wanna comeback?</Typography>  
          </TransitionEnter>
          <div className='flex gap-4 justify-center'>
            <TransitionEnter delay={0.7}>
                <Button
                variant={labelNo === YesNoLabel.YES ? 'outlined' : 'contained'}
                onClick={onClickBack}
                >
                    {labelNo === YesNoLabel.YES ? YesNoLabel.NO : YesNoLabel.YES}
                </Button>
            </TransitionEnter>
            <TransitionEnter delay={0.9}>
                <Button
                variant={labelNo === YesNoLabel.NO ? 'outlined' : 'contained'}
                onMouseEnter={onMouseEnterNo}
                onMouseLeave={onMouseLeaveNo}
                onClick={onClickBack}
                >
                {labelNo}
                </Button>
            </TransitionEnter>
          </div>
        </div>
      </div>
    );
};

export default NotFoundPage;
