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
    id: "lesser-media",
    name: "Lesser Media",
    slug: "lesser-media",
    description: "Full-service digital marketing agency specializing in comprehensive marketing solutions for businesses nationwide. We provide everything from paid advertising and SEO to web development and marketing automation.",
    industry: "Digital Marketing",
    services: [
      "Facebook Ads",
      "Google Ads",
      "Programmatic SEO",
      "Local SEO",
      "Technical SEO",
      "Content Automation",
      "CRM Setup",
      "Email Marketing Sequences",
      "SMS Marketing",
      "Lead Scoring",
      "AI Content Creation",
      "SEO Optimization for Content",
      "Social Media Strategy",
      "Content Calendar Creation",
      "Landing Page Optimization",
      "A/B Testing",
      "Funnel Analysis",
      "Conversion Rate Optimization (CRO)",
      "Custom Dashboards",
      "ROI Tracking",
      "Performance Reporting",
      "Data Analysis",
      "Web Design",
      "Web Development",
      "App Development",
      "Responsive Web Design",
      "E-commerce Development"
    ],
    serviceAreas: [
      "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio",
      "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "Fort Worth", "Columbus",
      "Charlotte", "San Francisco", "Indianapolis", "Seattle", "Denver", "Washington",
      "Boston", "El Paso", "Nashville", "Detroit", "Oklahoma City", "Portland", "Las Vegas",
      "Memphis", "Louisville", "Baltimore", "Milwaukee", "Albuquerque", "Tucson", "Fresno",
      "Sacramento", "Kansas City", "Mesa", "Atlanta", "Omaha", "Colorado Springs", "Raleigh",
      "Miami", "Long Beach", "Virginia Beach", "Oakland", "Minneapolis", "Tampa", "Tulsa",
      "Arlington", "Wichita", "New Orleans", "Cleveland", "Bakersfield", "Aurora", "Honolulu",
      "Anaheim", "Santa Ana", "Corpus Christi", "Riverside", "Lexington", "Stockton",
      "Henderson", "Saint Paul", "St Louis", "Cincinnati", "Pittsburgh", "Greensboro",
      "Anchorage", "Plano", "Lincoln", "Orlando", "Irvine", "Newark", "Durham", "Chula Vista",
      "Toledo", "Fort Wayne", "St Petersburg", "Laredo", "Jersey City", "Chandler", "Madison",
      "Lubbock", "Scottsdale", "Reno", "Buffalo", "Gilbert", "Glendale", "North Las Vegas",
      "Winston Salem", "Chesapeake", "Norfolk", "Fremont", "Garland", "Irving", "Hialeah",
      "Richmond", "Boise", "Spokane", "Baton Rouge", "Tacoma", "San Bernardino", "Modesto",
      "Fontana", "Des Moines", "Moreno Valley", "Santa Clarita", "Fayetteville", "Birmingham",
      "Oxnard", "Rochester", "Port St Lucie", "Grand Rapids", "Huntsville", "Salt Lake City",
      "Frisco", "Yonkers", "Amarillo", "Glendale", "Huntington Beach", "McKinney", "Montgomery",
      "Augusta", "Aurora", "Akron", "Little Rock", "Tempe", "Columbus", "Overland Park",
      "Grand Prairie", "Tallahassee", "Cape Coral", "Mobile", "Knoxville", "Shreveport",
      "Worcester", "Ontario", "Vancouver", "Sioux Falls", "Chattanooga", "Brownsville",
      "Fort Lauderdale", "Providence", "Newport News", "Rancho Cucamonga", "Santa Rosa",
      "Peoria", "Oceanside", "Elk Grove", "Salem", "Pembroke Pines", "Eugene", "Garden Grove",
      "Cary", "Fort Collins", "Corona", "Springfield", "Jackson", "Alexandria", "Hayward",
      "Clarksville", "Lakewood", "Lancaster", "Salinas", "Palmdale", "Hollywood", "Springdale",
      "Sunnyvale", "Macon", "Kansas City", "Paterson", "Naperville", "Bellevue", "Surprise",
      "Denton", "Roseville", "Thornton", "Mesquite", "Savannah", "Syracuse", "Torrance",
      "Bridgeport", "Killeen", "Rockford", "Fullerton", "Carrollton", "Cedar Rapids",
      "Coral Springs", "Sterling Heights", "West Valley City", "Concord", "Charleston",
      "Hampton", "Visalia", "Gainesville", "Warren", "Olathe", "Thousand Oaks", "Cedar Park",
      "Miami Gardens", "Elizabeth", "Hartford", "Midland", "Norman", "Columbia", "Fargo",
      "Pearland", "Clearwater", "Beaumont", "Arvada", "Sandy Springs", "Hemet", "Boulder",
      "West Palm Beach", "Murfreesboro", "Lewisville", "Ann Arbor", "Round Rock", "Westminster",
      "Elgin", "Norwalk", "Broken Arrow", "High Point", "Inglewood", "Lansing", "Pompano Beach",
      "Pueblo", "Fairfield", "North Charleston", "Richardson", "Dayton", "Las Cruces",
      "Billings", "South Bend", "Jurupa Valley", "Antioch", "Temecula", "Burbank", "Rialto",
      "Allen", "El Monte", "Carlsbad", "Green Bay", "West Jordan", "Tyler", "Palm Bay",
      "West Covina", "Hillsboro", "San Mateo", "League City", "Sparks", "Lowell", "Santa Maria",
      "Evansville", "Woodbridge", "Cambridge", "Ventura", "Abilene", "Norman", "Centennial",
      "Sterling Heights", "Waterbury", "Flint", "Erie", "Rochester Hills", "Livonia",
      "New Haven", "Manchester", "Sandy", "Roswell", "Johns Creek", "Miami Beach", "Nashua",
      "Edmond", "Daly City", "Wichita Falls", "Green Bay", "Yakima", "Spokane Valley",
      "Kenosha", "Lakeland", "Richmond", "Albany", "Brockton", "Everett", "Lynn", "Medford",
      "Tuscaloosa", "Champaign", "Fort Smith", "College Station", "Santa Clara", "Fayetteville",
      "Carmel", "Bend", "Sugar Land", "Longmont", "Wilmington", "Waco", "Gastonia", "Merced",
      "Durham", "Renton", "Evansville", "Lakewood", "Peoria", "Chico", "Yakima", "Fort Collins",
      "Lake Charles", "Danbury", "Tyler", "Redding", "Santa Monica", "Farmington", "Lee's Summit",
      "Fishers", "Rio Rancho", "Edison", "Vacaville", "Trenton", "Lawton", "Roanoke",
      "Carson", "Decatur", "Leominster", "Pearland", "Pompano Beach", "Hamilton", "Laredo",
      "Kalamazoo", "Appleton", "Clifton", "Longview", "Bloomington", "Sandy Springs", "Gresham",
      "Asheville", "Erie", "West Haven", "Odessa", "Lakewood", "Ogden", "Reading", "Bellingham",
      "Waterloo", "Norwalk", "Arvada", "Miami Gardens", "Racine", "Troy", "Utica", "San Leandro",
      "Livonia", "Fall River", "Beaverton", "Hammond", "Quincy", "Duluth", "Muncie",
      "Westminster", "Dearborn", "South Gate", "Whittier", "Erie", "El Cajon", "Davenport",
      "Cranston", "Richmond", "Newark", "West Palm Beach", "Portsmouth", "Evansville", "Norfolk",
      "Chesapeake", "Irvine", "North Miami", "Buena Park", "San Marcos", "Largo", "Wayne",
      "St Joseph", "Union City", "Milpitas", "Fremont", "Gulfport", "Middletown", "Sunrise",
      "Ogden", "Lynchburg", "Casa Grande", "Columbia", "Cedar Falls", "Nashua", "College Station",
      "Plantation", "Thornton", "Roseville", "Redwood City", "Missoula", "Wyoming", "Joliet",
      "Compton", "San Leandro", "Lake Forest", "Woodbridge", "Brockton", "Renton", "Sandy Springs", "Rialto", "El Monte", "Vacaville", 
      "Fishers", "South Bend", "Carmel", "Yuma", "Burbank", "Lynn", "Quincy", "El Cajon", 
      "Suffolk", "San Mateo", "Chico", "Inglewood", "Wichita Falls", "Boca Raton", "Hesperia", 
      "Daly City", "Clinton", "Georgetown", "New Bedford", "Albany", "Davenport", "Plantation", 
      "Deltona", "Federal Way", "San Angelo", "Tracy", "Sunrise"
    ],
    contact: {
      phone: "(727) 637-7164",
      email: "info@lessermedia.com",
      website: "https://lessermedia.com"
    },
    address: {
      street: "11045 Montcalm rd",
      city: "Spring Hill",
      state: "FL",
      zipCode: "34608"
    },
    headquarters: {
      city: "Spring Hill",
      state: "Florida"
    },
    rating: 4.9,
    reviewCount: 85,
    yearEstablished: 2022,
    employeeCount: "6-15",
    emergencyService: true,
    certifications: ["Google Partner", "Facebook Marketing Partner", "Google Analytics Certified"],
    businessHours: {
      monday: { open: "9:00 AM", close: "6:00 PM", closed: false },
      tuesday: { open: "9:00 AM", close: "6:00 PM", closed: false },
      wednesday: { open: "9:00 AM", close: "6:00 PM", closed: false },
      thursday: { open: "9:00 AM", close: "6:00 PM", closed: false },
      friday: { open: "9:00 AM", close: "6:00 PM", closed: false },
      saturday: { open: "10:00 AM", close: "4:00 PM", closed: false },
      sunday: { open: "12:00 PM", close: "4:00 PM", closed: true }
    },
    images: [
      "/placeholder.svg?height=400&width=600&text=Lesser+Media+Office",
      "/placeholder.svg?height=300&width=400&text=Digital+Marketing+Dashboard",
      "/placeholder.svg?height=300&width=400&text=Team+Meeting"
    ],
    featured: true,
    tier: "tier3"
  }
]

