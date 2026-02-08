import Image from "next/image";

export default function TrusterSection() {
  return (
    <section
      className="
        pt-8 sm:pt-12 md:pt-20
        pb-12 sm:pb-16
      "
    >
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <p
          className="
            text-base sm:text-xl md:text-3xl
            font-semibold
          "
        >
          Trusted by leading developers and enterprises
        </p>

        {/* Logos Grid */}
        <div
          className="
            grid grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            mt-8 sm:mt-10 md:mt-12
            mb-10 sm:mb-12
          "
        >
          {[
            "/images/Cisco_Color.svg",
            "/images/epic.svg",
            "/images/twilio.svg",
            "/images/synthesia.svg",
            "/images/time.svg",
            "/images/chess.svg",
            "/images/telus.svg",
            "/images/messho.svg",
          ].map((logo, index) => (
            <div
              key={index}
              className="
                group flex items-center justify-center
                border border-[#F2F2F2]
                py-6 sm:py-8
                bg-white
                transition
              "
            >
            <Image
  src={logo}
  alt="partner logo"
  width={140}
  height={70}
  className="
    h-6 sm:h-8 md:h-10
    w-auto
    object-contain
    grayscale opacity-40
    group-hover:grayscale-0
    group-hover:opacity-100
    transition duration-300
  "
/>

            </div>
          ))}
        </div>

        {/* Buttons */}
        <div
          className="
            flex
            justify-center
            items-center
            gap-3 sm:gap-4
          "
        >
          <button
            className="
              bg-black text-white
              px-4 sm:px-6
              py-2 sm:py-3
              text-xs sm:text-sm
              rounded-full
              font-semibold
              hover:bg-gray-800
              transition
            "
          >
            Talk To Sales
          </button>

          <button
            className="
              flex items-center justify-center gap-2
              px-4 sm:px-6
              py-2 sm:py-2.5
              text-xs sm:text-sm
              font-bold
              rounded-full
              bg-[#F2F2F2]
              hover:bg-[#cfcfcf]
              transition
            "
          >
            Read Stories
          </button>
        </div>

      </div>
    </section>
  );
}
