"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const faqs = [
  {
    question: "How fast can you close on my house?",
    answer: "We can close in as little as 7 days if needed. However, we're flexible and can work with your timeline. Whether you need to close quickly or need more time, we'll accommodate your schedule.",
  },
  {
    question: "Do I need to make repairs before selling?",
    answer: "Absolutely not! We buy houses in any condition — as-is. You don't need to fix anything, clean, or even remove unwanted items. We handle all of that after the sale.",
  },
  {
    question: "How do you determine your offer price?",
    answer: "We evaluate your property based on its location, condition, current market conditions, and comparable sales in the area. Our goal is to provide a fair, competitive cash offer that works for both parties.",
  },
  {
    question: "Are there any fees or commissions?",
    answer: "No fees whatsoever. Unlike selling with a realtor where you'd pay 5-6% in commissions, we charge zero fees. Plus, we cover all closing costs. The offer we make is the amount you receive.",
  },
  {
    question: "What types of properties do you buy?",
    answer: "We buy all types of residential properties including single-family homes, condos, townhouses, duplexes, and multi-family properties. We also purchase properties with code violations, fire damage, foundation issues, and more.",
  },
  {
    question: "Is there any obligation when I request an offer?",
    answer: "No obligation at all. When you request an offer, we'll evaluate your property and present you with our cash offer. You're free to accept or decline — there's no pressure and no strings attached.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-max mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-accent-blue font-semibold text-sm uppercase tracking-wider">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our home buying process.
          </p>
        </AnimatedSection>

        <AnimatedSection className="max-w-3xl mx-auto" delay={0.1}>
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="mb-4"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex items-center justify-between p-5 md:p-6 bg-white rounded-xl text-left transition-all duration-300 ${
                  openIndex === index
                    ? 'shadow-md border-l-4 border-accent-blue'
                    : 'shadow-sm border border-gray-100 hover:shadow-md'
                }`}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-accent-blue' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 md:p-6 pt-2 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </AnimatedSection>

        {/* Still Have Questions */}
        <AnimatedSection className="mt-12 text-center" delay={0.2}>
          <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border border-gray-100">
            <MessageCircle className="w-5 h-5 text-accent-blue" />
            <span className="text-gray-600">Still have questions?</span>
            <a href="tel:(360)889-1234" className="text-accent-blue font-semibold hover:underline">
              Call us at (360) 889-1234
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
