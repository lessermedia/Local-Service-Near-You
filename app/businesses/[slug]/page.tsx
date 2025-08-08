import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { MapPin, Phone, Mail, Globe, Star, Clock, CheckCircle, Calendar, Users } from 'lucide-react'
import { getBusinessBySlug, getArticlesByBusiness } from '@/lib/data'
import { formatPhoneNumber, formatDate, getServiceAreaSlug } from '@/lib/utils'

interface BusinessPageProps {
  params: {
    slug: string
  }
}

export default function BusinessPage({ params }: BusinessPageProps) {
  const business = getBusinessBySlug(params.slug)
  
  if (!business) {
    notFound()
  }

  const businessArticles = getArticlesByBusiness(business.id)

  const formatBusinessHours = (hours: any) => {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    
    return days.map((day, index) => {
      const dayHours = hours[day]
      return {
        day: dayNames[index],
        hours: dayHours.closed ? 'Closed' : `${dayHours.open} - ${dayHours.close}`
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{business.name}</h1>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{business.address.street}, {business.address.city}, {business.address.state} {business.address.zipCode}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-lg font-semibold ml-1">{business.rating}</span>
                      <span className="text-gray-600 ml-1">({business.reviewCount} reviews)</span>
                    </div>
                    {business.emergencyService && (
                      <Badge variant="destructive">24/7 Emergency Service</Badge>
                    )}
                  </div>
                </div>
                <Badge variant="secondary" className="text-sm">{business.industry}</Badge>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {business.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {business.certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" className="flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Contact Card */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-semibold">{formatPhoneNumber(business.contact.phone)}</p>
                      <p className="text-sm text-gray-600">Call now for service</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-semibold">{business.contact.email}</p>
                      <p className="text-sm text-gray-600">Send us an email</p>
                    </div>
                  </div>
                  
                  {business.contact.website && (
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 text-gray-400 mr-3" />
                      <div>
                        <a href={business.contact.website} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">
                          Visit Website
                        </a>
                        <p className="text-sm text-gray-600">Learn more online</p>
                      </div>
                    </div>
                  )}
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm font-medium">Est. {business.yearEstablished}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm">{business.employeeCount} employees</span>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle>Our Services</CardTitle>
                <CardDescription>Professional services we provide - Click to view detailed service pages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {business.services.map((service, index) => {
                    const serviceSlug = service.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')
                    
                    return (
                      <Link key={index} href={`/businesses/${business.slug}/services/${serviceSlug}`}>
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-300 border border-gray-200 transition-colors cursor-pointer">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                          <span className="font-medium hover:text-blue-700">{service}</span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Click on any service to see detailed information and local availability
                </p>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle>Service Areas</CardTitle>
                <CardDescription>Local citation pages for each area we serve</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {business.serviceAreas.map((area, index) => {
                    // Create location slug using proper city-state mapping
                    const areaSlug = getServiceAreaSlug(area)
                    
                    return (
                      <Link key={index} href={`/businesses/${business.slug}/locations/${areaSlug}`}>
                        <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-300 border border-gray-200 transition-colors cursor-pointer text-center">
                          <MapPin className="w-4 h-4 mx-auto mb-2 text-gray-600" />
                          <div className="font-medium text-xs hover:text-blue-700">{business.name}</div>
                          <div className="text-xs text-gray-500">in {area}</div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  We serve <strong>{business.serviceAreas.length} locations</strong> across the United States. 
                  Click on any location to see our local citation page for that area with specific services and contact information.
                </p>
              </CardContent>
            </Card>

            {/* Articles */}
            {businessArticles.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Expert Articles</CardTitle>
                  <CardDescription>Helpful tips and guides from our experts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {businessArticles.map((article) => (
                      <div key={article.id} className="border-l-4 border-blue-500 pl-4">
                        <Link href={`/articles/${article.slug}`} className="block hover:bg-gray-50 p-2 rounded">
                          <h4 className="font-semibold text-lg mb-1 hover:text-blue-600">
                            {article.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-2">{article.excerpt}</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <span>{formatDate(article.publishedAt)}</span>
                            <span className="mx-2">•</span>
                            <span>{article.readTime}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {formatBusinessHours(business.businessHours).map((day, index) => (
                    <div key={index} className="flex justify-between items-center py-1">
                      <span className="font-medium">{day.day}</span>
                      <span className={day.hours === 'Closed' ? 'text-red-600' : 'text-gray-600'}>
                        {day.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Years in Business</span>
                  <span className="font-semibold">{new Date().getFullYear() - business.yearEstablished}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Team Size</span>
                  <span className="font-semibold">{business.employeeCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Emergency Service</span>
                  <span className={`font-semibold ${business.emergencyService ? 'text-green-600' : 'text-red-600'}`}>
                    {business.emergencyService ? 'Available' : 'Not Available'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Areas</span>
                  <span className="font-semibold">{business.serviceAreas.length} cities</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
