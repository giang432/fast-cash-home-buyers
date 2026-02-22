"use client";

import { useState } from "react";
import { CheckCircle, Shield, Clock, DollarSign } from "lucide-react";

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative min-h-screen pt-24 md:pt-28 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`,
        }}
      />
      {/* Dark Navy Overlay at 65% opacity */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(26, 54, 93, 0.65)' }}
      />

      <div className="relative container-max mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">Trusted by 500+ Homeowners</span>
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
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">No Repairs Needed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Zero Commissions</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">Close in 7 Days</span>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">We Pay Closing Costs</span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-primary-blue font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-xl lg:hidden"
            >
              Get My Cash Offer
            </a>
          </div>

          {/* Right Form */}
          <div id="contact" className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-md mx-auto lg:mx-0 w-full">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  We&apos;ve received your information and will contact you within 24 hours with your cash offer.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Cash Offer</h2>
                  <p className="text-gray-600">Fill out this form to receive a no-obligation offer</p>
                </div>

                <form
  name="contact"
  method="POST"
  data-netlify="true"
  onSubmit={handleSubmit}
  className="space-y-4"
>
  <input type="hidden" name="form-name" value="contact" />

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Full Name <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="name"
      required
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
      placeholder="John Smith"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Phone Number <span className="text-red-500">*</span>
    </label>
    <input
      type="tel"
      name="phone"
      required
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
      placeholder="(360) 889-1234"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Property Address <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="address"
      required
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
      placeholder="123 Main St, City, State"
    />
  </div>


<button
  type="submit"
  disabled={isSubmitting}
  className="w-full bg-accent-blue text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
>
  {isSubmitting ? "Submitting..." : "Get My Cash Offer"}
</button>

<p className="text-xs text-gray-500 text-center mt-4">
  By submitting, you agree to receive calls and texts about your property.
  Your information is secure and will never be shared.
</p>
                
            </>
)}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
