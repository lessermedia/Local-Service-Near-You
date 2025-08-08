import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, User, ArrowRight } from 'lucide-react'
import { getRecentArticles, locations } from '@/lib/data'
import { formatDate } from '@/lib/utils'

export default function LocalGuidesPage() {
  const recentArticles = getRecentArticles(12)
  
  // Group articles by location/region for local guides
  const articlesByRegion = recentArticles.reduce((acc: any, article) => {
    // Extract location from article content or use a default region
    const region = article.tags.find(tag => 
      locations.some(loc => loc.city.toLowerCase() === tag.toLowerCase())
    ) || 'General'
    
    if (!acc[region]) {
      acc[region] = []
    }
    acc[region].push(article)
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Local Service Guides</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice and local insights from trusted service providers in your area. 
            Get tips, guides, and recommendations from professionals who know your community.
          </p>
        </div>

        {/* Featured Locations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Service Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {locations.slice(0, 12).map((location, index) => (
              <Link 
                key={index}
                href={`/local-guides?location=${location.city}`}
                className="group"
              >
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-sm group-hover:text-blue-600">
                      {location.city}
                    </h3>
                    <p className="text-xs text-gray-500">{location.state}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Articles by Category */}
        <div className="space-y-12">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Latest Expert Guides</h2>
              <Link href="/articles">
                <Button variant="outline">
                  View All Articles <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentArticles.slice(0, 9).map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <img 
                      src={article.image || "/placeholder.svg"} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <span className="text-sm text-gray-500">
                        {formatDate(article.publishedAt)}
                      </span>
                    </div>
                    <Link href={`/articles/${article.slug}`}>
                      <Button variant="outline" className="w-full">
                        Read Guide <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Service Categories */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Service Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Plumbing', icon: '🔧', count: 15, color: 'bg-blue-100 text-blue-800' },
                { name: 'HVAC', icon: '❄️', count: 12, color: 'bg-green-100 text-green-800' },
                { name: 'Electrical', icon: '⚡', count: 8, color: 'bg-yellow-100 text-yellow-800' },
                { name: 'Home Maintenance', icon: '🏠', count: 20, color: 'bg-purple-100 text-purple-800' }
              ].map((category, index) => (
                <Link 
                  key={index}
                  href={`/articles?category=${category.name}`}
                  className="group"
                >
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">{category.icon}</div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600">
                        {category.name}
                      </h3>
                      <Badge variant="secondary" className={category.color}>
                        {category.count} guides
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Local Tips Section */}
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Local Service Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Seasonal Maintenance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Prepare your HVAC system for extreme weather</li>
                  <li>• Winterize plumbing to prevent frozen pipes</li>
                  <li>• Schedule regular electrical safety inspections</li>
                  <li>• Maintain your home's exterior year-round</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Emergency Preparedness</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Know your local emergency service providers</li>
                  <li>• Keep important contact numbers handy</li>
                  <li>• Understand your home's main shutoffs</li>
                  <li>• Have a basic emergency toolkit ready</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
