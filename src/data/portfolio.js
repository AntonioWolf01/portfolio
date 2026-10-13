export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
]

export const skillGroups = [
  {
    title: 'Core Stack',
    icon: 'terminal',
    items: [
      { name: 'Python', icon: 'code', color: 'text-yellow-400' },
      { name: 'R', icon: 'file', color: 'text-blue-400' },
      { name: 'SQL', icon: 'database', color: 'text-slate-400' },
      { name: 'Git', icon: 'git', color: 'text-orange-400' },
    ],
  },
  {
    title: 'Data Eng & Cloud',
    icon: 'server',
    items: [
      { name: 'Azure Cloud', icon: 'server', color: 'text-blue-300' },
      { name: 'ETL Processes', icon: 'database', color: 'text-green-400' },
      { name: 'Web Scraping', icon: 'globe', color: 'text-purple-400' },
      { name: 'Power BI', icon: 'chart', color: 'text-yellow-500' },
    ],
  },
  {
    title: 'Modeling & Analytics',
    icon: 'brain',
    items: [
      { name: 'Machine Learning', icon: 'brain', color: 'text-cyan-400' },
      { name: 'Reinforcement Learning', icon: 'game', color: 'text-red-400' },
      { name: 'Statistical Analysis', icon: 'lineChart', color: 'text-teal-400' },
      { name: 'NLP', icon: 'terminal', color: 'text-gray-400' },
    ],
  },
]

