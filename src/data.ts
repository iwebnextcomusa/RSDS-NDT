import { ServiceItem, CourseItem, TestimonialItem, FAQItem, GalleryItem, IndustryItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'vt',
    title: 'Visual Testing (VT)',
    shortDescription: 'The foundational and most widely used NDT method, crucial for detecting surface anomalies, weld defects, and structural wear.',
    fullDescription: 'Our certified Visual Testing (VT) inspectors utilize direct and remote inspection systems to evaluate components, welds, and structural elements. VT is the first line of defense in quality control, revealing visible surface flaws, misalignment, and mechanical damage before they escalate.',
    benefits: [
      'Cost-effective and rapid initial screening',
      'Detects surface defects, corrosion, and welding abnormalities',
      'Provides immediate, actionable inspection results'
    ],
    industries: ['Oil & Gas', 'Manufacturing', 'Construction', 'Marine', 'Power Generation'],
    iconName: 'Eye',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ut',
    title: 'Ultrasonic Testing (UT)',
    shortDescription: 'High-frequency sound waves to scan the internal structure of welds, pipes, and plates, measuring thickness and identifying hidden flaws.',
    fullDescription: 'Ultrasonic Testing (UT) uses localized high-frequency acoustic energy to probe deep into materials. This highly precise method detects internal cracks, laminations, voids, and wall thinning in pipelines, pressure vessels, and structural steel without affecting the asset.',
    benefits: [
      'Superior depth penetration for internal flaw detection',
      'Highly accurate thickness mapping and corrosion tracking',
      'Requires access to only one side of the test material'
    ],
    industries: ['Pipelines', 'Refineries', 'Aerospace', 'Power Generation', 'Petrochemical'],
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mt',
    title: 'Magnetic Particle Testing (MT)',
    shortDescription: 'Highly sensitive inspection for discovering surface and near-surface discontinuities in ferromagnetic materials.',
    fullDescription: 'Magnetic Particle Testing (MT) is a specialized method that induces a magnetic field in ferromagnetic components. Fine colored magnetic particles are applied, aligning dynamically with flux leakage fields to produce distinct, high-contrast indications of fine cracks, seams, and weld inclusions.',
    benefits: [
      'Extremely sensitive to microscopic surface-breaking cracks',
      'Applicable on complex geometries and structural steel components',
      'Immediate visual indicators requiring minimal component cleanup'
    ],
    industries: ['Fabrication', 'Manufacturing', 'Marine', 'Construction', 'Oil & Gas'],
    iconName: 'Magnet',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pt',
    title: 'Liquid Penetrant Testing (PT)',
    shortDescription: 'Capillary action detection to expose surface defects in non-porous metals, alloys, and composite materials.',
    fullDescription: 'Liquid Penetrant Testing (PT), or dye penetrant, is used on non-magnetic and magnetic alloys alike. A visible or fluorescent liquid penetrant is drawn into surface defects, followed by a developer that pulls the entrapped dye out, providing high-contrast visual indicators of fatigue cracks and porosity.',
    benefits: [
      'Inexpensive and highly portable inspection setups',
      'Works on non-porous metals, ceramics, and advanced composites',
      'Highly reliable for locating tight surface-breaking cracks'
    ],
    industries: ['Aerospace', 'Manufacturing', 'Marine', 'Power Generation', 'Fabrication'],
    iconName: 'Droplet',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rt',
    title: 'Radiographic Testing (RT)',
    shortDescription: 'Industrial x-ray or gamma-ray imaging to inspect internal structures, welds, and composite assemblies with archival-quality records.',
    fullDescription: 'Radiographic Testing (RT) utilizes short-wavelength electromagnetic radiation to penetrate test objects. Variations in density and thickness are captured on film or digital detectors, revealing subsurface gas pockets, slag inclusions, cracks, and incomplete penetration with structural clarity.',
    benefits: [
      'Provides an absolute, permanent visual record of internal welds',
      'Applicable to virtually all material types and thicknesses',
      'Reveals the precise geometry and layout of internal defects'
    ],
    industries: ['Oil & Gas', 'Pipelines', 'Refineries', 'Aerospace', 'Construction'],
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'et',
    title: 'Eddy Current Testing (ET)',
    shortDescription: 'Electromagnetic induction testing for surface cracking, tube scanning, and conductive material characterization.',
    fullDescription: 'Eddy Current Testing (ET) is a non-contact electromagnetic method ideal for conductive alloys. It induces electrical currents inside materials to inspect heat exchanger tubes, verify material hardness, measure coating thicknesses, and identify minute fatigue micro-cracking.',
    benefits: [
      'Excellent for thin-walled tube and weld inspects',
      'Inspects through non-conductive surface coatings or paint layers',
      'Non-contact testing allows high-speed scanning of hot surfaces'
    ],
    industries: ['Aerospace', 'Refineries', 'Marine', 'Power Generation', 'Manufacturing'],
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'consulting',
    title: 'Inspection Consulting & QA',
    shortDescription: 'Comprehensive consulting, vendor auditing, third-party oversight, and professional Quality Assurance solutions.',
    fullDescription: 'Our certified ASNT Level III consultants provide specialized quality program designs. We conduct vendor audits, establish strict inspection procedures, offer third-party oversight, and implement customized Quality Assurance procedures matching global industrial standards.',
    benefits: [
      'Objective, independent third-party analysis and validation',
      'Full compliance with ASME, API, AWS, and ASNT regulatory standards',
      'Establishes and audits corporate safety protocols'
    ],
    industries: ['All Industries', 'Refineries', 'Oil & Gas', 'Aerospace', 'Infrastructure'],
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'welding_inspect',
    title: 'Welding Inspection & CWI',
    shortDescription: 'AWS Certified Welding Inspectors (CWI) providing pre-weld, in-process, and post-weld joint evaluations and welder qualifications.',
    fullDescription: 'Our Certified Welding Inspectors (CWI) are certified through the American Welding Society (AWS). We monitor joint fit-ups, pre-heating parameters, welder performance, and post-weld integrity, certifying your fabrications comply directly with structural codes.',
    benefits: [
      'Dramatically reduces weld failure risks in structural environments',
      'Validates and maintains official Welder Qualification Records (WPQR)',
      'Inspects in direct accordance with AWS D1.1 and ASME Section IX codes'
    ],
    industries: ['Construction', 'Pipelines', 'Marine', 'Fabrication', 'Manufacturing'],
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
  }
];