// Generate 25 articles per service for Lesser Media (675 total articles)
const generateArticlesForService = (service: string, serviceIndex: number): Article[] => {
  const serviceSlug = service.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')
  const baseDate = new Date('2024-01-01')
  const articles: Article[] = []
  
  const articleTemplates = [
    'Ultimate Guide', 'Best Practices', 'Complete Strategy', 'Expert Tips', 'Advanced Techniques',
    'Case Study', 'Success Stories', 'Common Mistakes', 'How to Get Started', 'ROI Analysis',
    'Tools & Resources', 'Industry Trends', 'Cost Analysis', 'Comparison Guide', 'Step by Step',
    'Optimization Tips', 'Latest Updates', 'Beginner Guide', 'Pro Strategies', 'Troubleshooting',
    'Best Tools for', 'Common Pitfalls', 'Proven Methods', 'Quick Wins', 'Long-term Strategy'
  ]
  
  for (let i = 0; i < 25; i++) {
    const template = articleTemplates[i]
    const articleDate = new Date(baseDate)
    articleDate.setDate(baseDate.getDate() + (serviceIndex * 25) + i)
    
    articles.push({
      id: `${serviceSlug}-${i + 1}`,
      title: `${service} ${template}: Complete Guide for 2024`,
      slug: `${serviceSlug}-${template.toLowerCase().replace(/\s+/g, '-')}-guide`,
      excerpt: `Discover the ${template.toLowerCase()} for ${service.toLowerCase()}. Learn proven strategies, avoid common mistakes, and maximize your ROI with expert insights from Lesser Media.`,
      content: `# ${service} ${template}: Complete Guide for 2024

## Introduction

${service} is a crucial component of modern digital marketing. This comprehensive guide covers everything you need to know about implementing successful ${service.toLowerCase()} strategies.

## Key Benefits of ${service}

- Increased brand visibility and awareness
- Higher conversion rates and ROI
- Better targeting and customer segmentation
- Enhanced customer engagement
- Improved business growth and revenue

## Getting Started with ${service}

### Step 1: Strategy Development
Understanding your goals and target audience is crucial for ${service.toLowerCase()} success.

### Step 2: Implementation
Execute your ${service.toLowerCase()} strategy with precision and attention to detail.

### Step 3: Optimization
Continuously monitor and optimize your ${service.toLowerCase()} campaigns for better performance.

## Best Practices

1. **Data-Driven Approach**: Use analytics to guide your ${service.toLowerCase()} decisions
2. **Continuous Testing**: A/B test different strategies and tactics
3. **Customer Focus**: Always prioritize customer needs and preferences
4. **ROI Tracking**: Monitor return on investment closely
5. **Stay Updated**: Keep up with the latest ${service.toLowerCase()} trends and updates

## Common Mistakes to Avoid

- Neglecting to define clear objectives
- Insufficient budget allocation
- Poor targeting and segmentation
- Lack of consistent monitoring
- Ignoring mobile optimization

## Tools and Resources

Essential tools for ${service.toLowerCase()} success include analytics platforms, automation software, and optimization tools.

## Conclusion

${service} can significantly impact your business growth when implements correctly. Partner with Lesser Media for expert ${service.toLowerCase()} services and maximize your digital marketing ROI.

*Contact Lesser Media at (727) 637-7164 or visit https://lessermedia.com for professional ${service.toLowerCase()} services.*`,
      author: 'Lesser Media Team',
      authorId: 'lesser-media',
      publishedAt: articleDate.toISOString(),
      category: service,
      tags: [service.toLowerCase(), 'digital marketing', 'guide', 'strategy', 'roi'],
      readTime: `${Math.floor(Math.random() * 5) + 5} min read`,
      featured: i < 3, // First 3 articles per service are featured
      image: `/placeholder.svg?height=300&width=500&text=${service.replace(/\s+/g, '+')}+Guide`
    })
  }
  
  return articles
}

export const articles: Article[] = businesses[0].services.flatMap((service, index) => 
  generateArticlesForService(service, index)
)

// Helper functions
export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find(business => business.slug === slug)
}

export function getBusinessById(id: string): Business | undefined {
  return businesses.find(business => business.id === id)
}

export function getArticlesByBusiness(businessId: string): Article[] {
  return articles.filter(article => article.authorId === businessId)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug)
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(article => article.featured).slice(0, 6)
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(article => article.category === category)
}

export function getRecentArticles(limit: number = 10): Article[] {
  return articles
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}
