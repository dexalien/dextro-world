"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Globe,
  Mail,
  Linkedin,
  MapPin,
  Calendar,
  ExternalLink,
  Code,
  BarChart3,
  Palette,
  Monitor,
  TrendingUp,
  Settings,
  Award,
  GraduationCap,
  ChevronDown,
  Star,
  Target,
  LineChart,
  PieChart,
  Cpu,
  Globe2,
  ImageIcon,
  Wrench,
  Download,
  CheckCircle,
  ArrowRight,
  Database,
  BarChart,
  Users,
  Clock,
  Briefcase,
  Layers,
  Check,
  ArrowUpRight,
  MousePointer,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MatrixRain, CyclingDecodeText } from "@/components/glitch-text"

const translations = {
  en: {
    hero: {
      subtitle: "Data Analyst",
    },
    sectionLabels: {
      stats: "Career Overview",
      about: "Profile",
      skills: "Capabilities",
      techStack: "Technology Stack",
      timeline: "Experience",
      experience: "Work History",
      education: "Education",
      languages: "Languages",
      certifications: "Awards",
    },
    about: "ABOUT ME",
    skills: "SKILLS",
    experience: "WORK EXPERIENCE",
    education: "EDUCATION",
    languages: "LANGUAGES",
    certifications: "CERTIFICATION & AWARDS",
    contact: "CONTACT",
    present: "Present",
    remote: "Remote",
    portfolio: "Portfolio",
    downloadCV: "Resume",
    viewMore: "View More",
    viewLess: "View Less",
    careerStats: "CAREER STATISTICS",
    timeline: "CAREER TIMELINE",
    techStack: "TECHNOLOGY STACK",
    projects: "PROJECTS COMPLETED",
    clients: "GLOBAL CLIENTS",
    experience_years: "YEARS OF EXPERIENCE",
    platforms: "PLATFORMS MASTERED",
    hoverToSeeDetails: "Hover to see details",
    tapToSeeDetails: "Tap to see details",
    getInTouch: "Get in Touch",
    scrollToExplore: "Scroll to Explore",
    aboutText:
      "Throughout my professional career, I have specialized in digital marketing, data analytics, and web measurement, building a strong foundation in tracking, interpreting, and transforming data into actionable insights that drive strategic growth. I design and implement scalable measurement strategies aligned with business objectives, leveraging advanced analytics tools, automation techniques, and effective data visualization to optimize performance across platforms.",
    skillsData: {
      "Web Analytics & Tracking": {
        description:
          "Expert in Google Analytics 4 (GA4), Google Tag Manager (GTM), and custom JavaScript DataLayer implementations for accurate event tracking and enhanced data quality.",
        icon: BarChart3,
      },
      "Conversion & Pixel Tracking": {
        description:
          "Setup and debugging of Meta Pixel, Google Ads, and third-party pixels (TikTok, X/Twitter, Pinterest, Taboola, Outbrain, Rumble). Skilled in configuring standard and custom events for performance campaigns.",
        icon: Target,
      },
      "Funnel Optimization": {
        description:
          "Customer journey mapping and funnel analysis to identify user drop-offs and conversion opportunities.",
        icon: TrendingUp,
      },
      "Data Visualization": {
        description:
          "Development of dynamic dashboards and automated reports using Looker Studio, Power BI, and advanced Excel (Power Query, pivot tables, formulas, VBA) to support data-driven decision-making.",
        icon: PieChart,
      },
      "Automation & Data Engineering": {
        description:
          "Proficient in BigQuery, SQL, and Google Apps Script for building automated workflows and executing advanced data processing tasks.",
        icon: Database,
      },
      "Web & CMS Platforms": {
        description:
          "Proficient in WordPress (Elementor/Divi), Shopify, Framer and implementation of e-commerce tracking solutions.",
        icon: Globe2,
      },
      "Front-End Development": {
        description:
          "Advanced in HTML, CSS, and JavaScript. Proficient in Tailwind CSS, TypeScript, React, and Next.js.",
        icon: Code,
      },
      "Scripting & Data Tools": {
        description:
          "Basic knowledge of Python for data processing, automation, and integration with analytics workflows.",
        icon: Cpu,
      },
      "Multimedia Design": {
        description: "Photoshop, After Effects, Figma, and Illustrator.",
        icon: Palette,
      },
      "Customer & Technical Support": {
        description:
          "Remote troubleshooting across Windows/macOS, hardware and network setup, productivity tools (Google Workspace, Office, Slack), and ticketing systems like Jira and Monday.",
        icon: Wrench,
      },
    },
    languagesData: {
      Spanish: { level: "Native Speaker" },
      English: { level: "Proficient Speaker" },
      Portuguese: { level: "Proficient Speaker" },
    },
    techStackData: {
      Analytics: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "Power BI"],
      Programming: ["JavaScript", "Python", "SQL", "HTML/CSS", "TypeScript"],
      Frameworks: ["React", "Next.js", "Tailwind CSS"],
      Tools: ["BigQuery", "Google Apps Script", "Figma", "Photoshop"],
      Platforms: ["WordPress", "Shopify", "Framer", "Google Cloud", "Vercel"],
      "Marketing Platforms": [
        "Google Ads",
        "Meta Ads",
        "TikTok Ads",
        "LinkedIn Ads",
        "Pinterest Ads",
        "Taboola",
        "X Ads",
        "Reddit Ads",
      ],
    },
  },
  es: {
    hero: {
      subtitle: "Analista de Datos",
    },
    sectionLabels: {
      stats: "Resumen de Carrera",
      about: "Perfil",
      skills: "Capacidades",
      techStack: "Stack Tecnológico",
      timeline: "Experiencia",
      experience: "Historial Laboral",
      education: "Educación",
      languages: "Idiomas",
      certifications: "Premios",
    },
    about: "ACERCA DE MÍ",
    skills: "HABILIDADES",
    experience: "EXPERIENCIA LABORAL",
    education: "EDUCACIÓN",
    languages: "IDIOMAS",
    certifications: "CERTIFICACIONES Y PREMIOS",
    contact: "CONTACTO",
    present: "Presente",
    remote: "Remoto",
    portfolio: "Portafolio",
    downloadCV: "Descargar CV",
    viewMore: "Ver Más",
    viewLess: "Ver Menos",
    careerStats: "ESTADÍSTICAS DE CARRERA",
    timeline: "LÍNEA DE TIEMPO PROFESIONAL",
    techStack: "STACK TECNOLÓGICO",
    projects: "PROYECTOS COMPLETADOS",
    clients: "CLIENTES GLOBALES",
    experience_years: "AÑOS DE EXPERIENCIA",
    platforms: "PLATAFORMAS DOMINADAS",
    hoverToSeeDetails: "Pasa el cursor para ver detalles",
    tapToSeeDetails: "Toca para ver detalles",
    getInTouch: "Contactar",
    scrollToExplore: "Desplaza para Explorar",
    aboutText:
      "A lo largo de mi carrera profesional, me he especializado en marketing digital, análisis de datos y medición web, construyendo una base sólida en el seguimiento, interpretación y transformación de datos en insights accionables que impulsan el crecimiento estratégico. Diseño e implemento estrategias de medición escalables alineadas con objetivos comerciales, aprovechando herramientas de análisis avanzadas, técnicas de automatización y visualización de datos efectiva para optimizar el rendimiento en todas las plataformas.",
    skillsData: {
      "Análisis Web y Seguimiento": {
        description:
          "Experto en Google Analytics 4 (GA4), Google Tag Manager (GTM), e implementaciones personalizadas de JavaScript DataLayer para seguimiento preciso de eventos y calidad de datos mejorada.",
        icon: BarChart3,
      },
      "Seguimiento de Conversiones y Píxeles": {
        description:
          "Configuración y depuración de Meta Pixel, Google Ads, y píxeles de terceros (TikTok, X/Twitter, Pinterest, Taboola, Outbrain, Rumble). Hábil en configurar eventos estándar y personalizados para campañas de rendimiento.",
        icon: Target,
      },
      "Optimización de Embudo": {
        description:
          "Mapeo del customer journey y análisis de embudo para identificar abandonos de usuarios y oportunidades de conversión.",
        icon: TrendingUp,
      },
      "Visualización de Datos": {
        description:
          "Desarrollo de dashboards dinámicos y reportes automatizados usando Looker Studio, Power BI, y Excel avanzado (Power Query, tablas dinámicas, fórmulas, VBA) para apoyar la toma de decisiones basada en datos.",
        icon: PieChart,
      },
      "Automatización e Ingeniería de Datos": {
        description:
          "Competente en BigQuery, SQL, y Google Apps Script para construir flujos de trabajo automatizados y ejecutar tareas avanzadas de procesamiento de datos.",
        icon: Database,
      },
      "Plataformas Web y CMS": {
        description:
          "Competente en WordPress (Elementor/Divi), Shopify, Framer e implementación de soluciones de seguimiento de e-commerce.",
        icon: Globe2,
      },
      "Desarrollo Front-End": {
        description: "Avanzado en HTML, CSS, y JavaScript. Competente en Tailwind CSS, TypeScript, React, y Next.js.",
        icon: Code,
      },
      "Scripting y Herramientas de Datos": {
        description:
          "Conocimiento básico de Python para procesamiento de datos, automación e integración con flujos de trabajo de análisis.",
        icon: Cpu,
      },
      "Diseño Multimedia": {
        description: "Photoshop, After Effects, Figma, e Illustrator.",
        icon: Palette,
      },
      "Soporte al Cliente y Técnico": {
        description:
          "Resolución remota de problemas en Windows/macOS, configuración de hardware y red, herramientas de productividad (Google Workspace, Office, Slack), y sistemas de tickets como Jira y Monday.",
        icon: Wrench,
      },
    },
    languagesData: {
      Español: { level: "Hablante Nativo" },
      Inglés: { level: "Hablante Competente" },
      Portugués: { level: "Hablante Competente" },
    },
    techStackData: {
      Analytics: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "Power BI"],
      Programming: ["JavaScript", "Python", "SQL", "HTML/CSS", "TypeScript"],
      Frameworks: ["React", "Next.js", "Tailwind CSS"],
      Tools: ["BigQuery", "Google Apps Script", "Figma", "Photoshop"],
      Platforms: ["WordPress", "Shopify", "Framer", "Google Cloud", "Vercel"],
      "Plataformas de Marketing": [
        "Google Ads",
        "Meta Ads",
        "TikTok Ads",
        "LinkedIn Ads",
        "Pinterest Ads",
        "Taboola",
        "X Ads",
        "Reddit Ads",
      ],
    },
  },
  pt: {
    hero: {
      subtitle: "Analista de Dados",
    },
    sectionLabels: {
      stats: "Resumo da Carreira",
      about: "Perfil",
      skills: "Capacidades",
      techStack: "Stack Tecnológico",
      timeline: "Experiência",
      experience: "Histórico de Trabalho",
      education: "Educação",
      languages: "Idiomas",
      certifications: "Prêmios",
    },
    about: "SOBRE MIM",
    skills: "COMPETÊNCIAS",
    experience: "EXPERIÊNCIA PROFISSIONAL",
    education: "FORMAÇÃO ACADÊMICA",
    languages: "IDIOMAS",
    certifications: "CERTIFICAÇÕES E PRÊMIOS",
    contact: "CONTATO",
    present: "Atual",
    remote: "Remoto",
    portfolio: "Portfólio",
    downloadCV: "Baixar CV",
    viewMore: "Ver Mais",
    viewLess: "Ver Menos",
    careerStats: "ESTATÍSTICAS DA CARREIRA",
    timeline: "LINHA DO TEMPO PROFISSIONAL",
    techStack: "STACK TECNOLÓGICO",
    projects: "PROJETOS CONCLUÍDOS",
    clients: "CLIENTES GLOBAIS",
    experience_years: "ANOS DE EXPERIÊNCIA",
    platforms: "PLATAFORMAS DOMINADAS",
    hoverToSeeDetails: "Passe o mouse para ver detalhes",
    tapToSeeDetails: "Toque para ver detalhes",
    getInTouch: "Contato",
    scrollToExplore: "Role para Explorar",
    aboutText:
      "Ao longo da minha trajetória profissional, especializei-me em marketing digital, análise de dados e medição web, construindo uma base sólida no rastreamento, interpretação e transformação de dados em insights acionáveis que impulsionam o crescimento estratégico. Projeto e implemento estratégias de medição escaláveis alinhadas com objetivos de negócio, aproveitando ferramentas de análise avançadas, técnicas de automação e visualização de dados eficaz para otimizar o desempenho em todas as plataformas.",
    skillsData: {
      "Análise Web e Rastreamento": {
        description:
          "Especialista em Google Analytics 4 (GA4), Google Tag Manager (GTM), e implementações personalizadas de JavaScript DataLayer para rastreamento preciso de eventos e qualidade de dados aprimorada.",
        icon: BarChart3,
      },
      "Rastreamento de Conversões e Pixels": {
        description:
          "Configuração e depuração de Meta Pixel, Google Ads, e pixels de terceiros (TikTok, X/Twitter, Pinterest, Taboola, Outbrain, Rumble). Habilidoso na configuração de eventos padrão e personalizados para campanhas de performance.",
        icon: Target,
      },
      "Otimização de Funil": {
        description:
          "Mapeamento da jornada do cliente e análise de funil para identificar pontos de abandono de usuários e oportunidades de conversão.",
        icon: TrendingUp,
      },
      "Visualização de Dados": {
        description:
          "Desenvolvimento de dashboards dinâmicos e relatórios automatizados usando Looker Studio, Power BI, e Excel avançado (Power Query, tabelas dinâmicas, fórmulas, VBA) para apoiar a tomada de decisões baseada em dados.",
        icon: PieChart,
      },
      "Automação e Engenharia de Dados": {
        description:
          "Proficiente em BigQuery, SQL, e Google Apps Script para construir fluxos de trabalho automatizados e executar tarefas avançadas de processamento de dados.",
        icon: Database,
      },
      "Plataformas Web e CMS": {
        description:
          "Proficiente em WordPress (Elementor/Divi), Shopify, Framer e implementação de soluções de rastreamento de e-commerce.",
        icon: Globe2,
      },
      "Desenvolvimento Front-End": {
        description: "Avançado em HTML, CSS, e JavaScript. Proficiente em Tailwind CSS, TypeScript, React, e Next.js.",
        icon: Code,
      },
      "Scripting e Ferramentas de Dados": {
        description:
          "Conhecimento básico de Python para processamento de dados, automação e integração com fluxos de trabalho de análise.",
        icon: Cpu,
      },
      "Design Multimídia": {
        description: "Photoshop, After Effects, Figma, e Illustrator.",
        icon: Palette,
      },
      "Suporte ao Cliente e Técnico": {
        description:
          "Solução remota de problemas em Windows/macOS, configuração de hardware e rede, ferramentas de produtividade (Google Workspace, Office, Slack), e sistemas de tickets como Jira e Monday.",
        icon: Wrench,
      },
    },
    languagesData: {
      Espanhol: { level: "Falante Nativo" },
      Inglés: { level: "Falante Proficiente" },
      Português: { level: "Falante Proficiente" },
    },
    techStackData: {
      Analytics: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "Power BI"],
      Programming: ["JavaScript", "Python", "SQL", "HTML/CSS", "TypeScript"],
      Frameworks: ["React", "Next.js", "Tailwind CSS"],
      Tools: ["BigQuery", "Google Apps Script", "Figma", "Photoshop"],
      Platforms: ["WordPress", "Shopify", "Framer", "Google Cloud", "Vercel"],
      "Plataformas de Marketing": [
        "Google Ads",
        "Meta Ads",
        "TikTok Ads",
        "LinkedIn Ads",
        "Pinterest Ads",
        "Taboola",
        "X Ads",
        "Reddit Ads",
      ],
    },
  },
}

