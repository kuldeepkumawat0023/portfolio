import { SEO } from "@/components/seo";
import { HeroSection } from "@/components/home/HeroSection"
import { ContactForm } from "@/components/contact/ContactForm"
import { ContactInfo } from "@/components/contact/ContactInfo"
import { ServicesCTA } from "@/components/services/ServicesCTA"

import {
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaPaperPlane
} from "react-icons/fa"
export const metadata = SEO({
  title: "Contact Kuldeep Kumawat",
  description: "Contact Kuldeep Kumawat for freelance projects, web applications, and technical collaboration.",
  url: "/contact",
});
export default function ContactPage() {
  const heroData = {
    badgeText: "CONTACT ME",
    badgeIcon: "✨",
    headingPart1: "Let's Build Something",
    headingPart2: "Amazing Together! 🚀",
    description: "Have a project in mind or want to discuss an idea? I'm just a message away. Let's connect and create something awesome!",
    bullets: [
      "Clean & Scalable Code",
      "On-time Delivery",
      "100% Client Satisfaction"
    ],
    // The design doesn't show buttons here, the bullets replace them.
    buttons: [],
    image: "/images/home/kuldeepkmt.png",
    imageAlt: "Developer Image",
    badges: [
      {
        label: "Email",
        icon: <FaEnvelope size={30} className="text-orange-500" />,
        positionClass: "top-[15%] sm:top-[20%] left-[-5%] sm:left-[0%]",
        animateY: [-10, 10, -10],
        duration: 4,
        delay: 0
      },
      {
        label: "Phone",
        icon: <FaPhoneAlt size={30} className="text-orange-500" />,
        positionClass: "top-[40%] sm:top-[45%] left-[-15%] sm:left-[-10%]",
        animateY: [-8, 12, -8],
        duration: 4.5,
        delay: 0.5
      },
      {
        label: "Send",
        icon: <FaPaperPlane size={30} className="text-orange-500" />,
        positionClass: "top-[20%] right-[-5%] sm:right-[5%]",
        animateY: [8, -12, 8],
        duration: 4.8,
        delay: 1.5
      }
    ]
  };

  const contactInfoData = {
    items: [
      {
        title: "Email",
        description: "Drop me an email anytime",
        value: "hello@yourname.com",
        icon: <FaEnvelope size={20} />,
        highlight: true
      },
      {
        title: "Phone",
        description: "Call me for quick discussion",
        value: "+91 12345 67890",
        icon: <FaPhoneAlt size={20} />,
        highlight: true
      },
      {
        title: "Location",
        description: "I'm based in",
        value: "India",
        icon: <FaMapMarkerAlt size={20} />,
        highlight: true
      },
      {
        title: "Availability",
        description: "Mon - Sat (10AM - 7PM)",
        value: "Sunday Closed",
        icon: <FaClock size={20} />,
        highlight: true
      }
    ]
  };

  const ctaData = {
    subtitle: "LET'S WORK TOGETHER",
    title: "Have a project in mind?",
    description: "I'm available for freelance work.",
    contacts: [], // Overriding default contacts as design just has a button
    button: {
      text: "Let's Talk",
      icon: <FaArrowRight size={20} className="text-primary" />
    }
  };

  return (
    <main className="pt-10">
      <HeroSection props={heroData} />

      {/* The overlapping wrapper for Form and Info */}
      <div className="relative z-20">
        <ContactForm />
        <ContactInfo props={contactInfoData} />
        <ServicesCTA props={ctaData} />
      </div>
    </main>
  )
}

// Temporary inline import for the CTA button icon since it was missed at the top
import { FaArrowRight } from "react-icons/fa"
