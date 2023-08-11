import { useState, useEffect } from 'react'

export const useResize = (): number => {
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      const w = event.target as Window
      setWidth(w.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}