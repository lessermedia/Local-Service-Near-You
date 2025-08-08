import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Star, Phone, MapPin, Globe, Mail, CheckCircle, Clock } from 'lucide-react';
import { getBusinessBySlug } from '@/lib/data';
import { formatPhoneNumber, CITY_TO_STATE_MAP } from '@/lib/utils';


export async function generateMetadata({ params }: { params: Promise<{ slug: string; location: string }> }): Promise<Metadata> {
  const { slug, location } = await params;
  const business = getBusinessBySlug(slug);
  if (!business) return {};

  const locationParts = location.split('-');
  let city = '';
  let state = '';
  for (let i = 1; i <= locationParts.length; i++) {
    const testCity = locationParts.slice(0, i)
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
    if (CITY_TO_STATE_MAP[testCity]) {
      city = testCity;
      state = CITY_TO_STATE_MAP[testCity];
      break;
    }
  }
  if (!business.serviceAreas.includes(city)) return {};

  const title = `${business.name} in ${city}, ${state} | ${business.industry} Services`;
  const description = `Professional ${business.industry.toLowerCase()} services in ${city}, ${state}. Local expertise, proven results, and trusted by businesses in the ${city} area.`;
  const url = `https://localservicenear.you/businesses/${business.slug}/locations/${location}`;
  const image = '/placeholder-logo.png';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [image],
      type: 'website',
      siteName: business.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}


interface BusinessLocationPageProps {
  params: Promise<{ slug: string; location: string }>;
}

export default async function BusinessLocationPage({ params }: BusinessLocationPageProps) {
  const { slug, location } = await params;
  const business = getBusinessBySlug(slug);
  if (!business) {
    notFound();
  }
  const locationParts = location.split('-');
  let city = '';
  let state = '';
  for (let i = 1; i <= locationParts.length; i++) {
    const testCity = locationParts.slice(0, i)
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
    if (CITY_TO_STATE_MAP[testCity]) {
      city = testCity;
      state = CITY_TO_STATE_MAP[testCity];
      break;
    }
  }
  if (!business.serviceAreas.includes(city)) {
    notFound();
  }
  const logo = '/placeholder-logo.png';
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    image: logo,
    telephone: business.contact.phone,
    email: business.contact.email,
    url: business.contact.website,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: state,
      addressCountry: 'US',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
    },
    openingHoursSpecification: business.businessHours
      ? Object.entries(business.businessHours).map(([day, hours]) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: day,
          opens: hours.closed ? undefined : hours.open,
          closes: hours.closed ? undefined : hours.close,
        }))
      : undefined,
    areaServed: city,
    description: business.description,
  };
  return (
    <>
      <Script id="ld-json-location" type="application/ld+json">
        {JSON.stringify(locationSchema)}
      </Script>
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
            <span>{city}, {state}</span>
          </div>

          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Badge variant="secondary">{business.industry}</Badge>
                  <Badge className="ml-2" variant="outline">{city}</Badge>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {business.name} in {city}, {state}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Professional {business.industry.toLowerCase()} services in {city}, {state}. {business.description}
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
                  <h3 className="font-semibold text-lg mb-4">Contact {business.name}</h3>
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
              {/* Services in this location */}
              <Card>
                <CardHeader>
                  <CardTitle>Services Offered in {city}</CardTitle>
                  <CardDescription>
                    Professional {business.industry.toLowerCase()} services available in {city}, {state}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {business.services.map((service, index) => {
                      const serviceSlug = service.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
                      const locationSlug = `${city.toLowerCase().replace(/\s+/g, '-')}-${state.toLowerCase().replace(/\s+/g, '-')}`;
                      return (
                        <Link key={index} href={`/businesses/${business.slug}/services/${serviceSlug}/${locationSlug}`}>
                          <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-300 border border-gray-200 transition-colors cursor-pointer">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                            <span className="font-medium hover:text-blue-700">{service}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Click on any service to see detailed information and local availability in {city}.
                  </p>
                </CardContent>
              </Card>

              {/* Other Locations */}
              <Card>
                <CardHeader>
                  <CardTitle>Other Service Areas</CardTitle>
                  <CardDescription>
                    We also serve these locations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {business.serviceAreas.filter(area => area !== city).slice(0, 8).map((area, index) => {
                      const areaState = CITY_TO_STATE_MAP[area] || 'Unknown';
                      const locationSlug = `${area.toLowerCase().replace(/\s+/g, '-')}-${areaState.toLowerCase().replace(/\s+/g, '-')}`;
                      return (
                        <Link 
                          key={index} 
                          href={`/businesses/${business.slug}/locations/${locationSlug}`}
                          className="block text-sm text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {business.name} in {area}, {areaState}
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
                    <CardTitle>Business Hours</CardTitle>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}