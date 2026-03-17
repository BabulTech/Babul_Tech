import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "BabulTech provides specialized technical solutions across various industries including Finance, Healthcare, Retail, and SaaS.",
  openGraph: {
    title: "Industries We Serve | BabulTech",
    description: "BabulTech provides specialized technical solutions across various industries including Finance, Healthcare, Retail, and SaaS.",
    url: "/industries",
  }
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
