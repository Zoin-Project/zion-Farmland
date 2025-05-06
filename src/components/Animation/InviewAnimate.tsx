import { useEffect, RefObject } from "react"
import { animate,  } from "motion"

interface InviewAnimateProps {
  keyframes: Record<string, any>
  options?: any
  onEnter?: (el: HTMLDivElement) => void
  threshold?: number
}

export const InviewAnimate = (
  ref: RefObject<HTMLDivElement>,
  { keyframes, options, onEnter, threshold = 0.3 }: InviewAnimateProps
) => {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(el, keyframes, options)
            onEnter?.(el)
            observer.unobserve(el)
          }
        })
      },
      { threshold }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [keyframes, options, onEnter, threshold, ref])
}
