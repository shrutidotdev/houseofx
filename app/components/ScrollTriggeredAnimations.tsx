import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

// Fade In on Scroll
interface FadeInSectionProps {
  children: ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

// Slide In from Side
interface SlideInSectionProps {
  children: ReactNode;
  direction?: 'left' | 'right';
}

const SlideInSection: React.FC<SlideInSectionProps> = ({ children, direction = 'right' }) => {
  const initial = direction === 'right'
    ? { x: 100, opacity: 0 }
    : { x: -100, opacity: 0 };
  return (
    <motion.div
      initial={initial}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

// Scale Up on Scroll
interface ScaleUpSectionProps {
  children: ReactNode;
}

const ScaleUpSection: React.FC<ScaleUpSectionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: 'tween' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};



export { FadeInSection, SlideInSection, ScaleUpSection };
