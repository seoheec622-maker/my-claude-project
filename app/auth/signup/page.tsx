import { Scale } from 'lucide-react'
import Link from 'next/link'
import { signUp } from '../actions'

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams

  return (
    <div className="min-h-screen bg-[#0D1B2A] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Scale className="w-6 h-6 text-blue-400" />
          <span className="text-xl font-bold text-white tracking-wide">LegalAI</span>
        </div>

        <div className="bg-[#1a2d42] rounded-xl p-8 border border-white/10">
          <h1 className="text-2xl font-bold text-white mb-2">회원가입</h1>
          <p className="text-gray-400 text-sm mb-6">이메일과 비밀번호로 계정을 만드세요.</p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3 mb-6">
              {error}
            </div>
          )}

          <form action={signUp} className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300 mb-1.5">
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-[#0D1B2A] border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-300 mb-1.5">
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="8자 이상 입력하세요"
                minLength={6}
                className="w-full bg-[#0D1B2A] border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
            >
              회원가입
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            이미 계정이 있으신가요?{' '}
            <Link href="/auth/login" className="text-blue-400 hover:text-blue-300 transition-colors">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
