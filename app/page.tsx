"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiNextdotjs
} from "react-icons/si";
import { FaReact, FaNodeJs, } from "react-icons/fa";
import {
  FaGitAlt,
  FaGithub,
  FaWhatsapp,
  FaLinkedin
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";
import { link } from "fs";


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "education", "experience", "projects", "skills", "achievements", "gallery", "certificates"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Achievements" },
    { id: "gallery", label: "Gallery" },
    { id: "certificates", label: "Certificates" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projects = [
    {
      title: "Task Management System",
      description: "A comprehensive task and subtask management application with progress tracking and team collaboration features.",
      icon: (
        <svg className="w-12 h-12 text-[#0000CD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      githubLink: "https://github.com/ChandaniSahu/TaskManagementSystem",
      visitLink: "https://chandani-project-management.netlify.app/"
    },
    {
      title: "YouTube Transcriptor & MCQ Generator",
      description: "AI-powered web app that converts YouTube videos to transcripts and generates MCQs with detailed answer analysis.",
      icon: (
        <svg className="w-12 h-12 text-[#0000CD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      githubLink: "https://github.com/ChandaniSahu/YouTubeTranscriptor",
      visitLink: "https://youtube-transcriptor.netlify.app/"
    },
    {
      title: "Online Book Store",
      description: "Book Store platform where users can browse , search and download the book by uploading one another book.",
      icon: (
        <svg className="w-12 h-12 text-[#0000CD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      githubLink: "https://github.com/ChandaniSahu/Ebook",
      visitLink: "https://ebook-chandani.netlify.app/"
    },
    {
      title: "Tech Fest Management System",
      description: "Event management platform for college tech fests with registration, scheduling, and participant tracking.",
      icon: (
        <svg className="w-12 h-12 text-[#0000CD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      githubLink: "https://github.com/ChandaniSahu/TechfestParticipants",
      visitLink: "https://mseit-techfest-2025-participate.netlify.app/"
    }
  ];




  const skills = [
    { name: "React", icon: <FaReact size={24} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={24} /> },
    { name: "Node.js", icon: <FaNodeJs size={24} /> },
    { name: "MongoDB", icon: <SiMongodb size={24} /> },
    { name: "Firebase", icon: <SiFirebase size={24} /> },
    { name: "JavaScript", icon: <SiJavascript size={24} /> },
    { name: "TypeScript", icon: <SiTypescript size={24} /> },
    { name: "Next.js", icon: <SiNextdotjs size={24} /> },
    { name: "Git", icon: <FaGitAlt size={22} /> },
    { name: "GitHub", icon: <FaGithub size={22} /> },
  ];

  const Achievements = [
    {
      title: "TGC Hackathon – Ministry of Education, Govt of India",
      subtitle: "Selected & Till Presentation Round",
      icon: (
        <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      title: "1st Rank – Poster Making Competition",
      subtitle: "CREDA",
      icon: (
        <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      title: "2nd Rank - CrakCode Hackathon 2025",
      subtitle: "Developed YouTube Transcriptor, MCQ Generator with answer analysis",
      icon: (
        <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    }
  ];

  const achievements = [
    {
      title: "TGC Hackathon – Ministry of Education, Govt of India",
      subtitle: "Selected & Till Presentation Round",
      icon: "🏆"
    },
    {
      title: "1st Rank – Poster Making Competition",
      subtitle: "CREDA",
      icon: "🥇"
    },
    {
      title: "2nd Rank - CrakCode Hackathon 2025",
      subtitle: "Developed YouTube Transcriptor, MCQ Generator with answer analysis",
      icon: "🥈"
    }
  ];


  const certificates = [
    {
      title: "Academic Certificates",
      icon: (
        <svg className="w-8 h-8 text-[#0000CD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      description: "Professional certifications and academic achievements in technology and development.",
      link: "https://drive.google.com/file/d/1kI8Af4I-jHXCB7QGwArHFNRhxkN8CXxR/view",    
    },
    {
      title: "Cultural Certificates",
      icon: (
        <svg className="w-8 h-8 text-[#0000CD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      description: "Recognition for cultural activities, competitions, and leadership roles in college events.",
      link: "https://drive.google.com/file/d/1ZxwLUFLyGVDPffwu-dHcPHG7Ng1tnNAr/view",    
    },
    {
      title: "CV",
      icon: (
        <svg className="w-8 h-8 text-[#0000CD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      description: "Professional resume highlighting skills, experience, education, and qualifications.",
      link: "https://drive.google.com/file/d/1fGiFt1i-_k8HdsxxY1Bup8OpFb333i08/view",    
    }
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-6 h-6 text-white" />,
      link: "https://wa.me/916261956824",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6 text-white" />,
      link: "https://www.linkedin.com/in/chandani-sahu",
    },
    {
      name: "Email",
      icon: <MdEmail className="w-6 h-6 text-white" />,
      link: "mailto:rrrsahu2005@gmail.com",
    },
    {
      name: "Phone",
      icon: <FiPhone className="w-6 h-6 text-white" />,
      link: "tel:+916261956824",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-6 h-6 text-white" />,
      link: "https://github.com/ChandaniSahu",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-700" `}
       >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                <img src="/mylogo.jpg" alt="Logo" className="w-12 h-12  border-2 border-black rounded-full" />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Chandani Sahu</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">MERN Stack Developer</p>
              </div>
            </motion.div>

            {/* Navigation Links - Desktop */}
            < div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative"
                  whileHover={{ y: -2 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-1 py-2 text-sm font-medium transition-colors cursor-pointer relative ${activeSection === item.id
                        ? "text-[#120A8F] dark:text-[#120A8F]"
                        : "text-gray-700 dark:text-gray-300 hover:text-[#120A8F] dark:hover:text-[#120A8F]"
                      }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#120A8F]"
                        layoutId="activeSection"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>

                  {/* Hover line animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#120A8F]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.button>

            {/* Mobile Menu Dropdown */}
            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <motion.div
                className="w-[300px] shadow-sm md:hidden fixed top-0 right-0  bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >

                {/* Close Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-3 right-3"
                >
                  <FiX className="w-7 h-7 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white" />
                </button>

                {/* Navigation Items */}
                <div className="px-4 py-4 space-y-2 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-4 text-base font-medium rounded-lg transition-colors ${activeSection === item.id
                          ? "text-[#120A8F] dark:text-[#120A8F] bg-[#120A8F]50 dark:bg-[#120A8F]/20"
                          : "text-gray-700 dark:text-gray-300 hover:text-[#120A8F] dark:hover:text-[#120A8F] hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

              </motion.div>
            )}

          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center sm:pt-16 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Left Side - Content */}
            <motion.div variants={fadeInUp} className="space-y-6 sm:text-left text-center">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                  Hi, I'm
                </h2>
                <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  Chandani Sahu
                </h3>
                <p className="text-xl md:text-2xl text-[#120A8F] font-semibold">
                  MERN Stack Web Developer
                </p>
              </div>

              <div className="max-w-lg">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  MERN Stack Developer with hands-on experience in building dynamic, scalable, and user-friendly
                web applications. Skilled in modern web technologies, AI integrations, and delivering high-quality
                solutions through internships, hackathons, and academic projects.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4 items-center justify-center sm:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    className={`w-10 h-10 bg-[#120A8F] rounded-full flex items-center justify-center cursor-pointer`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Profile Image */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 p-6 border-[1.5px] border-purple-200 rounded-full">
                  <div className="w-full h-full rounded-full  flex items-center justify-center overflow-hidden bg-white">
                    <img
                      src="/profilePhoto.jpg"
                      alt="Chandani Sahu - MERN Stack Developer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-[#120A8F] rounded-full flex items-center justify-center text-white shadow-lg"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#1560BD] rounded-full flex items-center justify-center text-white shadow-lg"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Education */}
      <section id="education" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Education</h2>
            <div className="w-20 h-1 bg-[#0000CD] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* B.Tech Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#120A8F] rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>

              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors">Bachelor of Technology</h3>
                  <p className="text-[#0000CD] font-semibold mt-1">Mats University</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2022-2026
                </div>
                <div className="bg-[#66b3ff] dark:bg-green-900/30 px-4 py-2 rounded-full">
                  <span className="text-[#1E0C54] dark:text-green-300 font-bold">CGPA: 9.8</span>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm space-x-2 text-gray-600 font-medium">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="9" strokeWidth="2" />
                  <path strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2" />
                </svg>
                <span>Currently Pursuing</span>
              </div>
            </motion.div>

            {/* 10th & 12th Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#120A8F] rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>

              <div className="space-y-6">
                {/* 12th Grade */}
                <div className="flex items-start justify-between pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white  transition-colors">12th Grade - PCMB</h3>
                    <p className="text-[#0000CD] font-semibold mt-1">CGBSE Board</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">2021-2022</div>
                    <div className="bg-[#66b3ff] dark:bg-green-900/30 px-3 py-1 rounded-full">
                      <span className="text-[#1E0C54] dark:text-green-300 font-bold">92%</span>
                    </div>
                  </div>
                </div>

                {/* 10th Grade */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white  transition-colors">10th Grade</h3>
                    <p className="text-[#0000CD] font-semibold mt-1">CGBSE Board</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">2019-2020</div>
                    <div className="bg-[#66b3ff] dark:bg-green-900/30 px-3 py-1 rounded-full">
                      <span className="text-[#1E0C54] dark:text-green-300 font-bold">96%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-[#0000CD] mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Experience Card */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300">

              {/* Header Section with Solid Background */}
              <div className="bg-[#120A8F]50 dark:bg-[#120A8F]/20 px-8 py-6 rounded-t-lg border-b border-gray-300 dark:border-[#120A8F]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Company Icon */}
                    <div className="w-12 h-12 bg-[#120A8F] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">React Developer</h3>
                      <p className="text-[#120A8F] dark:text-[#120A8F] font-medium">CrakCode</p>
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="mt-4 md:mt-0">
                    <span className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-[#120A8F] dark:border-[#120A8F] text-[#120A8F] dark:text-[#120A8F] rounded-full font-medium text-sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Jun 2025 - Present
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-8 py-6">
                {/* Location & Type */}
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">Remote</span>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <svg className="w-5 h-5 text-[#120A8F] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "SEO Improvement & Performance Optimization",
                      "Resource Management System UI Responsiveness",
                      "Debugging & Bug Fixing"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <svg className="w-5 h-5 text-[#120A8F] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "JavaScript", "Tailwind CSS", "Git", "Performance Tools"].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
            <div className="w-20 h-1 bg-[#0000CD] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  {/* SVG Icon */}
                  <div className="flex justify-center mb-4">
                    {project.icon}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-6 leading-relaxed">
                    {project.description || "A modern web application built with cutting-edge technologies for optimal performance and user experience."}
                  </p>

                  {/* Buttons */}
                  <div className="flex justify-center space-x-4">
                    <motion.button
                      className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>GitHub</span>
                    </motion.button>
                    <motion.button
                      className="flex items-center space-x-2 bg-[#120A8F] text-white px-4 py-2 cursor-pointer rounded-lg hover:bg-[#120A8F] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.visitLink, '_blank')}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Visit</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* Skills */}
<section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
      <div className="w-20 h-1 bg-[#0000CD] mx-auto"></div>
    </motion.div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700 text-center"
          whileHover={{ 
            scale: 1.05,
            rotate: 20,
            transition: { duration: 0.3 }
          }}
        >
          <div className="text-[#0000cd] mb-2 flex justify-center">
            {skill.icon}
          </div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            {skill.name}
          </h3>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Achievements */}
<section id="achievements" className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h2>
      <div className="w-20 h-1 bg-[#0000CD] mx-auto"></div>
    </motion.div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-yellow-500 text-center"
          whileHover={{ x: 10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-4xl mb-4">
            {achievement.icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {achievement.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {achievement.subtitle}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Gallery */}
<section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Gallery</h2>
      <div className="w-20 h-1 bg-[#0000CD] mx-auto"></div>
    </motion.div>
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-64 md:h-80 bg-gray-300 dark:bg-gray-600 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
          <img src="/CREDA-prize.jpeg" alt="CREDA prize" className="w-full h-full object-cover" />
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
          <strong>Mr. Rajesh Rana Sir</strong>, IAS Officer & CEO of CREDA
          <br />
          (Chhattigarh Renewable Energy and Development Agency)
        </p>
      </motion.div>
    </div>
  </div>
</section>

{/* Certificates */}
<section id="certificates" className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Certificates</h2>
      <div className="w-20 h-1 bg-[#0000CD] mx-auto"></div>
    </motion.div>
    <div className="grid md:grid-cols-3 gap-8">
      {certificates.map((cert, index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-center"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-[#0000CD] mb-4 flex justify-center">
            {cert.icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {cert.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 min-h-[3rem]">
            {cert.description}
          </p>
          <motion.button
            className="bg-[#120A8F] text-white px-6 py-3 rounded-lg hover:bg-[#120A8F] transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(cert.link, '_blank')}
          >
            <FiEye className="w-4 h-4 inline-block mr-2" /> View
          </motion.button>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
           >
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <div className="flex justify-center sm:space-x-6 space-x-2 mb-8">
              {socialLinks.slice(0, socialLinks.length - 1).map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400">
              © 2025 Chandani Sahu. All rights are reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}