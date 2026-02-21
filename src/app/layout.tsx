import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Fast Cash Home Buyers | Sell Your House Fast for Cash",
  description: "We buy houses in any condition. No repairs needed. No fees. No commissions. Get a fair cash offer today and close on your timeline.",
  keywords: "sell house fast, cash home buyers, we buy houses, sell my house, cash for homes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
