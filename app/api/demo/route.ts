import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const ADMIN_EMAIL = 'seoheec622@gmail.com'

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { email } = await request.json()

  if (!email?.trim()) {
    return NextResponse.json({ error: '이메일을 입력해주세요.' }, { status: 400 })
  }

  try {
    // 운영자에게 신청 알림 발송
    await resend.emails.send({
      from: 'LegalAI <onboarding@resend.dev>',
      to: ADMIN_EMAIL,
      subject: `새 데모 신청 — ${email}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
          <h2 style="color:#0D1B2A">새 무료 데모 신청이 접수됐습니다</h2>
          <p style="color:#444">신청자 이메일: <strong>${email}</strong></p>
          <p style="color:#444">신청 시각: ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</p>
          <hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>
          <p style="color:#999;font-size:12px">LegalAI 자동 알림</p>
        </div>
      `,
    })

    // 신청자에게 확인 메일 발송
    await resend.emails.send({
      from: 'LegalAI <onboarding@resend.dev>',
      to: email,
      subject: 'LegalAI 무료 데모 신청이 완료됐습니다',
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
          <h2 style="color:#0D1B2A">신청해 주셔서 감사합니다!</h2>
          <p style="color:#444">안녕하세요,</p>
          <p style="color:#444">
            LegalAI 무료 데모 신청이 정상적으로 접수됐습니다.<br/>
            담당자가 <strong>24시간 이내</strong>에 연락드리겠습니다.
          </p>
          <div style="background:#f0f4ff;border-radius:8px;padding:16px 20px;margin:24px 0">
            <p style="margin:0;color:#2563eb;font-size:14px">
              ✔ 14일 무료 체험 &nbsp;·&nbsp; 신용카드 불필요 &nbsp;·&nbsp; 언제든 취소 가능
            </p>
          </div>
          <hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>
          <p style="color:#999;font-size:12px">본 메일은 자동 발송됩니다. 문의: ${ADMIN_EMAIL}</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    const msg = e instanceof Error ? e.message : '이메일 발송 실패'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
