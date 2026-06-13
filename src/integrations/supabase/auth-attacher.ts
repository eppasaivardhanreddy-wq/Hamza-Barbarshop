import { createMiddleware } from '@tanstack/react-start'

// Supabase auth is disabled — this middleware is a no-op passthrough.
export const attachSupabaseAuth = createMiddleware({ type: 'function' }).client(
  async ({ next }) => next({}),
)
