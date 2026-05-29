"use client";

import { motion, MotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import {
  Clapperboard,
  Crown,
  Globe2,
  Menu,
  MonitorSmartphone,
  Package,
  Palette,
  PenTool,
  Play,
  Video,
} from "lucide-react";
import { type MouseEvent, useEffect, useRef, useState } from "react";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hanish-reddy-7054b5250/" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCwKKDoZJtkMIycVenm-x17Q" },
  { label: "RR", href: "#contact" }
];

type StoryToken =
    | {
  type: "text";
  value: string;
  accent?: "brand" | "muted";
}
    | {
  type: "visual";
  label: string;
  tone:
      | "portrait"
      | "cap"
      | "orange"
      | "earth"
      | "audio"
      | "pack"
      | "bee"
      | "play"
      | "coffee"
      | "ai"
      | "ted"
      | "phone";
};

const storyTokens: StoryToken[] = [
  { type: "text", value: "HELLO," },
  { type: "text", value: "I'M" },
  { type: "text", value: "HANISH" },
  { type: "text", value: "REDDY" },

  { type: "visual", label: "HR", tone: "portrait" },

  { type: "text", value: "I'M" },
  { type: "text", value: "A" },
  { type: "text", value: "FREELANCE" },

  { type: "text", value: "DEVELOPER", accent: "brand" },

  { type: "text", value: "AND" },
  { type: "text", value: "A" },
  { type: "text", value: "CREATIVE" },
  { type: "text", value: "PROFESSIONAL" },
  { type: "text", value: "WHO" },
  { type: "text", value: "LOVES" },
  { type: "text", value: "DESIGNING" },
  { type: "text", value: "VISUALS" },

  { type: "visual", label: "DESIGN", tone: "orange" },

  { type: "text", value: "FROM" },
  { type: "text", value: "GRAPHIC" },
  { type: "text", value: "DESIGN" },
  { type: "text", value: "TO" },

  { type: "visual", label: "EDIT", tone: "audio" },

  { type: "text", value: "VIDEO" },
  { type: "text", value: "EDITING," },
  { type: "text", value: "I" },
  { type: "text", value: "CREATE" },
  { type: "text", value: "CONTENT" },
  { type: "text", value: "THAT" },
  { type: "text", value: "TELLS" },
  { type: "text", value: "STORIES" },
  { type: "text", value: "AND" },
  { type: "text", value: "BUILDS" },
  { type: "text", value: "STRONG" },
  { type: "text", value: "BRANDS" },

  { type: "visual", label: "BRAND", tone: "pack" },

  { type: "text", value: "I" },
  { type: "text", value: "ENJOY" },
  { type: "text", value: "WORKING" },
  { type: "text", value: "ON" },
  { type: "text", value: "MODERN" },
  { type: "text", value: "WEBSITES" },

  { type: "visual", label: "UI", tone: "phone" },

  { type: "text", value: "THAT" },
  { type: "text", value: "LOOK" },
  { type: "text", value: "CLEAN" },
  { type: "text", value: "AND" },
  { type: "text", value: "FEEL" },
  { type: "text", value: "INTERACTIVE" },

  { type: "text", value: "WHEN" },
  { type: "text", value: "I'M" },
  { type: "text", value: "NOT" },
  { type: "text", value: "DESIGNING," },

  { type: "visual", label: "TRAVEL", tone: "earth" },

  { type: "text", value: "YOU'LL" },
  { type: "text", value: "FIND" },
  { type: "text", value: "ME" },
  { type: "text", value: "TRAVELING" },
  { type: "text", value: "AND" },
  { type: "text", value: "EXPLORING" },
  { type: "text", value: "NEW" },
  { type: "text", value: "PLACES" },

  { type: "visual", label: "MAP", tone: "earth" },

  { type: "text", value: "CAPTURING" },
  { type: "text", value: "INSPIRATION" },
  { type: "text", value: "FROM" },
  { type: "text", value: "THE" },
  { type: "text", value: "WORLD" },
  { type: "text", value: "AROUND" },
  { type: "text", value: "ME" },

  { type: "text", value: "I" },
  { type: "text", value: "TURN" },
  { type: "text", value: "IDEAS" },
  { type: "text", value: "INTO" },
  { type: "text", value: "VISUAL" },
  { type: "text", value: "EXPERIENCES" },

  { type: "visual", label: "AI", tone: "ai" },

  { type: "text", value: "THAT" },
  { type: "text", value: "CONNECT" },
  { type: "text", value: "WITH" },
  { type: "text", value: "PEOPLE" },
  { type: "text", value: "AND" },
  { type: "text", value: "LEAVE" },
  { type: "text", value: "AN" },
  { type: "text", value: "IMPACT" },

  { type: "visual", label: "CONTENT", tone: "play" },

  { type: "text", value: "LET'S" },
  { type: "text", value: "BUILD" },
  { type: "text", value: "SOMETHING" },
  { type: "text", value: "AMAZING" },
  { type: "text", value: "TOGETHER" }
];