const workExperience = [
  {
    company: "Upwork",
    icon: Database,
    position: {
      en: "Data Analyst, Web Measurement Specialist and Front-end development",
      es: "Analista de Datos, Especialista en Medición Web y Desarrollo Front-end",
      pt: "Analista de Dados, Especialista em Medição Web e Desenvolvimento Front-end",
    },
    location: {
      en: "Freelance Remote Worldwide",
      es: "Freelance Remoto Mundial",
      pt: "Freelance Remoto Mundial",
    },
    period: "Dec 2021 – Present",
    current: true,
    description: {
      en: [
        "Worked with global clients to implement advanced marketing and e-commerce measurement solutions.",
        "Delivered data analysis, tracking strategies, and interactive dashboards tailored to each business need.",
        "Developed custom front-end solutions using WordPress, HTML, CSS, JavaScript, React, and Next.js.",
        "Built custom pipelines to extract GA4 data into BigQuery using Python scripts within Google Cloud Platform.",
      ],
      es: [
        "Trabajé con clientes globales para implementar soluciones avanzadas de medición de marketing y e-commerce.",
        "Entregué análisis de datos, estrategias de seguimiento y dashboards interactivos adaptados a cada necesidad de negocio.",
        "Desarrollé soluciones front-end personalizadas usando WordPress, HTML, CSS, JavaScript, React y Next.js.",
        "Construí pipelines personalizados para extraer datos de GA4 a BigQuery usando scripts de Python en Google Cloud Platform.",
      ],
      pt: [
        "Trabalhei com clientes globais para implementar soluções avançadas de medição de marketing e e-commerce.",
        "Entreguei análise de dados, estratégias de rastreamento e dashboards interativos adaptados a cada necessidade de negócio.",
        "Desenvolvi soluções front-end personalizadas usando WordPress, HTML, CSS, JavaScript, React e Next.js.",
        "Construí pipelines personalizados para extrair dados do GA4 para BigQuery usando scripts Python no Google Cloud Platform.",
      ],
    },
    tools: "GA4, GTM, Looker Studio, BigQuery, GCP, Python, Next.js, React, WordPress, MySQL",
    portfolio: "https://www.upwork.com/freelancers/~01cd5ef5235b8aac15",
  },
  {
    company: "Smart Blocks Tech",
    icon: Layers,
    position: {
      en: "Data Analyst Specialist & Front-End Developer",
      es: "Especialista en Análisis de Datos y Desarrollador Front-End",
      pt: "Especialista em Análise de Dados e Desenvolvedor Front-End",
    },
    location: {
      en: "Freelance Remote Worldwide",
      es: "Freelance Remoto Mundial",
      pt: "Freelance Remoto Mundial",
    },
    period: "Jul 2023 – Mar 2025",
    current: false,
    description: {
      en: [
        "Worked on Lander, a crypto rental platform integrating Web3 wallets, global payments, and staking rewards.",
        "Developed Nexus, a rental platform enabling both direct bookings and decentralized auctions.",
        "Built InverMint, an investment platform offering fractional ownership of real estate and business projects.",
        "Achieved international recognition from leading blockchain organizations such as BNB Chain, Solana, Avalanche, and Ripio.",
      ],
      es: [
        "Trabajé en Lander, una plataforma de alquiler cripto integrando billeteras Web3, pagos globales y recompensas de staking.",
        "Desarrollé Nexus, una plataforma de alquiler que permite reservas directas y subastas descentralizadas.",
        "Construí InverMint, una plataforma de inversión que ofrece propiedad fraccionada de bienes raíces y proyectos empresariales.",
        "Logré reconocimiento internacional de organizaciones blockchain líderes como BNB Chain, Solana, Avalanche y Ripio.",
      ],
      pt: [
        "Trabalhei no Lander, uma plataforma de aluguel cripto integrando carteiras Web3, pagamentos globais e recompensas de staking.",
        "Desenvolvi o Nexus, uma plataforma de aluguel que permite reservas diretas e leilões descentralizados.",
        "Construí o InverMint, uma plataforma de investimento oferecendo propriedade fracionada de imóveis e projetos empresariais.",
        "Alcancei reconhecimento internacional de organizações blockchain líderes como BNB Chain, Solana, Avalanche e Ripio.",
      ],
    },
    tools: "Next.js, TailwindCSS, GA4, GTM",
  },
  {
    company: "Digital Soul Agency",
    icon: BarChart,
    position: {
      en: "Data Analyst Specialist",
      es: "Especialista en Análisis de Datos",
      pt: "Especialista em Análise de Dados",
    },
    location: "Buenos Aires",
    period: "May 2023 – May 2024",
    current: false,
    description: {
      en: [
        "Oversaw the full lifecycle of Google Analytics 4 (GA4) migration and implementation across multiple client websites.",
        "Built and maintained advanced DataLayers in collaboration with UX/UI teams.",
        "Ensured accurate event tracking via Google Tag Manager (GTM) and automated reporting using Google Apps Script.",
        "Leveraged BigQuery for ETL and scalable data processing.",
      ],
      es: [
        "Supervisé el ciclo completo de migración e implementación de Google Analytics 4 (GA4) en múltiples sitios de clientes.",
        "Construí y mantuve DataLayers avanzados en colaboración con equipos UX/UI.",
        "Aseguré seguimiento preciso de eventos vía Google Tag Manager (GTM) y automaticé reportes usando Google Apps Script.",
        "Aproveché BigQuery para ETL y procesamiento de datos escalable.",
      ],
      pt: [
        "Supervisionei o ciclo completo de migração e implementação do Google Analytics 4 (GA4) em múltiplos sites de clientes.",
        "Construí e mantive DataLayers avançados em colaboração com equipes UX/UI.",
        "Garanti rastreamento preciso de eventos via Google Tag Manager (GTM) e automatizei relatórios usando Google Apps Script.",
        "Aproveitei BigQuery para ETL e processamento de dados escalável.",
      ],
    },
    tools: "GA4, GTM, JavaScript, BigQuery, Google Apps Script",
  },
  {
    company: "Havas Media Group",
    icon: LineChart,
    position: {
      en: "Data Analyst and Measurement Specialist",
      es: "Analista de Datos y Especialista en Medición",
      pt: "Analista de Dados e Especialista em Medição",
    },
    location: "Buenos Aires",
    period: "Oct 2021 - May 2023",
    current: false,
    description: {
      en: [
        "Specialized in campaign tracking and performance reporting across platforms like Google Ads and Meta.",
        "Designed interactive dashboards using Looker Studio and Power BI.",
        "Implemented GTM tracking solutions and provided actionable insights to media teams.",
      ],
      es: [
        "Especializado en seguimiento de campañas y reportes de rendimiento en plataformas como Google Ads y Meta.",
        "Diseñé dashboards interactivos usando Looker Studio y Power BI.",
        "Implementé soluciones de seguimiento GTM y proporcioné insights accionables a equipos de medios.",
      ],
      pt: [
        "Especializado em rastreamento de campanhas e relatórios de performance em plataformas como Google Ads e Meta.",
        "Projetei dashboards interativos usando Looker Studio e Power BI.",
        "Implementei soluções de rastreamento GTM e forneci insights acionáveis para equipes de mídia.",
      ],
    },
    tools: "Looker Studio, Power BI, GTM, Meta Ads, Google Ads, Campaign Manager",
  },
  {
    company: "Brightz",
    icon: Monitor,
    position: {
      en: "Web Developer and Analytics (Freelance Remote)",
      es: "Desarrollador Web y Analítica (Freelance Remoto)",
      pt: "Desenvolvedor Web e Analytics (Freelance Remoto)",
    },
    location: "USA",
    period: "Dec 2021 - Dec 2022",
    current: false,
    description: {
      en: [
        "Led the development of the company's e-commerce platform (www.brightz.com), managing both design and tracking infrastructure.",
        "Implemented Google Analytics, GTM, and A/B testing via Optimize.",
        "Built custom HTML/CSS/JS features and directed a remote team of 4 developers and designers.",
      ],
      es: [
        "Lideré el desarrollo de la plataforma e-commerce de la empresa (www.brightz.com), gestionando diseño e infraestructura de seguimiento.",
        "Implementé Google Analytics, GTM y pruebas A/B vía Optimize.",
        "Construí funcionalidades personalizadas HTML/CSS/JS y dirigí un equipo remoto de 4 desarrolladores y diseñadores.",
      ],
      pt: [
        "Liderei o desenvolvimento da plataforma e-commerce da empresa (www.brightz.com), gerenciando design e infraestrutura de rastreamento.",
        "Implementei Google Analytics, GTM e testes A/B via Optimize.",
        "Construí funcionalidades personalizadas HTML/CSS/JS e dirigi uma equipe remota de 4 desenvolvedores e designers.",
      ],
    },
    tools: "WordPress, GTM, GA4, HTML, CSS, JavaScript, Google Optimize",
  },
  {
    company: "Cognizant",
    icon: Settings,
    position: {
      en: "Google Media Campaign Manager",
      es: "Gerente de Campañas de Google Media",
      pt: "Gerente de Campanhas do Google Media",
    },
    location: "Buenos Aires",
    period: "Jul 2017 - Oct 2021",
    current: false,
    description: {
      en: [
        "Executed trilingual Google Ads campaigns (auction and reservation models) for Latin American markets.",
        "Supported sales and product teams with media planning, technical validation, and campaign troubleshooting.",
      ],
      es: [
        "Ejecuté campañas trilingües de Google Ads (modelos de subasta y reserva) para mercados latinoamericanos.",
        "Apoyé a equipos de ventas y producto con planificación de medios, validación técnica y resolución de problemas de campañas.",
      ],
      pt: [
        "Executei campanhas trilíngues do Google Ads (modelos de leilão e reserva) para mercados latino-americanos.",
        "Apoiei equipes de vendas e produto com planejamento de mídia, validação técnica e solução de problemas de campanhas.",
      ],
    },
    tools: "Google Ads, Google Ads Editor, Excel",
  },
  {
    company: "NCR",
    icon: Wrench,
    position: {
      en: "Technical Support Specialist",
      es: "Especialista en Soporte Técnico",
      pt: "Especialista em Suporte Técnico",
    },
    location: "Buenos Aires",
    period: "Mar 2013 - Mar 2017",
    current: false,
    description: {
      en: [
        "Provided multilingual (EN/ES/PT) Level 1 and 2 support for software and hardware issues via remote channels.",
        "Promoted to team lead of a 15-person help desk team after consistently resolving high-complexity cases.",
        "Managed ticket escalations, performed QA on issue resolution, and delivered training to new hires and senior agents.",
      ],
      es: [
        "Proporcioné soporte multilingüe (EN/ES/PT) de Nivel 1 y 2 para problemas de software y hardware vía canales remotos.",
        "Promovido a líder de equipo de un help desk de 15 personas tras resolver consistentemente casos de alta complejidad.",
        "Gestioné escalaciones de tickets, realicé QA en resolución de problemas y entregué capacitación a nuevos y antiguos agentes.",
      ],
      pt: [
        "Forneci suporte multilíngue (EN/ES/PT) de Nível 1 e 2 para problemas de software e hardware via canais remotos.",
        "Promovido a líder de equipe de um help desk de 15 pessoas após resolver consistentemente casos de alta complexidade.",
        "Gerenciei escalações de tickets, realizei QA na resolução de problemas e entreguei treinamento para novos e antigos agentes.",
      ],
    },
    tools: "Remote diagnostics, QA workflows, Lean Six Sigma Yellow Belt",
  },
]

