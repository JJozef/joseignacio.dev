import { useState } from 'react'
import { motion } from 'framer-motion'
import { StatusGreen, StatusViolet, variantsCardProject } from '@/const/Const'
import { ExternalLinkIcon } from '../icons/icons'
import Link from 'next/link'

function CardProjects({
  title,
  resume,
  description,
  status,
  technologies,
  image,
  link,
  ...props
}) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div className='' {...props}>
      <motion.div
        className='w-full h-36 border-t border-l border-r border-chinese-white dark:border-aside-link/5 overflow-hidden rounded-t-lg bg-chinese-white dark:bg-gray-200'
        whileHover={{ height: 'auto', transition: { duration: 0.1 } }}
      >
        <img
          src={image}
          alt={title}
          className='w-full h-auto object-cover object-top rounded-xl overflow-hidden px-2 py-2 select-none'
        />
      </motion.div>
      <div className='grid grid-cols-6 rounded-b-lg border border-chinese-white dark:border-aside-link/5'>
        <div className='col-span-2 py-3 px-2 border-r border-b border-chinese-white dark:border-aside-link/5 flex flex-col justify-center items-start xl:p-3 overflow-hidden'>
          <h4 className='font-bold text-xs mb-0.5'>proyecto</h4>
          <Link
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center space-x-1 hover:underline'
          >
            <p className='text-xs'>{title}</p>
            <ExternalLinkIcon className='w-3 h-3 inline-block' />
          </Link>
        </div>
        <div className='col-span-2 py-3 px-2 border-r border-b border-chinese-white dark:border-aside-link/5 flex flex-col justify-center items-start xl:p-3 overflow-hidden'>
          <h4 className='font-bold text-xs mb-0.5'>estado</h4>
          <p className='text-xs'>
            {status}
            {status === 'desarrollo' ? <StatusGreen /> : null}
            {status === 'finalizado' ? <StatusViolet /> : null}
          </p>
        </div>
        <div className='col-span-2 p-3 border-b border-chinese-white dark:border-aside-link/5 flex flex-col justify-center items-start overflow-hidden'>
          <h4 className='font-bold text-xs mb-0.5'>tecnologias</h4>
          <div className='flex relative z-auto'>
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`w-6 h-6 object-cover rounded-full hover:scale-110 transform transition duration-200 ease-linear ${
                  index !== 0 ? '-ml-2.5' : ''
                } hover:z-10-i `}
                style={{ zIndex: 10 - index }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className='w-full h-full object-cover rounded-full bg-zinc-200 dark:bg-white p-0.5'
                  title={tech.name}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='px-3 py-3 col-span-6 border-b border-chinese-white dark:border-aside-link/5'>
          <h4 className='text-xs font-bold mb-0.5'>resumen</h4>
          <p className='w-full text-sm whitespace-normal'>{resume}</p>
        </div>

        <motion.div className='col-span-6 h-fit'>
          <motion.div
            className='border-b border-chinese-white dark:border-aside-link/5 overflow-hidden'
            initial={{ height: 0, opacity: 0 }}
            animate={isClicked ? 'open' : 'closed'}
            variants={variantsCardProject}
            transition={{ duration: 0.09 }}
          >
            <h4 className='text-xs font-bold mb-0.5 px-3'>descripcion</h4>
            <p className='w-full text-sm whitespace-normal px-3 h-auto overflow-hidden'>
              {description}
            </p>
          </motion.div>
          <button
            className='w-full bg-transparent text-zinc-900 dark:text-white font-bold rounded-md text-xs flex justify-center items-center gap-1 py-2 px-2'
            onClick={handleClick}
          >
            <span className={`${isClicked ? 'rotate-180' : ''}`}>↓</span> Ver
            mas
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default CardProjects
