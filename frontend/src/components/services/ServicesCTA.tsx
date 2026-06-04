"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, Variants, AnimatePresence } from "framer-motion"

// Entrance Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: "spring", bounce: 0.4 },
  },
}

// Code Editor Snippets & Variants
const codeSnippets = [
  // Snippet 0: Profile
  [
    <><span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-200">{'{'}</span></>,
    <><span className="pl-4">name: <span className="text-green-300">"Kuldeep Kumawat"</span>,</span></>,
    <><span className="pl-4">role: <span className="text-green-300">"Full Stack Developer"</span>,</span></>,
    <><span className="pl-4">skills: [<span className="text-green-300">"React"</span>, <span className="text-green-300">"Next.js"</span>, <span className="text-green-300">"Node.js"</span>],</span></>,
    <><span className="pl-4">isAwesome: <span className="text-orange-400">true</span></span></>,
    <><span className="text-yellow-200">{'}'}</span></>,
    <><span className="text-blue-400">developer</span>.<span className="text-yellow-200">code</span>()</>
  ],
  // Snippet 1: Component
  [
    <><span className="text-pink-400">const</span> <span className="text-blue-400">useDeveloper</span> = () =&gt; <span className="text-yellow-200">{'{'}</span></>,
    <><span className="pl-4 text-pink-400">const</span> [coffee, setCoffee] = <span className="text-blue-400">useState</span>(<span className="text-orange-400">100</span>);</>,
    <><span className="pl-4 text-pink-400">if</span> (coffee &gt; <span className="text-orange-400">0</span>) <span className="text-yellow-200">{'{'}</span></>,
    <><span className="pl-8 text-pink-400">return</span> <span className="text-green-300">"Awesome Code"</span>;</>,
    <><span className="pl-4 text-yellow-200">{'}'}</span></>,
    <><span className="pl-4 text-pink-400">return</span> <span className="text-green-300">"Need coffee!"</span>;</>,
    <><span className="text-yellow-200">{'}'}</span></>
  ],
  // Snippet 2: Terminal Deploy
  [
    <><span className="text-green-400">➜</span> <span className="text-cyan-400">portfolio</span> <span className="text-pink-400">git:(</span><span className="text-red-400">main</span><span className="text-pink-400">)</span></>,
    <><span className="text-zinc-300">npm run deploy</span></>,
    <><span className="text-zinc-500">Building production app...</span></>,
    <><span className="text-green-400">✓ Compiled successfully</span></>,
    <><span className="text-blue-400">🚀 Deploying to Vercel...</span></>,
    <><span className="text-green-400">✨ Deployment complete!</span></>
  ]
];

const codeContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.8 } // Start next line after current one finishes typing
  },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const codeLineVariants: Variants = {
  hidden: { 
    clipPath: "inset(0 100% 0 0)", // Hide from right to left
    opacity: 0 
  },
  visible: { 
    clipPath: "inset(0 0% 0 0)", // Reveal fully
    opacity: 1, 
    transition: { 
      opacity: { duration: 0.01 }, // Make it visible instantly (but fully clipped)
      clipPath: { duration: 0.8, ease: "linear" } // "Type" out over 0.8 seconds
    } 
  }
};

// Magnetic Button Component
function MagneticButton({ children, href }: { children: React.ReactNode, href: string }) {
  const ref = React.useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3); // Magnetic pull strength
    y.set(middleY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      whileTap={{ scale: 0.95 }}
      style={{ x: springX, y: springY }}
      className="relative group overflow-hidden bg-white text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl hover:shadow-white/20 z-20"
    >
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-primary/10 to-transparent group-hover:animate-glare pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.a>
  );
}

