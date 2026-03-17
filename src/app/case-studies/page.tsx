import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { SectionLoadingSpinner } from "@/components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Case Studies | Enterprise Transformations",
  description: "Read how BabulTech has transformed enterprises globally, eliminating bottlenecks, and delivering massive ROI through strategic engineering.",
  openGraph: {
    title: "Case Studies | Enterprise Transformations | BabulTech",
    description: "Read how BabulTech has transformed enterprises globally.",
    url: "/case-studies",
  }
};

const CaseStudiesSectionClient = dynamic(() => import("@/components/CaseStudiesSectionClient"), {
  loading: () => <SectionLoadingSpinner />,
  ssr: true,
});

export default function CaseStudiesPage() {
  return (
    <Suspense fallback={<SectionLoadingSpinner />}>
      <CaseStudiesSectionClient />
    </Suspense>
  );
}
