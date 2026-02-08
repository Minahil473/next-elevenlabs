"use client";

import { useRef } from "react";
import Image from "next/image";

export default function CreaterSection() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!sliderRef.current) return;

        const scrollAmount = 320;
        sliderRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <section className="w-full">
            {/* 2 cards */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-stretch px-4 sm:px-6 lg:px-8">

                {/* LEFT CARD */}
                <div className="bg-[#F2F2F2] rounded-2xl p-5 sm:p-6 lg:p-8 flex-1 shadow-md flex flex-col justify-between w-full">
                    {/* Top visual */}
                    <div className="relative mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-lg">
                        <div className="absolute top-3 left-3 w-full h-full rounded-xl bg-purple-700 opacity-80 blur-xl z-10"></div>
                        <div className="absolute top-6 left-6 w-full h-full rounded-xl bg-green-900 opacity-80 blur-xl z-20"></div>
                        <div className="relative z-30 bg-gradient-to-br from-purple-700 via-pink-700 to-red-700 text-white p-4 sm:p-5 lg:p-6 rounded-xl max-w-full sm:max-w-sm mx-auto">
                            <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
                                We're off under the lights here for this semi-final clash, the stadium buzzing with anticipation.
                                ElevenLabs United in their iconic black and white shirts.
                                <span className="bg-white/30 rounded px-1 mx-0.5">excited</span>
                                Driving down the wing,
                                <span className="bg-white/30 rounded px-1 mx-0.5">shouting</span>
                                skips past one, skips past two!
                            </p>
                            <button className="mt-4 border border-white rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold hover:bg-white hover:text-purple-700 transition">
                                PLAY
                            </button>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="text-center px-0 sm:px-0 pb-4 sm:pb-6">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 font-semibold">
                            The most expressive text to speech model
                        </h2>
                        <p className="text-gray-600 mb-5 sm:mb-6 max-w-md mx-auto text-xs sm:text-sm lg:text-base">
                            Our AI voice generator delivers emotional depth and rich delivery, setting a new standard in expressive speech.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-center w-full">
                            <button className="bg-black text-white rounded-full font-semibold px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-base whitespace-nowrap">
                                DISCOVER ELEVEN V3
                            </button>
                            <button className="bg-white rounded-full font-semibold px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-base hover:bg-gray-100 transition whitespace-nowrap">
                                SIGN UP
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT CARD */}
                <div className="bg-[#F2F2F2] rounded-2xl p-5 sm:p-6 lg:p-8 flex-1 shadow-md flex flex-col justify-between w-full bg-gradient-to-b from-blue-200 to-[#F2F2F2]">

                    {/* Chat mock */}
                    <div className="relative mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-lg max-w-full sm:max-w-sm mx-auto">
                        <div className="p-4 sm:p-5 rounded-xl bg-white/70 backdrop-blur-md shadow-inner">
                            <div className="text-gray-600 rounded-lg p-2.5 bg-gray-200 mb-4 text-xs sm:text-sm max-w-xs mx-auto">
                                Hey, my computer is frozen
                            </div>
                            <div className="flex items-center bg-white rounded-full shadow px-3 py-2 max-w-xs mx-auto">
                                <input type="text" placeholder="Enter your message" className="flex-grow outline-none text-gray-700 placeholder-gray-400 text-xs sm:text-sm" />
                                <button className="ml-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition text-xs">↑</button>
                                <button className="ml-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition text-xs">🎤</button>
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="text-center px-0 sm:px-0 pb-4 sm:pb-6">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 font-semibold">Agents Platform</h2>
                        <p className="text-gray-600 mb-5 sm:mb-6 max-w-md mx-auto text-xs sm:text-sm lg:text-base">
                            Speak to your customers with natural, human-sounding AI that feels truly personal.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-center w-full">
                            <button className="bg-black text-white rounded-full font-semibold px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-base whitespace-nowrap">
                                DISCOVER AGENTS PLATFORM
                            </button>
                            <button className="bg-white rounded-full font-semibold px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-base hover:bg-gray-100 transition whitespace-nowrap">
                                CONTACT SALES
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Section */}
            <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-0">
                    <p className="text-gray-500 uppercase my-6 tracking-wide text-sm sm:text-base">
                        For <span className="font-bold text-black outline-dotted">CREATORS, MEDIA AND ENTERTAINMENT</span>
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-lightest leading-snug sm:leading-snug md:leading-tight pb-10 sm:pb-14">
                        Generate high-quality audio with our AI voice <br className="hidden sm:inline" /> generator for audiobooks, videos, and podcasts
                    </h1>

                    {/* Container: two columns */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                        {/* Left column: text */}
                        <div className="flex-1 space-y-6 sm:space-y-8">
                            {/* Feature list */}
                            <div className="space-y-4 sm:space-y-6">
                                {[
                                    { title: "AUDIOBOOKS", desc: "Upload your ePub or PDF, pick your characters, direct the delivery, and publish high-quality multi-voice audiobooks." },
                                    { title: "VIDEO VOICEOVERS", desc: "Select the ideal voice or clone your own. Generate ads, shorts, or films with our AI voice generator." },
                                    { title: "DUBBED VIDEOS", desc: "Translate into 30+ languages while preserving the speaker’s voice. Dub with one click or use Dubbing Studio for full control." },
                                    { title: "PODCASTS", desc: "Use Voice Isolator to clean up any recording, or Text to Speech to generate short segments or full podcasts with multiple speakers." },
                                    { title: "MUSIC", desc: "Generate studio-quality tracks instantly, any genre, any style, vocals or instrumental, in minutes using simple text prompts." },
                                ].map((item, index) => (
                                    <div key={index}>
                                        <h2 className="text-base sm:text-lg md:text-lg text-[#a3a3a3] font-semibold hover:text-black mb-1">{item.title}</h2>
                                        <p className="text-sm sm:text-base md:text-base text-[#a3a3a3] hover:text-black">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right column: video */}
                        <div className="flex-1 flex justify-center items-center bg-[#F2F2F2] p-2 sm:p-4 md:p-6 rounded-xl border border-[#F2F2F2]">
                            <video
                                src="/images/video.mp4"
                                className="rounded-xl shadow-lg w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl h-auto"
                                controls
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* Cards with people */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <h1 className="text-4xl text-gray-900 leading-snug pb-14">
    Used by millions of the best creators
  </h1>

  {/* Slider */}
  <div
    ref={sliderRef}
    className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
  >
    {/* CARD 1 */}
    <div className="min-w-[240px] sm:min-w-[260px] bg-white rounded-2xl p-6 flex flex-col hover:bg-[#F2F2F2] items-center">
      <p className="mb-4 text-center">
        Create content faster with <span className="font-semibold">Voice Cloning</span>
      </p>
      <Image src="/images/michael.webp" alt="Michael" width={250} height={60} className="mb-4" />
      <div className="flex gap-3 mt-auto items-center">
        <Image src="/images/michael.webp" alt="Michael" width={24} height={24} className="rounded-full" />
        <span className="font-medium">Michael Caine</span>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="min-w-[240px] sm:min-w-[260px] bg-white rounded-2xl p-6 flex flex-col hover:bg-[#F2F2F2] items-center">
      <p className="mb-4 text-center">
        Voice over your videos with <span className="font-semibold">Text to Speech</span>
      </p>
      <Image src="/images/huberman.webp" alt="Huberman" width={250} height={60} className="mb-4" />
      <div className="flex gap-3 mt-auto items-center">
        <Image src="/images/huberman.webp" alt="Huberman" width={24} height={24} className="rounded-full" />
        <span className="font-medium">Andrew Huberman</span>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="min-w-[240px] sm:min-w-[260px] bg-white rounded-2xl p-6 flex flex-col hover:bg-[#F2F2F2] items-center">
      <p className="mb-4 text-center">
        Create AI audiobooks with <span className="font-semibold">Studio</span>
      </p>
      <Image src="/images/ariann.webp" alt="Arianna" width={250} height={60} className="mb-4" />
      <div className="flex gap-3 mt-auto items-center">
        <Image src="/images/ariann.webp" alt="Arianna" width={24} height={24} className="rounded-full" />
        <span className="font-medium">Arianna Huffington</span>
      </div>
    </div>

    {/* CARD 4 */}
    <div className="min-w-[240px] sm:min-w-[260px] bg-white rounded-2xl p-6 flex flex-col hover:bg-[#F2F2F2] items-center">
      <p className="mb-4 text-center">
        Translate your content with <span className="font-semibold">Dubbing</span>
      </p>
      <Image src="/images/mcco.webp" alt="Matthew" width={250} height={60} className="mb-4" />
      <div className="flex gap-3 mt-auto items-center">
        <Image src="/images/mcco.webp" alt="Matthew" width={24} height={24} className="rounded-full" />
        <span className="font-medium">Matthew McConaughey</span>
      </div>
    </div>
  </div>

  {/* Mobile: Get Started + arrows row */}
  <div className="flex justify-between items-center mt-4 md:hidden">
    <button className="flex-1 text-sm px-4 py-2 font-bold rounded-full bg-[#F2F2F2] hover:bg-[#cfcfcf] transition">
      Get Started
    </button>

    <div className="flex gap-6 ml-4 bg-[#f5f1eb] rounded-full">
      <button
        onClick={() => scroll("left")}
        className="text-black flex px-4 py-2 text-sm "
      >
        &lt;
      </button>
      <button
        onClick={() => scroll("right")}
        className="text-black flex px-4 py-2  text-sm "
      >
        &gt;
      </button>
    </div>
  </div>

  {/* Desktop: Get Started button below slider */}
  <div className="hidden md:flex justify-start mt-6">
    <button className="flex items-center justify-center gap-2 px-6 py-2 font-bold rounded-full bg-[#F2F2F2] hover:bg-[#cfcfcf] transition">
      Get Started
    </button>
  </div>
</div>


        </section>

    );
}
