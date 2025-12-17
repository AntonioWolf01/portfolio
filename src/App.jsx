import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Database, 
  Code2, 
  BarChart3, 
  BrainCircuit, 
  Server, 
  LineChart, 
  Table, 
  ExternalLink,
  ChevronDown,
  ChevronLeft, // Added for gallery nav
  ChevronRight, // Added for gallery nav
  Terminal,
  Cpu,
  Globe,
  ArrowDown,
  Gamepad2,
  GitGraph,
  Presentation, 
  Twitter, 
  Calculator,
  Image as ImageIcon,
  X 
} from 'lucide-react';

// --- Custom Hook for Scroll Animations ---
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target); // Only animate once
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, visible];
};

// --- Reusable Animated Section Component ---
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Background Decoration Component ---
const BackgroundCode = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden text-slate-800/30 select-none font-dm-sans text-sm">
    <div className="absolute top-20 right-10 opacity-20">
      <pre>{`const antonino = {
  role: "Data Scientist",
  focus: "Sports Analytics",
  stack: ["Python", "R", "SQL"]
};`}</pre>
    </div>
    <div className="absolute bottom-20 left-10 opacity-20">
      <pre>{`while (match_ongoing) {
  predict_outcome();
  optimize_odds();
}`}</pre>
    </div>
  </div>
);

// --- Navbar Component ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-blue-500 font-normal text-xl tracking-wider font-dm-sans">
          Antonio Lupo
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-blue-400 font-medium text-sm transition-colors font-dm-sans"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="Resume.pdf" 
            download
            className="px-5 py-2 rounded-md border border-blue-500 text-blue-400 font-normal text-sm hover:bg-blue-500/10 transition-all font-dm-sans"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

