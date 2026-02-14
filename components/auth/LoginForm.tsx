"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { supabase } from "../lib/supabase/client";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    // Check if email is confirmed
    if (!data.user?.email_confirmed_at) {
      alert("Please confirm your email before logging in.");
      return;
    }

    // Login successful → redirect
    router.push("/dashboard");
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}` },
    });

    if (error) alert(error.message);
  };

  return (
    <form onSubmit={handleLogin} className="w-full max-w-md mx-auto px-6 py-10">
      <h1 className="text-center text-[#0F0F10] text-2xl font-semibold mb-6">
        Welcome back
      </h1>

      <div className="space-y-3">
        <button
          type="button"
          onClick={signInWithGoogle}
          className="relative w-full border border-[#A6A6AE] cursor-pointer rounded-xl py-2.5 text-sm font-medium hover:bg-gray-50 flex items-center justify-center"
        >
          <Image src="/images/google.png" alt="Google" width={20} height={20} className="absolute left-4" />
          Sign in with Google
        </button>

        <button
          type="button"
          className="relative w-full border border-[#A6A6AE] cursor-pointer rounded-xl py-2.5 text-sm font-medium hover:bg-gray-50 flex items-center justify-center"
        >
          <Image src="/images/apple.png" alt="Apple" width={20} height={20} className="absolute left-4" />
          Sign in with Apple
        </button>

        <button
          type="button"
          className="w-full border border-[#A6A6AE] cursor-pointer rounded-xl py-2.5 text-sm font-medium hover:bg-gray-50"
        >
          Sign in with SSO
        </button>
      </div>

      <div className="my-6 border-t border-gray-200" />

      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <input
          name="email"
          type="email"
          autoComplete="off"
          required
          className="w-full bg-white border border-black rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-black"
        />
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Password</label>
          <Link href="#" className="text-sm text-gray-500 hover:underline">
            Forgot your password?
          </Link>
        </div>

        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            required
            className="w-full bg-white border border-black rounded-xl px-4 py-2.5 text-sm pr-10 focus:outline-none focus:ring-1 focus:ring-black"
          />
          {showPassword ? (
            <EyeOff
              className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <Eye
              className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-6 bg-[#A6A6AE] text-white py-2.5 rounded-xl text-sm hover:bg-[#323235] cursor-pointer font-medium disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>

      <p className="text-center text-sm text-gray-600 mt-6">
        Don&apos;t have an account?{" "}
        <Link href="/auth/signup" className="text-black font-medium underline">
          Sign up
        </Link>
      </p>
    </form>
  );
}
