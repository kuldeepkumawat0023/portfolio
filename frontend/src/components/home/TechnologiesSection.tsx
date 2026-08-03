"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

// ─── Types ───────────────────────────────────────────────
interface Tech {
    name: string;
    icon: React.ReactNode;
    color: string;
}

interface Category {
    name: string;
    emoji: string;
    description: string;
    technologies: Tech[];
}

// ─── Category Card ────────────────────────────────────────
const CategoryCard = ({ category, index }: { category: Category, index: number }) => {
    const [hovered, setHovered] = React.useState<string | null>(null);

    const cardColors = [
        { border: "border-blue-500/30", glow: "shadow-blue-500/10", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
        { border: "border-green-500/30", glow: "shadow-green-500/10", badge: "bg-green-500/10 text-green-400 border-green-500/20" },
        { border: "border-orange-500/30", glow: "shadow-orange-500/10", badge: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
        { border: "border-purple-500/30", glow: "shadow-purple-500/10", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
    ];
    const colors = cardColors[index % cardColors.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.12, type: "spring", bounce: 0.4 }}
            className={`relative rounded-2xl border ${colors.border} bg-card/60 backdrop-blur-md p-6 overflow-hidden group hover:shadow-xl ${colors.glow} transition-all duration-500`}
        >
            {/* Glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl bg-gradient-to-br from-white/5 to-transparent" />

            {/* Category Header */}
            <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{category.emoji}</span>
                <h3 className="text-lg font-bold text-foreground">{category.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{category.description}</p>

            {/* Tech Icons Grid */}
            <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, techIndex) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12 + techIndex * 0.06, type: "spring", bounce: 0.5 }}
                        whileHover={{ y: -6, scale: 1.15 }}
                        onMouseEnter={() => setHovered(tech.name)}
                        onMouseLeave={() => setHovered(null)}
                        className="relative group/tech"
                    >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center ${tech.color} shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-border/50 hover:border-primary/30`}>
                            <div className="w-7 h-7 flex items-center justify-center">
                                {tech.icon}
                            </div>
                        </div>
                        {/* Tooltip */}
                        <AnimatePresence>
                            {hovered === tech.name && (
                                <motion.div
                                    initial={{ opacity: 0, y: 6, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.8 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none"
                                >
                                    <div className="bg-foreground text-background text-[11px] font-bold px-2.5 py-1 rounded-lg whitespace-nowrap shadow-xl">
                                        {tech.name}
                                    </div>
                                    <div className="w-2 h-2 bg-foreground rotate-45 mx-auto -mt-1" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

// ─── Orbit View ────────────────────────────────────────────
const OrbitView = ({ techs }: { techs: Tech[] }) => {
    const ring1Count = Math.min(4, techs.length);
    const ring2Count = Math.min(6, Math.max(0, techs.length - ring1Count));
    const ring3Count = Math.max(0, techs.length - ring1Count - ring2Count);

    const ring1Items = techs.slice(0, ring1Count);
    const ring2Items = techs.slice(ring1Count, ring1Count + ring2Count);
    const ring3Items = techs.slice(ring1Count + ring2Count);

    const rings = [
        { radius: 140, duration: 25, items: ring1Items, direction: 1 },
        { radius: 240, duration: 35, items: ring2Items, direction: -1 },
        { radius: 340, duration: 45, items: ring3Items, direction: 1 },
    ];

    const [hoveredTech, setHoveredTech] = React.useState<any>(null);
    const [stars, setStars] = React.useState<Array<{ id: number, x: string, y: string, size: number, delay: number, opacity: number }>>([]);
    const [shootingStars, setShootingStars] = React.useState<Array<{ id: number, top: string, left: string, delay: number, duration: number }>>([]);

    React.useEffect(() => {
        const generatedStars = Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            size: Math.random() * 2.5 + 0.5,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.5 + 0.1
        }));
        setStars(generatedStars);

        const meteors = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 80 - 20}%`,
            left: `${Math.random() * 80 - 20}%`,
            delay: Math.random() * 15,
            duration: Math.random() * 1.5 + 0.8
        }));
        setShootingStars(meteors);
    }, []);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Starry Background */}
            <motion.div
                className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4 z-0 pointer-events-none origin-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            >
                {stars.map(star => (
                    <motion.div
                        key={star.id}
                        className="absolute bg-slate-300 dark:bg-white rounded-full"
                        style={{ left: star.x, top: star.y, width: star.size, height: star.size }}
                        animate={{ opacity: [star.opacity, star.opacity * 3, star.opacity] }}
                        transition={{ duration: 3 + star.delay, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}
            </motion.div>

            {/* Shooting Stars */}
            <div className="absolute inset-0 z-0 pointer-events-none hidden dark:block overflow-hidden">
                {shootingStars.map(star => (
                    <motion.div
                        key={`shooting-${star.id}`}
                        className="absolute h-[2px] w-[150px] rounded-full"
                        style={{
                            top: star.top,
                            left: star.left,
                            background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
                            rotate: 45
                        }}
                        initial={{ x: -200, y: -200, opacity: 0 }}
                        animate={{ x: 1000, y: 1000, opacity: [0, 1, 1, 0] }}
                        transition={{ duration: star.duration, repeat: Infinity, repeatDelay: star.delay, ease: "linear" }}
                    >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-white rounded-full shadow-[0_0_15px_3px_rgba(255,255,255,1)]" />
                    </motion.div>
                ))}
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0" />

            <div className="flex justify-center items-center min-h-[450px] sm:min-h-[600px] lg:min-h-[750px] relative w-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.45] xs:scale-[0.55] sm:scale-[0.75] md:scale-[0.85] lg:scale-100 flex items-center justify-center w-[750px] h-[750px]">
                    {/* Central Sun */}
                    <motion.div
                        className="absolute w-32 h-32 rounded-full bg-gradient-to-tr from-[#368578] via-[#48A293] to-[#5BBBB0] flex items-center justify-center z-50 cursor-pointer border-2 border-teal-200/50"
                        animate={{
                            boxShadow: [
                                "0 0 60px rgba(72,162,147,0.5), inset 0 0 20px rgba(255,255,255,0.5)",
                                "0 0 120px rgba(72,162,147,0.9), inset 0 0 40px rgba(255,255,255,0.8)",
                                "0 0 60px rgba(72,162,147,0.5), inset 0 0 20px rgba(255,255,255,0.5)",
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >

                        <div className="relative z-10 text-center">
                            <span className="font-extrabold text-2xl block text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Tech</span>
                            <span className="font-bold text-sm tracking-widest text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">STACK</span>
                        </div>
                    </motion.div>

                    {/* Orbit Rings */}
                    {rings.map((ring, ringIndex) => {
                        if (ring.items.length === 0) return null;
                        return (
                            <motion.div
                                key={`ring-${ringIndex}`}
                                className="absolute rounded-full border border-slate-200 dark:border-primary/10 pointer-events-none"
                                style={{ width: ring.radius * 2, height: ring.radius * 2 }}
                                animate={{ rotate: 360 * ring.direction }}
                                transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
                            >
                                {ring.items.map((tech: Tech, index: number) => {
                                    const angle = (index / ring.items.length) * 2 * Math.PI;
                                    const x = Math.cos(angle) * ring.radius;
                                    const y = Math.sin(angle) * ring.radius;

                                    return (
                                        <div
                                            key={tech.name}
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                            style={{ transform: `translate(${x}px, ${y}px)` }}
                                            onMouseEnter={() => setHoveredTech(tech)}
                                            onMouseLeave={() => setHoveredTech(null)}
                                        >
                                            <motion.div
                                                animate={{ rotate: -360 * ring.direction }}
                                                transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
                                                className="relative group cursor-pointer pointer-events-auto"
                                            >
                                                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-950 flex items-center justify-center transition-all duration-300 ${tech.color} hover:scale-125 hover:z-50 relative shadow-[inset_-6px_-6px_12px_rgba(0,0,0,0.15),inset_4px_4px_10px_rgba(255,255,255,0.9),0_5px_15px_rgba(0,0,0,0.1)] dark:shadow-[inset_-6px_-6px_12px_rgba(0,0,0,0.8),inset_4px_4px_10px_rgba(255,255,255,0.15),0_0_10px_rgba(0,0,0,0.5)]`}>
                                                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_25px_rgba(255,255,255,0.4)]" />
                                                    <div className="w-8 h-8 flex items-center justify-center relative z-10 drop-shadow-md">
                                                        {tech.icon}
                                                    </div>
                                                </div>
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                                                    <div className="bg-foreground text-background text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                                                        {tech.name}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// ─── Main Component ────────────────────────────────────────
export function TechnologiesSection({ props }: { props: any }) {
    if (!props || !props.technologies) return null;

    const [viewMode, setViewMode] = React.useState<"orbit" | "category">("orbit");
    const [typingKey, setTypingKey] = React.useState(0);

    React.useEffect(() => {
        const typeInterval = setInterval(() => {
            setTypingKey(prev => prev + 1);
        }, 4000);
        return () => clearInterval(typeInterval);
    }, []);

    const techs: Tech[] = props.technologies;
    const categories: Category[] = props.categories || [];

    return (
        <section className="py-24 relative bg-slate-50 dark:bg-[#0B0F19] overflow-hidden">

            <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">

                {/* ── Section Heading ── */}
                <div className="flex flex-col items-center justify-center mb-8 relative z-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BBBB0] to-[#48A293] font-bold tracking-widest text-sm md:text-base uppercase mb-3"
                    >
                        {props.subtitle || "TECHNOLOGIES I WORK WITH"}
                    </motion.span>

                    <div className="min-h-[80px] md:min-h-[120px] flex items-center justify-center w-full">
                        <motion.h2
                            key={typingKey}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center drop-shadow-xl flex flex-wrap justify-center items-center"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
                                }
                            }}
                        >
                            {Array.from(props.title || "My Skills").map((char: any, idx) => (
                                <motion.span
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, display: "none" },
                                        visible: { opacity: 1, display: "inline-block" }
                                    }}
                                    className="text-transparent bg-clip-text bg-gradient-to-br from-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-slate-400"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                            {/* Blinking cursor */}
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                                className="inline-block w-[3px] h-[0.9em] bg-[#48A293] ml-2"
                            />
                        </motion.h2>
                    </div>

                    {/* Glowing underline */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "100px", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-1 bg-gradient-to-r from-[#48A293] to-[#368578] mt-4 rounded-full shadow-[0_0_15px_rgba(72,162,147,0.8)]"
                    />
                </div>

                {/* ── View Toggle ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mb-10 relative z-20"
                >
                    <div className="relative flex items-center bg-card border border-border rounded-full p-1 shadow-lg gap-1">
                        {/* Sliding pill background */}
                        <motion.div
                            className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-[#48A293] to-[#368578] shadow-[0_0_15px_rgba(72,162,147,0.5)]"

                            animate={{
                                left: viewMode === "orbit" ? "4px" : "50%",
                                width: "calc(50% - 4px)",
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 35 }}
                        />
                        <button
                            onClick={() => setViewMode("orbit")}
                            className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${viewMode === "orbit" ? "text-white" : "text-muted-foreground hover:text-foreground"}`}
                        >
                            <span>🌌</span> Orbit View
                        </button>
                        <button
                            onClick={() => setViewMode("category")}
                            className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${viewMode === "category" ? "text-white" : "text-muted-foreground hover:text-foreground"}`}
                        >
                            <span>📋</span> Category View
                        </button>
                    </div>
                </motion.div>

                {/* ── Views ── */}
                <AnimatePresence mode="wait">
                    {viewMode === "orbit" ? (
                        <motion.div
                            key="orbit"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                        >
                            <OrbitView techs={techs} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="category"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
                        >
                            {categories.map((cat, i) => (
                                <CategoryCard key={cat.name} category={cat} index={i} />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── Button ── */}
                {props.button && (
                    <div className="flex justify-center mt-12 relative z-30">
                        <a href={props.button.href || "#"} className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white rounded-full bg-slate-900 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(72,162,147,0.4)] transition-all duration-300">
                            <motion.div
                                className="absolute w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_70%,#48A293_100%)] opacity-0 group-hover:opacity-100"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                            />
                            <div className="absolute inset-[2px] bg-slate-950 rounded-full" />
                            <span className="relative z-10 flex items-center gap-3 tracking-wide group-hover:text-primary transition-colors">

                                {props.button.text}
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    🚀
                                </motion.span>
                            </span>
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}
