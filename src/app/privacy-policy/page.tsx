import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg text-gray-600 mb-6">
              Last updated: February 2026
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p>
                When you submit a form on our website, we collect personal information including your name,
                phone number, email address, and property address. This information is used solely to contact
                you regarding your property and provide you with a cash offer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Contact you about your property inquiry</li>
                <li>Provide you with a cash offer for your property</li>
                <li>Follow up on your request</li>
                <li>Improve our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. Your information
                may be shared with trusted partners who assist us in operating our business, but only under
                strict confidentiality agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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
