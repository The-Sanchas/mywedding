import RevealDiv from './RevealDiv'

const WEEKDAYS = ['Пн','Вт','Ср','Чт','Пт','Сб','Нд']

const CELLS: { day: number | null; highlight: boolean }[] = [
  { day: null, highlight: false },
  ...Array.from({ length: 30 }, (_, i) => ({ day: i + 1, highlight: i + 1 === 19 })),
  { day: null, highlight: false },
  { day: null, highlight: false },
  { day: null, highlight: false },
  { day: null, highlight: false },
]

export default function CalendarSection() {
  return (
    <section style={{
      position: 'relative', zIndex: 1,
      padding: '74px 24px',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      background: `
        radial-gradient(110% 75% at 50% -5%,rgba(126,86,52,.42),transparent 60%),
        radial-gradient(90% 80% at 88% 105%,rgba(66,42,24,.5),transparent 62%),
        linear-gradient(165deg,#3E2817,#29190F 55%,#1F130A),
        url('/paper-texture.jpg')`,
      backgroundSize: 'auto,auto,auto,cover',
      backgroundBlendMode: 'normal,normal,multiply,normal',
      backgroundColor: '#29190F',
      boxShadow: 'inset 0 26px 64px rgba(0,0,0,.4),inset 0 -26px 64px rgba(0,0,0,.42)',
    }}>
      <RevealDiv style={{
        border: '1px solid rgba(199,168,99,.34)',
        borderRadius: 14,
        padding: '34px 30px 30px',
        background: 'rgba(255,247,236,.05)',
        width: 380,
        maxWidth: '92vw',
      }}>
        <div style={{ textAlign:'center', fontFamily:'var(--font-cormorant-var),serif',
          fontWeight:600, fontSize:26, color:'#F4E6D2', marginBottom:2 }}>
          Вересень 2026
        </div>
        <div style={{ textAlign:'center', fontFamily:'var(--font-cormorant-var),serif',
          fontStyle:'italic', fontSize:20, color:'#E7CBA2', marginBottom:20 }}>
          наш день
        </div>

        {/* weekday headers */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:4, marginBottom:8 }}>
          {WEEKDAYS.map(w => (
            <div key={w} style={{ textAlign:'center', fontFamily:'var(--font-lora-var),serif',
              fontSize:12, letterSpacing:'.06em', color:'#B79A72', padding:'4px 0' }}>
              {w}
            </div>
          ))}
        </div>

        {/* day cells */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:4 }}>
          {CELLS.map((c, i) => (
            <div key={i} style={{ position:'relative', aspectRatio:'1', display:'flex',
              alignItems:'center', justifyContent:'center',
              fontFamily:'var(--font-lora-var),serif', fontSize:15 }}>
              {c.highlight && (
                <svg viewBox="0 0 32 29"
                  style={{ position:'absolute', width:'100%', height:'100%',
                    animation:'pulseHeart 2.2s ease-in-out infinite' }}>
                  <path d="M16 28.5C16 28.5 2 19.6 2 9.9 2 5.3 5.7 1.6 10.2 1.6 13 1.6 15.2 3.1 16 5.1 16.8 3.1 19 1.6 21.8 1.6 26.3 1.6 30 5.3 30 9.9 30 19.6 16 28.5 16 28.5Z"
                    fill="#A4543A" />
                </svg>
              )}
              {c.day && (
                <span style={{ position:'relative',
                  color: c.highlight ? '#FFFFFF' : '#D9C3A4',
                  fontWeight: c.highlight ? 600 : 400 }}>
                  {c.day}
                </span>
              )}
            </div>
          ))}
        </div>
      </RevealDiv>
    </section>
  )
}
