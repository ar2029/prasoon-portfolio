export interface SkillCategory {
  id: string
  label: string
  icon: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '{ }',
    skills: ['Python', 'SQL', 'PySpark', 'YAML', 'Shell / Bash', 'PowerShell'],
  },
  {
    id: 'data-engineering',
    label: 'Data Engineering',
    icon: '⚙',
    skills: ['Apache Spark', 'Spark SQL', 'Hadoop', 'Hive', 'Delta Lake', 'Parquet', 'Avro'],
  },
  {
    id: 'cloud-platform',
    label: 'Cloud & Platform',
    icon: '☁',
    skills: [
      'Microsoft Azure',
      'Microsoft Fabric',
      'Azure Databricks',
      'Azure Synapse Analytics',
      'Azure Data Lake Gen2',
    ],
  },
  {
    id: 'data-ingestion',
    label: 'Data Ingestion',
    icon: '⇄',
    skills: [
      'Azure Event Hubs',
      'Apache Kafka',
      'Azure Data Factory',
      'REST APIs',
      'Schema Registry',
    ],
  },
  {
    id: 'storage',
    label: 'Storage & Lakehouse',
    icon: '🗄',
    skills: [
      'Azure Blob Storage',
      'Azure Data Lake Analytics',
      'Delta Lake',
      'Snowflake',
      'AWS S3',
      'Fabric Lakehouse',
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: '🛢',
    skills: [
      'SQL Server',
      'Databricks SQL Warehouse',
      'Cosmos DB',
      'Azure Table Storage',
      'Azure SQL DB',
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & CI/CD',
    icon: '🔄',
    skills: ['Azure DevOps', 'Git', 'GitHub', 'Azure Repos', 'IaC', 'PowerShell'],
  },
  {
    id: 'analytics',
    label: 'Analytics & BI',
    icon: '📊',
    skills: ['Power BI', 'Tableau', 'ThoughtSpot', 'Palantir Foundry'],
  },
  {
    id: 'monitoring',
    label: 'Monitoring & Observability',
    icon: '📡',
    skills: ['Azure App Insights', 'Log Analytics Workspace', 'OpenTelemetry'],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: '🔧',
    skills: ['Postman', 'DBeaver', 'VS Code', 'Jinja Templates', 'Azure Key Vault'],
  },
]

export default skillCategories
