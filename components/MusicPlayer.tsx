'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function MusicPlayer({ opened }: { opened: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!opened) return
    const t = setTimeout(() => setVisible(true), 700)
    return () => clearTimeout(t)
  }, [opened])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  const playPath  = 'M2 1.5 L10 6 L2 10.5 Z'
  const pausePath = 'M2.5 1.5 H4.5 V10.5 H2.5 Z M7.5 1.5 H9.5 V10.5 H7.5 Z'

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop preload="none" />
      <div
        onClick={toggle}
        role="button"
        aria-label="Музика"
        style={{
          position: 'fixed', right: 16, bottom: 16, zIndex: 55,
          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10,
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(14px)',
          transition: 'opacity .7s ease, transform .7s ease',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <div style={{
          fontFamily: 'var(--font-lora-var),serif', fontSize: 12, letterSpacing: '.02em',
          color: '#5C4631', background: 'rgba(252,246,236,.92)',
          padding: '8px 13px', borderRadius: 22,
          boxShadow: '0 6px 16px rgba(74,53,38,.22)',
          border: '1px solid rgba(184,151,90,.4)', whiteSpace: 'nowrap',
        }}>
          {playing ? 'Грає музика' : 'Увімкнути музику'}
        </div>
        <div style={{ position: 'relative', width: 58, height: 58, flexShrink: 0 }}>
          <Image
            src="/vinyl-heart.png"
            alt=""
            width={58} height={58}
            style={{
              width: '100%', height: '100%', display: 'block',
              filter: 'drop-shadow(0 6px 14px rgba(40,24,14,.5))',
              animation: playing ? 'spinDisc 6s linear infinite' : 'none',
            }}
          />
          <div style={{
            position: 'absolute', right: -3, bottom: -3, width: 24, height: 24,
            borderRadius: '50%', background: '#6B4A36', border: '1.5px solid #FCF6EC',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 3px 8px rgba(40,24,14,.4)',
          }}>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="#FCF6EC">
              <path d={playing ? pausePath : playPath} />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