export const COURSES: CourseItem[] = [
  {
    id: 'vt-i-ii',
    title: 'Visual Testing (VT) Level I & II',
    level: 'Level I & II',
    hours: 40,
    description: 'Master the theory and practical applications of visual inspection. Covers direct and indirect methods, dimensional check gauges, weld defects, corrosion profiles, and key inspection codes.',
    benefits: [
      'Hands-on gauge measuring practice with real flawed specimens',
      'Thorough preparation for ASNT SNT-TC-1A and NAS410 criteria',
      'Includes study materials, practical exams, and official certification preparation'
    ],
    category: 'Visual'
  },
  {
    id: 'ut-i-ii',
    title: 'Ultrasonic Testing (UT) Level I & II',
    level: 'Level I & II',
    hours: 80,
    description: 'Comprehensive course in straight-beam and angle-beam ultrasonic scanning. Focuses on calibration blocks, DAC curves, defect sizing, and thickness profiles of pipelines and plates.',
    benefits: [
      'Practical training on leading high-performance flaw detectors',
      'Advanced instruction on shear-wave angle-beam weld inspection',
      'Rigorous mathematical formula training for acoustic velocities and angles'
    ],
    category: 'Ultrasonic'
  },
  {
    id: 'mt-i-ii',
    title: 'Magnetic Particle Testing (MT) Level I & II',
    level: 'Level I & II',
    hours: 32,
    description: 'Learn the core physics of magnetic fields and magnetic flux leakage. Covers hand-held yokes, bench equipment, visible dry/wet powders, and fluorescent inspect techniques under black light.',
    benefits: [
      'Extensive hands-on practice using AC/DC electromagnetic yokes',
      'Learn proper magnetic field indicators (Pie gauges, Castrol strips)',
      'Evaluation of real-world service cracks in fabricated piping'
    ],
    category: 'Magnetic Particle'
  },
  {
    id: 'pt-i-ii',
    title: 'Liquid Penetrant Testing (PT) Level I & II',
    level: 'Level I & II',
    hours: 24,
    description: 'Covers water-washable, solvent-removable, and post-emulsifiable dye systems. Learn correct dwelling intervals, development techniques, and fluorescent vs. visible color methods.',
    benefits: [
      'Step-by-step practical walk-throughs of pre-cleaning, application, and developing',
      'Instruction on identifying real stress cracks versus false indications',
      'Compliant with industry leading aerospace and structural welding codes'
    ],
    category: 'Liquid Penetrant'
  },
  {
    id: 'rt-i-ii',
    title: 'Radiographic Testing (RT) Level I & II',
    level: 'Level I & II',
    hours: 80,
    description: 'Rigorous radiation safety, darkroom processing, and film interpretation. Covers radiographic density, exposure charts, IQIs, and identifying internal weld anomalies.',
    benefits: [
      'Strict emphasis on Radiation Safety and state compliance laws',
      'In-depth film viewing sessions to distinguish porosity, slag, and lack of fusion',
      'Prepares candidates for ASME Section V and API 1104 interpretation'
    ],
    category: 'Radiographic'
  },
  {
    id: 'level-iii-prep',
    title: 'ASNT Level III Preparation & Consulting',
    level: 'Level III Prep',
    hours: 40,
    description: 'Designed for senior inspectors preparing for their ASNT Level III exams. Covers the Basic exam topics, materials technology, and specific methodology standards.',
    benefits: [
      'Guided by highly experienced active Level III subject-matter experts',
      'Interactive mock testing with comprehensive rationales and calculations',
      'Guidance on drafting written procedures and quality assurance manuals'
    ],
    category: 'Consulting'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    description: 'Non-Destructive Testing is critical for maintaining infrastructure in harsh offshore rigs, extraction wells, and pressure processing facilities.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    iconName: 'Droplets'
  },
  {
    id: 'petrochemical',
    title: 'Petrochemical & Refineries',
    description: 'We perform thickness mapping, UT shear-wave scans, and Eddy Current tube testing to prevent catastrophic failures in corrosive refinery pipelines.',
    image: 'https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&w=600&q=80',
    iconName: 'FlameKindling'
  },
  {
    id: 'pipelines',
    title: 'Pipelines',
    description: 'Cross-country pipelines require continuous visual, radiography, and ultrasonic inspections to verify girth welds and monitor wall integrity.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    iconName: 'TrendingUp'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Fabrication',
    description: 'Ensuring structural components, forged fittings, and castings meet rigid dimensional and internal quality specifications before shipment.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    iconName: 'Cpu'
  },
  {
    id: 'aerospace',
    title: 'Aerospace',
    description: 'Extremely high-precision liquid penetrant, magnetic particle, and eddy current scanning of critical turbines, engine parts, and landing gear.',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=600&q=80',
    iconName: 'Plane'
  },
  {
    id: 'power-gen',
    title: 'Power Generation',
    description: 'Inspection of boiler tubes, turbines, pressure conduits, and support framing in thermal, nuclear, and hydroelectric power installations.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80',
    iconName: 'Zap'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Mark Henderson',
    role: 'Quality Assurance Manager',
    company: 'Gulf Coast Steel Fabricators',
    text: 'RSDS NDT provided top-tier welding inspection and ultrasonic testing services for our structural project. Their attention to detail and professional communication saved us weeks of potential delays. Highly recommended!',
    rating: 5
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    role: 'Director of Training & Safety',
    company: 'Apex Refineries Group',
    text: 'We enrolled our inspection staff in RSDS NDT\'s Liquid Penetrant and Magnetic Particle courses. The classroom instructions combined with hands-on labs were outstanding. All our guys passed their certifications with flying colors!',
    rating: 5
  },
  {
    id: 't3',
    name: 'Robert Vance',
    role: 'Lead Project Engineer',
    company: 'Magnolia Pipeline Services',
    text: 'The procedure development services offered by their ASNT Level III consultants were exceptional. They reviewed our existing safety manuals and streamlined our QA processes in total compliance with the latest regulations.',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'What is Non-Destructive Testing (NDT)?',
    answer: 'Non-Destructive Testing (NDT) refers to a wide group of analysis techniques used in science and industry to evaluate the properties of a material, component, or system without causing permanent damage. It is crucial for maintaining safety, reliability, and regulatory compliance of active industrial structures.'
  },
  {
    id: 'faq2',
    question: 'Which industries do you serve?',
    answer: 'We provide NDT training, inspection, and consulting services to a broad array of industries, including Oil & Gas, Petrochemical, Refineries, cross-country Pipelines, Aerospace manufacturing, Marine shipyards, heavy structural Fabrication, Construction, and Power Generation facilities throughout Mississippi and surrounding regions.'
  },
  {
    id: 'faq3',
    question: 'How do I schedule an inspection or request consulting?',
    answer: 'You can easily request services or obtain a custom quote by filling out our "Request a Quote" form on the Services page, sending an email directly to samuelverrett80@gmail.com, or calling our Mississippi office line at (409) 272-0514.'
  },
  {
    id: 'faq4',
    question: 'Do you provide on-site, customized corporate training?',
    answer: 'Yes! We offer customized, employer-specific corporate training matching your unique operations and equipment. Our instructors can travel directly to your facility in Mississippi or nearby states to conduct classroom instruction and practical labs tailored to your QA manual.'
  },
  {
    id: 'faq5',
    question: 'What certifications do your inspectors and instructors hold?',
    answer: 'Our professional team holds prestigious industry credentials, including ASNT Level III, AWS Certified Welding Inspectors (CWI), and API (American Petroleum Institute) inspect credentials. All NDT courses comply fully with ASNT SNT-TC-1A, NAS410, and ANSI standards.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    category: 'inspection',
    title: 'Ultrasonic Weld Scan',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    description: 'Inspector performing straight-beam thickness evaluation on a heavy vessel shell plate.'
  },
  {
    id: 'g2',
    category: 'training',
    title: 'Hands-on Liquid Penetrant Lab',
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
    description: 'Students applying developer aerosol onto sample weld test coupon specimens.'
  },
  {
    id: 'g3',
    category: 'field',
    title: 'Petrochemical Facility Pipeline',
    url: 'https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&w=600&q=80',
    description: 'On-site MT inspection checking for structural stress corrosion on facility pipeline yokes.'
  },
  {
    id: 'g4',
    category: 'equipment',
    title: 'Electromagnetic AC Yoke',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    description: 'Advanced testing gauges used to calibrate ultrasonic equipment before thickness scans.'
  },
  {
    id: 'g5',
    category: 'inspection',
    title: 'Weld Joint Visual Testing',
    url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    description: 'Certified AWS inspector verifying the bead profile and root pass depth of a heavy structural joint.'
  },
  {
    id: 'g6',
    category: 'field',
    title: 'Industrial Construction Check',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    description: 'Comprehensive third-party QA oversight on newly constructed structural framework.'
  }
];
