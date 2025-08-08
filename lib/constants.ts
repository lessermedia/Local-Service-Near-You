// Business Configuration - Update these values to change site-wide information
export const BUSINESS_CONFIG = {
  // Company Information
  companyName: "Local Service Near You",
  legalName: "Local Service Near You LLC",
  brandName: "Local Service Near You", // Used for shorter references
  tagline: "Find trusted local service providers in your area",
  description: "Connecting customers with trusted local service providers across the United States.",
  
  // Contact Information
  contact: {
    phone: "(727) 637-7164",
    email: "info@LocalServiceNearYou.com",
    supportEmail: "support@LocalServiceNearYou.com",
    businessEmail: "business@LocalServiceNearYou.com",
  },
  
  // Address Information
  address: {
    street: "11045 Montcalm dr",
    city: "Spring Hill",
    state: "FL",
    zipCode: "34608",
    country: "United States",
    full: "11045 Montcalm dr, Spring Hill, FL 34608"
  },
  
  // Website & Social
  website: {
    url: "https://LocalServiceNearYou.com",
    domain: "LocalServiceNearYou.com"
  },
  
  social: {
    facebook: "https://facebook.com/LocalServiceNearYou",
    twitter: "https://twitter.com/LocalServiceNearYou", 
    instagram: "https://instagram.com/LocalServiceNearYou",
    linkedin: "https://linkedin.com/company/LocalServiceNearYou"
  },
  
  // Business Hours
  hours: {
    monday: { open: "9:00 AM", close: "6:00 PM", closed: false },
    tuesday: { open: "9:00 AM", close: "6:00 PM", closed: false },
    wednesday: { open: "9:00 AM", close: "6:00 PM", closed: false },
    thursday: { open: "9:00 AM", close: "6:00 PM", closed: false },
    friday: { open: "9:00 AM", close: "6:00 PM", closed: false },
    saturday: { open: "10:00 AM", close: "4:00 PM", closed: false },
    sunday: { open: "12:00 PM", close: "4:00 PM", closed: true }
  },
  
  // Business Details
  founded: 2024,
  timezone: "America/New_York",
  supportHours: "Monday - Friday, 9 AM - 6 PM EST"
}

// Legacy exports for backwards compatibility
export const SITE_NAME = BUSINESS_CONFIG.companyName
export const SITE_DESCRIPTION = BUSINESS_CONFIG.tagline  
export const SITE_URL = BUSINESS_CONFIG.website.url

export const subscriptionTiers = {
  tier1: {
    name: "Basic Listing",
    price: 99,
    billingType: "one-time",
    description: "Get your business listed with basic information",
    features: [
      "Business profile listing",
      "Contact information display",
      "Basic business description",
      "Location on map",
      "Mobile-friendly listing"
    ],
    citationsPerLocation: 5,
    articlesPerService: 1,
    linksPerService: 2
  },
  tier2: {
    name: "Professional",
    price: 199,
    billingType: "monthly",
    description: "Enhanced listing with SEO optimization",
    features: [
      "Everything in Basic",
      "SEO-optimized business profile",
      "Service area citations",
      "Professional business articles",
      "Enhanced search visibility",
      "Customer review integration",
      "Social media links",
      "Business hours display"
    ],
    citationsPerLocation: 15,
    articlesPerService: 3,
    linksPerService: 5
  },
  tier3: {
    name: "Premium",
    price: 399,
    billingType: "monthly",
    description: "Complete digital marketing solution",
    features: [
      "Everything in Professional",
      "Priority search placement",
      "Multiple service area citations",
      "Weekly SEO articles",
      "Advanced analytics dashboard",
      "Lead tracking system",
      "Custom business website",
      "24/7 customer support",
      "Reputation management"
    ],
    citationsPerLocation: 25,
    articlesPerService: 5,
    linksPerService: 10
  }
}

export const industries = [
  "Digital Marketing",
  "Web Development",
  "Marketing & Advertising",
  "Plumbing",
  "HVAC",
  "Electrical",
  "Roofing",
  "Landscaping",
  "Cleaning Services",
  "Pest Control",
  "Home Renovation",
  "Painting",
  "Flooring",
  "Tree Services",
  "Appliance Repair",
  "Locksmith",
  "Garage Door Repair",
  "Handyman Services",
  "Pool Services",
  "Security Systems",
  "Solar Installation",
  "Concrete Services",
  "Moving Services"
]

export const categories = [
  "Home Services",
  "Professional Services", 
  "Automotive",
  "Health & Wellness",
  "Beauty & Personal Care",
  "Pet Services",
  "Event Services",
  "Technology Services",
  "Financial Services",
  "Legal Services"
]

export const serviceTypes = [
  "Emergency Services",
  "Maintenance",
  "Installation",
  "Repair",
  "Consultation",
  "Inspection",
  "Cleaning",
  "Design",
  "Construction",
  "Renovation"
]
