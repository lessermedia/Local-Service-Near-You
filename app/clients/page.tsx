import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, MapPin, TrendingUp, ExternalLink, Search, Star, Calendar } from 'lucide-react'
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { SearchParamsWrapper } from "@/components/search-params-wrapper"

const clients = [
  {
    name: "Denver Plumbing Pro",
    slug: "denver-plumbing-pro",
    industry: "Plumbing Services",
    location: "Denver, CO",
    serviceAreas: ["Denver", "Aurora", "Lakewood", "Thornton", "Westminster"],
    website: "https://denverplumbingpro.com",
    articlesCount: 45,
    monthlyTraffic: "12.5K",
    rankingKeywords: 127,
    joinDate: "2024-08-15",
    description: "Full-service plumbing company serving the Denver metro area with 24/7 emergency services, drain cleaning, and water heater installation.",
    specialties: ["Emergency Plumbing", "Drain Cleaning", "Water Heater Repair", "Pipe Installation"],
    rating: 4.9,
    reviews: 234
  },
  {
    name: "Austin Legal Group",
    slug: "austin-legal-group", 
    industry: "Legal Services",
    location: "Austin, TX",
    serviceAreas: ["Austin", "Round Rock", "Cedar Park", "Georgetown", "Pflugerville"],
    website: "https://austinlegalgroup.com",
    articlesCount: 32,
    monthlyTraffic: "8.7K",
    rankingKeywords: 89,
    joinDate: "2024-09-22",
    description: "Experienced legal team specializing in personal injury, family law, and business litigation throughout Central Texas.",
    specialties: ["Personal Injury", "Family Law", "Business Litigation", "Estate Planning"],
    rating: 4.8,
    reviews: 156
  },
  {
    name: "Miami Roofing Solutions",
    slug: "miami-roofing-solutions",
    industry: "Roofing Services", 
    location: "Miami, FL",
    serviceAreas: ["Miami", "Coral Gables", "Homestead", "Kendall", "Doral"],
    website: "https://miamiroofingsolutions.com",
    articlesCount: 28,
    monthlyTraffic: "6.2K",
    rankingKeywords: 73,
    joinDate: "2024-10-10",
    description: "Professional roofing contractors providing residential and commercial roofing services with hurricane-resistant solutions.",
    specialties: ["Hurricane Roofing", "Tile Installation", "Roof Repair", "Commercial Roofing"],
    rating: 4.9,
    reviews: 189
  },
  {
    name: "Seattle HVAC Experts",
    slug: "seattle-hvac-experts",
    industry: "HVAC Services",
    location: "Seattle, WA", 
    serviceAreas: ["Seattle", "Bellevue", "Redmond", "Kirkland", "Renton"],
    website: "https://seattlehvacexperts.com",
    articlesCount: 38,
    monthlyTraffic: "9.1K",
    rankingKeywords: 95,
    joinDate: "2024-07-03",
    description: "Energy-efficient heating and cooling solutions for Pacific Northwest homes and businesses.",
    specialties: ["Heat Pump Installation", "Duct Cleaning", "Energy Audits", "Smart Thermostats"],
    rating: 4.7,
    reviews: 203
  },
  {
    name: "Phoenix Auto Repair",
    slug: "phoenix-auto-repair",
    industry: "Automotive Services",
    location: "Phoenix, AZ",
    serviceAreas: ["Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler"],
    website: "https://phoenixautorepair.com",
    articlesCount: 41,
    monthlyTraffic: "11.3K",
    rankingKeywords: 108,
    joinDate: "2024-06-18",
    description: "Full-service auto repair shop with certified mechanics specializing in both domestic and foreign vehicles.",
    specialties: ["Engine Repair", "Brake Service", "Transmission", "AC Repair"],
    rating: 4.8,
    reviews: 267
  },
  {
    name: "Boston Dental Care",
    slug: "boston-dental-care",
    industry: "Dental Services",
    location: "Boston, MA",
    serviceAreas: ["Boston", "Cambridge", "Somerville", "Brookline", "Newton"],
    website: "https://bostondentalcare.com",
    articlesCount: 35,
    monthlyTraffic: "7.8K",
    rankingKeywords: 82,
    joinDate: "2024-09-05",
    description: "Modern dental practice offering comprehensive oral health services with the latest technology and techniques.",
    specialties: ["Cosmetic Dentistry", "Implants", "Orthodontics", "Preventive Care"],
    rating: 4.9,
    reviews: 145
  }
]

const industries = ["All Industries", "Plumbing Services", "Legal Services", "Roofing Services", "HVAC Services", "Automotive Services", "Dental Services"]
const locations = ["All Locations", "Denver, CO", "Austin, TX", "Miami, FL", "Seattle, WA", "Phoenix, AZ", "Boston, MA"]

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">LocalServiceNearYou</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <Link href="/case-studies" className="text-gray-600 hover:text-gray-900">Case Studies</Link>
            <Button>Get Started</Button>
          </nav>

          <MobileNav>
            <Link href="/" className="text-lg font-medium">Home</Link>
            <Link href="/blog" className="text-lg font-medium">Blog</Link>
            <Link href="/case-studies" className="text-lg font-medium">Case Studies</Link>
            <Button asChild className="w-full">
              <Link href="/contact">Get Started</Link>
            </Button>
          </MobileNav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Client Directory
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover local businesses that are dominating their markets with our programmatic SEO and backlink strategies.
          </p>
          <div className="max-w-md mx-auto relative">
            <Input 
              placeholder="Search businesses..." 
              className="pl-10 bg-white text-gray-900"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Filters */}
      <SearchParamsWrapper>
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-4">
                <Select defaultValue="All Industries">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select defaultValue="All Locations">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="text-sm text-gray-600">
                Showing {clients.length} businesses
              </div>
            </div>
          </div>
        </section>
      </SearchParamsWrapper>

      {/* Client Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => (
              <Card key={client.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle className="text-lg">{client.name}</CardTitle>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <MapPin className="h-4 w-4" />
                          <span>{client.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary">{client.industry}</Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{client.rating}</span>
                      <span className="text-sm text-gray-500">({client.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <CardDescription className="line-clamp-3">
                    {client.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {client.specialties.slice(0, 3).map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                      {client.specialties.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{client.specialties.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Service Areas */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Service Areas:</h4>
                    <div className="flex flex-wrap gap-1">
                      {client.serviceAreas.slice(0, 3).map((area, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                      {client.serviceAreas.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{client.serviceAreas.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="font-bold text-blue-600">{client.articlesCount}</div>
                      <div className="text-xs text-gray-600">Articles</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-600">{client.monthlyTraffic}</div>
                      <div className="text-xs text-gray-600">Monthly Traffic</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-purple-600">{client.rankingKeywords}</div>
                      <div className="text-xs text-gray-600">Keywords</div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link href={`/clients/${client.slug}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        View Profile
                      </Button>
                    </Link>
                    <Button size="sm" variant="ghost" className="px-3">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Join Our Success Stories?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get your business featured in our directory and start building your programmatic SEO presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Campaign
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6" />
                <span className="text-lg font-bold">LocalServiceNearYou</span>
              </div>
              <p className="text-gray-400">
                Programmatic SEO and backlink solutions for local businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/programmatic-seo">Programmatic SEO</Link></li>
                <li><Link href="/backlink-building">Backlink Building</Link></li>
                <li><Link href="/local-citations">Local Citations</Link></li>
                <li><Link href="/content-creation">Content Creation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/clients">Client Directory</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
                <li><Link href="/seo-tools">SEO Tools</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LocalServiceNearYou. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
