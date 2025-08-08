import { Business, Article, ServiceArea, Citation } from './types'

export const locations = [
  { city: "Denver", state: "Colorado", zipCode: "80202" },
  { city: "Aurora", state: "Colorado", zipCode: "80012" },
  { city: "Lakewood", state: "Colorado", zipCode: "80226" },
  { city: "Westminster", state: "Colorado", zipCode: "80031" },
  { city: "Phoenix", state: "Arizona", zipCode: "85001" },
  { city: "Scottsdale", state: "Arizona", zipCode: "85251" },
  { city: "Tempe", state: "Arizona", zipCode: "85281" },
  { city: "Mesa", state: "Arizona", zipCode: "85201" },
  { city: "Austin", state: "Texas", zipCode: "73301" },
  { city: "Dallas", state: "Texas", zipCode: "75201" },
  { city: "Houston", state: "Texas", zipCode: "77002" },
  { city: "San Antonio", state: "Texas", zipCode: "78205" }
]

export const businesses: Business[] = [
  {
    id: "denver-plumbing-pros",
    name: "Denver Plumbing Pros",
    slug: "denver-plumbing-pros",
    description: "Professional plumbing services in Denver and surrounding areas. We specialize in emergency repairs, installations, and maintenance for residential and commercial properties.",
    industry: "Plumbing",
    services: [
      "Emergency Plumbing",
      "Drain Cleaning",
      "Water Heater Installation",
      "Pipe Repair",
      "Bathroom Remodeling",
      "Kitchen Plumbing",
      "Sewer Line Repair",
      "Leak Detection"
    ],
    serviceAreas: ["Denver", "Aurora", "Lakewood", "Westminster", "Thornton"],
    contact: {
      phone: "(303) 555-0123",
      email: "info@denverplumbingpros.com",
      website: "https://denverplumbingpros.com"
    },
    address: {
      street: "1234 Main St",
      city: "Denver",
      state: "CO",
      zipCode: "80202"
    },
    headquarters: {
      city: "Denver",
      state: "Colorado"
    },
    rating: 4.8,
    reviewCount: 127,
    yearEstablished: 2015,
    employeeCount: "6-15",
    emergencyService: true,
    certifications: ["Licensed", "Insured", "BBB Accredited"],
    businessHours: {
      monday: { open: "7:00 AM", close: "7:00 PM", closed: false },
      tuesday: { open: "7:00 AM", close: "7:00 PM", closed: false },
      wednesday: { open: "7:00 AM", close: "7:00 PM", closed: false },
      thursday: { open: "7:00 AM", close: "7:00 PM", closed: false },
      friday: { open: "7:00 AM", close: "7:00 PM", closed: false },
      saturday: { open: "8:00 AM", close: "5:00 PM", closed: false },
      sunday: { open: "9:00 AM", close: "3:00 PM", closed: false }
    },
    images: [
      "/placeholder.svg?height=400&width=600&text=Denver+Plumbing+Pros+Storefront",
      "/placeholder.svg?height=300&width=400&text=Plumbing+Work+in+Progress",
      "/placeholder.svg?height=300&width=400&text=Professional+Plumber+at+Work"
    ],
    featured: true,
    tier: "tier2"
  },
  {
    id: "phoenix-hvac-experts",
    name: "Phoenix HVAC Experts",
    slug: "phoenix-hvac-experts",
    description: "Reliable HVAC services in Phoenix and the Valley. We provide installation, repair, and maintenance for all heating and cooling systems.",
    industry: "HVAC",
    services: [
      "AC Installation",
      "Heating Repair",
      "Duct Cleaning",
      "System Maintenance",
      "Emergency HVAC",
      "Energy Audits",
      "Smart Thermostat Installation",
      "Indoor Air Quality"
    ],
    serviceAreas: ["Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler"],
    contact: {
      phone: "(602) 555-0456",
      email: "service@phoenixhvac.com",
      website: "https://phoenixhvacexperts.com"
    },
    address: {
      street: "5678 Desert Rd",
      city: "Phoenix",
      state: "AZ",
      zipCode: "85001"
    },
    headquarters: {
      city: "Phoenix",
      state: "Arizona"
    },
    rating: 4.9,
    reviewCount: 203,
    yearEstablished: 2012,
    employeeCount: "16-50",
    emergencyService: true,
    certifications: ["NATE Certified", "Licensed", "Insured"],
    businessHours: {
      monday: { open: "6:00 AM", close: "8:00 PM", closed: false },
      tuesday: { open: "6:00 AM", close: "8:00 PM", closed: false },
      wednesday: { open: "6:00 AM", close: "8:00 PM", closed: false },
      thursday: { open: "6:00 AM", close: "8:00 PM", closed: false },
      friday: { open: "6:00 AM", close: "8:00 PM", closed: false },
      saturday: { open: "7:00 AM", close: "6:00 PM", closed: false },
      sunday: { open: "8:00 AM", close: "4:00 PM", closed: false }
    },
    images: [
      "/placeholder.svg?height=400&width=600&text=Phoenix+HVAC+Experts+Office",
      "/placeholder.svg?height=300&width=400&text=AC+Installation+Service",
      "/placeholder.svg?height=300&width=400&text=HVAC+Technician+Working"
    ],
    featured: true,
    tier: "tier3"
  },
  {
    id: "austin-electrical-solutions",
    name: "Austin Electrical Solutions",
    slug: "austin-electrical-solutions",
    description: "Professional electrical services in Austin and Central Texas. From simple repairs to complete rewiring, we handle all your electrical needs safely and efficiently.",
    industry: "Electrical",
    services: [
      "Electrical Repairs",
      "Panel Upgrades",
      "Outlet Installation",
      "Lighting Installation",
      "Ceiling Fan Installation",
      "Electrical Inspections",
      "Generator Installation",
      "Smart Home Wiring"
    ],
    serviceAreas: ["Austin", "Round Rock", "Cedar Park", "Pflugerville", "Georgetown"],
    contact: {
      phone: "(512) 555-0789",
      email: "info@austinelectrical.com",
      website: "https://austinelectricalsolutions.com"
    },
    address: {
      street: "9012 Tech Ridge Blvd",
      city: "Austin",
      state: "TX",
      zipCode: "78759"
    },
    headquarters: {
      city: "Austin",
      state: "Texas"
    },
    rating: 4.7,
    reviewCount: 89,
    yearEstablished: 2018,
    employeeCount: "6-15",
    emergencyService: true,
    certifications: ["Master Electrician", "Licensed", "Insured"],
    businessHours: {
      monday: { open: "7:00 AM", close: "6:00 PM", closed: false },
      tuesday: { open: "7:00 AM", close: "6:00 PM", closed: false },
      wednesday: { open: "7:00 AM", close: "6:00 PM", closed: false },
      thursday: { open: "7:00 AM", close: "6:00 PM", closed: false },
      friday: { open: "7:00 AM", close: "6:00 PM", closed: false },
      saturday: { open: "8:00 AM", close: "4:00 PM", closed: false },
      sunday: { open: "", close: "", closed: true }
    },
    images: [
      "/placeholder.svg?height=400&width=600&text=Austin+Electrical+Solutions+Van",
      "/placeholder.svg?height=300&width=400&text=Electrical+Panel+Work",
      "/placeholder.svg?height=300&width=400&text=Licensed+Electrician"
    ],
    featured: false,
    tier: "tier2"
  }
]

