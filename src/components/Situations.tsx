"use client";

import { AlertTriangle, FileStack, Building, Key, ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const situations = [
  {
    icon: AlertTriangle,
    title: "Foreclosure",
    description: "Facing foreclosure? We can help you avoid it by purchasing your home quickly, protecting your credit and giving you a fresh start.",
    color: "bg-red-50 text-red-600",
    iconBg: "bg-red-100",
  },
  {
    icon: FileStack,
    title: "Inherited Properties",
    description: "Inherited a house you don't need? We handle all the complexities of probate sales and buy inherited properties in any condition.",
    color: "bg-purple-50 text-purple-600",
    iconBg: "bg-purple-100",
  },
  {
    icon: Building,
    title: "Vacant Homes",
    description: "Empty houses are a liability. Stop paying for maintenance, utilities, and insurance on a home you're not using. Sell it fast for cash.",
    color: "bg-amber-50 text-amber-600",
    iconBg: "bg-amber-100",
  },
  {
    icon: Key,
    title: "Tired Landlords",
    description: "Done dealing with tenants, repairs, and property management headaches? We buy rental properties with or without tenants in place.",
    color: "bg-emerald-50 text-emerald-600",
    iconBg: "bg-emerald-100",
  },
];

export function Situations() {
  return (
    <section id="situations" className="section-padding bg-white">
      <div className="container-max mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-accent-blue font-semibold text-sm uppercase tracking-wider">We Help With</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            We Buy Houses in Any Situation
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            No matter what situation you&apos;re facing, we can help. We specialize in helping homeowners who need to sell fast.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {situations.map((situation, index) => (
            <AnimatedSection key={situation.title} delay={0.1 + index * 0.08}>
              <div className="group bg-gray-50 rounded-2xl p-6 card-hover border border-gray-100 hover:border-accent-blue/30 cursor-pointer h-full">
                <div className={`w-14 h-14 ${situation.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                  <situation.icon className={`w-7 h-7 ${situation.color.split(' ')[1]}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-accent-blue transition-colors">
                  {situation.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {situation.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-accent-blue font-medium text-sm group-hover:gap-2 transition-all"
                >
                  Get Help Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Banner */}
        <AnimatedSection className="mt-16" delay={0.3}>
          <div className="bg-primary-blue rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not Sure If We Can Help?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Give us a call or fill out our form. We&apos;ll discuss your situation confidentially and let you know how we can assist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(360)889-1234"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-blue font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Call (360) 889-1234
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-blue text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors border-2 border-accent-blue"
              >
                Get Your Cash Offer
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
