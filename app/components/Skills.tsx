"use client"

import { motion } from "framer-motion"
import { Code, PencilRuler, FileText, Network, Shield } from "lucide-react"
import SectionHeading from "./SectionHeading"

// Animated background component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-slate-900 to-slate-950 z-0"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 40 }).map((_, i) => (
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

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#skill-grid)" />
        </svg>
      </div>
    </div>
  )
}

// Skill card component
const SkillCard = ({
  icon: Icon,
  title,
  technologies,
  description,
  color = "indigo",
}: {
  icon: any
  title: string
  technologies: string
  description: string
  color?: string
}) => {
  const colors = {
    indigo: "from-indigo-500/20 to-indigo-500/5 border-indigo-500/20 text-indigo-400",
    blue: "from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-400",
    green: "from-green-500/20 to-green-500/5 border-green-500/20 text-green-400",
    red: "from-red-500/20 to-red-500/5 border-red-500/20 text-red-400",
    teal: "from-teal-500/20 to-teal-500/5 border-teal-500/20 text-teal-400",
    violet: "from-violet-500/20 to-violet-500/5 border-violet-500/20 text-violet-400",
    orange: "from-orange-500/20 to-orange-500/5 border-orange-500/20 text-orange-400",
    cyan: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 text-cyan-400",
  }

  const colorClass = colors[color as keyof typeof colors] || colors.indigo

  return (
    <motion.div
      className={`bg-gradient-to-br ${colorClass} backdrop-blur-md p-6 rounded-xl border hover:border-opacity-50 transition-all duration-300 h-full`}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full bg-slate-800 mr-4 border border-slate-700">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white font-display">{title}</h3>
      </div>
      <p className="text-sm text-slate-300 font-mono mb-4">{technologies}</p>
      <p className="text-slate-300">{description}</p>
    </motion.div>
  )
}

export default function Skills() {
  const skills = [
    {
      icon: Code,
      title: "프로그래밍",
      technologies: "C, Java, Python, SQL, HTML, CSS",
      description:
        "절차적/객체지향 프로그래밍 언어에 능숙하며, 웹 마크업 언어와 SQL을 활용한 기본적인 데이터 처리 및 UI 개발 경험 보유.",
      color: "blue",
    },
    {
      icon: Shield,
      title: "취약점 분석",
      technologies: "Burp Suite, IDA, Wireshark",
      description:
        "애플리케이션 및 네트워크 보안 점검 경험 보유. 패킷 분석, 리버스 엔지니어링, 취약점 탐지 및 테스트 도구를 활용한 보안 분석 역량 보유.",
      color: "red",
    },
    {
      icon: PencilRuler,
      title: "기획 및 디자인",
      technologies: "Figma",
      description: "와이어프레임 설계, UI 목업, 사용자 흐름도 등의 인터페이스 기획 및 프로토타이핑 도구 활용.",
      color: "violet",
    },
    {
      icon: Network,
      title: "프로젝트 협업 도구",
      technologies: "Slack, Notion",
      description:
        "팀 커뮤니케이션 및 실시간 협업 툴로 Slack 활용 및 문서 작성 및 일정 관리, 기능 정의 등의 기획/운영 도구로 Notion을 적극 활용.",
      color: "teal",
    },
    {
      icon: FileText,
      title: "문서 작성 도구",
      technologies: "HWP, PowerPoint, Excel",
      description:
        "기획안, 보고서, 발표자료, 데이터 정리 등 다양한 문서 업무에 능숙하며 한컴오피스 및 MS오피스 활용 경험 다수.",
      color: "orange",
    },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-slate-950">
      <AnimatedBackground />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Technical Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              technologies={skill.technologies}
              description={skill.description}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
