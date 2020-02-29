import {useState, useRef, useEffect} from 'react'

export default function useHover () {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const onEnter = () => setIsHovered(true)
  const onLeave = () => setIsHovered(false)

  useEffect(() => {
    ref.current.addEventListener('mouseenter', onEnter)
    ref.current.addEventListener('mouseleave', onLeave)

    return () => {
      ref.current.removeEventListener('mouseenter', onEnter)
      ref.current.removeEventListener('mouseleave', onLeave)
    }
  // eslint-disable-next-line
  }, [])

  return [isHovered, ref]
}