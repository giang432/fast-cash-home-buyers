"use client";

import { Wrench, Users, Wallet, Home, CheckCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const benefits = [
  {
    icon: Wrench,
    title: "No Repairs Needed",
    description: "Sell your house exactly as it is. We buy homes in any condition — no cleaning, no fixing, no stress.",
    highlights: ["Any condition accepted", "No inspections required", "Leave items behind"],
  },
  {
    icon: Users,
    title: "No Agent Commissions",
    description: "Skip the 6% realtor fees. We buy directly from you, putting more money in your pocket.",
    highlights: ["Zero commission fees", "No listing required", "Direct cash buyer"],
  },
  {
    icon: Wallet,
    title: "We Pay Closing Costs",
    description: "Don't worry about hidden fees or closing costs. We cover everything so you keep more of your money.",
    highlights: ["All fees covered", "No hidden charges", "Transparent process"],
  },
  {
    icon: Home,
    title: "Any Condition Accepted",
    description: "Fire damage, mold, foundation issues, outdated — we buy it all. No property is too challenging for us.",
    highlights: ["Structural issues OK", "Old or outdated homes", "Problem properties welcome"],
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-light-blue">
      <div className="container-max mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-accent-blue font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Benefits of Selling to Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We make selling your house simple, fast, and stress-free. Here&apos;s why homeowners choose us.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.title} delay={0.1 + index * 0.1}>
              <div className="bg-white rounded-2xl p-6 md:p-8 card-shadow card-hover border border-gray-100 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
                <div className="ml-16 space-y-2">
                  {benefit.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
