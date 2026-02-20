import { useState, useEffect, useRef } from "react";
import {
  BookOpen, Users, Compass, Heart, Target, TrendingUp, GraduationCap,
  Rocket, ArrowRight, Zap, Award, Globe, Lock, Sparkles, CheckCircle2,
  Code, Brain, Bot, BarChart2, Palette, Shield, Star, ChevronRight,
  BadgeCheck, Mail
} from "lucide-react";
import confetti from "canvas-confetti";

/* ─── DATA ──────────────────────────────────────── */
const skills = [
  "Web Development", "UI/UX Design", "Data Analytics", "Digital Marketing",
  "Product Management", "Mobile Development", "Artificial Intelligence (AI)",
  "Machine Learning", "Cybersecurity", "Cloud Computing", "Blockchain & Web3",
  "Video Editing & Motion Graphics", "Graphic Design", "Content Writing & Copywriting",
  "Project Management", "Business Analysis", "DevOps & Automation",
  "Game Development", "3D Modeling & Animation", "Photography & Videography",
];

const stats = [
  { value: "500+", label: "Waitlist Signups", icon: Users },
  { value: "20+", label: "Skill Tracks", icon: BookOpen },
  { value: "98%", label: "Satisfaction Rate", icon: Star },
  { value: "50", label: "Spots / Cohort", icon: Target },
];

const features = [
  {
    icon: Code, gradient: "from-blue-500 to-cyan-400",
    title: "Hands-On Learning",
    desc: "No fluff. Every lesson is built around real-world skills you can apply immediately to projects and careers."
  },
  {
    icon: Users, gradient: "from-violet-500 to-purple-400",
    title: "Expert Mentorship",
    desc: "Learn alongside experienced mentors who've walked the path and are invested in your success."
  },
  {
    icon: Compass, gradient: "from-emerald-500 to-green-400",
    title: "Clear Roadmaps",
    desc: "Structured paths so you always know what to learn next, why it matters, and where it leads."
  },
  {
    icon: Heart, gradient: "from-pink-500 to-rose-400",
    title: "Tight Community",
    desc: "A private community of driven learners who collaborate, share wins, and lift each other up."
  },
];

const idealLearner = [
  { icon: Target, text: "You want practical skills that translate to real-world impact" },
  { icon: TrendingUp, text: "You're committed to consistent growth and putting in the effort" },
  { icon: Users, text: "You thrive in collaborative environments with mentorship" },
  { icon: Rocket, text: "You're building towards a meaningful career or skill upgrade" },
  { icon: GraduationCap, text: "You value structured learning with clear milestones" },
  { icon: Zap, text: "You're ready to take action, not just consume content" },
];

const fireConfetti = () => {
  const colors = ["#2a9d8f", "#e9c46a", "#f4a261", "#e76f51", "#264653", "#00b4d8"];
  const end = Date.now() + 4000;
  (function frame() {
    confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0, y: 0.7 }, colors });
    confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1, y: 0.7 }, colors });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
  setTimeout(() => confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 }, colors }), 200);
};

/* ─── ANIMATED COUNTER ──────────────────────────── */
function CountUp({ target }: { target: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const num = parseInt(target.replace(/\D/g, ""));
    if (!num) { setDisplay(target); return; }
    const suffix = target.replace(/[\d]/g, "");
    let start = 0;
    const step = Math.ceil(num / 40);
    const timer = setInterval(() => {
      start = Math.min(start + step, num);
      setDisplay(start + suffix);
      if (start >= num) clearInterval(timer);
    }, 35);
    return () => clearInterval(timer);
  }, [target]);

  return <span ref={ref}>{display}</span>;
}

