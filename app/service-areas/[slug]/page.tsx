import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, MapPin, Star, Phone, Clock, Award, Building2, TrendingUp, Users, Search } from 'lucide-react'
import { searchBusinesses, getArticlesByCategory, businesses, articles } from '@/lib/data'
import { formatPhoneNumber, CITY_TO_STATE_MAP } from '@/lib/utils'

interface ServiceAreaPageProps {
  params: {
    slug: string
  }
}

export default function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  // Parse city from slug and get proper state from mapping
  // For "new-york-new-york", we need to find the city that matches the first part
  const slugParts = params.slug.split('-')
  
  // Try different combinations to find the correct city
  let city = ''
  let state = ''
  
  // Check all possible city combinations from the slug
  for (let i = 1; i <= slugParts.length; i++) {
    const testCity = slugParts.slice(0, i)
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')
    
    if (CITY_TO_STATE_MAP[testCity]) {
      city = testCity
      state = CITY_TO_STATE_MAP[testCity]
      break
    }
  }
  
  // Fallback to old logic if no match found
  if (!city) {
    city = slugParts.slice(0, -1).map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')
    state = slugParts[slugParts.length - 1].charAt(0).toUpperCase() + slugParts[slugParts.length - 1].slice(1)
  }
  
  // Find businesses serving this area
  const areaBusinesses = searchBusinesses('', city)
  
  // Find relevant articles (articles that mention the city or are general service articles)
  const relevantArticles = articles.filter(article => 
    article.title.toLowerCase().includes(city.toLowerCase()) ||
    article.content.toLowerCase().includes(city.toLowerCase()) ||
    article.tags.includes(city.toLowerCase()) ||
    article.category === 'Home Maintenance' ||
    article.category === 'HVAC' ||
    article.category === 'Safety'
  ).slice(0, 6)
  
  if (areaBusinesses.length === 0) {
    // If no businesses found, show a not found page
    notFound()
  }

  // Get unique industries from businesses in this area
  const industries = [...new Set(areaBusinesses.map(business => business.industry))]
  
  // Calculate total reviews and average rating
  const totalReviews = areaBusinesses.reduce((sum, business) => sum + business.reviewCount, 0)
  const averageRating = areaBusinesses.reduce((sum, business) => sum + (business.rating * business.reviewCount), 0) / totalReviews

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span>/</span>
          <Link href="/service-areas" className="hover:text-gray-700">Service Areas</Link>
          <span>/</span>
          <span>{city}, {state}</span>
        </div>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Local Services in {city}, {state}
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Find trusted local service providers in {city}. Connect with verified professionals for all your home and business needs. 
              For comprehensive <a href="https://lessermedia.com" target="_blank" rel="nofollow" className="text-blue-600 hover:text-blue-800 underline">digital marketing services</a> to grow your local business, visit Lesser Media.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {industries.map((industry) => (
                <Badge key={industry} variant="secondary" className="text-sm">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Local Businesses</CardTitle>
              <Building2 className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{areaBusinesses.length}</div>
              <p className="text-xs text-gray-600">Verified providers</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Industries</CardTitle>
              <TrendingUp className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{industries.length}</div>
              <p className="text-xs text-gray-600">Service categories</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{averageRating.toFixed(1)}</div>
              <p className="text-xs text-gray-600">Customer satisfaction</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
              <Users className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{totalReviews}</div>
              <p className="text-xs text-gray-600">Customer reviews</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Businesses */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Service Providers in {city}, {state}
              </h2>
              <p className="text-gray-600">
                {areaBusinesses.length} verified businesses serving the {city} area
              </p>
            </div>

            {/* Business Listings */}
            <div className="space-y-6">
              {areaBusinesses.map((business) => (
                <Card key={business.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                          <Link href={`/businesses/${business.slug}`}>
                            {business.name}
                          </Link>
                        </CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {business.address.city}, {business.address.state}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">{business.industry}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {business.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{business.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({business.reviewCount} reviews)</span>
                      </div>
                      {business.emergencyService && (
                        <Badge variant="destructive" className="text-xs">24/7 Emergency</Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Phone className="w-4 h-4 mr-2" />
                      {formatPhoneNumber(business.contact.phone)}
                    </div>
                    
                    {/* Services */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {business.services.slice(0, 4).map((service, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                      {business.services.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{business.services.length - 4} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Link href={`/businesses/${business.slug}`} className="flex-1">
                        <Button className="w-full">View Details</Button>
                      </Link>
                      <Button variant="outline" asChild>
                        <a href={`tel:${business.contact.phone}`}>Call Now</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Need Service Now?</CardTitle>
                <CardDescription>
                  Get connected with local professionals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <Link href="/businesses">
                    <Search className="w-4 h-4 mr-2" />
                    Browse All Services
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/list-your-business">
                    List Your Business
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Popular Services */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Services in {city}</CardTitle>
                <CardDescription>
                  Most searched services in your area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {industries.map((industry) => {
                    const industryBusinesses = areaBusinesses.filter(b => b.industry === industry)
                    return (
                      <div key={industry} className="flex justify-between items-center">
                        <span className="text-sm font-medium">{industry}</span>
                        <Badge variant="outline" className="text-xs">
                          {industryBusinesses.length} {industryBusinesses.length === 1 ? 'provider' : 'providers'}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Area Information */}
            <Card>
              <CardHeader>
                <CardTitle>About {city}, {state}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service Providers:</span>
                    <span className="font-medium">{areaBusinesses.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Industries Covered:</span>
                    <span className="font-medium">{industries.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Rating:</span>
                    <span className="font-medium">{averageRating.toFixed(1)} ⭐</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Local Articles Section */}
        {relevantArticles.length > 0 && (
          <div className="mt-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Local Tips & Guides for {city}
              </h2>
              <Link href="/articles">
                <Button variant="outline">View All Articles</Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relevantArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <img 
                      src={article.image || "/placeholder.svg"} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit">{article.category}</Badge>
                    <CardTitle className="text-lg leading-tight line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>By {article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <Link href={`/articles/${article.slug}`} className="block">
                      <Button variant="outline" className="w-full">Read More</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need a Service Provider in {city}?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get connected with trusted local professionals. Browse our verified service providers or get started with a free consultation.
            Looking to market your business online? <a href="https://lessermedia.com" target="_blank" rel="nofollow" className="text-white hover:text-blue-200 underline font-semibold">Lesser Media</a> offers expert digital marketing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/businesses">
                Browse All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/list-your-business">
                List Your Business
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
