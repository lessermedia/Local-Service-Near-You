export interface Business {
  id: string
  name: string
  slug: string
  description: string
  industry: string
  services: string[]
  serviceAreas: string[]
  contact: {
    phone: string
    email: string
    website?: string
  }
  address: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  headquarters: {
    city: string
    state: string
  }
  rating: number
  reviewCount: number
  yearEstablished: number
  employeeCount: string
  emergencyService: boolean
  certifications: string[]
  businessHours: BusinessHours
  images: string[]
  featured: boolean
  tier: string
}

export interface BusinessHours {
  monday: DayHours
  tuesday: DayHours
  wednesday: DayHours
  thursday: DayHours
  friday: DayHours
  saturday: DayHours
  sunday: DayHours
}

export interface DayHours {
  open: string
  close: string
  closed: boolean
}

export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  authorId: string
  publishedAt: string
  category: string
  tags: string[]
  readTime: string
  featured: boolean
  image: string
}

export interface ServiceArea {
  id: string
  businessId: string
  city: string
  state: string
  services: string[]
}

export interface Citation {
  id: string
  businessId: string
  businessName: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  phone: string
  website?: string
  serviceArea: string
  services: string[]
  description: string
}

export interface Location {
  city: string
  state: string
  zipCode: string
}

export interface BusinessApplication {
  businessName: string
  ownerName: string
  email: string
  phone: string
  website: string
  industry: string
  services: string[]
  address: string
  city: string
  state: string
  zipCode: string
  yearEstablished: number
  employeeCount: string
  serviceRadius: string
  emergencyService: boolean
  certifications: string[]
  description: string
  specialties: string[]
}

export interface SearchFilters {
  query?: string
  location?: string
  industry?: string
  services?: string[]
  rating?: number
  emergencyService?: boolean
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export interface SEOData {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  canonical?: string
  noindex?: boolean
}

export interface BreadcrumbItem {
  name: string
  href: string
  isLast?: boolean
}

export interface Stats {
  totalActiveBusinesses: number
  totalActiveArticles: number
  totalActiveCitations: number
  totalActiveBacklinks: number
  totalIndustries: number
  monthlyTraffic: number
}
