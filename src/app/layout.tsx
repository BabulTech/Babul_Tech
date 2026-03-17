import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://babultech.com'),
  title: {
    default: "BabulTech | Certified Expertise. Rapid Resolution.",
    template: "%s | BabulTech"
  },
  description: "Enterprise IT Solutions, Software Engineering, CRM Implementation, and Technical Partnership. We engineer operational dominance.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "BabulTech",
    title: "BabulTech | Certified Expertise. Rapid Resolution.",
    description: "Discover BabulTech's enterprise IT solutions and software engineering services. We annihilate technical debt and build scalable architectures.",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image in public folder later
        width: 1200,
        height: 630,
        alt: "BabulTech Open Graph Image",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BabulTech | Certified Expertise. Rapid Resolution.",
    description: "Enterprise IT Solutions, Software Engineering, and CRM Implementation.",
    images: ["/og-image.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} antialiased flex flex-col min-h-screen pt-20`}
        suppressHydrationWarning
      >
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