const education = [
  {
    institution: "Universidad Argentina de la Empresa (UADE)",
    degree: {
      en: "Software Developer",
      es: "Desarrollador de Software",
      pt: "Desenvolvedor de Software",
    },
    location: "Buenos Aires - Argentina",
    period: "2021 - 2024",
    icon: Code,
  },
  {
    institution: "Kellogg Community College (KCC)",
    degree: {
      en: "Multimedia Designer",
      es: "Diseñador Multimedia",
      pt: "Designer Multimídia",
    },
    location: "Battle Creek - Michigan, USA",
    period: "2006 - 2008",
    icon: ImageIcon,
  },
  {
    institution: "Kalamazoo Valley Community College (KVCC)",
    degree: {
      en: "Associate's Degree",
      es: "Grado Asociado",
      pt: "Grau Associado",
    },
    location: "Kalamazoo - Michigan, USA",
    period: "2004 – 2005",
    icon: GraduationCap,
  },
]

const certifications = [
  {
    en: "Google Analytics Certification",
    es: "Certificación de Google Analytics",
    pt: "Certificação do Google Analytics",
    icon: Award,
  },
  {
    en: "1st Place – Solana Summer Sol Sessions Hackathon 2024",
    es: "1er Lugar – Hackathon Solana Summer Sol Sessions 2024",
    pt: "1º Lugar – Hackathon Solana Summer Sol Sessions 2024",
    icon: Star,
  },
  {
    en: "2nd Place - Binance BNB Q3 Hackathon 2024",
    es: "2do Lugar - Hackathon Binance BNB Q3 2024",
    pt: "2º Lugar - Hackathon Binance BNB Q3 2024",
    icon: Star,
  },
  {
    en: "Quarter Finalist - Solana Copa America 2024",
    es: "Cuartofinalista - Solana Copa America 2024",
    pt: "Quartas de Final - Solana Copa America 2024",
    icon: Star,
  },
  {
    en: "4th Place - 2025 Eth Global Buenos Aires - EVVM Track",
    es: "4to Lugar - 2025 Eth Global Buenos Aires - Track EVVM",
    pt: "4º Lugar - 2025 Eth Global Buenos Aires - Track EVVM",
    icon: Star,
  },
]

