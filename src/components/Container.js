import clsx from 'clsx'
import React from 'react'

function Container({ children, className }) {
  return <article className={clsx('px-4 py-3 max-w-5xl m-auto', className)}>{children}</article>
}

export default Container
