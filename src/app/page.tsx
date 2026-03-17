import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { SectionLoadingSpinner } from "@/components/LoadingSpinner";

export const metadata: Metadata = {
  title: "BabulTech | Enterprise IT & Software Engineering",
  description: "BabulTech engineers operational dominance through world-class software, enterprise CRM systems, and IT infrastructure. Scale your business securely.",
  openGraph: {
    title: "BabulTech | Enterprise IT & Software Engineering",
    description: "BabulTech engineers operational dominance through world-class software, enterprise CRM systems, and IT infrastructure.",
    url: "/",
  }
};

const ExpertiseShowcase = dynamic(() =>
  import("@/components/ExpertiseShowcase").then((mod) => mod.ExpertiseShowcase)
, {
  loading: () => <SectionLoadingSpinner />,
  ssr: true,
});

const IndustriesSection = dynamic(() =>
  import("@/components/IndustriesSection").then((mod) => mod.IndustriesSection)
, {
  loading: () => <SectionLoadingSpinner />,
  ssr: true,
});

const TestimonialsSection = dynamic(() =>
  import("@/components/TestimonialsSection").then((mod) => mod.TestimonialsSection)
, {
  loading: () => <SectionLoadingSpinner />,
  ssr: true,
});

const SubsidiaryEcosystem = dynamic(() =>
  import("@/components/SubsidiaryEcosystem").then((mod) => mod.SubsidiaryEcosystem)
, {
  loading: () => <SectionLoadingSpinner />,
  ssr: true,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-foreground pb-32">
      <HeroSection />
      <Suspense fallback={<SectionLoadingSpinner />}>
        <ExpertiseShowcase />
      </Suspense>
      <Suspense fallback={<SectionLoadingSpinner />}>
        <IndustriesSection />
      </Suspense>
      <Suspense fallback={<SectionLoadingSpinner />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionLoadingSpinner />}>
        <SubsidiaryEcosystem />
      </Suspense>

      {/* CTA Layer */}
      <section className="py-20 text-center px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#020617] to-slate-900 border border-white/10 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
           
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Ready to Scale Your Enterprise?</h2>
           <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
             Partner with us to eliminate technical debt, automate workflows, and deploy high-performance solutions that actively drive ROI.
           </p>
           <Link href="/contact" className="relative z-10 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-foreground shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all hover:-translate-y-1">
              Start Your Transformation <ArrowRight className="w-5 h-5" />
           </Link>
        </div>
      </section>

    </main>
  );
}
