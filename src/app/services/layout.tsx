import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise IT Services",
  description: "Discover BabulTech's comprehensive services: High-Performance SaaS, Custom Web Applications, CRM Automations, and Cyber Security.",
  openGraph: {
    title: "Enterprise IT Services | BabulTech",
    description: "Discover BabulTech's comprehensive services: High-Performance SaaS, Custom Web Applications, CRM Automations, and Cyber Security.",
    url: "/services",
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
