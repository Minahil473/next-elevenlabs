"use client";

import { useRef } from "react";

import Image from "next/image";
import { PauseIcon } from "@heroicons/react/24/solid";

const InvesterSection = () => {
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
        <section className="py-2xl overflow-x-hidden min-h-screen">
            {/* investers */}
            <div className="max-w-7xl mx-auto ">
                <p className="text-base sm:text-sm text-[#a3a3a3] mb-4">
                    For <span className="text-black sm:text-sm outline-dotted">INVESTORS</span>
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 px- gap-6 mt-8 mb-12">
                    {[
                        "/images/investers/scaled.svg",
                        "/images/investers/iconic.svg",
                        "/images/investers/sequeoia.svg",
                        "/images/investers/nea.webp",
                        "/images/investers/T.svg",
                        "/images/investers/saleforce.svg",
                        "/images/investers/docomo.svg",
                        "/images/investers/wil.svg",
                    ].map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center bg-white py-6"
                        >
                            <Image
                                src={logo}
                                alt="partner logo"
                                width={180}
                                height={60}
                                className=" w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* ================= TWO CARDS ================= */}
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-6 items-stretch">

                {/* LEFT CARD */}
                <div className="bg-[#F2F2F2] rounded-2xl shadow-md flex-1 flex flex-col justify-between overflow-hidden p-6 sm:p-8 md:p-12">

                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
                            AI safety at ElevenLabs
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700">
                            ElevenLabs is the leader in responsible use of AI audio through
                            Moderation, Accountability and Provenance.
                        </p>
                    </div>

                    <div className="relative mt-6">
                        <Image
                            src="/images/investers/left.webp"
                            alt="AI Safety"
                            width={500}
                            height={350}
                            className="w-full h-[180px] sm:h-[220px] md:h-auto object-cover rounded-xl"
                        />

                        <button className="absolute bottom-3 left-3 bg-black text-white px-4 py-2 text-xs sm:text-sm rounded-full font-semibold hover:bg-gray-800 transition">
                            LEARN MORE
                        </button>
                    </div>
                </div>

                {/* RIGHT CARD */}
                <div className="bg-[#1e1d1d] text-white rounded-2xl shadow-md flex-1 flex flex-col justify-between overflow-hidden p-6 sm:p-8 md:p-12">

                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                            Breakthrough Research
                        </h2>
                        <p className="text-sm sm:text-base text-gray-300">
                            ElevenLabs was the first company to cross the threshold of making
                            human-like text to speech.
                        </p>
                    </div>

                    <div className="relative mt-6">
                        <Image
                            src="/images/investers/right.webp"
                            alt="Breakthrough Research"
                            width={500}
                            height={350}
                            className="w-full h-[180px] sm:h-[220px] md:h-auto object-cover rounded-xl"
                        />

                        <button className="absolute bottom-3 left-3 bg-white text-black px-4 py-2 text-xs sm:text-sm rounded-full font-semibold hover:bg-gray-200 transition">
                            ABOUT US
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-[140px] mb-[140px] px-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl md:text-4xl">Latest updates</h1>
                    <button className="hidden md:block bg-black text-white px-5 py-2.5 text-sm rounded-full font-semibold">
                        ALL UPDATES
                    </button>

                </div>

                {/* Slider */}
                <div
                    ref={sliderRef}
                    className="
    flex gap-4 overflow-x-auto scroll-smooth
    md:grid md:grid-cols-3
    scrollbar-hide
  "
                >
                    {/* CARD 1 */}
                    <div className="min-w-[240px] sm:min-w-[260px] md:min-w-0 space-y-3">
                        <div className="relative rounded-2xl h-[260px] sm:h-[280px] md:h-[360px] overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-500 to-red-500">
                            <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />

                            <span className="absolute top-3 left-3 bg-white text-black text-[11px] font-semibold px-3 py-1 rounded-full z-10">
                                COMPANY
                            </span>

                            <div className="relative z-10 h-full flex items-center justify-center text-white text-sm sm:text-base">
                                ELEVEN II ALBUM
                            </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-semibold">
                            Introducing The Eleven Album
                        </h3>

                        <p className="text-xs sm:text-sm text-gray-500 leading-snug">
                            A landmark musical release created in collaboration with world-class artists.
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="min-w-[240px] sm:min-w-[260px] md:min-w-0 space-y-3">
                        <div className="relative rounded-2xl h-[260px] sm:h-[280px] md:h-[360px] overflow-hidden bg-gradient-to-br from-[#c2a68a] via-[#8fa49b] to-[#2f4f4f]">
                            <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />

                            <span className="absolute top-3 left-3 bg-white text-black text-[11px] font-semibold px-3 py-1 rounded-full z-10">
                                RESEARCH
                            </span>

                            <div className="relative z-10 h-full flex items-center justify-center">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                                    IIScribe v2
                                </h2>
                            </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-semibold">
                            Introducing Scribe v2
                        </h3>

                        <p className="text-xs sm:text-sm text-gray-500 leading-snug">
                            Today we are introducing Scribe v2: the most accurate transcription model ever released, with support for more than 90 languages.
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="min-w-[240px] sm:min-w-[260px] md:min-w-0 space-y-3">
                        <div className="relative rounded-2xl h-[260px] sm:h-[280px] md:h-[360px] overflow-hidden bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500">
                            <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />

                            <span className="absolute top-3 left-3 bg-white text-black text-[11px] font-semibold px-3 py-1 rounded-full z-10">
                                PRODUCT
                            </span>

                            <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                                    Image <br /> & Video
                                </h2>
                            </div>
                        </div>

                        <h3 className="text-base sm:text-lg font-semibold">
                            Introducing ElevenLabs Image & Video
                        </h3>

                        <p className="text-xs sm:text-sm text-gray-500 leading-snug">
                            Within ElevenLabs, you can now bring ideas to life in one complete creative workflow using leading models and audio tools.
                        </p>
                    </div>

                </div>

                {/* Mobile arrows */}
                <div className="flex bg-[#f5f1eb] w-fit rounded-full mt-4 md:hidden">
                    <button
                        onClick={() => scroll("left")}
                        className=" text-black px-4 py-2 rounded-full text-sm"
                    >
                        &lt;
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className=" text-black px-4 py-2 rounded-full text-sm"
                    >
                        &gt;
                    </button>
                </div>

            </div>
            {/* card last */}
            <div className="relative flex items-center justify-center my-16 px-4 bg-white">
                <div className="bg-white rounded-2xl border border-gray-200 px-6 py-8 sm:px-10 sm:py-12 w-full max-w-[320px] sm:max-w-[360px] text-center">

                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 rounded-xl border flex items-center justify-center">
                            <PauseIcon className="w-5 h-5 text-black" />
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-lg sm:text-xl font-semibold mb-5 leading-snug">
                        Create with the highest <br /> quality AI Audio
                    </h1>

                    {/* CTA */}
                    <button className="w-full text-sm bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition">
                        GET STARTED FREE
                    </button>

                    {/* Login */}
                    <p className="text-xs sm:text-sm text-gray-500 mt-4">
                        Already have an account?{" "}
                        <a href="#" className="text-black underline">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default InvesterSection;
