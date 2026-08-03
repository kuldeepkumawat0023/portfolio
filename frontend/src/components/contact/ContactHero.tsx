"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

export function ContactHero({ props }: { props: any }) {
  const contactCards = [
    {
      title: "Email Me",
      value: "kuldeepkumawat2383@gmail.com",
      link: "mailto:kuldeepkumawat2383@gmail.com",
      icon: <FaEnvelope className="w-5 h-5 text-primary" />,
      color: "border-primary/30 bg-primary/10",
    },
    {
      title: "Call / WhatsApp",
      value: "+91 7296824595",
      link: "tel:+917296824595",
      icon: <FaPhoneAlt className="w-5 h-5 text-green-500" />,
      color: "border-green-500/30 bg-green-500/10",
    },
    {
      title: "Location",
      value: "Sunder Vihar Colony, Vivek Vihar, Jaipur",
      link: "https://maps.google.com/?q=Sunder+Vihar+Colony+Vivek+Vihar+Jaipur+Rajasthan",
      icon: <FaMapMarkerAlt className="w-5 h-5 text-teal-400" />,
      color: "border-teal-500/30 bg-teal-500/10",
    },
  ];

  return (
    <section className="relative pt-28 pb-16 overflow-hidden bg-background">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[380px] h-[380px] bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Bullets */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6 shadow-[0_0_15px_rgba(255,126,29,0.15)]">
              <span>{props.badgeIcon || "✨"}</span>
              <span>{props.badgeText || "CONTACT ME"}</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.15]">
              {props.headingPart1 || "Let's Build Something"}{" "}
              <span className="bg-gradient-to-r from-[#5BBBB0] via-[#48A293] to-[#368578] bg-clip-text text-transparent">

                {props.headingPart2 || "Amazing Together! 🚀"}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-6">
              {props.description || "Have a project in mind or want to discuss an idea? I'm just a message away. Let's connect and create something awesome!"}
            </p>

            {/* Bullets */}
            {props.bullets?.length > 0 && (
              <div className="flex flex-col gap-3 mb-8">
                {props.bullets.map((bullet: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium text-sm sm:text-base">{bullet}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Column: Availability Status & Quick Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Live Availability Status Card */}
            <div className="p-5 rounded-2xl border border-green-500/30 bg-green-500/10 backdrop-blur-xl flex items-center gap-3 shadow-[0_0_25px_rgba(34,197,94,0.15)]">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
              </span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-green-400">Current Status</h4>
                <p className="text-sm font-bold text-foreground">Available for Freelance & Full-time Roles</p>
              </div>
            </div>

            {/* Contact Channels Grid */}
            {contactCards.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 8 }}
                className={`p-5 rounded-2xl border backdrop-blur-xl ${item.color} flex items-center gap-4 transition-all duration-300 shadow-md group`}
              >
                <div className="p-3.5 rounded-xl bg-background/90 border border-white/10 shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-0.5">{item.title}</h3>
                  <p className="text-sm font-bold text-foreground truncate">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
