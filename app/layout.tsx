import "./globals.css";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";


export const metadata: Metadata = {
  title: "ElevenLabs",
  description: "Engineering digital experiences that feel effortless.",
    icons: {
    icon: "/favicon.ico", // or "/favicon.ico"
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
        </body>
    </html>
  );
}
