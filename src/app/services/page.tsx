"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { SectionLoadingSpinner } from "@/components/LoadingSpinner";
import { ArrowRight, CheckCircle2, Target, Zap, ShieldAlert, TrendingUp, BarChart3, Code2, Users, Search, PenTool, Rocket, LifeBuoy, Briefcase, Clock, Infinity } from "lucide-react";
import Link from "next/link";

const ServicesGrid = dynamic(() => import("@/components/ServicesGrid"), {
  loading: () => <SectionLoadingSpinner />,
  ssr: true,
});

const problemsSolved = [
  {
    problem: "Scattered Customer Data & Lost Leads",
    solution: "We implement centralized CRM platforms that give you a 360-degree view of your operations, ensuring no lead falls through the cracks.",
  },
  {
    problem: "Inefficient Manual Processes",
    solution: "We deploy smart automation tools and technical architectures that streamline workflows, saving thousands of hours per year.",
  },
  {
    problem: "Technical Debt & Scaling Bottlenecks",
    solution: "Our precise strategy transforms bloated legacy systems into modern, agile infrastructures ready to handle rapid growth safely.",
  },
  {
    problem: "Unpredictable IT Costs",
    solution: "We operate on a flexible, pay-as-you-go model. You only invest in the actual deliverables and support you need, nothing more.",
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-foreground pb-12">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground tracking-tight">
              Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-body leading-relaxed max-w-3xl mx-auto">
              We empower your business with cutting-edge digital transformation strategies, secure infrastructures, and robust application deployments tailored to your specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid (Overview) */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-100">Capabilities Overview</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>
        <Suspense fallback={<SectionLoadingSpinner />}>
          <ServicesGrid />
        </Suspense>
      </section>

      {/* Deep Dive / Problems Solved */}
      <section className="py-20 bg-slate-900/30 border-y border-white/5 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
                  <ShieldAlert size={16} /> Problem vs Resolution
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  We don&apos;t just write code.<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">We eliminate bottlenecks.</span>
                </h2>
                <p className="text-body text-lg mb-8 leading-relaxed">
                  Most agencies just deliver software. We act as your technical partner, identifying the root causes of your friction and implementing systems that drive actual business ROI.
                </p>

                <div className="space-y-6">
                  {problemsSolved.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0">
                         <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <CheckCircle2 className="text-primary w-5 h-5" />
                         </div>
                      </div>
                      <div>
                        <h4 className="text-slate-200 font-semibold mb-1">{item.problem}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {/* Stats / Value Props cards */}
                <div className="bg-[#020617] border border-white/10 rounded-2xl p-6 shadow-xl hover:border-primary/30 transition-colors">
                  <TrendingUp className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Growth Centric</h3>
                  <p className="text-slate-400 text-sm">Every implementation is designed strictly to facilitate business scaling.</p>
                </div>
                <div className="bg-[#020617] border border-white/10 rounded-2xl p-6 shadow-xl hover:border-primary/30 transition-colors sm:translate-y-8">
                  <Target className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Precision</h3>
                  <p className="text-slate-400 text-sm">Zero guesswork. Data-backed strategies tailored to your exact industry.</p>
                </div>
                <div className="bg-[#020617] border border-white/10 rounded-2xl p-6 shadow-xl hover:border-primary/30 transition-colors">
                  <Zap className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Rapid ROI</h3>
                  <p className="text-slate-400 text-sm">We focus on high-impact setups that start generating value in weeks, not years.</p>
                </div>
                <div className="bg-[#020617] border border-white/10 rounded-2xl p-6 shadow-xl hover:border-primary/30 transition-colors sm:translate-y-8">
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Full Alignment</h3>
                  <p className="text-slate-400 text-sm">We merge with your internal teams to ensure 100% operational transparency.</p>
                </div>
              </motion.div>
            </div>
         </div>
      </section>

      {/* Deep Dive into Specific Frameworks/Services */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-100">Why Get Our Services?</h2>
          <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">We construct an ecosystem that pays for itself by optimizing your workflow and engaging your customers effectively.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* CRM Details */}
          <div className="group rounded-3xl bg-slate-900/50 border border-white/10 p-8 hover:bg-slate-800/50 transition-all duration-300">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
                  <BarChart3 className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold">Enterprise CRM Mastery</h3>
             </div>
             <p className="text-slate-300 mb-6 leading-relaxed">
               Managing client interactions shouldn&apos;t be chaotic. By implementing advanced CRM solutions, we consolidate sales, support, and marketing pipelines into one unified dashboard.
             </p>
             <ul className="space-y-3 mb-8">
               <li className="flex items-start gap-3 text-slate-400 text-sm">
                 <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Automate lead nurturing and follow-ups.
               </li>
               <li className="flex items-start gap-3 text-slate-400 text-sm">
                 <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Unlock deep analytics predicting customer behavior.
               </li>
               <li className="flex items-start gap-3 text-slate-400 text-sm">
                 <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> Unify communications across your entire team seamlessly.
               </li>
             </ul>
             <Link href="https://apex-accelerator.com" target="_blank" className="inline-flex items-center text-primary font-semibold hover:text-emerald-400 transition-colors">
               Explore Apex-Accelerator <ArrowRight className="ml-2 w-4 h-4" />
             </Link>
          </div>

          {/* Technical Partnership Details */}
          <div className="group rounded-3xl bg-slate-900/50 border border-white/10 p-8 hover:bg-slate-800/50 transition-all duration-300">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <Code2 className="text-blue-400 w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold">Dedicated Technical Partnership</h3>
             </div>
             <p className="text-slate-300 mb-6 leading-relaxed">
               Hiring full-time senior developers or dealing with unreliable freelancers slows you down. We offer on-demand technical excellence, stepping in precisely when you need heavy lifting.
             </p>
             <ul className="space-y-3 mb-8">
               <li className="flex items-start gap-3 text-slate-400 text-sm">
                 <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /> Build complex SaaS or custom web applications.
               </li>
               <li className="flex items-start gap-3 text-slate-400 text-sm">
                 <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /> High-performance frontends and secure backends.
               </li>
               <li className="flex items-start gap-3 text-slate-400 text-sm">
                 <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /> Flexible, cost-efficient, pay-as-you-go collaboration.
               </li>
             </ul>
             <Link href="https://shiftdeploy.com" target="_blank" className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors">
               Explore ShiftDeploy <ArrowRight className="ml-2 w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-100">Flexible Engagement Models</h2>
            <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">We adapt to your specific organizational needs, offering risk-free, highly scalable modes of collaboration.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#020617] border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-colors duration-300">
               <Briefcase className="w-10 h-10 text-primary mb-5" />
               <h3 className="text-xl font-bold text-slate-100 mb-3">Project-Based</h3>
               <p className="text-slate-400 text-sm leading-relaxed mb-6">
                 Perfect for defined scopes like a CRM rollout or a web app launch. We provide end-to-end delivery with clear milestones.
               </p>
            </div>
            
            <div className="bg-[#020617] border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-colors duration-300 relative overflow-hidden">
               <div className="absolute top-0 right-0 py-1 px-3 bg-primary/20 text-primary text-xs font-bold rounded-bl-xl border-l border-b border-primary/20">POPULAR</div>
               <Users className="w-10 h-10 text-primary mb-5" />
               <h3 className="text-xl font-bold text-slate-100 mb-3">Team Augmentation</h3>
               <p className="text-slate-400 text-sm leading-relaxed mb-6">
                 We integrate our specialized engineers directly into your existing workforce to accelerate development cycles seamlessly.
               </p>
            </div>

            <div className="bg-[#020617] border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-colors duration-300">
               <Infinity className="w-10 h-10 text-primary mb-5" />
               <h3 className="text-xl font-bold text-slate-100 mb-3">Managed Support</h3>
               <p className="text-slate-400 text-sm leading-relaxed mb-6">
                 Ongoing DevOps, system maintenance, and iterative CRM enhancements. Predictable costs for enterprise-level uptime.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-100">Our Value-Driven Methodology</h2>
          <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">A proven framework designed to eliminate friction and maximize deployment velocity.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
           {/* Connecting Line for Desktop */}
           <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 -z-10"></div>
           
           {[
             { title: "1. Discovery & Audit", desc: "We analyze your existing workflows and pinpoint critical bottlenecks.", icon: <Search className="w-6 h-6 text-primary" /> },
             { title: "2. Strategic Architecture", desc: "Crafting a scalable blueprint tailored exclusively for your business goals.", icon: <PenTool className="w-6 h-6 text-primary" /> },
             { title: "3. Agile Execution", desc: "Rapid deployment of systems using modern frameworks and best practices.", icon: <Rocket className="w-6 h-6 text-primary" /> },
             { title: "4. Optimization", desc: "Continuous monitoring, scaling, and iterative enhancements post-launch.", icon: <LifeBuoy className="w-6 h-6 text-primary" /> }
           ].map((step, idx) => (
             <div key={idx} className="relative bg-[#020617]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 pt-10 mt-6 group hover:-translate-y-2 transition-transform duration-300">
               <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-background border-2 border-primary/30 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                 {step.icon}
               </div>
               <h4 className="text-lg font-bold text-center text-slate-100 mb-3 mt-2">{step.title}</h4>
               <p className="text-slate-400 text-sm text-center leading-relaxed">{step.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* CTA Layer */}
      <section className="py-20 text-center px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#020617] to-slate-900 border border-white/10 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
           
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Stop Struggling with Inefficient Systems</h2>
           <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
             Whether you need a full CRM deployment, a custom application, or an ongoing technical alliance, we have the resources to elevate your business.
           </p>
           <Link href="/contact" className="relative z-10 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-foreground shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all hover:-translate-y-1">
              Consult an Expert Today <ArrowRight className="w-5 h-5" />
           </Link>
        </div>
      </section>

    </main>
  );
}
