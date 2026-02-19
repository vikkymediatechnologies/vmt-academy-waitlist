import { useState, useEffect, useCallback } from "react";
import { BookOpen, Users, Compass, Heart, CheckCircle, Star, Lock, Sparkles, Target, TrendingUp, GraduationCap, Rocket, ArrowRight, Zap, Award, Globe } from "lucide-react";
import confetti from "canvas-confetti";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  { icon: BookOpen, title: "Practical, Hands-On Learning", description: "No fluff. Every lesson is designed around real-world skills you can apply immediately to projects and careers." },
  { icon: Users, title: "Mentorship & Guidance", description: "Learn alongside experienced mentors who've walked the path and are invested in your success." },
  { icon: Compass, title: "Clear Learning Paths", description: "Structured roadmaps so you always know what to learn next, why it matters, and where it leads." },
  { icon: Heart, title: "Supportive Community", description: "A private community of driven learners who collaborate, share wins, and lift each other up." },
];

const idealLearner = [
  { icon: Target, text: "You want practical skills that translate to real-world impact" },
  { icon: TrendingUp, text: "You're committed to consistent growth and putting in the effort" },
  { icon: Users, text: "You thrive in collaborative environments with mentorship" },
  { icon: Rocket, text: "You're building towards a meaningful career or skill upgrade" },
  { icon: GraduationCap, text: "You value structured learning with clear milestones" },
  { icon: Zap, text: "You're ready to take action, not just consume content" },
];

const skills = [
  "Web Development",
  "UI/UX Design",
  "Data Analytics",
  "Digital Marketing",
  "Product Management",
  "Mobile Development",
  "Artificial Intelligence (AI)",
  "Machine Learning",
  "Cybersecurity",
  "Cloud Computing",
  "Blockchain & Web3",
  "Video Editing & Motion Graphics",
  "Graphic Design",
  "Content Writing & Copywriting",
  "Project Management",
  "Business Analysis",
  "DevOps & Automation",
  "Game Development",
  "3D Modeling & Animation",
  "Photography & Videography",
];

const stats = [
  { value: "500+", label: "Waitlist Signups" },
  { value: "12", label: "Skill Tracks" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "50", label: "Spots per Cohort" },
];

const fireConfetti = () => {
  const duration = 4000;
  const end = Date.now() + duration;

  const colors = ["#2a9d8f", "#e9c46a", "#f4a261", "#e76f51", "#264653", "#00b4d8"];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

  // Big burst
  setTimeout(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors,
    });
  }, 200);
};

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", skill: "" });
  const [submitted, setSubmitted] = useState(false);

  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
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

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-xl w-full text-center animate-fade-in-up">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Award className="w-12 h-12 text-primary" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            🎉 Congratulations, {formData.name.split(" ")[0]}!
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            You've successfully requested early access to <span className="text-primary font-semibold">VMT Academy</span>.
          </p>
          <div className="p-6 rounded-2xl bg-card border border-border mb-8 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Name</span>
              <span className="font-medium text-foreground">{formData.name}</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Email</span>
              <span className="font-medium text-foreground">{formData.email}</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Skill Interest</span>
              <span className="font-medium text-primary">{formData.skill}</span>
            </div>
          </div>
          <div className="p-5 rounded-xl bg-accent/50 border border-primary/20 mb-8">
            <p className="text-sm text-accent-foreground">
              <Sparkles className="w-4 h-4 inline mr-1.5 -mt-0.5" />
              We'll review your application and reach out soon. As an early applicant, you'll get <strong>priority access</strong> and <strong>exclusive founding member perks</strong>.
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            Keep an eye on your inbox at <strong>{formData.email}</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <span className="font-display text-xl font-bold text-foreground">VMT Academy</span>
          <button onClick={scrollToForm} className="px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-sm">
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-10 animate-fade-in-up shadow-sm">
              <Sparkles className="w-4 h-4" />
              Now accepting early access applications
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Learn Practical Skills That Open{" "}
              <span className="text-primary">Real Opportunities</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              VMT Academy is a private learning academy focused on real-world, skill-based education that transforms your career.
            </p>
            <div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: "0.3s" }}>
              <button
                onClick={scrollToForm}
                className="group inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                Limited to 50 spots per cohort
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 border-y border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VMT Academy */}
      <section className="py-24 md:py-36">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
              Why Choose Us
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">Why VMT Academy</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">We're building something different — an academy that prioritizes real outcomes over paper credentials.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <f.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For — reframed positively */}
      <section className="py-24 md:py-36 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
              Our Ideal Learner
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">Built for Serious Learners</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              VMT Academy is designed for people who are ready to invest in themselves. If this sounds like you, you'll feel right at home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {idealLearner.map((item) => (
              <div key={item.text} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground text-sm leading-relaxed pt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist-form" className="py-24 md:py-36">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
                <Globe className="w-3.5 h-3.5" />
                Apply Now
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">Request Early Access</h2>
              <p className="text-muted-foreground text-lg">Join the waitlist and be among the first to experience VMT Academy's transformative learning.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-10 rounded-2xl bg-card border border-border shadow-xl shadow-black/5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2.5">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-base"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2.5">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-base"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2.5">Skill of Interest</label>
                <select
                  required
                  value={formData.skill}
                  onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none text-base"
                >
                  <option value="">Select a skill you'd like to learn</option>
                  {skills.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="group w-full py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2"
              >
                Request Early Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                <Lock className="w-3 h-3 inline mr-1 -mt-0.5" />
                Not everyone is accepted. We review each application carefully.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Scarcity */}
      <section className="py-24 md:py-36 bg-secondary/50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-8">
            <Lock className="w-4 h-4" />
            Limited Availability
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">Small Cohorts. Big Results.</h2>
          <p className="text-muted-foreground text-xl leading-relaxed mb-10">
            Each cohort is intentionally kept small to ensure quality mentorship and genuine engagement. Early members receive priority access, exclusive bonuses, and founding member pricing.
          </p>
          <button
            onClick={scrollToForm}
            className="group inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30"
          >
            Secure Your Spot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <span className="font-display text-2xl font-bold text-foreground">VMT Academy</span>
          <p className="text-muted-foreground mt-3">Skills. Growth. Opportunity.</p>
          <p className="text-xs text-muted-foreground mt-8">© {new Date().getFullYear()} VMT Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
