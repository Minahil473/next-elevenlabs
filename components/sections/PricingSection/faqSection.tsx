"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is usage-based billing?",
    answer:
      "Usage-based billing allows you to continue generating content after you reach your monthly credit quota. When enabled, you will be charged a fixed price for every additional 1,000 credits used beyond your plan’s included limit.",
  },
  {
    question: "How do text characters and credits work?",
    answer:
      "Each text character you generate consumes credits, with the exact cost depending on the model used.",
  },
  {
    question: "When do my credits reset, and do unused credits roll over?",
    answer:
      "Your credit allowance resets at the start of each billing cycle. Unused credits can roll over for up to two months.",
  },
  {
    question: "Is there a limit on how many credits I can use in a single request?",
    answer:
      "Yes. There is a maximum number of credits that can be used in a single generation request.",
  },
  {
    question: "Am I charged for every generation?",
    answer:
      "Credits are charged per generation request, not per download.",
  },
  {
    question: "What happens if I upgrade, downgrade, or cancel my subscription?",
    answer:
      "Your subscription remains active until the end of the billing cycle.",
  },
  {
    question: "When can I cancel my subscription?",
    answer:
      "You can cancel your subscription at any time.",
  },
  {
    question: "How do I check how many credits I have remaining?",
    answer:
      "You can view remaining credits from your profile subscription page.",
  },
  {
    question: "What kind of payment do you accept?",
    answer:
      "We accept Credit Card, Apple Pay, and Google Pay.",
  },
  {
    question: "How is tax handled for Alabama customers?",
    answer:
      "Tax is remitted on your behalf to the Alabama Department of Revenue.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
        Frequently asked questions
      </h2>

      {/* FAQ List */}
      <ul className="divide-y divide-dotted divide-gray-300 w-full">
        {faqs.map(({ question, answer }, index) => (
          <li key={index} className="py-3 sm:py-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-base sm:text-lg md:text-xl font-medium">
                {question}
              </span>
              <span className="text-xl sm:text-2xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {answer}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-14 sm:mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Create with the highest quality AI Audio
        </h1>

        <div className="flex gap-3 sm:gap-4">
          <button className="rounded-full border border-gray-300 px-5 py-2.5 text-sm sm:text-base font-semibold hover:bg-gray-100 transition">
            Contact Sales
          </button>
          <button className="rounded-full bg-black text-white px-5 py-2.5 text-sm sm:text-base font-semibold hover:bg-gray-800 transition">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
}
