"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { SectionLoadingSpinner } from "@/components/LoadingSpinner";

const ServicesGrid = dynamic(() => import("@/components/ServicesGrid"), {
  loading: () => <SectionLoadingSpinner />,
  ssr: true,
});

export default function ServicesPage() {

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-foreground pb-32">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground tracking-tight">
              Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-body leading-relaxed max-w-3xl mx-auto">
              We empower your business with cutting-edge digital transformation strategies, secure infrastructures, and robust application deployments tailored to your specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <Suspense fallback={<SectionLoadingSpinner />}>
          <ServicesGrid />
        </Suspense>
      </section>
    </main>
  );
}
