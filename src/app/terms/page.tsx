import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 md:pt-28 pb-16 md:pb-24 px-4 md:px-6">
        <div className="container-max mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent-blue hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg text-gray-600 mb-6">
              Last updated: February 2026
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using the Fast Cash Home Buyers website, you agree to be bound by
                these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p>
                Fast Cash Home Buyers provides a platform for homeowners to receive cash offers for their
                properties. We purchase homes directly and are not acting as real estate agents or brokers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">No Obligation</h2>
              <p>
                Submitting your information through our website does not create any obligation to sell your
                property. All offers are provided without obligation, and you are free to accept or decline
                any offer at your discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Communications</h2>
              <p>
                By submitting your information, you consent to receive communications from us via phone,
                text message, and email regarding your property inquiry. You may opt out at any time by
                contacting us directly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Fast Cash Home Buyers</strong><br />
                Phone: (360) 889-1234<br />
                Email: info@fastcashhomebuyers.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
