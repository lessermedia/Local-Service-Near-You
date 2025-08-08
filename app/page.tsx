import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, Search, TrendingUp, Building2, MapPin, ExternalLink, ArrowRight } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { SearchParamsWrapper } from "@/components/search-params-wrapper"

// Combined feed of all articles (internal + client articles)
const allArticles = [
  // Internal SEO content
  {
    id: 1,
    title: "How to Build High-Quality Backlinks for Local Service Businesses in 2025",
    excerpt: "Discover the proven strategies we use to build authoritative backlinks that actually move the needle for local businesses across the United States.",
    category: "Link Building",
    type: "internal",
    author: "SEO Team",
    date: "2025-01-15",
    readTime: "12 min read",
    image: "/placeholder.svg?height=300&width=500&text=Backlink+Strategy+2025",
    featured: true,
    slug: "build-high-quality-backlinks-local-service-businesses"
  },
  // Client content with backlinks
  {
    id: 2,
    title: "Emergency Plumbing Services in Denver: What You Need to Know",
    excerpt: "When plumbing emergencies strike in Denver, knowing who to call can save you thousands in water damage. Denver Plumbing Pro offers 24/7 emergency services.",
    category: "Local Services",
    type: "client",
    clientName: "Denver Plumbing Pro",
    clientSlug: "denver-plumbing-pro",
    author: "Content Team",
    date: "2025-01-14",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=500&text=Denver+Emergency+Plumbing",
    featured: false,
    backlinks: ["https://denverplumbingpro.com"],
    slug: "denver-plumbing-pro/emergency-plumbing-services-denver"
  },
  {
    id: 3,
    title: "Programmatic SEO: The Future of Content Marketing at Scale",
    excerpt: "How we generate thousands of high-quality, SEO-optimized articles that drive real business results for our clients using AI and automation.",
    category: "Programmatic SEO",
    type: "internal",
    author: "Mike Chen",
    date: "2025-01-13",
    readTime: "15 min read",
    image: "/placeholder.svg?height=300&width=500&text=Programmatic+SEO+Guide",
    featured: false,
    slug: "programmatic-seo-content-marketing-scale"
  },
  {
    id: 4,
    title: "Austin Personal Injury Lawyers: Your Rights After an Accident",
    excerpt: "Understanding your rights after a personal injury in Austin is crucial. Austin Legal Group explains what you need to know about personal injury claims in Texas.",
    category: "Legal Services",
    type: "client",
    clientName: "Austin Legal Group",
    clientSlug: "austin-legal-group",
    author: "Legal Content Team",
    date: "2025-01-12",
    readTime: "10 min read",
    image: "/placeholder.svg?height=300&width=500&text=Austin+Personal+Injury+Law",
    featured: false,
    backlinks: ["https://austinlegalgroup.com"],
    slug: "austin-legal-group/personal-injury-lawyers-austin"
  },
  {
    id: 5,
    title: "Local Citation Building: The Complete 2025 Guide for Service Businesses",
    excerpt: "Everything you need to know about building consistent, high-quality local citations that boost your search rankings and drive more local customers.",
    category: "Local SEO",
    type: "internal",
    author: "Emma Davis",
    date: "2025-01-11",
    readTime: "11 min read",
    image: "/placeholder.svg?height=300&width=500&text=Local+Citation+Building",
    featured: false,
    slug: "local-citation-building-guide-service-businesses"
  },
  {
    id: 6,
    title: "Miami Roofing Contractors: Hurricane-Resistant Solutions for South Florida",
    excerpt: "Protect your Miami home with hurricane-resistant roofing solutions. Miami Roofing Solutions specializes in storm-proof roofing for South Florida properties.",
    category: "Home Services",
    type: "client",
    clientName: "Miami Roofing Solutions",
    clientSlug: "miami-roofing-solutions",
    author: "Home Services Team",
    date: "2025-01-10",
    readTime: "9 min read",
    image: "/placeholder.svg?height=300&width=500&text=Miami+Hurricane+Roofing",
    featured: false,
    backlinks: ["https://miamiroofingsolutions.com"],
    slug: "miami-roofing-solutions/hurricane-resistant-roofing-miami"
  }
]

