import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  const highlights = [
    "AI Resume Evaluation",
    "Pipeline & Time-to-Hire",
    "Custom Branding & Storage",
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 subtle-grid opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Enterprise-Ready Hiring Platform</span>
            <svg
              className="w-4 h-4 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Intelligent Hiring Platform{" "}
            <span className="text-accent">for Enterprise Teams</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            AI-powered resume evaluation streamlines candidate screening. Track and manage your hiring
            pipeline, reduce time-to-hire, and customize branding, storage, and infrastructure.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="/installation-guide">
                View Installation Guide
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="/#downloads">
                View Documentation
              </a>
            </Button>
          </div>
        </div>

        {/* Hero visual placeholder */}
        <div className="mt-16 lg:mt-20 relative">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-2xl blur-2xl" />
            <div className="relative bg-card rounded-xl border border-border shadow-2xl overflow-hidden">
              <div className="h-8 bg-muted/50 border-b border-border flex items-center gap-2 px-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="p-6 lg:p-8 bg-gradient-to-br from-muted/30 to-background min-h-[300px] lg:min-h-[400px] flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 w-full max-w-3xl relative">
                  <div className="absolute -top-6 -right-4 hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-background/90 border border-border shadow-sm">
                    <svg
                      className="w-4 h-4 text-accent"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 7h18M7 7v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7" />
                      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                    </svg>
                    <span className="text-xs font-medium text-foreground">Pipeline</span>
                  </div>
                  {/* Pipeline preview */}
                  <div className="space-y-3">
                    <div className="h-3 w-20 bg-accent/30 rounded" />
                    <div className="space-y-2">
                      <div className="h-16 bg-card rounded-lg border border-border shadow-sm" />
                      <div className="h-16 bg-card rounded-lg border border-border shadow-sm" />
                      <div className="h-16 bg-card rounded-lg border border-border shadow-sm" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-24 bg-accent/30 rounded" />
                    <div className="space-y-2">
                      <div className="h-16 bg-card rounded-lg border border-border shadow-sm" />
                      <div className="h-16 bg-card rounded-lg border border-border shadow-sm" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-16 bg-accent/30 rounded" />
                    <div className="space-y-2">
                      <div className="h-16 bg-card rounded-lg border border-border shadow-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
