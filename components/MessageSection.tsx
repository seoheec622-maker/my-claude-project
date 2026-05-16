import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { saveMessage } from '@/app/message/actions'

export default async function MessageSection() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let currentMessage: string | null = null
  if (user) {
    const { data } = await supabase
      .from('messages')
      .select('content')
      .eq('user_id', user.id)
      .single()
    currentMessage = data?.content ?? null
  }

  return (
    <section className="py-16 px-6 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-xl mx-auto">
          <p className="text-xs text-blue-600 uppercase tracking-widest font-medium mb-3">한 줄 남기기</p>

          {!user ? (
            <p className="text-gray-500 text-sm">
              <Link href="/auth/login" className="text-blue-600 hover:underline font-medium">로그인</Link>
              하면 한 줄을 남길 수 있어요.
            </p>
          ) : (
            <>
              {currentMessage && (
                <p className="text-gray-700 text-sm mb-4 border-l-2 border-blue-400 pl-3 italic">
                  {currentMessage}
                </p>
              )}
              <form action={saveMessage} className="flex gap-2">
                <input
                  name="content"
                  type="text"
                  defaultValue={currentMessage ?? ''}
                  placeholder="_____"
                  maxLength={200}
                  required
                  className="flex-1 border border-gray-300 rounded px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded transition-colors"
                >
                  남기기
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