// --- Hero / Landing Page Section ---
const Hero = () => {
  const words = ["data", "stats", "machine learning", "football"];
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 300); 
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-10 pt-20">
      <div className="max-w-5xl mx-auto w-full">
        {/* Title Animation */}
        <AnimatedSection delay={100}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-slate-100 leading-tight mb-8 font-dm-sans">
            Hi, I'm <span className="font-dm-sans font-black text-blue-100">Antonio Lupo</span>,<br />
            and I love <span className="relative inline-flex flex-col h-[1.1em] overflow-hidden align-bottom">
              {/* Text Swipe Animation Container */}
              <span className={`transition-all duration-300 ease-in-out transform ${isAnimating ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                  <span className="font-dm-sans font-black text-blue-100 whitespace-nowrap px-2">
                    {words[index]}
                  </span>
              </span>
              
              {/* Brush Stroke Underline */}
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-blue-500 opacity-80" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00025 6.99997C25.7485 5.56708 72.8596 0.963496 113.911 2.29297C146.591 3.3514 180.994 4.88219 197.986 6.99997" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
        </AnimatedSection>

        {/* Description Animation */}
        <AnimatedSection delay={300}>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light font-dm-sans">
            Data Scientist & Analyst specialized in <span className="text-blue-400">Football Analytics</span> & <span className="text-blue-400">Predictive Modeling</span>.<br className="hidden md:block"/>
            I see data as the <span className="font-bold text-slate-200">language of the pitch</span>, and data science as the tool to <span className="font-bold text-slate-200">interpret it</span>.
          </p>
        </AnimatedSection>

        {/* Button Animation */}
        <AnimatedSection delay={500}>
          <a 
            href="Resume.pdf" 
            download
            className="relative inline-block group cursor-pointer font-dm-sans"
          >
            <span className="absolute inset-0 border-2 border-blue-500 rounded-[60%_40%_70%_30%_/_50%_40%_60%_50%] group-hover:rotate-2 transition-transform duration-300"></span>
            <span className="absolute inset-0 border-2 border-blue-400 rounded-[40%_60%_30%_70%_/_60%_30%_70%_40%] rotate-3 opacity-60 group-hover:-rotate-1 transition-transform duration-300"></span>
            <span className="relative px-12 py-4 text-blue-100 font-bold tracking-wide hover:text-white transition-colors uppercase block">
              Have a Look at my CV
            </span>
          </a>
        </AnimatedSection>

        {/* Arrow Animation */}
        <AnimatedSection delay={700} className="absolute bottom-10 left-1/2 -translate-x-1/2 w-auto">
           <ArrowDown className="text-slate-400 animate-bounce opacity-50" size={24} />
        </AnimatedSection>
      </div>
    </section>
  );
};

// --- About Section ---
const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image Card */}
        <AnimatedSection className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-slate-800 p-2 rounded-xl ring-1 ring-slate-700/50">
            {/* Placeholder for the profile image from screenshot */}
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-slate-700 relative">
               <img 
                src="https://i.postimg.cc/L4rMfZrQ/Gemini-Generated-Image-1qmx0s1qmx0s1qmx.png" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Right: Text Content */}
        <div className="space-y-6">
          <AnimatedSection delay={200}>
            <div className="inline-flex items-center space-x-2 text-blue-400 text-lg font-medium mb-2 font-dm-sans">
              <span>Welcome to my Portfolio!</span>
              <span className="animate-wave origin-bottom-right inline-block">👋</span>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-lg font-dm-sans">
              I’m a <strong>Data Scientist</strong> who loves finding the story behind the numbers—especially when those numbers belong to the sports world.
            </p>
            <p className="text-slate-400 leading-relaxed mt-4 font-dm-sans">
              I hold a <strong>Master’s degree</strong> where I focused heavily on <span className="text-blue-400">Sports Analytics</span> and <span className="text-blue-400">Predictive Modeling</span>. During my studies, I took a deep dive into the field through a specialized course with <strong>Soccerment</strong>. There, I worked with complex event and tracking data to build a model capable of predicting corner kicks. I carried that momentum into my thesis, where I developed a <strong>Deep Learning model</strong> designed to forecast shot dominance in football matches.
            </p>
            <p className="text-slate-400 leading-relaxed mt-4 font-dm-sans">
              Off the pitch, I’ve gained solid technical experience as a <strong>Data Analyst at Aesys Srl</strong>, building Power BI dashboards and helping optimize Azure pipelines.
            </p>
             <p className="text-slate-400 leading-relaxed mt-4 font-dm-sans">
              My journey started in finance and economics. I earned my BSc at the <span className="text-white">University of Bologna</span> (including an exchange semester at Dickinson College in the US) and spent time at Banca Mediolanum and the Riot Investment Society before fully shifting my sights to data science.
            </p>

            <div className="flex space-x-4 mt-8">
              <a href="https://github.com/AntonioWolf01" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-blue-400 transition-colors"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/antonio-lupo-64227920b/" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
              <a href="mailto:antoniolupuz@gmail.com" className="p-2 text-slate-400 hover:text-blue-400 transition-colors"><Mail size={24} /></a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

// --- Skills Section ---
const SkillCard = ({ title, items, icon: Icon, delay }) => (
  <AnimatedSection delay={delay} className="h-full">
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 h-full hover:border-blue-500/30 transition-all duration-300 group">
      <div className="flex items-center space-x-3 mb-6 border-b border-slate-700 pb-4">
        <Icon className="text-blue-400" size={24} />
        <h3 className="text-xl font-bold text-slate-200 font-dm-sans">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-3 text-slate-400 group-hover:text-slate-200 transition-colors font-dm-sans">
            {item.icon}
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const Skills = () => {
  // Re-organized based on CV
  const coreStack = [
    { name: "Python", icon: <Code2 size={16} className="text-yellow-400" /> },
    { name: "R", icon: <FileText size={16} className="text-blue-400" /> },
    { name: "SQL", icon: <Database size={16} className="text-slate-400" /> },
    { name: "Git", icon: <GitGraph size={16} className="text-orange-400" /> },
  ];

  const dataEng = [
    { name: "Azure Cloud", icon: <Server size={16} className="text-blue-300" /> },
    { name: "ETL Processes", icon: <Database size={16} className="text-green-400" /> },
    { name: "Web Scraping", icon: <Globe size={16} className="text-purple-400" /> },
    { name: "Power BI", icon: <BarChart3 size={16} className="text-yellow-500" /> },
  ];

  const modeling = [
    { name: "Machine Learning", icon: <BrainCircuit size={16} className="text-cyan-400" /> },
    { name: "Reinforcement Learning", icon: <Gamepad2 size={16} className="text-red-400" /> },
    { name: "Statistical Analysis", icon: <LineChart size={16} className="text-teal-400" /> },
    { name: "NLP", icon: <Terminal size={16} className="text-gray-400" /> },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-16 font-dm-sans">Skills</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard 
            title="Core Stack" 
            items={coreStack} 
            icon={Terminal}
            delay={100} 
          />
          <SkillCard 
            title="Data Eng & Cloud" 
            items={dataEng} 
            icon={Server}
            delay={300} 
          />
           <SkillCard 
            title="Modeling & Analytics" 
            items={modeling} 
            icon={BrainCircuit}
            delay={500} 
          />
        </div>
      </div>
    </section>
  );
};

// --- Experience Section ---
const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative z-10 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-16 font-dm-sans">Experience</h2>
        </AnimatedSection>

        {/* Experience 1: Aesys */}
        <AnimatedSection delay={200}>
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-xl relative overflow-hidden font-dm-sans mb-8">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="flex items-center space-x-4">
                {/* REPLACED AE text with Logo Image */}
                <div className="w-12 h-12 bg-white rounded flex items-center justify-center overflow-hidden p-1">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrEbbc6yOjjugUVgXBQMwq_CMW2w7VIptPWQ&s" alt="Aesys" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Data Analyst Intern</h3>
                  <p className="text-blue-400">Aesys S.r.l. (Remote)</p>
                </div>
              </div>
              <div className="text-slate-400 text-sm mt-2 md:mt-0 font-dm-sans font-normal">
                04/2025 - 06/2025
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span>Developed a sentiment analysis pipeline in Python to process 56,000+ tweets, utilizing NLP techniques to quantify and visualize communication tone shifts.</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span>Optimized Azure cloud ETL pipelines, restructuring data flows to improve processing scalability and reduce latency for large-scale datasets.</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span>Deployed interactive data visualization apps transforming raw unstructured data into strategic insights for executive decision-making.</span>
              </li>
            </ul>
          </div>
        </AnimatedSection>

        {/* Experience 2: Banca Mediolanum */}
        <AnimatedSection delay={400}>
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 shadow-xl relative overflow-hidden font-dm-sans">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-900"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded flex items-center justify-center overflow-hidden p-1">
                   <img src="https://s3-eu-west-1.amazonaws.com/tpd/logos/4bde7a5b0000640005069647/0x0.png" alt="Banca Mediolanum" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Financial Analyst Intern</h3>
                  <p className="text-blue-400">Banca Mediolanum S.p.A. (Bologna)</p>
                </div>
              </div>
              <div className="text-slate-400 text-sm mt-2 md:mt-0 font-dm-sans font-normal">
                10/2022 - 12/2022
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-blue-500">▹</span>
                  <span>Analyzed portfolio performance metrics to identify growth opportunities, directly supporting senior advisors in wealth management strategies.</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-blue-500">▹</span>
                  <span>Conducted market research and financial reporting, providing data-driven recommendations for client asset allocation.</span>
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// --- Gallery Modal Component ---
const GalleryModal = ({ isOpen, onClose }) => {
  const [currentPost, setCurrentPost] = useState(0);

  const galleryItems = [
    {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQH6-TjQycJYtQ/feedshare-shrink_2048_1536/B4DZsjL.6NI4Aw-/0/1765821903800?e=1767225600&v=beta&t=ROosAg-AwjmFiLFXFsTUVPOEcXFISESEfPvbZboqRpc",
      desc: "Analyzing Teun Koopmeiners' tactical evolution after shifting to a deeper playmaker role under Luciano Spalletti.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7406669356325306368/"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQEJwrZMQjWp5A/feedshare-shrink_1280/B4DZsSxr4jJYAs-/0/1765546575104?e=1767225600&v=beta&t=vdULcsTZNaCjS8AFc-f8lSlSnqZxZBB0DL_OInv8IfU",
      desc: "Visualizing Serie A goalkeeper efficiency and performance relative to post-shot expected goals.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7405271467476865024/"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQF-y3i_pM3SdQ/feedshare-shrink_1280/B4DZsIpMkPKsAc-/0/1765376576006?e=1767225600&v=beta&t=0i7VkcNBCcypQxBtj8zZcMfpYbeXpLUxr4m3FZF1G58",
      desc: "Comparing bookmaker predictions with actual win rates to identify Europe's biggest overachieving and underachieving teams.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7404554249050705920/"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQH16CfhD7Y3TA/feedshare-shrink_2048_1536/B4DZrfLrMWGsAo-/0/1764680971364?e=1767225600&v=beta&t=lJ3uM_HBIz_mdvfstAneBzCKyyLb3PyiJUHrlOSaltQ",
      desc: "Comparing the statistical profiles and distinct strengths of the top six U20 attackers based on market value.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7401655139381620736/"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQHG9IbJgF8qJw/feedshare-shrink_2048_1536/B4DZrJySBaKQAw-/0/1764321993524?e=1767225600&v=beta&t=xAhnc4EPaspqD2N6NH4wNypPd2gGbSqhBwqJizvHwnI",
      desc: "Investigating the migration of top Italian youth talents to German clubs by contrasting playing time data with development efficacy.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7400137641205174273/"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQGcmcD-5Wz42w/feedshare-shrink_2048_1536/B4DZq7grvkIgAw-/0/1764082500103?e=1767225600&v=beta&t=ByqPpyuTRugb7NaEfiW0sPobqUyzpFMmD5rI0Cd0rK8",
      desc: "Ranking the most dangerous attackers in Europe's Top 5 leagues by combining shot quality and finishing overperformance metrics.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7399386529577578496/"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D4E22AQFQg25x5_OnvA/feedshare-shrink_2048_1536/B4EZqcqi93GUAw-/0/1763564991768?e=1767225600&v=beta&t=64GpQ4z1C5n-G5dS1SybUbOhNnyaqNs7H7tU7Idk6Xg",
      desc: "Evaluating Pio Esposito's statistical profile.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7396944099284774912/"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQHJEIUBg6ZSsA/feedshare-shrink_2048_1536/B4DZqCdWcjIgAw-/0/1763125324085?e=1767225600&v=beta&t=2lHHq7IMlw2rf28YGvH747Ec8B4TawqMZwoEYAD354E",
      desc: "Breaking down the feature importance of a predictive model to identify the key factors required for successful algorithmic betting strategies.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7396090982636785664/"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D4D22AQGjqV_07SBwoA/feedshare-shrink_2048_1536/B4DZp42UXTGkAw-/0/1762964097565?e=1767225600&v=beta&t=4cuW4mdzG0phCFogWMQ-gRMNlBhrvxJuk0MBJd9Dh8Y",
      desc: "Analyzing the Serie A standings by comparing actual points with Expected Points to identify performance sustainability and anomalies across the league.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7394407373567766528/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7394407373567766528%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"
    }
  ];

  const nextPost = () => {
    setCurrentPost((prev) => (prev + 1) % galleryItems.length);
  };

  const prevPost = () => {
    setCurrentPost((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  // Handle Keyboard Navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextPost();
      if (e.key === 'ArrowLeft') prevPost();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const item = galleryItems[currentPost];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-800">
          <h3 className="text-2xl font-bold text-white font-dm-sans">Visualization Gallery</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col items-center relative">
            
            {/* Nav Buttons (Desktop: Absolute sides, Mobile: Below or hidden) */}
            <button 
              onClick={prevPost}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-2 rounded-full backdrop-blur-sm transition-all z-10 hidden md:flex"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextPost}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-2 rounded-full backdrop-blur-sm transition-all z-10 hidden md:flex"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Container */}
            <div className="w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-lg mb-6 relative">
                 <img src={item.image} alt="Visualization" className="w-full h-auto object-contain max-h-[60vh]" />
            </div>

            {/* Mobile Nav Controls (Visible only on small screens) */}
            <div className="flex md:hidden space-x-4 mb-4">
              <button onClick={prevPost} className="p-2 bg-slate-800 rounded-full text-white"><ChevronLeft /></button>
              <span className="text-slate-400 text-sm self-center">{currentPost + 1} / {galleryItems.length}</span>
              <button onClick={nextPost} className="p-2 bg-slate-800 rounded-full text-white"><ChevronRight /></button>
            </div>

            {/* Description & Link */}
            <div className="w-full text-left space-y-4">
                 <div className="flex justify-between items-start">
                    <p className="text-slate-300 text-lg leading-relaxed font-dm-sans">
                      {item.desc}
                    </p>
                    <span className="hidden md:block text-slate-500 text-sm whitespace-nowrap ml-4">
                      {currentPost + 1} / {galleryItems.length}
                    </span>
                 </div>
                 
                 <a 
                   href={item.link} 
                   target="_blank" 
                   rel="noreferrer"
                   className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-medium font-dm-sans"
                 >
                    <Linkedin size={20} />
                    <span>View Original Post on LinkedIn</span>
                    <ExternalLink size={16} />
                 </a>
            </div>
        </div>
      </div>
    </div>
  );
};


// --- Projects Section ---
const ProjectCard = ({ title, desc, icon, tags, status, pdf, ppt, image, isGallery, onOpenGallery, githubLink, presentation, linkedinLink }) => (
  <div 
    className={`bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:-translate-y-2 transition-transform duration-300 shadow-lg flex flex-col h-full group font-dm-sans relative ${isGallery ? 'cursor-pointer' : ''}`}
    onClick={isGallery ? onOpenGallery : undefined}
  >
    
    {/* Download Split Overlay (For PDF/PPT Combo) */}
    {pdf && ppt && (
      <div className="absolute inset-0 z-20 flex pointer-events-none group-hover:pointer-events-auto">
        {/* Left Curtain - PDF */}
        <a 
          href={pdf} 
          download 
          className="flex-1 bg-slate-900/95 flex flex-col items-center justify-center border-r border-slate-700 hover:bg-slate-800 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 cursor-pointer group/pdf text-center px-4"
        >
          <FileText size={48} className="text-red-500 mb-4 group-hover/pdf:scale-110 transition-transform duration-300" />
          <span className="text-white font-bold text-lg">Download <span className="text-white">PDF</span></span>
          <span className="text-slate-400 text-sm mt-2">Thesis</span>
        </a>

        {/* Right Curtain - PPT */}
        <a 
          href={ppt} 
          download 
          className="flex-1 bg-slate-900/95 flex flex-col items-center justify-center hover:bg-slate-800 transition-all duration-500 transform translate-x-full group-hover:translate-x-0 cursor-pointer group/ppt text-center px-4"
        >
          <Presentation size={48} className="text-orange-500 mb-4 group-hover/ppt:scale-110 transition-transform duration-300" />
          <span className="text-white font-bold text-lg">Download Presentation</span>
          <span className="text-slate-400 text-sm mt-2">Slides</span>
        </a>
      </div>
    )}

    {/* Github/Presentation Split Overlay */}
    {githubLink && presentation && (
      <div className="absolute inset-0 z-20 flex pointer-events-none group-hover:pointer-events-auto">
        {/* Left Curtain - Github */}
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noreferrer"
          className="flex-1 bg-slate-900/95 flex flex-col items-center justify-center border-r border-slate-700 hover:bg-slate-800 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 cursor-pointer group/github text-center px-4"
        >
          <Github size={48} className="text-white mb-4 group-hover/github:scale-110 transition-transform duration-300" />
          <span className="text-white font-bold text-lg">View Code</span>
          <span className="text-slate-400 text-sm mt-2">Github Repo</span>
        </a>

        {/* Right Curtain - Presentation */}
        <a 
          href={presentation} 
          download 
          className="flex-1 bg-slate-900/95 flex flex-col items-center justify-center hover:bg-slate-800 transition-all duration-500 transform translate-x-full group-hover:translate-x-0 cursor-pointer group/ppt text-center px-4"
        >
          <Presentation size={48} className="text-orange-500 mb-4 group-hover/ppt:scale-110 transition-transform duration-300" />
          <span className="text-white font-bold text-lg">Download Presentation</span>
          <span className="text-slate-400 text-sm mt-2">Slides</span>
        </a>
      </div>
    )}

    {/* New Github/Linkedin Split Overlay */}
    {githubLink && linkedinLink && (
      <div className="absolute inset-0 z-20 flex pointer-events-none group-hover:pointer-events-auto">
        {/* Left Curtain - Github */}
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noreferrer"
          className="flex-1 bg-slate-900/95 flex flex-col items-center justify-center border-r border-slate-700 hover:bg-slate-800 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 cursor-pointer group/github text-center px-4"
        >
          <Github size={48} className="text-white mb-4 group-hover/github:scale-110 transition-transform duration-300" />
          <span className="text-white font-bold text-lg">View Code</span>
          <span className="text-slate-400 text-sm mt-2">Github Repo</span>
        </a>

        {/* Right Curtain - Linkedin */}
        <a 
          href={linkedinLink} 
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-slate-900/95 flex flex-col items-center justify-center hover:bg-slate-800 transition-all duration-500 transform translate-x-full group-hover:translate-x-0 cursor-pointer group/linkedin text-center px-4"
        >
          <Linkedin size={48} className="text-blue-500 mb-4 group-hover/linkedin:scale-110 transition-transform duration-300" />
          <span className="text-white font-bold text-lg">View Post</span>
          <span className="text-slate-400 text-sm mt-2">LinkedIn</span>
        </a>
      </div>
    )}

    {/* Gallery Overlay (Only if isGallery is true) */}
    {isGallery && (
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
             <ImageIcon size={48} className="text-blue-400 mx-auto mb-2" />
             <span className="text-white font-bold text-lg">View Gallery</span>
          </div>
      </div>
    )}

    {/* Mockup Area */}
    <div className="h-48 bg-slate-700 relative overflow-hidden flex items-center justify-center">
        {/* Conditionally render Image or Abstract Gradient */}
        {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-40" 
            />
        ) : (
            <div className="w-full h-full opacity-40 bg-gradient-to-br from-slate-600 to-slate-800"></div>
        )}
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* If has downloads, show split icon hint */}
            {(pdf && ppt) || (githubLink && presentation) || (githubLink && linkedinLink) ? (
               <div className="flex space-x-2 opacity-50">
                  <ArrowDown size={24} className="text-white animate-bounce" />
               </div>
            ) : isGallery ? (
               // Gallery hint handled by overlay above, but keep generic link for fallback
               null
            ) : (
               <ExternalLink size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300" />
            )}
        </div>
    </div>
    
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center space-x-3 mb-3">
        {icon}
        <h3 className="text-xl font-bold text-slate-100">{title}</h3>
      </div>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
        {desc}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map(tag => (
          <span key={tag} className="text-xs font-dm-sans text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [showGallery, setShowGallery] = useState(false);

  const projects = [
    {
      title: "Visualization Gallery",
      desc: "A collection of data visualizations and insights from my latest work in sports analytics, featuring deep dives into match statistics and player performance metrics published on LinkedIn.",
      icon: <ImageIcon className="text-pink-400" />,
      tags: ["Data Viz", "Football Analytics", "Insights"],
      status: "Ongoing",
      image: "https://i.postimg.cc/zXqx8wMh/dl-beatsnoop-com-3000-d-Vy-Si7BHwg-modified.jpg",
      isGallery: true
    },
    {
      title: "Master Thesis: Shot Dominance",
      desc: "Developed a predictive model to forecast shot dominance in football matches. Engineered a robust data pipeline using R for scraping and Python for cleaning and standardizing disparate data sources.",
      icon: <BarChart3 className="text-green-400" />,
      tags: ["R", "Python", "Predictive Modeling"],
      status: "Done",
      pdf: "Thesis_Final_Version.pdf",
      ppt: "FINAL PRESENTATION.pdf",
      image: "https://i.postimg.cc/KYPpw1zN/dl-beatsnoop-com-3000-Fj-Xqbop-Gg-I-modified.jpg"
    },
    {
      title: "ML Predictor for Over/Under 2.5",
      desc: "Engineered a LightGBM Classifier using 9-year historical Fbref data. Implemented rigorous backtesting with Monte Carlo simulations to validate model stability against market volatility.",
      icon: <BrainCircuit className="text-yellow-400" />,
      tags: ["LightGBM", "Monte Carlo", "Sports Betting"],
      status: "Done",
      image: "https://i.postimg.cc/rsM0VFSS/dl-beatsnoop-com-3000-90TRnv-Ewi7-modified.jpg",
      githubLink: "https://github.com/AntonioWolf01/football-ou2.5-predictor",
      linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7392470950207807488/"
    },
    {
      title: "Reinforcement Learning Agent",
      desc: "Developed a custom OpenAI Gym environment to train a Q-Learning Blackjack agent using Linear Function Approximation. Achieved -49% win rate over 1M episodes via binary encoding optimization.",
      icon: <Gamepad2 className="text-orange-400" />,
      tags: ["OpenAI Gym", "Q-Learning", "Python"],
      status: "Done",
      image: "https://i.postimg.cc/HLWTkcKg/dl-beatsnoop-com-3000-HVyve-Lkw-UA-modified.jpg",
      githubLink: "https://github.com/AntonioWolf01/BlackJack---RL",
      presentation: "RL_Presentation.pdf" // Placeholder filename
    },
    {
      title: "Trump Tweet Emotion Analysis",
      desc: "Analyzed the emotional content of Donald Trump's tweets using Natural Language Processing techniques. Implemented sentiment classification to detect distinct emotional patterns and visualize trends over time.",
      icon: <Twitter className="text-blue-400" />,
      tags: ["Python", "NLP", "Sentiment Analysis"],
      status: "Done",
      image: "https://i.postimg.cc/GmymqvGc/dl-beatsnoop-com-3000-4F2Tso-DG5X-modified.jpg",
      githubLink: "https://github.com/AntonioWolf01/trump-tweet-emotion-analysis",
      presentation: "Trump_Presentation.pdf" // Placeholder filename
    },
    {
      title: "Fbref Match Logs Scraper",
      desc: "Developed a comprehensive scraping tool to extract detailed match statistics from Fbref. Automated data collection for advanced football metrics, facilitating in-depth analysis and model training.",
      icon: <Globe className="text-purple-400" />,
      tags: ["Python", "Web Scraping", "Data Engineering"],
      status: "Done",
      image: "https://i.postimg.cc/FKxdVjXq/dl-beatsnoop-com-3000-v-ODm-HYVT8q-modified.jpg",
      githubLink: "https://github.com/AntonioWolf01/fbref-match-logs-scraper",
      linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7393977061280989184/"
    },
    {
      title: "xPoints Calculator",
      desc: "A Streamlit web application that calculates Expected Points (xPoints) for football matches based on Expected Goals (xG) data. Utilizes Monte Carlo simulations to provide probabilistic outcome estimates.",
      icon: <Calculator className="text-teal-400" />,
      tags: ["Python", "Streamlit", "Sports Analytics"],
      status: "Done",
      image: "https://i.postimg.cc/QNzb7rbG/dl-beatsnoop-com-3000-Ggcwdzi-Qf-M-modified.jpg",
      githubLink: "https://github.com/AntonioWolf01/xPoints-Calculator",
      linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7273007167845122048/"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-16 font-dm-sans">Key Projects</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <AnimatedSection key={i} delay={i * 150} className="h-full">
              <ProjectCard 
                {...p} 
                onOpenGallery={() => setShowGallery(true)}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
      
      <GalleryModal isOpen={showGallery} onClose={() => setShowGallery(false)} />
    </section>
  );
};

// --- Footer ---
const Footer = () => (
  <footer className="py-8 text-center text-slate-500 text-sm relative z-10 border-t border-slate-800 bg-slate-900 font-dm-sans">
    <p>Antonio Lupo ©</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="https://github.com/AntonioWolf01" target="_blank" rel="noreferrer" className="hover:text-blue-400 cursor-pointer transition-colors"><Github size={18} /></a>
      <a href="https://www.linkedin.com/in/antonio-lupo-64227920b/" target="_blank" rel="noreferrer" className="hover:text-blue-400 cursor-pointer transition-colors"><Linkedin size={18} /></a>
    </div>
  </footer>
);

// --- Main App Component ---
const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 font-dm-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Import DM Sans Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
        
        .font-dm-sans {
          font-family: 'DM Sans', sans-serif;
        }

        /* Default font override */
        body {
            font-family: 'DM Sans', sans-serif;
        }
      `}</style>
      
      {/* Dynamic Background Elements */}
      <BackgroundCode />
      
      <Navbar />
      
      <main className="flex flex-col">
        {/* ADDED Hero Section */}
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>

      <Footer />

      {/* Tailwind Config for Animation (Simulated here, would be in tailwind.config.js) */}
      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave {
          animation-name: wave;
          animation-duration: 1.8s;
          animation-iteration-count: infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </div>
  );
};

export default App;