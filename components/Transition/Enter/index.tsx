import { ReactNode } from 'react';
import * as motion from 'motion/react-client';

const TransitionEnter = ({
  children,
  className,
  delay = 0.8,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: delay,
      ease: [0, 0.71, 0.2, 1.01],
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default TransitionEnter;
