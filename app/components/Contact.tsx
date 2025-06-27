"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import SectionHeading from "./SectionHeading"

// Contact card component
const ContactCard = ({
  icon: Icon,
  title,
  content,
  link,
  delay,
  color = "indigo",
}: {
  icon: any
  title: string
  content: string
  link: string
  delay: number
  color?: string
}) => {
  const colors = {
    indigo: "from-indigo-500/20 to-indigo-500/5 border-indigo-500/30",
    blue: "from-blue-500/20 to-blue-500/5 border-blue-500/30",
    purple: "from-purple-500/20 to-purple-500/5 border-purple-500/30",
  }

  const bgColor = colors[color as keyof typeof colors] || colors.indigo

  return (
    <motion.div
      className={`bg-gradient-to-br ${bgColor} backdrop-blur-md p-8 rounded-2xl border shadow-xl`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id={`pattern-${color}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#pattern-${color})`} />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center mb-6 shadow-lg border border-slate-600/50">
            <Icon className={`w-10 h-10 text-${color}-400`} />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>

          <p className="text-slate-300 text-lg font-medium">{content}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 relative overflow-hidden bg-slate-950">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-slate-900 to-slate-950 z-0"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-indigo-500/20"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <SectionHeading title="Contact" subtitle="언제든지 연락주세요" />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ContactCard
            icon={Mail}
            title="이메일"
            content="zxzxv156@gmail.com"
            link="mailto:zxzxv156@gmail.com"
            delay={0.1}
            color="indigo"
          />

          <ContactCard
            icon={Phone}
            title="전화번호"
            content="010-8612-8553"
            link="tel:010-8612-8553"
            delay={0.2}
            color="blue"
          />

          <ContactCard icon={MapPin} title="위치" content="전라남도 순천시" link="#" delay={0.3} color="purple" />
        </div>
      </div>
    </section>
  )
}
