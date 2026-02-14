"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase/client";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Get user session
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <header className="border-b border-gray-200">
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between">

          {/* LOGO */}
          <div className="font-bold text-base md:text-lg">
            <Link href="/">IIElevenLabs</Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-4 text-sm p-2 font-medium text-gray-700">
            <Link href="#" className="px-2 py-1 rounded-xl hover:bg-[#F7F6F3] transition-colors">Creative Platform</Link>
            <Link href="#" className="px-2 py-1 rounded-xl hover:bg-[#F7F6F3] transition-colors">Agents Platform</Link>
            <Link href="#" className="px-2 py-1 rounded-xl hover:bg-[#F7F6F3] transition-colors">Developers</Link>
            <Link href="#" className="px-2 py-1 rounded-xl hover:bg-[#F7F6F3] transition-colors">Resources</Link>
            <Link href="/enterprise" className="px-2 py-1 rounded-xl hover:bg-[#F7F6F3] transition-colors">Enterprise</Link>
            <Link href="/pricing" className="px-2 py-1 rounded-xl hover:bg-[#F7F6F3] transition-colors">Pricing</Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 md:gap-4">

            {/* Show when NOT logged in */}
            {!user && !open && (
              <Link
                href="/auth/login"
                className="hidden md:block border border-gray-200 shadow-sm px-4 py-2 rounded-full text-sm font-semibold"
              >
                Log in
              </Link>
            )}

            {!user && (
              <Link
                href="/auth/signup"
                className="bg-black text-white rounded-full font-semibold
                text-xs px-3 py-1.5
                md:text-sm md:px-4 md:py-2"
              >
                Sign up
              </Link>
            )}

            {/* Show when logged in */}
            {user && (
              <button
                onClick={handleLogout}
                className="bg-black text-white rounded-full font-semibold
                text-xs px-3 py-1.5
                md:text-sm md:px-4 md:py-2"
              >
                Logout
              </button>
            )}

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-md border border-gray-200"
              aria-label="Open Menu"
            >
              <div className="space-y-1">
                <span className="block w-4 h-0.5 bg-black"></span>
                <span className="block w-4 h-0.5 bg-black"></span>
                <span className="block w-4 h-0.5 bg-black"></span>
              </div>
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-5 space-y-6 text-sm font-medium text-gray-700">

              <div className="flex items-center justify-between">
                <span className="text-black">
                  Creative Platform
                </span>

                <button
                  onClick={() => setOpen(false)}
                  className="text-xl font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                <Link href="#" onClick={() => setOpen(false)}>Agents Platform</Link>
                <Link href="#" onClick={() => setOpen(false)}>Developers</Link>
                <Link href="#" onClick={() => setOpen(false)}>Resources</Link>
                <Link href="#" onClick={() => setOpen(false)}>Enterprise</Link>
                <Link href="#" onClick={() => setOpen(false)}>Pricing</Link>
              </div>

              <div className="flex flex-1 gap-5 justify-between">

                {!user ? (
                  <>
                    <Link
                      href="/auth/login"
                      className="border border-gray-200 shadow-sm px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      Log in
                    </Link>

                    <Link
                      href="/auth/signup"
                      className="bg-black text-white rounded-full font-semibold text-sm px-4 py-2"
                    >
                      Sign up
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="bg-black text-white rounded-full font-semibold text-sm px-4 py-2"
                  >
                    Logout
                  </button>
                )}

              </div>

            </div>
          </div>
        )}

      </nav>
    </header>
  );
}