const careerStats = [
  {
    value: "40+",
    label: { en: "Freelance Projects", es: "Proyectos Freelance", pt: "Projetos Freelance" },
    icon: Briefcase,
  },
  { value: "20+", label: { en: "Clients", es: "Clientes", pt: "Clientes" }, icon: Users },
  { value: "11+", label: { en: "Years", es: "Años", pt: "Anos" }, icon: Clock },
  { value: "15+", label: { en: "Platforms", es: "Plataformas", pt: "Plataformas" }, icon: Database },
]

const languageOptions = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
]

// Hook for intersection observer with enhanced animation
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return [ref, isVisible] as const
}

// Animated section with staggered children
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Marquee component for infinite scroll text
const Marquee = ({ children, speed = 30 }: { children: React.ReactNode; speed?: number }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-marquee" style={{ animationDuration: `${speed}s` }}>
        {children}
        {children}
      </div>
    </div>
  )
}

// Section label component (Palmer style)
const SectionLabel = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="text-xs text-gray-500 font-mono">
        <span className="text-cyan-400">©</span>
        {label}
      </div>
    </div>
  )
}

// Animated counter component
const AnimatedCounter = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0)
  const [ref, isVisible] = useScrollAnimation(0.5)

  useEffect(() => {
    if (isVisible) {
      const numericValue = Number.parseInt(value.replace(/\D/g, ""))
      let start = 0
      const increment = numericValue / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= numericValue) {
          setCount(numericValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isVisible, value, duration])

  return (
    <div ref={ref} className="text-5xl md:text-7xl font-bold text-white">
      {count}
      {value.includes("+") ? "+" : ""}
    </div>
  )
}

export default function Resume() {
  const [language, setLanguage] = useState<"en" | "es" | "pt">("en")
  const [expandedExperience, setExpandedExperience] = useState<number | null>(() => {
    // Check if we're on desktop (lg breakpoint = 1024px)
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      return 0 // First item open by default on desktop
    }
    return null
  })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  const t = translations[language]

  const toggleExperience = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index)
  }

  const currentLanguage = languageOptions.find((lang) => lang.code === language)

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Custom cursor follower */}
      <div
        className="fixed w-4 h-4 rounded-full bg-cyan-400/20 pointer-events-none z-50 transition-transform duration-100 hidden lg:block"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: "translate(0, 0)",
        }}
      />

      {/* Fixed Header Controls */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="text-sm font-bold tracking-wider">
          <span className="text-cyan-400">CF</span>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all"
              >
                <Globe className="w-4 h-4 mr-2" />
                <span className="mr-1">{currentLanguage?.flag}</span>
                <span className="hidden sm:inline">{currentLanguage?.name}</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#141414] border-gray-800 text-white">
              {languageOptions.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as "en" | "es" | "pt")}
                  className={`cursor-pointer ${
                    language === lang.code ? "bg-cyan-900/30 text-cyan-400" : "hover:bg-gray-800"
                  }`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                  {language === lang.code && <Check className="w-4 h-4 ml-auto" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href="mailto:caroldelaquintana@gmail.com"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-cyan-400 transition-all duration-300"
          >
            {t.getInTouch}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-4 md:px-6 lg:px-6 xl:px-8 relative overflow-hidden">
        <MatrixRain />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />

        <div className="relative z-10 w-full max-w-[95%] xl:max-w-[90%] mx-auto">
          <AnimatedSection delay={0}>
            <div className="hidden lg:flex flex-wrap gap-3 mb-8 pt-2 justify-start">
              {["Data Analytics", "Web Measurement", "Front-End", "Marketing"].map((tag, i) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-xs font-medium border border-gray-700 rounded-full text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Main title */}
          <AnimatedSection delay={200}>
            <div className="lg:max-w-[65%] text-center lg:text-left">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem] font-bold tracking-tighter leading-[0.85]">
                <CyclingDecodeText
                  phrases={[
                    { line1: "CAROL", line2: "FRANCO" },
                    { line1: "I'M", line2: "DEX" },
                  ]}
                  line1ClassName="text-white"
                  line2ClassName="text-cyan-400"
                  decodeSpeed={60}
                  displayDurations={[4000, 2000]}
                />
              </h1>

              <div className="flex lg:hidden justify-center my-6">
                <img
                  src="/images/avatar.png"
                  alt="Carol Franco Avatar"
                  className="w-40 h-40 sm:w-48 sm:h-48 object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.3)] animate-float"
                />
              </div>

              <p className="text-gray-400 max-w-md text-sm md:text-base lg:-mt-6 mx-auto lg:mx-0">
                Data Analyst & Web Measurement Specialist | Digital Marketing & Front-End Developer
              </p>
            </div>

            <div className="hidden lg:flex flex-col items-center gap-6 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-20">
              <img
                src="/images/avatar.png"
                alt="Carol Franco Avatar"
                className="w-80 h-80 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem] object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.3)] animate-float"
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:caroldelaquintana@gmail.com"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-cyan-400 transition-all duration-300 group"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/carolfranco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-700 text-sm font-medium rounded-full hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 group"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://docs.google.com/document/d/1rc4gofpthb_eUbMu94TBOPMJRTU6pBemQgy4_67xHsk/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-700 text-sm font-medium rounded-full hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 group"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.downloadCV}</span>
                </a>
              </div>
            </div>

            <div className="flex lg:hidden flex-col items-center gap-4 mt-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:caroldelaquintana@gmail.com"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-cyan-400 transition-all duration-300 group"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/carolfranco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-700 text-sm font-medium rounded-full hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 group"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://docs.google.com/document/d/1rc4gofpthb_eUbMu94TBOPMJRTU6pBemQgy4_67xHsk/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-700 text-sm font-medium rounded-full hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 group"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.downloadCV}</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <AnimatedSection delay={800} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 text-gray-500 text-xs">
            <MousePointer className="w-4 h-4 animate-bounce" />
            <span>{t.scrollToExplore}</span>
          </div>
        </AnimatedSection>
      </section>

      {/* Stats Marquee */}
      <section className="py-8 border-y border-gray-800 bg-[#0d0d0d]">
        <Marquee speed={40}>
          <div className="flex items-center gap-16 px-8">
            {careerStats.map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-4xl md:text-5xl font-bold text-white">{stat.value}</span>
                <span className="text-gray-500 text-sm uppercase tracking-wider">{stat.label[language]}</span>
                <span className="text-gray-700">—</span>
              </div>
            ))}
          </div>
        </Marquee>
      </section>

      {/* Career Statistics Section */}
      <section
        ref={(el) => {
          sectionRefs.current[0] = el
        }}
        className="py-24 px-6 md:px-12 lg:px-24 border-b border-gray-800"
      >
        <AnimatedSection>
          <SectionLabel label={t.sectionLabels.stats} />
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {careerStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group p-6 md:p-8 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 hover:bg-cyan-500/5">
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="w-5 h-5 text-cyan-500" />
                    <span className="text-xs text-gray-500 font-mono">(0{index + 1})</span>
                  </div>
                  <AnimatedCounter value={stat.value} />
                  <p className="text-gray-500 text-sm mt-2 uppercase tracking-wider">{stat.label[language]}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </section>

      {/* About Section */}
      <section
        ref={(el) => {
          sectionRefs.current[1] = el
        }}
        className="py-24 px-6 md:px-12 lg:px-24 border-b border-gray-800"
      >
        <AnimatedSection>
          <SectionLabel label={t.sectionLabels.about} />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {language === "en" && (
                <>
                  Transforming <span className="text-cyan-400">data</span> into strategic{" "}
                  <span className="text-gray-500">insights</span> that drive growth.
                </>
              )}
              {language === "es" && (
                <>
                  Transformando <span className="text-cyan-400">datos</span> en{" "}
                  <span className="text-gray-500">insights</span> estratégicos que impulsan el crecimiento.
                </>
              )}
              {language === "pt" && (
                <>
                  Transformando <span className="text-cyan-400">dados</span> em{" "}
                  <span className="text-gray-500">insights</span> estratégicos que impulsionam o crescimento.
                </>
              )}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-gray-400 text-lg leading-relaxed">{t.aboutText}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={(el) => {
          sectionRefs.current[2] = el
        }}
        className="py-24 px-6 md:px-12 lg:px-24 border-b border-gray-800"
      >
        <AnimatedSection>
          <SectionLabel label={t.sectionLabels.skills} />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.skills}
            <span className="text-gray-600 text-2xl ml-4">({Object.keys(t.skillsData).length})</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {Object.entries(t.skillsData).map(([skill, data], index) => {
            const IconComponent = data.icon
            return (
              <AnimatedSection key={skill} delay={index * 50}>
                <div className="group p-6 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-500 hover:bg-gradient-to-br hover:from-cyan-500/5 hover:to-transparent">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-cyan-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{skill}</h3>
                        <span className="text-xs text-gray-600 font-mono">0{index + 1}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{data.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </section>

      {/* Technology Stack with Flip Cards */}
      <section
        ref={(el) => {
          sectionRefs.current[3] = el
        }}
        className="py-24 px-6 md:px-12 lg:px-24 border-b border-gray-800 bg-[#0d0d0d]"
      >
        <AnimatedSection>
          <SectionLabel label={t.sectionLabels.techStack} />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            {t.techStack}
            <span className="text-gray-600 text-2xl ml-4">({Object.keys(t.techStackData).length})</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(t.techStackData).map(([category, technologies], index) => (
            <AnimatedSection key={category} delay={index * 100}>
              <div className="flip-card h-72">
                <div className="flip-card-inner">
                  {/* Front of card */}
                  <div className="flip-card-front p-8 border border-gray-800 rounded-2xl bg-[#111] flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                      <Layers className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{category}</h3>
                    <p className="text-gray-500 text-sm mb-4">
                      {technologies.length}{" "}
                      {language === "en" ? "technologies" : language === "es" ? "tecnologías" : "tecnologias"}
                    </p>
                    <p className="text-gray-600 text-xs">
                      <span className="hidden sm:inline">{t.hoverToSeeDetails}</span>
                      <span className="sm:hidden">{t.tapToSeeDetails}</span>
                    </p>
                  </div>
                  {/* Back of card */}
                  <div className="flip-card-back p-6 border border-cyan-500/30 rounded-2xl bg-[#111]">
                    <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">{category}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-300 hover:bg-cyan-500/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={(el) => {
          sectionRefs.current[4] = el
        }}
        className="py-24 px-6 md:px-12 lg:px-24 border-b border-gray-800"
      >
        <AnimatedSection>
          <SectionLabel label={t.sectionLabels.experience} />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">{t.experience}</h2>
        </AnimatedSection>

        <div className="space-y-4">
          {workExperience.map((job, index) => {
            const IconComponent = job.icon
            const isExpanded = expandedExperience === index
            return (
              <AnimatedSection key={index} delay={index * 50}>
                <div
                  className={`border rounded-xl transition-all duration-500 overflow-hidden cursor-pointer ${
                    job.current ? "border-cyan-500/50 bg-cyan-500/5" : "border-gray-800 hover:border-gray-700"
                  }`}
                  onClick={() => toggleExperience(index)}
                >
                  <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-lg ${job.current ? "bg-cyan-500/20" : "bg-gray-800"} transition-colors`}
                      >
                        <IconComponent className={`w-6 h-6 ${job.current ? "text-cyan-400" : "text-gray-500"}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold">{job.company}</h3>
                          {job.current && (
                            <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-gray-500">{job.position[language]}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {typeof job.location === "string" ? job.location : job.location[language]}
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </div>
                  </div>

                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? "max-h-[800px]" : "max-h-0"}`}>
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-gray-800 space-y-3">
                        {job.description[language].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-400">{item}</p>
                          </div>
                        ))}
                        {job.tools && (
                          <div className="pt-3">
                            <p className="text-xs text-gray-500 mb-2">Tools & Skills:</p>
                            <p className="text-sm text-cyan-400">{job.tools}</p>
                          </div>
                        )}
                        {job.portfolio && (
                          <a
                            href={job.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400 hover:bg-cyan-500/20 transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                            {t.portfolio}
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </section>

      {/* Education, Languages & Certifications */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-b border-gray-800 bg-[#0d0d0d]">
        {/* Education */}
        <div className="mb-24">
          <AnimatedSection>
            <SectionLabel label={t.sectionLabels.education} />
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">{t.education}</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => {
              const IconComponent = edu.icon
              return (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="group p-6 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-500 hover:bg-cyan-500/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-cyan-500" />
                      </div>
                      <span className="text-xs text-gray-600 font-mono">(0{index + 1})</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{edu.institution}</h3>
                    <p className="text-cyan-400 text-sm mb-4">{edu.degree[language]}</p>
                    <div className="flex flex-col gap-1 text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>

        {/* Certifications & Languages */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <AnimatedSection>
              <SectionLabel label={t.sectionLabels.certifications} />
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.certifications}</h2>
            </AnimatedSection>

            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon
                return (
                  <AnimatedSection key={index} delay={index * 100 + 200}>
                    <div className="flex items-center gap-4 p-4 border border-gray-800 rounded-xl hover:border-yellow-500/50 transition-all duration-300 group">
                      <div className="p-2 bg-yellow-500/10 rounded-lg">
                        <IconComponent className="w-5 h-5 text-yellow-500" />
                      </div>
                      <span className="text-sm group-hover:text-yellow-400 transition-colors">{cert[language]}</span>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>

          {/* Languages */}
          <div>
            <AnimatedSection>
              <SectionLabel label={t.sectionLabels.languages} />
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.languages}</h2>
            </AnimatedSection>

            <div className="space-y-4">
              {Object.entries(t.languagesData).map(([lang, data], index) => (
                <AnimatedSection key={lang} delay={index * 100 + 200}>
                  <div className="flex items-center justify-between p-4 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <Globe2 className="w-5 h-5 text-cyan-500" />
                      <span className="font-semibold">{lang}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{data.level}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-12 lg:px-24">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === "en" && "Let's work together"}
                {language === "es" && "Trabajemos juntos"}
                {language === "pt" && "Vamos trabalhar juntos"}
              </h2>
              <p className="text-gray-500">caroldelaquintana@gmail.com</p>
            </div>

            <div className="flex gap-4">
              <a
                href="mailto:caroldelaquintana@gmail.com"
                className="flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-cyan-400 transition-all duration-300 group"
              >
                {t.getInTouch}
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Dextro World by Carol Franco de la Quintana.{" "}
              {language === "en"
                ? "All rights reserved."
                : language === "es"
                  ? "Todos los derechos reservados."
                  : "Todos os direitos reservados."}
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/carolfranco/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/dexalien"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                GitHub
              </a>
              <a href="mailto:caroldelaquintana@gmail.com" className="hover:text-cyan-400 transition-colors">
                Email
              </a>
            </div>
          </div>
        </AnimatedSection>
      </footer>
    </div>
  )
}
