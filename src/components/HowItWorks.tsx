"use client";

import { FileText, DollarSign, CalendarCheck, ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import Image from "next/image";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Submit Your Property",
    description: "Fill out our simple form with your property details. It only takes 2 minutes and there's no obligation.",
  },
  {
    icon: DollarSign,
    number: "02",
    title: "Receive a Fair Cash Offer",
    description: "We'll evaluate your property and present you with a fair, no-obligation cash offer within 24 hours.",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Close on Your Timeline",
    description: "Accept our offer and choose your closing date. We can close in as little as 7 days or on your schedule.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-max mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="text-accent-blue font-semibold text-sm uppercase tracking-wider">Simple Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Selling your house has never been easier. Our streamlined process gets you cash fast without the hassle.
          </p>
        </AnimatedSection>

        {/* Professional Image */}
        <AnimatedSection className="flex justify-center mb-14" delay={0.1}>
          <div
            className="relative overflow-hidden"
            style={{
              maxWidth: '480px',
              width: '100%',
              borderRadius: '12px',
              boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Real estate documents and house keys"
              width={480}
              height={320}
              className="w-full h-auto object-cover"
              style={{ borderRadius: '12px' }}
            />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={0.1 + index * 0.1}>
              <div className="relative">
                <div className="bg-gray-50 rounded-2xl p-8 h-full card-hover border border-gray-100 hover:border-accent-blue/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-accent-blue/10 rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-accent-blue" />
                    </div>
                    <span className="text-5xl font-bold text-gray-200">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-6 lg:-right-8 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" delay={0.4}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent-blue text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Offer Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
