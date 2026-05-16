import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { message } = await request.json()

  if (!message?.trim()) {
    return NextResponse.json({ error: '메시지를 입력해주세요.' }, { status: 400 })
  }

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'anthropic/claude-sonnet-4-5',
      messages: [{ role: 'user', content: message }],
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'AI 응답 실패. 잠시 후 다시 시도해주세요.' }, { status: 500 })
  }

  const data = await res.json()
  const content = data.choices?.[0]?.message?.content ?? ''

  return NextResponse.json({ content })
}
