"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/components/lib/supabase/client";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        router.push("/dashboard"); // now go to dashboard
      } else {
        router.push("/auth/login");
      }
    };
    handleCallback();
  }, [router]);

  return <div>Loading...</div>;
}
