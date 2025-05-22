'use client'

import { Button, Typography } from '@mui/material';
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
      <div className='flex justify-center items-center gap-8 flex-col w-auto min-w-screen bg-slate-100 h-auto min-h-screen overflow-hidden p-8'>
        <div className='flex flex-col gap-4'>
          <TransitionEnter delay={0.5}>
            <Typography className='text-center' variant='h2'>Uh oh, 404</Typography>  
          </TransitionEnter>
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
