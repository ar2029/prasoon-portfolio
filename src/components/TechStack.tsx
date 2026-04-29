import { useState } from 'react'
import type { IconType } from 'react-icons'
import {
  SiApachespark, SiApachekafka, SiApachehadoop, SiApachehive,
  SiDatabricks, SiPostman, SiOpentelemetry, SiApacheparquet, SiPalantir,
} from 'react-icons/si'
import {
  FaCode, FaKey, FaFileCode, FaLaptopCode,
} from 'react-icons/fa'
import {
  TbBrandAzure, TbBrandAws, TbBrandSnowflake, TbBrandVscode,
  TbBrandTerraform, TbBrandGit, TbBrandGithub, TbBrandPython,
  TbSql, TbDatabase, TbApi, TbActivity,
  TbCloudFilled, TbTable, TbGitBranch, TbAtom2, TbChartDots3,
  TbChartLine,
} from 'react-icons/tb'
import skillCategories from '../data/skills'

interface SkillMeta {
  icon?: IconType
  img?: string   // path to local SVG in /images/skill-icons/
  color: string
}

const SKILL_ICONS: Record<string, SkillMeta> = {
  // Languages
  'Python':        { icon: TbBrandPython,  color: '#3776AB' },
  'SQL':           { icon: TbSql,          color: '#336791' },
  'PySpark':       { icon: SiApachespark,  color: '#E25A1C' },
  'YAML':          { icon: FaFileCode,     color: '#CB171E' },
  'Shell / Bash':  { icon: FaCode,         color: '#4EAA25' },
  'PowerShell':    { icon: FaLaptopCode,   color: '#2671BE' },
  // Data Engineering
  'Apache Spark':  { icon: SiApachespark,   color: '#E25A1C' },
  'Spark SQL':     { icon: TbSql,           color: '#E25A1C' },
  'Hadoop':        { icon: SiApachehadoop,  color: '#F0C430' },
  'Hive':          { icon: SiApachehive,    color: '#FDCC3D' },
  'Delta Lake':    { icon: SiDatabricks,    color: '#FF3621' },
  'Parquet':       { icon: SiApacheparquet, color: '#50ABF1' },
  'Avro':          { img: '/images/skill-icons/avro.svg', color: '#0B6396' },
  // Cloud & Platform
  'Microsoft Azure':         { icon: TbBrandAzure,   color: '#0078D4' },
  'Microsoft Fabric':        { img: '/images/skill-icons/fabric.svg', color: '#7B2FBE' },
  'Azure Databricks':        { icon: SiDatabricks,   color: '#FF3621' },
  'Azure Synapse Analytics': { img: '/images/skill-icons/synapse.svg',    color: '#0078D4' },
  'Azure Data Lake Gen2':    { img: '/images/skill-icons/adls-gen2.svg',  color: '#0078D4' },
  // Data Ingestion
  'Azure Event Hubs':   { img: '/images/skill-icons/event-hubs.svg',      color: '#0078D4' },
  'Apache Kafka':       { icon: SiApachekafka,                            color: '#60B0FF' },
  'Azure Data Factory': { img: '/images/skill-icons/data-factory.svg',    color: '#0078D4' },
  'REST APIs':          { icon: TbApi,                color: '#6BA539' },
  'Schema Registry':    { icon: TbDatabase,           color: '#CC0000' },
  // Storage & Lakehouse
  'Azure Blob Storage': { img: '/images/skill-icons/azure-blob-block.svg',        color: '#0078D4' },
  'Azure Data Lake Analytics':    { img: '/images/skill-icons/azure-data-lake-analytics.svg',  color: '#0078D4' },
  'Snowflake':          { icon: TbBrandSnowflake,     color: '#29B5E8' },
  'AWS S3':             { icon: TbBrandAws,           color: '#FF9900' },
  'Fabric Lakehouse':   { img: '/images/skill-icons/lakehouse.svg',        color: '#7B2FBE' },
  // Databases
  'SQL Server':               { icon: TbDatabase,   color: '#CC2927' },
  'Databricks SQL Warehouse': { icon: SiDatabricks , color: '#FF3621' },
  'Cosmos DB':                { img: '/images/skill-icons/azure-cosmos-db.svg',       color: '#0078D4' },
  'Azure Table Storage':      { icon: TbTable,       color: '#0078D4' },
  'Azure SQL DB':             { img: '/images/skill-icons/azure-sql-db.svg',    color: '#0078D4' },
  // DevOps & CI/CD
  'Azure DevOps': { icon: TbGitBranch,      color: '#0078D4' },
  'Git':          { icon: TbBrandGit,       color: '#F05032' },
  'GitHub':       { icon: TbBrandGithub,    color: '#E6EDF3' },
  'Azure Repos':  { icon: TbBrandAzure,     color: '#0078D4' },
  'IaC':          { icon: TbBrandTerraform, color: '#7B42BC' },
  // Analytics & BI
  'Power BI':         { img: '/images/skill-icons/powerbi.svg',  color: '#F2C811' },
  'Tableau':          { img: '/images/skill-icons/tableau.svg',  color: '#E97627' },
  'ThoughtSpot':      { img: '/images/skill-icons/thoughtspot.svg',  color: '#FFFFFF' },
  'Palantir Foundry': { icon: SiPalantir,   color: '#A0A0A0' },
  // Monitoring & Observability
  'Azure App Insights':      { img: '/images/skill-icons/azure-app-insights.svg',     color: '#0078D4' },
  'Log Analytics Workspace': { img: '/images/skill-icons/azure-log-analytics-workspaces.svg',      color: '#0078D4' },
  'OpenTelemetry':           { icon: SiOpentelemetry, color: '#F5A800' },
  // Tools
  'Postman':         { icon: SiPostman,        color: '#FF6C37' },
  'DBeaver':         { img: '/images/skill-icons/dbeaver.svg',     color: '#382923' },
  'VS Code':         { icon: TbBrandVscode,                       color: '#007ACC' },
  'Jinja Templates': { img: '/images/skill-icons/jinja.svg',      color: '#7E0C1B' },
  'Azure Key Vault': { img: '/images/skill-icons/azure-key-vaults.svg',            color: '#0078D4' },
}