export const articles: Article[] = [
  {
    id: "winter-plumbing-tips",
    title: "Essential Winter Plumbing Tips for Colorado Homeowners",
    slug: "winter-plumbing-tips",
    excerpt: "Protect your pipes and plumbing system during harsh Colorado winters with these expert tips from Denver Plumbing Pros.",
    content: "Winter in Colorado can be brutal on your home's plumbing system. Frozen pipes, burst water lines, and heating system failures are common problems that can cost thousands in repairs. Here's how to protect your home...",
    author: "Denver Plumbing Pros",
    authorId: "denver-plumbing-pros",
    publishedAt: "2024-01-15",
    category: "Home Maintenance",
    tags: ["plumbing", "winter", "maintenance", "colorado", "pipes"],
    readTime: "5 min read",
    featured: true,
    image: "/placeholder.svg?height=400&width=600&text=Winter+Plumbing+Tips"
  },
  {
    id: "hvac-maintenance-checklist",
    title: "Spring HVAC Maintenance Checklist for Arizona Homes",
    slug: "hvac-maintenance-checklist",
    excerpt: "Get your air conditioning system ready for the hot Arizona summer with this comprehensive maintenance checklist.",
    content: "Arizona summers are no joke, and your HVAC system needs to be in top condition to keep your home comfortable. Regular maintenance can prevent costly breakdowns and improve energy efficiency...",
    author: "Phoenix HVAC Experts",
    authorId: "phoenix-hvac-experts",
    publishedAt: "2024-01-10",
    category: "HVAC",
    tags: ["hvac", "maintenance", "arizona", "air conditioning", "summer"],
    readTime: "7 min read",
    featured: true,
    image: "/placeholder.svg?height=400&width=600&text=HVAC+Maintenance"
  },
  {
    id: "electrical-safety-home",
    title: "Electrical Safety Tips Every Austin Homeowner Should Know",
    slug: "electrical-safety-home",
    excerpt: "Learn essential electrical safety practices to protect your family and home from electrical hazards.",
    content: "Electrical safety should be a top priority for every homeowner. From overloaded circuits to faulty wiring, electrical hazards can cause fires, injuries, and property damage...",
    author: "Austin Electrical Solutions",
    authorId: "austin-electrical-solutions",
    publishedAt: "2024-01-05",
    category: "Safety",
    tags: ["electrical", "safety", "home", "austin", "wiring"],
    readTime: "6 min read",
    featured: false,
    image: "/placeholder.svg?height=400&width=600&text=Electrical+Safety"
  },
  {
    id: "drain-cleaning-guide",
    title: "DIY Drain Cleaning: When to Try and When to Call a Pro",
    slug: "drain-cleaning-guide",
    excerpt: "Learn which drain clogs you can handle yourself and when it's time to call professional plumbers.",
    content: "Clogged drains are one of the most common plumbing problems homeowners face. While some clogs can be cleared with simple DIY methods, others require professional intervention...",
    author: "Denver Plumbing Pros",
    authorId: "denver-plumbing-pros",
    publishedAt: "2023-12-28",
    category: "DIY Tips",
    tags: ["plumbing", "drains", "diy", "maintenance", "clogs"],
    readTime: "4 min read",
    featured: false,
    image: "/placeholder.svg?height=400&width=600&text=Drain+Cleaning"
  },
  {
    id: "energy-efficient-cooling",
    title: "Energy-Efficient Cooling Solutions for Hot Climates",
    slug: "energy-efficient-cooling",
    excerpt: "Discover ways to keep your home cool while reducing energy costs in hot desert climates.",
    content: "Living in a hot climate like Arizona means high cooling costs during summer months. However, there are many strategies to keep your home comfortable while minimizing energy usage...",
    author: "Phoenix HVAC Experts",
    authorId: "phoenix-hvac-experts",
    publishedAt: "2023-12-20",
    category: "Energy Efficiency",
    tags: ["hvac", "energy efficiency", "cooling", "arizona", "savings"],
    readTime: "8 min read",
    featured: false,
    image: "/placeholder.svg?height=400&width=600&text=Energy+Efficient+Cooling"
  },
  {
    id: "smart-home-electrical",
    title: "Smart Home Electrical Upgrades Worth the Investment",
    slug: "smart-home-electrical",
    excerpt: "Explore electrical upgrades that can make your home smarter, safer, and more energy-efficient.",
    content: "Smart home technology is revolutionizing how we interact with our living spaces. From smart thermostats to automated lighting systems, these electrical upgrades can improve comfort, security, and energy efficiency...",
    author: "Austin Electrical Solutions",
    authorId: "austin-electrical-solutions",
    publishedAt: "2023-12-15",
    category: "Smart Home",
    tags: ["electrical", "smart home", "automation", "technology", "upgrades"],
    readTime: "6 min read",
    featured: false,
    image: "/placeholder.svg?height=400&width=600&text=Smart+Home+Electrical"
  }
]

