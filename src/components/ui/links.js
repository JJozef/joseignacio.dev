import Link from 'next/link'

export default function Links({
  href = '#',
  className = '',
  children,
  ...props
}) {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  )
}
