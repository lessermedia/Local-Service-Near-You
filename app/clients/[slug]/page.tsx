import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, MapPin, Star, ExternalLink, Phone, Mail, Clock, Award } from 'lucide-react'
import { getClientBySlug, getArticlesByClient, getServiceAreaCitationsByClient } from '@/lib/data'

interface ClientPageProps {
  params: {
    slug: string
  }
}

export default function ClientPage({ params }: ClientPageProps) {
  const client = getClientBySlug(params.slug)
  
  if (!client) {
    notFound()
  }

  const clientArticles = getArticlesByClient(client.slug)

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/clients" className="hover:text-foreground">Clients</Link>
            <span>/</span>
            <span>{client.name}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{client.name}</h1>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">{client.industry}</Badge>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {client.location}
                </div>
                {client.website && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={client.website} target="_blank" rel="noopener noreferrer">
                      Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {client.description}
              </p>
            </div>
            {client.image && (
              <div className="w-full md:w-96 aspect-video overflow-hidden rounded-lg">
                <img
                  src={client.image || "/placeholder.svg"}
                  alt={client.name}
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
              <CardTitle className="text-sm font-medium">Articles Published</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{client.articlesCount}</div>
              <p className="text-xs text-muted-foreground">SEO-optimized content</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Traffic</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{client.monthlyTraffic}</div>
              <p className="text-xs text-muted-foreground">Organic visitors</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ranking Keywords</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{client.rankingKeywords}</div>
              <p className="text-xs text-muted-foreground">First page rankings</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Client Since</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">
                {new Date(client.joinDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </div>
              <p className="text-xs text-muted-foreground">Partnership started</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle>Service Areas</CardTitle>
                <CardDescription>
                  Locations where {client.name} provides services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {client.serviceAreas.map((area) => (
                    <Badge key={area} variant="outline">
                      {area}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card>
              <CardHeader>
                <CardTitle>Specialties</CardTitle>
                <CardDescription>
                  Core services and areas of expertise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 md:grid-cols-2">
                  {client.specialties.map((specialty) => (
                    <div key={specialty} className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-blue-600 rounded-full" />
                      <span>{specialty}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Area Citations */}
            {client.subscriptionActive && client.serviceAreaCitations && (
              <Card>
                <CardHeader>
                  <CardTitle>Service Area Citations</CardTitle>
                  <CardDescription>
                    Dedicated listings for each service area served by {client.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {getServiceAreaCitationsByClient(client.slug).map((citation) => (
                      <div key={citation.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <h3 className="font-semibold">{citation.serviceArea}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {citation.description}
                            </p>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                              <span>{citation.monthlyTraffic} traffic</span>
                              <span>{citation.rankingKeywords} keywords</span>
                              <div className="flex items-center">
                                <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                                <span>{citation.rating}</span>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/service-areas/${citation.slug}`}>View</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  {getServiceAreaCitationsByClient(client.slug).length === 0 && (
                    <p className="text-muted-foreground text-center py-4">
                      No service area citations available
                    </p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Articles */}
            {clientArticles.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Published Articles</CardTitle>
                  <CardDescription>
                    SEO content created for {client.name}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {clientArticles.map((article) => (
                    <div key={article.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="font-semibold line-clamp-2">{article.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>{article.date}</span>
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
                {client.phone && (
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{client.phone}</span>
                  </div>
                )}
                {client.email && (
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{client.email}</span>
                  </div>
                )}
                {client.address && (
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>{client.address}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Hours */}
            {client.hours && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(client.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between text-sm">
                        <span className="font-medium">{day}</span>
                        <span className="text-muted-foreground">{hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Rating */}
            {client.rating && (
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
                            i < Math.floor(client.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xl font-bold">{client.rating}</span>
                  </div>
                  {client.reviews && (
                    <p className="text-sm text-muted-foreground">
                      Based on {client.reviews} customer reviews
                    </p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Certifications */}
            {client.certifications && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-4 w-4" />
                    <span>Certifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {client.certifications.map((cert) => (
                      <div key={cert} className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-green-600 rounded-full" />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-muted rounded-lg p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Want Results Like {client.name}?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how our programmatic SEO and backlink solutions can transform your local service business.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
