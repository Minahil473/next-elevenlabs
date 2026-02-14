"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/components/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        // Not logged in → redirect to login
        router.push("/auth/login");
        return;
      }

      // Check if email is confirmed
      if (!data.user.email_confirmed_at) {
        alert("Please confirm your email before accessing the dashboard.");
        router.push("/auth/login");
        return;
      }

      setUser(data.user);
    };

    checkUser();
  }, [router]);

  if (!user) return null; // wait until user is verified

  return (
    <div className="flex min-h-screen">
      {/* SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 bg-white border-r border-gray-200 p-5 flex flex-col
          w-64
          transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          z-50
        `}
      >
        {/* Close button on mobile */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold mb-6">IIElevenLabs</div>
          <button
            className="md:hidden mb-6 self-end p-2 rounded-md hover:bg-gray-200"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        {/* Workspace */}
        <div className="mb-6">
          <div className="p-2 rounded-lg text-sm hover:bg-gray-100 font-medium">ElevenCreative</div>
        </div>

        {/* Main Nav */}
        <nav className="flex flex-col gap-2 text-sm">
          <Link
            href="/dashboard"
            className="px-3 py-2 rounded-lg hover:bg-gray-100 font-medium"
            onClick={() => setSidebarOpen(false)}
          >
            Home
          </Link>

          <Link
            href="#"
            className="px-3 py-2 rounded-lg hover:bg-gray-100"
            onClick={() => setSidebarOpen(false)}
          >
            Voices
          </Link>

          <div className="mt-4 text-xs text-gray-500 uppercase">Playground</div>

          <Link
            href="#"
            className="px-3 py-2 rounded-lg hover:bg-gray-100"
            onClick={() => setSidebarOpen(false)}
          >
            Text to Speech
          </Link>
          <Link
            href="#"
            className="px-3 py-2 rounded-lg hover:bg-gray-100"
            onClick={() => setSidebarOpen(false)}
          >
            Voice Changer
          </Link>
          <Link
            href="#"
            className="px-3 py-2 rounded-lg hover:bg-gray-100"
            onClick={() => setSidebarOpen(false)}
          >
            Voice Isolator
          </Link>
          <Link
            href="#"
            className="px-3 py-2 rounded-lg hover:bg-gray-100"
            onClick={() => setSidebarOpen(false)}
          >
            Music
          </Link>

          <div className="mt-4 text-xs text-gray-500 uppercase">Products</div>

          <Link
            href="#"
            className="px-3 py-2 rounded-lg hover:bg-gray-100"
            onClick={() => setSidebarOpen(false)}
          >
            Studio
          </Link>
          <Link
            href="#"
            className="px-3 py-2 rounded-lg hover:bg-gray-100"
            onClick={() => setSidebarOpen(false)}
          >
            Audiobooks
          </Link>
        </nav>
      </aside>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* HEADER */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Open sidebar"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

            <div className="font-medium">Home</div>
          </div>

          <div className="flex items-center gap-4">
            {/* Logout Button */}
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                router.push("/auth/login");
              }}
              className="text-sm px-3 py-1 border rounded-lg hover:bg-gray-100 transition"
            >
              Logout
            </button>

            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-gray-800 text-white flex items-center justify-center font-semibold">
              {user.email?.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-4 md:p-10 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
