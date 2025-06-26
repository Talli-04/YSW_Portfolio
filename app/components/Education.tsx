"use client"

import { GraduationCap, Calendar, Award, Users, Mic, Shield } from "lucide-react"
import SectionHeading from "./SectionHeading"
import { motion } from "framer-motion"

// Education card component
const EducationCard = ({
  degree,
  institution,
  period,
  achievements,
  extracurricular,
  icon: Icon,
  index,
}: {
  degree: string
  institution: string
  period: string
  achievements: Array<{ text: string; icon: any }>
  extracurricular?: Array<{ text: string; icon: any; year: string }>
  icon: any
  index: number
}) => {
  return (
    <motion.div
      className="bg-slate-800/90 backdrop-blur-md p-8 rounded-xl border border-indigo-500/20 shadow-lg hover:border-indigo-500/40 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-6">
        <div className="p-4 rounded-full bg-indigo-500/20 mr-6">
          <Icon className="w-8 h-8 text-indigo-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white font-display korean-heading mb-2">{degree}</h3>
          <p className="text-xl text-indigo-300 korean-text">{institution}</p>
        </div>
      </div>

      <div className="flex items-center text-slate-400 mb-6">
        <Calendar className="w-5 h-5 mr-2" />
        <span className="korean-text">{period}</span>
      </div>

      <div className="space-y-4 mb-8">
        {achievements.map((achievement, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 + 0.2 }}
          >
            <div className="p-2 rounded-lg bg-slate-600 flex-shrink-0">{achievement.icon}</div>
            <p className="text-slate-300 korean-text leading-relaxed">{achievement.text}</p>
          </motion.div>
        ))}
      </div>

      {extracurricular && (
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 korean-heading flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-400" />
            교내외 활동 및 수상
          </h4>
          <div className="space-y-3">
            {extracurricular.map((activity, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 p-4 bg-gradient-to-r from-slate-700/30 to-slate-600/30 rounded-lg border border-slate-600/50 hover:border-indigo-500/30 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 + 0.4 }}
              >
                <div className="p-2 rounded-lg bg-slate-500 flex-shrink-0">{activity.icon}</div>
                <div className="flex-1">
                  <p className="text-slate-200 korean-text leading-relaxed font-medium">{activity.text}</p>
                  <span className="text-xs text-slate-400 mt-1 block">{activity.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default function Education() {
  const education = [
    {
      degree: "해킹보안과 졸업",
      institution: "순천전자고등학교",
      period: "2023년 1월 졸업",
      achievements: [
        {
          text: "다양한 과목에서 우수한 성적으로 전반적인 학업 역량 입증",
          icon: <Award className="w-5 h-5 text-yellow-400" />,
        },
        {
          text: "팀 프로젝트 및 과외활동을 통해 협업 및 문제 해결 능력 강화",
          icon: <Users className="w-5 h-5 text-blue-400" />,
        },
        {
          text: "학생회 방송부, 전공 동아리 활동으로 리더십 및 의사소통 능력 향상",
          icon: <Mic className="w-5 h-5 text-purple-400" />,
        },
        {
          text: "정보 보안 주제 토론 및 대외 참여를 통해 자기주도적 학습 역량 향상",
          icon: <Shield className="w-5 h-5 text-green-400" />,
        },
      ],
      extracurricular: [
        {
          text: "2022년 호남사이버 보안컨퍼런스 웹취약점 해킹톤 최우수상",
          icon: <Shield className="w-5 h-5 text-red-400" />,
          year: "2022",
        },
        {
          text: "2022년 CODEGATE 청소년부 예선 23위",
          icon: <Shield className="w-5 h-5 text-cyan-400" />,
          year: "2022",
        },
        {
          text: "2021년 호남사이버 보안컨퍼런스 웹취약점 해킹톤 최우수상",
          icon: <Shield className="w-5 h-5 text-red-400" />,
          year: "2021",
        },
        {
          text: "2021년 AI 창업 모델링 경진대회 대상",
          icon: <Award className="w-5 h-5 text-orange-400" />,
          year: "2021",
        },
        {
          text: "순천전자고등학교 전교 부회장, 학급 반장, 부반장",
          icon: <Users className="w-5 h-5 text-indigo-400" />,
          year: "재학중",
        },
      ],
      icon: GraduationCap,
    },
  ]

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-slate-900 to-slate-950 z-0"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
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
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 25 + 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Education" />

        <div className="max-w-4xl mx-auto space-y-8 mt-12">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              period={edu.period}
              achievements={edu.achievements}
              extracurricular={edu.extracurricular}
              icon={edu.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
