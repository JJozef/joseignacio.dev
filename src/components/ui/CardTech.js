import { useRef, useState } from 'react'
import clsx from 'clsx'

function CardTech({ tech, icon, color }) {
  const divRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <li
      className={clsx(
        'text-md bg-aside-link/50 dark:bg-aside-link/5 rounded-lg group h-28 relative overflow-hidden border border-chinese-white dark:border-aside-link/10'
      )}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${
            position.y
          }px, ${color || 'rgba(0, 0, 0, .2)'}, transparent 40%)`
        }}
      />
      <div className='flex flex-col justify-center items-center h-full w-full px-3 py-3 transition-all duration-300 group-hover:pb-7 bg-transparent'>
        {icon}
      </div>
      <div className='w-full absolute bottom-1 left-0 text-center'>
        <span
          className={clsx(
            'w-full block scale-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-300',
            'font-medium'
          )}
        >
          {tech}
        </span>
      </div>
    </li>
  )
}

export default CardTech
