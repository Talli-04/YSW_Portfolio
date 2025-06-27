"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, Zap, Crown, FileText, BarChart3, MessageCircle, Settings } from "lucide-react"
import SectionHeading from "./SectionHeading"

export default function Experience() {
  const experiences = [
    {
      period: "2023.1 - 현재 (2년 6개월)",
      role: "Product Manager(IT)",
      company: "주식회사 아이웍스",
      location: "전라남도 순천시",
      color: "indigo",
      type: "professional",
      projects: [
        {
          title: "🛠️ 기획 도구 활용",
          description:
            "Hwp, Power Point, Excel, Notion, Figma 등 다양한 기획 도구를 활용하여 효율적인 프로젝트 관리 및 문서화 작업을 수행합니다.",
          icon: <Settings className="w-5 h-5 text-indigo-400" />,
        },
        {
          title: "📋 문서화 및 요구사항 정의",
          description:
            "제안서, 스토리보드, 정책 문서, 요구사항 정의서(RD) 작성을 통해 프로젝트의 명확한 방향성과 구체적인 실행 계획을 수립합니다.",
          icon: <FileText className="w-5 h-5 text-blue-400" />,
        },
        {
          title: "🤝 개발팀 협업 및 소통",
          description:
            "개발자, 디자이너와의 원활한 소통을 통해 일정 및 업무를 조율하고, 팀 간 효과적인 협업 체계를 구축하여 프로젝트 성공을 이끌어냅니다.",
          icon: <MessageCircle className="w-5 h-5 text-violet-400" />,
        },
        {
          title: "📊 시장 분석 및 리서치",
          description:
            "경쟁사 분석, 사용자 호출, 트렌드 리서치를 통해 시장 동향을 파악하고 데이터 기반의 전략적 의사결정을 지원합니다.",
          icon: <BarChart3 className="w-5 h-5 text-teal-400" />,
        },
        {
          title: "🏛️ 정부과제 관리",
          description:
            "정부과제 문서화 및 업무 관리를 담당하여 공공 프로젝트의 성공적인 수행과 관련 규정 준수를 보장합니다.",
          icon: <Crown className="w-5 h-5 text-orange-400" />,
        },
      ],
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900 to-slate-950 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <SectionHeading title="Experience & Career" />

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start">
                {/* Timeline dot */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center z-10 relative border border-indigo-500/30">
                    <Briefcase className={`w-8 h-8 text-${exp.color}-400`} />
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8 bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-indigo-500/20 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white flex items-center gap-2 font-display korean-heading mb-2">
                        <Zap className={`w-6 h-6 text-${exp.color}-400`} />
                        {exp.role}
                      </h3>
                      <p className="text-xl text-indigo-300 font-medium korean-text">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
                      <div className="flex items-center text-indigo-400 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="korean-text">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-slate-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="korean-text">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {exp.projects.map((project, i) => (
                      <motion.div
                        key={i}
                        className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 group hover:border-indigo-500/30 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-slate-700 group-hover:bg-indigo-500/20 transition-colors duration-300">
                            {project.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white mb-3 korean-heading">{project.title}</h4>
                            <p className="text-slate-300 korean-text leading-relaxed">{project.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
