import { ClientData } from '../types'

export const phoenixHvacExpertsData: ClientData = {
  business: {
    id: 'phoenix-hvac-experts',
    name: 'Phoenix HVAC Experts',
    slug: 'phoenix-hvac-experts',
    industry: 'HVAC',
    description: 'Professional HVAC services in Phoenix and surrounding areas. We specialize in air conditioning repair, heating installation, and indoor air quality solutions. Licensed and insured with 15+ years of experience.',
    services: ['AC Repair', 'Heating Installation', 'HVAC Maintenance', 'Duct Cleaning', 'Indoor Air Quality', 'Commercial HVAC'],
    phone: '(602) 555-0456',
    email: 'info@phoenixhvacexperts.com',
    website: 'https://phoenixhvacexperts.com',
    rating: 4.9,
    reviewCount: 203,
    isActive: true,
    heroImage: '/placeholder.svg?height=400&width=600&text=Phoenix+HVAC+Experts',
    yearEstablished: 2008,
    employeeCount: '25-50',
    specialties: ['AC Repair', '24/7 Emergency Service', 'Energy Efficiency', 'Commercial HVAC'],
    emergencyService: true,
    serviceRadius: '30 miles',
    certifications: ['NATE Certified', 'EPA Certified', 'Licensed & Insured', 'BBB A+ Rating'],
    hq: {
      address: '2468 Desert Road',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85001',
      phone: '(602) 555-0456',
      email: 'info@phoenixhvacexperts.com',
      hours: {
        'Monday': '6:00 AM - 8:00 PM',
        'Tuesday': '6:00 AM - 8:00 PM',
        'Wednesday': '6:00 AM - 8:00 PM',
        'Thursday': '6:00 AM - 8:00 PM',
        'Friday': '6:00 AM - 8:00 PM',
        'Saturday': '7:00 AM - 6:00 PM',
        'Sunday': '8:00 AM - 5:00 PM'
      }
    }
  },
  serviceAreas: [
    {
      id: 'phoenix-hvac',
      name: 'Phoenix',
      slug: 'phoenix-hvac',
      city: 'Phoenix',
      state: 'AZ',
      description: 'Professional HVAC services in Phoenix, Arizona. Expert air conditioning repair, heating installation, and maintenance services for residential and commercial properties.',
      businessId: 'phoenix-hvac-experts',
      services: ['AC Repair', 'Heating Installation', 'HVAC Maintenance', 'Duct Cleaning'],
      serviceRadius: '30 miles',
      localKeywords: [
        'hvac phoenix',
        'ac repair phoenix',
        'heating installation phoenix',
        'phoenix hvac services',
        'air conditioning phoenix'
      ],
      population: 1608139,
      county: 'Maricopa County',
      zipCodes: ['85001', '85002', '85003', '85004', '85006'],
      localEmail: 'phoenix@phoenixhvacexperts.com',
      monthlyTraffic: '4.2K',
      rankingKeywords: 22,
      rating: 4.9,
      reviewCount: 67,
      citation: {
        businessName: 'Phoenix HVAC Experts',
        address: '2468 Desert Road, Phoenix, AZ 85001',
        phone: '(602) 555-0456',
        website: 'https://phoenixhvacexperts.com',
        services: ['AC Repair', 'Heating Installation', 'HVAC Maintenance', 'Duct Cleaning'],
        isActive: true
      }
    },
    {
      id: 'scottsdale-hvac',
      name: 'Scottsdale',
      slug: 'scottsdale-hvac',
      city: 'Scottsdale',
      state: 'AZ',
      description: 'Premium HVAC services in Scottsdale, Arizona. Specializing in high-end residential and commercial HVAC systems with energy-efficient solutions.',
      businessId: 'phoenix-hvac-experts',
      services: ['AC Repair', 'Indoor Air Quality', 'Commercial HVAC', 'Energy Efficiency'],
      serviceRadius: '25 miles',
      localKeywords: [
        'hvac scottsdale',
        'ac repair scottsdale',
        'commercial hvac scottsdale',
        'indoor air quality scottsdale',
        'energy efficient hvac scottsdale'
      ],
      population: 258069,
      county: 'Maricopa County',
      zipCodes: ['85250', '85251', '85252', '85253', '85254'],
      localEmail: 'scottsdale@phoenixhvacexperts.com',
      monthlyTraffic: '2.1K',
      rankingKeywords: 18,
      rating: 4.8,
      reviewCount: 41,
      citation: {
        businessName: 'Phoenix HVAC Experts - Scottsdale',
        address: '1357 Scottsdale Blvd, Scottsdale, AZ 85250',
        phone: '(602) 555-0457',
        website: 'https://phoenixhvacexperts.com/scottsdale',
        services: ['AC Repair', 'Indoor Air Quality', 'Commercial HVAC', 'Energy Efficiency'],
        isActive: true
      }
    }
  ],
  articles: [
    {
      id: 'ac-repair-phoenix-summer-guide',
      title: 'AC Repair in Phoenix: Summer Survival Guide 2024',
      slug: 'ac-repair-phoenix-summer-guide',
      excerpt: 'Phoenix summers are brutal. When your AC breaks down, you need fast, reliable repair service. Learn about common AC problems, emergency services, and prevention tips.',
      content: 'Full article content about AC repair in Phoenix...',
      category: 'HVAC Services',
      tags: ['ac repair', 'phoenix', 'summer', 'emergency service'],
      date: '2024-01-20',
      readTime: '9 min read',
      views: 2150,
      author: 'Local Service Near You',
      image: '/placeholder.svg?height=300&width=500&text=AC+Repair+Phoenix',
      featured: true,
      type: 'client',
      clientName: 'Phoenix HVAC Experts',
      clientSlug: 'phoenix-hvac-experts',
      backlinks: ['https://phoenixhvacexperts.com'],
      serviceAreaId: 'phoenix-hvac',
      publishedAt: '2024-01-20T08:00:00Z'
    },
    {
      id: 'indoor-air-quality-scottsdale',
      title: 'Indoor Air Quality Solutions in Scottsdale: Breathe Better at Home',
      slug: 'indoor-air-quality-scottsdale',
      excerpt: 'Improve your home\'s air quality in Scottsdale with professional HVAC solutions. Learn about air purifiers, humidity control, and duct cleaning services.',
      content: 'Full article content about indoor air quality in Scottsdale...',
      category: 'HVAC Services',
      tags: ['indoor air quality', 'scottsdale', 'air purifiers', 'duct cleaning'],
      date: '2024-01-18',
      readTime: '7 min read',
      views: 1340,
      author: 'Local Service Near You',
      image: '/placeholder.svg?height=300&width=500&text=Indoor+Air+Quality+Scottsdale',
      featured: false,
      type: 'client',
      clientName: 'Phoenix HVAC Experts',
      clientSlug: 'phoenix-hvac-experts',
      backlinks: ['https://phoenixhvacexperts.com/scottsdale'],
      serviceAreaId: 'scottsdale-hvac',
      publishedAt: '2024-01-18T12:00:00Z'
    }
  ]
}
