"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "../lib/supabase/client";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // Email/password signup
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

   const { data, error } = await supabase.auth.signUp({
  email,
  password,
  options: {
    emailRedirectTo: "https://your-project.vercel.app",
  },
});



    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    // Signup successful → redirect
    router.push("/dashboard");
  };

  // Google OAuth signup
  const signUpWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}`,
      },
    });

    if (error) alert(error.message);
  };

  return (
    <form
      onSubmit={handleSignup}
      className="w-full max-w-md mx-auto px-6 py-10"
    >
      {/* Heading */}
      <h1 className="text-center text-2xl font-semibold mb-8">
        Create an account
      </h1>

      {/* OAuth buttons */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={signUpWithGoogle}
          className="relative w-full border border-[#A6A6AE] rounded-xl py-2.5 text-sm font-medium hover:bg-gray-50 flex items-center cursor-pointer justify-center"
        >
          <Image
            src="/images/google.png"
            alt="Google"
            width={20}
            height={20}
            className="absolute left-4"
          />
          Sign in with Google
        </button>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-200" />

      {/* Email */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Password */}
      <div className="mt-6 space-y-2">
        <label className="text-sm font-medium cursor-pointer">Password</label>
        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            required
            className="w-full bg-white border border-[#A6A6AE] rounded-xl px-4 py-2.5 text-sm pr-10
focus:outline-none focus:ring-1 focus:ring-black
autofill:bg-white autofill:text-black"
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

      {/* Sign up button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full mt-6 bg-[#A6A6AE] text-white py-3 cursor-pointer rounded-xl hover:bg-[#323235] text-sm font-medium disabled:opacity-50"
      >
        {loading ? "Signing up..." : "Sign up"}
      </button>

      {/* Footer */}
      <p className="text-center text-sm text-[#323235] mt-6">
        Already registered?{" "}
        <Link href="/auth/login" className="text-[#323235] cursor-pointer font-medium underline">
          Sign in
        </Link>
      </p>

      {/* Terms */}
      <p className="text-xs text-gray-500 mt-6">
        By creating an account, you agree to our{" "}
        <span className="underline cursor-pointer">Terms</span> and{" "}
        <span className="underline cursor-pointer">Privacy Policy</span>.
      </p>
    </form>
  );
}
