import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Star, Phone, Clock, Building2, TrendingUp, Users, Search } from 'lucide-react';
import { searchBusinesses, articles } from '@/lib/data';
import { formatPhoneNumber, CITY_TO_STATE_MAP } from '@/lib/utils';

interface ServiceAreaPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const { slug } = await params;
  const slugParts = slug.split('-');
  let city = '';
  let state = '';
  for (let i = 1; i <= slugParts.length; i++) {
    const testCity = slugParts.slice(0, i)
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
    if (CITY_TO_STATE_MAP[testCity]) {
      city = testCity;
      state = CITY_TO_STATE_MAP[testCity];
      break;
    }
  }
  if (!city) {
    city = slugParts.slice(0, -1).map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    state = slugParts[slugParts.length - 1].charAt(0).toUpperCase() + slugParts[slugParts.length - 1].slice(1);
  }
  const areaBusinesses = searchBusinesses('', city);
  const relevantArticles = articles.filter(article => 
    article.title.toLowerCase().includes(city.toLowerCase()) ||
    article.content.toLowerCase().includes(city.toLowerCase()) ||
    article.tags.includes(city.toLowerCase()) ||
    article.category === 'Home Maintenance' ||
    article.category === 'HVAC' ||
    article.category === 'Safety'
  ).slice(0, 6);
  if (areaBusinesses.length === 0) {
    notFound();
  }
  const industries = [...new Set(areaBusinesses.map(business => business.industry))];
  const totalReviews = areaBusinesses.reduce((sum, business) => sum + business.reviewCount, 0);
  const averageRating = areaBusinesses.reduce((sum, business) => sum + (business.rating * business.reviewCount), 0) / totalReviews || 0;

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumbs */}
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:underline">Home</Link> / 
        <Link href="/service-areas" className="hover:underline">Service Areas</Link> / 
        {city}, {state}
      </nav>
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Local Services in {city}, {state}</h1>
        <p className="text-muted-foreground mb-6">
          Find trusted local service providers in {city}. Connect with verified professionals for all your home and business needs.
          For comprehensive <Link href="https://lessermedia.com" className="text-primary hover:underline">digital marketing services</Link> to grow your local business, visit Lesser Media.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          {industries.map((industry) => (
            <Badge key={industry} variant="secondary" className="text-sm">
              {industry}
            </Badge>
          ))}
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Businesses</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{areaBusinesses.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{averageRating.toFixed(1)}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalReviews}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Industries</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{industries.length}</div>
            </CardContent>
          </Card>
        </div>
      </header>

      {/* Search Bar */}
      <Card className="mb-12">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input 
                type="text"
                placeholder={`Search services in ${city}...`}
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button className="md:w-auto">Search</Button>
          </div>
        </CardContent>
      </Card>

      {/* Businesses List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Service Providers in {city}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areaBusinesses.map((business) => (
            <Card key={business.slug} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-1">{business.name}</CardTitle>
                    <Badge variant="secondary" className="mb-2">{business.industry}</Badge>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold">{business.rating}</span>
                    <span className="text-sm text-muted-foreground ml-1">({business.reviewCount})</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">{business.description}</p>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Serving {city} and surrounding areas
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {formatPhoneNumber(business.contact.phone)}
                  </div>
                  {/* Removed yearsInBusiness property, not present in Business type */}
                </div>
                <Button variant="outline" asChild className="w-full">
                  <Link href={`/businesses/${business.slug}/locations/${slug}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Articles Section */}
      {relevantArticles.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Helpful Articles for {city} Residents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relevantArticles.map((article) => (
              <Card key={article.slug}>
                <CardHeader>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  {/* Removed date property, not present in Article type */}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3 mb-4">{article.content}</p>
                  <Button variant="ghost" asChild>
                    <Link href={`/articles/${article.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Sidebar and Extra Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
        <aside className="space-y-6 lg:col-span-1">
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
                  const industryBusinesses = areaBusinesses.filter(b => b.industry === industry);
                  return (
                    <div key={industry} className="flex justify-between items-center">
                      <span className="text-sm font-medium">{industry}</span>
                      <Badge variant="outline" className="text-xs">
                        {industryBusinesses.length} {industryBusinesses.length === 1 ? 'provider' : 'providers'}
                      </Badge>
                    </div>
                  );
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
        </aside>
      </div>

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
  );
}