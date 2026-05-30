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
  Mail,
  Send,
  ExternalLink,
  CheckCircle2,
  Clock,
  Calendar,
  Globe,
  Check,
  Info,
  MapPin
} from "lucide-react";
import { type MouseEvent, useEffect, useRef, useState } from "react";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hanish-reddy-7054b5250/" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCwKKDoZJtkMIycVenm-x17Q" },
  { label: "RR", href: "#contact" },
  { label: "Resume", href: "#resume" }
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
      |"cap"
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

  return token.type === "text" ? (
    <motion.span
      key={tokenKey}
      style={{ opacity, y }}
      className={token.accent === "brand" ? "text-brand" : token.accent === "muted" ? "text-white/45" : ""}
    >
      {token.value}
    </motion.span>
  ) : (
    <motion.span key={tokenKey} style={{ opacity, y }} className="inline-flex">
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

  return (
    <motion.p className={line.className} style={{ opacity, y }}>
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
      <section ref={sectionRef} className="bg-[#f5f3ee] px-4 py-6 text-[#242424]">
        <div className="mx-auto flex min-h-[100svh] w-full max-w-md flex-col gap-5">
           <motion.div
             initial={{ opacity: 0, y: 32, scale: 0.94 }}
             whileInView={{ opacity: 1, y: 0, scale: 1 }}
             viewport={{ amount: 0.5, once: false }}
             transition={{ duration: 1.2, ease: "easeOut" }}
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

          <div className="flex flex-col gap-4">
            {manifestoLines.map((line, index) => (
                <motion.div
                  key={line.text}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.6, once: false }}
                  transition={{
                    duration: 1,
                    delay: index * 0.18,
                    ease: [0.23, 1, 0.320, 1]
                  }}
                >
                  <motion.p
                    style={{ fontFamily: "var(--font-akt)" }}
                    className="m-0 rounded-[1.25rem] bg-white/55 px-5 py-5 text-[clamp(1rem,5.2vw,1.6rem)] font-medium leading-[1.15] text-[#242424] shadow-[0_10px_28px_rgba(0,0,0,0.04)] backdrop-blur-sm hover:bg-white/70 transition-colors duration-300"
                    whileHover={{ y: -2, scale: 1.01 }}
                  >
                    {line.text}
                  </motion.p>
                </motion.div>
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="service-card"
      style={{ opacity, y, scale }}
      animate={{
        y: isHovered ? -8 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="service-card-icon"
        aria-hidden="true"
        animate={{
          rotate: isHovered ? 360 : 0,
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{
          rotate: {
            duration: 0.6,
            ease: "easeInOut"
          },
          scale: {
            duration: 0.3,
            ease: "easeInOut"
          }
        }}
      >
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut"
          }}
        >
          <card.Icon size={38} strokeWidth={2.1} />
        </motion.div>
      </motion.div>
      <motion.h3
        animate={{
          y: isHovered ? -4 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        {card.title}
      </motion.h3>
      <motion.p
        animate={{
          y: isHovered ? -2 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        {card.description}
      </motion.p>
    </motion.article>
  );
}

function MobileServiceCard({
  card,
  index
}: {
  card: (typeof serviceCards)[number];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 36, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ amount: 0.55, once: false }}
      className="rounded-[1.35rem] border border-black/10 bg-[#faf9f6] px-5 py-5 shadow-[0_14px_34px_rgba(0,0,0,0.05)] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        y: isHovered ? -8 : 0,
      }}
      transition={{
        default: {
          duration: 1.1,
          delay: index * 0.22,
          ease: [0.23, 1, 0.320, 1]
        },
        y: {
          duration: 0.4,
          ease: "easeInOut"
        }
      }}
    >
      <div className="flex items-start gap-5">
        <motion.div
          className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#ff5a00] to-[#ff8133] text-white shadow-[0_8px_24px_rgba(255,90,0,0.3)]"
          animate={{
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{
            rotate: {
              duration: 0.7,
              ease: "easeInOut"
            },
            scale: {
              duration: 0.4,
              ease: "easeInOut"
            }
          }}
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              delay: index * 0.35,
              ease: "easeInOut"
            }}
          >
            <card.Icon size={28} strokeWidth={2.1} />
          </motion.div>
        </motion.div>
        <div className="min-w-0 flex-1">
          <motion.h3
            style={{ fontFamily: "var(--font-akt)" }}
            className="m-0 text-[clamp(1.45rem,7vw,2rem)] font-medium leading-[1.02] tracking-[-0.03em] text-[#141414]"
            animate={{
              y: isHovered ? -4 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut"
            }}
          >
            {card.title}
          </motion.h3>
          <motion.p
            className="mt-3 m-0 text-[clamp(0.95rem,4vw,1.06rem)] leading-[1.58] text-[#141414]/68"
            animate={{
              y: isHovered ? -2 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut"
            }}
          >
            {card.description}
          </motion.p>
        </div>
      </div>
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
      <section ref={sectionRef} className="bg-[#f8f7f3] px-4 py-6 text-[#141414]">
        <div className="mx-auto flex min-h-[100svh] w-full max-w-md flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.7, once: false }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="rounded-[1.25rem] px-2 py-2 font-[var(--font-akt)] text-[clamp(0.92rem,4vw,1rem)] uppercase tracking-[0.08em] text-[#7a756e]"
          >
            Our Services
          </motion.div>

           {serviceCards.map((card, index) => (
             <MobileServiceCard
               key={card.title}
               card={card}
               index={index}
             />
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

// ============================================================================
// BOTTOM DETAILS & CONTACT SECTION (FOR HANISH'S FREELANCING CLIENTS)
// ============================================================================
// Hanish, you can update your email, social links, location, availability, and
// other contact details directly in this component below!
// ============================================================================
function BottomDetails() {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phoneCode: "+91",
    phoneNumber: "",
    socialLink: "",
    budget: "",
    services: [] as string[],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --------------------------------------------------------------------------
  // UPDATE YOUR DETAILS HERE (FEEL FREE TO EDIT THESE STRINGS!)
  // --------------------------------------------------------------------------
  const personalInfo = {
    email: "mamidihanishreddy@gmail.com", // <-- EDIT YOUR EMAIL ADDRESS HERE
    whatsapp: "https://wa.me/917054b5250", // <-- EDIT YOUR WHATSAPP LINK HERE
    location: "India / Remote Worldwide", // <-- EDIT YOUR LOCATION OR WORK TYPE
    availability: "Available for Q3/Q4 2026", // <-- EDIT YOUR CURRENT WORKLOAD STATUS
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hanish-reddy-7054b5250/", // <-- EDIT LINKEDIN URL
        username: "hanish-reddy"
      },
      {
        name: "Instagram",
        url: "https://instagram.com", // <-- EDIT INSTAGRAM URL
        username: "@hanish.design"
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/channel/UCwKKDoZJtkMIycVenm-x17Q", // <-- EDIT YOUTUBE URL
        username: "Hanish Reddy"
      }
    ]
  };

  const handleCheckboxChange = (serviceName: string) => {
    setFormData((prev) => {
      const active = prev.services.includes(serviceName)
        ? prev.services.filter((s) => s !== serviceName)
        : [...prev.services, serviceName];
      return { ...prev, services: active };
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || formData.services.length === 0) return;
    setIsSubmitting(true);

    try {
      // Send data to Basin.app (free form submission service)
      const response = await fetch("https://api.basinapp.com/v1/public/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.org,
          phone: `${formData.phoneCode} ${formData.phoneNumber}`,
          services: formData.services.join(", "),
          message: formData.message,
          // Basin requires a form_id - we'll use a placeholder
          // You'll need to update this with your actual Basin form ID
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitting(false);
      setSubmitted(true);

      // Reset form states
      setFormData({
        name: "",
        org: "",
        email: "",
        phoneCode: "+91",
        phoneNumber: "",
        socialLink: "",
        budget: "",
        services: [],
        message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      alert("Error submitting form. Please try again.");
    }
  };

  const serviceCheckboxes = [
    "Graphic Design",
    "Brand Identity Development",
    "Video Editing & Content Creation",
    "Website Design & Development",
    "Brand Consultation"
  ];

  return (
    <section id="contact" className="bottom-section relative overflow-hidden">
      {/* Dark net/grid design in background */}
      <div className="bottom-net-grid" />

      {/* Glow orb for premium feel */}
      <div className="bottom-glow-orb" />

      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">

        {/* Section header - slides up from bottom */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="bottom-section-header"
        >
          <span className="bottom-badge">Let&apos;s Work Together</span>
          <h2 className="bottom-heading">
            Start a Project
          </h2>
          <p className="bottom-subheading">
            Ready to bring your vision to life? Fill in the form and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

          {/* Two Column Structure: Form first on mobile, Details second on mobile */}
          <div className="bottom-grid">

            {/* Column 1 (mobile order-1, desktop order-2): Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="bottom-form-col"
            >

              {/* Form card */}
              <div className="bottom-form-card">
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 z-30 flex flex-col items-center justify-center rounded-[1.4rem] bg-[#111]/95 p-6 text-center backdrop-blur-md"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff4d00]/20 text-[#ff4d00] mb-4">
                      <Check size={28} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg font-bold text-white">Message Received!</h3>
                    <p className="mt-2 text-white/50 max-w-xs text-xs leading-relaxed">
                      Thank you for reaching out. Hanish will review your project inquiry and get back to you within 24 hours!
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">

                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="bottom-label">Your name *</label>
                      <input id="name" type="text" required className="bottom-input" value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div>
                      <label htmlFor="email" className="bottom-label">Email address *</label>
                      <input id="email" type="email" required className="bottom-input" value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                  </div>

                  {/* Row 2: Organization and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="org" className="bottom-label">Organization Name *</label>
                      <input id="org" type="text" required placeholder="Your Organization" className="bottom-input"
                        value={formData.org} onChange={(e) => setFormData({ ...formData, org: e.target.value })} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="bottom-label flex items-center gap-1.5">
                        <span>Phone number *</span>
                        <Info size={12} className="text-white/30 cursor-help" aria-label="Enter your active mobile number" />
                      </label>
                      <div className="bottom-phone-row">
                        <div className="bottom-phone-prefix">
                          <span className="text-sm">🇮🇳</span>
                          <span className="text-xs font-bold text-[#555555]">{formData.phoneCode}</span>
                        </div>
                        <input id="phone" type="tel" required placeholder="98765 43210"
                          className="w-full bg-transparent outline-none py-2.5 px-3 text-sm text-[#1a1a1a] placeholder-[#b0b0b0]"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} />
                      </div>
                    </div>
                  </div>
                  {/* Services checkboxes */}
                  <div>
                    <span className="bottom-label block mb-3">Services you&apos;re interested in *</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {serviceCheckboxes.map((service) => {
                        const isChecked = formData.services.includes(service);
                        return (
                          <label key={service} className="bottom-checkbox-label">
                            <div className="relative shrink-0">
                              <input type="checkbox" className="sr-only" checked={isChecked}
                                onChange={() => handleCheckboxChange(service)} />
                              <div className={`bottom-checkbox ${ isChecked ? "bottom-checkbox-checked" : "" }`}>
                                {isChecked && <Check size={10} strokeWidth={3.5} />}
                              </div>
                            </div>
                            <span className="text-xs text-[#1a1a1a] font-medium leading-snug">{service}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="bottom-label">Tell me about your project *</label>
                    <textarea id="message" required rows={3} placeholder="Describe what you need..."
                      className="bottom-input resize-none" value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={isSubmitting} className="bottom-submit-btn">
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send size={15} strokeWidth={2} />
                        Submit Inquiry
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Column 2 (mobile order-2, desktop order-1): Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bottom-details-col"
            >
              <div className="bottom-details-inner">
                <h2 className="bottom-details-heading">
                  Let&apos;s Build <br />
                  <span className="bottom-details-accent">Bold Together</span>
                </h2>
                <p className="bottom-details-desc">
                  Whether you&apos;re launching a brand, building a website, or creating content — I&apos;m here to make it happen.
                </p>

                <div className="bottom-info-items">
                  <a href={`mailto:${personalInfo.email}`} className="bottom-info-item">
                    <div className="bottom-info-icon"><Mail size={18} strokeWidth={2} /></div>
                    <div>
                      <div className="bottom-info-label">Email</div>
                      <div className="bottom-info-value">{personalInfo.email}</div>
                    </div>
                  </a>

                  <div className="bottom-info-item">
                    <div className="bottom-info-icon"><Globe size={18} strokeWidth={2} /></div>
                    <div>
                      <div className="bottom-info-label">Location</div>
                      <div className="bottom-info-value">{personalInfo.location}</div>
                    </div>
                  </div>

                  <div className="bottom-info-item">
                    <div>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="bottom-socials">
                  {personalInfo.socials.map((social) => (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"
                      className="bottom-social-chip">
                      <ExternalLink size={12} strokeWidth={2.2} />
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bottom-footer-bar"
          >
            <div className="text-[#999999] text-xs">© {new Date().getFullYear()} Hanish Reddy. All rights reserved.</div>
            <div className="flex gap-5">
              <a href="#contact" className="text-[#999999] text-xs hover:text-[#111111] transition-colors">Contact</a>
              <a href={personalInfo.whatsapp} target="_blank" rel="noreferrer" className="text-[#999999] text-xs hover:text-[#111111] transition-colors">WhatsApp</a>
            </div>
          </motion.div>
        </div>
    </section>
  );
}

function ScrollResume() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [65, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.5], [-12, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], ["40%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [isMobile ? 0.5 : 0.6, isMobile ? 0.9 : 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <section id="resume" ref={sectionRef} className="relative min-h-[400vh] bg-gradient-to-b from-black to-[#2A1a10] py-20">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden" style={{ perspective: "1200px" }}>
        <div className="absolute inset-0 bg-[#3d2616] opacity-30 mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

        <motion.div
          style={{ rotateX, rotateZ, y, scale, opacity, transformStyle: "preserve-3d" }}
          className="relative w-full max-w-4xl h-[85vh] sm:h-[90vh] bg-[#fdfbf7] text-[#111] p-4 sm:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col font-serif overflow-hidden rounded-sm"
        >
          {/* Coffee Stain Ring Effect */}
          <div className="absolute top-[20%] right-[10%] w-32 h-32 border-[8px] border-[#724c31] opacity-15 rounded-full pointer-events-none" style={{ borderRadius: '42% 58% 55% 45% / 48% 46% 54% 52%' }} />
          <div className="absolute top-[21%] right-[12%] w-20 h-20 border-[4px] border-[#724c31] opacity-10 rounded-full pointer-events-none" style={{ borderRadius: '52% 48% 45% 55% / 40% 56% 44% 60%' }} />

          {/* Header Section */}
          <div className="border-b-2 border-[#333] pb-3 mb-4 text-center z-10 relative shrink-0">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest text-[#222]">Mamidi Hanish Reddy</h2>
            <div className="text-xs sm:text-sm mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[#555] font-sans">
              <span>📱 +91 9182510911</span>
              <span>•</span>
              <span>📍 Hyderabad, India</span>
              <span>•</span>
              <span>✉️ mamidihanishreddy@gmail.com</span>
            </div>
          </div>

          {/* Table Layout */}
          <div className="flex-1 overflow-y-auto pr-2 z-10 relative scrollbar-thin scrollbar-thumb-gray-300">
            <table className="w-full border-collapse text-[12px] sm:text-[13px] font-sans">
              {/* SUMMARY */}
              <tbody>
                <tr className="border-b border-[#ddd]">
                  <td className="font-bold uppercase text-[#222] tracking-wide w-24 sm:w-32 align-top pr-4 py-2">SUMMARY</td>
                  <td className="text-[#444] py-2 text-justify leading-tight">
                    Creative and detail-oriented Graphic Design enthusiast with hands-on experience in Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro, After Effects) and AI-powered design tools. Adept at crafting visually compelling social media creatives, brand identities, motion graphics, and marketing materials. Passionate about merging traditional design principles with cutting-edge AI image generation to deliver fast, scalable, and high-impact visuals.
                  </td>
                </tr>

                {/* EDUCATION */}
                <tr className="border-b border-[#ddd]">
                  <td className="font-bold uppercase text-[#222] tracking-wide align-top pr-4 py-2">EDUCATION</td>
                  <td className="py-2">
                    <div className="mb-2">
                      <div className="flex justify-between items-start gap-2">
                        <span className="font-bold text-[#222]">B.Tech - Computer Science Engineering</span>
                        <span className="text-right whitespace-nowrap text-[#666] shrink-0">2022 – 2026</span>
                      </div>
                      <div className="text-[#555]">Vignan Institute of Technology and Science</div>
                      <div className="text-[#666]">CGPA: 7.3</div>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between items-start gap-2">
                        <span className="font-bold text-[#222]">Senior Secondary (TSBIE)</span>
                        <span className="text-right whitespace-nowrap text-[#666] shrink-0">2020 – 2022</span>
                      </div>
                      <div className="text-[#666]">Percentage: 68.4%</div>
                    </div>
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <span className="font-bold text-[#222]">Secondary School (SSC)</span>
                        <span className="text-right whitespace-nowrap text-[#666] shrink-0">2019 – 2020</span>
                      </div>
                      <div className="text-[#666]">CGPA: 10.0</div>
                    </div>
                  </td>
                </tr>

                {/* SKILLS */}
                <tr className="border-b border-[#ddd]">
                  <td className="font-bold uppercase text-[#222] tracking-wide align-top pr-4 py-2">SKILLS</td>
                  <td className="py-2">
                    <div className="mb-1">
                      <span className="font-bold text-[#222] block mb-1">Design & Creative Tools:</span>
                    </div>
                    <ul className="text-[#444] space-y-1 text-justify">
                      <li>• <strong>Adobe Photoshop</strong> — Photo manipulation, compositing, digital retouching, social media graphics</li>
                      <li>• <strong>Adobe Illustrator</strong> — Vector illustration, logo design, iconography, print-ready artwork</li>
                      <li>• <strong>Adobe Premiere Pro</strong> — Video editing, colour grading, multi-track timelines, social media export</li>
                      <li>• <strong>Adobe After Effects</strong> — Motion graphics, animated intros, kinetic typography, visual effects</li>
                      <li>• <strong>Canva</strong> — Rapid template-based design, pitch decks, social media content at scale</li>
                    </ul>
                  </td>
                </tr>

                {/* PROJECTS */}
                <tr>
                  <td className="font-bold uppercase text-[#222] tracking-wide align-top pr-4 py-2">PROJECTS</td>
                  <td className="py-2">
                    <div className="mb-3">
                      <span className="font-bold text-[#222] block mb-1">Brand Identity Design (Sample Project)</span>
                      <ul className="text-[#444] space-y-1 text-justify ml-4 list-disc">
                        <li>Designed complete brand identity with logo, colour palette, typography system using Adobe Illustrator</li>
                        <li>Created brand style guide with usage rules, primary/secondary colours, font hierarchy & guidelines</li>
                        <li>Developed high-fidelity mockups for social media profiles, business cards, banners demonstrating consistency</li>
                      </ul>
                    </div>
                    <div className="mb-3">
                      <span className="font-bold text-[#222] block mb-1">Social Media Creative Campaigns</span>
                      <ul className="text-[#444] space-y-1 text-justify ml-4 list-disc">
                        <li>Designed Instagram posts, story templates, promotional banners using Canva and Adobe Photoshop</li>
                        <li>Applied color psychology & typography principles for brand-consistent, scroll-stopping content</li>
                        <li>Produced scalable design templates optimized for different platform aspect ratios (1:1, 9:16, 16:9)</li>
                      </ul>
                    </div>
                    <div>
                      <span className="font-bold text-[#222] block mb-1">Motion Graphics & Video Editing</span>
                      <ul className="text-[#444] space-y-1 text-justify ml-4 list-disc">
                        <li>Created animated title sequences, lower thirds, kinetic typography using Adobe After Effects</li>
                        <li>Edited video content in Premiere Pro with colour grading, audio syncing, transitions & export optimization</li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



export default function Page() {
  return (
    <main className="bg-black text-white relative">
      <ScrollStory />
      <ScrollManifesto />
      <ScrollServices />
      <ScrollResume />
      <BottomDetails />
      <div className="grain" />
    </main>
  );
}
