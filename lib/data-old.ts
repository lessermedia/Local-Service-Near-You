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
      "Web Performance Optimization"
    ],
    serviceAreas: [
      "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", 
      "San Diego", "Dallas", "Jacksonville", "Fort Worth", "San Jose", "Austin", "Charlotte", 
      "Columbus", "Indianapolis", "San Francisco", "Seattle", "Denver", "Oklahoma City", 
      "Nashville", "Washington", "El Paso", "Las Vegas", "Boston", "Detroit", "Louisville", 
      "Portland", "Memphis", "Baltimore", "Milwaukee", "Albuquerque", "Tucson", "Fresno", 
      "Sacramento", "Atlanta", "Mesa", "Kansas City", "Raleigh", "Colorado Springs", "Omaha", 
      "Miami", "Virginia Beach", "Long Beach", "Oakland", "Minneapolis", "Bakersfield", "Tulsa", 
      "Tampa", "Arlington", "Aurora", "Wichita", "Cleveland", "New Orleans", "Henderson", 
      "Honolulu", "Anaheim", "Orlando", "Lexington", "Stockton", "Riverside", "Irvine", 
      "Corpus Christi", "Newark", "Santa Ana", "Cincinnati", "Pittsburgh", "Saint Paul", 
      "Greensboro", "Jersey City", "Durham", "Lincoln", "North Las Vegas", "Plano", "Anchorage", 
      "Gilbert", "Madison", "Reno", "Chandler", "St. Louis", "Chula Vista", "Buffalo", 
      "Fort Wayne", "Lubbock", "St. Petersburg", "Toledo", "Laredo", "Port St. Lucie", 
      "Glendale", "Irving", "Winston-Salem", "Chesapeake", "Garland", "Scottsdale", "Boise", 
      "Hialeah", "Frisco", "Richmond", "Cape Coral", "Norfolk", "Spokane", "Huntsville", 
      "Santa Clarita", "Tacoma", "Fremont", "McKinney", "San Bernardino", "Baton Rouge", 
      "Modesto", "Fontana", "Salt Lake City", "Moreno Valley", "Des Moines", "Worcester", 
      "Yonkers", "Fayetteville", "Sioux Falls", "Grand Prairie", "Rochester", "Tallahassee", 
      "Little Rock", "Amarillo", "Overland Park", "Augusta", "Mobile", "Oxnard", "Grand Rapids", 
      "Peoria", "Vancouver", "Knoxville", "Birmingham", "Montgomery", "Providence", 
      "Huntington Beach", "Brownsville", "Chattanooga", "Fort Lauderdale", "Tempe", "Akron", 
      "Clarksville", "Ontario", "Newport News", "Elk Grove", "Cary", "Salem", "Pembroke Pines", 
      "Eugene", "Santa Rosa", "Rancho Cucamonga", "Shreveport", "Garden Grove", "Oceanside", 
      "Fort Collins", "Springfield", "Murfreesboro", "Surprise", "Lancaster", "Denton", 
      "Roseville", "Palmdale", "Corona", "Salinas", "Killeen", "Paterson", "Alexandria", 
      "Hollywood", "Hayward", "Charleston", "Macon", "Lakewood", "Sunnyvale", "Bellevue", 
      "Naperville", "Joliet", "Bridgeport", "Mesquite", "Pasadena", "Olathe", "Escondido", 
      "Savannah", "McAllen", "Gainesville", "Pomona", "Rockford", "Thornton", "Waco", "Visalia", 
      "Syracuse", "Columbia", "Midland", "Miramar", "Palm Bay", "Jackson", "Coral Springs", 
      "Victorville", "Elizabeth", "Fullerton", "Meridian", "Torrance", "Stamford", 
      "West Valley City", "Orange", "Cedar Rapids", "Warren", "Hampton", "New Haven", "Kent", 
      "Dayton", "Fargo", "Lewisville", "Carrollton", "Round Rock", "Sterling Heights", 
      "Santa Clara", "Norman", "Abilene", "Pearland", "Athens", "College Station", "Clovis", 
      "West Palm Beach", "Allentown", "North Charleston", "Simi Valley", "Topeka", "Wilmington", 
      "Lakeland", "Thousand Oaks", "Concord", "Vallejo", "Ann Arbor", "Broken Arrow", 
      "Fairfield", "Lafayette", "Hartford", "Arvada", "Berkeley", "Independence", "Billings", 
      "Cambridge", "Lowell", "Odessa", "High Point", "League City", "Antioch", "Richardson", 
      "Goodyear", "Pompano Beach", "Nampa", "Menifee", "Las Cruces", "Clearwater", 
      "West Jordan", "New Braunfels", "Manchester", "Miami Gardens", "Waterbury", "Provo", 
      "Evansville", "Westminster", "Elgin", "Conroe", "Greeley", "Lansing", "Buckeye", 
      "Tuscaloosa", "Allen", "Carlsbad", "Everett", "Beaumont", "Murrieta", "Rio Rancho", 
      "Temecula", "Tyler", "Davie", "South Fulton", "Sparks", "Gresham", "Santa Maria", 
      "Pueblo", "Hillsboro", "Edison", "Sugar Land", "Ventura", "Downey", "Costa Mesa", 
      "Centennial", "Edinburg", "Spokane Valley", "Jurupa Valley", "Bend", "West Covina", 
      "Boulder", "Palm Coast", "Lee's Summit", "Dearborn", "Green Bay", "St. George", 
      "Woodbridge", "Brockton", "Renton", "Sandy Springs", "Rialto", "El Monte", "Vacaville", 
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
    id: "digital-marketing-roi-2024",
    title: "Maximizing Digital Marketing ROI: A Complete Guide for Small Businesses in 2024",
    slug: "digital-marketing-roi-2024",
    excerpt: "Learn proven strategies to maximize your digital marketing return on investment with comprehensive tracking, optimization techniques, and data-driven decision making.",
    content: "In today's competitive digital landscape, small businesses need to maximize every marketing dollar. Digital marketing ROI isn't just about tracking revenue—it's about understanding which channels drive the most qualified leads, highest customer lifetime value, and sustainable growth. At Lesser Media, we've helped hundreds of businesses nationwide optimize their digital marketing spend and achieve measurable results. This comprehensive guide covers everything from setting up proper tracking systems to advanced conversion optimization techniques that can double or triple your marketing ROI...",
    author: "Lesser Media",
    authorId: "lesser-media",
    publishedAt: "2024-01-20",
    category: "Digital Marketing",
    tags: ["digital marketing", "roi", "small business", "conversion optimization", "marketing analytics"],
    readTime: "12 min read",
    featured: true,
    image: "/placeholder.svg?height=400&width=600&text=Digital+Marketing+ROI"
  },
  {
    id: "local-seo-guide-2024",
    title: "Local SEO Domination: How to Rank #1 in Your City for Any Service",
    slug: "local-seo-guide-2024",
    excerpt: "Master local SEO with this comprehensive guide covering Google Business Profile optimization, local citations, and proven strategies to dominate local search results.",
    content: "Local SEO is the lifeblood of service-based businesses. When someone in your city searches for your services, you need to be the first result they see. This isn't just about showing up—it's about dominating your local market and becoming the go-to choice for customers in your area. Our team at Lesser Media has helped businesses in over 300 cities achieve first-page rankings for their most important keywords. Here's the exact framework we use to help our clients dominate local search results...",
    author: "Lesser Media",
    authorId: "lesser-media",
    publishedAt: "2024-01-18",
    category: "SEO",
    tags: ["local seo", "google business profile", "local citations", "local search", "ranking"],
    readTime: "15 min read",
    featured: true,
    image: "/placeholder.svg?height=400&width=600&text=Local+SEO+Guide"
  },
  {
    id: "facebook-ads-conversion-optimization",
    title: "Facebook Ads Conversion Optimization: Turn More Clicks Into Customers",
    slug: "facebook-ads-conversion-optimization",
    excerpt: "Discover advanced Facebook Ads optimization techniques that can improve your conversion rates by 200-400% while reducing your cost per acquisition.",
    content: "Facebook Ads can be a goldmine for businesses—or a money pit. The difference comes down to conversion optimization. Most businesses focus on getting clicks, but clicks don't pay the bills. Conversions do. After managing millions in Facebook Ad spend for clients across the country, we've identified the key factors that separate profitable campaigns from expensive failures. This guide reveals the exact optimization strategies we use to consistently achieve 200-400% improvement in conversion rates for our clients...",
    author: "Lesser Media",
    authorId: "lesser-media",
    publishedAt: "2024-01-16",
    category: "Paid Advertising",
    tags: ["facebook ads", "conversion optimization", "paid advertising", "social media marketing", "cro"],
    readTime: "10 min read",
    featured: true,
    image: "/placeholder.svg?height=400&width=600&text=Facebook+Ads+Optimization"
  },
  {
    id: "marketing-automation-small-business",
    title: "Marketing Automation for Small Businesses: Complete Setup Guide",
    slug: "marketing-automation-small-business",
    excerpt: "Learn how to implement marketing automation that nurtures leads, increases sales, and saves time—even with a small team and limited budget.",
    content: "Marketing automation isn't just for enterprise companies with massive budgets. Small businesses can leverage automation to compete with larger competitors, nurture leads more effectively, and maximize revenue from existing traffic. The key is implementing the right systems in the right order. At Lesser Media, we've helped small businesses across the country implement marketing automation systems that generate millions in additional revenue. Here's our step-by-step framework for implementing marketing automation that actually works for small businesses...",
    author: "Lesser Media",
    authorId: "lesser-media",
    publishedAt: "2024-01-14",
    category: "Marketing Automation",
    tags: ["marketing automation", "email marketing", "lead nurturing", "crm setup", "small business"],
    readTime: "14 min read",
    featured: true,
    image: "/placeholder.svg?height=400&width=600&text=Marketing+Automation"
  },
  {
    id: "google-ads-performance-optimization",
    title: "Google Ads Performance Optimization: Double Your Leads While Cutting Costs",
    slug: "google-ads-performance-optimization",
    excerpt: "Master Google Ads optimization with proven strategies to improve Quality Score, reduce CPC, and maximize lead generation for any business type.",
    content: "Google Ads can be incredibly profitable when optimized correctly—or incredibly expensive when managed poorly. The difference lies in understanding the platform's optimization levers and how to pull them effectively. After managing Google Ads campaigns for businesses in every major city in America, we've developed a systematic approach to optimization that consistently doubles lead volume while reducing cost per lead. This comprehensive guide covers every aspect of Google Ads optimization, from keyword research and ad copywriting to bid management and conversion tracking...",
    author: "Lesser Media",
    authorId: "lesser-media",
    publishedAt: "2024-01-12",
    category: "Paid Advertising",
    tags: ["google ads", "ppc optimization", "paid search", "lead generation", "quality score"],
    readTime: "16 min read",
    featured: true,
    image: "/placeholder.svg?height=400&width=600&text=Google+Ads+Optimization"
  },
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
