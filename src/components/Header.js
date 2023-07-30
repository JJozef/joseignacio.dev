export default function Header({ title, icon, ...props }) {
  return (
    <header className='w-full h-fit px-3 py-3 border-b border-chinese-white bg-subtrans-color dark:border-aside-link/10 dark:bg-aside-link/[0.01]' {...props}>
      <div className='flex items-center space-x-2 justify-center md:justify-normal'>
        {icon}
        <h2 className='font-medium text-2xl'>{title}</h2>
      </div>
    </header>
  )
}
