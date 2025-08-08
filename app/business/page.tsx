import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, MapPin, Star, ExternalLink, Phone, Mail, Clock, Award, Building2, Users, Calendar } from 'lucide-react'
import { business, getServiceAreasByBusiness, getArticlesByBusiness, getArticlesByType } from '@/lib/data'

export default function BusinessPage() {
  const serviceAreas = getServiceAreasByBusiness(business.id)
  const businessArticles = getArticlesByBusiness(business.id)
  const hqArticles = getArticlesByType('hq-citation')

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span>Business Profile</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{business.name}</h1>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">{business.industry}</Badge>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {business.hq.city}, {business.hq.state}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={business.website} target="_blank" rel="noopener noreferrer">
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {business.description}
              </p>
              <div className="flex items-center space-x-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Service Today <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {business.emergencyService && (
                  <Badge variant="destructive" className="bg-red-600">
                    <Clock className="mr-1 h-3 w-3" />
                    24/7 Emergency Service
                  </Badge>
                )}
              </div>
            </div>
            {business.heroImage && (
              <div className="w-full md:w-96 aspect-video overflow-hidden rounded-lg">
                <img
                  src={business.heroImage || "/placeholder.svg"}
                  alt={business.name}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Years in Business</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{new Date().getFullYear() - business.yearEstablished}</div>
              <p className="text-xs text-muted-foreground">Since {business.yearEstablished}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Service Areas</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{serviceAreas.length}</div>
              <p className="text-xs text-muted-foreground">Locations served</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customer Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{business.rating}</div>
              <p className="text-xs text-muted-foreground">{business.reviewCount} reviews</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Articles Published</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{business.articlesCount}</div>
              <p className="text-xs text-muted-foreground">Expert content</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle>Our Services</CardTitle>
                <CardDescription>
                  Professional {business.industry.toLowerCase()} services we provide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 md:grid-cols-2">
                  {business.specialties.map((specialty) => (
                    <div key={specialty} className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-blue-600 rounded-full" />
                      <span>{specialty}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle>Service Areas</CardTitle>
                <CardDescription>
                  We provide professional {business.industry.toLowerCase()} services in these locations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {serviceAreas.slice(0, 8).map((area) => (
                    <div key={area.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="font-semibold">{area.name}, {area.state}</h3>
                          <p className="text-sm text-muted-foreground">
                            {area.population?.toLocaleString()} residents
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>{area.monthlyTraffic} traffic</span>
                            <span>{area.rankingKeywords} keywords</span>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                              <span>{area.rating}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/service-areas/${area.slug}`}>View</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                {serviceAreas.length > 8 && (
                  <div className="mt-4 text-center">
                    <Button variant="outline" asChild>
                      <Link href="/service-areas">
                        View All {serviceAreas.length} Service Areas <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Articles */}
            {hqArticles.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Company Articles</CardTitle>
                  <CardDescription>
                    Learn more about {business.name} and our services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {hqArticles.slice(0, 5).map((article) => (
                    <div key={article.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="font-semibold line-clamp-2">{article.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                            <span>{article.readTime}</span>
                            {article.views && <span>{article.views} views</span>}
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/blog/${article.slug}`}>Read</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{business.hq.phone}</p>
                    <p className="text-sm text-muted-foreground">
                      {business.emergencyService ? "24/7 Emergency Service" : "Call during business hours"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{business.hq.email}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Headquarters</p>
                    <p className="text-sm text-muted-foreground">
                      {business.hq.address}<br />
                      {business.hq.city}, {business.hq.state} {business.hq.zipCode}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(business.hq.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="font-medium">{day}</span>
                      <span className="text-muted-foreground">{hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rating */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Rating</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(business.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xl font-bold">{business.rating}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on {business.reviewCount} customer reviews
                </p>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span>Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {business.certifications.map((cert) => (
                    <div key={cert} className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-green-600 rounded-full" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Company Info</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Established:</span>
                  <span className="font-medium">{business.yearEstablished}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Team Size:</span>
                  <span className="font-medium">{business.employeeCount} employees</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Service Radius:</span>
                  <span className="font-medium">{business.serviceRadius}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-muted rounded-lg p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contact {business.name} today for professional {business.industry.toLowerCase()} services in your area.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Service Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`tel:${business.hq.phone}`}>
                Call Now: {business.hq.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
