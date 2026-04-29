export interface Experience {
  id: number
  company: string
  role: string
  duration: string
  startDate: string
  endDate: string | 'Present'
  location: string
  description: string
  highlights: string[]
  logo?: string
  current: boolean
}

const experience: Experience[] = [
  {
    id: 1,
    company: 'Eptura India Private Limited',
    role: 'Senior Data Engineer',
    duration: 'Apr 2024 – Present',
    startDate: 'Apr 2024',
    endDate: 'Present',
    location: 'Gurgaon, India',
    description:
      'Leading data engineering initiatives for the Envision workplace analytics platform, architecting real-time data pipelines and lakehouse solutions on Microsoft Fabric.',
    highlights: [
      'Led migration of legacy ETL processes to cloud-based ELT architecture on Microsoft Fabric',
      'Designed data platform for Azure Event Hubs with Unified Data Model (UDM) as single source of truth',
      'Built 40–50 Delta tables in Microsoft Fabric Lakehouse with optimized partitioning for scalable analytics',
      'Created Insights Data Model (IDM) as centralized analytical layer for platform-level analytics',
      'Built C-suite utility enabling leadership to analyze space utilization and cost vs usage',
      'Managed CI/CD pipelines and deployments using Azure DevOps',
    ],
    current: true,
  },
  {
    id: 2,
    company: 'Accenture Solutions Private Limited',
    role: 'Package App Development Analyst',
    duration: 'Feb 2024 – Mar 2024',
    startDate: 'Feb 2024',
    endDate: 'Mar 2024',
    location: 'Noida, India',
    description:
      'Short engagement supporting data platform development within an enterprise environment.',
    highlights: [
      'Supported data platform development within enterprise environment',
      'Application analysis and development for client data systems',
    ],
    current: false,
  },
  {
    id: 3,
    company: 'Tata Consultancy Services',
    role: 'Systems Engineer',
    duration: 'Mar 2021 – Feb 2024',
    startDate: 'Mar 2021',
    endDate: 'Feb 2024',
    location: 'Bangalore, India',
    description:
      'Designed and delivered enterprise ETL frameworks and analytics platforms for Insurance and Healthcare clients, earning client appreciation for innovation.',
    highlights: [
      'Designed and developed enterprise-scale ETL pipelines with robust data validation and error handling',
      'Built Azure Data and Reporting Platform (DART) for Insurance domain',
      'Developed Python scripts to ingest API data into Azure Databricks',
      'Performed EDA on historical data; built fact tables and Power BI analytics solutions',
      'Built, tested, and deployed CI/CD pipelines on Azure DevOps',
      'Received appreciation from Client for DBaaS Migration and Innovation',
    ],
    current: false,
  },
]

export default experience
