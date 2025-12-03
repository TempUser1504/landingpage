import { useState, useEffect } from "react";
import {
  GitBranch,
  GitMerge,
  Award,
  Code,
  Users,
  Briefcase,
  Clock,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Star,
  ArrowRight,
  Zap,
  Target,
  BookOpen,
  MessageSquare,
  Linkedin,
  Twitter,
  Send,
  GraduationCap,
  Globe,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-empire-violet/30 via-empire-dark to-empire-dark" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-empire-purple/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-empire-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-empire-lavender/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Floating code snippets */}
      <div className="absolute top-32 right-20 glass rounded-lg p-3 text-xs font-mono text-empire-cyan/70 animate-float hidden lg:block">
        <span className="text-empire-lavender">git</span> merge feature/auth
      </div>
      <div className="absolute bottom-40 left-20 glass rounded-lg p-3 text-xs font-mono text-empire-cyan/70 animate-float hidden lg:block" style={{ animationDelay: "3s" }}>
        <span className="text-green-400">✓</span> All tests passed
      </div>
      <div className="absolute top-48 left-32 glass rounded-lg p-3 text-xs font-mono text-empire-cyan/70 animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
        <span className="text-blue-400">JIRA</span> EMP-247 → In Review
      </div>
      <div className="absolute bottom-60 right-32 glass rounded-lg p-3 text-xs font-mono text-empire-cyan/70 animate-float hidden lg:block" style={{ animationDelay: "2.5s" }}>
        <span className="text-green-400">🚀</span> Deployed to production
      </div>
      <div className="absolute top-72 right-48 glass rounded-lg p-3 text-xs font-mono text-empire-cyan/70 animate-float hidden lg:block" style={{ animationDelay: "4s" }}>
        <span className="text-yellow-400">📋</span> Sprint 12 • Daily Standup
      </div>
      <div className="absolute bottom-32 left-48 glass rounded-lg p-3 text-xs font-mono text-empire-cyan/70 animate-float hidden lg:block" style={{ animationDelay: "5s" }}>
        <span className="text-purple-400">CI/CD</span> Pipeline passed
      </div>
      <div className="absolute top-96 left-16 glass rounded-lg p-3 text-xs font-mono text-empire-cyan/70 animate-float hidden lg:block" style={{ animationDelay: "3.5s" }}>
        <span className="text-empire-lavender">npm</span> run build ✓
      </div>
      <div className="absolute bottom-80 right-16 glass rounded-lg p-3 text-xs font-mono text-empire-cyan/70 animate-float hidden lg:block" style={{ animationDelay: "1.5s" }}>
        <span className="text-cyan-400">PR</span> #312 approved by @lead_dev
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-empire-cyan rounded-full animate-pulse" />
              <span className="text-empire-lavender">Applications Open for 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Get Your First{" "}
              <span className="gradient-text">Real Commercial Project</span>{" "}
              on Your CV in 10 Weeks
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl">
              Stop building to-do apps. Start shipping production code with real teams, 
              real deadlines, and a reference letter that actually means something.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-empire-cyan hover:bg-empire-cyan/90 text-empire-dark font-semibold px-8 py-6 text-lg glow-cyan animate-pulse-glow"
                onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass border-empire-lavender/30 hover:bg-empire-lavender/10 px-8 py-6 text-lg"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-empire-cyan">500+</div>
                <div className="text-sm text-gray-500">Students Placed</div>
              </div>
              <div className="w-px h-12 bg-empire-purple/30" />
              <div className="text-center">
                <div className="text-2xl font-bold text-empire-cyan">94%</div>
                <div className="text-sm text-gray-500">Job Success Rate</div>
              </div>
              <div className="w-px h-12 bg-empire-purple/30" />
              <div className="text-center">
                <div className="text-2xl font-bold text-empire-cyan">10</div>
                <div className="text-sm text-gray-500">Weeks Program</div>
              </div>
            </div>
          </div>

          {/* Right content - GitHub PR mockup */}
          <div className="relative hidden lg:block">
            <div className="glass rounded-2xl p-6 glow-purple">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-gray-400 font-mono">github.com/empire-studios/production-app</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GitMerge className="h-5 w-5 text-empire-purple" />
                  <span className="text-empire-lavender font-semibold">Pull Request #247</span>
                  <span className="glass px-2 py-1 rounded text-xs text-green-400">Merged</span>
                </div>
                
                <h3 className="text-xl font-semibold">feat: Add user authentication flow</h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    All checks passed
                  </span>
                  <span>+342 -89</span>
                </div>

                <div className="glass rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" 
                      alt="Reviewer" 
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-empire-cyan">@senior_dev</span>
                    <span className="text-gray-500">approved this PR</span>
                  </div>
                  <p className="text-sm text-gray-400 pl-8">
                    "Great work! Clean code, well-tested. Ready for production. 🚀"
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" 
                    alt="Author" 
                    className="w-6 h-6 rounded-full"
                  />
                  <span>Sarah (Empire Studios Intern)</span>
                  <span>merged 2 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  const problems = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Every Student Has a To-Do App",
      description: "Your portfolio looks like everyone else's. Employers can't tell you apart from 1000 other graduates.",
      solution: "We give you production code that ships to real users.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "No Team Experience",
      description: "You've never worked with senior engineers, handled code reviews, or dealt with merge conflicts.",
      solution: "Work alongside experienced developers who mentor you.",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "No Professional References",
      description: "Your professors can vouch for your grades, but not your ability to ship under pressure.",
      solution: "Leave with a reference letter from industry professionals.",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-empire-dark via-empire-violet/5 to-empire-dark" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="text-empire-cyan">Problem</span> With CS Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Universities teach algorithms. They don't teach you how to survive your first week at a real job.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-8 hover:bg-white/[0.12] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(107,33,168,0.3)] group"
            >
              <div className="text-empire-cyan mb-6 group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-gray-400 mb-4">{problem.description}</p>
              <div className="flex items-start gap-2 text-empire-lavender text-sm">
                <Zap className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{problem.solution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Journey Section
function JourneySection() {
  const weeks = [
    { week: "1-2", title: "Onboarding", description: "Git workflow, codebase tour, first PR", icon: <GitBranch className="h-6 w-6" /> },
    { week: "3-4", title: "First Feature", description: "Build and ship your first real feature", icon: <Code className="h-6 w-6" /> },
    { week: "5-6", title: "Code Reviews", description: "Learn from senior engineer feedback", icon: <MessageSquare className="h-6 w-6" /> },
    { week: "7-8", title: "Complex Tasks", description: "Handle multi-file, cross-team work", icon: <Target className="h-6 w-6" /> },
    { week: "9", title: "Final Project", description: "Lead a feature from start to finish", icon: <GitMerge className="h-6 w-6" /> },
    { week: "10", title: "Reference Letter", description: "Graduate with proof of your skills", icon: <Award className="h-6 w-6" /> },
  ];

  return (
    <section id="program" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-empire-violet/10 via-transparent to-empire-purple/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="gradient-text">10-Week Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A structured path from student to job-ready developer
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-empire-cyan via-empire-purple to-empire-lavender hidden lg:block" />

          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
            {weeks.map((item, index) => (
              <div 
                key={index}
                className={`relative ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:col-start-2'}`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-6 w-4 h-4 rounded-full bg-empire-cyan glow-cyan hidden lg:block ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`} />
                
                <div className="glass rounded-2xl p-6 hover:bg-white/[0.12] transition-all duration-300 group">
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="glass rounded-full p-3 text-empire-cyan group-hover:glow-cyan transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-empire-lavender text-sm font-semibold">Week {item.week}</span>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Breakdown Section
function BreakdownSection() {
  const features = [
    { icon: <Code className="h-8 w-8" />, title: "Real Production Code", description: "Work on live applications used by actual customers" },
    { icon: <Users className="h-8 w-8" />, title: "Team Collaboration", description: "Daily standups, code reviews, and pair programming" },
    { icon: <GitMerge className="h-8 w-8" />, title: "Git Workflow Mastery", description: "PRs, merge conflicts, CI/CD pipelines" },
    { icon: <MessageSquare className="h-8 w-8" />, title: "1:1 Mentorship", description: "Weekly sessions with senior engineers" },
    { icon: <BookOpen className="h-8 w-8" />, title: "Technical Writing", description: "Documentation, RFCs, and communication skills" },
    { icon: <Award className="h-8 w-8" />, title: "Reference Letter", description: "Detailed recommendation from your mentor" },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What You'll <span className="text-empire-cyan">Actually Learn</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Skills that matter in the real world, not just in interviews
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-6 hover:bg-white/[0.12] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(6,182,212,0.2)] group border border-white/5 hover:border-empire-cyan/30"
            >
              <div className="text-empire-cyan mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need prior work experience?",
      answer: "No! The Protocol is designed for CS students with strong fundamentals but no professional experience. If you can code, we'll teach you everything else.",
    },
    {
      question: "What tech stack will I work with?",
      answer: "Our projects use modern stacks including React, TypeScript, Node.js, and cloud services. We match you with projects that align with your interests and career goals.",
    },
    {
      question: "Is this a full-time commitment?",
      answer: "We require 20-25 hours per week. Most students balance this with their final year of studies. The schedule is flexible, but the deadlines are real.",
    },
    {
      question: "What if I can't afford the upfront payment?",
      answer: "We offer a deferred payment option where you pay nothing until you land a job. We believe in our program enough to bet on your success.",
    },
    {
      question: "Will I get a job after completing the program?",
      answer: "94% of our graduates receive job offers within 3 months. We provide career coaching, resume reviews, and direct introductions to our hiring partners.",
    },
    {
      question: "Is this available internationally?",
      answer: "Yes! We work with students globally. All collaboration happens remotely, just like real distributed engineering teams.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-empire-dark via-empire-purple/5 to-empire-dark" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-empire-cyan">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold flex items-center gap-3">
                  <span className="text-empire-cyan">Q:</span>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-empire-lavender flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-empire-lavender flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400 animate-in slide-in-from-top-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer @ Stripe",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      quote: "Empire Studios gave me the confidence to walk into interviews and actually talk about production experience. I went from 0 callbacks to 5 offers in 2 months.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Full Stack Developer @ Shopify",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      quote: "The mentorship was incredible. My mentor didn't just review my code—he taught me how to think like a senior engineer. That changed everything.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Backend Engineer @ Notion",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      quote: "I was skeptical about the deferred payment model, but they delivered. 6 weeks after graduating, I had a job that paid 3x what I expected.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Graduates Say</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`glass rounded-2xl p-8 md:p-12 transition-all duration-500 ${
                  index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 absolute inset-0 translate-y-4'
                }`}
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-empire-cyan text-empire-cyan" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-empire-cyan"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-empire-lavender text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-empire-cyan w-8' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const plans = [
    {
      name: "Deferred Payment",
      price: "€0",
      subtitle: "Pay when you get hired",
      description: "Start for free, pay 15% of your first year salary after landing a job",
      features: [
        "Full 10-week program access",
        "1:1 mentorship sessions",
        "Real production projects",
        "Reference letter",
        "Career coaching",
        "Job placement support",
      ],
      cta: "Apply Now",
      popular: true,
    },
    {
      name: "Upfront Payment",
      price: "€2,500",
      subtitle: "One-time payment",
      description: "Pay once, no strings attached",
      features: [
        "Full 10-week program access",
        "1:1 mentorship sessions",
        "Real production projects",
        "Reference letter",
        "Career coaching",
        "Priority project matching",
      ],
      cta: "Get Started",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-empire-dark via-empire-violet/10 to-empire-dark" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="text-empire-cyan">Transparent</span> Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We believe in our program. That's why we offer a pay-when-you-succeed option.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`glass rounded-2xl p-8 relative ${
                plan.popular ? 'border-2 border-empire-cyan glow-cyan' : 'border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-empire-cyan text-empire-dark px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-empire-cyan mb-1">{plan.price}</div>
                <div className="text-empire-lavender text-sm">{plan.subtitle}</div>
                <p className="text-gray-400 text-sm mt-4">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-empire-cyan flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-6 text-lg font-semibold ${
                  plan.popular 
                    ? 'bg-empire-cyan hover:bg-empire-cyan/90 text-empire-dark' 
                    : 'glass border-empire-lavender/30 hover:bg-empire-lavender/10'
                }`}
                onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-empire-violet/30 via-empire-purple/20 to-empire-violet/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Your <span className="gradient-text">Real-World Portfolio?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join 500+ CS students who transformed their careers with Empire Studios. 
            Applications for the next cohort close soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-empire-cyan hover:bg-empire-cyan/90 text-empire-dark font-semibold px-12 py-6 text-lg glow-cyan animate-pulse-glow"
              onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass border-empire-lavender/30 hover:bg-empire-lavender/10 px-12 py-6 text-lg"
            >
              Schedule a Call
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            <Clock className="inline h-4 w-4 mr-1" />
            Next cohort starts January 2025 • Limited spots available
          </p>
        </div>
      </div>
    </section>
  );
}

// Application Form Section
function ApplicationSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    university: "",
    graduationYear: "",
    degree: "",
    githubUrl: "",
    linkedinUrl: "",
    experience: "",
    motivation: "",
    paymentPreference: "",
    howDidYouHear: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="apply" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-empire-dark via-empire-violet/10 to-empire-dark" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass rounded-3xl p-12 md:p-16 text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-empire-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-empire-cyan" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
            <p className="text-gray-400 mb-6">
              Thank you for applying to Empire Studios. We'll review your application and get back to you within 48 hours.
            </p>
            <p className="text-empire-lavender text-sm">
              Check your email for a confirmation message.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-empire-dark via-empire-violet/10 to-empire-dark" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your <span className="gradient-text">Application</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take the first step towards real-world experience. Applications are reviewed within 48 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-12">
            {/* Personal Information */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Users className="h-5 w-5 text-empire-cyan" />
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-300">First Name *</Label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className="glass border-white/10 focus:border-empire-cyan bg-white/5"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-300">Last Name *</Label>
                  <Input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className="glass border-white/10 focus:border-empire-cyan bg-white/5"
                    placeholder="Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="glass border-white/10 focus:border-empire-cyan bg-white/5"
                    placeholder="john@university.edu"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="glass border-white/10 focus:border-empire-cyan bg-white/5"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-empire-cyan" />
                Education
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="university" className="text-gray-300">University / College *</Label>
                  <Input
                    id="university"
                    required
                    value={formData.university}
                    onChange={(e) => handleChange("university", e.target.value)}
                    className="glass border-white/10 focus:border-empire-cyan bg-white/5"
                    placeholder="MIT, Stanford, Trinity College Dublin..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-gray-300">Country *</Label>
                  <Input
                    id="country"
                    required
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    className="glass border-white/10 focus:border-empire-cyan bg-white/5"
                    placeholder="Ireland, USA, UK..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="degree" className="text-gray-300">Degree Program *</Label>
                  <Input
                    id="degree"
                    required
                    value={formData.degree}
                    onChange={(e) => handleChange("degree", e.target.value)}
                    className="glass border-white/10 focus:border-empire-cyan bg-white/5"
                    placeholder="BSc Computer Science"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="graduationYear" className="text-gray-300">Expected Graduation *</Label>
                  <Select onValueChange={(value) => handleChange("graduationYear", value)}>
                    <SelectTrigger className="glass border-white/10 focus:border-empire-cyan bg-white/5">
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent className="glass border-white/10 bg-empire-dark">
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                      <SelectItem value="2027">2027</SelectItem>
                      <SelectItem value="graduated">Already Graduated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Online Presence */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Globe className="h-5 w-5 text-empire-cyan" />
                Online Presence
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="githubUrl" className="text-gray-300">GitHub Profile *</Label>
                  <Input
                    id="githubUrl"
                    required
                    value={formData.githubUrl}
                    onChange={(e) => handleChange("githubUrl", e.target.value)}
                    className="glass border-white/10 focus:border-empire-cyan bg-white/5"
                    placeholder="https://github.com/username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedinUrl" className="text-gray-300">LinkedIn Profile</Label>
                  <Input
                    id="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={(e) => handleChange("linkedinUrl", e.target.value)}
                    className="glass border-white/10 focus:border-empire-cyan bg-white/5"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
              </div>
            </div>

            {/* Experience & Motivation */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <FileText className="h-5 w-5 text-empire-cyan" />
                Experience & Motivation
              </h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-gray-300">
                    Tell us about your coding experience *
                  </Label>
                  <Textarea
                    id="experience"
                    required
                    value={formData.experience}
                    onChange={(e) => handleChange("experience", e.target.value)}
                    className="glass border-white/10 focus:border-empire-cyan bg-white/5 min-h-[120px]"
                    placeholder="What languages/frameworks do you know? Any personal projects? Hackathons? Open source contributions?"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="motivation" className="text-gray-300">
                    Why do you want to join Empire Studios? *
                  </Label>
                  <Textarea
                    id="motivation"
                    required
                    value={formData.motivation}
                    onChange={(e) => handleChange("motivation", e.target.value)}
                    className="glass border-white/10 focus:border-empire-cyan bg-white/5 min-h-[120px]"
                    placeholder="What are your career goals? What do you hope to gain from this program?"
                  />
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Target className="h-5 w-5 text-empire-cyan" />
                Preferences
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-gray-300">Payment Preference *</Label>
                  <Select onValueChange={(value) => handleChange("paymentPreference", value)}>
                    <SelectTrigger className="glass border-white/10 focus:border-empire-cyan bg-white/5">
                      <SelectValue placeholder="Select payment option" />
                    </SelectTrigger>
                    <SelectContent className="glass border-white/10 bg-empire-dark">
                      <SelectItem value="deferred">Deferred (Pay when hired)</SelectItem>
                      <SelectItem value="upfront">Upfront (€2,500)</SelectItem>
                      <SelectItem value="undecided">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300">How did you hear about us?</Label>
                  <Select onValueChange={(value) => handleChange("howDidYouHear", value)}>
                    <SelectTrigger className="glass border-white/10 focus:border-empire-cyan bg-white/5">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="glass border-white/10 bg-empire-dark">
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="twitter">Twitter/X</SelectItem>
                      <SelectItem value="friend">Friend/Referral</SelectItem>
                      <SelectItem value="university">University</SelectItem>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-6 border-t border-white/10">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-empire-cyan hover:bg-empire-cyan/90 text-empire-dark font-semibold py-6 text-lg glow-cyan"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-empire-dark/30 border-t-empire-dark rounded-full animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
              <p className="text-gray-500 text-sm text-center mt-4">
                By submitting, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Empire Studios</h3>
            <p className="text-gray-400 max-w-md">
              Turning computer science students into junior developers that companies actually want to hire.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="glass p-3 rounded-full hover:bg-white/10 transition-colors">
                <Linkedin className="h-5 w-5 text-empire-cyan" />
              </a>
              <a href="#" className="glass p-3 rounded-full hover:bg-white/10 transition-colors">
                <Twitter className="h-5 w-5 text-empire-cyan" />
              </a>
              <a href="#" className="glass p-3 rounded-full hover:bg-white/10 transition-colors">
                <MessageSquare className="h-5 w-5 text-empire-cyan" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-empire-lavender">Program</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Curriculum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-empire-lavender">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Empire Studios. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Landing Page Component
export default function EmpireLanding() {
  return (
    <div className="min-h-screen bg-empire-dark text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold gradient-text">Empire Studios</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#program" className="text-gray-300 hover:text-white transition-colors">Program</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Success Stories</a>
          </div>
          <Button 
            className="bg-empire-cyan hover:bg-empire-cyan/90 text-empire-dark font-semibold"
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Apply Now
          </Button>
        </div>
      </nav>

      <main>
        <HeroSection />
        <ProblemSection />
        <JourneySection />
        <BreakdownSection />
        <TestimonialsSection />
        <FAQSection />
        <PricingSection />
        <ApplicationSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
