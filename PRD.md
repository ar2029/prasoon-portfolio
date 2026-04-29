# Product Requirements Document (PRD)
## Prasoon Garg — Personal Portfolio Website

**Version:** 1.0  
**Date:** 2026-04-16  
**Author:** Prasoon Garg  
**Status:** Draft  

---

## 1. Executive Summary

A professional, modern portfolio website for **Prasoon Garg**, a Senior Data Engineer with 5 years of experience in Azure Cloud, Microsoft Fabric, Databricks, and PySpark. The site is designed to:

- Showcase technical depth to recruiters and engineering leaders
- Present projects with architectural detail (diagrams, tech stack, outcomes)
- Provide a **verified recruiter contact form** with OTP email verification and structured job description intake
- Be **evergreen and extensible** — new projects can be added without restructuring the site

**Inspiration template:** [MoncyDev/Portfolio-Website](https://github.com/MoncyDev/Portfolio-Website) (React + TypeScript + Vite + GSAP)

---

## 2. Goals & Success Metrics

| Goal | Success Metric |
|---|---|
| Establish professional online presence | Site live, indexed by Google |
| Attract quality recruiter outreach | ≥5 verified recruiter contacts/month |
| Reduce spam & unqualified contacts | OTP filter reduces irrelevant messages by 80% |
| Showcase evolving project portfolio | New project addable in <30 mins |
| ATS resume delivery pipeline | Recruiter fills JD → Prasoon reviews → sends tailored resume |

---

## 3. Target Audience

| Persona | Description | Goal on Site |
|---|---|---|
| **Technical Recruiter** | HR/talent at tech/product companies | Verify Prasoon's skills, initiate contact with JD |
| **Engineering Manager** | Hiring manager evaluating senior candidates | Assess architecture thinking via project deep-dives |
| **Startup Founder** | Looking for a fractional/contract data engineer | Quick scan of expertise and contact |
| **Peer/Network** | Fellow engineers or collaborators | Browse projects, connect |

---

## 4. Site Architecture & Page Sections

The site is a **single-page application (SPA)** with smooth scroll navigation. All sections are anchored with IDs.

```
/
├── Navbar                  (sticky, with section links)
├── Hero / Landing          (name, title, animated tagline, CTA)
├── About                   (bio, background, soft skills)
├── Experience / Career     (timeline of 3 companies)
├── Tech Stack              (categorized skill icons/pills)
├── What I Do               (data engineering services/domains)
├── Projects                (horizontal scroll cards — extensible)
│   ├── Envision (Eptura)
│   └── DART (TCS)
├── Certifications          (AZ-900, DP-900, SC-900)
├── Achievements            (awards)
├── Contact                 (OTP-verified recruiter form + social links)
└── Footer
```

---

## 5. Detailed Section Requirements

### 5.1 Navbar
- Fixed/sticky top navigation
- Logo: "PG" monogram or "Prasoon Garg" wordmark
- Links: About | Experience | Skills | Projects | Contact
- Smooth scroll to section on click
- Mobile: hamburger menu with slide-in drawer

### 5.2 Hero / Landing
- **Headline:** `Hello, I'm`  **`PRASOON GARG`**
- **Animated subtitle:** cycles between:
  - `Senior Data Engineer`
  - `Azure & Fabric Specialist`
  - `Data Platform Architect`
- **Tagline:** "5 years building scalable data pipelines on Azure Cloud, Microsoft Fabric & Databricks"
- **CTA buttons:**
  - `View My Work` → scrolls to Projects
  - `Contact Me` → scrolls to Contact
- **Background:** Subtle animated data-flow particle effect or Azure-themed 3D mesh (inspired by template's Three.js canvas)
- **Profile photo placeholder:** Use a professional avatar/illustration if no photo provided

### 5.3 About
- **Heading:** About Me
- **Bio paragraph** (from resume profile):
  > "Senior Data Engineer with 5 years of experience designing, building, and delivering scalable data engineering solutions on cloud-based big data platforms. Strong expertise in Python, PySpark, Spark SQL, and distributed data processing using Azure Cloud, Databricks, and Microsoft Fabric. Experienced in Finance, Insurance, and Workplace Analytics domains, with a passion for democratizing data and enabling data-driven decision making across business functions."
- **Key highlights** (icon + stat):
  - 5+ Years Experience
  - 3 Industry Domains (Finance, Insurance, Workplace)
  - 3 Microsoft Azure Certifications
  - 40-50 Delta Tables Designed
- **Education block:**
  - B.Tech Computer Science | Maharshi Dayanand University, Rohtak | 2016–2020
  - Senior Secondary (XII) | CBSE, Delhi | 2015–2016

### 5.4 Experience / Career Timeline
Interactive vertical timeline, most-recent-first.

**Job 1 — Eptura India Private Limited**
- Role: Senior Data Engineer
- Duration: Apr 2024 – Present
- Location: Gurgaon, India
- Highlights:
  - Led migration of legacy ETL processes to cloud-based ELT architecture on Microsoft Fabric
  - Designed data platform for Azure Event Hubs with Unified Data Model (UDM) as single source of truth
  - Built 40–50 Delta tables in Microsoft Fabric Lakehouse for scalable analytics
  - Created Insights Data Model (IDM) as centralized analytical layer for platform-level analytics
  - Built C-suite utility enabling leadership to analyze space utilization and cost vs usage
  - Managed CI/CD and deployments using Azure DevOps

**Job 2 — Accenture Solutions Private Limited**
- Role: Package App Development Analyst
- Duration: Feb 2024 – Mar 2024
- Location: Noida, India
- Highlights:
  - Short engagement supporting data platform development
  - Application analysis and development within enterprise environment

**Job 3 — Tata Consultancy Services**
- Role: Systems Engineer
- Duration: Mar 2021 – Feb 2024
- Location: Bangalore, India
- Highlights:
  - Designed and developed enterprise-scale ETL pipelines with robust data validation and error handling
  - Built Azure Data and Reporting Platform for Insurance domain
  - Developed Python scripts to ingest API data into Azure Databricks
  - Performed EDA on historical data; built fact tables and Power BI analytics solutions
  - Built, tested, and deployed CI/CD pipelines on Azure DevOps
  - Received appreciation from Client for DBaaS Migration and Innovation

### 5.5 Tech Stack / Skills
Categorized display with icon badges. Categories:

| Category | Technologies |
|---|---|
| **Languages** | Python, SQL, YAML, Shell / Bash |
| **Data Engineering** | PySpark, Spark SQL, Apache Spark, Hadoop, Hive |
| **Cloud & Platform** | Microsoft Azure, Microsoft Fabric, Azure Databricks, Azure Synapse, ADLS |
| **Data Ingestion** | Azure Event Hubs, Kafka, ADF, Azure Data Factory, REST APIs |
| **Storage & Lakehouse** | Delta Lake, Azure Blob Storage, Azure Data Lake Gen2, Snowflake, AWS S3 |
| **Databases** | SQL Server, Databricks SQL Warehouse, Fabric Lakehouse, Cosmos DB, Azure Table Storage |
| **DevOps & CI/CD** | Azure DevOps, Git, GitHub, Azure Repos, IaC, PowerShell |
| **Analytics & BI** | Power BI, Tableau, ThoughtSpot, Palantir Foundry |
| **Monitoring & Observability** | Azure App Insights, Log Analytics Workspace, Open Telemetry |
| **Other** | Postman, DBeaver, VS Code, Jinja Templates, Parquet, Avro, JSON |

### 5.6 What I Do (Services/Domains)
4–6 cards with icons describing Prasoon's core capabilities:

1. **Data Pipeline Engineering** — Design and build scalable batch and real-time ELT/ETL pipelines on Azure
2. **Lakehouse Architecture** — Architect Delta Lakehouses with medallion (Bronze/Silver/Gold) layers using Fabric & Databricks
3. **Real-Time Data Streaming** — Ingest and process streaming data using Azure Event Hubs and Kafka
4. **Analytics & Reporting** — Build data models, data marts, and dashboards using Power BI and ThoughtSpot
5. **DataOps & CI/CD** — Automate pipelines, deployments, and monitoring using Azure DevOps and IaC
6. **Data Platform Consulting** — Translate business requirements into technical data solutions across Finance, Insurance, and Workplace domains

### 5.7 Projects (Extensible)
**Display style:** Horizontal scroll cards (as per template GSAP animation) with expandable detail modal/drawer.

Each project card shows:
- Project number + name
- One-liner description
- Technology badge list
- Domain/Industry tag
- "View Details" CTA → opens modal with full project breakdown

**Architecture:** Projects are stored in a single `src/data/projects.ts` config file. Adding a new project requires only adding a new object to the array — zero component changes needed.

---

#### Project 1: Envision
- **Company:** Eptura India Private Limited
- **Domain:** Workplace Analytics
- **Duration:** Apr 2024 – Present
- **Team Size:** 5
- **Description:** Scalable, real-time analytics platform for workplace intelligence across bookings, assets, visitors, and spaces.
- **Key Contributions:**
  - Architected real-time ingestion pipeline using Azure Event Hubs with enforced schema evolution via Schema Registry
  - Implemented Unified Data Model (UDM) as single source of truth across all workplace products
  - Designed 40–50 Delta tables in Microsoft Fabric Lakehouse with optimized partitioning
  - Built Insights Data Model (IDM) as centralized analytical layer for all platform analytics
  - Created business-specific data marts for KPIs: space utilization, meeting room usage, asset utilization, visitor/occupancy trends
  - Built C-suite cost analysis utility for building cost vs space utilization insights
  - Led CI/CD and deployments via Azure DevOps
- **Technologies:** Microsoft Fabric, Lakehouse, Delta Lake, Spark, Power BI, Fabric Notebooks, Fabric Data Pipelines, Azure Event Hubs, Azure Storage Account, Azure DevOps
- **Languages:** Python, SQL, PySpark, YAML, PowerShell
- **Architecture Diagram:** *(Flow diagram image to be provided by Prasoon — will be embedded in project modal)*
- **Impact:** Infrastructure cost reduction; improved workplace space utilization

---

#### Project 2: DART (Data Analytics and Reporting Tool)
- **Company:** Tata Consultancy Services
- **Domain:** Insurance & Healthcare
- **Team Size:** 4
- **Description:** End-to-end ETL framework for multi-layer data ingestion, validation, and transformation feeding analytics and ML workloads.
- **Key Contributions:**
  - Designed robust ETL framework across landing, raw, and curated layers
  - Built and managed curated Delta Lake ensuring data quality for Palantir Foundry and AAS consumption
  - Automated pipeline orchestration with comprehensive logging/monitoring via Azure services
  - Delivered analytics-ready datasets for data science, ML, and reporting
  - Performed complex transformations: partitioning, salting, schema mapping, joins, cleansing
  - Implemented Power BI analytics solution for business decision-making
- **Technologies:** Databricks, Delta Lake, Azure DevOps, Azure Data Lake, Azure Data Table, Azure Entra ID, Key Vaults, Azure Function App, Azure Insights, Azure SQL DB, Postman
- **Languages:** Python 3, SQL, PySpark, YAML
- **Impact:** Appreciation from Client for DBaaS Migration and Innovation

---

#### Future Projects (Placeholder slots)
Projects 3–6 are reserved for future additions. The `projects.ts` config will have commented-out template objects.

### 5.8 Certifications
Icon/badge display:
- AZ-900: Microsoft Azure Fundamentals
- DP-900: Microsoft Azure Data Fundamentals
- SC-900: Microsoft Security, Compliance, and Identity Fundamentals

### 5.9 Achievements
Timeline or card display:
- Appreciation from Client for DBaaS Migration
- Innovation Appreciation from Client for delivering an innovative data engineering solution
- On the Spot Award from TCS

### 5.10 Contact Section — Recruiter Verification Flow

This is a key differentiating feature. The contact form is **not a standard form** — it is a **verified recruiter intake system**.

#### Flow:

```
Step 1: Recruiter fills basic info
        ├── Full Name (required)
        ├── Company Name (required)
        ├── Official Email (required — must be non-personal domain)
        └── Role / Designation (required)

Step 2: OTP Verification
        ├── System sends 6-digit OTP to recruiter's email via EmailJS
        ├── OTP expires in 10 minutes
        ├── Recruiter enters OTP on-screen
        └── On success → Step 3 unlocked

Step 3: Job Description Form (unlocked after OTP)
        ├── Job Title (required)
        ├── Company / Client Name (required)
        ├── Job Location (remote/hybrid/onsite + city)
        ├── CTC / Budget Range (optional)
        ├── Key Skills Required (text area)
        ├── Job Description (full text or paste, required)
        ├── Notice Period / Joining Timeline (required)
        └── Any specific message to Prasoon (optional)

Step 4: Submission
        ├── Sends structured email to gargprasoon98@gmail.com with all details
        ├── Subject: [New Recruiter Inquiry] {Job Title} @ {Company} — Verified
        ├── Shows success screen: "Thank you! Prasoon will review your JD and reach out with a tailored ATS resume."
        └── Sends confirmation email to recruiter
```

#### Technical Implementation:
- **Email Service:** EmailJS (free tier, no backend required)
- **OTP generation:** Client-side crypto random 6-digit number
- **OTP delivery:** EmailJS template sends OTP to recruiter's email
- **Spam protection:**
  - Personal email domains blocked (gmail, yahoo, hotmail, outlook, etc.)
  - Rate limiting: 3 attempts per session
  - OTP expires after 10 minutes
- **State machine:** React `useState` managing steps: `FORM → OTP_SENT → OTP_VERIFIED → JD_FORM → SUCCESS`

---

## 6. Design System

### 6.1 Visual Identity
| Element | Spec |
|---|---|
| **Primary Color** | Azure Blue `#0078D4` (Microsoft Azure brand) |
| **Accent Color** | Electric Cyan `#00B4D8` |
| **Background** | Deep Dark `#0A0A0F` |
| **Surface** | `#111118` / `#1A1A24` |
| **Text Primary** | `#F0F0F5` |
| **Text Secondary** | `#8888AA` |
| **Success** | `#22C55E` |
| **Error** | `#EF4444` |
| **Font (Headings)** | Space Grotesk or Inter |
| **Font (Body)** | Inter |
| **Font (Code/Tech)** | JetBrains Mono |

### 6.2 Animations
- GSAP ScrollTrigger for section reveals and horizontal project scroll
- Framer Motion for modal open/close and step transitions in contact form
- Subtle particle/data-flow animation on hero background (Three.js or CSS canvas)
- Hover states on project cards: scale + border glow
- Tech badge hover: tooltip with brief description

### 6.3 Responsive Breakpoints
| Breakpoint | Width |
|---|---|
| Mobile | < 768px |
| Tablet | 768px – 1024px |
| Desktop | > 1024px |
| Wide | > 1440px |

---

## 7. Technical Architecture

### 7.1 Tech Stack
| Layer | Technology | Reason |
|---|---|---|
| Framework | React 18 + TypeScript | Type safety, component reuse |
| Build Tool | Vite | Fast dev + build |
| Styling | Tailwind CSS + custom CSS | Rapid utility styling + custom animations |
| Animation | GSAP + ScrollTrigger | Scroll-based animations (template-consistent) |
| 3D/Visual | Three.js (optional) | Hero background effect |
| Email | EmailJS | No backend; free OTP delivery |
| Icons | React Icons + Devicons | Tech stack icons |
| Router | None (SPA, anchor scroll) | Simplicity |
| State | React useState / useReducer | Local form state machine |
| Deployment | Vercel / Netlify (free tier) | Fast CDN, custom domain support |

### 7.2 Folder Structure
```
prasoon-portfolio/
├── public/
│   ├── favicon.ico
│   └── og-image.png              # Social share preview
├── src/
│   ├── assets/
│   │   ├── images/               # Project screenshots, tech logos
│   │   └── icons/                # Custom SVGs
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── TechStack.tsx
│   │   ├── WhatIDo.tsx
│   │   ├── Projects/
│   │   │   ├── Projects.tsx      # Horizontal scroll container
│   │   │   ├── ProjectCard.tsx   # Individual card
│   │   │   └── ProjectModal.tsx  # Detail drawer/modal
│   │   ├── Certifications.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact/
│   │   │   ├── Contact.tsx       # Section wrapper
│   │   │   ├── RecruiterForm.tsx # Step 1: basic info
│   │   │   ├── OTPVerification.tsx # Step 2: OTP entry
│   │   │   └── JDForm.tsx        # Step 3: job description
│   │   ├── Footer.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       └── Modal.tsx
│   ├── data/
│   │   ├── projects.ts           # All project data (extensible array)
│   │   ├── experience.ts         # Work history data
│   │   ├── skills.ts             # Tech stack categories
│   │   └── certifications.ts    # Certs and achievements
│   ├── hooks/
│   │   └── useOTP.ts             # OTP generation & validation logic
│   ├── lib/
│   │   └── emailjs.ts            # EmailJS config and send helpers
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example                  # EmailJS keys template
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.ts
```

---

## 8. Data Models

### 8.1 Project (src/data/projects.ts)
```typescript
interface Project {
  id: number;
  slug: string;
  title: string;
  company: string;
  domain: string;
  duration: string;
  teamSize: number;
  shortDescription: string;
  fullDescription: string;
  contributions: string[];
  technologies: string[];
  languages: string[];
  impact: string;
  architectureDiagram?: string;   // image path or URL
  thumbnailImage?: string;        // card image
  tags: string[];
  featured: boolean;
}
```

### 8.2 Experience (src/data/experience.ts)
```typescript
interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string | 'Present';
  location: string;
  description: string;
  highlights: string[];
  logo?: string;
}
```

### 8.3 OTP State Machine
```typescript
type ContactStep = 
  | 'RECRUITER_FORM'     // Step 1: Basic info
  | 'OTP_SENDING'        // Sending OTP email
  | 'OTP_SENT'           // Waiting for OTP entry
  | 'OTP_VERIFYING'      // Verifying entered OTP
  | 'JD_FORM'            // Step 3: Job description
  | 'SUBMITTING'         // Sending final email
  | 'SUCCESS'            // Done
  | 'ERROR';             // Error state
```

---

## 9. EmailJS Configuration

### Templates Required:
1. **OTP Template** (`template_otp`)
   - To: `{{recruiter_email}}`
   - Subject: `Your verification code for contacting Prasoon Garg`
   - Body: OTP code + 10-minute expiry notice

2. **Recruiter Submission Template** (`template_recruiter_submission`)
   - To: `gargprasoon98@gmail.com`
   - Subject: `[New Recruiter Inquiry] {{job_title}} @ {{company}} — Verified ✓`
   - Body: Full structured breakdown of recruiter info + JD

3. **Recruiter Confirmation Template** (`template_recruiter_confirm`)
   - To: `{{recruiter_email}}`
   - Subject: `Thanks for reaching out — Prasoon Garg will be in touch`
   - Body: Acknowledgement + expected response time

### Environment Variables (.env):
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_OTP_TEMPLATE_ID=template_otp
VITE_EMAILJS_SUBMISSION_TEMPLATE_ID=template_recruiter_submission
VITE_EMAILJS_CONFIRM_TEMPLATE_ID=template_recruiter_confirm
```

---

## 10. SEO & Meta

| Tag | Value |
|---|---|
| `<title>` | Prasoon Garg — Senior Data Engineer |
| `og:title` | Prasoon Garg — Senior Data Engineer |
| `og:description` | 5 years of Azure, Fabric & Databricks expertise. Building scalable data pipelines. |
| `og:image` | /og-image.png (branded card) |
| `twitter:card` | summary_large_image |
| `canonical` | https://prasoon.dev (or custom domain) |

---

## 11. Deployment

| Platform | URL | Notes |
|---|---|---|
| **Vercel** (recommended) | Auto-deploys on git push | Free custom domain SSL |
| **Netlify** | Alternative | Same free tier features |
| **Custom Domain** | prasoon.dev / prasoon-garg.dev / prasoon-garg.in | Purchase separately |

---

## 12. Future Roadmap (Post-MVP)

| Phase | Feature |
|---|---|
| v1.1 | Add profile photo when available |
| v1.1 | Eptura project architecture diagram (flow diagram from Prasoon) |
| v1.2 | Blog/Articles section (Medium RSS embed or custom) |
| v1.2 | Dark/Light mode toggle |
| v1.3 | Project 3 addition (next project Prasoon builds) |
| v2.0 | Admin panel to add projects via UI (no code edit) |
| v2.0 | ATS resume auto-send using AI to tailor resume to JD |
| v2.1 | Analytics dashboard (who visited, recruiter inquiry stats) |

---

## 13. Open Questions / Pending from Prasoon

| # | Question | Priority |
|---|---|---|
| 1 | Profile photo to use on hero/about section | High |
| 2 | Architecture flow diagram for Envision project | High |
| 3 | GitHub profile URL (for contact section) | Medium |
| 4 | Any other social links (Twitter, Kaggle, etc.) | Low |
| 5 | Custom domain preference (prasoon.dev, prasoon-garg.in, etc.) | Medium |
| 6 | Color preference: Azure Blue theme or prefer different palette? | Medium |
| 7 | Accenture role: any specific responsibilities to highlight? | Low |

---

## 14. Acceptance Criteria (MVP Definition of Done)

- [ ] All 9 sections rendered and scrollable
- [ ] Projects section shows Envision and DART with full detail modals
- [ ] Projects data-driven from `projects.ts` — adding a new project requires only a new array entry
- [ ] Recruiter contact form completes full OTP → JD → email flow
- [ ] Emails delivered to `gargprasoon98@gmail.com` on recruiter submission
- [ ] Personal email domains blocked (gmail, yahoo, etc.)
- [ ] Responsive on mobile (375px), tablet (768px), desktop (1440px)
- [ ] Lighthouse score: Performance ≥ 85, Accessibility ≥ 90
- [ ] Deployed to Vercel with working URL

---

*PRD v1.0 — Ready for implementation upon Prasoon's review and answers to open questions.*