const categories = ["All", "Link Building", "Programmatic SEO", "Local SEO", "Local Services", "Legal Services", "Home Services"]
const contentTypes = ["All Content", "Our Articles", "Client Success Stories"]

export default function HomePage() {
  const featuredArticle = allArticles.find(article => article.featured)
  const regularArticles = allArticles.filter(article => !article.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">LocalServiceNearYou</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/clients" className="text-gray-600 hover:text-gray-900">Client Directory</Link>
            <Link href="/case-studies" className="text-gray-600 hover:text-gray-900">Case Studies</Link>
            <Link href="/get-started" className="text-gray-600 hover:text-gray-900">Get Started</Link>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <MobileNav>
            <Link href="/clients" className="text-lg font-medium">Client Directory</Link>
            <Link href="/case-studies" className="text-lg font-medium">Case Studies</Link>
            <Link href="/get-started" className="text-lg font-medium">Get Started</Link>
            <Button asChild className="w-full">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </MobileNav>
        </div>
      </header>

      {/* Hero Section - Modern Blog Style */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/20">
              Latest SEO Insights & Client Success Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Programmatic SEO That Drives Results
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Discover proven strategies, client case studies, and the latest trends in programmatic SEO and local marketing that actually move the needle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="max-w-md mx-auto relative">
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10 bg-white text-gray-900"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">500+ Local Businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span className="font-semibold">50K+ Articles Published</span>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5 text-purple-600" />
              <span className="font-semibold">1M+ Backlinks Created</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <SearchParamsWrapper>
        <section className="py-6 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge 
                    key={category}
                    variant={category === "All" ? "default" : "secondary"}
                    className="cursor-pointer hover:bg-blue-600 hover:text-white transition-colors px-4 py-2"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              <Select defaultValue="All Content">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {contentTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>
      </SearchParamsWrapper>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800">Featured Article</Badge>
              <Card className="overflow-hidden border-0 shadow-xl">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src={featuredArticle.image || "/placeholder.svg"}
                      alt={featuredArticle.title}
                      width={500}
                      height={300}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge>{featuredArticle.category}</Badge>
                      {featuredArticle.type === 'client' && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          Client Story
                        </Badge>
                      )}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{featuredArticle.title}</h2>
                    <p className="text-gray-600 mb-6 text-lg">{featuredArticle.excerpt}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                    <Link href={`/${featuredArticle.slug}`}>
                      <Button size="lg">
                        Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Latest Articles & Success Stories</h2>
            <Link href="/get-started">
              <Button variant="outline">
                Want to Get Featured? <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge>{article.category}</Badge>
                    {article.type === 'client' && (
                      <Badge variant="outline" className="bg-white/90 flex items-center gap-1">
                        <Building2 className="h-3 w-3" />
                        Client
                      </Badge>
                    )}
                  </div>
                  {article.backlinks && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-800 flex items-center gap-1">
                        <ExternalLink className="h-3 w-3" />
                        Backlinks
                      </Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 hover:text-blue-600 cursor-pointer">
                    <Link href={`/${article.slug}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {article.type === 'client' && article.clientName && (
                    <div className="flex items-center gap-2 mb-3 p-2 bg-blue-50 rounded text-sm">
                      <Building2 className="h-4 w-4 text-blue-600" />
                      <span>
                        Success story from{' '}
                        <Link href={`/clients/${article.clientSlug}`} className="font-medium text-blue-600 hover:underline">
                          {article.clientName}
                        </Link>
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/${article.slug}`}>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Featured?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our client success stories and start building your programmatic SEO presence today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Your Campaign
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-6 w-6" />
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
                <li><Link href="/clients">Client Directory</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
                <li><Link href="/seo-tools">SEO Tools</Link></li>
                <li><Link href="/get-started">Get Started</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
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