const totalStoryTokens = storyTokens.length;
const revealStart = 0.12;
const revealEnd = 0.74;
const revealDuration = 0.045;

const manifestoLines = [

  {
    className: "manifesto-line manifesto-line-hero",
    text: "Design isn't just what users see-it's how they feel, move, and interact."
  },
  {
    className: "manifesto-line manifesto-line-right",
    text: "I blend strategy, UI/UX design, branding, and frontend development to craft seamless digital experiences."
  },
  {
    className: "manifesto-line manifesto-line-center",
    text: "From concept to code, I create products that are not just beautiful, but functional and intuitive."
  },
];

const serviceCards = [
  {
    title: "Graphic Design",
    description: "We turn ideas into stunning visuals—designing bold, engaging posts that capture attention and tell your story.",
    Icon: PenTool
  },
  {
    title: "Brand Identity Development",
    description: "A brand is more than a logo. We help you show up the same way everywhere - online, offline and everything between.",
    Icon: Crown
  },
  {
    title: "Video Editing & Content Creation",
    description: "Powerful content speaks instantly. We create videos that grab attention, tell compelling stories, and connect with your audience from the first frame.",
    Icon: Video
  },
  {
    title: "Website Design & Development",
    description: "Your website should work hard and look good. We design sites that are easy to use and built to grow with you.",
    Icon: MonitorSmartphone
  }
] as const;

function useIsMobile(breakpoint = 767) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const update = () => setIsMobile(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-5 pt-7 sm:px-8">
      <nav className="mx-auto flex max-w-[1800px] items-center justify-end">
        <button
          type="button"
          aria-label="Toggle navigation"
          className="grid h-10 w-10 place-items-center text-white/70 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <Menu size={22} />
        </button>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="ml-auto mt-3 grid w-56 gap-3 border border-white/10 bg-black/95 p-4 md:hidden"
        >
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-semibold uppercase text-white/65" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </motion.div>
      ) : null}
    </header>
  );
}

type VisualTokenProps = Omit<Extract<StoryToken, { type: "visual" }>, "type">;

function VisualToken({ label, tone }: VisualTokenProps) {
  const iconProps = { size: 26, strokeWidth: 2.1 };

  return (
    <span className={`story-asset story-asset-${tone}`} aria-label={label}>
      {tone === "portrait" ? <span className="text-xl font-black">HR</span> : null}
      {tone === "cap" ? <span className="asset-cap-label">Freelance<br />dev</span> : null}
      {tone === "orange" ? <span className="asset-orange-label"><Palette size={17} strokeWidth={2.2} />Design</span> : null}
      {tone === "earth" ? <span className="asset-earth-label"><Globe2 {...iconProps} />{label}</span> : null}
      {tone === "audio" ? <span className="asset-audio-label"><Clapperboard size={22} strokeWidth={2.1} />Edit</span> : null}
      {tone === "pack" ? <span className="asset-pack-label"><Package size={22} strokeWidth={2.1} />Brand</span> : null}
      {tone === "bee" ? <span className="asset-bee-label">Idea</span> : null}
      {tone === "play" ? <span className="asset-play-label"><Play size={20} fill="currentColor" strokeWidth={1.8} />Content</span> : null}
      {tone === "ai" ? <span className="text-2xl font-black">Ai</span> : null}
      {tone === "ted" ? <span className="text-lg font-black uppercase tracking-tight text-red-500">TEDx</span> : null}
      {tone === "phone" ? <span className="asset-phone-label"><MonitorSmartphone size={24} strokeWidth={2.1} />UI</span> : null}
    </span>
  );
}

