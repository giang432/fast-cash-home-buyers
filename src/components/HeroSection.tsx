"use client";

import { CheckCircle, Shield, Clock, DollarSign } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 md:pt-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(26, 54, 93, 0.65)" }}
      />

      <div className="relative container-max mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">
                Trusted by 500+ Homeowners
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Sell Your House
              <span className="block text-blue-300">Fast for Cash</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              We Buy Houses in Any Condition. No Repairs. No Fees. Flexible Closing.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No Repairs Needed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Zero Commissions</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-green-400" />
                <span>Close in 7 Days</span>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-green-400" />
                <span>We Pay Closing Costs</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div
            id="contact"
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-md mx-auto lg:mx-0 w-full"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Get Your Cash Offer
              </h2>
              <p className="text-gray-600">
                Fill out this form to receive a no-obligation offer
              </p>
            </div>

            <form
              action="https://formspree.io/f/xvzbwelo"
              method="POST"
              className="space-y-4"
            >
              {/* Email Subject */}
              <input
                type="hidden"
                name="_subject"
                value="New Lead - Cash Offer Request"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="(360) 889-1234"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="123 Main St, City, State"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Get My Cash Offer
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Your information is secure and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
