"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/components/lib/supabase/client";

export default function DashboardHome() {
    const [user, setUser] = useState<any>(null);

    // Get logged-in user
    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data.user);
        };
        getUser();
    }, []);

    if (!user) return null; // or a loader while fetching

    // Extract first name from email (letters only, remove numbers)
    const rawName = user?.email?.split("@")[0] || "";
    const firstNameMatch = rawName.match(/[a-zA-Z]+/);
    const firstName = firstNameMatch
        ? firstNameMatch[0].charAt(0).toUpperCase() + firstNameMatch[0].slice(1)
        : "User";

    const cards = [
        { title: "Instant Speech", image: "/images/dashboard/speech.svg" },
        { title: "Audiobook", image: "/images/dashboard/audiobook.svg" },
        { title: "Image & Video", image: "/images/dashboard/imageVideo.svg" },
        { title: "ElevenLabs Agents", image: "/images/dashboard/agents.svg" },
        { title: "Music", image: "/images/dashboard/music.svg" },
        { title: "Dubbed Video", image: "/images/dashboard/dubbedvideo.svg" },
    ];

    return (
        <div className="p-10">
            {/* Greeting */}
            <h2 className="text-sm text-gray-500 mb-2">{firstName}'s Workspace</h2>
            <h1 className="text-3xl font-bold mb-10">Good afternoon, {firstName}</h1>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-14 ">
                {cards.map((item) => (
                    <div
                        key={item.title}
                        className="group bg-[#F2F2F2] p-6 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    >
                        <div className="relative h-24 w-full mb-4 overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                            />
                        </div>
                        <p className="font-medium text-sm text-center">{item.title}</p>
                    </div>
                ))}
            </div>

            {/* Lower Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Latest Library */}
                <div>
                    <h3 className="font-semibold mb-6">Latest from the library</h3>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-xl border">
                            Katherine - Calm Luxury Narrator
                        </div>
                        <div className="bg-white p-4 rounded-xl border">
                            Ivy - Sophisticated and Sassy
                        </div>
                        <div className="bg-white p-4 rounded-xl border">
                            Alyx - Vibrant, British and Expressive
                        </div>
                    </div>
                </div>

                {/* Create Voice */}
<div>
  <h3 className="font-semibold mb-6">Create or clone a voice</h3>

  <div className="flex flex-col gap-6">
    {[
      {
        title: "Voice Design",
        description: "Design an entirely new voice from a text prompt",
        image: "/images/dashboard/audiobook.svg",
      },
      {
        title: "Clone your Voice",
        description: "Clone an existing voice",
        image: "/images/dashboard/dubbedvideo.svg",
      },
    ].map((card) => (
      <div
        key={card.title}
        className="flex items-center gap-4 cursor-pointer rounded-2xl p-4  hover:shadow-lg transition-shadow duration-300"
      >
        {/* Image container */}
        <div className="flex items-center justify-center bg-[#F2F2F2] rounded-xl w-20 h-20 shrink-0">
          <Image
            src={card.image}
            alt={card.title}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col">
          <p className="font-semibold text-base">{card.title}</p>
          <p className="text-gray-500 text-sm">{card.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>




            </div>
        </div>

    );
}
