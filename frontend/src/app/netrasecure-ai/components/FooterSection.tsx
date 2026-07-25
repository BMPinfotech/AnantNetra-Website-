"use client";

import { Shield, Sparkles, ArrowRight, Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="relative w-full bg-slate-50 dark:bg-[#030712] pt-20 pb-10 overflow-hidden text-white border-t border-slate-200 dark:border-white/10">
      {/* Background Ambient Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Top Final Banner CTA */}
        <div className="relative rounded-3xl border border-cyan-200 bg-white dark:border-cyan-500/30 dark:bg-linear-to-b dark:from-slate-900/80 dark:to-slate-950/90 p-8 md:p-14 text-center backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.15)] mb-20 max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 mb-6">
            <Sparkles className="w-3.5 h-3.5" /> TAKE CONTROL OF YOUR CYBER SAFETY
          </span>

          <h2 className="bg-linear-to-r from-cyan-600 via-blue-600 to-indigo-700 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-200 bg-clip-text text-3xl font-extrabold text-transparent md:text-5xl leading-tight">
            Ready to Stay Secure?
          </h2>

          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 md:text-base leading-relaxed max-w-xl mx-auto">
            Join thousands of users protecting their personal data, financial accounts, and digital identities with NetraSecure AI.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white dark:bg-cyan-500 dark:text-black font-bold text-sm shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:bg-blue-700 dark:hover:bg-cyan-400 transition-all duration-300 hover:scale-105"
            >
              <span>Get Protection Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Navigation Grid */}
        {/* <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 pb-12 border-b border-white/10 text-xs md:text-sm">
          
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Shield className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
                NetraSecure AI
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-6">
              AI-powered real-time cyber protection guard for individuals, students, employees, and enterprises.
            </p>
           
            <div className="flex items-center gap-3 text-slate-400">
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-white/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-white/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-white/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-white/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

         
          <div>
            <h3 className="font-bold text-white mb-4">Product</h3>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Key Features</a></li>
              <li><a href="#scanner" className="hover:text-cyan-400 transition-colors">URL Scanner</a></li>
              <li><a href="#cyber-learn" className="hover:text-cyan-400 transition-colors">Cyber Learn</a></li>
              <li><a href="#emergency" className="hover:text-cyan-400 transition-colors">Emergency Help</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-bold text-white mb-4">Who It's For</h3>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#industries" className="hover:text-cyan-400 transition-colors">Personal Users</a></li>
              <li><a href="#industries" className="hover:text-cyan-400 transition-colors">Students</a></li>
              <li><a href="#industries" className="hover:text-cyan-400 transition-colors">SMEs & Startups</a></li>
              <li><a href="#industries" className="hover:text-cyan-400 transition-colors">Enterprises</a></li>
            </ul>
          </div>

       
          <div>
            <h3 className="font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

        </div>  */}

        {/* Bottom Copyright */}
        {/* <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NetraSecure AI. All rights reserved.</p>
          <p>Developed by <span className="text-slate-300 font-semibold">AnantNetra Technologies</span></p>
        </div> */}

      </div>
    </footer>
  );
}