import React from "react";
import { BarChart3, Lock, Rocket, Server, Code, Database } from "lucide-react";

export interface CaseStudy {
  id: string;
  clientName: string;
  category: string;
  title: string;
  problem: string;
  solution: string;
  extendedChallenge: string;
  extendedSolution: string;
  points: string[];
  results: string;
  stats: {
    value: string;
    label: string;
    icon: React.ReactNode;
  }[];
  gifSrc: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-01",
    clientName: "GlobalFin Corp",
    category: "Infrastructure Scaling",
    title: "Eliminating Legacy Bottlenecks for a Fortune 500 Bank",
    problem: "Outdated on-premise infrastructure created severe operational friction, leading to unacceptable transaction latency and a staggering 40% YoY surge in maintenance overhead.",
    solution: "Engineered a robust hybrid-cloud architecture, strategically decoupling legacy monoliths into agile microservices while deploying fully automated CI/CD pipelines to ensure zero-downtime releases.",
    extendedChallenge: "GlobalFin Corp was struggling under the weight of a decade-old on-premise infrastructure. As their transaction volume scaled, their monolithic backend began experiencing frequent timeout errors, resulting in frustrated clients and massive SLA penalties. Internal developer teams spent 60% of their time 'putting out fires' instead of building new features. The company urgently needed a way to modernize without a single second of downtime.",
    extendedSolution: "BabulTech stepped in as a strategic technical partner. We didn't just 'lift and shift'; we ran a deep architectural audit and rebuilt the core systems. We transitioned their monolithic codebase into domain-specific microservices using Docker and Kubernetes, deployed over AWS. We also instituted strict Infrastructure as Code (IaC) protocols via Terraform, guaranteeing that future environments could be spun up or down instantly based on live traffic demands.",
    points: [
      "Containerized 15+ monolithic application cores.",
      "Implemented auto-scaling groups to handle massive Black Friday-level transaction spikes securely.",
      "Re-engineered their deployment pipeline (CI/CD), reducing release times from 2 weeks to 4 hours."
    ],
    results: "Within 6 months of implementation, GlobalFin Corp experienced zero unplanned downtime. They drastically cut their server maintenance costs by 40% and reclaimed thousands of developer hours previously wasted on manual deployments.",
    stats: [
      { value: "99.99%", label: "Uptime SLA Achieved", icon: <Server className="w-5 h-5 text-primary" /> },
      { value: "3x", label: "Faster Deployment Cycles", icon: <Rocket className="w-5 h-5 text-primary" /> },
    ],
    gifSrc: "/case-study-1-animation.svg"
  },
  {
    id: "cs-02",
    clientName: "HealthTech Innovations",
    category: "Cybersecurity & Compliance",
    title: "Securing PHI Data Across 50+ Healthcare Facilities",
    problem: "Fragmented identity management and exposed endpoints left massive amounts of sensitive health records severely vulnerable to advanced ransomware and data exfiltration.",
    solution: "Instituted a comprehensive zero-trust security framework, deploying unified Identity and Access Management (IAM) alongside autonomous, AI-driven threat detection protocols.",
    extendedChallenge: "With over 50 regional hospitals brought into the fold via rapid acquisitions, HealthTech Innovations faced a disjointed, chaotic IT landscape. Clinicians shared login credentials, unauthorized devices were routinely connecting to sensitive subnets, and an external audit flagged severe HIPAA compliance violations. A single breach could have resulted in tens of millions of dollars in fines.",
    extendedSolution: "We executed an aggressive 'Zero Trust' network overhaul. We replaced legacy VPNs with a secure, identity-aware access gateway that authenticated both the user and the device health before granting access. We deployed AI-driven threat detection across all endpoints to automatically quarantine anomalous behavior in milliseconds, effectively halting lateral movement during ransomware attempts.",
    points: [
      "Deployed role-based access control (RBAC) preventing unauthorized PHI viewings.",
      "Implemented a unified Single Sign-On (SSO) increasing clinician login speed while raising security.",
      "Configured automated, encrypted backups of all databases off-site to ensure business continuity."
    ],
    results: "Post-deployment, HealthTech successfully passed three independent security audits with zero critical findings. Threat resolution time dropped by 60%, and they have experienced zero data breaches to date.",
    stats: [
      { value: "0", label: "Breaches Post-Deployment", icon: <Lock className="w-5 h-5 text-primary" /> },
      { value: "-60%", label: "Threat Resolution Time", icon: <BarChart3 className="w-5 h-5 text-primary" /> },
    ],
    gifSrc: "/case-study-2-animation.svg"
  },
  {
    id: "cs-03",
    clientName: "RetailFlow Systems",
    category: "CRM Implementation",
    title: "Unified Customer Intelligence & Revenue Recovery",
    problem: "Disjointed data across 4 legacy platforms blinded sales teams, creating a massive bottleneck that resulted in a 35% customer churn rate and millions in lost up-sells.",
    solution: "Executed a hyper-customized deployment of our proprietary Apex-Accelerator CRM, seamlessly migrating 2.4 million legacy records and instituting automated, predictive follow-up engines.",
    extendedChallenge: "RetailFlow's massive sales team was operating blind. They were jumping between four different software tools to log calls, manage inventory, handle support tickets, and process payments. This data fragmentation caused representatives to double-call leads, miss critical customer complaints, and fail to identify massive upsell opportunities, leading to a crippling 35% customer churn rate.",
    extendedSolution: "We deployed a deeply customized instance of Apex-Accelerator CRM tailored specifically to RetailFlow's operational mechanics. We built custom API bridges to pull legacy data, migrating 2.4 million records without data loss. We then instituted automated workflows—when a customer engaged with support, sales was instantly notified contextually, ensuring cross-department intelligence.",
    points: [
      "Centralized 4 fragmented platforms into a single, intuitive dashboard.",
      "Developed automated trigger-based email and SMS follow-up sequences.",
      "Created a robust manager analytics dashboard detailing live performance metrics per rep."
    ],
    results: "By giving the sales team a complete 360-degree view of every client alongside automated outreach, RetailFlow immediately saw a massive +45% boost in sales conversions, while each rep saved roughly 120 hours of manual data entry per month.",
    stats: [
      { value: "+45%", label: "Boost in Sales Conversions", icon: <Database className="w-5 h-5 text-primary" /> },
      { value: "120hrs", label: "Reclaimed Monthly per Rep", icon: <BarChart3 className="w-5 h-5 text-primary" /> },
    ],
    gifSrc: "/case-study-3-animation.svg"
  },
  {
    id: "cs-04",
    clientName: "Logistics Pro",
    category: "Technical Partnership",
    title: "Real-Time Fleet Tracking & Analytics Command Center",
    problem: "Manual, spreadsheet-reliant dispatching crippled logistics scaling, resulting in critical operational blind spots, rampant fuel waste, and prolonged delivery delays.",
    solution: "Designed and deployed a high-performance ShiftDeploy technical ecosystem utilizing React and Node.js with WebSockets to deliver real-time geolocation tracking and predictive maintenance.",
    extendedChallenge: "Logistics Pro attempted to manage a fleet of 10,000+ commercial vehicles using a localized tracking system combined with Excel spreadsheets. The severe latency in location data meant dispatchers couldn't optimize routes for traffic or weather effectively. Worse, lack of telemetry meant trucks were breaking down mid-route unexpectedly, skyrocketing fuel and repair costs.",
    extendedSolution: "Operating as an embedded technical partner via ShiftDeploy, we designed a custom cloud-based command center from scratch. Recognizing the need for lightning-fast data, we utilized Node.js with WebSockets for instantaneous bidirectional data transmission. We built a high-performance React frontend that could render 15,000 active nodes on a map concurrently without UI lag, integrating directly with vehicle IoT telemetry devices.",
    points: [
      "Engineered real-time GPS fleet tracking utilizing WebSocket architectures.",
      "Integrated IoT telemetry APIs to pull live diagnostics (engine heat, tire pressure).",
      "Created an AI-driven routing algorithm to dynamically bypass severe traffic bottlenecks."
    ],
    results: "Logistics Pro gained absolute granular control over their fleet. Through intelligent dynamic routing and preventative maintenance alerts, they reduced aggregate fuel consumption costs by 22% across 10,000 vehicles, recovering millions of dollars annually.",
    stats: [
      { value: "10,000+", label: "Active Vehicles Tracked", icon: <Code className="w-5 h-5 text-primary" /> },
      { value: "-22%", label: "Reduction in Fuel Costs", icon: <BarChart3 className="w-5 h-5 text-primary" /> },
    ],
    gifSrc: "/case-study-4-animation.svg"
  }
];