'use client'

import { useState } from 'react'

const DRINKS = ['Червоне вино','Біле вино','Шампанське','Горілка','Коньяк','Віскі','Ром','Безалкогольні']

export default function RSVPForm() {
  const [name,    setName]    = useState('')
  const [attend,  setAttend]  = useState<'yes'|'no'|null>(null)
  const [drinks,  setDrinks]  = useState<string[]>([])
  const [touched, setTouched] = useState(false)
  const [done,    setDone]    = useState(false)
  const [loading, setLoading] = useState(false)

  function toggleDrink(d: string) {
    setDrinks(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d])
  }

  async function submit() {
    setTouched(true)
    if (!name.trim()) return
    setLoading(true)
    try {
      await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), attend, drinks }),
      })
    } catch {}
    setLoading(false)
    setDone(true)
  }

  const nameError = touched && !name.trim()

  /* ── success ── */
  if (done) return (
    <div className="rsvp-card" style={{ textAlign:'center', padding:'40px 24px' }}>
      <svg width={58} height={58} viewBox="0 0 32 29" style={{ margin:'0 auto 18px', display:'block' }}>
        <path d="M16 28.5C16 28.5 2 19.6 2 9.9 2 5.3 5.7 1.6 10.2 1.6 13 1.6 15.2 3.1 16 5.1 16.8 3.1 19 1.6 21.8 1.6 26.3 1.6 30 5.3 30 9.9 30 19.6 16 28.5 16 28.5Z" fill="#9C6B45"/>
      </svg>
      <p style={{ fontFamily:'var(--font-cormorant-var),serif', fontSize:28, fontWeight:600,
        color:'#4A3526', marginBottom:10 }}>
        Дякуємо, {name.trim().split(' ')[0]}!
      </p>
      <p style={{ fontFamily:'var(--font-lora-var),serif', fontSize:16, lineHeight:1.7, color:'#6B5B4A' }}>
        Вашу відповідь збережено. Ми з нетерпінням чекаємо зустрічі 19 вересня!
      </p>
    </div>
  )

  /* ── form ── */
  return (
    <div className="rsvp-card">
      {/* name */}
      <label style={{ display:'block', fontFamily:'var(--font-lora-var),serif',
        fontSize:13, letterSpacing:'.16em', textTransform:'uppercase',
        color:'#8A8366', marginBottom:9 }}>
        Ваше ім&apos;я та прізвище
      </label>
      <input
        className="rsvp-input"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Наприклад, Марія Петренко"
      />
      <div style={{ height:18, fontFamily:'var(--font-lora-var),serif',
        fontSize:13, color:'#9C6B45', marginBottom:10 }}>
        {nameError && "Будь ласка, вкажіть ім'я"}
      </div>

      {/* attendance */}
      <label style={{ display:'block', fontFamily:'var(--font-lora-var),serif',
        fontSize:13, letterSpacing:'.16em', textTransform:'uppercase',
        color:'#8A8366', marginBottom:11 }}>
        Чи зможете бути присутніми?
      </label>
      <div style={{ display:'flex', gap:12, marginBottom:26, flexWrap:'wrap' }}>
        {(['yes','no'] as const).map(key => (
          <button
            key={key}
            className={`rsvp-attend-btn ${attend===key ? (key==='yes'?'sel-yes':'sel-no') : ''}`}
            onClick={() => setAttend(key)}
          >
            {key==='yes' ? 'Так, з радістю!' : 'На жаль, не зможу'}
          </button>
        ))}
      </div>

      {/* drinks */}
      <label style={{ display:'block', fontFamily:'var(--font-lora-var),serif',
        fontSize:13, letterSpacing:'.16em', textTransform:'uppercase',
        color:'#8A8366', marginBottom:11 }}>
        Яким напоям надаєте перевагу?
      </label>
      <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginBottom:30 }}>
        {DRINKS.map(d => (
          <button
            key={d}
            className={`rsvp-drink-btn ${drinks.includes(d) ? 'sel' : ''}`}
            onClick={() => toggleDrink(d)}
          >
            {d}
          </button>
        ))}
      </div>

      <button className="rsvp-submit" onClick={submit} disabled={loading}>
        {loading ? 'Надсилаємо…' : 'Надіслати відповідь'}
      </button>
    </div>
  )
}
