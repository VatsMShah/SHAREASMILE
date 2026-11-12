export const HEALTHCARE_SERVICES = [
  {
    id: 'medical-camps',
    icon: 'camp',
    title: 'Medical Camps',
    description: 'Comprehensive outreach camps serving rural families of all ages.',
  },
  {
    id: 'general-health',
    icon: 'heartbeat',
    title: 'General Health Checks',
    description: 'Essential preventive screenings, vitals monitoring, and primary consultations.',
  },
  {
    id: 'optometry',
    icon: 'eye',
    title: 'Optometry & Eye Care',
    description: 'Vision screening, corrective lenses, and complete cataract surgical care.',
  },
  {
    id: 'cardiology',
    icon: 'activity',
    title: 'Cardiology Care',
    description: 'Cardiovascular checkups, ECG testing, and specialist cardiac evaluations.',
  },
  {
    id: 'gastronomy',
    icon: 'stomach',
    title: 'Gastroenterology',
    description: 'Diagnosis and care for chronic gastrointestinal and digestive ailments.',
  },
  {
    id: 'dental-clinic',
    icon: 'smile',
    title: 'Dental Clinic',
    description: 'Oral hygiene education, dental procedures, and preventive care.',
  },
  {
    id: 'ent',
    icon: 'headset',
    title: 'Ear, Nose & Throat (ENT)',
    description: 'Specialised examination and treatment for auditory and respiratory health.',
  },
  {
    id: 'homeopathy',
    icon: 'leaf',
    title: 'Homeopathy Clinic',
    description: 'Holistic alternative therapies for chronic conditions and overall wellness.',
  },
];

export const JOURNEY_MILESTONES = [
  {
    step: '01',
    badge: 'The Past',
    tag: 'Historical Challenge',
    title: 'Past Situation',
    summary: 'A remote rural region with severe healthcare isolation and vulnerability.',
    points: [
      'Poor remote villages with frequent outbreaks of preventable diseases',
      'No accessible clinic or hospital within a 20+ km radius',
      'Travel and transport costs alone made seeking care unaffordable',
    ],
  },
  {
    step: '02',
    badge: 'Today',
    tag: 'Demonstrated Impact',
    title: 'Current Achievements',
    summary: 'A decade and a half of dedicated mobile dispensary and clinical outreach.',
    points: [
      'Regular specialist camps: ENT, dental, vision, skin, and gynecology',
      'Mobile dispensary vans reaching interior hamlets across two talukas',
      '1,400+ cataract surgeries successfully completed with 100% recovery rate',
    ],
  },
  {
    step: '03',
    badge: 'The Horizon',
    tag: 'Mission Goals',
    title: 'Expanding Horizons',
    summary: 'Scaling permanent medical infrastructure to serve thousands more each year.',
    points: [
      '25+ visiting specialist doctors on regular hospital rotations',
      'Local diagnostic laboratory providing timely tests at zero or subsidized cost',
      '5,000+ underprivileged patients served via ongoing outpatient and surgeries',
    ],
  },
];

export const HOSPITAL_METRICS = [
  { value: '30,000', unit: 'Sq. Ft.', label: 'Campus Facility Area' },
  { value: '39', unit: 'Beds', label: 'Initial Inpatient Capacity' },
  { value: '51', unit: 'Beds', label: 'Expandable Future Capacity' },
];

export const HOSPITAL_DEPARTMENTS = [
  { icon: 'siren', title: 'Emergency & Trauma', desc: '24/7 urgent medical stabilization and critical response.' },
  { icon: 'scalpel', title: 'Surgical Suite', desc: 'Modern sterile operating rooms for day and inpatient procedures.' },
  { icon: 'activity', title: 'Cardiac Care Unit', desc: 'Diagnostic and supportive care for cardiovascular patients.' },
  { icon: 'microscope', title: 'Diagnostic Lab', desc: 'Pathology, imaging, and rapid on-site laboratory testing.' },
  { icon: 'sun', title: 'Day Care Clinic', desc: 'Short-stay infusions, minor procedures, and outpatient recovery.' },
];

