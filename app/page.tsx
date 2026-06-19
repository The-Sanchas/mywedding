'use client'

import { useState } from 'react'
import Image from 'next/image'

import EnvelopeCover   from '@/components/EnvelopeCover'
import RevealDiv       from '@/components/RevealDiv'
import CalendarSection from '@/components/CalendarSection'
import TimelineSection from '@/components/TimelineSection'
import RSVPForm        from '@/components/RSVPForm'
import Countdown       from '@/components/Countdown'
import MusicPlayer     from '@/components/MusicPlayer'

const MAP_URL =
  'https://www.google.com.ua/maps/place/%D0%9B%D0%B0%D0%B7%D0%BD%D0%B5%D0%B2%D0%B8%D0%B9+%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81+%22%D0%94%D1%83%D0%B1%D1%80%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%22/@50.0506623,36.3170785,17z/data=!4m6!3m5!1s0x4127a7a670d856cd:0xae7fa49524a82db2!8m2!3d50.0506589!4d36.3196534!16s%2Fg%2F1pxqfdmhh?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D'

const PALETTE_WOMEN = [
  { name: 'Шоколад',  hex: '#5E4334' },
  { name: 'Карамель', hex: '#A6754E' },
  { name: 'Пісок',    hex: '#C8B49A' },
  { name: 'Шавлія',   hex: '#9BA77F' },
  { name: 'Пудра',    hex: '#E8C9CF' },
  { name: 'Ваніль',   hex: '#EFDFA0' },
]

const PALETTE_MEN = [
  { name: 'Еспресо', hex: '#2B2521', ring: 'rgba(255,255,255,.22)' },
  { name: 'Білий',   hex: '#FFFFFF', ring: 'rgba(120,104,70,.35)' },
]

