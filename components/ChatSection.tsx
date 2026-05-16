"use client"

import { useState, useRef } from "react"

export default function ChatSection() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim() || loading) return

    setLoading(true)
    setError("")
    setResult("")

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      })
      const data = await res.json()
      if (data.error) {
        setError(data.error)
      } else {
        setResult(data.content)
      }
    } catch {
      setError("네트워크 오류가 발생했습니다.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 px-6 bg-white border-t border-gray-200">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs text-blue-600 uppercase tracking-widest font-medium mb-2">AI 질문하기</p>
        <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6">법무 궁금증을 바로 물어보세요</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSubmit(e as unknown as React.FormEvent)
              }
            }}
            placeholder="질문을 입력하세요..."
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="self-end bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
          >
            {loading ? "답변 생성 중…" : "질문하기"}
          </button>
        </form>

        {error && (
          <div className="mt-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-6 bg-[#F8F9FA] border border-gray-200 rounded-lg px-6 py-5">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">AI 답변</p>
            <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">{result}</p>
          </div>
        )}
      </div>
    </section>
  )
}