export const HEALTHCARE_GALLERY = [
  {
    id: 'eye-consultation',
    src: '/images/banner-4.png',
    alt: 'Doctor performing detailed ophthalmic eye examination on an elderly villager',
    category: 'Vision Care',
    title: 'Restoring Vision & Dignity',
    caption: 'Regular eye checkup camps identifying cataracts and providing free corrective surgeries.',
    variant: 'wide',
  },
  {
    id: 'hospital-site-exterior',
    src: '/images/healthcare/hospital-construction-1.jpg',
    alt: 'Exterior view of the 30,000 sq ft Shree Raj Medical & Healthcare Centre under construction in Parli',
    category: 'Hospital Construction',
    title: '30,000 Sq. Ft. Hospital in Parli',
    caption: 'Modern healthcare center currently taking shape in Sudhagad Taluka to serve remote rural villages.',
    variant: 'standard',
  },
  {
    id: 'doctor-stethoscope',
    src: '/images/story-devi.jpg',
    alt: 'Physician examining an elderly rural patient with stethoscope in clinical OPD',
    category: 'Primary Care',
    title: 'Compassionate Doctor Consultations',
    caption: 'Bringing experienced doctors directly to patients who previously had to travel over 20 km.',
    variant: 'portrait',
  },
  {
    id: 'registration-team',
    src: '/images/about-mission.png',
    alt: 'Healthcare outreach team registering rural women and seniors for diagnostic checkups',
    category: 'Community Outreach',
    title: 'Doorstep Village Medical Camps',
    caption: 'Mobile dispensary vans and outreach personnel screening villagers in their own communities.',
    variant: 'wide',
  },
  {
    id: 'hospital-upper-floors',
    src: '/images/healthcare/healthcare-2.jpg',
    alt: 'Construction workers building upper levels of the Parli hospital campus',
    category: 'Infrastructure',
    title: 'Building for Generations',
    caption: 'Engineered for up to 51 beds with specialized surgical, cardiac, and diagnostic facilities.',
    variant: 'standard',
  },
  {
    id: 'eye-screening-camp',
    src: '/images/compassionate-eye.png',
    alt: 'Close-up examination of elderly patient during a free rural cataract screening camp',
    category: '1,400+ Surgeries',
    title: '100% Success Rate Cataract Surgeries',
    caption: 'Over 1,400 successful cataract operations completed, granting the gift of clear sight.',
    variant: 'portrait',
  },
  {
    id: 'hospital-courtyard',
    src: '/images/healthcare/healthcare-11.jpg',
    alt: 'Hospital campus entrance driveway and building facade under construction',
    category: 'Parli, Maharashtra',
    title: 'Lifesaving Care Closer to Home',
    caption: 'Bridging the healthcare accessibility gap across Sudhagadh and Khalapur talukas.',
    variant: 'standard',
  },
  {
    id: 'interior-wards',
    src: '/images/healthcare/healthcare-13.jpg',
    alt: 'Interior patient room and ward spaces under preparation at the new hospital',
    category: 'Patient Facilities',
    title: 'Modern Patient Rooms & Wards',
    caption: 'Clean, well-ventilated patient rooms designed for dignified recovery and safety.',
    variant: 'wide',
  },
];

export const HEALTHCARE_SPONSOR_TIERS = [
  {
    amount: '$25',
    cadence: 'per month',
    title: 'Monthly Rural Clinic Fund',
    description: 'Helps subsidize essential diagnostic checkups, medicines, and mobile dispensary fuel for remote hamlets.',
  },
  {
    amount: '$150',
    cadence: 'one-time',
    title: 'Sponsor a Cataract Surgery',
    description: 'Fully funds one complete sight-restoring cataract surgery including intraocular lens, surgery, and post-op care.',
  },
  {
    amount: '$300',
    cadence: 'per year',
    title: 'Annual Village Medical Support',
    description: 'Provides year-round primary care consultations, preventive care kits, and emergency transit for rural families.',
  },
];
