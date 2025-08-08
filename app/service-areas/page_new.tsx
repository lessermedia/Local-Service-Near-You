'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowRight, Search, MapPin, Star, TrendingUp, Users, Building2 } from 'lucide-react'
import { businesses } from '@/lib/data'

interface ServiceAreaData {
  id: string
  slug: string
  name: string
  city: string
  state: string
  businesses: any[]
  industries: string[]
  totalBusinesses: number
  totalReviews: number
  averageRating: number
  description: string
}

export default function ServiceAreasPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedState, setSelectedState] = useState('All States')

  // Create service areas from business service areas
  const allServiceAreas: ServiceAreaData[] = []
  
  // Add service areas from businesses
  businesses.forEach(business => {
    business.serviceAreas.forEach(area => {
      const existingArea = allServiceAreas.find(serviceArea => 
        serviceArea.city === area && serviceArea.state === business.headquarters.state
      )
      
      if (!existingArea) {
        allServiceAreas.push({
          id: `${area.toLowerCase().replace(/\s+/g, '-')}-${business.headquarters.state.toLowerCase()}`,
          slug: `${area.toLowerCase().replace(/\s+/g, '-')}-${business.headquarters.state.toLowerCase().replace(/\s+/g, '-')}`,
          name: area,
          city: area,
          state: business.headquarters.state,
          businesses: [business],
          industries: [business.industry],
          totalBusinesses: 1,
          totalReviews: business.reviewCount,
          averageRating: business.rating,
          description: `Find trusted local service providers in ${area}, ${business.headquarters.state}. Connect with verified professionals for all your home and business needs.`
        })
      } else {
        // Add business to existing area
        existingArea.businesses.push(business)
        if (!existingArea.industries.includes(business.industry)) {
          existingArea.industries.push(business.industry)
        }
        existingArea.totalBusinesses++
        existingArea.totalReviews += business.reviewCount
        existingArea.averageRating = (existingArea.averageRating + business.rating) / 2
      }
    })
  })

  // Get unique states from service areas
  const states = ['All States', ...new Set(allServiceAreas.map(area => area.state))]

  const filteredAreas = allServiceAreas.filter(area => {
    const matchesSearch = area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         area.state.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesState = selectedState === 'All States' || area.state === selectedState
    
    return matchesSearch && matchesState
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4 justify-center">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <span>Service Areas</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Local Service Areas
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Find trusted local service providers in your area. We serve {allServiceAreas.length}+ locations 
            across {states.length - 1} states with verified professionals ready to help.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Service Areas</CardTitle>
              <MapPin className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{allServiceAreas.length}</div>
              <p className="text-xs text-gray-600">Locations served</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">States Covered</CardTitle>
              <Building2 className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{states.length - 1}</div>
              <p className="text-xs text-gray-600">State coverage</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Businesses</CardTitle>
              <TrendingUp className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">
                {allServiceAreas.reduce((sum, area) => sum + area.totalBusinesses, 0)}
              </div>
              <p className="text-xs text-gray-600">Service providers</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customer Reviews</CardTitle>
              <Users className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">
                {allServiceAreas.reduce((sum, area) => sum + area.totalReviews, 0)}
              </div>
              <p className="text-xs text-gray-600">Total reviews</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search service areas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-gray-600 mb-6">
          Showing {filteredAreas.length} of {allServiceAreas.length} service areas
        </div>

        {/* Service Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAreas.map((area) => (
            <Card key={area.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      {area.name}, {area.state}
                    </CardTitle>
                    <div className="flex flex-wrap gap-1">
                      {area.industries.slice(0, 2).map((industry: string) => (
                        <Badge key={industry} variant="secondary" className="text-xs">
                          {industry}
                        </Badge>
                      ))}
                      {area.industries.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{area.industries.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <CardDescription className="line-clamp-3">
                  {area.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-blue-600">{area.totalBusinesses}</div>
                    <div className="text-xs text-gray-600">Businesses</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">{area.industries.length}</div>
                    <div className="text-xs text-gray-600">Industries</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-lg font-bold text-purple-600">
                        {area.averageRating.toFixed(1)}
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">{area.totalReviews} reviews</div>
                  </div>
                </div>
                
                <Button className="w-full" asChild>
                  <Link href={`/service-areas/${area.slug}`}>
                    View Service Area <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredAreas.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No service areas found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or browse all areas.
            </p>
            <Button onClick={() => {
              setSearchTerm('')
              setSelectedState('All States')
            }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Area?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're constantly expanding our service areas. Contact us to see if we can serve your location or list your business to join our network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/list-your-business">List Your Business</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
