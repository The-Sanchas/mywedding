'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function EnvelopeCover({ onOpen }: { onOpen: () => void }) {
  const coverRef = useRef<HTMLDivElement>(null)
  const flapRef  = useRef<HTMLDivElement>(null)
  const sealRef  = useRef<HTMLDivElement>(null)
  const [opening, setOpening] = useState(false)

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'
    window.scrollTo(0, 0)
    return () => { document.documentElement.style.overflow = '' }
  }, [])

  function handleOpen(e?: React.TouchEvent | React.MouseEvent) {
    if (e && 'touches' in e) e.preventDefault()
    if (opening) return
    setOpening(true)

    const seal  = sealRef.current
    const flap  = flapRef.current
    const cover = coverRef.current

    if (seal) {
      seal.style.transition = 'transform .8s cubic-bezier(.34,.02,.2,1), opacity .7s ease'
      seal.style.transform  = 'translate(-50%,-50%) translateY(-62px) scale(.74) rotate(-8deg)'
      seal.style.opacity    = '0'
    }
    if (flap) {
      flap.style.transition = 'transform 1.05s cubic-bezier(.5,0,.2,1)'
      flap.style.transform  = 'rotateX(88deg)'
    }

    setTimeout(() => {
      if (cover) {
        cover.style.transition = 'opacity .85s ease, transform 1s ease'
        cover.style.opacity    = '0'
        cover.style.transform  = 'scale(1.08)'
      }
    }, 560)

    setTimeout(() => {
      if (cover) cover.style.display = 'none'
      document.documentElement.style.overflow = ''
      onOpen()
    }, 1500)
  }

  return (
    <div
      ref={coverRef}
      onClick={handleOpen}
      onTouchEnd={handleOpen}
      style={{
        position: 'fixed', inset: 0, zIndex: 60, cursor: 'pointer',
        overflow: 'hidden', perspective: '1500px',
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent',
        userSelect: 'none',
        /* Exact values from Wedding.dc.html line 28 */
        backgroundImage: `
          radial-gradient(120% 78% at 50% 24%,rgba(122,82,50,.4),rgba(122,82,50,0) 58%),
          radial-gradient(150% 120% at 50% 66%,#48311F,#1B1007 92%),
          url('/paper-texture.jpg')`,
        backgroundSize: 'auto,auto,cover',
        backgroundBlendMode: 'normal,multiply,normal',
        backgroundColor: '#1B1007',
      }}
    >
      {/* line 29 — top light vignette */}
      <div style={{ position:'absolute', inset:0, zIndex:1, pointerEvents:'none',
        background:'radial-gradient(58% 36% at 50% 20%,rgba(255,224,186,.13),rgba(0,0,0,0) 70%)' }} />
      {/* line 30 — edge vignette */}
      <div style={{ position:'absolute', inset:0, zIndex:1, pointerEvents:'none',
        background:'radial-gradient(135% 100% at 50% 50%,rgba(0,0,0,0) 48%,rgba(0,0,0,.55))' }} />

      {/* lines 32-37 — double gold frame + corner diamonds */}
      <div style={{ position:'absolute', inset:22, zIndex:5, border:'1px solid rgba(199,168,99,.4)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', inset:27, zIndex:5, border:'1px solid rgba(199,168,99,.16)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', top:17,    left:17,  width:10, height:10, zIndex:5, border:'1px solid rgba(199,168,99,.5)', transform:'rotate(45deg)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', top:17,    right:17, width:10, height:10, zIndex:5, border:'1px solid rgba(199,168,99,.5)', transform:'rotate(45deg)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:17, left:17,  width:10, height:10, zIndex:5, border:'1px solid rgba(199,168,99,.5)', transform:'rotate(45deg)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:17, right:17, width:10, height:10, zIndex:5, border:'1px solid rgba(199,168,99,.5)', transform:'rotate(45deg)', pointerEvents:'none' }} />

      {/* lines 39-42 — names header at top:21vh */}
      <div style={{ position:'absolute', top:'21vh', left:0, right:0, zIndex:7, textAlign:'center', padding:'0 24px' }}>
        <div style={{ fontFamily:'var(--font-lora-var),serif', fontSize:13, letterSpacing:'.42em',
          textTransform:'uppercase', color:'#E7CBA2', opacity:.9 }}>
          Лист кохання від
        </div>
        <div style={{ fontFamily:'var(--font-cormorant-var),serif', fontStyle:'italic', fontWeight:500,
          fontSize:52, lineHeight:1.06, color:'#F4E6D2', marginTop:12,
          textShadow:'0 2px 12px rgba(0,0,0,.45)' }}>
          Аліса &amp; Олександр
        </div>
      </div>

      {/* line 44 — envelope flap (V-polygon), blend-mode:multiply,normal */}
      <div
        ref={flapRef}
        style={{
          position:'absolute', left:0, right:0, bottom:0, height:'60%', zIndex:2,
          transformOrigin:'bottom center',
          clipPath:'polygon(0 0,50% 28%,100% 0,100% 100%,0 100%)',
          backgroundImage:`radial-gradient(150% 120% at 50% 40%,#48311F,#1B1007 92%),url('/paper-texture.jpg')`,
          backgroundSize:'auto,cover',
          backgroundBlendMode:'multiply,normal',
          backgroundColor:'#1B1007',
          boxShadow:'inset 0 16px 50px rgba(0,0,0,.5)',
        }}
      />

      {/* lines 46-48 — V fold crease SVG */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none"
        style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:6, pointerEvents:'none' }}>
        <path d="M0,40 L50,56.8 L100,40" fill="none"
          stroke="rgba(199,168,99,.3)" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* lines 51-53 — wax seal wrapper div 196×207 */}
      <div ref={sealRef} style={{ position:'absolute', left:'50%', top:'52%',
        transform:'translate(-50%,-50%)', width:196, height:207, zIndex:8 }}>
        <Image src="/seal-wax-cut.png" alt="Воскова печатка"
          width={196} height={207}
          style={{ width:'100%', height:'100%', display:'block',
            filter:'drop-shadow(0 16px 24px rgba(8,4,1,.6))' }}
          priority />
      </div>

      {/* lines 55-58 — tap hint */}
      <div style={{ position:'absolute', bottom:'7vh', left:0, right:0, zIndex:7, textAlign:'center' }}>
        <div style={{ fontFamily:'var(--font-lora-var),serif', fontSize:14, letterSpacing:'.34em',
          textTransform:'uppercase', color:'#E7CBA2',
          animation:'softPulse 2.6s ease-in-out infinite' }}>
          Натисніть, щоб відкрити
        </div>
        <div style={{ width:46, height:1, background:'rgba(231,203,162,.6)', margin:'14px auto 0' }} />
      </div>
    </div>
  )
}
