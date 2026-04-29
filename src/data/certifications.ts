export interface Certification {
  id: number
  code: string
  name: string
  issuer: string
  description: string
  color: string
}

export interface Achievement {
  id: number
  title: string
  company: string
  description: string
  icon: string
}

export const certifications: Certification[] = [
  {
    id: 1,
    code: 'AZ-900',
    name: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    description:
      'Validates foundational knowledge of cloud services and how those services are provided with Azure.',
    color: '#0078D4',
  },
  {
    id: 2,
    code: 'DP-900',
    name: 'Microsoft Azure Data Fundamentals',
    issuer: 'Microsoft',
    description:
      'Demonstrates foundational knowledge of core data concepts and Azure data services.',
    color: '#0078D4',
  },
  {
    id: 3,
    code: 'SC-900',
    name: 'Microsoft Security, Compliance & Identity Fundamentals',
    issuer: 'Microsoft',
    description:
      'Validates knowledge of security, compliance, and identity across cloud and related Microsoft services.',
    color: '#0078D4',
  },
]

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'DBaaS Migration Appreciation',
    company: 'Client via TCS',
    description:
      'Received client appreciation from Client for successfully delivering a complex Database-as-a-Service migration with zero data loss.',
    icon: '🏆',
  },
  {
    id: 2,
    title: 'Innovation Appreciation Award',
    company: 'Client via TCS',
    description:
      'Recognized by Client for delivering an innovative data engineering solution that improved pipeline efficiency and reduced operational overhead.',
    icon: '💡',
  },
  {
    id: 3,
    title: 'On The Spot Award',
    company: 'Tata Consultancy Services',
    description:
      'Awarded by TCS management for exceptional performance and quick delivery of a critical data engineering deliverable under tight timelines.',
    icon: '⚡',
  },
]
