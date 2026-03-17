"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  website?: string;
  image: string;
  review: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Oren Falkovitz",
    role: "Climate Storyteller & Marketer",
    company: "Managed Hasan directly",
    website: "https://www.linkedin.com/in/oren-falkovitz/", // We can add their profile URL here once you provide it
    image: "https://media.licdn.com/dms/image/v2/D4E35AQE0RPai9xMnhQ/profile-framedphoto-shrink_200_200/B4EZu8.MOcKsAY-/0/1768401978556?e=1774386000&v=beta&t=WpNfRY7BbGQ3SoFMtVNEAtdKKD2VD49g5U6vHdoQu5U", // placeholder until we inject the real one
    review: "Hasan is a problem-solver. He helped our organization become more efficient. Whenever I went to Hasan with a request, he either had the answer or would research and propose a solution. He applied a user-first approach, prioritizing our users' experience and reducing manual work.",
    rating: 5
  },
  {
    name: "Faizan ul Haq",
    role: "Director of Marketing",
    company: "Bentham Science",
    website: "https://www.linkedin.com/in/faizanulhaq/",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQF_UG2HG36FWQ/profile-displayphoto-crop_800_800/B4DZpIXcfhGQAI-/0/1762150697906?e=1775088000&v=beta&t=u_eaaZETJgVcAEGPTGpugr_bZ6pNITZHJHkQI6EV3wg",
    review: "Hasan is a highly skilled professional with exceptional expertise, professionalism, and work ethic. He consistently produces high-quality work and is an excellent communicator who effectively conveys complex ideas to both technical and non-technical stakeholders.",
    rating: 5
  },
  {
    name: "Rehan Nayyer",
    role: "Director Salesforce Delivery",
    company: "Senior to Hasan",
    website: "https://www.linkedin.com/in/rnayyer/",
    image: "https://media.licdn.com/dms/image/v2/C5603AQFEYjBSQWoVKg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517673037478?e=1775088000&v=beta&t=h-yO-_oe6PlZB4PqbPJAKRA19S4iJwt1JYCik1qw0U0",
    review: "Hasan is an amazingly talented technical resource. His attention to details and best practices always separates him from the rest. He is a good listener, communicater, and never fails to pay attention to the business objective of problem solving.",
    rating: 5
  },
  {
    name: "Zain Askari",
    role: "SQA",
    company: "Paymentology",
    website: "https://www.linkedin.com/in/zain-askari-34904630/",
    image: "https://media.licdn.com/dms/image/v2/C5103AQF0wHg5BE9JkQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1558109097231?e=1775088000&v=beta&t=o-0aBUZ1P413pXV6UPluoAS-N12y1SQsgvNkjdmw2xk",
    review: "Hasan did an exceptional job on the TMS and Enablon SFA Implementation. Strong, honest and energetic team player. No matter how complex the problem is, he will always come up with a brilliant and elegant solution.",
    rating: 5
  }
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
      className="relative w-full h-[450px] rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 shadow-xl shadow-black/50 select-none group"
      onClick={() => setExpanded((v) => !v)}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`w-full h-full object-cover origin-top transition-transform duration-700 ease-out ${expanded ? "scale-110 opacity-20" : "opacity-50"}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-500 ${expanded ? "opacity-90" : "opacity-80"}`}></div>
      </div>

      {/* Content Container - Bottom aligned */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Visible Text */}
        <div className={`relative z-10 transform transition-transform duration-500 ease-out ${expanded ? "-translate-y-4" : ""}`}>
          <div className={`w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center p-1 mb-6 transition-all duration-500 ${expanded ? "opacity-100 -translate-y-2" : "opacity-0 translate-y-4"}`}>
            <Image src={testimonial.image} alt={testimonial.name} width={64} height={64} className="w-full h-full object-cover rounded-xl" />
          </div>

          <h3 className={`text-2xl font-bold text-foreground mb-1 transition-colors duration-300 ${expanded ? "text-primary" : ""}`}>{testimonial.name}</h3>
          <div className="flex items-center gap-1 flex-wrap">
            <span className={`font-medium tracking-wide text-sm uppercase transition-colors duration-300 ${expanded ? "text-body" : "text-primary"}`}>
              {testimonial.role} @ 
            </span>
            {testimonial.website ? (
              <a 
                href={testimonial.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`font-medium tracking-wide text-sm uppercase flex items-center gap-1 hover:underline transition-colors duration-300 ${expanded ? "text-primary" : "text-foreground"}`}
                onClick={(e) => e.stopPropagation()}
              >
                {testimonial.company} <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className={`font-medium tracking-wide text-sm uppercase transition-colors duration-300 ${expanded ? "text-body" : "text-primary"}`}>
                {testimonial.company}
              </span>
            )}
          </div>
        </div>

        {/* Hidden Content that slides up on tap/hover */}
        <div className={`relative z-10 grid transition-[grid-template-rows] duration-500 ease-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className={`overflow-hidden transition-opacity duration-500 delay-100 ${expanded ? "opacity-100" : "opacity-0"}`}>
            <div className="flex gap-1 mt-4 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? "text-primary fill-yellow-400" : "text-gray-600"}`} />
              ))}
            </div>
            <p className="text-body text-sm leading-relaxed mb-6 border-t border-white/10 pt-4 italic">
              &ldquo;{testimonial.review}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Mobile tap hint (shows only when collapsed) */}
      {!expanded && (
        <div className="absolute top-4 right-4 z-20 md:hidden px-2.5 py-1 rounded-full bg-black/50 border border-white/10 text-[11px] font-semibold text-body backdrop-blur-md">
          Tap to read
        </div>
      )}
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/20">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">Success Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body text-lg"
          >
            Discover how we&apos;ve helped enterprises scale, secure, and innovate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
