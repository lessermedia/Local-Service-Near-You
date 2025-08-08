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
        {/* Breadcrumbs, header, main content, sidebar, etc. */}
        {/* ...existing code... */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card>
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
      </div>
    </>
  );
}