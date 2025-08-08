'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowRight, Search, MapPin, Star, TrendingUp, Users, Building2 } from 'lucide-react'
import { serviceAreas, business, stats } from '@/lib/data'

export default function ServiceAreasPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedState, setSelectedState] = useState('All States')

  const states = ['All States', ...Array.from(new Set(serviceAreas.map(area => area.state)))]

  const filteredAreas = serviceAreas.filter(area => {
    const matchesSearch = area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         area.state.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesState = selectedState === 'All States' || area.state === selectedState
    
    return matchesSearch && matchesState
  })

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span>Service Areas</span>
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {business.name} Service Areas
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional {business.industry.toLowerCase()} services available in {serviceAreas.length}+ locations. 
              Find expert service in your area with local expertise and nationwide quality standards.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Service Areas</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{serviceAreas.length}</div>
              <p className="text-xs text-muted-foreground">Locations served</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">States Covered</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{states.length - 1}</div>
              <p className="text-xs text-muted-foreground">State coverage</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Traffic</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{Math.round(stats.monthlyTraffic / 1000)}K</div>
              <p className="text-xs text-muted-foreground">Combined traffic</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">People Served</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">
                {Math.round(serviceAreas.reduce((total, area) => total + (area.population || 0), 0) / 1000000)}M+
              </div>
              <p className="text-xs text-muted-foreground">Population served</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
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

        {/* Results Count */}
        <div className="text-sm text-muted-foreground">
          Showing {filteredAreas.length} of {serviceAreas.length} service areas
        </div>

        {/* Service Areas Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAreas.map((area) => (
            <Card key={area.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      {area.name}, {area.state}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{business.industry}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {area.county}
                      </div>
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
                    <div className="text-lg font-bold text-blue-600">{area.monthlyTraffic}</div>
                    <div className="text-xs text-muted-foreground">Traffic</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">{area.rankingKeywords}</div>
                    <div className="text-xs text-muted-foreground">Keywords</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-lg font-bold text-purple-600">{area.rating}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{area.reviewCount} reviews</div>
                  </div>
                </div>
                
                {area.population && (
                  <div className="text-center text-sm text-muted-foreground">
                    Serving {area.population.toLocaleString()} residents
                  </div>
                )}
                
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
            <h3 className="text-lg font-semibold">No service areas found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-muted rounded-lg p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Don't See Your Area?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're constantly expanding our service areas. Contact us to see if we can serve your location.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/business">View Main Office</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
