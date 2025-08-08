import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Building2, MapPin, Phone, Globe, Star, Calendar, TrendingUp, ExternalLink, Clock, User, ArrowLeft } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"

// This would typically come from a database based on the slug
const clientData = {
  name: "Denver Plumbing Pro",
  slug: "denver-plumbing-pro",
  industry: "Plumbing Services",
  location: "Denver, CO",
  address: "1234 Main Street, Denver, CO 80202",
  phone: "(303) 555-0123",
  website: "https://denverplumbingpro.com",
  email: "info@denverplumbingpro.com",
  serviceAreas: ["Denver", "Aurora", "Lakewood", "Thornton", "Westminster", "Arvada", "Wheat Ridge"],
  description: "Denver Plumbing Pro is a full-service plumbing company serving the Denver metro area with over 15 years of experience. We specialize in emergency plumbing services, drain cleaning, water heater installation and repair, and complete pipe installation for residential and commercial properties.",
  specialties: ["Emergency Plumbing", "Drain Cleaning", "Water Heater Repair", "Pipe Installation", "Sewer Line Repair", "Bathroom Remodeling"],
  rating: 4.9,
  reviews: 234,
  joinDate: "2024-08-15",
  articlesCount: 45,
  monthlyTraffic: "12.5K",
  rankingKeywords: 127,
  hours: {
    "Monday": "7:00 AM - 8:00 PM",
    "Tuesday": "7:00 AM - 8:00 PM", 
    "Wednesday": "7:00 AM - 8:00 PM",
    "Thursday": "7:00 AM - 8:00 PM",
    "Friday": "7:00 AM - 8:00 PM",
    "Saturday": "8:00 AM - 6:00 PM",
    "Sunday": "Emergency Only"
  },
  certifications: ["Licensed Plumber", "Bonded & Insured", "BBB A+ Rating", "Angie's List Super Service Award"],
  image: "/placeholder.svg?height=400&width=600&text=Denver+Plumbing+Pro"
}

// Mock articles for this client
const clientArticles = [
  {
    id: 1,
    title: "Emergency Plumbing Services in Denver: What You Need to Know",
    excerpt: "When plumbing emergencies strike in Denver, knowing who to call can save you thousands in water damage. Learn about 24/7 emergency plumbing services.",
    date: "2025-01-15",
    readTime: "6 min read",
    category: "Emergency Services",
    backlinks: ["https://denverplumbingpro.com"],
    image: "/placeholder.svg?height=200&width=300&text=Emergency+Plumbing"
  },
  {
    id: 2,
    title: "Denver Water Heater Installation: Complete Guide for Homeowners",
    excerpt: "Everything Denver homeowners need to know about water heater installation, from choosing the right size to understanding local codes.",
    date: "2025-01-12",
    readTime: "8 min read",
    category: "Water Heaters",
    backlinks: ["https://denverplumbingpro.com"],
    image: "/placeholder.svg?height=200&width=300&text=Water+Heater+Guide"
  },
  {
    id: 3,
    title: "Drain Cleaning Services in Aurora, CO: Professional vs DIY",
    excerpt: "Compare professional drain cleaning services in Aurora with DIY methods. Learn when to call the experts and when you can handle it yourself.",
    date: "2025-01-10",
    readTime: "5 min read",
    category: "Drain Cleaning",
    backlinks: ["https://denverplumbingpro.com"],
    image: "/placeholder.svg?height=200&width=300&text=Drain+Cleaning"
  },
  {
    id: 4,
    title: "Lakewood Plumbing Codes: What Homeowners Must Know in 2025",
    excerpt: "Stay compliant with Lakewood's plumbing codes. Essential information for homeowners planning plumbing renovations or repairs.",
    date: "2025-01-08",
    readTime: "7 min read",
    category: "Local Regulations",
    backlinks: ["https://denverplumbingpro.com"],
    image: "/placeholder.svg?height=200&width=300&text=Plumbing+Codes"
  },
  {
    id: 5,
    title: "Thornton Sewer Line Repair: Signs You Need Professional Help",
    excerpt: "Recognize the warning signs of sewer line problems in Thornton homes and learn about modern repair techniques that save time and money.",
    date: "2025-01-05",
    readTime: "9 min read",
    category: "Sewer Services",
    backlinks: ["https://denverplumbingpro.com"],
    image: "/placeholder.svg?height=200&width=300&text=Sewer+Repair"
  },
  {
    id: 6,
    title: "Westminster Bathroom Remodeling: Plumbing Considerations",
    excerpt: "Planning a bathroom remodel in Westminster? Here's what you need to know about plumbing requirements and best practices.",
    date: "2025-01-03",
    readTime: "10 min read",
    category: "Remodeling",
    backlinks: ["https://denverplumbingpro.com"],
    image: "/placeholder.svg?height=200&width=300&text=Bathroom+Remodel"
  }
]

