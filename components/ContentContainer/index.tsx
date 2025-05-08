'use client'
import { useTheme } from '@mui/material';
import { ReactNode } from 'react';

const ContentContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  id: string;
}) => {
    const theme = useTheme();
    const backgroundColor = theme.palette.background.default;
    console.log(backgroundColor);
    return (
      <div
        className={`${className} flex bg-[${backgroundColor}] h-auto -mt-12`}
      >
        {children}
      </div>
    );
};

export default ContentContainer;