export function ServicesCTA({ props }: { props: any }) {
  const [meteors, setMeteors] = React.useState<Array<any>>([]);
  const [codeIndex, setCodeIndex] = React.useState(0);

  React.useEffect(() => {
    const codeInterval = setInterval(() => {
      setCodeIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 6000); // Change snippet every 6 seconds

    return () => clearInterval(codeInterval);
  }, []);

  React.useEffect(() => {
    // Generate random meteors on the client side to avoid hydration mismatch
    const generatedMeteors = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100 - 50}%`, // Start above or left
      left: `${Math.random() * -50}%`, // Start off-screen to the left
      length: Math.random() * 150 + 50, // 50px to 200px long
      width: Math.random() * 2 + 1, // 1px to 3px thick
      duration: Math.random() * 3 + 2, // 2s to 5s speed (fast!)
      delay: Math.random() * 10, // Stagger start times
    }));
    setMeteors(generatedMeteors);
  }, []);

  if (!props) return null;

  return (
    <section className="py-20 relative z-10 overflow-hidden bg-background">
      
      {/* ── SECTION BACKGROUND METEOR SHOWER ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {meteors.map(meteor => (
          <motion.div
            key={`meteor-${meteor.id}`}
            className="absolute bg-gradient-to-r from-transparent via-orange-400 to-white shadow-[0_0_10px_rgba(249,115,22,0.8)]"
            style={{
              top: meteor.top,
              left: meteor.left,
              width: `${meteor.length}px`,
              height: `${meteor.width}px`,
              rotate: "45deg", // Head points bottom-right
              borderRadius: "9999px",
            }}
            initial={{ x: "-50vw", y: "-50vh", opacity: 0 }}
            animate={{
              x: "150vw", // Move far right
              y: "150vh", // Move far down
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: meteor.duration,
              repeat: Infinity,
              ease: "linear",
              delay: meteor.delay
            }}
          />
        ))}
      </div>

      {/* ── (Solar Animation Removed as per request) ── */}

      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="bg-gradient-to-r from-primary to-orange-500 dark:bg-none dark:bg-white/5 dark:border dark:border-white/10 rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-primary/20 dark:shadow-none group/cta"
        >
          {/* ── BACKGROUND ANIMATIONS ── */}
          {/* Animated Gradient Blob */}
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.5, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] pointer-events-none"
          />

          {/* Cyber Scanline */}
          <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-full group-hover/cta:animate-scanline opacity-0 group-hover/cta:opacity-100 pointer-events-none mix-blend-overlay" />

          {/* Abstract Pattern Overlay */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2.5px)', backgroundSize: '30px 30px' }} />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">

            {/* ── LEFT COLUMN - 3D FLOATING ILLUSTRATION ── */}
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-[350px] aspect-[4/3]"
              >
                <div className="absolute bottom-0 w-full flex justify-center">
                  <div className="w-64 h-40 bg-zinc-900 rounded-t-2xl shadow-[0_0_40px_rgba(255,255,255,0.2)] border-8 border-gray-200 flex flex-col relative overflow-hidden group/laptop">
                    {/* Screen Glow */}
                    <div className="absolute inset-0 bg-primary/10 opacity-50 group-hover/laptop:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Mac OS Window Header */}
                    <div className="w-full bg-zinc-800/80 px-3 py-1.5 flex items-center gap-1.5 border-b border-white/5 relative z-10">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>

                    {/* Code Editor Content */}
                    <div className="w-full flex-1 p-3 flex flex-col relative z-10 font-mono text-[8px] leading-tight text-zinc-300 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={codeIndex}
                          variants={codeContainerVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="flex flex-col gap-1"
                        >
                          {codeSnippets[codeIndex].map((line, idx) => (
                            <motion.div key={idx} variants={codeLineVariants} className="flex gap-2">
                              <span className="text-zinc-600 select-none w-3 text-right shrink-0">{idx + 1}</span>
                              <span className="flex-1 flex items-center flex-wrap">
                                {line}
                                {/* Blinking Cursor on the last line */}
                                {idx === codeSnippets[codeIndex].length - 1 && (
                                  <motion.span 
                                    animate={{ opacity: [1, 0, 1] }} 
                                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                    className="inline-block w-1 h-2.5 bg-white ml-0.5"
                                  />
                                )}
                              </span>
                            </motion.div>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="absolute -bottom-4 w-72 h-4 bg-gray-300 rounded-b-xl shadow-xl border-b border-gray-400 flex justify-center">
                    {/* Trackpad notch */}
                    <div className="w-12 h-1 bg-gray-400/50 rounded-b-md" />
                  </div>

                  {/* Floating Particles around laptop */}
                  <motion.div animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-4 -left-4 w-3 h-3 bg-white/60 rounded-full blur-[1px]" />
                  <motion.div animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute top-10 -right-6 w-2 h-2 bg-white/40 rounded-full blur-[1px]" />
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN - CONTENT & STAGGERED REVEAL ── */}
            <div className="w-full lg:w-7/12 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 text-white">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <motion.span variants={itemVariants} className="font-bold text-sm tracking-wider uppercase mb-2 block text-white/90">
                  {props.subtitle}
                </motion.span>
                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-sm">
                  {props.title}
                </motion.h2>
                <motion.p variants={itemVariants} className="text-white/90 mb-8 text-lg md:text-xl font-medium max-w-xl">
                  {props.description}
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-6 font-medium">
                  {props.contacts?.map((contact: any, index: number) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 whitespace-nowrap bg-white/10 px-4 py-2 rounded-full border border-white/20 shadow-sm backdrop-blur-sm"
                    >
                      {contact.icon}
                      <span>{contact.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* ── CTA BUTTON ── */}
              {props.button && (
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="shrink-0 mt-8 lg:mt-0"
                >
                  <MagneticButton href={props.button.href || "#"}>
                    {props.button.text}
                    {props.button.icon}
                  </MagneticButton>
                </motion.div>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