function StoryTokenItem({
  token,
  tokenKey,
  progress,
  order
}: {
  token: StoryToken;
  tokenKey: string;
  progress: MotionValue<number>;
  order: number;
}) {
  const revealPoint =
    revealStart + (order / Math.max(totalStoryTokens - 1, 1)) * (revealEnd - revealStart);
  const opacity = useTransform(progress, [revealPoint, revealPoint + revealDuration, 1], [0, 1, 1]);
  const y = useTransform(progress, [revealPoint, revealPoint + revealDuration, 1], [18, 0, 0]);
  const blur = useTransform(
    progress,
    [revealPoint, revealPoint + revealDuration, 1],
    ["blur(10px)", "blur(0px)", "blur(0px)"]
  );

  return token.type === "text" ? (
    <motion.span
      key={tokenKey}
      style={{ opacity, y, filter: blur }}
      className={token.accent === "brand" ? "text-brand" : token.accent === "muted" ? "text-white/45" : ""}
    >
      {token.value}
    </motion.span>
  ) : (
    <motion.span key={tokenKey} style={{ opacity, y, filter: blur }} className="inline-flex">
      <VisualToken label={token.label} tone={token.tone} />
    </motion.span>
  );
}

function IntroFrame({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.012, 0.075], [1, 1, 0]);
  const y = useTransform(progress, [0, 0.075], [0, -18]);
  const scale = useTransform(progress, [0, 0.075], [1, 0.96]);

  return (
    <motion.div className="intro-frame" style={{ opacity, y, scale }}>
      <span>HI, I&apos;M HANISH REDDY</span>
      <VisualToken label="HR" tone="portrait" />
    </motion.div>
  );
}


function ScrollStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLButtonElement | null>(null);
  const [showIntro, setShowIntro] = useState(true);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const scrubber = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const storyOpacity = useTransform(scrollYProgress, [0.075, 0.12, 1], [0, 1, 1]);
  const storyY = useTransform(scrollYProgress, [0.075, 0.12, 1], [28, 0, 0]);


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setShowIntro(latest < 0.105);
  });

  function seekStory(event: MouseEvent<HTMLButtonElement>) {
    if (!sectionRef.current || !trackRef.current) return;

    const bounds = trackRef.current.getBoundingClientRect();
    const ratio = Math.min(Math.max((event.clientX - bounds.left) / bounds.width, 0), 1);
    const sectionTop = sectionRef.current.offsetTop;
    const scrollable = sectionRef.current.offsetHeight - window.innerHeight;

    window.scrollTo({
      top: sectionTop + scrollable * ratio,
      behavior: "smooth"
    });
  }

  return (
    <section ref={sectionRef} className="relative h-[520vh] bg-black text-white">
      <div className="story-pin">
        <Header />
        {showIntro ? <IntroFrame progress={scrollYProgress} /> : null}

        <motion.div className="story-stage" style={{ opacity: storyOpacity, y: storyY }}>
          <motion.div className="story-row">
            {storyTokens.map((token, index) => (
                <StoryTokenItem
                    key={index}
                    tokenKey={`${index}`}
                    token={token}
                    progress={scrollYProgress}
                    order={index}
                />
            ))}
          </motion.div>
        </motion.div>

        <button
          ref={trackRef}
          type="button"
          aria-label="Seek through story"
          className="playline"
          onClick={seekStory}
        >
          <motion.div className="h-full rounded-full bg-white" style={{ width: scrubber }} />
          <motion.div
            className="playline-thumb"
            style={{ left: scrubber }}
          />
        </button>
      </div>
    </section>
  );
}

