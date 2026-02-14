"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/components/lib/supabase/client";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) router.push("/dashboard");
      else router.push("/auth/login");
    };

    checkSession();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen text-gray-700">
      <p>Verifying your account...</p>
    </div>
  );
}