export default function ClientProfilePage() {
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
            <Link href="/clients" className="text-gray-600 hover:text-gray-900">Clients</Link>
            <Button>Get Started</Button>
          </nav>

          <MobileNav>
            <Link href="/" className="text-lg font-medium">Home</Link>
            <Link href="/blog" className="text-lg font-medium">Blog</Link>
            <Link href="/clients" className="text-lg font-medium">Clients</Link>
            <Button asChild className="w-full">
              <Link href="/contact">Get Started</Link>
            </Button>
          </MobileNav>
        </div>
      </header>

      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/clients" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Client Directory
        </Link>
      </div>

      {/* Client Profile Header */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Profile Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Building2 className="h-10 w-10 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold">{clientData.name}</h1>
                    <Badge>{clientData.industry}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{clientData.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{clientData.rating}</span>
                      <span>({clientData.reviews} reviews)</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{clientData.description}</p>
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {clientData.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {clientData.serviceAreas.map((area, index) => (
                    <Badge key={index} variant="outline">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Certifications & Awards</h3>
                <div className="flex flex-wrap gap-2">
                  {clientData.certifications.map((cert, index) => (
                    <Badge key={index} className="bg-green-100 text-green-800">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact & Stats Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{clientData.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <a href={clientData.website} className="text-sm text-blue-600 hover:underline">
                      Visit Website
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{clientData.address}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(clientData.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between text-sm">
                        <span className="font-medium">{day}</span>
                        <span className="text-gray-600">{hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performance Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    SEO Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{clientData.articlesCount}</div>
                      <div className="text-sm text-gray-600">Published Articles</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="font-bold text-green-600">{clientData.monthlyTraffic}</div>
                        <div className="text-xs text-gray-600">Monthly Traffic</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="font-bold text-purple-600">{clientData.rankingKeywords}</div>
                        <div className="text-xs text-gray-600">Ranking Keywords</div>
                      </div>
                    </div>
                    <div className="text-center text-sm text-gray-500">
                      Client since {new Date(clientData.joinDate).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Client Articles Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Published Articles</h2>
            <Badge variant="secondary" className="text-sm">
              {clientArticles.length} articles with backlinks to {clientData.name}
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge className="text-xs">{article.category}</Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 flex items-center gap-1 text-xs">
                      <ExternalLink className="h-3 w-3" />
                      Backlink
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2 hover:text-blue-600 cursor-pointer">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm" className="flex-1">
                      Read Article
                    </Button>
                    <Button variant="ghost" size="sm" className="ml-2">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All {clientData.name} Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": clientData.name,
            "description": clientData.description,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": clientData.address.split(',')[0],
              "addressLocality": clientData.location.split(',')[0],
              "addressRegion": clientData.location.split(',')[1]?.trim(),
              "addressCountry": "US"
            },
            "telephone": clientData.phone,
            "url": clientData.website,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": clientData.rating,
              "reviewCount": clientData.reviews
            },
            "areaServed": clientData.serviceAreas,
            "serviceType": clientData.specialties,
            "openingHours": Object.entries(clientData.hours).map(([day, hours]) => 
              `${day.substring(0, 2)} ${hours}`
            )
          })
        }}
      />

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want Results Like {clientData.name}?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get your business featured with programmatic SEO articles and local citations that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Campaign
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              View Our Pricing
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
