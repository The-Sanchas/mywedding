'use client'

import { motion } from 'framer-motion'

const EVENTS = [
  {
    time: '14:00', label: 'Збір гостей', side: 'left',
    icon: (
      <svg width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#E8CFA6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <g transform="rotate(-11 8 8)"><path d="M6 4 L9 4 L7.7 9.4 Z"/><path d="M7.4 9.4 L7.1 14.4"/><path d="M5.8 14.4 H8.6"/></g>
        <g transform="rotate(11 16 8)"><path d="M15 4 L18 4 L16.3 9.4 Z"/><path d="M16.6 9.4 L16.9 14.4"/><path d="M15.4 14.4 H18.2"/></g>
      </svg>
    ),
  },
  {
    time: '15:00', label: 'Церемонія', side: 'right',
    icon: (
      <svg width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#E8CFA6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9.5" cy="13.8" r="4.7"/><circle cx="14.7" cy="13.8" r="4.7"/>
        <path d="M8.1 5.6 L9.6 7.2 L11.1 5.6 L9.6 4 Z"/>
      </svg>
    ),
  },
  {
    time: '16:15', label: 'Святковий стіл', side: 'left',
    icon: (
      <svg width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#E8CFA6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12.4" cy="12" r="4.4"/><circle cx="12.4" cy="12" r="2.1"/>
        <path d="M4.5 4 V8"/><path d="M6 4 V8"/><path d="M7.5 4 V8"/>
        <path d="M6 8 V20"/><path d="M4.5 8 H7.5"/>
        <path d="M19.5 4 C 18.2 4 18 7.4 18.9 8.5 L19.5 8.5 Z"/>
        <path d="M19.2 8.5 V20"/>
      </svg>
    ),
  },
  {
    time: '19:00', label: 'Весільний торт', side: 'right',
    icon: (
      <svg width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#E8CFA6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 19 H19"/><path d="M6.5 18.6 V13.5 H17.5 V18.6"/>
        <path d="M9 13.5 V9.6 H15 V13.5"/>
        <path d="M12 9.6 V7"/>
        <path d="M12 5.4 C12.7 6.1 12.7 7 12 7 C11.3 7 11.3 6.1 12 5.4 Z"/>
        <path d="M6.5 14.6 q2.75 1.5 5.5 0 q2.75 1.5 5.5 0"/>
      </svg>
    ),
  },
  {
    time: '22:00', label: 'Завершення вечора', side: 'left',
    icon: (
      <svg width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#E8CFA6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.5 14 A6.5 6.5 0 1 1 10.5 5.5 A5 5 0 0 0 18.5 14 Z"/>
        <path d="M17 4 l.45 1.3 1.3.45 -1.3.45 -.45 1.3 -.45 -1.3 -1.3 -.45 1.3 -.45 Z"/>
      </svg>
    ),
  },
]

const CONNECTORS = [
  'M34 0 C 34 46, 346 14, 346 62',
  'M346 0 C 346 46, 34 14, 34 62',
  'M34 0 C 34 46, 346 14, 346 62',
  'M346 0 C 346 46, 34 14, 34 62',
]

const iconStyle: React.CSSProperties = {
  flex: 'none', width: 66, height: 66, borderRadius: '50%',
  background: 'radial-gradient(circle at 38% 32%,rgba(120,84,50,.42),rgba(40,26,16,.55))',
  border: '1px solid rgba(199,168,99,.45)',
  boxShadow: '0 10px 24px rgba(0,0,0,.4)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: .8, ease: 'easeOut' } },
}

const connector = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: .6, delay: .1, ease: 'easeOut' } },
}

export default function TimelineSection() {
  return (
    <section style={{
      position: 'relative', zIndex: 1,
      padding: '74px 24px 86px',
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

      <motion.div
        initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true, margin:'-10% 0px' }}
        transition={{ duration:1, ease:'easeOut' }}
        style={{ textAlign:'center', marginBottom:46 }}
      >
        <p style={{ fontFamily:'var(--font-lora-var),serif', fontSize:12, letterSpacing:'.4em',
          textTransform:'uppercase', color:'#C79B6F', marginBottom:12 }}>
          Таймінг свята
        </p>
        <h2 style={{ fontFamily:'var(--font-cormorant-var),serif', fontWeight:600,
          fontSize:'clamp(34px,6vw,42px)', color:'#F4E6D2' }}>
          Програма дня
        </h2>
      </motion.div>

      <div style={{ width:380, maxWidth:'92vw', margin:'0 auto' }}>
        {EVENTS.map((ev, idx) => (
          <div key={ev.time}>
            <motion.div
              variants={item} initial="hidden" whileInView="visible"
              viewport={{ once:true, margin:'-10% 0px' }}
              style={{ display:'flex', justifyContent: ev.side === 'left' ? 'flex-start' : 'flex-end' }}
            >
              <div style={{
                display: 'flex',
                flexDirection: ev.side === 'right' ? 'row-reverse' : 'row',
                alignItems: 'center',
                gap: 16, width: 240,
              }}>
                <div style={iconStyle}>{ev.icon}</div>
                <div style={{ textAlign: ev.side === 'right' ? 'right' : 'left' }}>
                  <div style={{ fontFamily:'var(--font-cormorant-var),serif', fontWeight:600,
                    fontSize:31, color:'#F4E6D2', lineHeight:1 }}>
                    {ev.time}
                  </div>
                  <div style={{ fontFamily:'var(--font-lora-var),serif', fontSize:14,
                    color:'#C7AC86', marginTop:3 }}>
                    {ev.label}
                  </div>
                </div>
              </div>
            </motion.div>

            {idx < EVENTS.length - 1 && (
              <motion.div
                variants={connector} initial="hidden" whileInView="visible"
                viewport={{ once:true, margin:'-10% 0px' }}
                style={{ height: 62 }}
              >
                <svg viewBox="0 0 380 62" preserveAspectRatio="none"
                  style={{ width:'100%', height:'100%', overflow:'visible' }}>
                  <path d={CONNECTORS[idx]} fill="none"
                    stroke="rgba(199,168,99,.5)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </motion.div>
            )}
          </div>
        ))}

        {/* final tail arrow */}
        <motion.div
          variants={connector} initial="hidden" whileInView="visible"
          viewport={{ once:true, margin:'-10% 0px' }}
          style={{ height: 84 }}
        >
          <svg viewBox="0 0 380 84" preserveAspectRatio="none"
            style={{ width:'100%', height:'100%', overflow:'visible' }}>
            <path d="M34 0 C 34 44, 132 42, 162 66" fill="none"
              stroke="rgba(199,168,99,.6)" strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M162 66 Q 150 63 138 60" fill="none"
              stroke="rgba(199,168,99,.6)" strokeWidth="2.4" strokeLinecap="round"/>
            <path d="M162 66 Q 156 53 150 44" fill="none"
              stroke="rgba(199,168,99,.6)" strokeWidth="2.4" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
