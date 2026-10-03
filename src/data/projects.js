// ─────────────────────────────────────────────────────────────
// Project data. Every card and detail view is generated from this list.
//
// To add a project, copy the template at the bottom of this file into
// the `projects` array. Leave `github` / `demo` as '' to hide those links,
// and leave `screenshots` empty to show a neutral "screenshots coming soon"
// state — never add links or images that don't exist.
//
// Screenshots go in /public/images/projects/.
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    slug: 'certichain',
    number: '01',
    title: 'CertiChain',
    fullTitle:
      'CERTICHAIN: A Web-Based Online Registrar Services System for Academic Certificate Requesting for Higher Education Institutions',
    category: 'Academic Capstone Project · Web Application',
    kind: 'Academic',
    status: 'In development — capstone project',
    summary:
      'An online registrar system where students request academic documents and registrar staff review, verify, process, and release them.',
    overview:
      'CertiChain moves the academic-document request process of a college registrar online. Students create an account, request transcripts or certificates, upload requirements and official receipts, and follow their request until release. Registrar employees review and process requests, while the registrar head manages staff, document types, assignments, and reports.',
    problem:
      'Requesting documents from a registrar usually means repeated trips to the counter, paper forms, and no clear way to know where a request stands. Staff, in turn, track requests manually, and it is hard for a third party to confirm that a released document is genuine.',
    objectives: [
      'Let students submit and track document requests online.',
      'Give registrar employees a clear queue for checking records and processing requests.',
      'Support the existing in-person Finance Office payment through official receipt uploads.',
      'Let anyone check whether an issued credential is genuine and unchanged.',
      'Keep each role limited to the data it actually needs.',
    ],
    users: [
      'Students and alumni requesting documents',
      'Registrar employees processing requests',
      'Registrar head managing the office',
      'Third parties verifying a credential',
    ],
    role: 'Developer',
    contributions: [
      'Built the React + Vite frontend for the student, employee, and registrar-head portals.',
      'Designed the Supabase (PostgreSQL) database, row-level security policies, and migrations.',
      'Wrote Supabase Edge Functions for email notifications, reminders, and account management.',
      'Implemented the public credential verification page and QR codes.',
      'Tested the request workflow end to end and deployed the app on Vercel.',
    ],
    stack: [
      'React',
      'Vite',
      'JavaScript',
      'Supabase',
      'PostgreSQL',
      'Supabase Edge Functions',
      'React Router',
      'Bootstrap',
      'Vercel',
    ],
    features: [
      'Student registration and login, including HCDC Google sign-in',
      'Online document requests with requirement uploads',
      'Official receipt upload for payments made at the Finance Office',
      'Request status tracking with notifications and in-app messages',
      'College- and program-based request assignment to employees',
      'Employee record checking, processing, and claim scheduling',
      'Scheduled physical claiming, including authorized representatives',
      'Employee activity logs and exportable reports',
      'Role-based access for students, employees, and the registrar head',
      'Public credential verification by number or QR code, with tamper detection',
    ],
    planned: [],
    workflow: [
      { title: 'Submit request', text: 'The student chooses a document and submits the request online.', actor: 'Student' },
      { title: 'Upload requirements', text: 'The student uploads required files and the official receipt from the Finance Office.', actor: 'Student' },
      { title: 'Check record', text: 'An assigned registrar employee checks the student’s record and submitted files.', actor: 'Employee' },
      { title: 'Process document', text: 'The employee processes the request and prepares the document.', actor: 'Employee' },
      { title: 'Issue credential', text: 'A credential record with a verification number and QR code is generated.', actor: 'System' },
      { title: 'Release', text: 'The student is notified, then claims the document on a scheduled date or receives it digitally.', actor: 'Student' },
    ],
    screenshots: [
      {
        src: '/images/projects/certichain-landing.png',
        alt: 'CertiChain landing page with the headline “Your records, verified and provable” and a certificate illustration',
        caption: 'Public landing page',
      },
      {
        src: '/images/projects/certichain-login.png',
        alt: 'CertiChain login page with email, password, and HCDC Google sign-in options',
        caption: 'Login with email or HCDC Google account',
      },
      {
        src: '/images/projects/certichain-verify.png',
        alt: 'CertiChain credential verification page with a credential number search field',
        caption: 'Public credential verification',
      },
    ],
    challenges: [
      'Writing row-level security rules so each role can see and change only what it should.',
      'Keeping request statuses consistent as they move between students, employees, and the registrar head.',
      'Making credential records tamper-evident: each one is signed with HMAC-SHA256 when issued, so any later change to the record is flagged on the verify page.',
    ],
    lessons: [
      'Security rules belong in the database, not only in the user interface.',
      'Small database migrations are easier to review and roll back than large ones.',
      'A clear status flow makes the system easier to explain to users and easier to debug.',
    ],
    links: {
      github: 'https://github.com/Christianjames01/CAPSTONE',
      demo: 'https://onlineregistrar.vercel.app',
    },
    note: 'Academic capstone project. The demo is a development deployment, not an official HCDC service.',
  },

  {
    slug: 'vaultlocks',
    number: '02',
    title: 'VaultLocks',
    fullTitle: 'VaultLocks — Offline Personal Vault',
    category: 'Personal Project · Privacy-Focused Application',
    kind: 'Personal',
    status: 'In active development — personal project',
    summary:
      'An offline personal vault for passwords, banking details, IDs, and private notes, with a strict black-and-white interface for desktop and Android.',
    overview:
      'VaultLocks keeps sensitive personal records in a single encrypted file on the user’s own device. It has no account, no cloud sync, and makes no network requests. It runs as a Windows desktop app (Electron) and as an Android app (Capacitor) that share the same vault file format.',
    problem:
      'People often keep passwords, card details, and ID numbers in phone notes or screenshots, where they are easy to lose or expose. Many alternatives need an online account, which some people would rather avoid for their most sensitive data.',
    objectives: [
      'Store sensitive records in an encrypted local file, never on a server.',
      'Organize records into clear categories that are quick to search.',
      'Keep the interface minimal and easy to use on both desktop and phone.',
      'Make backups possible without weakening the encryption.',
    ],
    users: ['Individuals who want to keep personal records offline and organized'],
    role: 'Solo developer',
    contributions: [
      'Designed and built the app on my own — interface, vault logic, and packaging.',
      'Implemented encryption using established libraries (no custom cryptography).',
      'Wrote automated tests for encryption, tampering, backups, and data handling.',
      'Set up GitHub Actions to build signed Android APK releases.',
    ],
    stack: ['TypeScript', 'React', 'Vite', 'Electron', 'Capacitor', 'Web Crypto API', 'Vitest', 'GitHub Actions'],
    features: [
      'Vault categories: banking, cards, e-wallets, email, IDs, subscriptions, secure notes, and more',
      'Master-password unlock (Argon2id key derivation)',
      'Encrypted local storage (AES-256-GCM); no network access',
      'Encrypted backup and restore that works across desktop and Android',
      'Search, favorites, password generator, and duplicate finder',
      'Image attachments, such as card photos, stored inside the encrypted vault',
      'Auto-lock and clipboard auto-clear',
      'Android: optional fingerprint / PIN unlock via the Android Keystore',
    ],
    planned: [],
    workflow: [
      { title: 'Create vault', text: 'The user sets a master password; a key is derived from it with Argon2id.', actor: 'User' },
      { title: 'Add records', text: 'Records are added into categories and saved as one encrypted file on the device.', actor: 'User' },
      { title: 'Unlock & use', text: 'Unlocking decrypts the vault in memory; secrets are revealed only on request.', actor: 'App' },
      { title: 'Lock & back up', text: 'The vault locks automatically; encrypted backups can be restored on another device.', actor: 'App' },
    ],
    screenshots: [],
    preview: 'vault',
    challenges: [
      'Keeping one vault file format compatible between the desktop app and the Android app.',
      'Making sure secrets never end up in logs, the clipboard history, or unencrypted files.',
      'Building signed Android releases automatically with GitHub Actions.',
    ],
    lessons: [
      'Use well-reviewed cryptography libraries instead of writing your own.',
      'Offline storage alone is not security — encryption, locking, and careful handling all matter.',
      'Automated tests give confidence when changing security-sensitive code.',
    ],
    limitations:
      'Offline does not mean unbreakable: a weak master password or malware on an unlocked device can still expose data, and a forgotten master password cannot be recovered.',
    links: {
      github: 'https://github.com/Christianjames01/lcoks',
      demo: '',
    },
    note: 'Personal project. Not independently security-audited.',
  },

  {
    slug: 'barangaylink',
    number: '03',
    title: 'BarangayLink',
    fullTitle: 'BarangayLink — Barangay Management System',
    category: 'Team Project · Community Management System',
    kind: 'Academic',
    status: 'School team project',
    summary:
      'A multi-module barangay management system covering residents, document requests, complaints, social services, disaster response, and office administration.',
    overview:
      'BarangayLink brings most of a barangay office’s day-to-day work into one PHP and MySQL web application. Residents can request documents, apply for business permits, file complaints, book health appointments, and follow announcements. Staff and administrators review, assign, and track this work from role-based dashboards. The system also covers disaster response, social-service programs, and internal office records such as finances, inventory, and staff attendance.',
    problem:
      'Barangay offices often handle resident records, complaints, and relief distribution on paper or scattered spreadsheets, which makes requests slow to follow up and hard to monitor.',
    objectives: [
      'Keep resident records in one organized system.',
      'Let residents submit complaints and track their status.',
      'Let administrators assign complaints to staff and monitor progress.',
      'Support disaster-response records such as evacuees and relief distribution.',
    ],
    users: ['Barangay residents', 'Barangay staff', 'Barangay administrators'],
    role: 'Team member',
    contributions: ['Worked with classmates on a shared PHP codebase as part of a school project.'],
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'PHPMailer'],
    features: [
      'Resident records and role-based access for residents, staff, and administrators',
      'Document and certificate requests with requirement uploads',
      'Complaint, blotter, and incident filing with verification and staff assignment',
      'Business permit applications, processing, renewals, and printing',
      'Disaster response: evacuation centers, evacuees, relief distribution, damage assessment',
      'Dashboards with in-app and email notifications',
    ],
    // Full module list, grouped — shown in the detail view.
    modules: [
      {
        group: 'Residents & records',
        items: ['Resident records', 'Barangay officials directory', 'Staff management', 'Resident ID cards with QR code verification'],
      },
      {
        group: 'Requests & permits',
        items: [
          'Document requests with requirement uploads and approval',
          'Certificate generation',
          'Business permit applications, renewals, and printable permits',
        ],
      },
      {
        group: 'Complaints & public safety',
        items: [
          'Complaint filing, verification, and assignment to staff',
          'Blotter records',
          'Incident reporting and response tracking',
        ],
      },
      {
        group: 'Disaster response',
        items: [
          'Evacuation centers and evacuee registration',
          'Relief inventory and distribution reports',
          'Damage assessment with printable reports',
          'Weather and typhoon information from Open-Meteo and PAGASA bulletins',
        ],
      },
      {
        group: 'Social services',
        items: [
          '4Ps beneficiary registration and reports',
          'Senior citizen records and benefits',
          'Health appointments, assistance requests, and disease surveillance',
          'Student records and scholarships',
        ],
      },
      {
        group: 'Community',
        items: [
          'Announcements and events calendar',
          'Community forum, events, and polls',
          'Job board and livelihood listings',
          'Waste collection schedules, recycling info, and issue reports',
          'Activities and media uploads',
        ],
      },
      {
        group: 'Office administration',
        items: [
          'Budget, revenues, expenses, and fund balance',
          'Inventory stock-in and stock-out',
          'Staff attendance, schedules, leave requests, and payslips',
        ],
      },
    ],
    planned: [],
    workflow: [
      { title: 'File complaint', text: 'A resident submits a complaint through the system.', actor: 'Resident' },
      { title: 'Review', text: 'Administrators are notified and review the new complaint.', actor: 'Admin' },
      { title: 'Assign', text: 'The complaint is assigned to an authorized staff member.', actor: 'Admin' },
      { title: 'Resolve & track', text: 'Staff update the status, and the resident can follow its progress.', actor: 'Staff' },
    ],
    screenshots: [],
    challenges: [
      'Coordinating changes to one shared codebase with several teammates.',
      'Keeping role permissions consistent across more than thirty modules.',
    ],
    lessons: [
      'Clear module boundaries make team development easier.',
      'Consistent role checks on every page are essential in multi-user systems.',
    ],
    links: {
      github: 'https://github.com/Christianjames01/repo',
      demo: '',
    },
    note: 'School team project built with classmates. Not deployed for a real barangay.',
  },
]

// Smaller projects and exercises. Shown in a compact list under the
// featured projects. Hidden when empty.
//
// Example entry:
// {
//   title: 'Project name',
//   type: 'Database project', // e.g. Web app, Programming exercise, UI/UX prototype, IT support
//   description: 'One sentence about what it does.',
//   stack: ['PHP', 'MySQL'],
//   github: '',
//   demo: '',
// }
export const otherProjects = []

/* Template for a new featured project — copy into `projects` above.
{
  slug: 'my-project',          // unique, lowercase, used in the URL
  number: '04',
  title: '',
  fullTitle: '',
  category: '',                // e.g. 'Academic Project · Web Application'
  kind: 'Academic',            // 'Academic' | 'Personal'
  status: '',                  // e.g. 'Completed' / 'In development'
  summary: '',
  overview: '',
  problem: '',
  objectives: [],
  users: [],
  role: '',
  contributions: [],
  stack: [],
  features: [],                // only features that actually work
  planned: [],                 // features not built yet
  workflow: [],                // [{ title, text, actor }]
  screenshots: [],             // [{ src, alt, caption }]
  challenges: [],
  lessons: [],
  links: { github: '', demo: '' },
  note: '',
},
*/
