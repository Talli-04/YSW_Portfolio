"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
  Target,
  CheckCircle,
  ExternalLink,
  X,
  Globe,
  Accessibility,
  GraduationCap,
  Building,
  List,
  Briefcase,
  Clock,
} from "lucide-react"
import SectionHeading from "./SectionHeading"
import Image from "next/image"

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)

  const projects = [
    {
      id: 1,
      title: "순천제일대학교 장애학생지원센터 홈페이지 구축",
      period: "2024.11.1 - 2025.02.01 (90일)",
      image: "/images/project1.png",
      icon: <Accessibility className="w-6 h-6 text-blue-400" />,
      category: "Education",
      client: "순천제일대학교 장애학생지원센터",
      role: "PM / 서비스 기능 설계 및 QA 총괄",
      url: "https://web.suncheon.ac.kr/support/",
      description: "장애학생 대상 웹접근성 정보 접근성 제공 및 웹 접근성 강화",
      objectives: [
        "웹접근성 표준 준수 기획 및 설계",
        "학사 지원, 활동 신청, 자료 제공 기능을 중심으로 한 통합 정보 포털 구축",
        "사용자 중심 UX 구조 설계 및 관리자 기능 간소화",
      ],
      keyFeatures: [
        "웹접근성 표준 준수 기획 및 설계 - WCAG 2.1 레벨 AA 기준에 부합하는 UI/UX 설계",
        "시각/청각/지체장애 등 다양한 장애 유형을 고려한 콘텐츠 구조화",
        "스크린리더 대응, 키보드 내비게이션 지원 등 실제 사용 환경 최적화",
        "정보 구조(IA) 재설계 및 콘텐츠 카테고리 구성",
        "지원 서비스, 정책금, 상담 안내 등 핵심 콘텐츠를 카테고리별 재정렬",
        "자주 묻는 질문(FAQ), 공지사항 기능 구현을 통한 정보 접근 효율화",
        "맞춤형 서비스 기능 설계 및 구현",
        "개인맞춤 지원 요청/상담 신청이 가능한 맞춤 시스템 설계",
        "프로그램 신청 시 조건에 따라 콘텐츠 출력 기능 구현",
        "장애영역 카테고리별 정보 분류",
        "Q&A 게시판 및 공지사항 관리 기능 개발",
        "관리자-학생 간 실시간 소통 체계 구축",
        "보안 강화 및 개인정보 보호 설계",
        "암호화 정보 프로토콜(SSL/TLS) 적용 및 신원 접근권한 통제",
        "개인정보보호법 및 교육기관 가이드라인 준수 정책 설계",
        "자속 개선을 위한 CMS 및 피드백 시스템 구축",
        "관리자용 콘텐츠 업데이트 시스템(CMS) 개발",
        "사용자 피드백 수집 및 통계 기반 서비스 개선 방향 도입",
      ],
      achievements: [
        "웹 접근성 준수율 향상으로 정보 소외 계층",
        "간편 신청 시스템 구축으로 학생 사용자 편의성 향상",
        "CMS 기반 콘텐츠 관리 효율화",
      ],
    },
    {
      id: 2,
      title: "스마트제조 고급인력양성 온라인 통합 플랫폼 구축",
      period: "2024.10.10 - 2025.01.07 (90일)",
      image: "/images/project2.png",
      icon: <GraduationCap className="w-6 h-6 text-indigo-400" />,
      category: "Education",
      client: "스마트제조 고급인력양성 온라인 통합 플랫폼",
      role: "PM / 서비스 기능 설계 및 QA 총괄",
      url: "https://jnsmart-hrd.co.kr/ko/main.do",
      description: "스마트제조 분야 교육, 인증, 취업연계 정보를 통합 제공",
      objectives: [
        "참여기관, 교육생, 기업이 유기적으로 연결되는 시스템 구축",
        "교육생체 기반으로 통계 및 취업 정보 관리체계 제공",
      ],
      keyFeatures: [
        "인력양성 교육 운영을 위한 통합 플랫폼 기획 및 설계",
        "스마트제조 교육생별, 참여기관, 업무기업 정보 구축 설계",
        "교육생 대상 취업연계, 이력관리, 수강신청 시스템 개발",
        "교육 수요자 중심 기능 구현",
        "온라인/오프라인 교육 프로그램 등록, 신청, 이수처리 기능 구현",
        "이수 취업률 취업 출석부 시스템 및 자동 수료증 발급 기능 설계",
        "참여기관과의 취업 연계 기능 설계",
        "채용공고 등록, 신청자 관리, 기업 맞춤형 인재 매칭 시스템 구축",
        "관리자-기업 간 연동되는 채용정보 백오피스 세팅",
        "통계성과 통계 및 보고 시스템 개발",
        "교육 참석, 수료율, 기업 참여 현황 등 KPI 기반 통계 시스템 설계",
        "CSV 추출 및 연간 리포트 자동화 기능 포함",
        "플랫폼 유지보수성 및 확장성 고려한 구조 설계",
        "참여기관별 권한 분리된 관리자 페이지 구축",
        "멀티 교육영역 확장을 위한 모듈화 설계 적용",
      ],
      achievements: [
        "스마트제조산업 내 교육 연계 구축 체계화",
        "플랫폼 기반으로 교육 참여자 및 수요자 간 조율 최적화",
        "수요자 중심 UI로 신청률 및 이수율 증가 유도",
      ],
    },
    {
      id: 3,
      title: "전라남도 금융복지상담센터 홈페이지 재구축",
      period: "2024.09.05 - 2024.12.02 (90일)",
      image: "/images/project3.png",
      icon: <Building className="w-6 h-6 text-green-400" />,
      category: "Public",
      client: "전라남도 금융복지상담센터",
      role: "PM / 서비스 기능 설계 및 QA 총괄",
      url: "https://jnfwc.or.kr/",
      description: "온라인 상담 신청·교육 접수 시스템 고도화",
      objectives: ["본인인증 기반 사용자 보호성 준비 효율성 향상", "민영화 및 도입으로 사용자 접근성 강화"],
      keyFeatures: [
        "홈페이지 전면 개편 기획 및 정보구조 개선",
        "메인 페이지 레이아웃 재설계 및 콘텐츠 정보정렬화 향상",
        "온라인 상담, 교육 신청, 공지 등 핵심 기능 중심 재배치",
        "신청 신청 시스템 설계 및 구현",
        "온라인 상담신청 등록·조회 수정 기능 포함",
        "본인 인증 기능 및 관리자 SMS 알림 시스템 구축",
        "개인정보 맞춤화 및 상담내용 보안관리 프로토콜 설계",
        "교육 참수관리 기능 통합 구축",
        "교육 등록, 일정 관리, 신청자 명단 관리 기능 설계",
        "신청 기간 제한, 신청 인원수 조절 등 조건별 제어 기능 포함",
        "메인 메뉴 및 콘텐츠 노출 최적화 개발",
        "다중 메뉴 등록, 게시글 연동 노출 기능 구현",
        "관리자 정보 메뉴 관리 시스템 개발",
        "모바일 사용자 중심 반응형 웹 구현",
        "모바일 접근성 고려한 최적화 위젯 및 UX 설계",
        "기기 해상도 자동 대응, 빠른 로딩 구조 설계",
      ],
      achievements: [
        "상담·교육 통합관리 시스템으로 운영효율성 및 충익도 개선",
        "사용자 UI/UX 개선으로 접근성 향상 30% 이상 향상",
        "학습자 개인정보 보호 설계로 사용자 신뢰도 제고",
      ],
    },
    {
      id: 4,
      title: "MNU 메이커스페이스 LMS 플랫폼 구축",
      period: "2024.05.08 - 2024.08.05 (120일)",
      image: "/images/project4.png",
      icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
      category: "Education",
      client: "MNU 메이커스페이스 LMS 플랫폼",
      role: "PM / 서비스 기능 설계 및 QA 총괄",
      url: "https://mnumakers.kr/index.php",
      description: "메이커 장비 사용자를 위한 온라인 안전 교육 LMS 도입",
      objectives: ["수강 → 수료 → 장비사용 권한 부여까지 자동 연계", "관리자용 통합 교육 운영 기능 제공"],
      keyFeatures: [
        "온라인 강의 기반 학습 관리 시스템(LMS) 구축 총괄",
        "장비 사용법, 안전교육 등 필수 이수 과정 등록 및 관리 기능 개발",
        "수강 후 장비 사용 권한 연동 구조 설계",
        "반응형 웹 및 다양한 디바이스 최적화 개발",
        "PC, 모바일, 태블릿 지원, 최적화되는 UI/UX 버전",
        "콘텐츠 업로드 관리 기능을 통합관리 시스템(CMS) 기반 구축",
        "회원 관리 및 권한 분류 시스템 구현",
        "관리자, 강사, 수강생 간 권한 분리",
        "수강 이력 및 콘텐츠 접근 제한 기능 포함",
        "성과 및 연동도 조사 기능 도입",
        "메뉴별 활용 평가, 강의 만족도 등에 시스템 구축",
        "관리자용 통합 리포트 사용자 기능 개발",
        "수료증 자동 발급 시스템 개발",
        "강의 이수 기준 만족 시 자동 발급",
        "PDF 기반 출원서로 다운로드 및 발급 내역 관리 기능 구축",
      ],
      achievements: [
        "사전 학습→실습 구조 확립으로 운영효율성 증가",
        "사용자 편의성 및 교육 참여율 개선",
        "LMS 기반 교육이력 자동 관리 시스템 완성",
      ],
    },
  ]

  // 전체 프로젝트 리스트 (수정된 정확한 데이터)
  const allProjectsList = [
    {
      name: "순천제일대학교 장애학생지원센터 홈페이지 구축",
      period: "2024.11.11 - 2025.02.01",
      role: "IT프로젝트관리",
    },
    {
      name: "스마트제조 고급인력양성 온라인 통합 플랫폼 구축용역",
      period: "2024.10.10 - 2025.01.07",
      role: "IT프로젝트관리",
    },
    {
      name: "(주)인지솔루션 대표홈페이지 구축 용역",
      period: "2024.10.08 - 2024.12.06",
      role: "IT프로젝트관리",
    },
    {
      name: "거인이엔씨(주) 대표홈페이지 구축 용역",
      period: "2024.10.02 - 2024.12.10",
      role: "IT프로젝트관리",
    },
    {
      name: "전라남도금융복지상담센터 홈페이지 재구축 용역",
      period: "2024.09.05 - 2024.12.02",
      role: "IT프로젝트관리",
    },
    {
      name: "농업회사법인 고마리 주식회사 홈페이지 구축",
      period: "2024.07.26 - 2024.10.28",
      role: "IT프로젝트관리",
    },
    {
      name: "청년정책114 홈페이지 고도화 용역",
      period: "2024.06.13 - 2024.08.11",
      role: "IT프로젝트관리",
    },
    {
      name: "MNU메이커스페이스 LMS 플랫폼 구축 용역",
      period: "2024.05.08 - 2024.08.05",
      role: "IT프로젝트관리",
    },
    {
      name: "순천여행 홈페이지 콘텐츠 추가 및 보강 용역",
      period: "2024.03.14 - 2024.06.11",
      role: "IT프로젝트관리",
    },
    {
      name: "2024년 순천시 소상공인원스톱지원센터 홈페이지 유지보수",
      period: "2024.02.01 - 2024.12.31",
      role: "IT프로젝트관리",
    },
    {
      name: "청년정책114 시스템 창업연당 카테고리 구축",
      period: "2024.01.26 - 2024.03.25",
      role: "IT프로젝트관리",
    },
    {
      name: "2024년 전남테크노파크 홈페이지 유지보수 용역",
      period: "2024.01.01 - 2024.12.31",
      role: "IT프로젝트관리",
    },
    {
      name: "순천시 문화건강센터 홈페이지 기능개선",
      period: "2023.12.12 - 2023.12.22",
      role: "IT프로젝트관리",
    },
    {
      name: "금융복지상담관리시스템(클로버) 유지보수",
      period: "2023.11.30 - 2024.11.29",
      role: "IT프로젝트관리",
    },
    {
      name: "순천만국가정원 홈페이지 콘텐츠 보강 용역",
      period: "2023.11.22 - 2023.12.31",
      role: "IT프로젝트관리",
    },
    {
      name: "청암대학교 동반성장형 취업정보플랫폼 기능개선",
      period: "2023.11.08 - 2024.02.08",
      role: "IT프로젝트관리",
    },
    {
      name: "순천시농업기술센터 귀농귀촌 홈페이지 개편 용역",
      period: "2023.10.20 - 2023.12.18",
      role: "IT프로젝트관리",
    },
    {
      name: "교육용 클라우드 플랫폼 구축",
      period: "2023.10.18 - 2024.02.15",
      role: "IT프로젝트관리",
    },
    {
      name: "순천제일대학교 산학협력단 홈페이지 구축",
      period: "2023.10.17 - 2024.01.31",
      role: "IT프로젝트관리",
    },
    {
      name: "순천 푸드앤아트페스티벌 홈페이지 개편 용역",
      period: "2023.08.14 - 2023.10.12",
      role: "IT프로젝트관리",
    },
    {
      name: "여행자 안심거리 전광판 관리시스템 구축 용역",
      period: "2023.07.20 - 2023.10.17",
      role: "IT프로젝트관리",
    },
    {
      name: "순천시 청년정책 홈페이지 제작 용역",
      period: "2023.03.06 - 2023.04.19",
      role: "IT프로젝트관리",
    },
    {
      name: "순천시 목재문화지원센터 홈페이지 구축 용역",
      period: "2023.03.06 - 2023.06.03",
      role: "IT프로젝트관리",
    },
    {
      name: "2023년 순천시청소년문화의집 홈페이지 유지보수",
      period: "2023.01.16 - 2023.06.15",
      role: "IT프로젝트관리",
    },
    {
      name: "2022년 데이터기반 지역기업 혁신성장 플랫폼 고도화 용역",
      period: "2023.01.09 - 2023.04.17",
      role: "IT프로젝트관리",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 3 >= projects.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 < 0 ? Math.max(0, projects.length - 3) : prev - 1))
  }

  const openProjectDetail = (projectId: number) => {
    setSelectedProject(projectId)
  }

  const closeProjectDetail = () => {
    setSelectedProject(null)
  }

  const openAllProjects = () => {
    setShowAllProjects(true)
  }

  const closeAllProjects = () => {
    setShowAllProjects(false)
  }

  const selectedProjectData = projects.find((p) => p.id === selectedProject)

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-slate-900 to-slate-950 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <SectionHeading title="Professional Projects" subtitle="대표 프로젝트" />

        {/* Project Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-full shadow-lg border border-indigo-500/30 backdrop-blur-md group-hover:shadow-indigo-500/25 transition-all duration-300">
              <ChevronLeft className="w-6 h-6 text-white" />
            </div>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 rounded-full shadow-lg border border-purple-500/30 backdrop-blur-md group-hover:shadow-purple-500/25 transition-all duration-300">
              <ChevronRight className="w-6 h-6 text-white" />
            </div>
          </motion.button>

          {/* Project Cards */}
          <div className="overflow-hidden rounded-2xl mx-16">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * (100 / 3)}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-1/3 flex-shrink-0 px-4">
                  <motion.div
                    className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-indigo-500/20 overflow-hidden cursor-pointer group hover:border-indigo-500/40 transition-all duration-300 h-full flex flex-col"
                    onClick={() => openProjectDetail(project.id)}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden flex-shrink-0">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

                      {/* Click Indicator */}
                      <div className="absolute bottom-4 right-4 bg-indigo-600/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 rounded-lg bg-slate-800 border border-indigo-500/20 flex-shrink-0">
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white korean-heading leading-tight mb-2 line-clamp-2">
                            {project.title}
                          </h3>
                          <div className="flex items-center text-sm text-slate-400 min-w-0">
                            <Calendar className="w-4 h-4 mr-2 text-indigo-400 flex-shrink-0" />
                            <span className="korean-text truncate">{project.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-300 korean-text text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between mt-auto gap-2">
                        <div className="flex items-center text-sm text-slate-400 min-w-0 flex-1">
                          <User className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" />
                          <span className="korean-text text-xs truncate">{project.role}</span>
                        </div>
                        <span className="text-indigo-400 text-sm korean-text group-hover:text-indigo-300 transition-colors duration-300 whitespace-nowrap flex-shrink-0">
                          자세히 보기 →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.max(1, projects.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-indigo-500" : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 프로젝트 더보기 버튼 */}
        <div className="flex justify-center mt-12">
          <motion.button
            onClick={openAllProjects}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl korean-text font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <List className="w-5 h-5" />
            프로젝트 더보기
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
              →
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && selectedProjectData && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProjectDetail}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-slate-900 rounded-2xl border border-indigo-500/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={closeProjectDetail}
                className="absolute top-4 right-4 z-10 bg-slate-800/80 backdrop-blur-sm p-2 rounded-full hover:bg-slate-700 transition-colors duration-300"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Modal Header */}
              <div className="relative h-60 overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedProjectData.image || "/placeholder.svg"}
                  alt={selectedProjectData.title}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute bottom-6 left-6 right-16">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-indigo-500/20">
                      {selectedProjectData.icon}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white korean-heading leading-tight">
                    {selectedProjectData.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Project Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 korean-heading flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-indigo-400" />
                      프로젝트 개요
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">사업명:</span>
                        <span className="text-slate-300 korean-text">{selectedProjectData.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">수행기간:</span>
                        <span className="text-slate-300 korean-text">{selectedProjectData.period}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">담당업무:</span>
                        <span className="text-slate-300 korean-text">{selectedProjectData.role}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 korean-heading flex items-center gap-2">
                      <Target className="w-5 h-5 text-violet-400" />
                      프로젝트 목적
                    </h3>
                    <ul className="space-y-2">
                      {selectedProjectData.objectives.map((objective, i) => (
                        <li key={i} className="text-sm text-slate-300 korean-text flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-violet-400 mt-2 flex-shrink-0"></div>
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 korean-heading flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    주요 기능 및 수행 내용
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedProjectData.keyFeatures.map((feature, i) => (
                      <div key={i} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                        <p className="text-sm text-slate-300 korean-text leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 korean-heading flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    주요 성과
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedProjectData.achievements.map((achievement, i) => (
                      <div key={i} className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                        <p className="text-sm text-slate-300 korean-text leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                <div className="pt-4 border-t border-slate-700">
                  <a
                    href={selectedProjectData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300 korean-text"
                  >
                    <Globe className="w-5 h-5" />
                    프로젝트 사이트 방문
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* All Projects Modal */}
      <AnimatePresence>
        {showAllProjects && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAllProjects}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-slate-900 rounded-2xl border border-indigo-500/20 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={closeAllProjects}
                className="absolute top-4 right-4 z-10 bg-slate-800/80 backdrop-blur-sm p-2 rounded-full hover:bg-slate-700 transition-colors duration-300"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Modal Header */}
              <div className="p-6 border-b border-slate-700">
                <h2 className="text-3xl font-bold text-white korean-heading flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-indigo-400" />
                  전체 프로젝트 목록
                </h2>
                <p className="text-slate-400 mt-2 korean-text">참여한 모든 프로젝트 리스트입니다.</p>
              </div>

              {/* Projects List */}
              <div className="p-6">
                <div className="space-y-4">
                  {allProjectsList.map((project, index) => (
                    <motion.div
                      key={index}
                      className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-slate-700 border border-slate-600 flex-shrink-0">
                          <Briefcase className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-white mb-2 korean-heading leading-tight">
                            {project.name}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                              <span className="text-slate-400">수행기간:</span>
                              <span className="text-slate-300 korean-text">{project.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-slate-400">수행업무:</span>
                              <span className="text-slate-300 korean-text">{project.role}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
