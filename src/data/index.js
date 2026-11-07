export const IMG = (n) => `/images/banner-${n}.png`;

export const INITIATIVES = [
  {
    name: 'Education',
    path: '/education',
    desc: 'Quality education for a brighter tomorrow.',
    img: '/images/pillar-education.png',
    icon: '🎓',
    badgeNum: 1
  },
  {
    name: 'Medical & Healthcare',
    path: '/healthcare',
    desc: 'Better health for stronger communities.',
    img: '/images/pillar-healthcare.png',
    icon: '🩺',
    badgeNum: 4
  },
  {
    name: 'Poverty Enrichment',
    path: '/poverty-enrichment',
    desc: 'Creating opportunities for a self-reliant future.',
    img: '/images/pillar-poverty.png',
    icon: '👥',
    badgeNum: 2
  },
  {
    name: 'Women Empowerment',
    path: '/women-empowerment',
    desc: 'Stronger women. Stronger communities.',
    img: '/images/pillar-women.png',
    icon: '♀',
    badgeNum: 3
  }
];

// Compatibility tuple format [name, path, desc, bannerNum, icon]
export const INIT = INITIATIVES.map(i => [i.name, i.path, i.desc, i.badgeNum, i.icon]);

export const SLIDES = [1, 2, 3, 4];

export const IMPACT_STATS = [
  { icon: '🎓', num: '900+', label: 'Students Educated Annually' },
  { icon: '👥', num: '40,000+', label: 'Lives Impacted' },
  { icon: '📍', num: '150+', label: 'Villages Reached' },
  { icon: '🍲', num: '10,50,000+', label: 'Meals Provided' }
];

export const STORIES = [
  {
    id: 1,
    img: '/images/story-vaibhav.jpg',
    title: "Vaibhav's Journey from Struggle to Success",
    quote: "Education gave me the confidence to dream again.",
    link: '/education'
  },
  {
    id: 2,
    img: '/images/story-devi.jpg',
    title: "Devi's Path to Self-Reliance",
    quote: "I learned, I grew, and now I can support my family.",
    link: '/women-empowerment'
  }
];

export const MEALS_DATA = [
  ['Kolkatta', '~90', '1,97,100+'],
  ['Borivali', '~95', '2,10,600+'],
  ['Parli', '~180', '71,280+'],
  ['Matunga', '~65', '1,17,013+'],
  ['Ghatkopar', '~110', '56,700+'],
  ['Mulund', '~110', '3,88,800+'],
  ['Ahmedabad', '~22', '2,500+']
];

export const ABOUT_MISSION_CARDS = [
  [
    'Education',
    'Our supported mission is to eliminate barriers of isolation, poverty and illiteracy by educating the children, who are our future, in rural areas of the world. We advocate equality for all. We want the underprivileged children to have same chance at life as any other child. We pledge to give grants annually to the schools who align with our cause.'
  ],
  [
    'Healthcare',
    'Our supported mission is to improve and promote a healthy lifestyle in rural areas of the world through compassionate care, excellent clinical practices and education. We pledge to give grants annually to the clinics who align with our cause.'
  ],
  [
    'Poverty Enrichment',
    'Our supported Poverty Enrichment Centers across India are trying to break the cycle of poverty by providing individuals with the tools, resources, and support needed to improve their lives and achieve economic and social stability.'
  ],
  [
    'Women Empowerment',
    'Our supported mission is to transform social and economic relationship for the underprivileged by empowering women of rural communities. Undoubtedly, women form the foundation for growth in our society. Our aim is to harmoniously bring balance in their household needs via education, employment and financial literacy. We pledge to give grants annually to the organizations who align with our cause.'
  ]
];

