'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { ArrowRight, MapPin, TrendingUp, Users, Star, ExternalLink } from 'lucide-react'
import { clients, industries, locations } from '@/lib/data'

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries')
  const [selectedLocation, setSelectedLocation] = useState('All Locations')

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesIndustry = selectedIndustry === 'All Industries' || client.industry === selectedIndustry
    const matchesLocation = selectedLocation === 'All Locations' || client.location === selectedLocation
    
    return matchesSearch && matchesIndustry && matchesLocation
  })

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Our Success Stories</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Discover how local service businesses across the United States are dominating their markets with our programmatic SEO and backlink solutions.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex-1">
            <Input
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <div className="flex gap-4">
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-muted-foreground">
          Showing {filteredClients.length} of {clients.length} clients
        </div>

        {/* Client Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredClients.map((client) => (
            <Card key={client.slug} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      {client.name}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{client.industry}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {client.location}
                      </div>
                    </div>
                  </div>
                  {client.website && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={client.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
                <CardDescription className="line-clamp-3">
                  {client.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{client.articlesCount}</div>
                    <div className="text-xs text-muted-foreground">Articles</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{client.monthlyTraffic}</div>
                    <div className="text-xs text-muted-foreground">Traffic</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{client.rankingKeywords}</div>
                    <div className="text-xs text-muted-foreground">Keywords</div>
                  </div>
                </div>

                {/* Rating */}
                {client.rating && (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(client.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{client.rating}</span>
                    {client.reviews && (
                      <span className="text-sm text-muted-foreground">({client.reviews} reviews)</span>
                    )}
                  </div>
                )}

                {/* Specialties */}
                <div className="flex flex-wrap gap-1">
                  {client.specialties.slice(0, 3).map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                  {client.specialties.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{client.specialties.length - 3} more
                    </Badge>
                  )}
                </div>

                <Button className="w-full" asChild>
                  <Link href={`/clients/${client.slug}`}>
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredClients.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold">No clients found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-muted rounded-lg p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Ready to Join Our Success Stories?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how our programmatic SEO and backlink solutions can transform your local service business like they have for hundreds of others.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
