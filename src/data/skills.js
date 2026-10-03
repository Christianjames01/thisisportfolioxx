// ─────────────────────────────────────────────────────────────
// Skills. Only list what you can explain or demonstrate in an interview.
//
// level: 'Familiar'   — used it in real projects, comfortable with the basics
//        'Developing' — used it, still learning important parts
//        'Beginner'   — early stage, learning the fundamentals
// Remove a skill by deleting its line. Remove a whole group by deleting it.
// ─────────────────────────────────────────────────────────────

export const levels = {
  Familiar: 'Used in real projects; comfortable with the basics.',
  Developing: 'Used in projects; still learning important parts.',
  Beginner: 'Early stage; learning the fundamentals.',
}

export const skillGroups = [
  {
    title: 'Programming & Web Development',
    skills: [
      { name: 'HTML', level: 'Familiar' },
      { name: 'CSS', level: 'Familiar' },
      { name: 'JavaScript', level: 'Familiar' },
      { name: 'React', level: 'Developing' },
      { name: 'PHP', level: 'Developing' },
      { name: 'TypeScript', level: 'Beginner' },
    ],
  },
  {
    title: 'Database & Backend',
    skills: [
      { name: 'MySQL', level: 'Developing' },
      { name: 'SQL fundamentals', level: 'Developing' },
      { name: 'Supabase (PostgreSQL)', level: 'Developing' },
    ],
  },
  {
    title: 'Tools & Development',
    skills: [
      { name: 'Visual Studio Code', level: 'Familiar' },
      { name: 'Git', level: 'Developing' },
      { name: 'GitHub', level: 'Familiar' },
      { name: 'XAMPP', level: 'Familiar' },
      { name: 'npm & Vite', level: 'Developing' },
      { name: 'Vercel', level: 'Developing' },
    ],
  },
  {
    title: 'IT Support',
    skills: [
      { name: 'Hardware and software troubleshooting', level: 'Developing' },
      { name: 'Basic computer maintenance', level: 'Developing' },
      { name: 'OS and application troubleshooting', level: 'Developing' },
      { name: 'Basic networking concepts', level: 'Beginner' },
      { name: 'Technical documentation', level: 'Developing' },
    ],
  },
]

// "Experience Through Projects" — practical experience gained from
// academic and personal work (not paid employment).
export const practicalExperience = [
  {
    title: 'Developing academic and personal projects',
    text: 'Built a capstone registrar system, a personal vault app, and team school projects from first idea to working software.',
  },
  {
    title: 'Designing user interfaces',
    text: 'Designed role-specific portals and minimal interfaces that work on both desktop and mobile.',
  },
  {
    title: 'Connecting applications to databases',
    text: 'Worked with MySQL in PHP projects and with Supabase (PostgreSQL) in React projects, including access rules.',
  },
  {
    title: 'Implementing and testing workflows',
    text: 'Implemented multi-step request workflows and tested them across student, staff, and admin roles.',
  },
  {
    title: 'Troubleshooting technical problems',
    text: 'Debugged build errors, deployment issues, and database permission problems while shipping projects.',
  },
  {
    title: 'Learning through iteration',
    text: 'Improved projects in small steps — commit by commit — based on testing and feedback.',
  },
]
