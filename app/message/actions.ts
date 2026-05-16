'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

export async function saveMessage(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return

  const content = (formData.get('content') as string).trim()
  if (!content) return

  await supabase.from('messages').upsert(
    { user_id: user.id, content, updated_at: new Date().toISOString() },
    { onConflict: 'user_id' }
  )

  revalidatePath('/')
}
