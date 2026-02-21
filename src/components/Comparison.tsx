"use client";

import { Check, X } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const comparisons = [
  {
    feature: "Commissions",
    fastCash: "$0",
    traditional: "6% of sale price",
  },
  {
    feature: "Repair Costs",
    fastCash: "$0",
    traditional: "$10,000+",
  },
  {
    feature: "Closing Costs",
    fastCash: "$0",
    traditional: "$6,000+",
  },
  {
    feature: "Average Days to Close",
    fastCash: "7-14 days",
    traditional: "60-90 days",
  },
  {
    feature: "Number of Showings",
    fastCash: "0",
    traditional: "10-25+",
  },
  {
    feature: "Sell As-Is",
    fastCash: true,
    traditional: false,
  },
];

export function Comparison() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="text-accent-blue font-semibold text-sm uppercase tracking-wider">See The Difference</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Selling to Us vs. Traditional
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Compare the benefits of selling directly to us versus listing with an agent.
          </p>
        </AnimatedSection>

        <AnimatedSection className="max-w-4xl mx-auto" delay={0.15}>
          <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 md:p-6 text-gray-700 font-semibold"></th>
                    <th className="p-4 md:p-6 bg-accent-blue text-white font-bold text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-lg">Fast Cash</span>
                        <span className="text-sm font-normal opacity-80">Home Buyers</span>
                      </div>
                    </th>
                    <th className="p-4 md:p-6 text-gray-700 font-semibold text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-lg">Traditional</span>
                        <span className="text-sm font-normal text-gray-500">With Agent</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {comparisons.map((item, index) => (
                    <tr
                      key={item.feature}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="p-4 md:p-6 text-gray-700 font-medium border-b border-gray-100">
                        {item.feature}
                      </td>
                      <td className="p-4 md:p-6 text-center border-b border-gray-100 bg-blue-50/50">
                        {typeof item.fastCash === 'boolean' ? (
                          item.fastCash ? (
                            <div className="flex justify-center">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <Check className="w-5 h-5 text-green-600" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                <X className="w-5 h-5 text-red-600" />
                              </div>
                            </div>
                          )
                        ) : (
                          <span className="font-bold text-accent-blue text-lg">{item.fastCash}</span>
                        )}
                      </td>
                      <td className="p-4 md:p-6 text-center border-b border-gray-100">
                        {typeof item.traditional === 'boolean' ? (
                          item.traditional ? (
                            <div className="flex justify-center">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <Check className="w-5 h-5 text-green-600" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                <X className="w-5 h-5 text-red-600" />
                              </div>
                            </div>
                          )
                        ) : (
                          <span className="text-gray-600">{item.traditional}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="text-center mt-10" delay={0.25}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent-blue text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Your No-Obligation Offer
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
