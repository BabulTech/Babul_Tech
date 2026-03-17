"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, BarChart3, Rocket } from "lucide-react";

// Dynamically imported icons to prevent hydration issues
const CheckCircle2 = dynamic(() => import("lucide-react").then(mod => mod.CheckCircle2), { ssr: false });
const Target = dynamic(() => import("lucide-react").then(mod => mod.Target), { ssr: false });
const Shield = dynamic(() => import("lucide-react").then(mod => mod.Shield), { ssr: false });
const Zap = dynamic(() => import("lucide-react").then(mod => mod.Zap), { ssr: false });
const Users = dynamic(() => import("lucide-react").then(mod => mod.Users), { ssr: false });
const Eye = dynamic(() => import("lucide-react").then(mod => mod.Eye), { ssr: false });
const Globe2 = dynamic(() => import("lucide-react").then(mod => mod.Globe2), { ssr: false });

export default function AboutPage() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-300 selection:bg-primary selection:text-foreground pb-12">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                <Rocket size={16} /> Relentless Engineering
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
                Pioneering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">Enterprise IT</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                We don&apos;t just build software. We engineer operational dominance. BabulTech partners with scaling enterprises to destroy technical debt, automate complex workflows, and establish undeniable market advantages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Certified Experts</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Rapid ROI Focus</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">24/7 Ops Support</span>
                </div>
              </div>
            </motion.div>

            {/* Animation / Visual Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 bg-slate-900 aspect-square md:aspect-video lg:aspect-square flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-slate-900/60 to-transparent"></div>
              
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-6 backdrop-blur-md">
                   <Target className="w-10 h-10 text-primary drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Precision Strategy</h3>
                <p className="text-slate-400 text-sm">Flawless execution driven by verified data.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission / Philosophy */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-slate-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Our Core <span className="text-primary">Philosophy</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We fundamentally reject the traditional agency model. We believe in becoming an embedded technical extension of your team, absorbing your friction and returning pure operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#020617] border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-colors duration-300">
              <Zap className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-slate-100 mb-4">Eliminate Bottlenecks</h3>
              <p className="text-slate-400 text-sm leading-relaxed">We identify the manual tasks holding your team back and replace them with automated, zero-error systems that scale effortlessly.</p>
            </div>
            <div className="bg-[#020617] border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-colors duration-300 md:-translate-y-4">
              <Shield className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-slate-100 mb-4">Uncompromising Security</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Security is never an afterthought. From Zero-Trust networking to encrypted data lakes, we engineer digital fortresses from day one.</p>
            </div>
            <div className="bg-[#020617] border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-colors duration-300">
              <Users className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-slate-100 mb-4">True Partnership</h3>
              <p className="text-slate-400 text-sm leading-relaxed">No ambiguous contracts. No hidden fees. We work alongside you with total transparency on a flexible, pay-as-you-go collaborative basis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Ecosystem */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">The BabulTech <br/><span className="text-primary">Ecosystem</span></h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                To guarantee our standards of quality and speed, we have cultivated dedicated operational divisions uniquely designed to solve specific enterprise pain points.
              </p>
              
              <div className="space-y-6">
                <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-4 mb-3">
                    <BarChart3 className="text-primary w-6 h-6" />
                    <h4 className="text-xl font-bold text-white">Apex-Accelerator</h4>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">Our proprietary wing dedicated entirely to enterprise CRM systems, revenue pipelines, and operational automation.</p>
                  <Link href="https://apex-accelerator.com" target="_blank" className="text-sm font-semibold text-primary group-hover:text-emerald-400 flex items-center gap-1">
                    Explore Apex <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-4 mb-3">
                    <Code2 className="text-blue-500 w-6 h-6" />
                    <h4 className="text-xl font-bold text-white">ShiftDeploy</h4>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">Our elite development squadron offering on-demand technical resources for High-Performance SaaS and Custom Web Applications.</p>
                  <Link href="https://shiftdeploy.com" target="_blank" className="text-sm font-semibold text-blue-500 group-hover:text-blue-400 flex items-center gap-1">
                    Explore ShiftDeploy <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
           </div>
           
           <div className="relative h-full min-h-[400px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 mix-blend-screen z-10"></div>
             <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" alt="Ecosystem visualization" className="w-full h-full object-cover grayscale opacity-80" />
           </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary">
                <Globe2 className="w-4 h-4" /> Global Vision
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
                Architecting Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Dominance</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We format technology to act as a multiplier, not an expense. Our vision is an ecosystem where enterprises run strictly on automated precision and aggressive system optimization, annihilating technical debt in the process.
              </p>
              
              <ul className="space-y-6 pt-4">
                <li className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg text-foreground font-bold mb-1">Total Transparency</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">No black-box operations. We expose every layer of the architecture, so you possess total command over your technical landscape.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg text-foreground font-bold mb-1">Impact Over Output</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Actionable metrics trump raw lines of code. We tie our success strictly to your bottom line, system velocity, and scale.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 lg:gap-6 relative"
            >
              {/* Glow Behind Grid */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
              
              {/* Full Width Metric */}
              <div className="col-span-2 group relative p-8 md:p-10 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></div>
                    <span className="text-xs font-bold text-slate-300 tracking-[0.2em] uppercase">Partnership Loyalty</span>
                  </div>
                  <div className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
                    98.5<span className="text-primary">%</span>
                  </div>
                  <p className="text-slate-400 text-base max-w-sm leading-relaxed">Of our enterprise partners expand their initial engagement into a continuous operational retainer due to massive ROI generation.</p>
                </div>
              </div>

              {/* Half Width Metric - Left */}
              <div className="col-span-1 group relative p-6 md:p-8 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl min-h-[220px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="text-xs font-bold text-blue-400 mb-6 tracking-[0.2em] uppercase">Uptime</div>
                  <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">99.99%</div>
                  <p className="text-slate-400 text-sm">Mission-critical SLA guaranteed.</p>
                </div>
              </div>

              {/* Half Width Metric - Right */}
              <div className="col-span-1 group relative p-6 md:p-8 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-white/5 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl min-h-[220px]">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="text-xs font-bold text-emerald-400 mb-6 tracking-[0.2em] uppercase">Velocity</div>
                  <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">300%</div>
                  <p className="text-slate-400 text-sm">Average speed optimization rate.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Wrapper */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to scale securely?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-foreground font-semibold rounded-xl hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            Consult an Expert <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