const VELVET: React.CSSProperties = {
  position: 'relative',
  zIndex: 1,
  padding: '80px 24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: `
    radial-gradient(110% 75% at 50% -5%,rgba(126,86,52,.42),transparent 60%),
    radial-gradient(90% 80% at 88% 105%,rgba(66,42,24,.5),transparent 62%),
    linear-gradient(165deg,#3E2817,#29190F 55%,#1F130A),
    url('/paper-texture.jpg')`,
  backgroundSize: 'auto,auto,auto,cover',
  backgroundBlendMode: 'normal,normal,multiply,normal',
  backgroundColor: '#29190F',
  boxShadow: 'inset 0 26px 64px rgba(0,0,0,.4),inset 0 -26px 64px rgba(0,0,0,.42)',
}

export default function WeddingPage() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <EnvelopeCover onOpen={() => setOpened(true)} />
      <MusicPlayer opened={opened} />

      <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>

        {/* ── INVITATION TEXT (light parchment) ──────────────────────── */}
        <section style={{ position: 'relative', zIndex: 1,
          padding: '48px 24px 78px',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', overflow: 'hidden' }}>

          {/* groom + bride — in flow, centered above text */}
          <div className="cutout-figure"
            style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
              gap: 8, marginBottom: 32, flexShrink: 0 }}>

            <RevealDiv delay={0.15} style={{ position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
              <div style={{ position: 'absolute', bottom: '6%', left: '50%',
                transform: 'translateX(-50%)', width: '150%', height: '78%',
                borderRadius: '50%',
                background: 'radial-gradient(closest-side,rgba(178,203,236,.85),rgba(199,189,226,.45) 52%,transparent 76%)',
                filter: 'blur(12px)', zIndex: 0 }} />
              <Image src="/groom-cutout.png" alt="Наречений"
                width={200} height={230}
                style={{ position: 'relative', zIndex: 1, height: '230px', width: 'auto', display: 'block',
                  filter: 'drop-shadow(0 8px 12px rgba(74,53,38,.16))' }} />
            </RevealDiv>

            <RevealDiv delay={0.1} style={{ position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
              <div style={{ position: 'absolute', bottom: '6%', left: '50%',
                transform: 'translateX(-50%)', width: '150%', height: '82%',
                borderRadius: '50%',
                background: 'radial-gradient(closest-side,rgba(244,193,209,.85),rgba(232,201,224,.45) 52%,transparent 76%)',
                filter: 'blur(12px)', zIndex: 0 }} />
              <Image src="/bride-cutout.png" alt="Наречена"
                width={180} height={200}
                style={{ position: 'relative', zIndex: 1, height: '200px', width: 'auto', display: 'block',
                  filter: 'drop-shadow(0 8px 12px rgba(74,53,38,.16))' }} />
            </RevealDiv>

          </div>

          <RevealDiv style={{ maxWidth: 660, position: 'relative', zIndex: 2 }}>
            <p style={{ fontFamily: 'var(--font-cormorant-var),serif', fontStyle: 'italic',
              fontWeight: 500, fontSize: 'clamp(28px,5vw,40px)', lineHeight: 1.1,
              color: '#9C6B45', marginBottom: 28 }}>
              Дорогі рідні та друзі,
            </p>
            <h1 style={{ fontFamily: 'var(--font-cormorant-var),serif', fontWeight: 600,
              fontSize: 'clamp(36px,7vw,56px)', lineHeight: 1.08,
              letterSpacing: '.005em', color: '#4A3526', marginBottom: 28 }}>
              Ми вирішили одружитися!
            </h1>
            <div style={{ width: 54, height: 1, background: 'rgba(184,151,90,.6)', margin: '0 auto 28px' }} />
            <p style={{ fontFamily: 'var(--font-lora-var),serif',
              fontSize: 'clamp(15px,2.5vw,17px)', lineHeight: 1.9, color: '#6B5641' }}>
              …і з великою радістю запрошуємо вас розділити з нами цей день.{' '}
              <span style={{ fontFamily: 'var(--font-cormorant-var),serif', fontStyle: 'italic',
                fontSize: 'clamp(17px,2.8vw,21px)', color: '#9C6B45' }}>
                19 вересня 2026 року
              </span>{' '}
              ми станемо чоловіком та дружиною — і будемо щиро раді бачити поруч найдорожчих нам людей.
            </p>
            <p style={{ fontFamily: 'var(--font-lora-var),serif', fontSize: 15,
              lineHeight: 1.9, color: '#8A7559', marginTop: 22 }}>
              Запрошуємо вас стати свідками народження нашої сім&apos;ї та подарувати нам найцінніше —
              вашу присутність, тепло й усмішки.
            </p>
          </RevealDiv>
        </section>

        {/* ── CALENDAR (dark velvet band) ─────────────────────────────── */}
        <CalendarSection />

        {/* ── VENUE (light parchment) ─────────────────────────────────── */}
        <section style={{ position: 'relative', zIndex: 1,
          padding: '80px 24px 88px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <RevealDiv style={{ maxWidth: 560, width: '100%' }}>
            <p style={{ fontFamily: 'var(--font-lora-var),serif', fontSize: 12,
              letterSpacing: '.4em', textTransform: 'uppercase',
              color: '#9C6B45', marginBottom: 16 }}>
              Місце проведення
            </p>
            <h2 style={{ fontFamily: 'var(--font-cormorant-var),serif',
              fontSize: 'clamp(32px,6vw,44px)', fontWeight: 600,
              color: '#4A3526', marginBottom: 4 }}>
              Лазневий комплекс
            </h2>
            <p style={{ fontFamily: 'var(--font-cormorant-var),serif', fontStyle: 'italic',
              fontSize: 'clamp(26px,4.5vw,36px)', color: '#B8975A', marginBottom: 8 }}>
              «Дубровський»
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '18px 0 26px' }}>
              <div style={{ padding: 10,
                background: 'linear-gradient(160deg,#FCF6EC,#EFE3CD)',
                borderRadius: 8, boxShadow: '0 22px 48px rgba(74,53,38,.22)',
                border: '1px solid rgba(184,151,90,.4)', maxWidth: 440, width: '100%' }}>
                <Image src="/venue-sign.jpg" alt="Лазневий комплекс «Дубровський»"
                  width={440} height={280}
                  style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 4 }} />
              </div>
            </div>

            <p style={{ fontFamily: 'var(--font-lora-var),serif', fontSize: 16,
              lineHeight: 1.7, color: '#6B5641', marginBottom: 28 }}>
              Будемо чекати о 14:00
            </p>
            <a href={MAP_URL} target="_blank" rel="noopener" className="map-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s7-7.6 7-13a7 7 0 1 0-14 0c0 5.4 7 13 7 13Z"
                  stroke="#F6EEE2" strokeWidth="1.7"/>
                <circle cx="12" cy="9" r="2.6" stroke="#F6EEE2" strokeWidth="1.7"/>
              </svg>
              Відкрити в Google Maps
            </a>
          </RevealDiv>
        </section>

        {/* ── TIMELINE (dark velvet band) ─────────────────────────────── */}
        <TimelineSection />

        {/* ── DRESS CODE (light parchment) ────────────────────────────── */}
        <section style={{ position: 'relative', zIndex: 1,
          padding: '80px 24px 90px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <RevealDiv style={{ maxWidth: 620 }}>
            <p style={{ fontFamily: 'var(--font-lora-var),serif', fontSize: 12,
              letterSpacing: '.4em', textTransform: 'uppercase',
              color: '#9C6B45', marginBottom: 14 }}>
              Дрес-код
            </p>
            <h2 style={{ fontFamily: 'var(--font-cormorant-var),serif',
              fontSize: 'clamp(32px,6vw,44px)', fontWeight: 600,
              color: '#4A3526', marginBottom: 18 }}>
              Палітра свята
            </h2>
            <p style={{ fontFamily: 'var(--font-lora-var),serif', fontSize: 16,
              lineHeight: 1.75, color: '#6B5641', marginBottom: 46 }}>
              Для нас найголовніше — ваша присутність! Але ми будемо щиро вдячні, якщо ви підтримаєте
              кольорову гаму спокійних, природних відтінків.
            </p>

            {/* women palette */}
            <div style={{ display: 'flex', gap: 22, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
              {PALETTE_WOMEN.map(p => (
                <div key={p.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%', background: p.hex,
                    boxShadow: '0 10px 22px rgba(60,42,26,.2),inset 0 0 0 1px rgba(255,255,255,.22)',
                    transition: 'transform .25s ease',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <span style={{ fontFamily: 'var(--font-lora-var),serif', fontSize: 13,
                    letterSpacing: '.04em', color: '#6B5641' }}>
                    {p.name}
                  </span>
                </div>
              ))}
            </div>

            {/* men divider */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 14, marginBottom: 8 }}>
              <span style={{ width: 36, height: 1, background: 'rgba(184,151,90,.55)' }} />
              <span style={{ fontFamily: 'var(--font-lora-var),serif', fontSize: 12,
                letterSpacing: '.3em', textTransform: 'uppercase', color: '#9C6B45' }}>
                Додаткові кольори для чоловіків
              </span>
              <span style={{ width: 36, height: 1, background: 'rgba(184,151,90,.55)' }} />
            </div>
            <p style={{ fontFamily: 'var(--font-cormorant-var),serif', fontStyle: 'italic',
              fontSize: 19, color: '#8A7559', marginBottom: 28 }}>
              на додачу до палітри вище
            </p>

            {/* men palette */}
            <div style={{ display: 'flex', gap: 22, justifyContent: 'center', flexWrap: 'wrap' }}>
              {PALETTE_MEN.map(p => (
                <div key={p.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%', background: p.hex,
                    boxShadow: `0 10px 22px rgba(60,42,26,.2),inset 0 0 0 1px ${p.ring}`,
                    transition: 'transform .25s ease',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <span style={{ fontFamily: 'var(--font-lora-var),serif', fontSize: 13,
                    letterSpacing: '.04em', color: '#6B5641' }}>
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </RevealDiv>
        </section>

        {/* ── RSVP (dark velvet band) ─────────────────────────────────── */}
        <section style={VELVET}>
          <RevealDiv style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontFamily: 'var(--font-lora-var),serif', fontSize: 12,
              letterSpacing: '.4em', textTransform: 'uppercase',
              color: '#D9B98A', marginBottom: 14 }}>
              Анкета гостя
            </p>
            <h2 style={{ fontFamily: 'var(--font-cormorant-var),serif',
              fontSize: 'clamp(32px,6vw,44px)', fontWeight: 600,
              color: '#F6EEE2', marginBottom: 10 }}>
              Підтвердіть присутність
            </h2>
            <p style={{ fontFamily: 'var(--font-lora-var),serif', fontSize: 16,
              color: '#DCC8AC', maxWidth: 440 }}>
              Будь ласка, заповніть до 19 серпня 2026 року
            </p>
          </RevealDiv>
          <RevealDiv delay={0.1} style={{ width: 560, maxWidth: '94vw' }}>
            <RSVPForm />
          </RevealDiv>
        </section>

        {/* ── FINALE (light parchment) ────────────────────────────────── */}
        <section style={{ position: 'relative', zIndex: 1,
          padding: '84px 24px 96px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

          {/* countdown */}
          <RevealDiv style={{ marginBottom: 52 }}>
            <p style={{ fontFamily: 'var(--font-lora-var),serif', fontSize: 12,
              letterSpacing: '.4em', textTransform: 'uppercase',
              color: '#9C6B45', marginBottom: 30 }}>
              Ми скажемо{' '}
              <span style={{ fontFamily: 'var(--font-cormorant-var),serif', fontStyle: 'italic',
                fontWeight: 600, fontSize: 30, letterSpacing: '.01em', textTransform: 'none',
                color: '#A4543A', verticalAlign: '-2px' }}>
                «так»
              </span>
              {' '}через
            </p>
            <Countdown />
          </RevealDiv>

          {/* couple photo */}
          <RevealDiv delay={0.08} style={{ width: 330, maxWidth: '84vw' }}>
            <div style={{ position: 'relative', padding: 12,
              background: 'linear-gradient(160deg,#FCF6EC,#EFE3CD)',
              borderRadius: 8, boxShadow: '0 28px 56px rgba(74,53,38,.24)',
              border: '1px solid rgba(184,151,90,.4)' }}>
              <Image src="/couple.jpg" alt="Аліса та Олександр"
                width={600} height={800}
                style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 4 }} />
            </div>
          </RevealDiv>

          {/* sign-off */}
          <RevealDiv delay={0.14} style={{ marginTop: 34 }}>
            <p style={{ fontFamily: 'var(--font-lora-var),serif', fontSize: 13,
              letterSpacing: '.34em', textTransform: 'uppercase', color: '#9C6B45' }}>
              З любов&apos;ю,
            </p>
            <p style={{ fontFamily: 'var(--font-cormorant-var),serif', fontStyle: 'italic',
              fontSize: 'clamp(36px,7vw,50px)', color: '#4A3526', marginTop: 10 }}>
              Аліска &amp; Саньок
            </p>
            <p style={{ fontFamily: 'var(--font-lora-var),serif', fontSize: 13,
              letterSpacing: '.3em', textTransform: 'uppercase',
              color: '#B9966B', marginTop: 14 }}>
              19 вересня 2026
            </p>
          </RevealDiv>
        </section>

      </div>
    </>
  )
}