function ManifestoLine({
  line,
  index,
  progress
}: {
  line: (typeof manifestoLines)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = 0.08 + index * 0.12;
  const opacity = useTransform(progress, [start, start + 0.085, 0.92], [0, 1, 1]);
  const y = useTransform(progress, [start, start + 0.085, 0.92], [42, 0, 0]);
  const filter = useTransform(
    progress,
    [start, start + 0.085, 0.92],
    ["blur(12px)", "blur(0px)", "blur(0px)"]
  );

  return (
    <motion.p className={line.className} style={{ opacity, y, filter }}>
      {line.text}
    </motion.p>
  );
}

function ScrollManifesto() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const videoOpacity = useTransform(scrollYProgress, [0.02, 0.12], [0, 1]);
  const videoY = useTransform(scrollYProgress, [0.02, 0.12], [36, 0]);

  if (isMobile) {
    return (
      <section ref={sectionRef} className="bg-[#f5f3ee] px-4 py-4 text-[#242424]">
        <div className="mx-auto flex min-h-[100svh] w-full max-w-md flex-col gap-3">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ amount: 0.7, once: false }}
             transition={{ duration: 0.8 }}
             className="rounded-[1.35rem] bg-[#242424] px-0 py-0 text-[#f5f3ee] shadow-[0_16px_40px_rgba(0,0,0,0.16)] overflow-hidden"
           >
             <video
               src="/hanish.mp4"
               autoPlay
               loop
               muted
               playsInline
               className="w-full h-full rounded-[1.35rem]"
               style={{ aspectRatio: '9/12', objectFit: 'cover' }}
             />
           </motion.div>

          <div className="flex flex-col gap-3">
            {manifestoLines.map((line, index) => (
                <motion.p
                  key={line.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.6, once: false }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  style={{ fontFamily: "var(--font-akt)" }}
                  className="m-0 rounded-[1.25rem] bg-white/55 px-4 py-4 text-[clamp(1rem,5.2vw,1.6rem)] font-medium leading-[1.08] text-[#242424] shadow-[0_10px_28px_rgba(0,0,0,0.04)]"
                >
                  {line.text}
                </motion.p>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="manifesto-section">
      <div className="manifesto-pin">
        <motion.div className="manifesto-video" style={{ opacity: videoOpacity, y: videoY }}>
          <video
            src="/hanish.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.8rem' }}
          />
        </motion.div>

        <div className="manifesto-copy" aria-label="Design manifesto">
          {manifestoLines.map((line, index) => (
            <ManifestoLine key={line.text} line={line} index={index} progress={scrollYProgress} />
          ))}
        </div>
      </div>

       <div className="manifesto-final" aria-hidden="true">
         <div className="manifesto-video">
          <video
            src="/hanish.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.8rem' }}
          />
         </div>

        <div className="manifesto-copy">
          {manifestoLines.map((line) => (
            <p key={`final-${line.text}`} className={line.className}>
              {line.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  card,
  index,
  progress
}: {
  card: (typeof serviceCards)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = 0.08 + index * 0.18;
  const opacity = useTransform(progress, [start, start + 0.08, 1], [0, 1, 1]);
  const y = useTransform(progress, [start, start + 0.08, 1], [36, 0, 0]);
  const scale = useTransform(progress, [start, start + 0.08, 1], [0.96, 1, 1]);

  return (
    <motion.article className="service-card" style={{ opacity, y, scale }}>
      <div className="service-card-icon" aria-hidden="true">
        <card.Icon size={38} strokeWidth={2.1} />
      </div>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </motion.article>
  );
}

function ScrollServices() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  if (isMobile) {
    return (
      <section ref={sectionRef} className="bg-[#f8f7f3] px-4 py-4 text-[#141414]">
        <div className="mx-auto flex min-h-[100svh] w-full max-w-md flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.7, once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-[1.25rem] px-1 py-1 font-[var(--font-akt)] text-[clamp(0.92rem,4vw,1rem)] uppercase tracking-[0.08em] text-[#7a756e]"
          >
            Services
          </motion.div>

          {serviceCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.55, once: true }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
              className="rounded-[1.35rem] border border-black/10 bg-[#faf9f6] px-4 py-4 shadow-[0_14px_34px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#ff5a00] text-white">
                  <card.Icon size={28} strokeWidth={2.1} />
                </div>
                <div className="min-w-0">
                  <h3
                    style={{ fontFamily: "var(--font-akt)" }}
                    className="m-0 text-[clamp(1.45rem,7vw,2rem)] font-medium leading-[1.02] tracking-[-0.03em] text-[#141414]"
                  >
                    {card.title}
                  </h3>
                  <p className="mt-3 m-0 text-[clamp(0.95rem,4vw,1.06rem)] leading-[1.55] text-[#141414]/65">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="services-section">
      <div className="services-pin">
        <div className="services-shell">
          <div className="services-heading">
            <span>Services</span>
          </div>

          <div className="services-grid">
            {serviceCards.map((card, index) => (
              <ServiceCard key={card.title} card={card} index={index} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="bg-black">
      <ScrollStory />
      <ScrollManifesto />
      <ScrollServices />
      <div className="grain" />
    </main>
  );
}
