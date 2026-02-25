import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Mail, Phone, ArrowRight } from 'lucide-react';
import logo from './assets/logo.jpeg';

const TriangleHRWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [selectedPillar, setSelectedPillar] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    { title: 'Counselling', icon: '🎯', description: 'Professional career guidance and counseling' },
    { title: 'Soft Skill', icon: '💡', description: 'Comprehensive skill development programs' },
    { title: 'Recruitment Assistance', icon: '👥', description: 'Direct networking with companies' },
    { title: 'Workshops & Internship Programs', icon: '📚', description: 'Hands-on learning experiences' }
  ];

  const trainingPillars = [
    { 
      title: 'Center for Learning and Teaching',
      icon: '📚',
      color: '#F59E0B',
      description: 'Foundation of knowledge transfer and skill acquisition',
      details: [
        'Structured curriculum design',
        'Interactive learning methodologies',
        'Continuous assessment and feedback',
        'Knowledge application workshops'
      ]
    },
    { 
      title: 'Skill And Career Development',
      icon: '🎯',
      color: '#EF4444',
      description: 'Building practical competencies for career growth',
      details: [
        'Industry-relevant skill training',
        'Career pathway planning',
        'Professional development programs',
        'Competency-based assessments'
      ]
    },
    { 
      title: 'Center For Creativity',
      icon: '🎨',
      color: '#10B981',
      description: 'Fostering innovation and creative problem-solving',
      details: [
        'Creative thinking workshops',
        'Innovation labs and projects',
        'Design thinking methodologies',
        'Collaborative ideation sessions'
      ]
    },
    { 
      title: 'Industry Institute Partnership Cell',
      icon: '🏢',
      color: '#F97316',
      description: 'Bridging academia and industry expectations',
      details: [
        'Corporate collaboration programs',
        'Industry expert sessions',
        'Real-world project exposure',
        'Internship and placement support'
      ]
    },
    { 
      title: 'Social Responsibility Initiatives',
      icon: '🤝',
      color: '#3B82F6',
      description: 'Developing ethical and socially conscious professionals',
      details: [
        'Community engagement programs',
        'Ethics and values training',
        'Social impact projects',
        'Leadership development'
      ]
    }
  ];

  const phases = [
    {
      phase: 'Phase 1',
      title: 'Training Needs Analysis & Alignment',
      points: ['Identification of skill gaps', 'Alignment with institutional and industry requirements', 'Setting clear learning objectives']
    },
    {
      phase: 'Phase 2',
      title: 'Industry Orientation & Skill Awareness',
      points: ['Industry expectations and employability skills', 'Corporate culture and professional ethics', 'Career awareness and role clarity']
    },
    {
      phase: 'Phase 3',
      title: 'Experiential & Applied Learning',
      points: ['Role plays, simulations, and group activities', 'Real-time industry case studies', 'Communication, teamwork, and problem-solving exercises']
    },
    {
      phase: 'Phase 4',
      title: 'Application, Coaching & Reinforcement',
      points: ['Mock interviews, group discussions, and presentations', 'Performance counselling and individual feedback', 'Audio-visual learning tools and assignments']
    },
    {
      phase: 'Phase 5',
      title: 'Assessment, Feedback & Follow-Up',
      points: ['Pre- and post-training assessment', 'Consolidated feedback and institutional reporting', 'Follow-up discussions to ensure retention']
    }
  ];

  const academicPartners = [
    { category: 'Universities & Autonomous Institutions', partners: ['Christ University', 'KLE College, Bengaluru', 'Maharani Lakshmi Ammanni College for Women', 'Vivekananda College of Law'] },
    { category: 'Engineering & Technology Institutions', partners: ['Vemana Institute of Technology', 'Cambridge Institute of Technology', 'Acharya Institute of Technology', 'ATME College of Engineering, Mysuru'] },
    { category: 'Management & Professional Institutions', partners: ['Don Bosco Institute of Technology (MBA)', 'St. Joseph Engineering College', 'Hoysala Degree College'] }
  ];

  const corporatePartners = [
    { sector: 'BFSI & Financial Services', clients: ['HDFC', 'ICICI', 'Axis Bank', 'Tata Capital'] },
    { sector: 'Retail & Consumer Services', clients: ['Reliance Mart', 'D-Mart', "Domino's"] },
    { sector: 'IT & Information Services', clients: ['Getit Info Services'] },
    { sector: 'Manufacturing & Engineering', clients: ['Precision Group', 'Spack Automotives Pvt. Ltd.'] }
  ];

  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xwvnarzj', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1">
            <div className="flex items-center space-x-3">
              <div className="w-20 h-20 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={logo}
                  alt="Triangle HR Solutions Logo"
                  className="w-12.5 h-12 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Triangle HR Solutions</h1>
                <p className="text-xs text-gray-600">Training • Recruitment • Event Management</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Training', 'Partners', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Services', 'Training', 'Partners', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Bridging Academia and Industry
              </h1>
              <p className="text-xl text-gray-600">
                Delivering quality and value-driven management services, specializing in career-connect training programs and employment opportunities for freshers.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  Our Services
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div>
                  <p className="text-3xl font-bold text-blue-600">13+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">50+</p>
                  <p className="text-gray-600">Partner Institutions</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">10,000+</p>
                  <p className="text-gray-600">Students Trained</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="text-6xl mb-4">🎓</div>
                  <h3 className="text-2xl font-bold text-gray-900">Excellence in Training</h3>
                  <p className="text-gray-600">Empowering students and professionals since 2011</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Triangle HR Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2011, we strongly believe in delivering quality and value-driven management services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="group cursor-pointer transition-all duration-300 hover:translate-x-2">
                <div className="flex items-start space-x-4 p-6 rounded-xl hover:bg-blue-50 transition-all duration-300">
                  <div className="text-3xl">🎯</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      Delivering quality, value-based training that enhances employability while improving individual performance and overall productivity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer transition-all duration-300 hover:translate-x-2">
                <div className="flex items-start space-x-4 p-6 rounded-xl hover:bg-blue-50 transition-all duration-300">
                  <div className="text-3xl">🌟</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Approach</h3>
                    <p className="text-gray-600">
                      Bridging the gap between academic learning and industry expectations through experiential learning and continuous evaluation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer transition-all duration-300 hover:translate-x-2">
                <div className="flex items-start space-x-4 p-6 rounded-xl hover:bg-blue-50 transition-all duration-300">
                  <div className="text-3xl">🤝</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership</h3>
                    <p className="text-gray-600">
                      Associated with NAMANAM Trust, conducting workshops, promoting HR activities, and organizing seminars across Karnataka.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Focus Areas</h3>
                <ul className="space-y-4">
                  {[
                    'Excellence-driven training for interpersonal skills',
                    'Industry-aligned modules for workplace demands',
                    'Positive behavioral change and teamwork',
                    'Overcoming employability challenges',
                    'Competency-based skill development'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 group cursor-pointer">
                      <ChevronRight className="w-5 h-5 text-blue-600 mt-1 group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for training and recruitment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* 5-Pillar Framework */}
          <div className="mt-20">
            <div className="text-center mb-12 animate-fadeIn">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">5-Pillar Training Framework</h3>
              <p className="text-gray-600">Our comprehensive approach to skill development</p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {/* Central Badge - Shows first on mobile with animations */}
              <div className="flex justify-center mb-12 animate-scaleIn">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full border-8 border-yellow-500 bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center shadow-xl animate-pulse-slow">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-gray-900 animate-bounce-gentle">5</div>
                      <div className="text-lg font-semibold text-gray-700">Pillars</div>
                    </div>
                  </div>
                  {/* Rotating ring effect */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-400 animate-spin-slow"></div>
                </div>
              </div>

              {/* Pillars Grid with staggered animations */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainingPillars.map((pillar, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPillar(selectedPillar === index ? null : index)}
                    className={`group relative bg-white rounded-xl cursor-pointer transition-all duration-500 overflow-hidden animate-fadeInUp ${
                      selectedPillar === index 
                        ? 'shadow-2xl scale-105 ring-4 ring-offset-4' 
                        : 'shadow-lg hover:shadow-2xl hover:-translate-y-2'
                    }`}
                    style={{ 
                      borderTop: `5px solid ${pillar.color}`,
                      animationDelay: `${index * 0.15}s`,
                      ringColor: selectedPillar === index ? pillar.color : 'transparent'
                    }}
                  >
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer"></div>

                    {/* Number Badge with bounce */}
                    <div 
                      className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 transition-all duration-300 ${
                        selectedPillar === index ? 'animate-bounce' : 'group-hover:scale-125'
                      }`}
                      style={{ backgroundColor: pillar.color }}
                    >
                      {index + 1}
                    </div>

                    {/* Card Content */}
                    <div className="p-6 text-center">
                      {/* Icon with rotation on hover */}
                      <div 
                        className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl mb-4 transition-all duration-500 ${
                          selectedPillar === index 
                            ? 'scale-110 rotate-12' 
                            : 'group-hover:scale-125 group-hover:rotate-6'
                        }`}
                        style={{ 
                          backgroundColor: pillar.color + '20',
                          border: `3px solid ${pillar.color}`
                        }}
                      >
                        {pillar.icon}
                      </div>

                      {/* Title with transition */}
                      <h4 className={`font-bold text-sm mb-2 px-2 transition-all duration-300 ${
                        selectedPillar === index ? 'text-gray-900 text-base' : 'text-gray-800 group-hover:text-gray-900'
                      }`}>
                        {pillar.title}
                      </h4>

                      {/* Click hint with pulse */}
                      {selectedPillar !== index && (
                        <p className="text-xs text-gray-500 mt-3 animate-pulse">
                          Click for details →
                        </p>
                      )}

                      {/* Expanded Content with animations */}
                      {selectedPillar === index && (
                        <div className="mt-4 pt-4 border-t-2 border-gray-200 text-left animate-slideDown">
                          <p className="text-sm text-gray-600 mb-3 animate-fadeIn">
                            {pillar.description}
                          </p>
                          <ul className="space-y-2">
                            {pillar.details.map((detail, idx) => (
                              <li 
                                key={idx}
                                className="flex items-start text-sm group/item hover:translate-x-1 transition-transform duration-300"
                                style={{ 
                                  animation: `fadeInLeft 0.4s ease-out ${idx * 0.1}s both`
                                }}
                              >
                                <span 
                                  className="w-2 h-2 rounded-full mt-1.5 mr-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"
                                  style={{ backgroundColor: pillar.color }}
                                />
                                <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{detail}</span>
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedPillar(null);
                            }}
                            className="mt-4 w-full py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            style={{ 
                              backgroundColor: pillar.color + '20',
                              color: pillar.color,
                              border: `2px solid ${pillar.color}`
                            }}
                          >
                            Close ✕
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Animations */}
            <style jsx>{`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
              }

              @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
              }

              @keyframes fadeInLeft {
                from { opacity: 0; transform: translateX(-20px); }
                to { opacity: 1; transform: translateX(0); }
              }

              @keyframes scaleIn {
                from { opacity: 0; transform: scale(0.5); }
                to { opacity: 1; transform: scale(1); }
              }

              @keyframes slideDown {
                from { opacity: 0; max-height: 0; transform: translateY(-10px); }
                to { opacity: 1; max-height: 600px; transform: translateY(0); }
              }

              @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
              }

              @keyframes pulse-slow {
                0%, 100% { box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.4); }
                50% { box-shadow: 0 0 0 20px rgba(251, 191, 36, 0); }
              }

              @keyframes bounce-gentle {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
              }

              @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }

              .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
              .animate-fadeInUp { opacity: 0; animation: fadeInUp 0.6s ease-out forwards; }
              .animate-scaleIn { animation: scaleIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
              .animate-slideDown { animation: slideDown 0.5s ease-out; }
              .animate-shimmer { animation: shimmer 1.5s infinite; }
              .animate-pulse-slow { animation: pulse-slow 3s infinite; }
              .animate-bounce-gentle { animation: bounce-gentle 2s infinite; }
              .animate-spin-slow { animation: spin-slow 8s linear infinite; }
            `}</style>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Training Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our methodology combines experiential learning, industry alignment, and continuous performance evaluation
            </p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-white to-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border-l-4 border-blue-600"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-500">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {phase.phase}: {phase.title}
                    </h3>
                    <ul className="space-y-2 mt-4">
                      {phase.points.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-3 group/item cursor-pointer">
                          <ChevronRight className="w-5 h-5 text-blue-600 mt-1 group-hover/item:translate-x-1 transition-transform duration-300" />
                          <span className="text-gray-700 group-hover/item:text-blue-600 transition-colors duration-300">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600">Trusted by leading institutions and corporations</p>
          </div>

          {/* Academic Partners */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Academic Institutions</h3>
            <div className="space-y-6">
              {academicPartners.map((category, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer group"
                >
                  <h4 className="text-xl font-bold text-blue-600 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {category.category}
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.partners.map((partner, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                      >
                        <p className="text-sm text-gray-700 font-medium">{partner}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Partners */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Corporate Clients</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {corporatePartners.map((sector, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer group"
                >
                  <h4 className="text-xl font-bold text-blue-600 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {sector.sector}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {sector.clients.map((client, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-blue-50 text-gray-700 rounded-full text-sm hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl opacity-90">Let's discuss how we can help your organization</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="p-4 bg-white/10 backdrop-blur rounded-lg group-hover:bg-white/20 transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="opacity-90">7338626988</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="p-4 bg-white/10 backdrop-blur rounded-lg group-hover:bg-white/20 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="opacity-90">Info.trianglehrsolutions@gmail.com</p>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    'Industry-aligned, employability-focused training',
                    'Strong linkage between training and recruitment',
                    'Experiential and outcome-driven learning',
                    'Continuous evaluation and reporting',
                    'Direct access to HR networks'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 group/item cursor-pointer">
                      <ArrowRight className="w-5 h-5 mt-1 group-hover/item:translate-x-1 transition-transform duration-300" />
                      <span className="group-hover/item:translate-x-1 transition-transform duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>

              {formStatus === 'success' ? (
                <div className="text-center py-10">
                  <div className="text-green-500 text-5xl mb-4">✓</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-600 mb-6">Thank you! We'll get back to you soon.</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Organization</label>
                    <input
                      type="text"
                      name="organization"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all duration-300"
                      placeholder="Your organization"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows="4"
                      name="message"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all duration-300"
                      placeholder="Tell us about your training needs..."
                    ></textarea>
                  </div>

                  {formStatus === 'error' && (
                    <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">Triangle HR Solutions</h3>
              <p className="text-gray-400 mb-4">
                Empowering careers through quality training and recruitment services since 2011.
              </p>
              <p className="text-sm text-gray-500">
                Associated with NAMANAM Trust
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Training'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>7338626988</li>
                <li className="text-sm">Info.trianglehrsolutions@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Triangle HR Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TriangleHRWebsite;