export const profile = {
  name: "Devesh Mungali",
  title: "Senior Shopify Developer",
  subtitle: "Frontend Team Lead",
  location: "Delhi, India",
  email: "deveshmungali@gmail.com",
  phone: "+91 96398 06010",
  tagline:
    "I build storefronts that hold up under real traffic — themes, headless builds, and Shopify apps engineered for speed and conversion.",
};

export const stats = [
  { value: "100+", label: "Stores shipped" },
  { value: "4", label: "Public Shopify apps" },
  { value: "5+", label: "Years in commerce dev" },
  { value: "7", label: "Devs led as team lead" },
];

export const experience = [
  {
    role: "Senior Shopify Developer",
    org: "OptiphoeniX",
    place: "Delhi",
    period: "May 2025 — Present",
    points: [
      "Leading development and customization of Shopify themes using Liquid, JavaScript, and modern frontend practices for high-conversion storefronts.",
      "Building and maintaining custom Shopify apps and extensions to implement advanced business logic, integrations, and automation.",
      "Designing and running A/B tests on product pages, cart, and checkout flows to improve conversion rate, AOV, and UX.",
      "Implementing performance work — lazy loading, asset optimization, DOM cleanup — to improve page speed and Core Web Vitals.",
    ],
  },
  {
    role: "Web Designer Analyst → Acting Frontend Team Lead",
    org: "MakkPress Technologies",
    place: "Delhi",
    period: "Jan 2023 — May 2025",
    points: [
      "Promoted to Acting Frontend Team Lead, managing a team of 7 developers and overseeing project execution.",
      "Led task delegation, code reviews, and performance monitoring across the frontend team.",
      "Drove React and Node.js development, Shopify app development, and API integrations.",
      "Ran client meetings to align project goals and translate business needs into technical solutions.",
      "Worked on site speed optimization, migration tooling, REST APIs, and CLIs for CMS platforms.",
    ],
  },
  {
    role: "Jr. Front End Developer",
    org: "MakkPress Technologies",
    place: "Delhi",
    period: "Jan 2022 — Jan 2023",
    points: [
      "Built responsive, dynamic interfaces with HTML, CSS, and JavaScript.",
      "Customized themes across Shopify, BigCommerce, and Wix.",
      "Worked on CMS integrations, performance optimization, and API implementations alongside senior developers.",
    ],
  },
  {
    role: "Web Designer",
    org: "Mindreamers Pvt. Ltd.",
    place: "Remote",
    period: "Jul 2021 — Dec 2021",
    points: [
      "Built responsive interfaces in React with Redux and Context API for state management.",
      "Partnered with designers and backend developers to integrate APIs into React apps.",
      "Optimized for performance, accessibility, and cross-browser compatibility.",
    ],
  },
  {
    role: "Web Development Intern",
    org: "AirCam Media Pvt. Ltd",
    place: "Remote",
    period: "Feb 2021 — Apr 2021",
    points: [
      "Shipped live-project features using HTML, CSS, JavaScript, jQuery, and AJAX.",
      "Assisted with PHP/MySQL backend work on database-driven applications.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Shopify & Commerce",
    tag: "core",
    skills: [
      "Liquid — Expert",
      "Shopify Theme Development",
      "Shopify App Development",
      "BigCommerce",
      "WooCommerce",
      "Wix",
      "Shift4 Shop",
    ],
  },
  {
    label: "Frontend",
    tag: "frontend",
    skills: ["JavaScript", "React", "Redux", "Next.js", "SASS / LESS", "HTML / CSS"],
  },
  {
    label: "Backend & Data",
    tag: "backend",
    skills: ["Node.js", "Express.js", "PHP", "REST APIs", "GraphQL", "MySQL", "MongoDB"],
  },
  {
    label: "Tooling & Ops",
    tag: "tools",
    skills: ["AWS", "Git", "Postman", "Jira", "Figma", "Command Line Interfaces"],
  },
];

export const shopifyStores = [
  "statelymen.com",
  "americabestappliances.com",
  "svedberga.com",
  "stashlers.com",
  "wellversed.in",
  "gillori.com",
  "ahika.in",
  "amerdental.com",
  "scrapshala.com",
  "kuechenkompane.de",
  "svedbergaplantskola.se",
  "hikkisweden.com",
  "anaangulo.com",
  "maskandcapes.com",
  "buyinhappy.com",
  "drinkbomani.com",
  "thujor.se",
  "cuddlefields.com",
  "karri.io",
  "trendia.co",
  "kepra.in",
];

export const newShopifyStores = [
  "saadaa.in",
  "salty.co.in",
  "flooret.com",
  "palmonas.com",
  "giva.co",
  "mydesignation.com",
  "lndngray.com",
  "getsunmed.com",
  "hestiaco.co.uk",
  "theskinspot.com",
];

export const shopifyApps = [
  {
    name: "MP Store Credit",
    desc: "Store-credit and refund-to-credit app for Shopify merchants.",
    url: "https://apps.shopify.com/mp-store-credit",
  },
  {
    name: "Push Engage & Abandoned Cart",
    desc: "Web push notifications and abandoned-cart recovery flows.",
    url: "https://apps.shopify.com/push-engage-and-abandoned-cart",
  },
  {
    name: "Product Questions — Zip Code",
    desc: "Location-aware Q&A widget on product pages.",
    url: "https://apps.shopify.com/product-questions-zip-code-1",
  },
  {
    name: "Store Locator by MP",
    desc: "Store/dealer locator with map search for multi-location merchants.",
    url: "https://apps.shopify.com/store-locator-by-mp-1",
  },
];

export const wooStores = [
  "jarbarlar.com.sg",
  "superpetfood.in",
  "artprintsanddesigns.in",
  "lacework.in",
  "royal-jersey.in",
];

// Framer / headless + AI-assisted tooling work. Flagged for Devesh to confirm
// exact project names, links, and details before publishing.
export const framerHeadless = [
  {
    name: "Nashi Foods — Framer Homepage",
    desc: "Rebuilt the e-commerce homepage as a custom Framer Code Component (React/TSX), wiring real Shopify variant IDs into the component so checkout URLs generate correctly straight out of a no-code canvas.",
  },
  {
    name: "Headless & API-synced catalogs",
    desc: "Storefronts where product catalog and inventory are synced on a schedule from third-party APIs and external databases, decoupling the storefront from a single backend.",
  },
];

export const aiTools = [
  {
    name: "Automated schema & structured data",
    desc: "A dynamic schema-markup Liquid snippet generating Organization, WebSite, Product, Breadcrumb, LocalBusiness, and FAQPage structured data automatically per page — built to keep SEO metadata accurate without manual upkeep.",
  },
  {
    name: "AI-assisted content pipeline",
    desc: "Workflow for turning raw product and blog copy into clean, publish-ready HTML for Shopify's blog and page editors, cutting manual formatting time on recurring content drops.",
  },
];

export const languages = [
  { name: "English", level: "Advanced High" },
  { name: "Hindi", level: "Native" },
  { name: "Kumauni", level: "Native" },
];

export const education = [
  { degree: "Bachelor of Engineering", school: "RGPV University, Bhopal", year: "2020" },
  { degree: "Intermediate", school: "Vivekanand Inter College, Almora", year: "2016" },
  { degree: "Highschool", school: "Vivekanand Inter College, Almora", year: "2014" },
];
