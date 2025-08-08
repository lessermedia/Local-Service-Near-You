
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Star, Phone, MapPin, Globe, Mail, CheckCircle } from 'lucide-react';
import { getBusinessBySlug } from '@/lib/data';
import { formatPhoneNumber, CITY_TO_STATE_MAP } from '@/lib/utils';

interface BusinessServiceLocationPageProps {
  params: Promise<{ slug: string; service: string; location: string }>;
}

export default async function BusinessServiceLocationPage({ params }: BusinessServiceLocationPageProps) {
  const { slug, service, location } = await params;
  const business = getBusinessBySlug(slug);
  if (!business) {
    notFound();
  }
  // Convert service slug back to service name
  const serviceName = service
    .split('-')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/\b(Seo|Ppc|Crm|Sms|Ai|Cro|Roi)\b/gi, (match: string) => match.toUpperCase());
  // Parse location from URL slug
  const locationParts = location.split('-');
  let city = '';
  let state = '';
  // Try different combinations to find the correct city
  for (let i = 1; i <= locationParts.length; i++) {
    const testCity = locationParts.slice(0, i)
      .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
    if (CITY_TO_STATE_MAP[testCity]) {
      city = testCity;
      state = CITY_TO_STATE_MAP[testCity];
      break;
    }
  }
  // Find exact service match
  const matchingService = business.services.find((service: string) => 
    service.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ') === 
    serviceName.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ')
  );
  // Verify business serves this location and service
  if (!matchingService || !business.serviceAreas.includes(city)) {
    notFound();
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
          <Link href={`/businesses/${business.slug}/services/${service}`} className="hover:text-gray-700">{matchingService}</Link>
          <span>/</span>
          <span>{city}, {state}</span>
        </div>
        {/* Back Button */}
        <div className="mb-6">
          <Link href={`/businesses/${business.slug}/services/${service}`}>
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {matchingService} Services
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
                <Badge className="ml-2" variant="outline">{city}</Badge>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {matchingService} in {city}, {state}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Professional {matchingService.toLowerCase()} services in {city}, {state} by {business.name}. 
                Expert solutions tailored for local businesses.
              </p>
              <div className="flex items-center text-lg mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold ml-2">{business.rating}</span>
                <span className="text-gray-500 ml-1">({business.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Serving {city}, {state} and surrounding areas</span>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <div className="bg-gray-50 rounded-lg p-6 min-w-[300px]">
                <h3 className="font-semibold text-lg mb-4">Get {matchingService} in {city}</h3>
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
            {/* Local Service Details */}
            <Card>
              <CardHeader>
                <CardTitle>{matchingService} Services in {city}, {state}</CardTitle>
                <CardDescription>
                  Local {matchingService.toLowerCase()} expertise for {city} businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Looking for expert {matchingService.toLowerCase()} in {city}, {state}? {business.name} provides 
                    comprehensive {matchingService.toLowerCase()} services specifically designed for businesses in the {city} area. 
                    Our local expertise and proven track record make us the trusted choice for {matchingService.toLowerCase()} in {city}.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Our {matchingService} in {city}?</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Local Market Knowledge</div>
                        <div className="text-sm text-gray-600">Deep understanding of the {city} market</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Proven Local Results</div>
                        <div className="text-sm text-gray-600">Successful campaigns for {city} businesses</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Personalized Service</div>
                        <div className="text-sm text-gray-600">Dedicated support for {city} clients</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Fast Response</div>
                        <div className="text-sm text-gray-600">Quick turnaround for {city} projects</div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our {matchingService} Process</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-0.5">1</div>
                      <div>
                        <div className="font-medium text-gray-900">Initial Consultation</div>
                        <div className="text-sm text-gray-600">We assess your {city} business needs and goals</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-0.5">2</div>
                      <div>
                        <div className="font-medium text-gray-900">Strategy Development</div>
                        <div className="text-sm text-gray-600">Custom {matchingService.toLowerCase()} strategy for the {city} market</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-0.5">3</div>
                      <div>
                        <div className="font-medium text-gray-900">Implementation</div>
                        <div className="text-sm text-gray-600">Execute the {matchingService.toLowerCase()} plan with precision</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-0.5">4</div>
                      <div>
                        <div className="font-medium text-gray-900">Monitoring & Optimization</div>
                        <div className="text-sm text-gray-600">Continuous improvement and performance tracking</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                    <p className="text-sm text-gray-700">
                      Ready to get started with {matchingService.toLowerCase()} in {city}, {state}? 
                      <a href="https://lessermedia.com" target="_blank" rel="nofollow" className="text-blue-600 hover:text-blue-800 underline ml-1">
                        Contact {business.name}
                      </a> today for a free consultation tailored to your {city} business needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle>Other {matchingService} Locations</CardTitle>
                <CardDescription>
                  We also provide {matchingService.toLowerCase()} services in these areas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-3">
                  {business.serviceAreas.filter(area => area !== city).slice(0, 9).map((area, index) => {
                    const areaState = CITY_TO_STATE_MAP[area] || 'Unknown';
                    const locationSlug = `${area.toLowerCase().replace(/\s+/g, '-')}-${areaState.toLowerCase().replace(/\s+/g, '-')}`;
                    return (
                      <Link 
                        key={index} 
                        href={`/businesses/${business.slug}/services/${service}/${locationSlug}`}
                        className="block p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors text-center"
                      >
                        <div className="font-medium text-gray-900 text-sm">{matchingService}</div>
                        <div className="text-xs text-gray-500">in {area}</div>
                      </Link>
                    );
                  })}
                </div>
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
            {/* Other Services in This Location */}
            <Card>
              <CardHeader>
                <CardTitle>Other Services in {city}</CardTitle>
                <CardDescription>
                  Additional services we provide in {city}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {business.services.filter(service => service !== matchingService).slice(0, 6).map((service, index) => {
                    const serviceSlug = service.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
                    const locationSlug = `${city.toLowerCase().replace(/\s+/g, '-')}-${state.toLowerCase().replace(/\s+/g, '-')}`;
                    return (
                      <Link 
                        key={index} 
                        href={`/businesses/${business.slug}/services/${serviceSlug}/${locationSlug}`}
                        className="block text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {service} in {city}
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

