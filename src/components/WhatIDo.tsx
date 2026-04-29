import { MdHub, MdStorage, MdWaves, MdBarChart, MdLoop, MdBusinessCenter } from 'react-icons/md'

const services = [
  {
    icon: MdHub,
    title: 'Data Pipeline Engineering',
    description:
      'Design and build scalable batch and real-time ELT/ETL pipelines on Azure using ADF, Event Hubs, and Microsoft Fabric.',
    color: 'blue',
  },
  {
    icon: MdStorage,
    title: 'Lakehouse Architecture',
    description:
      'Architect Delta Lakehouses with medallion (Bronze/Silver/Gold) layers using Microsoft Fabric and Databricks for high-performance analytics.',
    color: 'cyan',
  },
  {
    icon: MdWaves,
    title: 'Real-Time Data Streaming',
    description:
      'Ingest and process high-throughput streaming data using Azure Event Hubs, Kafka, and Schema Registry with enforced schema evolution.',
    color: 'purple',
  },
  {
    icon: MdBarChart,
    title: 'Analytics & Reporting',
    description:
      'Build data models, data marts, and interactive dashboards using Power BI, ThoughtSpot, and Palantir Foundry to drive business decisions.',
    color: 'blue',
  },
  {
    icon: MdLoop,
    title: 'DataOps & CI/CD',
    description:
      'Automate pipeline deployments and infrastructure provisioning using Azure DevOps, IaC, and comprehensive monitoring with Azure App Insights.',
    color: 'cyan',
  },
  {
    icon: MdBusinessCenter,
    title: 'Data Platform Consulting',
    description:
      'Translate business requirements into technical data solutions across Finance, Insurance, and Workplace Analytics domains.',
    color: 'purple',
  },
]

const colorMap = {
  blue: {
    icon: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
    border: 'group-hover:border-brand-blue/30',
    glow: 'group-hover:shadow-brand-blue/10',
  },
  cyan: {
    icon: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10',
    border: 'group-hover:border-brand-cyan/30',
    glow: 'group-hover:shadow-brand-cyan/10',
  },
  purple: {
    icon: 'text-brand-purple',
    bg: 'bg-brand-purple/10',
    border: 'group-hover:border-brand-purple/30',
    glow: 'group-hover:shadow-brand-purple/10',
  },
}

export default function WhatIDo() {
  return (
    <section id="services" className="section-padding bg-bg-secondary/30">
      <div className="container-max px-6">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-brand-cyan font-mono text-sm uppercase tracking-widest mb-2">
            // what i do
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Core Capabilities
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const colors = colorMap[service.color as keyof typeof colorMap]
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`group p-6 rounded-2xl bg-bg-card border border-white/5 transition-all duration-300 card-hover ${colors.border} ${colors.glow} hover:shadow-xl`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}>
                  <Icon size={24} className={colors.icon} />
                </div>

                {/* Text */}
                <h3 className="text-white font-heading font-semibold text-base mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
