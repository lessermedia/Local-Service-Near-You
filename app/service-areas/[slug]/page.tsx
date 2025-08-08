import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, MapPin, Star, ExternalLink, Phone, Mail, Clock, Award, Building2, Shield, TrendingUp } from 'lucide-react'
import { getServiceAreaBySlug, getArticlesByServiceArea, business } from '@/lib/data'

interface ServiceAreaPageProps {
  params: {
    slug: string
  }
}

export default function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const area = getServiceAreaBySlug(params.slug)
  
  if (!area) {
    notFound()
  }

  const serviceAreaArticles = getArticlesByServiceArea(area.id)

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/service-areas" className="hover:text-foreground">Service Areas</Link>
            <span>/</span>
            <span>{area.name}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                {business.industry} in {area.name}, {area.state}
              </h1>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">{business.industry}</Badge>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {area.name}, {area.state}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={business.website} target="_blank" rel="noopener noreferrer">
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {area.description}
              </p>
              <div className="flex items-center space-x-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Service Today <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/business">
                    <Building2 className="mr-2 h-4 w-4" />
                    View Main Office
                  </Link>
                </Button>
                {business.emergencyService && (
                  <Badge variant="destructive" className="bg-green-600">
                    <Clock className="mr-1 h-3 w-3" />
                    24/7 Emergency Service
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Traffic</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{area.monthlyTraffic}</div>
              <p className="text-xs text-muted-foreground">Local visitors</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ranking Keywords</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{area.rankingKeywords}</div>
              <p className="text-xs text-muted-foreground">Local rankings</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Service Radius</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{area.serviceRadius}</div>
              <p className="text-xs text-muted-foreground">Coverage area</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customer Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{area.rating}</div>
              <p className="text-xs text-muted-foreground">({area.reviewCount} reviews)</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle>{business.industry} Services in {area.name}</CardTitle>
                <CardDescription>
                  Professional services offered by {business.name} in the {area.name} area
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

            {/* Local Keywords */}
            <Card>
              <CardHeader>
                <CardTitle>Local Search Terms</CardTitle>
                <CardDescription>
                  Common searches for {business.industry.toLowerCase()} services in {area.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {area.localKeywords.map((keyword) => (
                    <Badge key={keyword} variant="outline">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Area Articles */}
            {serviceAreaArticles.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Local Content for {area.name}</CardTitle>
                  <CardDescription>
                    Articles and resources specific to {area.name} customers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {serviceAreaArticles.map((article) => (
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

            {/* Area Information */}
            <Card>
              <CardHeader>
                <CardTitle>About {area.name}, {area.state}</CardTitle>
                <CardDescription>
                  Local area information and service details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {area.population && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Population:</span>
                    <span className="font-medium">{area.population.toLocaleString()}</span>
                  </div>
                )}
                {area.county && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">County:</span>
                    <span className="font-medium">{area.county}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service Radius:</span>
                  <span className="font-medium">{area.serviceRadius}</span>
                </div>
                {area.zipCodes && (
                  <div>
                    <span className="text-muted-foreground">Zip Codes Served:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {area.zipCodes.map((zip) => (
                        <Badge key={zip} variant="outline" className="text-xs">
                          {zip}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Headquarters Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5" />
                  <span>Main Office Location</span>
                </CardTitle>
                <CardDescription>
                  Primary business location for {business.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">{business.hq.address}</p>
                      <p className="text-sm text-muted-foreground">
                        {business.hq.city}, {business.hq.state} {business.hq.zipCode}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Serving {area.name} and surrounding areas within a {area.serviceRadius} radius
                  </div>
                  <Button variant="outline" asChild>
                    <Link href="/business">
                      View Complete Business Profile <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
                {area.localEmail && (
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{area.localEmail}</span>
                  </div>
                )}
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="font-medium">Service Area: {area.name}, {area.state}</div>
                    <div className="text-sm text-muted-foreground">
                      Headquarters: {business.hq.city}, {business.hq.state}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Service Hours</span>
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
                {business.emergencyService && (
                  <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-2 text-green-800">
                      <Shield className="h-4 w-4" />
                      <span className="font-medium">24/7 Emergency Service Available</span>
                    </div>
                  </div>
                )}
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
                          i < Math.floor(area.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xl font-bold">{area.rating}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on {area.reviewCount} customer reviews in {area.name}
                </p>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span>Certifications & Licenses</span>
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
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-muted rounded-lg p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Need {business.industry} in {area.name}?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contact {business.name} for professional {business.industry.toLowerCase()} services in the {area.name} area.
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
