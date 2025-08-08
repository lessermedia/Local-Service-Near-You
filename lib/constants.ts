export const SITE_NAME = "LocalServiceHub"
export const SITE_DESCRIPTION = "Find trusted local service providers in your area"
export const SITE_URL = "https://localservicehub.com"

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

export const businessHours = {
  monday: { open: "8:00 AM", close: "6:00 PM", closed: false },
  tuesday: { open: "8:00 AM", close: "6:00 PM", closed: false },
  wednesday: { open: "8:00 AM", close: "6:00 PM", closed: false },
  thursday: { open: "8:00 AM", close: "6:00 PM", closed: false },
  friday: { open: "8:00 AM", close: "6:00 PM", closed: false },
  saturday: { open: "9:00 AM", close: "4:00 PM", closed: false },
  sunday: { open: "10:00 AM", close: "2:00 PM", closed: true }
}
