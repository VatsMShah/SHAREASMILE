export const INFRASTRUCTURE_ITEMS = [
  {
    id: 'interactive-classrooms',
    icon: 'classroom',
    title: 'Interactive Classrooms',
    description: 'Encouraging active participation and engaging learning experiences.',
  },
  {
    id: 'school-buses',
    icon: 'bus',
    badge: '9 Buses',
    title: '9 School Buses',
    description: 'Helping students travel to and from school safely and conveniently.',
  },
  {
    id: 'library',
    icon: 'book',
    title: 'Well-Stocked Library',
    description: 'Providing access to books and resources that encourage reading and curiosity.',
  },
  {
    id: 'laboratories',
    icon: 'flask',
    title: 'Well-Equipped Laboratories',
    description: 'Giving students opportunities to explore scientific concepts through practical learning.',
  },
  {
    id: 'computer-training',
    icon: 'monitor',
    title: 'Computer Training',
    description: 'Building digital awareness and essential computer skills.',
  },
  {
    id: 'e-learning',
    icon: 'elearning',
    title: 'E-Learning',
    description: 'Integrating technology into the learning experience.',
  },
  {
    id: 'solar-power',
    icon: 'solar',
    title: 'Solar Power Generation',
    description: 'Supporting more sustainable energy practices within the school.',
  },
  {
    id: 'fire-compliant',
    icon: 'shield',
    title: 'Fire-Compliant Building',
    description: 'Promoting a safer learning environment through fire-safety infrastructure.',
  },
];

export const FEATURED_EXHIBITIONS = [
  {
    id: 'makers-fair',
    icon: 'tools',
    tag: 'Hands-On Innovation',
    title: "Maker's Fair",
    description:
      'A hands-on learning experience where students bring their ideas to life through creative projects, technology, and engineering concepts.',
  },
  {
    id: 'science-fair',
    icon: 'atom',
    tag: 'Inquiry & Discovery',
    title: 'Science Fair',
    description:
      'Encouraging students to explore scientific ideas, conduct experiments, and present their discoveries.',
  },
  {
    id: 'art-exhibitions',
    icon: 'palette',
    tag: 'Visual Expression',
    title: 'Art Exhibitions',
    description:
      'Giving students a platform to express themselves through painting, sculpture, photography, and other forms of visual art.',
  },
];

export const GROWTH_OPPORTUNITIES = [
  {
    id: 'stem',
    icon: 'atom',
    title: 'STEM Activities',
    description: 'Encouraging scientific thinking, technology exploration, engineering, and mathematics.',
  },
  {
    id: 'arts',
    icon: 'palette',
    title: 'Arts & Creative Expression',
    description: 'Nurturing imagination and artistic abilities.',
  },
  {
    id: 'sports',
    icon: 'trophy',
    title: 'Sports & Physical Fitness',
    description: 'Promoting teamwork, discipline, and healthy habits.',
  },
  {
    id: 'strategy-games',
    icon: 'puzzle',
    title: 'Indoor Strategy Games',
    description: 'Developing logical thinking, concentration, and problem-solving skills.',
  },
];

export const GALLERY_ROW_ONE = [
  {
    id: 'parli-corridor',
    src: '/images/IT7A7079-edit.jpg',
    alt: 'Smiling students walking through the Parli English-medium school corridor',
    category: 'Parli Campus',
    title: 'Joyful Learning Corridors',
    caption: 'Students heading to class at the supported English-medium school in Parli, Maharashtra.',
    variant: 'wide',
    objectPosition: 'center 22%',
  },
  {
    id: 'morning-prayer-girls',
    src: '/images/IT7A7306-edit.jpg',
    alt: 'Students gathered in uniform during morning assembly',
    category: 'Culture & Heritage',
    title: 'Morning Assembly & Unity',
    caption: 'Daily gatherings nurturing mindfulness, gratitude, and shared school values.',
    variant: 'standard',
    objectPosition: 'center 20%',
  },
  {
    id: 'smiling-notebooks',
    src: '/images/smiling-schoolgirl.png',
    alt: 'Young schoolgirl in yellow plaid tie holding notebooks and smiling',
    category: 'Student Dreams',
    title: 'Confidence Through Opportunity',
    caption: 'Providing quality resources so every child steps into school ready to thrive.',
    variant: 'portrait',
    objectPosition: 'center 18%',
  },
  {
    id: 'classroom-curiosity',
    src: '/images/hopeful-classroom.png',
    alt: 'Smiling student sitting at a vibrant primary school classroom desk',
    category: 'Interactive Classrooms',
    title: 'Bright Beginnings in Rural India',
    caption: 'Engaging learning spaces designed to spark curiosity from day one.',
    variant: 'wide',
    objectPosition: '68% 20%',
  },
];