export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find(business => business.slug === slug)
}

export function getBusinessesByIndustry(industry: string): Business[] {
  if (industry === 'All') return businesses
  return businesses.filter(business => business.industry === industry)
}

export function searchBusinesses(query: string, location?: string): Business[] {
  let filtered = businesses

  if (query) {
    const searchTerm = query.toLowerCase()
    filtered = filtered.filter(business => 
      business.name.toLowerCase().includes(searchTerm) ||
      business.description.toLowerCase().includes(searchTerm) ||
      business.industry.toLowerCase().includes(searchTerm) ||
      business.services.some(service => service.toLowerCase().includes(searchTerm))
    )
  }

  if (location) {
    const locationTerm = location.toLowerCase()
    filtered = filtered.filter(business => 
      business.serviceAreas.some(area => area.toLowerCase().includes(locationTerm)) ||
      business.headquarters.city.toLowerCase().includes(locationTerm) ||
      business.headquarters.state.toLowerCase().includes(locationTerm) ||
      business.address.city.toLowerCase().includes(locationTerm) ||
      business.address.state.toLowerCase().includes(locationTerm) ||
      business.address.zipCode.includes(locationTerm)
    )
  }

  return filtered
}

export function getFeaturedBusinesses(): Business[] {
  return businesses.filter(business => business.featured)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug)
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(article => article.featured)
}

