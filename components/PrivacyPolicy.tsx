"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  ChevronUp,
  ArrowUp,
  Mail,
  Phone,
  Globe,
  Shield,
  Lock,
  Users,
  Calendar,
  DollarSign,
  AlertTriangle,
  FileText,
  User,
  Database,
  RefreshCw,
} from "lucide-react"
import { cn } from "@/lib/utils"


export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Handle scroll to show/hide back to top button and update progress
  useEffect(() => {
    const handleScroll = () => {
      // Back to top button
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }

      // Scroll progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / documentHeight) * 100
      setScrollProgress(progress)

      // Check which sections are visible
      const newVisibleSections = new Set<string>()
      Object.entries(sectionRefs.current).forEach(([id, ref]) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
            newVisibleSections.add(id)
          }
        }
      })
      setVisibleSections(newVisibleSections)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null)
    } else {
      setActiveSection(section)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <Shield className="h-5 w-5" />,
      content:
        "Upcloud Technology Pvt. Ltd. ('Company', 'we', 'our', 'us') is committed to protecting the privacy of users accessing our digital healthcare services through the Doctors App and Patients App. This Privacy Policy aligns with GDPR, CCPA, and Indian IT Act.",
    },
    {
      id: "company-address",
      title: "Company Address",
      icon: <Globe className="h-5 w-5" />,
      content:
        "9TH FLOOR, S NO 222 FLAT NO 904, THE LANDMARK APPARTMENT, CIVIL LINES GANDHI NAGAR, SOLAPUR, Maharashtra, 413003.",
    },
    {
      id: "services",
      title: "Services",
      icon: <Users className="h-5 w-5" />,
      content:
        "We provide discounted doctor consultations to patients via our Doctors App and Patients App. Features include Appointment Management, Feedback, Profile Management, Record Upload, and Customer Support.",
    },
    {
      id: "discount-policy",
      title: "Discount Policy",
      icon: <DollarSign className="h-5 w-5" />,
      content:
        "All discount percentages are pre-negotiated with doctors and cannot be modified by us unless updated by the respective doctors.",
    },
    {
      id: "internet-handling-charges",
      title: "Internet Handling Charges",
      icon: <Globe className="h-5 w-5" />,
      content: "A nominal fee is charged to maintain platform operations and service quality.",
    },
    {
      id: "user-conduct",
      title: "User Conduct & Banning Policy",
      icon: <AlertTriangle className="h-5 w-5" />,
      content:
        "Doctors may be banned upon multiple verified complaints. Patients engaging in fraudulent activities or misconduct may also face suspension or banning.",
    },
    {
      id: "appointment-handling",
      title: "Appointment Handling & Cancellations",
      icon: <Calendar className="h-5 w-5" />,
      content:
        "We are not liable for appointment cancellations made by doctors. In case of emergencies declared by doctors, resulting in dismissals, we hold no responsibility. Refunds will be processed to user wallets or bank accounts as per payment gateway timelines.",
    },
    {
      id: "data-collection",
      title: "Data Collection & Usage",
      icon: <Database className="h-5 w-5" />,
      content:
        "We collect personal and usage data to provide and improve services. Data is handled per GDPR, CCPA, and Indian IT Act standards.",
    },
    {
      id: "user-rights",
      title: "User Rights",
      icon: <User className="h-5 w-5" />,
      content:
        "Users have rights to access, rectify, delete their data, and opt-out of certain data sharing practices.",
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: <Lock className="h-5 w-5" />,
      content:
        "We ensure robust security measures, including encryption, role-based access, and regular audits to protect user data.",
    },
    {
      id: "retention-transfer",
      title: "Retention & Transfer",
      icon: <RefreshCw className="h-5 w-5" />,
      content:
        "Data is retained only as long as necessary and may be transferred securely as per legal and operational requirements.",
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      icon: <Users className="h-5 w-5" />,
      content: "Our services are not intended for users under the age of 13.",
    },
    {
      id: "changes-policy",
      title: "Changes to Privacy Policy",
      icon: <FileText className="h-5 w-5" />,
      content: "We may update this policy periodically. Notifications will be provided through our services.",
    },
    {
      id: "contact-information",
      title: "Contact Information",
      icon: <Mail className="h-5 w-5" />,
      content: "Email: care@mepay.co.in | Phone: 2311333123 | Website: https://www.mepay.co.in/contact",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-50 dark:from-gray-900 dark:via-indigo-950 dark:to-gray-900">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-8 px-4 sm:px-6 lg:px-8 sticky top-0 z-40"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
                Privacy Policy
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Upcloud Technology Pvt. Ltd. (MePay)</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Last Updated: <span className="font-medium ml-1">May 15, 2025</span>
              </p>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8">
        {/* Table of Contents - Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-1/4 lg:sticky lg:top-32 lg:self-start hidden lg:block"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contents</h3>
            <nav>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2",
                        visibleSections.has(section.id)
                          ? "bg-gradient-to-r from-violet-100 to-indigo-100 dark:from-violet-900/40 dark:to-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-medium"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700/50 text-gray-600 dark:text-gray-400",
                      )}
                    >
                      <span className="text-indigo-500 dark:text-indigo-400">{section.icon}</span>
                      <span>{section.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="lg:w-3/4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-violet-500 to-indigo-600 dark:from-violet-600 dark:to-indigo-800 rounded-3xl shadow-xl overflow-hidden mb-10"
          >
            <div className="relative p-8 sm:p-10 text-white">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    d="M0,0 L100,0 L100,100 L0,100 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M0,0 C50,50 50,50 100,0 L100,100 C50,50 50,50 0,100 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Your Privacy Matters</h2>
                <p className="text-lg text-white/90 max-w-2xl">
                  At MePay, we're committed to transparency and protecting your personal information. This policy
                  explains how we collect, use, and safeguard your data.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollToSection("data-collection")}
                    className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-medium backdrop-blur-sm transition-all duration-200 flex items-center gap-2 border border-white/30"
                  >
                    <Database className="h-5 w-5" />
                    Data Collection
                  </button>
                  <button
                    onClick={() => scrollToSection("user-rights")}
                    className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium backdrop-blur-sm transition-all duration-200 flex items-center gap-2 border border-white/20"
                  >
                    <User className="h-5 w-5" />
                    Your Rights
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sections */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                ref={(el) => (sectionRefs.current[section.id] = el)}
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 sm:px-8 py-5 flex justify-between items-center hover:bg-gray-50/50 dark:hover:bg-gray-750/50 transition-colors duration-150 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-indigo-500 dark:text-indigo-400 p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                      {section.icon}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white text-left">{section.title}</h3>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-1 transition-transform duration-300 transform">
                    {activeSection === section.id ? (
                      <ChevronUp className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {activeSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-2 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700">
                        <p className="text-base">{section.content}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-gray-800 dark:to-indigo-900/50 rounded-3xl shadow-lg p-8 sm:p-10 border border-indigo-100 dark:border-indigo-900/30"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-700/50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-xl inline-block mb-4">
                  <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Email Us</h3>
                <a href="mailto:care@mepay.co.in" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  care@mepay.co.in
                </a>
              </div>

              <div className="bg-white dark:bg-gray-700/50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-xl inline-block mb-4">
                  <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Call Us</h3>
                <span className="text-gray-600 dark:text-gray-300">2311333123</span>
              </div>

              <div className="bg-white dark:bg-gray-700/50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-xl inline-block mb-4">
                  <Globe className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Visit Us</h3>
                <a
                  href="https://www.mepay.co.in/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  www.mepay.co.in/contact
                </a>
              </div>
            </div>
          </motion.div>
        </main>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8 mt-12 border-t border-gray-200 dark:border-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
                MePay
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Upcloud Technology Pvt. Ltd.</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                <span className="sr-only">Terms of Service</span>
                <FileText className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                <span className="sr-only">Contact</span>
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                <span className="sr-only">Website</span>
                <Globe className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Upcloud Technology Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>

      {/* Mobile floating menu */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 lg:hidden"
      >
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200 dark:border-gray-700 p-2 flex items-center">
          <button
            onClick={scrollToTop}
            className="p-3 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>

          <div className="relative group">
            <button
              className="p-3 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
              aria-label="Table of contents"
            >
              <FileText className="h-5 w-5" />
            </button>

            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-3 hidden group-hover:block">
              <div className="max-h-60 overflow-y-auto">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Sections</h4>
                <ul className="space-y-1">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className="w-full text-left px-2 py-1.5 rounded-lg text-xs hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-500 dark:to-indigo-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none z-40 hidden lg:block"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
