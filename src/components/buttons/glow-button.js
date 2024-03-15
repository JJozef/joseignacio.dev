'use client'

import { motion } from 'framer-motion'
import { MENU_ITEMS } from '@/const/data'
import { useTheme } from 'next-themes'

const SPEED = 0.8

export const GlowButton = ({ index, onClick, isActive, children }) => {
  const { theme } = useTheme()
  const borderRadiusAnimation = {
    borderBottomLeftRadius: index === MENU_ITEMS.length - 1 ? 0 : 16,
    borderBottomRightRadius: index === 0 ? 0 : 16,
    borderTopRightRadius: index === 0 ? 0 : 16,
    borderTopLeftRadius: index === MENU_ITEMS.length - 1 ? 0 : 16
  }

  return (
    <motion.button
      style={{
        transition: 'color 150ms ease 0s, text-shadow 250ms ease 0s',
        ...borderRadiusAnimation
      }}
      animate={{
        textShadow: isActive
          ? {
              color: 'rgba(255, 255, 255, 0.57)',
              x: '1px',
              y: '1px',
              blur: '12px'
            }
          : 'none',
        color: isActive ? 'hsl(var(--foreground-contrast))' : 'inherit',
        fontWeight: isActive ? 600 : 500,
        backgroundColor: isActive
          ? theme === 'light'
            ? 'hsl(var(--background))'
            : 'transparent'
          : 'transparent'
      }}
      initial={{
        backgroundColor: 'transparent',
        color: isActive ? 'hsl(var(--foreground-contrast))' : 'inherit'
      }}
      transition={{
        delay: 0.02
      }}
      className='rounded-xl z-50 relative flex items-center justify-center text-center outline-none cursor-pointer px-3 py-1.5 hover:!text-foreground'
      onClick={onClick}
    >
      {children}
      {isActive && (
        <>
          <motion.div
            layoutId='glow'
            initial={{ opacity: 0.11 }}
            className='absolute z-20 w-full h-5 pointer-events-none rounded-xl bg-black dark:bg-white blur-[7px]'
            style={{
              scale: 2,
              rotate: 1e-5,
              opacity: theme === 'dark' ? 0.11 : 0.09
            }}
            transition={{
              delay: 0.03,
              type: 'spring',
              stiffness: 120 / SPEED,
              damping: 20,
              mass: 1
            }}
          />
          <motion.div
            layoutId='button'
            initial={false}
            animate={borderRadiusAnimation}
            style={{
              transition: 'backdrop-filter 500ms ease 0s'
            }}
            className='absolute pointer-events-none inset-0 z-10 w-full h-full border border-border/80  dark:bg-foreground/5'
            transition={{
              type: 'spring',
              stiffness: 120 / SPEED,
              damping: 20,
              mass: 1
            }}
          />
        </>
      )}
    </motion.button>
  )
}
