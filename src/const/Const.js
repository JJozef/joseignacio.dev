export const StatusGreen = () => (
  <span className='inline-block w-2 h-2 bg-green-500 rounded-full ml-1 transition animate-pulse duration-300' />
)
export const StatusViolet = () => (
  <span className='inline-block w-2 h-2 bg-violet-500 rounded-full ml-1' />
)

export const variantsCardProject = {
  open: {
    height: 'auto',
    opacity: 1,
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem'
  },
  closed: { height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }
}
