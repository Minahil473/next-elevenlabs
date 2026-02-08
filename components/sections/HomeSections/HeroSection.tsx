
"use client";

import { useState } from "react";

export default function HeroSection() {
    const [langOpen, setLangOpen] = useState(false);
    const [voiceOpen, setVoiceOpen] = useState(false);
    const [language, setLanguage] = useState("English");
    const [voice, setVoice] = useState("Jessica");

    return (

        <section className="max-w-7xl mx-auto mt-20 md:mt-12 sm:mt-12 lg:mt-12 text-center">
            {/* ================= TOP SECTION ================= */}
            <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-8 sm:mb-10  mx-auto sm:px-6 px-4">

                {/* Container: stacked on small & medium, row on large */}
                <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8">

                    {/* LEFT SIDE: h1 */}
                    <div className="lg:flex-1 text-left max-w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl max-w-xl mx-0">
                            Bringing <br className="hidden sm:block" /> technology to life.
                        </h1>
                    </div>

                    {/* RIGHT SIDE: paragraph + buttons */}
                    <div className="lg:flex-1 max-w-2xl mx-0 text-left">

                        <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
                            Powering the best enterprises, creators, and developers. From the Agents
                            Platform for customer experience, the Creative Platform for content
                            creation, to the leading AI voice generator.
                        </p>

                        <div className="flex justify-center lg:justify-start items-center gap-3 sm:gap-4 w-full">
                            <button className="bg-black text-white px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-xs sm:text-sm md:text-base rounded-full font-semibold whitespace-nowrap">
                                SIGN UP
                            </button>

                            <button className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-xs sm:text-sm md:text-base font-semibold rounded-full border border-[#F2F2F2] shadow-md hover:bg-[#cfcfcf] transition whitespace-nowrap">
                                CONTACT SALES
                            </button>
                        </div>

                    </div>

                </div>
            </div>




            {/* ================= CONTENT BOX ================= */}
            <div className=" mx-auto px-4 sm:px-6 p-4 sm:p-6 bg-[#F7F6F3] rounded-2xl sm:rounded-3xl grid grid-cols-1 gap-8 sm:gap-10">

                {/* Top Tabs */}
                <div className="inline-flex flex-wrap gap-2 justify-center sm:justify-start">
                    <button className="px-5 sm:px-6 py-2 rounded-full font-semibold bg-white shadow-md text-sm sm:text-base">
                        Creative
                    </button>
                    <button className="px-5 sm:px-6 py-2 rounded-full font-semibold text-gray-600 text-sm sm:text-base">
                        Agents
                    </button>
                </div>

                {/* Content Box */}
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md mx-auto w-full max-w-full sm:max-w-2xl">

                    <p className="mb-4 text-black text-sm sm:text-base leading-relaxed text-left sm:text-left">
                        In the ancient land of Eldoria, where skies shimmered and forests,<br className="hidden sm:block" />
                        whispered secrets to the wind, lived a dragon named Zephyros.<br />
                        <span className="italic text-gray-500">[sarcastically]</span> Not the “burn it all down” kind...
                        <span className="italic text-gray-400">[giggles]</span> but he was<br className="hidden sm:block" />
                        gentle, wise, with eyes like old stars.
                        <span className="italic text-gray-500">[whispers]</span> Even the birds fell silent<br className="hidden sm:block" />
                        when he passed.
                    </p>

                    {/* Bottom row */}
                    <div className="flex flex-col sm:flex-row items-center  sm:justify-between gap-4 sm:gap-0 mt-6 max-w-sm sm:max-w-full mx-auto sm:mx-0">

                        {/* Language + Voice */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-sm sm:text-base items-center sm:items-start">
                            {/* Language */}
                            <div className="relative w-full sm:w-auto flex justify-center sm:block">
                                <button
                                    onClick={() => {
                                        setLangOpen(!langOpen);
                                        setVoiceOpen(false);
                                    }}
                                    className="flex items-center cursor-pointer gap-1 px-3 py-2 sm:px-1 sm:py-1 rounded-md hover:bg-gray-100 transition"
                                >
                                    {language}
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {langOpen && (
                                    <div className="absolute z-10 mt-2 min-w-[120px] bg-white border rounded-md shadow-sm">
                                        {["English", "Spanish", "French"].map((l) => (
                                            <div
                                                key={l}
                                                onClick={() => {
                                                    setLanguage(l);
                                                    setLangOpen(false);
                                                }}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center sm:text-left"
                                            >
                                                {l}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Voice */}
                            <div className="relative  w-full sm:w-auto flex justify-center sm:block">
                                <button
                                    onClick={() => {
                                        setVoiceOpen(!voiceOpen);
                                        setLangOpen(false);
                                    }}
                                    className="flex items-center cursor-pointer gap-1 px-3 py-2 sm:px-1 sm:py-1 rounded-md hover:bg-gray-100 transition"
                                >
                                    {voice}
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {voiceOpen && (
                                    <div className="absolute z-10 mt-2 min-w-[120px] bg-white border rounded-md shadow-sm">
                                        {["Jessica", "Alex", "Emma"].map((v) => (
                                            <div
                                                key={v}
                                                onClick={() => {
                                                    setVoice(v);
                                                    setVoiceOpen(false);
                                                }}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center sm:text-left"
                                            >
                                                {v}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>


                        {/* Play button */}
                        <button className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold hover:bg-gray-800 transition mt-3 sm:mt-0 self-center sm:self-auto">
                            ▶
                        </button>
                    </div>
                </div>

                {/* Bottom Tabs */}
                <div className="flex flex-wrap justify-center sm:justify-center gap-4 sm:gap-6 text-gray-700 font-medium text-sm sm:text-base">
                    <button className="pb-2 border border-[#F2F2F2] hover:text-black cursor-pointer">Speech</button>
                    <button className="pb-2 border border-[#F2F2F2] hover:text-black cursor-pointer">Transcription</button>
                    <button className="pb-2 border border-[#F2F2F2] hover:text-black cursor-pointer">Voice Cloning</button>
                    <button className="pb-2 border border-[#F2F2F2] hover:text-black cursor-pointer">Music</button>
                </div>

            </div>

        </section>
    );
}
