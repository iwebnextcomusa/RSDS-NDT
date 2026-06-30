import { ServiceItem, CourseItem, TestimonialItem, FAQItem, GalleryItem, IndustryItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'vt',
    title: 'Visual Testing (VT)',
    shortDescription: 'The foundational NDT method, essential for surface check evaluation, weld profiles, and compliance audits.',
    fullDescription: 'Our certified Visual Testing (VT) inspectors utilize direct and remote inspection systems to evaluate structural steel, vessels, and piping. We inspect in strict compliance with AWS D1.1, ASME, and ABS standards, identifying surface-breaking discontinuities and structural fatigue early.',
    benefits: [
      'Rapid, highly cost-effective surface screening',
      'Detects weld profiles, surface corrosion, and misalignment',
      'Ensures compliance with AWS D1.1, ASME, and ABS codes'
    ],
    industries: ['Petrochemical', 'Oil & Gas', 'Pipelines', 'Structural', 'Maritime'],
    iconName: 'Eye',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ut',
    title: 'Ultrasonic Testing (UT)',
    shortDescription: 'Precision sound-wave inspections to measure thickness, map corrosion, and verify internal weld joint integrity.',
    fullDescription: 'Ultrasonic Testing (UT) utilizes high-frequency acoustic waves to examine the subsurface integrity of plates, structural members, and piping. Following AWS D1.1, ASME, and ABS codes, UT provides highly accurate defect sizing, crack detection, and detailed thickness mapping.',
    benefits: [
      'Superior subsurface defect detection and sizing',
      'Accurate volumetric mapping of critical internal welds',
      'Requires access to only one side of the component'
    ],
    industries: ['Pipelines', 'Petrochemical', 'Oil & Gas', 'Structural', 'Maritime'],
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mt',
    title: 'Magnetic Particle Testing (MT)',
    shortDescription: 'Highly sensitive testing for identifying surface and near-surface flaws in ferromagnetic steel elements.',
    fullDescription: 'Magnetic Particle Testing (MT) is a highly reliable method for locating surface-breaking anomalies in ferromagnetic steels. By inducing a localized magnetic field and applying fine particles, we easily reveal fatigue cracks, seams, and weld flaws to AWS D1.1, ASME, and ABS guidelines.',
    benefits: [
      'Extremely sensitive to tight, shallow surface cracks',
      'Ideal for heavy structural welds, offshore decks, and piping',
      'Immediate visual indication of defects on active assets'
    ],
    industries: ['Structural', 'Maritime', 'Oil & Gas', 'Pipelines', 'Petrochemical'],
    iconName: 'Magnet',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pt',
    title: 'Liquid Penetrant Testing (PT)',
    shortDescription: 'Capillary-action detection to locate microscopic surface defects in non-porous welds, piping, and structures.',
    fullDescription: 'Liquid Penetrant Testing (PT) uses capillary physics to draw highly visible or fluorescent dye into surface-breaking defects on any non-porous material. This is highly effective for examining non-magnetic weld overlays and structural steel in accordance with AWS D1.1, ASME, and ABS requirements.',
    benefits: [
      'Excellent portability for field inspection environments',
      'Highly effective for checking non-magnetic alloy welds',
      'Clear, high-contrast visual display of tight surface fatigue cracks'
    ],
    industries: ['Maritime', 'Petrochemical', 'Oil & Gas', 'Structural', 'Pipelines'],
    iconName: 'Droplet',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rt',
    title: 'Radiographic Testing (RT)',
    shortDescription: 'Volumetric weld inspections using x-ray or gamma-ray imaging to capture permanent, archival-quality internal records.',
    fullDescription: 'Radiographic Testing (RT) provides clear visual representation of the internal structure of weldments and pipelines. We perform radiographic assessments in strict accordance with AWS D1.1, ASME Section V, and ABS criteria, ensuring maximum safety and code compliance.',
    benefits: [
      'Provides a permanent, indisputable visual record of internal weld quality',
      'Identifies subsurface slag inclusions, porosity, and incomplete fusion',
      'Crucial for high-pressure process piping and pipeline girth welds'
    ],
    industries: ['Pipelines', 'Oil & Gas', 'Petrochemical', 'Structural', 'Maritime'],
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'consulting',
    title: 'Level III Consulting & Procedures',
    shortDescription: 'Independent ASNT Level III program auditing, customized procedure development, and Quality Assurance consulting.',
    fullDescription: 'Our certified ASNT Level III consulting provides the highest level of oversight for your quality management system. We author and approve testing procedures, conduct third-party audits, and configure QA programs strictly optimized for AWS D1.1, ASME, and ABS regulatory compliance.',
    benefits: [
      'Independent, expert third-party procedure authorization and verification',
      'Total alignment with AWS D1.1, ASME, and ABS specifications',
      'Helps facilities establish and audit rigorous safety protocols'
    ],
    industries: ['Petrochemical', 'Oil & Gas', 'Pipelines', 'Structural', 'Maritime'],
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'welding_inspect',
    title: 'Welding Inspection Services',
    shortDescription: 'Comprehensive pre-weld, in-process, and post-weld joint evaluations and weld procedure qualifications.',
    fullDescription: 'We provide thorough visual and physical evaluations of welding activities to ensure absolute compliance with code requirements. From checking base-metal preparation and joint fit-up to witnessing welder qualifications and verifying finished bead profiles under AWS D1.1, ASME, and ABS.',
    benefits: [
      'Reduces structural welding failures and rework expenses',
      'Witnesses and records official welder qualification performance tests',
      'Inspects structures directly to AWS D1.1, ASME Section IX, and ABS codes'
    ],
    industries: ['Structural', 'Pipelines', 'Maritime', 'Oil & Gas', 'Petrochemical'],
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  }
];

