"use client"

import { motion } from "framer-motion"
import { Clipboard, PencilRuler, MessageSquare } from "lucide-react"
import SectionHeading from "./SectionHeading"
import Image from "next/image"

// Particle animation component
const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-indigo-500/30"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.3,
          }}
          animate={{
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export default function About() {
  const skills = [
    {
      icon: <PencilRuler className="w-8 h-8 text-indigo-400" />,
      title: "기획 및 UX 설계",
      description:
        "사용자 중심 UX/UI 기획, 기능 정의서 및 와이어프레임 설계, 데이터 흐름 설계 등 서비스 구조 설계 경험",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
      title: "기술 커뮤니케이션 능력",
      description:
        "HTML/CSS, React.js, Node.js, Python 등 프론트/백엔드 개발 언어 이해도를 바탕으로 기획–개발 간 원활한 커뮤니케이션 수행",
    },
    {
      icon: <Clipboard className="w-8 h-8 text-violet-400" />,
      title: "프로젝트 리딩 경험",
      description:
        "다양한 이해관계자와의 협업을 조율하고, Agile 방식으로 팀을 운영하며 일정, 품질, 목표를 관리한 실전 경험",
    },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-slate-900 to-slate-950 z-0"></div>
      <ParticleField />

      <div className="container mx-auto px-6 relative z-10 w-full">
        <SectionHeading title="About Me" />

        <div className="max-w-6xl mx-auto">
          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            {/* Profile Image */}
            <motion.div
              className="lg:w-1/3 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="w-80 h-96 rounded-2xl overflow-hidden border-4 border-indigo-500/30 shadow-2xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10">
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile Photo"
                    width={320}
                    height={400}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-indigo-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 blur-xl -z-10"></div>
              </div>
            </motion.div>

            {/* Profile Info */}
            <motion.div
              className="lg:w-2/3 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-indigo-500/20">
                <h3 className="text-3xl font-bold text-white mb-4 korean-heading">안녕하세요! 👋</h3>

                <div className="space-y-4 text-slate-300 korean-text">
                  <p className="text-lg leading-relaxed">
                    <span className="text-indigo-300 font-semibold">B2C/B2B 웹 서비스 기획 및 개발</span>에 특화된
                    Product Manager입니다.
                  </p>

                  <p className="leading-relaxed">
                    IT 제품의 <span className="text-blue-300 font-medium">요구사항 정의부터 출시까지</span> 전 과정을
                    관리하며, 개발팀과의 원활한 커뮤니케이션을 통해 사용자 중심의 서비스를 만들어가고 있습니다.
                  </p>

                  <p className="leading-relaxed">
                    특히 <span className="text-violet-300 font-medium">웹 플랫폼 기획</span>과
                    <span className="text-teal-300 font-medium"> 프로젝트 관리</span>에 강점을 가지고 있으며, AI/ML
                    기술을 활용한 혁신적인 솔루션 개발에도 관심이 많습니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-indigo-500/20 group hover:border-indigo-500/40 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
              >
                <div className="bg-slate-800 p-3 rounded-xl inline-block mb-4 group-hover:bg-indigo-500/20 transition-colors duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{skill.title}</h3>
                <p className="text-slate-300 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