export function getRecentArticles(limit: number = 6): Article[] {
  return articles
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === 'All') return articles
  return articles.filter(article => article.category === category)
}

export function searchArticles(query: string): Article[] {
  if (!query) return articles
  
  const searchTerm = query.toLowerCase()
  return articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm) ||
    article.excerpt.toLowerCase().includes(searchTerm) ||
    article.content.toLowerCase().includes(searchTerm) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}

// New required exports
export function getServiceAreasByBusiness(businessId: string): ServiceArea[] {
  const business = businesses.find(b => b.id === businessId)
  if (!business) return []
  
  return business.serviceAreas.map(area => ({
    id: `${businessId}-${area.toLowerCase().replace(/\s+/g, '-')}`,
    businessId,
    city: area,
    state: business.headquarters.state,
    services: business.services
  }))
}

export function getArticlesByBusiness(businessId: string): Article[] {
  return articles.filter(article => article.authorId === businessId)
}

export function getArticlesByType(type: string): Article[] {
  return articles.filter(article => article.category === type)
}

export function getBusinessCitations(businessId: string): Citation[] {
  const business = businesses.find(b => b.id === businessId)
  if (!business) return []
  
  return business.serviceAreas.map(area => ({
    id: `${businessId}-${area.toLowerCase().replace(/\s+/g, '-')}-citation`,
    businessId,
    businessName: business.name,
    address: business.address,
    phone: business.contact.phone,
    website: business.contact.website,
    serviceArea: area,
    services: business.services,
    description: `${business.name} provides ${business.services.join(', ')} in ${area}, ${business.headquarters.state}.`
  }))
}

// Additional missing exports for build compatibility
export function getFeaturedArticle(): Article | undefined {
  return articles.find(article => article.featured)
}

export const allArticles = articles

export const categories = [...new Set(articles.map(article => article.category))]

export const contentTypes = categories

export const clients = businesses.map(business => ({
  ...business,
  location: `${business.headquarters.city}, ${business.headquarters.state}`,
  specialties: business.services,
  articlesCount: articles.filter(article => article.authorId === business.id).length,
  monthlyTraffic: "15K+", // Mock data
  rankingKeywords: "127", // Mock data
  website: business.contact.website,
  reviews: business.reviewCount
}))

export const industries = [...new Set(businesses.map(business => business.industry))]

export const business = {
  id: "denver-plumbing-pros",
  name: "Denver Plumbing Pros",
  slug: "denver-plumbing-pros",
  description: "Professional plumbing services in Denver and surrounding areas. We specialize in emergency repairs, installations, and maintenance for residential and commercial properties.",
  industry: "Plumbing",
  specialties: [
    "Emergency Plumbing",
    "Drain Cleaning",
    "Water Heater Installation",
    "Pipe Repair",
    "Bathroom Remodeling",
    "Kitchen Plumbing",
    "Sewer Line Repair",
    "Leak Detection"
  ],
  yearEstablished: 2015,
  employeeCount: "6-15",
  rating: 4.8,
  reviewCount: 127,
  emergencyService: true,
  serviceRadius: "50 miles",
  articlesCount: 25,
  website: "https://denverplumbingpros.com",
  heroImage: "/placeholder.svg?height=400&width=600&text=Denver+Plumbing+Pros+Storefront",
  certifications: ["Licensed", "Insured", "BBB Accredited"],
  hq: {
    phone: "(303) 555-0123",
    email: "info@denverplumbingpros.com",
    address: "1234 Main St",
    city: "Denver",
    state: "Colorado",
    zipCode: "80202",
    hours: {
      "Monday": "7:00 AM - 7:00 PM",
      "Tuesday": "7:00 AM - 7:00 PM", 
      "Wednesday": "7:00 AM - 7:00 PM",
      "Thursday": "7:00 AM - 7:00 PM",
      "Friday": "7:00 AM - 7:00 PM",
      "Saturday": "8:00 AM - 5:00 PM",
      "Sunday": "9:00 AM - 3:00 PM"
    }
  }
} // Default business for business page

export function getClientBySlug(slug: string): Business | undefined {
  return businesses.find(business => business.slug === slug)
}

export function getArticlesByClient(clientId: string): Article[] {
  return articles.filter(article => article.authorId === clientId)
}

export function getServiceAreaCitationsByClient(clientId: string): Citation[] {
  return getBusinessCitations(clientId)
}
