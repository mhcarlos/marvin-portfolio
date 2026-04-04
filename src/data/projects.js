// All portfolio projects
// Images: place downloaded files in public/assets/images/
// Reference them by filename — assetUrl() in ProjectCard.jsx resolves the full path

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
    thumbnail: null,
    images: [],
    gifs: [],
    overview:
      'Driving end-to-end product design across Insight\u2019s suite of in-house tools, with a focus on making complex data workflows accessible to analysts and operators. Work spans design system development, AI-assisted sourcing features, and portfolio company analysis tooling.',
    outcomeLabel: null,
    outcomes: [
      { value: 'AI-Driven', label: 'sourcing and analysis features integrated into core workflows' },
      { value: 'Design System', label: 'developed and evolved across multiple internal product surfaces' },
    ],
    points: [],
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
    thumbnail: 'thmb-forms-plus-plus.png',
    images: [],
    gifs: [],
    overview:
      'This piece focuses on one major feature of the Forms++ Project — richer copying options — deployed across the entire QuickBooks Online ecosystem. The project demonstrates how Intuit product teams listen to their customers. Forms++ is a series of features conceived by me and my triad (Product, Design, Development).',
    outcomes: [
      { value: 'Central Copy', label: 'richer copying options across forms, shipped ecosystem-wide' },
      { value: 'Copy Down', label: 'Excel-like feature for power users, propagated across ledgers and documents' },
      { value: 'Expert Validation', label: 'a top QuickBooks expert discovered and made a video about the feature' },
    ],
    points: [
      {
        title: 'A Quick Run-through of Copy',
        text: 'It starts with our information architecture: Different product teams use "copy" in different contexts (simple copy, duplicate, etc.). Apart from solving for consistency, the exploration progresses to the question: "How may we add even more user value to the concept beyond consistency?" We did so through a centralized feature that outlines choices users are already making, and a clear and orderly way to intelligently copy entire documents or select parts of a document and paste it into a different or new document across the entire QBO experience.',
        media: '1-forms-run-through.gif',
      },
      {
        title: 'The Data/User-Centric Basis',
        text: 'Intuit Design relies on a lot of user feedback coming from user interviews, Slack channels for customers, etc. to surface issues, user needs, and for general feature validation. Copy and the rest of the Forms++ proposals were no exception. I also leaned on my own research into QuickBooks Online\'s existing IA and current user interactions related to copy actions. It was important to know how the actions are treated across all QBO areas — invoices, payments, inventory management — as well as taxonomy considerations around how the word "copy" is interchangeable with other terms.',
        media: '2-forms-post-its.webp',
      },
      {
        title: 'Why the Copy Feature Is a Great Solution',
        text: 'While copying seems straightforward, why was a top QuickBooks expert so pleased with this feature that he deemed it worthy of a YouTube video? From a UX/IA standpoint, the feature defines and centralizes the idea of copying as a mental model covering everything from taking lines in a document to duplicating an entire document. More importantly, it addresses practical user needs around repetitive tasks of copying the same data between different types of documents. A bill can be seen as an invoice from a different point of view; a user may want to copy a generic ledger into a bill, invoice, or sales order; or simply duplicate the same document for various business workflows. These three general use cases cover a lot of sub-use cases.',
        media: '3-forms-why-great.gif',
      },
      {
        title: 'Other Forms++ Features',
        text: 'Forms++ is a much larger project in two tracks. Track 1 was about restoring certain user quality-of-life improvements lost due to an overhaul of QuickBooks Online in recent years. My focus was on Track 2 — a much more creative endeavor where the team filtered through collected user feedback and conceptualized fixes, improvements, and new features for quality-of-life improvements, particularly for more advanced form and spreadsheet-handling features needed by both typical users and power users (usually accountants by trade). Other features include "Magic Paste" (copying from external documents to QBO), typeahead standardization, header area minimization, and Excel-like features such as Copy Down.',
        media: '4-forms-other.webp',
      },
      {
        title: 'More About Other Forms++ Features',
        text: 'While Central Copy took center stage here, other features developed and under development are equally valuable. Shown here are a series of artboards meant to storyboard working between external tools and QuickBooks Online. Another example is Copy Down, a standard Excel/spreadsheet app feature that we were propagating as a general feature across ledgers and applicable documents across the QBO system.',
        media: '5-forms-more-magic-paste.gif',
      },
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
    thumbnail: 'thmb-manufacturing.png',
    images: [],
    gifs: [],
    overview:
      'Through an end-to-end design process from research to interaction design iterations to testing, I jumped into the QuickBooks Manufacturing space, teaming up with my triad of Product and Development to create a viable go-to-market design and experience that would serve as Intuit\'s first foray into serving manufacturing clients better and open up the mid-market segment even more for QuickBooks.',
    outcomes: [
      { value: 'Alpha', label: 'shipped as Intuit\'s first manufacturing product for mid-market' },
      { value: 'E2E', label: 'research \u2192 interaction design \u2192 testing, all phases led by me' },
      { value: '19/19', label: 'tasks completed perfectly by manufacturing-background testers' },
    ],
    points: [
      {
        title: 'Pre-history and Context',
        text: 'The team initially had a designer but he was moved quickly to other projects. I came in to hit the ground running months later to fill in the gap, consume research, do rapid iterations, and jump quickly from low-fi to hi-fi to unblock and enable my product development team to tackle implementation. I began with user research and market research, partnered closely with my Product Manager, picked up existing qualitative and quantitative data, and confirmed the manufacturing space\'s taxonomy — content and language design confirming manufacturing-specific vocabulary that bolstered the final product design\'s viability.',
        media: '1-manu-context.webp',
      },
      {
        title: 'Competitor Research and Feature Ideation',
        text: 'I knew that QuickBooks would be competing with dedicated manufacturing software companies. Competitors gave me a lot of industry knowledge and a wealth of ideas to iterate on regarding the most common customer "jobs to be done," especially the key workflows that should be hard requirements. Rather than seeking pure product parity, the initial philosophy I arrived at and later confirmed was to produce the simplest and viable workflow. So I worked with the team to extract what key features and workflows truly needed to be fleshed out for a viable go-to-market offering.',
        media: '2-manu-research.gif',
      },
      {
        title: 'Interaction Design and Rapid Iteration',
        text: 'The bulk of my time was spent iterating on ideas and making sure everything would be consistent with the rest of the QuickBooks suite of products and the design system. At times, it was necessary to introduce newer patterns and I negotiated these patterns with the Intuit Design System team. Iterating workflows to their ideal state also required more customer conversations and testing, and a lot of collaboration with other QuickBooks groups — similar to businesses like retail and construction, manufacturing is heavily reliant on Inventory Management.',
        media: '3-manu-interaction-work.gif',
      },
      {
        title: 'High-Fidelity to Ready-for-Dev',
        text: 'I speedily layered user needs, workflows, and other findings and hypotheses into high-fidelity screens and prototypes. The speed of execution here was as important as the confidence and quality of the final design and workflows, as Development had been blocked for months before I joined the team. Most high-fidelity work I produced were either self-contained prototypes of flows or prototype-ready for the complete workflow that I tested with users in the final stage.',
        media: '4-manu-hifi.gif',
      },
      {
        title: 'Testing and Future State',
        text: 'I created a full workflow Figma prototype that became the basis for both moderated and unmoderated user testing sessions — the results of which served to bolster confidence in our initial release while also determining the next round of feature sets. The tests were flawless with testers who had a manufacturing background (19 out of 19 tasks done easily and perfectly) while also scoring high among non-manufacturing-type testers (17/19).',
        media: '5-manu-future.gif',
      },
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
    thumbnail: 'thmb-r4.png',
    images: [],
    gifs: [],
    overview:
      'I led the global UX/UI redesign and rebranding of Morgan Stanley\'s digital brand, working with the Digital Strategy team and collaborating with partners across the firm, building a new team as I progressed. I also took the lead on web accessibility compliance (ADA, WCAG), working closely across design, product, and engineering to remediate existing digital properties and ensure new work had ADA compliance baked in. Starting as one of the first hires in a new group, I practiced hands-on design leadership — the resulting standards and guidelines, including the R4 Design System, are still in use today.',
    outcomes: [
      { value: 'MarCom Award', label: 'global website — modern, vibrant, accessible' },
      { value: 'R4 Design System', label: 'still in production use today' },
      { value: 'WCAG', label: 'ADA compliance baked into new work and remediated on legacy properties' },
    ],
    points: [
      {
        title: 'The Digital Brand Revisited',
        text: 'Along with a comprehensive rebrand, the work diverged into two paths: remediating the legacy site — a separate project I led as the Accessibility SME — and the R4 Redesign where I also led UX and accessibility. Leading UX entailed research, revisiting existing data, facilitating conversations with senior stakeholders, and partnering with agency leads. On the hands-on level, I had a lot of face-to-face collaboration and iterative work with various partners through a nearly 2-year period. Beyond accessibility, the driving philosophy was a modern feel along with more distinctive and flexible components — a significant improvement from the previous "R3" design.',
        media: '1-r4-revisited.webp',
      },
      {
        title: 'Data Visualization and Charting Accessibility',
        text: 'I extracted a new accessible charting palette reflective of R4\'s more vibrant and modern colors, while providing a simpler set of colors and specific rules on how to stay on-brand. I also created guides for Content, Design, and Development on how to make sure new work had accessibility baked in from the start. Apart from accommodating different Color Vision Deficiency types, the majority of accessibility problems come from the code itself (keyboard issues, focus issues, AJAX handling) and the content side (missing alt text, text-on-images). I was as much Accessibility Engineer as UX Lead for different stretches of the project.',
        media: '2-r4-a11y-guide.webp',
      },
      {
        title: 'Modern, Vibrant, and Flexible',
        text: 'Part of the vision was to produce a more modern, vibrant, and flexible set of patterns — a departure from the older and more homogenous "bento boxes." The result feels more organic yet still has a distinct logic around hierarchy and organization, while scaling to accommodate partners and sub-brands. As UX Lead, I helped create the rules on how patterns and components were used and mixed together. I later spearheaded the migration of the system and styles into Figma, further clarifying rules and making a templating system available for faster, more consistent mockups.',
        media: '3-r4-modern-vibrant.webp',
      },
      {
        title: 'Sketch to Figma: The Firm-wide Pattern Library',
        text: 'As the point person for Figma on my team, I took the task of consolidating and rebuilding 2 years worth of Sketch files produced between my team and the agency, resulting in a Figma library that could be scaled and grown. My goal was greater efficiency for future design work while having a single source of truth reference and usable Figma library that partners and stakeholders could use — whether or not they relied on my team for UX/UI work. Consistency, efficiency, and decreasing friction were my goals.',
        media: '4-r4-sketchtofigma.webp',
      },
      {
        title: 'Governance & Scalability for Partners',
        text: 'Apart from the R4 project itself, there were initiatives that followed for partners and sub-brands where I provided UX and branding leadership as well as guidance for ADA/WCAG compliance. An example shown here is work done with the agency for Wealth Management\'s Morgan Stanley AtWork team. These patterns build upon core R4 in terms of patterns and branding.',
        media: '5-r4-scaling.webp',
      },
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
    thumbnail: 'thmb-recon.png',
    images: [],
    gifs: [],
    overview:
      'The Corporate Account Reconciliation (CAR) product was a key revenue generator — more lucrative than many consumer and SMB initiatives at Amex. The 15-year-old legacy system was blocking adoption of a new experience. My role was truly end-to-end: hands-on leadership from research to core design to testing, and I even used my front-end skills to maintain a web prototype (HTML, CSS/SCSS, Bootstrap, and Angular). A parallel project — codenamed Radmin (Recon Admin) — also started a month into my contract and I led design on both simultaneously.',
    outcomes: [
      { value: '~80%', label: 'of users wanted to convert to the new experience (up from 0% on arrival)' },
      { value: 'Dual Track', label: 'led Recon and Recon Admin simultaneously under Agile XP' },
    ],
    points: [
      {
        title: 'Background: Legacy CAR',
        text: 'The legacy application Corporate Account Reconciliation (CAR) is a rich, white-labeled, and feature-laden — but also very old (20+ years) — application with usability and technical issues. Its core tech (Java Applet) was reaching end of life and was a pain point for both American Express and its corporate clients to fix every time the Java version was updated. One caveat to growing the application organically was the lack of design oversight, so apart from the substantial technical pain points, the user experience also became worse over time.',
        media: '1-recon-intro.webp',
      },
      {
        title: 'Understanding and Solving for Recon',
        text: 'Understanding CAR initially involved a lot of stakeholder and SME interviews that yielded starter maps. These were followed by user interviews and ethnographic studies. In every step, I sought a balance between product and user needs. Along the many user interviews and test sessions I ran during the project, I was also educating myself in the technical aspects of CAR as an application suite.',
        media: '2-recon-discovery.webp',
      },
      {
        title: 'Persona, Org Structure, and Roles',
        text: 'Testing and sometimes even just speaking with my higher-level personas, power users, and SMEs were key to delivering a viable product offering. The majority of the work was around the lower part of the org structure — the Cardmember and Cardmember Manager personas. But I also dealt with an admin/power-user persona called a Basic Control Account (BCA) Manager. This persona managed CAR across client companies, and there could be just one or multiple BCA Managers depending on company size.',
        media: '3-recon-IA.webp',
      },
      {
        title: 'User Research and Validation',
        text: 'A third of my daily life in Recon was user research and testing. Talking and empathizing with users is a key part of making sure we\'re solving the right problems. This is an actual photo of my desk after a user testing session, complete with the script I wrote and the HTML+Angular prototype I ran and maintained for tests.',
        media: '4-recon-validation.webp',
      },
      {
        title: 'Lean UX: Design Thinking and Iteration',
        text: 'Throughout the transformation of Recon, I either led or supported design studio sessions for figuring out which problems to solve, prioritizing features into user stories and epics, and then ideating on how best to tackle these stories. Quite often, I would pull in people from my Product and Development team — and sometimes people from other teams — to flesh out more ideas and encourage out-of-the-box thinking.',
        media: '5-recon-iteration.webp',
      },
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
    thumbnail: 'thmb-spending-pulse.png',
    images: [],
    gifs: [],
    overview:
      'Spending Pulse is an application that helps client companies see their spending trends. This project stands out because it was one of those initiatives to lead ideation along with a Product Manager lead and bring an existing successful Mastercard enterprise application into its 2.0 phase. This project involved AI/ML but was also very ambiguous in terms of final deliverables — apart from my facilitation and ideation work with the Mastercard team, my main contribution was to kickstart their design direction and provide them with a vision to build from.',
    outcomes: [
      { value: 'Events Feature', label: 'high-priority AI/ML feature design for Spending Pulse 2.0' },
      { value: 'Demo', label: 'client-ready interactive prototype delivered' },
    ],
    points: [
      {
        title: 'Ideation',
        text: 'We explored small, medium, and large business scenarios and split into sub-teams. The tasks included persona creation, "How might we" sessions, user journey mapping, sketching, and other design thinking exercises. My role included guiding the small business sub-team, being the general voice of the user for the larger team, and arriving at a mobile prototype and a script for the executive demo video.',
        media: '1-pulse-ideation.webp',
      },
      {
        title: 'Map Screens',
        text: 'The resulting UI for the Events AI feature added a new main section of the mobile app called "Events." In place of the current spending heatmap, I introduced a bubble map where the size of the bubble would be proportionate to the potential cost impact or savings that a Director-level persona can glance at and bookmark for further investigation.',
        media: '2-pulse-maps.webp',
      },
      {
        title: 'Bookmarking and Event Details',
        text: 'I introduced a spider/area chart that would give takeaways on a specific prediction. Apart from ROI (during and after an event), I proposed a measure of certainty for the prediction (AI and data reliability) — to put that "grain of salt" in the prediction. Also shown here are methods for filtering events as well as the bookmarking feature.',
        media: '3-pulse-bookmarking.webp',
      },
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
    thumbnail: 'thmb-elt.png',
    images: [],
    gifs: [],
    overview:
      'Data Engineers and Architects need a dashboard with useful — often critical and time-sensitive — information about data pipelines: exporting, loading, and transforming data. The key challenge was identifying and prioritizing the metrics that matter most for the specific domain.',
    outcomes: [
      { value: 'Research', label: 'user interviews, theme gathering, anti-goals definition' },
      { value: 'MVP', label: 'delivered with scenarios, visualizations, and full interaction spec' },
    ],
    points: [
      {
        title: 'ELT/ETL Research',
        text: 'Key questions answered: What are the most important data points that personas need to see, especially potential issues and pain points? Within the ELT/ETL process for the specific domain, which key metrics are most visible and pertinent? And if you can choose just 3 key metrics, which would they be? These questions home in on what\'s important and where to surface key information within the final experience and UI.',
        media: '1-ELT-discovery.webp',
      },
      {
        title: 'Themes and Feasibility',
        text: 'Key insights surfaced: The "top 3" question surfaces themes under which you can also group other more minor data points which happen to be related to that theme. Some key metrics are not really within scope for the company — for instance, data quality is better left for a data warehouse-focused organization (e.g. Snowflake, GCP) along with related companies that can better analyze and provide visualization for these (e.g. PowerBI, Tableau).',
        media: '2-ELT-discovery2.webp',
      },
      {
        title: 'Main Dashboard Metrics',
        text: 'Key metrics on the dashboard: Error Rate, Data Transfer Rate, and Data Latency — all related to the health of the export or transform processes. Data Volume, Duplication Rate, and Data Availability roughly support the first three. Ongoing Processes are useful to see on the dashboard, especially if there\'s an issue — in the example scenario I created, a too-high Average Data Latency value is tied to why a current data sync process is running slower than usual.',
        media: '3-ELT-dash.webp',
      },
      {
        title: 'Key Results and Learnings',
        text: 'A successful MVP design for a dashboard was created in the space of two weeks. A surprising highlight is the accuracy of the research done to identify pain points and appropriate charts — despite using AI in place of interviewing real data scientists (which was the key persona characteristic). AI has come a long way and will become a valuable tool augmenting the UX process and research findings.',
        media: '4-ELT-modal.webp',
      },
    ],
  },
];
