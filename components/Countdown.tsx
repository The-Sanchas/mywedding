'use client'

import { useEffect, useState } from 'react'

interface TimeLeft { d: number; h: number; m: number; s: number }

function calcTime(): TimeLeft {
  const diff = Math.max(0, new Date(2026, 8, 19, 15, 0, 0).getTime() - Date.now())
  const d = Math.floor(diff / 86_400_000)
  const h = Math.floor((diff % 86_400_000) / 3_600_000)
  const m = Math.floor((diff % 3_600_000)  / 60_000)
  const s = Math.floor((diff % 60_000)     / 1_000)
  return { d, h, m, s }
}

function pad(n: number) { return String(n).padStart(2, '0') }

const numStyle: React.CSSProperties = {
  fontFamily: 'var(--font-cormorant-var), serif',
  fontWeight: 500,
  fontSize: 62,
  lineHeight: 0.95,
  color: '#4A3526',
  display: 'block',
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-lora-var), serif',
  fontSize: 11,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#9C7B55',
  marginTop: 9,
  display: 'block',
}

const dividerStyle: React.CSSProperties = {
  width: 1,
  height: 50,
  background: 'rgba(184,151,90,.4)',
  marginTop: 8,
  flexShrink: 0,
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(calcTime())
    const id = setInterval(() => setTime(calcTime()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!time) return null

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'nowrap' }}>

      <div style={{ textAlign: 'center', padding: '0 16px' }}>
        <span style={numStyle}>{time.d}</span>
        <span style={labelStyle}>днів</span>
      </div>

      <div style={dividerStyle} />

      <div style={{ textAlign: 'center', padding: '0 16px' }}>
        <span style={numStyle}>{pad(time.h)}</span>
        <span style={labelStyle}>годин</span>
      </div>

      <div style={dividerStyle} />

      <div style={{ textAlign: 'center', padding: '0 16px' }}>
        <span style={numStyle}>{pad(time.m)}</span>
        <span style={labelStyle}>хвилин</span>
      </div>

      <div style={dividerStyle} />

      <div style={{ textAlign: 'center', padding: '0 16px' }}>
        <span style={numStyle}>{pad(time.s)}</span>
        <span style={labelStyle}>секунд</span>
      </div>

    </div>
  )
}
