"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"

export function TechnologiesSection({ props }: { props: any }) {
    if (!props || !props.technologies) return null;

    const techs = props.technologies;
    
    // Distribute technologies into 3 rings based on total count
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

    // Tooltip State
    const [hoveredTech, setHoveredTech] = React.useState<any>(null);

    // Stars State for Solar System Background
    const [stars, setStars] = React.useState<Array<{id: number, x: string, y: string, size: number, delay: number, opacity: number}>>([]);
    const [shootingStars, setShootingStars] = React.useState<Array<{id: number, top: string, left: string, delay: number, duration: number}>>([]);

    // Typing Loop State
    const [typingKey, setTypingKey] = React.useState(0);

    React.useEffect(() => {
        // Generate stars only on client side to avoid hydration errors
        const generatedStars = Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            size: Math.random() * 2.5 + 0.5, // 0.5px to 3px
            delay: Math.random() * 5,
            opacity: Math.random() * 0.5 + 0.1
        }));
        setStars(generatedStars);

        // Generate shooting stars (meteor shower)
        const meteors = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 80 - 20}%`, // Start between -20% and 60% top
            left: `${Math.random() * 80 - 20}%`, // Start between -20% and 60% left
            delay: Math.random() * 15, // Stagger delays up to 15 seconds
            duration: Math.random() * 1.5 + 0.8 // Fast speeds between 0.8s and 2.3s
        }));
        setShootingStars(meteors);

        // Loop the typing effect every 4 seconds (1.8s for typing + 2.2s pause)
        const typeInterval = setInterval(() => {
            setTypingKey(prev => prev + 1);
        }, 4000);

        return () => clearInterval(typeInterval);
    }, []);

    return (
        <section className="py-24 relative bg-slate-50 dark:bg-[#0B0F19] overflow-hidden">
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
                        style={{ 
                            left: star.x, 
                            top: star.y, 
                            width: star.size, 
                            height: star.size,
                        }}
                        animate={{ opacity: [star.opacity, star.opacity * 3, star.opacity] }}
                        transition={{ duration: 3 + star.delay, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}
            </motion.div>

            {/* Shooting Stars (Dark Mode Only) */}
            <div className="absolute inset-0 z-0 pointer-events-none hidden dark:block overflow-hidden">
                {shootingStars.map(star => (
                    <motion.div
                        key={`shooting-${star.id}`}
                        className="absolute h-[2px] w-[150px] rounded-full"
                        style={{
                            top: star.top,
                            left: star.left,
                            background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
                            rotate: 45 // 45 degrees pointing bottom-right
                        }}
                        initial={{ x: -200, y: -200, opacity: 0 }}
                        animate={{ x: 1000, y: 1000, opacity: [0, 1, 1, 0] }}
                        transition={{ 
                            duration: star.duration, 
                            repeat: Infinity, 
                            repeatDelay: star.delay,
                            ease: "linear"
                        }}
                    >
                        {/* Star Head Glow (Front) */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-white rounded-full shadow-[0_0_15px_3px_rgba(255,255,255,1)]" />
                    </motion.div>
                ))}
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
                {/* Animated Section Heading */}
                <div className="flex flex-col items-center justify-center mb-8 relative z-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 font-bold tracking-widest text-sm md:text-base uppercase mb-3"
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
                            {Array.from(props.title || "My Skills Universe").map((char: any, idx) => (
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
                            {/* Blinking Typewriter Cursor */}
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                                className="inline-block w-[3px] h-[0.9em] bg-orange-500 ml-2"
                            />
                        </motion.h2>
                    </div>
                    
                    {/* Glowing underline */}
                    <motion.div 
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "100px", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-1 bg-gradient-to-r from-orange-500 to-pink-500 mt-6 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]"
                    />
                </div>

                <div className="mt-10 lg:mt-20 flex justify-center items-center min-h-[450px] sm:min-h-[600px] lg:min-h-[750px] relative w-full overflow-hidden">
                    
                    {/* Scale Wrapper for Mobile Responsiveness */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.45] xs:scale-[0.55] sm:scale-[0.75] md:scale-[0.85] lg:scale-100 flex items-center justify-center w-[750px] h-[750px]">
                        
                        {/* Central Core (The Sun) */}
                    <motion.div 
                        className="absolute w-32 h-32 rounded-full bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow-300 flex items-center justify-center z-50 cursor-pointer border-2 border-yellow-200/50"
                        animate={{
                            boxShadow: [
                                "0 0 60px rgba(252,211,77,0.5), inset 0 0 20px rgba(255,255,255,0.5)",
                                "0 0 120px rgba(252,211,77,0.9), inset 0 0 40px rgba(255,255,255,0.8)",
                                "0 0 60px rgba(252,211,77,0.5), inset 0 0 20px rgba(255,255,255,0.5)",
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
                                style={{
                                    width: ring.radius * 2,
                                    height: ring.radius * 2,
                                }}
                                animate={{ rotate: 360 * ring.direction }}
                                transition={{
                                    duration: ring.duration,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                {ring.items.map((tech: any, index: number) => {
                                    // Calculate angle for each item
                                    const angle = (index / ring.items.length) * 2 * Math.PI;
                                    const x = Math.cos(angle) * ring.radius;
                                    const y = Math.sin(angle) * ring.radius;

                                    return (
                                        <div
                                            key={tech.name}
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                            style={{
                                                transform: `translate(${x}px, ${y}px)`,
                                            }}
                                            onMouseEnter={() => setHoveredTech(tech)}
                                            onMouseLeave={() => setHoveredTech(null)}
                                        >
                                            {/* Counter-rotation to keep icons upright */}
                                            <motion.div
                                                animate={{ rotate: -360 * ring.direction }}
                                                transition={{
                                                    duration: ring.duration,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                                className="relative group cursor-pointer pointer-events-auto"
                                            >
                                                <div 
                                                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-950 flex items-center justify-center transition-all duration-300 ${tech.color} hover:scale-125 hover:z-50 relative shadow-[inset_-6px_-6px_12px_rgba(0,0,0,0.15),inset_4px_4px_10px_rgba(255,255,255,0.9),0_5px_15px_rgba(0,0,0,0.1)] dark:shadow-[inset_-6px_-6px_12px_rgba(0,0,0,0.8),inset_4px_4px_10px_rgba(255,255,255,0.15),0_0_10px_rgba(0,0,0,0.5)]`}
                                                >
                                                    {/* Hover Atmosphere Glow */}
                                                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_25px_rgba(255,255,255,0.4)]"></div>
                                                    
                                                    <div className="w-8 h-8 flex items-center justify-center relative z-10 drop-shadow-md">
                                                        {tech.icon}
                                                    </div>
                                                </div>
                                                
                                                {/* Tooltip on Hover */}
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

                {/* Space Themed Button */}
                {props.button && (
                    <div className="flex justify-center mt-12 relative z-30">
                        <a href={props.button.href || "#"} className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white rounded-full bg-slate-900 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300">
                            
                            {/* Orbiting Satellite Glow */}
                            <motion.div
                                className="absolute w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_70%,#f97316_100%)] opacity-0 group-hover:opacity-100"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                            />
                            
                            {/* Inner Core */}
                            <div className="absolute inset-[2px] bg-slate-950 rounded-full" />

                            {/* Text & Rocket */}
                            <span className="relative z-10 flex items-center gap-3 tracking-wide group-hover:text-orange-400 transition-colors">
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
