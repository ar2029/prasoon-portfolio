export interface Project {
  id: number
  slug: string
  title: string
  company: string
  domain: string
  duration: string
  teamSize: number
  shortDescription: string
  fullDescription: string
  contributions: string[]
  technologies: string[]
  languages: string[]
  impact: string
  architectureDiagram?: string
  thumbnailImage?: string
  tags: string[]
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    slug: 'envision',
    title: 'Envision',
    company: 'Eptura India Private Limited',
    domain: 'Workplace Analytics',
    duration: 'Apr 2024 - Present',
    teamSize: 3,
    shortDescription:
      'Scalable, real-time analytics platform for workplace intelligence across bookings, assets, visitors, and spaces.',
    fullDescription:
      'Envision is an enterprise-grade workplace analytics platform built on Microsoft Fabric and Azure Event Hubs. It provides real-time insights into how buildings, rooms, desks, and assets are being used — helping C-suite executives make data-driven decisions about real estate costs and space optimization.',
    contributions: [
      'Architected real-time ingestion pipeline using Azure Event Hubs with enforced schema evolution via Schema Registry',
      'Implemented Unified Data Model (UDM) as single source of truth across all workplace products',
      'Designed 40-50 Delta tables in Microsoft Fabric Lakehouse with optimized partitioning for high-volume analytics',
      'Built Insights Data Model (IDM) as centralized analytical layer for all platform analytics',
      'Created business-specific data marts for KPIs: space utilization, meeting room usage, asset utilization, visitor/occupancy trends',
      'Built C-suite cost analysis utility for building cost vs space utilization insights',
      'Led CI/CD pipeline management and deployments via Azure DevOps',
    ],
    technologies: [
      'Microsoft Fabric',
      'Lakehouse',
      'Delta Lake',
      'Apache Spark',
      'Power BI',
      'Fabric Notebooks',
      'Fabric Data Pipelines',
      'Azure Event Hubs',
      'Azure Storage Account',
      'Azure DevOps',
      'Schema Registry',
    ],
    languages: ['Python', 'SQL', 'PySpark', 'YAML', 'PowerShell'],
    impact:
      'Reduced infrastructure costs through optimized space utilization insights. Enabled data-driven C-suite decisions on real estate and space investment.',
    architectureDiagram: 'images/envision-architecture.svg',
    thumbnailImage: undefined,
    tags: ['Streaming', 'Lakehouse', 'Analytics', 'Microsoft Fabric', 'Real-Time'],
    featured: true,
  },
  {
    id: 2,
    slug: 'dart',
    title: 'DART',
    company: 'Tata Consultancy Services',
    domain: 'Insurance & Healthcare',
    duration: 'Mar 2021 - Feb 2024',
    teamSize: 4,
    shortDescription:
      'End-to-end ETL framework for multi-layer data ingestion, validation, and transformation feeding analytics and ML workloads.',
    fullDescription:
      'DART (Data Analytics and Reporting Tool) is a robust, enterprise ETL framework built on Azure Databricks and Delta Lake. It handles multi-layer ingestion (landing → raw → curated) with comprehensive data validation, error handling, and automated pipeline orchestration — delivering analytics-ready datasets to data science and ML teams.',
    contributions: [
      'Designed robust ETL framework across landing, raw, and curated data layers',
      'Built and managed curated Delta Lake ensuring data quality for Palantir Foundry and AAS consumption',
      'Automated pipeline orchestration with comprehensive logging and monitoring via Azure services',
      'Delivered analytics-ready datasets for data science, ML, and reporting workloads',
      'Performed complex transformations: partitioning, salting, schema mapping, joins, and data cleansing',
      'Implemented Power BI analytics solution for business decision-making across Insurance domain',
    ],
    technologies: [
      'Azure Databricks',
      'Delta Lake',
      'Azure DevOps',
      'Azure Data Lake Gen2',
      'Azure Data Table',
      'Azure Entra ID',
      'Azure Key Vault',
      'Azure Function App',
      'Azure App Insights',
      'Azure SQL DB',
      'Palantir Foundry',
      'Postman',
    ],
    languages: ['Python 3', 'SQL', 'PySpark', 'YAML'],
    impact:
      'Received appreciation award from Client for DBaaS Migration and Innovation. Enabled reliable ML and analytics pipelines across Insurance domain.',
    architectureDiagram: undefined,
    thumbnailImage: undefined,
    tags: ['ETL', 'Databricks', 'Delta Lake', 'Insurance', 'ML Pipeline'],
    featured: true,
  },
]

export default projects
