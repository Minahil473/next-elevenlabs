import Image from "next/image";

const EnterpriSection = () => {
  return (
    <section>
      <div className="max-w-7xl flex flex-col overflow-x-hidden mx-auto px-4 sm:px-6 lg:px-0 py-20 lg:py-30">
        
        {/* Heading */}
        <p className="text-sm sm:text-lg text-[#a3a3a3] mb-3">
          For <span className="text-black outline-dotted">ENTERPRISES</span>
        </p>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-10 lg:mb-16 leading-tight">
          Deliver new experiences and save costs for <br className="hidden sm:block" /> your enterprise
        </h1>

        {/* Container */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">

          {/* Left column */}
          <div className="flex-1 min-w-0 space-y-6 sm:space-y-8">
            <div className="space-y-5 sm:space-y-6">

              {[
                {
                  title: "CALL CENTERS & CUSTOMER SERVICE",
                  desc:
                    "Power inbound and outbound AI calls at scale, for customer support, customer service, and sales.",
                },
                {
                  title: "AI ASSISTANTS",
                  desc:
                    "Select the ideal voice or clone your own. Generate ads, shorts, or films with our AI voice generator.",
                },
                {
                  title: "EDUCATION TECHNOLOGY",
                  desc:
                    "Build more engaging experiences with Conversational AI and support 29+ languages.",
                },
                {
                  title: "MEDIA CREATION TOOLS",
                  desc:
                    "Give users high-quality voices, voice changer control, and royalty-free sound effects.",
                },
                {
                  title: "MUSIC",
                  desc:
                    "Generate studio-quality tracks instantly using simple text prompts.",
                },
              ].map((item, i) => (
                <div key={i}>
                  <h2 className="text-sm sm:text-lg font-semibold text-[#a3a3a3] hover:text-black mb-1">
                    {item.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#a3a3a3] hover:text-black leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="flex-1 w-full bg-[#F2F2F2] p-2 rounded-xl border border-[#F2F2F2] pb-6 sm:pb-12 flex justify-center overflow-hidden">
  <Image
    src="/images/enterprise.webp"
    alt="Enterprise"
    width={600}
    height={400}
    className="rounded-xl w-full sm:pb-12 h-auto object-cover"
  />
</div>


        </div>
      </div>
    </section>
  );
};

export default EnterpriSection;