function SkillTile({ skill }: { skill: string }) {
  const meta = SKILL_ICONS[skill]
  const Icon = meta?.icon
  return (
    <div
      className="flex flex-col items-center gap-2 p-3 rounded-xl bg-bg-card border border-white/5
                 hover:border-white/20 hover:scale-105 transition-all duration-200 cursor-default group"
    >
      <div className="h-8 flex items-center justify-center">
        {meta?.img ? (
          <img
            src={meta.img}
            alt={skill}
            className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-200"
          />
        ) : Icon ? (
          <Icon
            size={26}
            style={{ color: meta.color }}
            className="group-hover:scale-110 transition-transform duration-200"
          />
        ) : (
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-bold tracking-wide"
            style={{
              backgroundColor: `${meta?.color ?? '#2563EB'}22`,
              color: meta?.color ?? '#60A5FA',
              border: `1px solid ${meta?.color ?? '#2563EB'}33`,
            }}
          >
            {skill.replace(/[^A-Za-z]/g, '').slice(0, 3).toUpperCase()}
          </div>
        )}
      </div>
      <span className="text-[10px] text-gray-500 text-center leading-tight group-hover:text-gray-300 transition-colors duration-200 line-clamp-2 w-full">
        {skill}
      </span>
    </div>
  )
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)
  const displayCategories = activeCategory
    ? skillCategories.filter((c) => c.id === activeCategory)
    : skillCategories

  return (
    <section id="skills" className="section-padding">
      <div className="container-max px-6">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-brand-cyan font-mono text-sm uppercase tracking-widest mb-2">
            // tech stack
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Skills & Technologies
          </h2>
          <p className="text-gray-500 mt-2 text-sm font-mono">
            {totalSkills}+ tools & technologies across {skillCategories.length} engineering domains
          </p>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
              activeCategory === null
                ? 'bg-brand-blue border-brand-blue text-white shadow-lg shadow-brand-blue/20'
                : 'border-white/10 text-gray-400 hover:border-brand-blue/40 hover:text-gray-300'
            }`}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-brand-blue border-brand-blue text-white shadow-lg shadow-brand-blue/20'
                  : 'border-white/10 text-gray-400 hover:border-brand-blue/40 hover:text-gray-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Logo wall — grouped by category */}
        <div className="space-y-10">
          {displayCategories.map((cat) => (
            <div key={cat.id}>
              {/* Category subheading */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-brand-cyan font-mono text-sm">{cat.icon}</span>
                <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
                  {cat.label}
                </h3>
                <div className="flex-1 h-px bg-white/5" />
                <span className="text-gray-600 text-xs font-mono">{cat.skills.length}</span>
              </div>

              {/* Skill tiles */}
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2.5">
                {cat.skills.map((skill) => (
                  <SkillTile key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
