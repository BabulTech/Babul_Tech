import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about BabulTech's mission, ecosystem, and relentless focus on enterprise ROI and system velocity. We engineer digital excellence.",
  openGraph: {
    title: "About Us | BabulTech",
    description: "Learn about BabulTech's mission, ecosystem, and relentless focus on enterprise ROI and system velocity.",
    url: "/about",
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
