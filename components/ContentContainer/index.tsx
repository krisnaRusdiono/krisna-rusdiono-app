'use client'
import { useTheme } from '@mui/material';
import { ReactNode } from 'react';

const ContentContainer = ({
  children,
  className,
  badge,
  id,
}: {
  children: ReactNode;
  className?: string;
  id: string;
  badge?: string;
}) => {
    const theme = useTheme();
    const backgroundColor = theme.palette.background.default;
    
    return (
      <div className={`${className} relative flex gap-4 bg-[${backgroundColor}] h-auto px-12 py-24`} id={id}>
        {badge && (
          <div className='absolute bg-white left-1/2 -translate-x-1/2 top-8 rounded-2xl border shadow-lg hover:shadow-md px-4 py-2 box-border transition-shadow z-10'>{badge}</div>
        )}
        {children}
      </div>
    );
};

export default ContentContainer;
