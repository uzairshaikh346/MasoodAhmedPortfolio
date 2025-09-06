'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import type { JSX } from 'react';

interface ClientMotionWrapperProps {
  children: ReactNode;
  className?: string;
  initial?: object;
  animate?: object;
  transition?: object;
  whileHover?: object;
  whileTap?: object;
  // Instead of onClick, use action types
  shareAction?: {
    type: 'share';
    title: string;
  };
  tag?: keyof JSX.IntrinsicElements;
}

const ClientMotionWrapper = ({
  children,
  className,
  initial,
  animate,
  transition,
  whileHover,
  whileTap,
  shareAction,
  tag = 'div',
  ...props
}: ClientMotionWrapperProps) => {
  const MotionComponent = motion[tag as keyof typeof motion] as React.ElementType;

  // Handle different action types
  const handleClick = () => {
    if (shareAction?.type === 'share') {
      if (typeof window !== 'undefined') {
        if (navigator.share) {
          navigator.share({
            title: shareAction.title,
            url: window.location.href,
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          alert('Link copied to clipboard!');
        }
      }
    }
  };

  const motionProps: Record<string, unknown> = {
    initial,
    animate,
    transition,
    className,
    ...props,
  };

  if (typeof whileHover !== 'undefined') motionProps.whileHover = whileHover;
  if (typeof whileTap !== 'undefined') motionProps.whileTap = whileTap;
  if (shareAction) motionProps.onClick = handleClick;

  return (
    <MotionComponent {...motionProps}>
      {children}
    </MotionComponent>
  );
};

export default ClientMotionWrapper;