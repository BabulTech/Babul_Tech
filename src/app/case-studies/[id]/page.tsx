import { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate customized metadata for each dynamic case study page
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const study = caseStudies.find((cs) => cs.id === id);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} | BabulTech Case Studies`,
    description: `Enterprise transformation case study for ${study.clientName}. See how BabulTech achieved powerful ROI and architecture scaling.`,
    openGraph: {
      title: `${study.title} | BabulTech Case Studies`,
      description: `Enterprise transformation case study for ${study.clientName}. See how BabulTech achieved powerful ROI and architecture scaling.`,
      url: `/case-studies/${id}`,
      images: [
        {
          url: study.gifSrc || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: study.title,
        }
      ]
    },
  };
}

// Enable dynamic params for Next.js 15+ App Router
export default async function CaseStudyDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Find the matching case study by ID
  const study = caseStudies.find((cs) => cs.id === id);

  if (!study) {
    notFound(); // Triggers 404 page if not found
  }

  return (
    <div className="bg-background min-h-screen text-slate-300">
      {/* Dynamic Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-primary hover:text-primary mb-8 transition-colors group text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>

          <div className="flex items-center space-x-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
              {study.category}
            </span>
            <span className="text-slate-400 text-sm font-medium">{study.clientName}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight mb-8">
            {study.title}
          </h1>
        </div>

        {/* Feature Visual / GIF */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 aspect-video bg-slate-900 border border-slate-800">
            <div className="absolute inset-0 bg-primary/10 z-10 pointer-events-none mix-blend-overlay"></div>
            {/* Fallback image is handled directly via normal src if custom gifs don't exist yet */}
            <img 
              src={study.gifSrc || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"} 
              alt={study.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content & Architecture chunking */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Left Column: Stats (Quick scanning) */}
            <div className="md:col-span-1 border-r border-slate-800/50 pr-8">
              <h3 className="text-foreground font-semibold mb-6 flex items-center">
                Project Impact
              </h3>
              <div className="space-y-8">
                {study.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                        {stat.icon}
                      </div>
                      <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                    </div>
                    <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Narrative chunking */}
            <div className="md:col-span-2 space-y-12">
              
              {/* Problem Chunk */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                  The Deep Challenge
                </h2>
                <p className="text-slate-400 leading-relaxed text-lg mb-4">
                  {study.problem}
                </p>
                <p className="text-slate-400 leading-relaxed text-lg">
                  {study.extendedChallenge}
                </p>
              </div>

              {/* Solution Chunk */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                  Our Engineering Solution
                </h2>
                <p className="text-slate-400 leading-relaxed text-lg mb-4">
                  {study.solution}
                </p>
                <p className="text-slate-400 leading-relaxed text-lg mb-6">
                  {study.extendedSolution}
                </p>
                <ul className="space-y-4 bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                  {study.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(16,185,129,0.4)]" />
                      <span className="text-slate-300 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results Chunk */}
              <div className="pt-4">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-3 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                  The ROI & Result
                </h2>
                <p className="text-slate-300 font-medium leading-relaxed text-lg bg-emerald-950/10 border-l-4 border-primary p-6 rounded-r-2xl">
                  {study.results}
                </p>
              </div>


            </div>

          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-foreground mb-6">Ready for Similar Results?</h3>
          <p className="text-slate-400 mb-8 text-lg">
            Let us architect a certified, rapid resolution for your biggest technological roadblocks.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-foreground bg-primary hover:bg-primary rounded-xl transition-all duration-300 font-medium shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
