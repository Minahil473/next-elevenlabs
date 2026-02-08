import React from "react";
import Image from "next/image";

const Models = () => {
  return (
    <section className="mt-[140px] px-4 sm:px-6 md:px-12 lg:px-16 py-20 md:py-[200px] bg-black text-white overflow-x-hidden">
      {/* Heading */}
      <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">
        For <span className="text-gray-300 outline-dotted">DEVELOPERS</span>
      </p>

      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-10 md:mb-16 leading-snug">
        Build the most advanced audio models into <br className="hidden sm:block" />
        your product with our APIs and SDKs
      </h1>

      <div className="grid p-1 bg-[#1e1d1d] rounded-xl gap-4 overflow-x-hidden">
        {/* Grid for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {/* CARD 1 */}
          <div className="bg-black flex flex-col border rounded-xl border-gray-800 p-4 sm:p-6 md:p-9 space-y-4 sm:space-y-6 md:space-y-8 min-w-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-1">Text to Speech API</h2>
            <p className="text-sm sm:text-base text-gray-300">
              Independently rated the leading Text to Speech models. Choose Multilingual v2 for lifelike consistent speech; eleven_v3 for expressive speech; or Flash v2.5 for low latency. All support 29+ languages.
            </p>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <div>
                <span className="block text-sm sm:text-base md:text-lg font-semibold border-l border-[#F2F2F2] pl-3 sm:pl-4">Flash</span>
                <span className="text-xs sm:text-sm text-gray-400">75ms latency for conversational usecases</span>
              </div>
              <div>
                <span className="block text-sm sm:text-base md:text-lg font-semibold border-l border-[#F2F2F2] pl-3 sm:pl-4">Multilingual</span>
                <span className="text-xs sm:text-sm text-gray-400">Best lifelike consistent speech</span>
              </div>
              <div>
                <span className="block text-sm sm:text-base md:text-lg font-semibold border-l border-[#F2F2F2] pl-3 sm:pl-4">v3</span>
                <span className="text-xs sm:text-sm text-gray-400">Most expressive model yet</span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-black border justify-between rounded-xl border-gray-800 p-4 sm:p-6 md:p-9 flex flex-col space-y-4 sm:space-y-6 md:space-y-8 min-w-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-1">Speech to Text API</h2>
            <p className="text-sm sm:text-base text-gray-300">
              The <a className="underline">most accurate ASR model</a>. Low cost, supports speaker diarization and character-level timestamps.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-10">
              <div>
                <span className="block text-xl md:text-2xl font-semibold">48%</span>
                <span className="text-xs sm:text-sm text-gray-400">Accuracy</span>
              </div>
              <div>
                <span className="block text-xl md:text-2xl font-semibold">$0.22</span>
                <span className="text-xs sm:text-sm text-gray-400">/hour on business plan</span>
              </div>
            </div>
            <Image
              src="/images/model.webp"
              alt="Speech to Text API"
              width={400}
              height={200}
              className="rounded-md w-full h-auto object-cover"
            />
          </div>

          {/* CARD 3 */}
          <div className="bg-black border justify-between rounded-xl border-gray-800 p-4 sm:p-6 md:p-9 flex flex-col space-y-4 sm:space-y-6 md:space-y-8 min-w-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-1">Voice Changer API</h2>
            <p className="text-sm sm:text-base text-gray-300">
              The leading <a className="underline">Voice Changer</a> model. Full control over timing, inflection, and emotion.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-10">
              <div>
                <span className="block text-xl md:text-2xl font-semibold">1000+</span>
                <span className="text-xs sm:text-sm text-gray-400">Voices</span>
              </div>
              <div>
                <span className="block text-xl md:text-2xl font-semibold">29+</span>
                <span className="text-xs sm:text-sm text-gray-400">Languages</span>
              </div>
            </div>
            <div className="flex flex-wrap mt-4 sm:mt-6 md:mt-8 justify-between gap-2 sm:gap-4">
              <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 flex items-center justify-center text-sm sm:text-base">▶</button>
              <div className="flex rounded-full bg-white overflow-hidden">
                <button className="px-2 sm:px-4 py-1 text-xs sm:text-sm text-black font-semibold">Input</button>
                <button className="px-2 sm:px-4 py-1 text-xs sm:text-sm text-gray-600">Output</button>
              </div>
              <Image src="/images/circle.svg" alt="circle" width={48} height={48} />
            </div>
          </div>

          {/* CARD 4: Agents */}
          <div className="bg-black justify-between rounded-xl border border-gray-800 p-4 sm:p-6 md:p-9 md:col-span-2 space-y-4 sm:space-y-6 min-w-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium">Agents</h2>
            <p className="text-sm sm:text-base text-gray-300">
              Build AI voice agents on web, mobile, or telephony with low latency and full configurability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {["Low Latency","Advanced turn taking","Bring any LLM","Function calling","31 languages","Take phone calls","1000s of voices"].map(item => (
                <div key={item} className="border-l border-[#F2F2F2] pl-3 text-sm sm:text-base font-semibold min-w-0">{item}</div>
              ))}
            </div>
          </div>

          {/* CARD 5 */}
          <div className="rounded-xl p-4 sm:p-6 md:p-8 space-y-2 sm:space-y-3 md:space-y-4 min-w-0">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold">Easy to use APIs that scale</h2>
            <p className="text-sm sm:text-base text-gray-300">
              Leading AI audio models, robust, scalable and quick to integrate.
            </p>
            <ul className="space-y-1 sm:space-y-2 pl-2 sm:pl-3">
              {[
                ["Python and TypeScript SDKs", "Get to production quickly"],
                ["GDPR & SOC II compliant", "Secure and compliant"],
              ].map(([title, desc]) => (
                <li key={title}>
                  <span className="block border-l-2 border-[#F2F2F2] pl-3 text-sm sm:text-base font-semibold">{title}</span>
                  <span className="block text-xs sm:text-sm text-gray-400">{desc}</span>
                </li>
              ))}
            </ul>

            <button className="mt-2 sm:mt-3 md:mt-4 px-3 sm:px-4 md:px-5 py-2 bg-white text-black font-semibold rounded-full text-sm sm:text-base">
              READ THE DOCS
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Models;
