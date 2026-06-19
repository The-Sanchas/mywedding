import { NextRequest, NextResponse } from 'next/server'

const BOT_TOKEN = process.env.TokenBot!
const CHAT_ID   = process.env.chatId!
const SHEET_URL = process.env.UrlAppsScript!

export async function POST(req: NextRequest) {
  const { name, attend, drinks } = await req.json()

  const attendText = attend === 'yes' ? '✅ Так, буде!' : '❌ На жаль, не зможе'
  const drinksText = drinks?.length ? drinks.join(', ') : '—'

  const message = [
    '🎊 Нова відповідь на запрошення!',
    '',
    `👤 ${name}`,
    `${attendText}`,
    `🥂 ${drinksText}`,
  ].join('\n')

  await Promise.all([
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
    }),
    fetch(SHEET_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, attend, drinks }),
    }),
  ])

  return NextResponse.json({ ok: true })
}
