import { NextRequest, NextResponse } from 'next/server'

const OPENROUTER = 'https://openrouter.ai/api/v1/chat/completions'

async function callOpenRouter(model: string, messages: { role: string; content: string }[]) {
  const res = await fetch(OPENROUTER, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ model, messages }),
  })
  if (!res.ok) throw new Error(`OpenRouter ${model} 실패: ${res.status}`)
  const data = await res.json()
  return data.choices?.[0]?.message?.content ?? ''
}

export async function POST(request: NextRequest) {
  const { message } = await request.json()

  if (!message?.trim()) {
    return NextResponse.json({ error: '메시지를 입력해주세요.' }, { status: 400 })
  }

  try {
    // Step 1: Perplexity로 웹 검색
    const searchResult = await callOpenRouter('perplexity/sonar-pro', [
      { role: 'user', content: message },
    ])

    // Step 2: Claude Opus 4.7로 최종 답변 생성
    const content = await callOpenRouter('anthropic/claude-opus-4-7', [
      {
        role: 'user',
        content: `사용자 질문: ${message}\n\n웹 검색 결과:\n${searchResult}\n\n위 검색 결과를 바탕으로 사용자 질문에 정확하고 명확하게 답변해주세요.`,
      },
    ])

    return NextResponse.json({ content })
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'AI 응답 실패'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
