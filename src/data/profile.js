// ─────────────────────────────────────────────────────────────
// All personal information lives here. Edit this file to update
// the site — every section reads from it.
//
// Leave a field as an empty string ('') to hide it. Nothing that is
// empty is ever shown on the page.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Christian James Ortouste',
  firstName: 'Christian',
  initials: 'CJ',
  status: 'BSIT Student | Aspiring IT Professional',
  location: 'Davao City, Philippines',

  headline: 'Building practical solutions through technology.',
  intro:
    'I’m an Information Technology student at Holy Cross of Davao College. I build web-based systems for real school and community workflows, and I’m exploring software development, system design, and IT support along the way.',

  // Roles I’m applying for.
  seeking: [
    'IT Support Intern',
    'IT Support Technician',
    'Junior Web Developer',
    'Junior Frontend Developer',
    'Other entry-level IT roles',
  ],

  // Profile photo. Put your real photo at /public/images/profile.jpg.
  // If the file is missing, a clean monogram placeholder is shown instead.
  photo: {
    src: '/images/profile.jpg',
    alt: 'Portrait of Christian James Ortouste',
    // CSS object-position — adjust if your face is cropped awkwardly.
    position: 'center 25%',
  },

  // Resume. Put your PDF at /public/resume.pdf. The download button
  // appears automatically once the file exists.
  resume: {
    src: '/resume.pdf',
    downloadName: 'Christian-James-Ortouste-Resume.pdf',
  },

  // Contact details — only add details you want to be public.
  contact: {
    email: '', // e.g. 'yourname@example.com'
    github: 'https://github.com/Christianjames01',
    linkedin: '', // e.g. 'https://www.linkedin.com/in/your-profile'
  },

  about: {
    paragraphs: [
      'I’m currently studying for a Bachelor of Science in Information Technology at Holy Cross of Davao College. Most of what I know about building software I learned by actually building it — through my capstone, class requirements, and projects I start on my own.',
      'I enjoy taking a real process, like requesting a school document or keeping personal records safe, and turning it into a system that is clear to use and careful with people’s data. I’m still learning, and I’m looking for a first role where I can contribute, ask good questions, and grow.',
    ],
    interests: [
      'Web development',
      'Database design and management',
      'Software development',
      'IT support and troubleshooting',
      'Application usability and UI/UX design',
      'System security and responsible data handling',
    ],
    whatIBring: [
      {
        title: 'Willingness to learn',
        text: 'I pick up new tools by building with them, reading the docs, and asking when I’m stuck.',
      },
      {
        title: 'Attention to detail',
        text: 'I test edge cases and small UI states, not only the happy path.',
      },
      {
        title: 'Problem-solving',
        text: 'I break problems into steps and debug patiently until I understand the cause.',
      },
      {
        title: 'Collaboration',
        text: 'I’ve worked on school projects with classmates, sharing code and dividing tasks.',
      },
      {
        title: 'Useful technology',
        text: 'I care most about building things people can actually use day to day.',
      },
    ],
  },

  education: {
    school: 'Holy Cross of Davao College',
    degree: 'Bachelor of Science in Information Technology',
    status: 'Currently studying',
    location: 'Davao City, Philippines',
    // Optional — leave empty until you have the details.
    expectedGraduation: '', // e.g. '2027'
    coursework: [], // e.g. ['Database Management Systems', 'Web Development']
    activities: [], // e.g. ['Member, IT Student Society']
    achievements: [], // only real awards / honors
  },

  // Optional career sections. Each entry:
  // { title: '', organization: '', period: '', description: '' }
  // Empty lists are hidden.
  internships: [],
  volunteer: [],
  freelance: [],
  // { name: '', issuer: '', year: '', url: '' }
  certifications: [],

  // SEO / sharing. Set siteUrl when you have a real domain
  // (e.g. 'https://your-name.vercel.app') — also update index.html.
  siteUrl: '',
}