export const COURSES: CourseItem[] = [
  {
    id: 'vt-i-ii',
    title: 'Visual Testing (VT) Level I & II',
    level: 'Level I & II',
    hours: 40,
    description: 'Master the theory and practical applications of visual inspection. Covers direct and indirect methods, weld defects, corrosion profiles, and key inspection codes.',
    benefits: [
      'Hands-on practice evaluating real weld specimens and joints',
      'Thorough preparation for ASNT SNT-TC-1A compliance criteria',
      'Includes comprehensive study materials, practical workshops, and exam prep'
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
      'Rigorous training for acoustic velocities and angle calculations'
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
      'Compliant with industry leading structural and maritime welding codes'
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
    id: 'petrochemical',
    title: 'Petrochemical',
    description: 'Routine and preventative wall thickness scanning, vessel integrity mapping, and process piping audits to ensure safety and prevent structural failures.',
    image: 'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&w=600&q=80',
    iconName: 'Flame'
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    description: 'Rigorous non-destructive testing for onshore and offshore exploration, storage vessels, and drilling setups under challenging environments.',
    image: 'https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&w=600&q=80',
    iconName: 'Droplets'
  },
  {
    id: 'pipelines',
    title: 'Pipelines',
    description: 'Continuous volumetric testing, weld integrity scans, and pipeline girth weld certifications to prevent leakage and guarantee compliance.',
    image: 'https://images.unsplash.com/photo-1581092162779-847c4be77501?auto=format&fit=crop&w=600&q=80',
    iconName: 'Activity'
  },
  {
    id: 'structural',
    title: 'Structural Steel',
    description: 'Critical structural weld testing, framework inspection, and welder performance checks strictly guided by AWS D1.1 and ASME standards.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    iconName: 'Layers'
  },
  {
    id: 'maritime',
    title: 'Maritime',
    description: 'Specialized NDT services for hulls, decks, marine boilers, and pressure equipment matching ABS (American Bureau of Shipping) standards.',
    image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=600&q=80',
    iconName: 'Shield'
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
    answer: 'We provide professional NDT inspections and ASNT certifications for several core sectors: Petrochemical plants, Oil & Gas operations, cross-country Pipelines, heavy Structural steel projects, and Maritime structures following AWS D1.1, ASME, and ABS guidelines.'
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
    question: 'What credentials do your inspectors and instructors hold?',
    answer: 'All our training courses comply with ASNT SNT-TC-1A and ANSI guidelines. Our instructional quality and program development are overseen by certified ASNT Level III experts with extensive field testing backgrounds in AWS D1.1, ASME, and ABS codes.'
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
    category: 'inspection',
    title: 'Structural MT Inspection',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    description: 'Inspector performing magnetic particle checking on a critical steel weld joint.'
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
    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
    description: 'Comprehensive third-party QA oversight on newly constructed structural framework.'
  }
];
