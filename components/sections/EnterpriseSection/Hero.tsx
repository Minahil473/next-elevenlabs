import React from "react";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6 text-center">
      {/* ================= TOP SECTION ================= */}
      <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-8 sm:mb-10 max-w-7xl mx-auto">

        {/* Container: stacked on small, row on large */}
        <div className="flex flex-col items-center gap-6 sm:gap-8">

          {/* Text */}
          <div className="text-center sm:text-center md:text-center lg:text-center">
            <h1 className="text-5xl sm:text-4xl md:text-5xl  font-semibold max-w-3xl mx-auto leading-tight">
              The complete AI Voice <br className="hidden sm:block" /> platform for your enterprise.
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Leverage our complete agent and creative platform for better customer <br className="hidden sm:block" /> experiences and high quality content production.
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 w-full">
            <button className="bg-black text-white px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-4 lg:py-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-full  whitespace-nowrap">
              CONTACT SALES
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
