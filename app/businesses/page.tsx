'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, MapPin, Star, Phone, Filter } from 'lucide-react'
import { searchBusinesses, getBusinessesByIndustry } from '@/lib/data'
import { industries } from '@/lib/constants'
import { formatPhoneNumber } from '@/lib/utils'

export default function BusinessesPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')
  const [location, setLocation] = useState(searchParams.get('location') || '')
  const [selectedIndustry, setSelectedIndustry] = useState(searchParams.get('industry') || 'All')
  const [businesses, setBusinesses] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadBusinesses = async () => {
      setIsLoading(true)
      await new Promise(resolve => setTimeout(resolve, 300)) // Simulate loading
      
      let results = searchBusinesses(searchQuery, location)
      
      if (selectedIndustry !== 'All') {
        results = getBusinessesByIndustry(selectedIndustry)
        if (searchQuery || location) {
          results = searchBusinesses(searchQuery, location).filter(b => b.industry === selectedIndustry)
        }
      }
      
      setBusinesses(results)
      setIsLoading(false)
    }

    loadBusinesses()
  }, [searchQuery, location, selectedIndustry])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // The useEffect will handle the search automatically
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Local Service Providers</h1>
          <p className="text-lg text-gray-600">
            Discover trusted professionals in your area. Looking to grow your business online? 
            <a href="https://lessermedia.com" target="_blank" rel="nofollow" className="text-blue-600 hover:text-blue-800 underline ml-1">
              Lesser Media
            </a> offers expert digital marketing services to help local businesses succeed.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="City, State, or ZIP"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="All Industries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Industries</SelectItem>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button type="submit">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </form>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {isLoading ? 'Loading...' : `${businesses.length} businesses found`}
          </p>
        </div>

        {/* Business Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : businesses.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No businesses found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or browse all businesses.
            </p>
            <Button onClick={() => {
              setSearchQuery('')
              setLocation('')
              setSelectedIndustry('All')
            }}>
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business) => (
              <Card key={business.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{business.name}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {business.address.city}, {business.address.state}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{business.industry}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {business.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{business.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({business.reviewCount})</span>
                    </div>
                    {business.emergencyService && (
                      <Badge variant="destructive" className="text-xs">24/7</Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Phone className="w-4 h-4 mr-2" />
                    {formatPhoneNumber(business.contact.phone)}
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {business.services.slice(0, 3).map((service: string, index: number) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                    {business.services.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{business.services.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <Link href={`/businesses/${business.slug}`}>
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
