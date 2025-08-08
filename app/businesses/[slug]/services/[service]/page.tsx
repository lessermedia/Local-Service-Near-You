import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Star, Phone, MapPin, Globe, Mail, CheckCircle, TrendingUp } from 'lucide-react'
import { getBusinessBySlug } from '@/lib/data'
import { formatPhoneNumber, CITY_TO_STATE_MAP } from '@/lib/utils'

interface BusinessServicePageProps {
  params: Promise<{ slug: string; service: string }>
}

export default async function BusinessServicePage({ params }: BusinessServicePageProps) {
  const { slug, service } = await params
  const business = getBusinessBySlug(slug)
  
  if (!business) {
    notFound()
  }

  // Convert service slug back to service name
  const serviceName = service
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/\b(Seo|Ppc|Crm|Sms|Ai|Cro|Roi)\b/gi, match => match.toUpperCase())

  // Find exact service match
  const matchingService = business.services.find(service => 
    service.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ') === 
    serviceName.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ')
  )

  if (!matchingService) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span>/</span>
          <Link href="/businesses" className="hover:text-gray-700">Businesses</Link>
          <span>/</span>
          <Link href={`/businesses/${business.slug}`} className="hover:text-gray-700">{business.name}</Link>
          <span>/</span>
          <span>{matchingService}</span>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <Link href={`/businesses/${business.slug}`}>
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {business.name}
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <Badge variant="secondary">{business.industry}</Badge>
                <Badge className="ml-2" variant="outline">{matchingService}</Badge>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {matchingService} by {business.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Professional {matchingService.toLowerCase()} services. {business.description}
              </p>
              <div className="flex items-center text-lg mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold ml-2">{business.rating}</span>
                <span className="text-gray-500 ml-1">({business.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Serving {business.serviceAreas.length} locations nationwide</span>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <div className="bg-gray-50 rounded-lg p-6 min-w-[300px]">
                <h3 className="font-semibold text-lg mb-4">Get {matchingService}</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-400 mr-3" />
                    <a href={`tel:${business.contact.phone}`} className="text-blue-600 hover:text-blue-800">
                      {formatPhoneNumber(business.contact.phone)}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-400 mr-3" />
                    <a href={`mailto:${business.contact.email}`} className="text-blue-600 hover:text-blue-800">
                      {business.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-gray-400 mr-3" />
                    <a href={business.contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      Visit Website
                    </a>
                  </div>
                </div>
                <div className="flex space-x-3 mt-6">
                  <Button className="flex-1" asChild>
                    <a href={`tel:${business.contact.phone}`}>Call Now</a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a href={business.contact.website} target="_blank" rel="noopener noreferrer">Get Quote</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Details */}
            <Card>
              <CardHeader>
                <CardTitle>{matchingService} Services</CardTitle>
                <CardDescription>
                  Professional {matchingService.toLowerCase()} solutions for your business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our expert {matchingService.toLowerCase()} services are designed to help your business succeed. 
                    With years of experience and a proven track record, we deliver results that matter.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Comprehensive Strategy</div>
                        <div className="text-sm text-gray-600">Tailored approach for your business goals</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Expert Implementation</div>
                        <div className="text-sm text-gray-600">Professional execution by certified specialists</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Ongoing Optimization</div>
                        <div className="text-sm text-gray-600">Continuous improvement for better results</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Detailed Reporting</div>
                        <div className="text-sm text-gray-600">Regular updates on performance and ROI</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                    <p className="text-sm text-gray-700">
                      Ready to get started with {matchingService.toLowerCase()}? 
                      <a href="https://lessermedia.com" target="_blank" rel="nofollow" className="text-blue-600 hover:text-blue-800 underline ml-1">
                        Contact Lesser Media
                      </a> today for a free consultation and custom strategy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Available Locations */}
            <Card>
              <CardHeader>
                <CardTitle>{matchingService} by Location</CardTitle>
                <CardDescription>
                  Select your city to see local {matchingService.toLowerCase()} services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-3">
                  {business.serviceAreas.slice(0, 16).map((area, index) => {
                    const areaState = CITY_TO_STATE_MAP[area] || 'Unknown'
                    const locationSlug = `${area.toLowerCase().replace(/\s+/g, '-')}-${areaState.toLowerCase().replace(/\s+/g, '-')}`
                    
                    return (
                      <Link 
                        key={index} 
                        href={`/businesses/${business.slug}/services/${service}/${locationSlug}`}
                        className="block p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors text-center"
                      >
                        <div className="font-medium text-gray-900 text-sm">{matchingService}</div>
                        <div className="text-xs text-gray-500">in {area}</div>
                      </Link>
                    )
                  })}
                </div>
                {business.serviceAreas.length > 16 && (
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">
                      And {business.serviceAreas.length - 16} more locations available.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Business Hours */}
            {business.businessHours && (
              <Card>
                <CardHeader>
                  <CardTitle>Service Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    {Object.entries(business.businessHours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="capitalize font-medium text-gray-700">{day}:</span>
                        <span className="text-gray-600">
                          {hours.closed ? 'Closed' : `${hours.open} - ${hours.close}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Related Services */}
            <Card>
              <CardHeader>
                <CardTitle>Related Services</CardTitle>
                <CardDescription>
                  Other services we provide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {business.services.filter(service => service !== matchingService).slice(0, 8).map((service, index) => {
                    const serviceSlug = service.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')
                    
                    return (
                      <Link 
                        key={index} 
                        href={`/businesses/${business.slug}/services/${serviceSlug}`}
                        className="block text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {service}
                      </Link>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
