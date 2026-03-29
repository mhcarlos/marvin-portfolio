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
    sections: [],
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
    thumbnail: 'thumb-intuit-forms.webp',
    images: [],
    gifs: ['central-copy.gif', 'copy-rows-to-new-bill.gif'],
    overview:
      'Forms++ is a collection of quality-of-life improvements for form and spreadsheet handling conceived by me and my triad. The project demonstrates how Intuit product teams listen to customers — starting with user needs and feedback, then designing solutions that scale across the full QBO ecosystem.',
    outcomes: [
      { value: 'Central Copy', label: 'richer copying options across forms, shipped ecosystem-wide' },
      { value: 'Copy Down', label: 'Excel-like feature for power users, propagated across ledgers and documents' },
      { value: 'Expert Validation', label: 'Hector Garcia, CPA — top QuickBooks expert — made a YouTube video about the feature unprompted' },
    ],
    sections: [
      {
        title: 'A Quick Run-through of Copy',
        body: 'It starts with our information architecture: Different product teams use "copy" in different contexts (simple copy, duplicate, etc.). Apart from solving for consistency, the exploration progresses to the question: "How may we add even more user value to the concept beyond consistency?" We did so through a centralized feature that outlines those choices users are already making, and a clear and orderly way to intelligently copy entire documents or select parts of a document and paste it into a different or new document across the entire QBO experience.',
      },
      {
        title: 'The Data/User-Centric Basis',
        body: 'Intuit Design relies on a lot of user feedback coming from user interviews, Slack channels for customers, etc. to surface issues, user needs, and for general feature validation. Copy and the rest of the Forms++ proposals were no exception. I also leaned on my own research into QuickBooks Online\'s existing IA and current user interactions — including how the word "copy" is interchangeable with other terms across invoices, payments, inventory management, and so on.',
      },
      {
        title: 'Why Central Copy Is a Great Solution',
        body: 'While copying seems straightforward, why was Hector Garcia so pleased with this feature that he made a YouTube video about it? From a UX/IA standpoint, the feature defines and centralizes the idea of copying as a mental model — covering everything from taking lines in a document to duplicating an entire document. More importantly, it addresses practical user needs around repetitive tasks: a bill can be seen as an invoice from a different point of view; a power user may want to copy a generic ledger into a bill, invoice, or sales order. These three general use cases cover a wide array of sub-use cases.',
      },
      {
        title: 'Other Forms++ Features',
        body: 'Forms++ is a much larger project in two tracks. Track 1 restored quality-of-life improvements lost during a recent QBO overhaul. Track 2 — my focus — was a creative endeavor: the team filtered through collected user feedback and conceptualized fixes, improvements, and new features. Other features include: "Magic paste" (copying from external documents into QBO), Typeahead standardization (richer and more consistent across the board), Header area minimization, and Excel-like Copy Down — requested by our power users and propagated across ledgers and applicable documents system-wide.',
      },
      {
        title: 'More on Other Forms++ Features',
        body: 'While Central Copy took center stage here, other features developed and under development are equally valuable. A series of artboards storyboard working between external tools and QuickBooks Online. Copy Down — an Excel/spreadsheet standard — is another example: a feature we propagated as a general capability across ledgers and applicable documents across the QBO system. The Figma canvas shown encompasses roughly 5 features and their corresponding interactive demo prototypes.',
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
    thumbnail: 'thumb-intuit-manufacturing.webp',
    images: [],
    gifs: ['qb-ma-01.gif', 'qb-ma-05-competitors.gif'],
    overview:
      'Intuit\'s goal was to target mid-market and emerging mid-market manufacturing businesses in the U.S. — while also better supporting existing manufacturing customers — by creating a light Materials Requirements Planning (MRP) application integrated into existing QuickBooks features. Through an end-to-end design process from research to interaction design to testing, I teamed up with my triad to create a viable go-to-market design that served as Intuit\'s first foray into the manufacturing segment.',
    outcomes: [
      { value: 'Alpha', label: 'shipped as Intuit\'s first manufacturing product for mid-market' },
      { value: 'E2E', label: 'research → interaction design → testing, all phases led by me' },
      { value: '19/19', label: 'tasks completed perfectly by manufacturing-background testers in usability testing' },
      { value: '17/19', label: 'tasks completed among non-manufacturing testers — high confidence for initial release' },
    ],
    sections: [
      {
        title: 'Pre-history and Context',
        body: 'The team initially had a designer — a distinguished peer of mine — but he was moved quickly to other projects. I came in to hit the ground running months later: consuming research, doing rapid iterations, and jumping quickly from low-fi to hi-fi to unblock my product development team. I began with user research and market research, partnering closely with my Product Manager, picking up existing qualitative and quantitative data, and confirming the manufacturing space\'s taxonomy — content and language design that validates manufacturing-specific vocabulary with the customer and industry we were targeting.',
      },
      {
        title: 'Competitor Research and Feature Ideation',
        body: 'QuickBooks would be competing with dedicated manufacturing software companies. Competitors gave me industry knowledge and a wealth of ideas I could iterate on regarding the most common customer "jobs to be done" — especially the key workflows that should be hard requirements. Rather than seeking pure product parity, the initial philosophy I arrived at was to produce the simplest and most viable workflow. I worked with the team to extract which key features and workflows truly needed to be fleshed out for a viable GTM offering.',
      },
      {
        title: 'Interaction Design and Rapid Iteration',
        body: 'The bulk of my time was spent iterating on ideas and ensuring consistency with the rest of the QuickBooks suite and design system. At times, it was necessary to introduce newer patterns — which I negotiated with the Intuit Design System team. Iterating workflows to their ideal state also required more customer conversations and testing, and a lot of collaboration with other QuickBooks groups (manufacturing, like retail and construction, is heavily reliant on Inventory Management).',
      },
      {
        title: 'High-Fidelity to Ready-for-Dev',
        body: 'I speedily layered user needs, workflows, and other findings into high-fidelity screens and prototypes. The speed of execution was as important as the confidence and quality of the final designs — Development had been blocked for months before I joined the team. Most high-fidelity work I produced were either self-contained prototypes of flows or prototype-ready for the complete workflow that I tested with users in the final stage.',
      },
      {
        title: 'Testing and Future State',
        body: 'I created a full workflow Figma prototype that became the basis for both moderated and unmoderated user testing sessions — the results of which bolstered confidence in our initial release while determining the next round of feature sets. The tests were flawless with testers who had a manufacturing background (19 out of 19 tasks done easily and perfectly) while also scoring high among non-manufacturing-type testers (17/19).',
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
    thumbnail: 'thumb-morgan-stanley-r4.webp',
    images: ['ms-r4-01.png', 'ms-r4-02.png'],
    gifs: [],
    overview:
      'Starting as one of the first hires in a new Digital Strategy group, I practiced hands-on design leadership — building the team, switching tools from Sketch to Figma, and creating standards that set the bar for all future digital brand work. I also led ADA/WCAG compliance remediation across existing digital properties, serving as both UX Lead and Accessibility SME across a nearly two-year period that spanned the COVID era.',
    outcomes: [
      { value: 'MarCom Award', label: 'global website — modern, vibrant, accessible' },
      { value: 'R4 Design System', label: 'still in production use today across Morgan Stanley\'s digital brand' },
      { value: 'WCAG', label: 'ADA compliance baked in on new work and remediated on legacy properties firm-wide' },
      { value: 'Foundation', label: 'for succeeding rebrands across Institutional Investing, Wealth Management, and sub-brands' },
    ],
    sections: [
      {
        title: 'The Digital Brand Revisited',
        body: 'Along with a comprehensive rebrand, work split into two paths: remediating the legacy site (a separate project I led as Accessibility SME) and the R4 Redesign itself (where I led UX and accessibility). Leading UX for R4 entailed research, revisiting existing data, facilitating conversations with senior stakeholders, and partnering with agency leads. I had extensive face-to-face collaboration with partners across a nearly two-year period — including adapting to Zoom-based collaboration through COVID. The driving philosophy for the final design was a modern feel with more distinctive and flexible components — a significant improvement over the previous "R3" design.',
      },
      {
        title: 'Data Visualization and Charting Accessibility',
        body: 'I extracted a new accessible charting palette — reflective of R4\'s more vibrant and modern colors while providing a simpler set of colors and specific rules for staying on-brand. I also created guides for Content, Design, and Development on how to approach new designs, content, and code from the get-go with accessibility in mind. Aside from accommodating different Color Vision Deficiencies, the majority of accessibility problems come from the code itself (keyboard issues, focus issues, AJAX handling) and content (missing alt text, text-on-images). I was as much Accessibility Engineer as UX Lead across different stretches of the R4 project.',
      },
      {
        title: 'Modern, Vibrant, and Flexible',
        body: 'Part of the vision was to produce a more modern, vibrant, and flexible set of patterns — a departure from the older, more homogenous "bento box" approach. The result feels more organic yet has a distinct logic around hierarchy and organization, while scaling to accommodate partners and sub-brands. As UX Lead, I created the rules for how patterns and components were used and mixed. I later spearheaded migration of the system into Figma, further clarifying those rules and creating a templating system that made low-to-hi-fidelity mocks faster and more consistent.',
      },
      {
        title: 'Sketch to Figma: The Firm-wide Pattern Library',
        body: 'As the point person for Figma on my team, I consolidated and rebuilt two years\' worth of Sketch files produced between my team and the agency — resulting in a Figma library that could be scaled and grown by my team and our partners. My goal was greater efficiency for future design work while having a "single source of truth" reference that our partners and stakeholders could use — whether or not they rely on my team for UX/UI work. Consistency, efficiency, and decreasing friction were my goals.',
      },
      {
        title: 'Governance & Scalability for Partners',
        body: 'Beyond the R4 project itself, I provided UX and branding leadership and guidance on UX and ADA/WCAG compliance for partner teams and sub-brands. An example is work done by the same agency we partnered with for Wealth Management\'s Morgan Stanley AtWork team — patterns that build upon core R4 in terms of both patterns and branding. I later served in a consulting capacity for Morgan Stanley @ Work\'s redesign and further extension of the R4 system.',
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
    thumbnail: 'thumb-amex-cover.webp',
    images: ['amex-recon-01.png', 'amex-recon-02.png'],
    gifs: [],
    overview:
      'The Corporate Account Reconciliation (CAR) product was a key revenue generator — more lucrative than many consumer and SMB initiatives at Amex. The 15-year-old legacy system was blocking adoption of a new experience. A parallel project, Recon Admin, started a month into my contract and I led design on both simultaneously. My role was truly end-to-end: research to core design to testing, plus maintaining an HTML/CSS/Angular web prototype and presenting to senior stakeholders at each phase.',
    outcomes: [
      { value: '~80%', label: 'of users wanted to convert to the new experience (up from 0% on arrival)' },
      { value: '~90%', label: 'of the original legacy product\'s user base served by the new product' },
      { value: 'Dual track', label: 'led Recon and Recon Admin simultaneously under Agile XP' },
      { value: 'Full-stack', label: 'HTML, CSS/SCSS, Bootstrap, and Angular prototype maintained throughout' },
    ],
    sections: [
      {
        title: 'Background: Legacy CAR',
        body: 'The legacy application — Corporate Account Reconciliation (CAR) — is a rich, white-labeled, feature-laden but very old application with usability and technical issues. Its core tech (Java Applet) was reaching end of life, creating pain for both American Express and its corporate clients every time Java was updated at a client company. CAR had also grown organically for years with little to no design oversight — so apart from substantial technical pain points, the user experience had become worse over time.',
      },
      {
        title: 'Understanding and Solving for Recon',
        body: 'Understanding CAR initially involved extensive stakeholder and SME interviews that yielded starter maps. These were followed by user interviews and ethnographic studies. In every step, I sought a balance between product and user needs. I also educated myself deeply in the technical aspects of CAR as an application suite — the chart I created from a whiteboard sketch represents just a small fraction of what CAR covers in terms of areas, features, and roles.',
      },
      {
        title: 'Persona, Org Structure, and Roles',
        body: 'Testing and speaking with my higher-level personas, power users, and SMEs were key to delivering a viable product offering. The majority of the work centers on the Cardmember and Cardmember Manager personas — roughly 70% of my time. I also served a Basic Control Account (BCA) Manager persona — an admin- or power-user-type who managed CAR across client companies (ranging from one BCA Manager to many, depending on company size).',
      },
      {
        title: 'User Research and Validation',
        body: 'A third of my daily life in Recon was user research and testing. Talking and empathizing with users was key to making sure we were solving the right problems. I maintained an HTML+Angular prototype — used both for stakeholder demos and live user testing sessions — alongside writing test scripts and synthesizing findings. The product went beyond solving technical and UX issues of the legacy app to become a full-fledged modern SaaS solution with a more intuitive experience.',
      },
      {
        title: 'Lean UX: Design Thinking and Iteration',
        body: 'Throughout the transformation of Recon, I led or supported design studio sessions for figuring out which problems to solve, prioritizing features into user stories and epics, and ideating on how best to tackle them. I regularly pulled in members of my Product and Development teams — and sometimes people from other teams — to flesh out more ideas and encourage "out-of-the-box" thinking. The collaborative and "always-on" Agile XP environment was central to our ability to move quickly.',
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
    pills: ['AI/ML Product Design', 'Enterprise Analytics', 'Ideation Leadership', 'Client Demo', 'Data Visualization', 'Mobile'],
    thumbnail: 'thumb-mastercard.webp',
    images: ['mastercard-sp-01.jpg', 'mastercard-sp-02.jpg', 'mastercard-sp-03.jpg'],
    gifs: [],
    overview:
      'Spending Pulse is an application that helps enterprise clients visualize spending trends. Although much of my work at Mastercard Labs was in quick bursts and often experimental, this project stands out as one where I led ideation alongside a Product Manager lead and helped bring an existing successful Mastercard enterprise application into its 2.0 phase. The Events feature adds AI/ML to provide a real-time assessment of how world events affect projected revenue — helping clients better mitigate business risk.',
    outcomes: [
      { value: 'Events Feature', label: 'high-priority AI/ML feature design for Spending Pulse 2.0' },
      { value: 'Demo', label: 'client-ready interactive prototype delivered' },
      { value: 'Vision', label: 'design direction and vision provided to the Mastercard product team to build from' },
    ],
    sections: [
      {
        title: 'Ideation',
        body: 'We explored small, medium, and large business scenarios and split into sub-teams accordingly. Tasks included persona creation, "How Might We" sessions, user journey mapping, sketching, and other design thinking exercises. My role included guiding the small business sub-team while also serving as the general voice of the user for the larger team — ultimately arriving at a mobile prototype and a script for the executive demo video.',
      },
      {
        title: 'Map Screens',
        body: 'The resulting UI for the Events AI feature adds a new main section to the mobile app called "Events." In place of the current spending heatmap, I introduced a bubble map — where bubble size is proportionate to the potential cost impact or savings, allowing a Director-level persona to take a glance and bookmark events for further investigation.',
      },
      {
        title: 'Bookmarking, Event Details, and AI Certainty',
        body: 'I introduced a spider area chart to provide takeaways on a specific prediction. Apart from ROI (during and after an event), I proposed a measure of certainty for the prediction — a "grain of salt" for the AI/ML output. Also designed were methods for filtering events and a bookmarking feature, giving users a way to track and return to the events most relevant to their business.',
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
    pills: ['Data Pipelines', 'ELT/ETL', 'Dashboard Design', 'User Interviews', 'AI-Assisted', 'Data Visualization'],
    thumbnail: 'thumb-dash-elt-cover.webp',
    images: ['elt-dashboard-01.png', 'elt-dashboard-02.png', 'elt-dashboard-03.png'],
    gifs: [],
    overview:
      'Data Engineers and Architects need a dashboard with useful — often critical and time-sensitive — information about data pipelines: exporting, loading, and transforming data. The key challenge was identifying and prioritizing the 3 metrics that matter most for the specific domain. I delivered the MVP design in two weeks, covering scenarios, visualizations, and a full interaction spec.',
    outcomes: [
      { value: 'Research', label: 'user interviews, theme gathering, anti-goals definition' },
      { value: 'MVP', label: 'delivered with scenarios, visualizations, and full interaction spec' },
      { value: '2 weeks', label: 'from research to delivered MVP design' },
    ],
    sections: [
      {
        title: 'ELT/ETL Research',
        body: 'Key questions answered: What are the most important data points that personas need to see in the dashboard, especially potential issues and pain points? Within the ELT/ETL process, for the specific domain of the company, which key metrics and data points are most pertinent? Prioritization: If you can choose just 3 key metrics, which would they be? These questions home in on what\'s important and where to surface key information within the final experience and UI. While I did not limit the dashboard to 3 key metrics, there\'s inherent value in prioritizing data points — these best align to my users\' needs and pain points.',
      },
      {
        title: 'Themes and Feasibility',
        body: 'Key insights surfaced: The "top 3" question surfaces themes under which you can also group other, more minor data points which happen to be related. Some key metrics are not really within scope for the company — for instance, data quality is better left for a data warehouse-focused organization (e.g. Snowflake, GCP) along with related companies that can better analyze and provide visualization for these (e.g. PowerBI, Tableau).',
      },
      {
        title: 'Main Dashboard Metrics',
        body: 'Key metrics on the dashboard: Error Rate, Data Transfer Rate, and Data Latency — all related to the health of the export or transform processes (especially export). Supporting metrics: Data Volume, Duplication Rate, and Data Availability. Ongoing Processes are also surfaced — especially useful when there\'s an issue. In the example scenario I created, a too-high Average Data Latency value is tied to why a current data sync process is running slower than usual.',
      },
      {
        title: 'Key Results and Learnings',
        body: 'A successful MVP design was created in the space of two weeks. A surprising highlight was the accuracy of research done to identify pain points and appropriate charts to describe those data points — despite using AI in place of interviewing real data scientists (the key persona). AI has come a long way and will become a valuable tool augmenting the UX process and research findings. This project was an early proof point of AI-assisted UX research done well.',
      },
    ],
  },
];
