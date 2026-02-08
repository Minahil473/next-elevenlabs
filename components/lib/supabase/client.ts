"use client";

import { createBrowserClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "./types"; // optional, if you have a Database type

export const supabase = createBrowserClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
