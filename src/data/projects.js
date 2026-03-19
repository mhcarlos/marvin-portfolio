// All portfolio projects
// Images: place downloaded files in public/assets/images/ and public/assets/gifs/
// Reference them as /marvin-portfolio/assets/images/filename.png

export const projects = [
  {
    id: 'insight-partners',
    client: 'Insight Partners',
    year: '2024–Present',
    role: 'Lead Product Designer',
    title: 'In-House Platform Design & AI Integration',
    description:
      'Leading UX and product design for Insight Partners\' internal platforms — evolving design systems and integrating AI-driven features into company sourcing, analysis, and portfolio management workflows.',
    pills: ['Design Leadership', 'Design Systems', 'AI Features', 'Internal Platforms', 'VC/PE'],
    images: [],
    gifs: [],
    overview:
      'Driving end-to-end product design across Insight\u2019s suite of in-house tools, with a focus on making complex data workflows accessible to analysts and operators. Work spans design system development, AI-assisted sourcing features, and portfolio company analysis tooling.',
    outcomeLabel: null,
    outcomes: [
      { value: 'AI-Driven', label: 'sourcing and analysis features integrated into core workflows' },
      { value: 'Design System', label: 'developed and evolved across multiple internal product surfaces' },
    ],
  },
  {
    id: 'qb-forms',
    client: 'Intuit / QuickBooks',
    year: '2023–24',
    role: 'Product Designer',
    title: 'QuickBooks Forms++ Project',
    description:
      'A series of form and spreadsheet enhancements — conceived, designed, and developed with my product-design-development triad — deployed across the entire QuickBooks Online ecosystem. Centerpiece: Central Copy, a richer copying experience long requested by power users.',
    pills: ['QBO Ecosystem', 'Interaction Design', 'Power Users', 'Agile'],
    images: ['qb-forms-d4d.png'],
    gifs: ['central-copy.gif', 'copy-rows-to-new-bill.gif'],
    overview:
      'Forms++ is a collection of quality-of-life improvements for form and spreadsheet handling conceived by me and my triad. The project demonstrates how Intuit product teams listen to customers — starting with user needs and feedback, then designing solutions that scale across the full QBO ecosystem.',
    outcomes: [
      { value: 'Central Copy', label: 'richer copying options across forms, shipped ecosystem-wide' },
      { value: 'Copy Down', label: 'Excel-like feature for power users, propagated across ledgers and documents' },
    ],
  },
  {
    id: 'qb-manufacturing',
    client: 'Intuit / QuickBooks',
    year: '2023–24',
    role: 'Product Designer',
    title: 'Manufacturing & Assemblies for QuickBooks',
    description:
      'End-to-end design of Intuit\'s first foray into serving manufacturing clients — a light MRP application integrated into QuickBooks, targeting mid-market and emerging mid-market businesses in the U.S.',
    pills: ['End-to-End Design', 'MRP / Manufacturing', 'Mid-Market', 'Research to Delivery'],
    images: ['qb-ma-screenshot.png'],
    gifs: ['qb-ma-01.gif', 'qb-ma-05-competitors.gif'],
    overview:
      'Intuit\'s goal was to target mid-market and emerging mid-market manufacturing businesses in the U.S. — while also better supporting existing manufacturing customers — by creating a light Materials Requirements Planning (MRP) application integrated into existing QuickBooks features.',
    outcomes: [
      { value: 'Alpha', label: 'shipped as Intuit\'s first manufacturing product for mid-market' },
      { value: 'E2E', label: 'research → interaction design → testing, all phases led by me' },
    ],
  },
  {
    id: 'morgan-stanley',
    client: 'Morgan Stanley',
    year: '2017–21',
    role: 'UX/UI Design Lead',
    title: 'Marketing & Brand, Revision 4',
    description:
      'Led the global UX/UI redesign and rebranding of Morgan Stanley\'s digital brand — building a new team, switching from Sketch to Figma mid-project, and creating the R4 Design System that remains in production use today. MarCom Award winner.',
    pills: ['Global Rebrand', 'Design System (R4)', 'WCAG / ADA Compliance', 'Design Leadership', 'MarCom Award'],
    images: ['ms-r4-01.png', 'ms-r4-02.png'],
    gifs: [],
    overview:
      'Started as one of the first hires in a new Digital Strategy group. Practiced hands-on design leadership — building the team, switching tools from Sketch to Figma, and creating standards that set the bar for all future digital brand work. Also led ADA/WCAG compliance remediation across existing digital properties.',
    outcomes: [
      { value: 'MarCom Award', label: 'global website — modern, vibrant, accessible' },
      { value: 'R4 Design System', label: 'still in production use today' },
      { value: 'WCAG', label: 'ADA compliance baked in on new work and remediated on legacy properties' },
    ],
  },
  {
    id: 'amex-recon',
    client: 'American Express',
    year: '2015–17',
    role: 'UX/Product Design Lead',
    title: 'Legacy to Modern App: Amex Recon',
    description:
      'Took over as UX/Product Design Lead 6 months into a major enterprise modernization — transforming a 15-year-old legacy reconciliation product under Agile XP, taking conversion intent from 0% to ~80%.',
    pills: ['Enterprise Modernization', 'Agile XP', 'Legacy-to-Modern', 'Revenue-Critical'],
    images: ['amex-recon-01.png', 'amex-recon-02.png'],
    gifs: [],
    overview:
      'The Corporate Account Reconciliation (CAR) product was a key revenue generator — more lucrative than many consumer and SMB initiatives at Amex. The 15-year-old legacy system was blocking adoption of a new experience. A parallel project, Recon Admin, also started a month into my contract and I led design on both simultaneously.',
    outcomes: [
      { value: '~80%', label: 'of users wanted to convert to the new experience (up from 0% on arrival)' },
      { value: 'Dual track', label: 'led Recon and Recon Admin simultaneously under Agile XP' },
    ],
  },
  {
    id: 'mastercard-sp',
    client: 'Mastercard Labs',
    year: '2014–15',
    role: 'Product Designer',
    title: 'AI and Events: Mastercard Spending Pulse',
    description:
      'Led ideation to bring an existing enterprise analytics product into its 2.0 phase — designing the Events feature that uses AI/ML to assess real-time impact of world events on spending trends, including a client demo prototype.',
    pills: ['AI/ML Product Design', 'Enterprise Analytics', 'Ideation Leadership', 'Client Demo'],
    images: ['mastercard-sp-01.jpg', 'mastercard-sp-02.jpg', 'mastercard-sp-03.jpg'],
    gifs: [],
    overview:
      'Spending Pulse helps enterprise clients visualize spending trends. The Events feature uses ML to provide real-time assessment of how world events affect projected revenue. My contribution was to kickstart the design direction and give the Mastercard product team a vision to build from.',
    outcomes: [
      { value: 'Events Feature', label: 'high-priority AI/ML feature design for Spending Pulse 2.0' },
      { value: 'Demo', label: 'client-ready interactive prototype delivered' },
    ],
  },
  {
    id: 'elt-dashboard',
    client: 'Freelance',
    year: '2023',
    role: 'Product Designer',
    title: 'ELT Connector Dashboard',
    description:
      'MVP design for a data pipeline monitoring dashboard for Data Engineers and Architects — communicating critical pipeline health metrics with scenarios, visualizations, and detailed interaction specifications.',
    pills: ['Data Pipelines', 'ELT/ETL', 'Dashboard Design', 'User Interviews', 'AI-Assisted'],
    images: ['elt-dashboard-01.png', 'elt-dashboard-02.png', 'elt-dashboard-03.png'],
    gifs: [],
    overview:
      'Data Engineers and Architects need a dashboard with useful — often critical and time-sensitive — information about data pipelines: exporting, loading, and transforming data. The key challenge was identifying and prioritizing the 3 metrics that matter most for the specific domain.',
    outcomes: [
      { value: 'Research', label: 'user interviews, theme gathering, anti-goals definition' },
      { value: 'MVP', label: 'delivered with scenarios, visualizations, and full interaction spec' },
    ],
  },
];