export const experiences = [
  {
    role: 'Analyst',
    company: 'Football Benchmark',
    location: 'Budapest',
    dates: '02/2025 - Present',
    accent: 'bg-blue-500',
    logo: '/images/logo-football-benchmark.jpg',
    bullets: [
      'Engineered end-to-end Python scraping pipelines to extract public football data and seamlessly integrate it into Azure databases for streamlined retrieval.',
      'Optimized and refactored machine learning workflows, enhancing the data lifecycle from initial preparation through to final predictions',
      'Contributed to a Python pipeline hosted on Streamlit that automates presentation creation end-to-end, retrieving data from the Azure database, staging it in Excel, and auto-generating PowerPoint slides with populated charts',
      "Collaborated in the refinement and testing of specific endpoints of the company's API",
      "Supported the company's newsletter by analyzing socio-economic trends in football and designing insightful data visualizations using Python and Excel",
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Aesys S.r.l.',
    location: 'Remote',
    dates: '04/2025 - 06/2025',
    accent: 'bg-blue-500',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrEbbc6yOjjugUVgXBQMwq_CMW2w7VIptPWQ&s',
    bullets: [
      'Developed a sentiment analysis pipeline in Python to process 56,000+ tweets, utilizing NLP techniques to quantify and visualize communication tone shifts.',
      'Optimized Azure cloud ETL pipelines, restructuring data flows to improve processing scalability and reduce latency for large-scale datasets.',
      'Deployed interactive data visualization apps transforming raw unstructured data into strategic insights for executive decision-making.',
    ],
  },
  {
    role: 'Financial Analyst Intern',
    company: 'Banca Mediolanum S.p.A.',
    location: 'Bologna',
    dates: '10/2022 - 12/2022',
    accent: 'bg-blue-900',
    logo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/4bde7a5b0000640005069647/0x0.png',
    bullets: [
      'Analyzed portfolio performance metrics to identify growth opportunities, directly supporting senior advisors in wealth management strategies.',
      'Conducted market research and financial reporting, providing data-driven recommendations for client asset allocation.',
    ],
  },
]

export const projects = [
  {
    id: 'visualization-gallery',
    title: 'Visualization Gallery',
    desc: 'A collection of data visualizations and insights from my latest work in sports analytics, featuring deep dives into match statistics and player performance metrics published on LinkedIn.',
    icon: 'image',
    iconColor: 'text-pink-400',
    tags: ['Data Viz', 'Football Analytics', 'Insights'],
    status: 'Ongoing',
    image: '/images/project-visualization-gallery.jpg',
    actions: [{ type: 'gallery', label: 'View Gallery', shortLabel: 'Gallery' }],
  },
  {
    id: 'shot-predictor',
    title: 'Big Five Shot Predictor',
    desc: "An interactive dashboard forecasting the full shot distribution for every team in every match of Europe's top five leagues. A machine learning model trained on ten seasons of shots, xG, possession and pre-match odds feeds a negative binomial distribution to price over/under lines and highlight value bets.",
    icon: 'target',
    iconColor: 'text-cyan-400',
    tags: ['Machine Learning', 'Web App', 'Sports Betting'],
    status: 'Ongoing',
    image: '/images/project-shot-predictor.jpg',
    actions: [
      { type: 'external', label: 'View App', shortLabel: 'App', href: 'https://antoniowolf01.github.io/bigfive-shot-predictor-webapp/', icon: 'github' },
      { type: 'external', label: 'View LinkedIn Post', shortLabel: 'LinkedIn', href: 'https://www.linkedin.com/posts/antonio-lupo-64227920b_its-been-a-while-since-my-last-post-on-a-ugcPost-7514652405729361920-IW07/', icon: 'linkedin' },
    ],
  },
  {
    id: 'betfair-bot',
    title: 'Betfair Value Betting Bot',
    desc: 'An automated Python service that reads model probabilities from Excel, fetches live odds through the Betfair Exchange JSON-RPC API, and places back and hedging lay orders end-to-end. Features certificate-based authentication, fuzzy team-name resolution and a dry-run mode.',
    icon: 'bot',
    iconColor: 'text-red-400',
    tags: ['Python', 'Betfair API', 'Automation'],
    status: 'Done',
    image: '/images/project-betfair-bot.jpg',
    actions: [
      { type: 'external', label: 'View Code', shortLabel: 'Code', href: 'https://github.com/AntonioWolf01/betfair-bot', icon: 'github' },
      { type: 'external', label: 'View LinkedIn Post', shortLabel: 'LinkedIn', href: 'https://www.linkedin.com/posts/antonio-lupo-64227920b_i-built-a-bot-that-finds-and-places-value-ugcPost-7448784123177062400-aPlK/', icon: 'linkedin' },
    ],
  },
  {
    id: 'shot-dominance-thesis',
    title: 'Master Thesis: Shot Dominance',
    desc: 'Developed a predictive model to forecast shot dominance in football matches. Engineered a robust data pipeline using R for scraping and Python for cleaning and standardizing disparate data sources.',
    icon: 'chart',
    iconColor: 'text-green-400',
    tags: ['R', 'Python', 'Predictive Modeling'],
    status: 'Done',
    image: '/images/project-shot-dominance-thesis.jpg',
    actions: [
      { type: 'download', label: 'Download Thesis', shortLabel: 'Thesis', href: 'Thesis_Final_Version.pdf', icon: 'file' },
      { type: 'download', label: 'Download Presentation', shortLabel: 'Slides', href: 'FINAL PRESENTATION.pdf', icon: 'presentation' },
    ],
  },
  {
    id: 'over-under-predictor',
    title: 'ML Predictor for Over/Under 2.5',
    desc: 'Engineered a LightGBM Classifier using 9-year historical Fbref data. Implemented rigorous backtesting with Monte Carlo simulations to validate model stability against market volatility.',
    icon: 'brain',
    iconColor: 'text-yellow-400',
    tags: ['LightGBM', 'Monte Carlo', 'Sports Betting'],
    status: 'Done',
    image: '/images/project-over-under-predictor.jpg',
    actions: [
      { type: 'external', label: 'View Code', shortLabel: 'Code', href: 'https://github.com/AntonioWolf01/football-ou2.5-predictor', icon: 'github' },
      { type: 'external', label: 'View LinkedIn Post', shortLabel: 'LinkedIn', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7392470950207807488/', icon: 'linkedin' },
    ],
  },
  {
    id: 'reinforcement-learning-agent',
    title: 'Reinforcement Learning Agent',
    desc: 'Developed a custom OpenAI Gym environment to train a Q-Learning Blackjack agent using Linear Function Approximation. Achieved ~49% win rate over 1M episodes via binary encoding optimization.',
    icon: 'game',
    iconColor: 'text-orange-400',
    tags: ['OpenAI Gym', 'Q-Learning', 'Python'],
    status: 'Done',
    image: '/images/project-reinforcement-learning-agent.jpg',
    actions: [
      { type: 'external', label: 'View Code', shortLabel: 'Code', href: 'https://github.com/AntonioWolf01/BlackJack---RL', icon: 'github' },
      { type: 'download', label: 'Download Presentation', shortLabel: 'Slides', href: 'RL_Presentation.pdf', icon: 'presentation' },
    ],
  },
  {
    id: 'trump-emotion-analysis',
    title: 'Trump Tweet Emotion Analysis',
    desc: "Analyzed the emotional content of Donald Trump's tweets using Natural Language Processing techniques. Implemented sentiment classification to detect distinct emotional patterns and visualize trends over time.",
    icon: 'twitter',
    iconColor: 'text-blue-400',
    tags: ['Python', 'NLP', 'Sentiment Analysis'],
    status: 'Done',
    image: '/images/project-trump-emotion-analysis.jpg',
    actions: [
      { type: 'external', label: 'View Code', shortLabel: 'Code', href: 'https://github.com/AntonioWolf01/trump-tweet-emotion-analysis', icon: 'github' },
      { type: 'download', label: 'Download Presentation', shortLabel: 'Slides', href: 'Trump_Presentation.pdf', icon: 'presentation' },
    ],
  },
  {
    id: 'fbref-scraper',
    title: 'Fbref Match Logs Scraper',
    desc: 'Developed a comprehensive scraping tool to extract detailed match statistics from Fbref. Automated data collection for advanced football metrics, facilitating in-depth analysis and model training.',
    icon: 'globe',
    iconColor: 'text-purple-400',
    tags: ['Python', 'Web Scraping', 'Data Engineering'],
    status: 'Done',
    image: '/images/project-fbref-scraper.jpg',
    actions: [
      { type: 'external', label: 'View Code', shortLabel: 'Code', href: 'https://github.com/AntonioWolf01/fbref-match-logs-scraper', icon: 'github' },
      { type: 'external', label: 'View LinkedIn Post', shortLabel: 'LinkedIn', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7393977061280989184/', icon: 'linkedin' },
    ],
  },
  {
    id: 'xpoints-calculator',
    title: 'xPoints Calculator',
    desc: 'A Streamlit web application that calculates Expected Points (xPoints) for football matches based on Expected Goals (xG) data. Utilizes Monte Carlo simulations to provide probabilistic outcome estimates.',
    icon: 'calculator',
    iconColor: 'text-teal-400',
    tags: ['Python', 'Streamlit', 'Sports Analytics'],
    status: 'Done',
    image: '/images/project-xpoints-calculator.jpg',
    actions: [
      { type: 'external', label: 'View Code', shortLabel: 'Code', href: 'https://github.com/AntonioWolf01/xPoints-Calculator', icon: 'github' },
      { type: 'external', label: 'View LinkedIn Post', shortLabel: 'LinkedIn', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7273007167845122048/', icon: 'linkedin' },
    ],
  },
]

export const galleryItems = [
  {
    image: '/images/gallery-16.jpg',
    desc: 'Analyzing the Serie A standings after the first five matchdays by comparing actual points with Expected Points to identify performance sustainability and anomalies across the league.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7510371520074911744/',
  },
  {
    image: '/images/gallery-01.jpg',
    desc: "Evaluating the effectiveness of Juventus's highly aggressive kickoff strategy under Luciano Spalletti by analyzing Expected Threat data from the opening minutes of matches.",
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7429928955341684736/?originTrackingId=GxgfQssgtOn9X5tJbCj%2BdQ%3D%3D',
  },
  {
    image: '/images/gallery-02.jpg',
    desc: 'Investigating the correlation between European squad market values and expected points to identify which clubs are efficiently maximizing their financial resources.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7428041508974428160/?originTrackingId=KB60qZZR%2FGtq3yt6b0ZzrA%3D%3D',
  },
  {
    image: '/images/gallery-03.jpg',
    desc: "Identifying Serie A's most effective playmakers by utilizing Expected Threat metrics to measure how their territorial passing increases scoring probability.",
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7422941781132111872/?originTrackingId=gyWIPA4kLDMkR2cGjJLBeQ%3D%3D',
  },
  {
    image: '/images/gallery-04.jpg',
    desc: "Assessing goalkeeper performances across Europe's top five leagues over the past five years using goals prevented metrics to identify the continent's elite shot-stoppers.",
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7416437593329885186/?originTrackingId=%2BJh7dsAl9MKVjzqBIkICfA%3D%3D',
  },
  {
    image: '/images/gallery-05.jpg',
    desc: "Comparing the statistical dominance of Spalletti's Juventus against recent Serie A title winners using xPTS per Game metrics.",
    link: 'https://www.linkedin.com/feed/update/urn:li:share:7414686759709700096/',
  },
  {
    image: '/images/gallery-06.jpg',
    desc: "Profiling Nico Paz's rare statistical duality as a player combining elite creative output with high-volume defensive work.",
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7412115891674554368/',
  },
  {
    image: '/images/gallery-07.jpg',
    desc: "Evaluating Fiorentina's paradoxical collapse and relegation risk by comparing their expected points against historical survival benchmarks.",
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7411454712211894272/',
  },
  {
    image: '/images/gallery-08.jpg',
    desc: "Analyzing Teun Koopmeiners' tactical evolution after shifting to a deeper playmaker role under Luciano Spalletti.",
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7406669356325306368/',
  },
  {
    image: '/images/gallery-09.jpg',
    desc: 'Visualizing Serie A goalkeeper efficiency and performance relative to post-shot expected goals.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7405271467476865024/',
  },
  {
    image: '/images/gallery-10.jpg',
    desc: "Comparing bookmaker predictions with actual win rates to identify Europe's biggest overachieving and underachieving teams.",
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7404554249050705920/',
  },
  {
    image: '/images/gallery-11.jpg',
    desc: 'Comparing the statistical profiles and distinct strengths of the top six U20 attackers based on market value.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7401655139381620736/',
  },
  {
    image: '/images/gallery-12.jpg',
    desc: 'Investigating the migration of top Italian youth talents to German clubs by contrasting playing time data with development efficacy.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7400137641205174273/',
  },
  {
    image: '/images/gallery-13.jpg',
    desc: "Ranking the most dangerous attackers in Europe's Top 5 leagues by combining shot quality and finishing overperformance metrics.",
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7399386529577578496/',
  },
  {
    image: '/images/gallery-14.jpg',
    desc: "Evaluating Pio Esposito's statistical profile.",
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7396944099284774912/',
  },
  {
    image: '/images/gallery-15.jpg',
    desc: 'Breaking down the feature importance of a predictive model to identify the key factors required for successful algorithmic betting strategies.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7396090982636785664/',
  },
]