export const GALLERY_ROW_TWO = [
  {
    id: 'boys-assembly',
    src: '/images/IT7A7309 - edit.jpg',
    alt: 'Boys in school uniforms participating in morning school prayer',
    category: 'Community Values',
    title: 'Discipline, Respect & Togetherness',
    caption: 'Building grounded character alongside strong academic foundations.',
    variant: 'standard',
    objectPosition: 'center 20%',
  },
  {
    id: 'uniform-assembly-girls',
    src: '/images/IT7A7312-edit.jpg',
    alt: 'Girls in white and yellow uniforms during cultural morning assembly',
    category: 'Cultural Celebrations',
    title: 'Honouring Heritage & Belonging',
    caption: 'Cultural events and school assemblies where every student feels celebrated.',
    variant: 'wide',
    objectPosition: 'center 20%',
  },
  {
    id: 'student-tilak-focus',
    src: '/images/schoolboy-praying.png',
    alt: 'Young boy participating peacefully in morning prayer at school',
    category: 'Tradition & Character',
    title: 'Rooted in Values',
    caption: 'Appreciating heritage and respecting diversity across the school community.',
    variant: 'standard',
    objectPosition: '54% 18%',
  },
  {
    id: 'table-smile',
    src: '/images/IT7A7466-edit.jpg',
    alt: 'Student smiling warmly at a colorful classroom table',
    category: 'Child Sponsorship',
    title: 'Every Smile Counts',
    caption: 'Holistic support covering learning materials, uniforms, transit, and meals.',
    variant: 'portrait',
    objectPosition: 'center 20%',
  },
];

export const ALL_GALLERY_PHOTOS = [...GALLERY_ROW_ONE, ...GALLERY_ROW_TWO];

export const EDUCATOR_TRACKS = [
  {
    num: '01',
    tag: 'Qualifications',
    image: '/images/smiling-schoolgirl.png',
    imageAlt: 'Student holding books reflecting strong academic standards',
    imagePosition: 'center 20%',
    title: 'Promoting Professional Development',
    summary: 'Helping rural educators grow through formal degrees and ongoing career incentives.',
    points: [
      'Support for B.Ed. & higher degrees',
      'Salary incentives for B.Ed. scholars',
      'Paid exam leave for further studies',
    ],
  },
  {
    num: '02',
    tag: 'Workshops & Coaching',
    image: '/images/hopeful-classroom.png',
    imageAlt: 'Engaged primary student at an interactive classroom table',
    imagePosition: '68% 20%',
    title: 'Training & Development',
    summary: 'Hands-on training and 1-on-1 coaching that elevate everyday classroom teaching.',
    points: [
      'Academic & holistic subject workshops',
      'Coaching in communication & time skills',
      'Fresh classroom management methods',
    ],
  },
  {
    num: '03',
    tag: 'Fluency & Methods',
    image: '/images/IT7A7306-edit.jpg',
    imageAlt: 'Students participating in a collective school gathering',
    imagePosition: 'center 20%',
    title: 'Enriching Language Skills',
    summary: 'Strengthening English communication and interactive teaching tools across classes.',
    points: [
      'Online English fluency classes',
      'Creative, student-centered methods',
      'Effective use of modern teaching aids',
    ],
  },
];

export const HOSTEL_STATS = [
  { value: '36', label: 'Residential Rooms' },
  { value: '108', label: 'Girls Accommodated' },
  { value: '3', label: 'Students / Room + Attached Baths' },
];

export const HOSTEL_FACILITIES = [
  { icon: 'medical', label: 'Medical room' },
  { icon: 'wash', label: 'Laundromat' },
  { icon: 'broom', label: "Janitors' room" },
  { icon: 'water', label: 'Sewage Treatment Plant' },
  { icon: 'solar', label: 'Solar Power Plant' },
];

export const SPONSOR_ESSENTIALS = [
  'Books and learning materials',
  'School uniforms',
  'Transportation',
  'School meals',
];

export const SPONSOR_TIERS = [
  {
    amount: '$21',
    cadence: 'per month',
    description: 'can help support a child’s education.',
  },
  {
    amount: '$250',
    cadence: 'per year',
    description:
      'can help provide essential educational support and give a child greater opportunities for a brighter future.',
  },
];
