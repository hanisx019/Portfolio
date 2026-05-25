import { useEffect, useRef, useState } from 'react'
import Animation from '../assets/animation.mp4';

const StarPattern = () => {
  const wrapperRef = useRef(null)
  const vidARef = useRef(null)
  const vidBRef = useRef(null)
  const [fadeActive, setFadeActive] = useState(false)

  useEffect(() => {
    const root = wrapperRef.current
    if (!root) return

    const checkEntryAtBottom = (entry) => {
      const bb = entry.boundingClientRect
      const rb = entry.rootBounds
      if (!rb) return false
      return bb.bottom >= rb.bottom - 0.5
    }

    const observer = new IntersectionObserver((entries) => {
      // if any observed video has its bounding bottom at or below the wrapper bottom,
      // enable a stronger fade overlay
      const anyAtBottom = entries.some(e => checkEntryAtBottom(e))
      setFadeActive(anyAtBottom)
    }, { root, threshold: 0 })

    if (vidARef.current) observer.observe(vidARef.current)
    if (vidBRef.current) observer.observe(vidBRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div ref={wrapperRef} className="bg-black h-[52vh] md:h-[60vh] min-h-0 text-white relative overflow-hidden">

        <video ref={vidARef} className="pointer-events-none select-none rotate-[205deg] scale-x-[1] scale-y-[-1] z-0 absolute  h-[750px]  -top-32 left-[-240px] md:left-[-350px] lg:left-[-250px] " src={Animation} controlsList="nodownload noplaybackrate"  autoPlay loop muted controls={false} onContextMenu={(e) => e.preventDefault()} playsInline/>

        <video ref={vidBRef} className="pointer-events-none select-none rotate-[215deg] -scale-x-[1] -translate-x-1/2  z-0 absolute  h-[750px]  -top-40 right-[-450px] md:right-[-800px] lg:right-[-650px]" src={Animation} controlsList="nodownload noplaybackrate" autoPlay loop muted controls={false} onContextMenu={(e) => e.preventDefault()} playsInline />

        {/* bottom fade overlay: becomes stronger when a video reaches the bottom */}
        <div
          className={`absolute inset-x-0 bottom-0 pointer-events-none transition-all duration-500 ease-out ${fadeActive ? 'h-2/3' : 'h-1/3'}`}
          style={{ backgroundImage: fadeActive
            ? 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,1) 100%)'
            : 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,1) 100%)'
          }}
        />
      </div>
    </>
  )
}

export default StarPattern