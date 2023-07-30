import { useEffect } from 'react'

export default function useOverflowHidden(shouldHide) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = shouldHide ? 'hidden' : ''

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [shouldHide])
}
