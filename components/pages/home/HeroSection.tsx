import { Button } from "@/components/ui/button";
import { MessageCircle, Zap, Shield } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#db11fb]/30 to-[#2d4af3]/30 blur-[140px]" />
      </div>

      <div className="mx-auto container px-6 py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left content */}
          <div>
            <span className="inline-flex items-center rounded-full border px-4 py-1 text-sm font-medium">
              🚀 AI Chat Automation for Businesses
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Automate Conversations on{" "}
              <span className="brand-gradient-text">
                Facebook, Instagram & WhatsApp
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Instantly reply to customers, capture leads, and grow sales
              automatically using smart chat automation built for modern
              businesses.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="brand-gradient text-white hover:opacity-90"
              >
                Get Started Free
              </Button>

              <Button size="lg" variant="outline">
                Book a Demo
              </Button>
            </div>

            {/* Feature list */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Feature icon={<Zap className="h-5 w-5" />} text="Instant Replies" />
              <Feature
                icon={<MessageCircle className="h-5 w-5" />}
                text="Omni-Channel"
              />
              <Feature icon={<Shield className="h-5 w-5" />} text="Secure & Scalable" />
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="rounded-2xl border bg-card p-6 shadow-xl">
              <div className="space-y-4">
                <ChatBubble side="left" text="Hi! Is this available?" />
                <ChatBubble
                  side="right"
                  text="Yes 😊 Would you like pricing or a demo?"
                />
                <ChatBubble side="left" text="Book me a demo 🚀" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#db11fb]/20 to-[#2d4af3]/20 text-[#2d4af3]">
        {icon}
      </span>
      {text}
    </div>
  );
}

function ChatBubble({
  side,
  text,
}: {
  side: "left" | "right";
  text: string;
}) {
  return (
    <div
      className={`max-w-[80%] rounded-xl px-4 py-2 text-sm ${
        side === "left"
          ? "bg-muted text-foreground"
          : "ml-auto bg-gradient-to-br from-[#db11fb] to-[#2d4af3] text-white"
      }`}
    >
      {text}
    </div>
  );
}