/* ─── TICKER ────────────────────────────────────── */
function SkillTicker() {
  const items = [...skills, ...skills];
  return (
    <div className="relative overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex gap-3 animate-[ticker_40s_linear_infinite]" style={{ width: "max-content" }}>
        {items.map((s, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 whitespace-nowrap backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {s}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ─── MAIN COMPONENT ────────────────────────────── */
export default function Index() {
  const [formData, setFormData] = useState({ name: "", email: "", skill: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.skill) {
      setSubmitted(true);
    }
  };

  useEffect(() => {
    if (submitted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => fireConfetti(), 500);
    }
  }, [submitted]);

  /* ── Success State ── */
  if (submitted) {
    return (
      <div className="min-h-screen bg-[#080b12] flex items-center justify-center px-4 relative overflow-hidden">
        {/* BG glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-lg w-full">
          {/* Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur-xl text-center shadow-2xl">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-emerald-400 shadow-xl shadow-primary/30">
              <Award className="h-10 w-10 text-white" />
            </div>

            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              <Sparkles className="h-3 w-3" /> You're In
            </div>

            <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Welcome, {formData.name.split(" ")[0]}! 🎉
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
              You've successfully joined the VMT Academy waitlist. We'll review your application and reach out soon.
            </p>

            {/* Summary card */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-left space-y-3">
              {[
                { label: "Name", value: formData.name },
                { label: "Email", value: formData.email },
                { label: "Track Interest", value: formData.skill },
              ].map((row, i) => (
                <div key={i}>
                  {i > 0 && <div className="h-px bg-white/10" />}
                  <div className="flex items-center justify-between pt-3 first:pt-0 text-sm">
                    <span className="text-white/40">{row.label}</span>
                    <span className="font-semibold text-white max-w-[60%] text-right truncate">{row.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Perks */}
            <div className="mt-6 rounded-2xl border border-primary/25 bg-primary/10 p-4 text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">As a Founding Member You Get</p>
              {["Priority cohort access", "Exclusive founding-member pricing", "Direct line to founders & mentors"].map((p) => (
                <div key={p} className="flex items-center gap-2 py-1">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                  <span className="text-xs text-white/70">{p}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-white/30">
              Watch <span className="text-white/60 font-medium">{formData.email}</span> for next steps
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* ── Main Page ── */
  return (
    <div className="min-h-screen bg-[#080b12] text-white overflow-x-hidden">

      {/* ── Global bg grid pattern ── */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#080b12]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-emerald-400 shadow-lg shadow-primary/30">
              <GraduationCap className="h-4.5 w-4.5 text-white" />
            </div>
            <span className="font-black text-base tracking-tight text-white sm:text-lg">
              VMT <span className="text-primary">Academy</span>
            </span>
          </div>

          <button
            onClick={scrollToForm}
            className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:-translate-y-0.5 sm:text-sm"
          >
            Join Waitlist <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-5 pt-24 pb-16 sm:px-8">
        {/* Hero glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-primary/8 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-violet-500/8 blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary mb-8"
            style={{ animation: "fadeUp 0.6s ease both" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Now Accepting Early Access
          </div>

          {/* Headline */}
          <h1
            className="font-black text-4xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl mb-6"
            style={{ animation: "fadeUp 0.6s 0.1s ease both" }}
          >
            Learn Skills That Open{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Real Doors
              </span>
              {/* underline deco */}
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
                <path d="M0 5 Q100 0 200 5" stroke="url(#ug)" strokeWidth="2" fill="none" />
                <defs>
                  <linearGradient id="ug" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--primary)" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p
            className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-lg"
            style={{ animation: "fadeUp 0.6s 0.2s ease both" }}
          >
            VMT Academy is a private, cohort-based learning platform built around
            real-world skill mastery, expert mentorship, and a community that
            actually pushes you forward.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            style={{ animation: "fadeUp 0.6s 0.3s ease both" }}
          >
            <button
              onClick={scrollToForm}
              className="group flex items-center gap-2.5 rounded-2xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-primary/30 transition-all hover:-translate-y-1 hover:shadow-primary/50 sm:px-10 sm:py-5 sm:text-base w-full sm:w-auto justify-center"
            >
              Join the Waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="flex items-center gap-2 text-xs text-white/40 sm:text-sm">
              <Lock className="h-3.5 w-3.5" />
              Only 50 spots per cohort
            </div>
          </div>

          {/* Social proof avatars */}
          <div className="mt-10 flex items-center justify-center gap-3" style={{ animation: "fadeUp 0.6s 0.4s ease both" }}>
            <div className="flex -space-x-2">
              {["A", "C", "I", "M", "T"].map((l, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#080b12] text-[10px] font-bold text-white"
                  style={{ background: `hsl(${i * 50 + 160}, 60%, 45%)` }}
                >
                  {l}
                </div>
              ))}
            </div>
            <span className="text-xs text-white/50">
              <span className="font-bold text-white">500+</span> people already on the waitlist
            </span>
          </div>
        </div>

        {/* Skill ticker */}
        <div className="relative z-10 w-full max-w-4xl mt-14" style={{ animation: "fadeUp 0.6s 0.5s ease both" }}>
          <p className="text-center text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">
            20+ Skill Tracks Available
          </p>
          <SkillTicker />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/5 bg-white/2 py-10">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-white/5 bg-white/3 p-5 text-center transition-all hover:border-primary/30 hover:bg-primary/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-black text-2xl text-white sm:text-3xl">
                  <CountUp target={s.value} />
                </span>
                <span className="text-[11px] text-white/40 sm:text-xs">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY VMT ── */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* Header */}
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/50">
              Why Choose Us
            </div>
            <h2 className="font-black text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Built Different,{" "}
              <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Designed to Deliver
              </span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
              We're building an academy that prioritizes real outcomes over paper credentials.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/15 hover:shadow-2xl hover:shadow-black/40"
              >
                {/* top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${f.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.gradient} shadow-lg`}>
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-2 font-bold text-base text-white">{f.title}</h3>
                <p className="text-xs leading-relaxed text-white/50">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="py-20 sm:py-28 lg:py-36 relative">
        {/* bg accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left text */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/50">
                Our Ideal Learner
              </div>
              <h2 className="font-black text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl mb-5">
                Built for Serious{" "}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Learners
                </span>
              </h2>
              <p className="text-sm leading-relaxed text-white/50 sm:text-base mb-8">
                VMT Academy is for people ready to invest in themselves. Not passive consumers — committed builders.
              </p>
              <button
                onClick={scrollToForm}
                className="group flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-primary/20 w-fit"
              >
                That's Me — Apply Now <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              {idealLearner.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/3 p-4 transition-all hover:border-white/15 hover:bg-white/5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-xs leading-relaxed text-white/60 pt-1.5">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SCARCITY BANNER ── */}
      <section className="py-6 border-y border-white/5">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 sm:p-6">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20">
                <Lock className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Limited to 50 Spots Per Cohort</p>
                <p className="text-xs text-white/40">Small cohorts = real attention, real results</p>
              </div>
            </div>
            <button
              onClick={scrollToForm}
              className="shrink-0 rounded-xl bg-amber-500 px-6 py-2.5 text-xs font-bold text-black transition-all hover:bg-amber-400 w-full sm:w-auto"
            >
              Secure My Spot →
            </button>
          </div>
        </div>
      </section>

      {/* ── WAITLIST FORM ── */}
      <section id="waitlist-form" className="py-20 sm:py-28 lg:py-36 relative">
        {/* bg glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/6 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-xl px-5 sm:px-8">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary">
              <Globe className="h-3 w-3" /> Apply Now
            </div>
            <h2 className="font-black text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Request Early Access
            </h2>
            <p className="mt-3 text-sm text-white/50 sm:text-base leading-relaxed">
              Join the waitlist and be among the first to experience VMT Academy's transformative learning.
            </p>
          </div>

          {/* Form card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/40">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/50">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={`w-full rounded-xl border px-5 py-4 text-sm text-white placeholder:text-white/20 bg-white/5 outline-none transition-all ${
                    focused === "name"
                      ? "border-primary/60 bg-primary/5 shadow-[0_0_0_3px_rgba(42,157,143,0.15)]"
                      : "border-white/10 hover:border-white/20"
                  }`}
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/50">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/25" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={`w-full rounded-xl border px-5 py-4 pl-11 text-sm text-white placeholder:text-white/20 bg-white/5 outline-none transition-all ${
                      focused === "email"
                        ? "border-primary/60 bg-primary/5 shadow-[0_0_0_3px_rgba(42,157,143,0.15)]"
                        : "border-white/10 hover:border-white/20"
                    }`}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Skill */}
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/50">
                  Skill of Interest
                </label>
                <select
                  required
                  value={formData.skill}
                  onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
                  onFocus={() => setFocused("skill")}
                  onBlur={() => setFocused(null)}
                  className={`w-full rounded-xl border px-5 py-4 text-sm bg-white/5 outline-none transition-all appearance-none cursor-pointer ${
                    focused === "skill"
                      ? "border-primary/60 bg-primary/5 shadow-[0_0_0_3px_rgba(42,157,143,0.15)] text-white"
                      : "border-white/10 hover:border-white/20 text-white/60"
                  } ${formData.skill ? "text-white" : ""}`}
                >
                  <option value="" className="bg-[#0f1520] text-white/50">Select a skill track</option>
                  {skills.map((s) => (
                    <option key={s} value={s} className="bg-[#0f1520] text-white">{s}</option>
                  ))}
                </select>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/5" />

              {/* Submit */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-xl bg-primary py-4 text-sm font-bold text-white shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-primary/50 sm:text-base"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Request Early Access
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                {/* shimmer */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700" />
              </button>

              <p className="text-center text-xs text-white/25">
                <Lock className="inline h-3 w-3 mr-1 -mt-0.5" />
                Not everyone is accepted — we review each application carefully.
              </p>
            </form>
          </div>

          {/* Trust indicators */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { icon: BadgeCheck, text: "Verified Mentors" },
              { icon: Shield, text: "Private & Secure" },
              { icon: Star, text: "98% Satisfaction" },
            ].map((t, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 rounded-xl border border-white/5 bg-white/3 p-3 text-center">
                <t.icon className="h-4 w-4 text-primary" />
                <span className="text-[10px] text-white/40">{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-5 py-2 text-xs font-bold text-amber-400">
            <Lock className="h-3.5 w-3.5" /> Limited Availability
          </div>
          <h2 className="font-black text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl mb-6">
            Small Cohorts.{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Big Results.
            </span>
          </h2>
          <p className="text-sm leading-relaxed text-white/50 sm:text-lg mb-10 max-w-xl mx-auto">
            Each cohort is intentionally kept small to ensure quality mentorship and genuine engagement.
            Early members get priority access, exclusive bonuses, and founding-member pricing.
          </p>
          <button
            onClick={scrollToForm}
            className="group mx-auto flex items-center justify-center gap-2.5 rounded-2xl bg-primary px-10 py-5 text-sm font-bold text-white shadow-2xl shadow-primary/30 transition-all hover:-translate-y-1 hover:shadow-primary/50 sm:text-base w-full sm:w-auto"
          >
            Secure Your Spot Today
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-emerald-400 shadow-lg shadow-primary/30">
                <GraduationCap className="h-4 w-4 text-white" />
              </div>
              <span className="font-black text-base tracking-tight text-white">
                VMT <span className="text-primary">Academy</span>
              </span>
            </div>

            <p className="text-xs text-white/25 text-center">
              Skills · Growth · Opportunity
            </p>

            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} VMT Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Global animation keyframes */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}