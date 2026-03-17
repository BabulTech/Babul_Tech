import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Consult an Expert",
  description: "Ready to scale securely? Get in touch with BabulTech's certified experts today to destroy technical debt and automate enterprise workflows.",
  openGraph: {
    title: "Contact Us | Consult an Expert | BabulTech",
    description: "Ready to scale securely? Get in touch with BabulTech's certified experts today.",
    url: "/contact",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
