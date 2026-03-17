import dynamic from "next/dynamic";
import { Suspense } from "react";
import { SectionLoadingSpinner } from "@/components/LoadingSpinner";

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
