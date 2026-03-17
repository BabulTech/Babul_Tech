'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Users, Code2 } from 'lucide-react';
import Link from 'next/link';

export function SubsidiaryEcosystem() {
  return (
    <section id="ecosystem" className="py-14 sm:py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 mb-4 tracking-tight"
          >
            The BabulTech Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-body max-w-2xl mx-auto"
          >
            Two specialized divisions powered by one unified standard of excellence. 
            Choose the partner tailored for your digital transformation.
          </motion.p>
        </div>

        {/* Division Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Apex-Accelerator Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            {/* Glowing Border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-transparent rounded-3xl blur-[20px] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            
            <a 
              href="https://apex-accelerator.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block relative h-full glass-panel rounded-3xl p-6 sm:p-10 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:border-primary/50"
              title="Visit external domain"
            >
              {/* Internal Background Image / GIF placeholder */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary">
                    <Users size={32} />
                  </div>
                  <ExternalLink size={24} className="text-body group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight">Apex-Accelerator</h3>
                <p className="text-body text-base sm:text-lg mb-6 sm:mb-8 flex-grow leading-relaxed">
                  Specialized in enterprise-grade CRM implementation and business process optimization. 
                  Streamlining client relationships at scale.
                </p>

                <div className="flex items-center text-primary font-semibold mt-auto">
                   Enter Division 
                   <motion.div className="ml-2" whileHover={{ x: 5 }}>→</motion.div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* ShiftDeploy Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative"
          >
             {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-bl from-primary to-transparent rounded-3xl blur-[20px] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            
            <a 
              href="https://shiftdeploy.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block relative h-full glass-panel rounded-3xl p-6 sm:p-10 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:border-primary/50"
              title="Visit external domain"
            >
              {/* Internal Background Image / GIF placeholder */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary">
                    <Code2 size={32} />
                  </div>
                  <ExternalLink size={24} className="text-body group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight">ShiftDeploy</h3>
                <p className="text-body text-base sm:text-lg mb-6 sm:mb-8 flex-grow leading-relaxed">
                  Your dedicated technical partner. 
                  Building high-performance, scalable solutions tailored to your business needs.
                </p>

                <div className="flex items-center text-primary font-semibold mt-auto">
                   Enter Division 
                   <motion.div className="ml-2" whileHover={{ x: 5 }}>→</motion.div>
                </div>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}