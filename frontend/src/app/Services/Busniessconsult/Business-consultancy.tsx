"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SpotlightCard from "@/components/SpotlightCard";
import {
  Briefcase,
  Target,
  TrendingUp,
  DollarSign,
  Users,
  BarChart3,
  Lightbulb,
  Building2,
  Handshake,
  Rocket,
  CheckCircle2,
  PieChart,
  Zap
} from 'lucide-react';

const businessConsultancyServices = [
  {
    title: "Strategic Business Planning",
    description: "Develop comprehensive business strategies aligned with your vision. We analyze market trends, competitive landscape, and design actionable roadmaps for sustainable growth.",
    icon: Target,
    features: ["Market Analysis", "Business Model Design", "Strategic Roadmap", "Competitive Positioning"]
  },
  {
    title: "Financial Advisory & Planning",
    description: "Optimize your financial performance with expert guidance on budgeting, forecasting, and investment strategies. Maximize profitability and ensure sustainable financial health.",
    icon: DollarSign,
    features: ["Financial Analysis", "Budget Planning", "Investment Strategy", "Cash Flow Optimization"]
  },
  {
    title: "Organizational Development",
    description: "Transform your organizational structure for maximum efficiency. We help design teams, processes, and culture that drive productivity and employee engagement.",
    icon: Building2,
    features: ["Organizational Design", "Change Management", "Culture Transformation", "Talent Strategy"]
  },
  {
    title: "Market Research & Analysis",
    description: "Make data-driven decisions with comprehensive market insights. Understand customer behavior, market trends, and identify growth opportunities.",
    icon: BarChart3,
    features: ["Market Research", "Customer Analysis", "Trend Identification", "Opportunity Assessment"]
  },
  {
    title: "Business Process Optimization",
    description: "Streamline operations and eliminate inefficiencies. We analyze your processes and implement best practices to reduce costs and improve quality.",
    icon: Rocket,
    features: ["Process Analysis", "Workflow Optimization", "Quality Improvement", "Cost Reduction"]
  },
  {
    title: "Partnership & Alliances",
    description: "Build strategic partnerships that accelerate growth. We help identify, negotiate, and manage alliances that create mutual value and expand market reach.",
    icon: Handshake,
    features: ["Partnership Strategy", "Alliance Development", "Joint Ventures", "Channel Partnerships"]
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description: "Increase revenue by up to 40% through strategic planning and market expansion strategies"
  },
  {
    icon: Zap,
    title: "Operational Excellence",
    description: "Improve efficiency and reduce operational costs with optimized processes and workflows"
  },
  {
    icon: Users,
    title: "Expert Advisory",
    description: "Access to senior business consultants with 15+ years of industry experience"
  },
  {
    icon: CheckCircle2,
    title: "Risk Management",
    description: "Proactive identification and mitigation of business risks before they impact operations"
  }
];

function BusinessConsultancyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center mb-6">
              <Briefcase className="w-12 h-12 text-blue-500 mr-3" />
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-100">
                Business Consultancy
              </h1>
            </div>
            <p className="mt-6 text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses to achieve their goals through strategic insights and proven methodologies. 
              We transform challenges into opportunities for sustainable growth.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
            {businessConsultancyServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <SpotlightCard
                    spotlightColor="rgba(18, 51, 157, 0.94)"
                    className="group relative h-full flex flex-col bg-white dark:bg-neutral-900 backdrop-blur-lg rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl dark:shadow-black/30 transition-all duration-500 hover:border-slate-300 dark:hover:border-white/20 hover:scale-105 hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(196,181,253,0.15),transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <CardHeader className="flex flex-col z-20 items-start space-y-4 pt-8 px-6">
                      <div className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-neutral-800">
                        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle className="text-xl z-20 font-semibold text-slate-900 dark:text-slate-100">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-grow z-20 pb-6 px-6">
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-xs text-slate-500 dark:text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Why Choose Our Business Consultancy?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We deliver measurable results that drive business growth and operational excellence
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:shadow-lg transition-shadow"
                >
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 w-fit mb-4">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Let's discuss how our business consultancy services can drive growth and success for your organization.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default BusinessConsultancyPage;