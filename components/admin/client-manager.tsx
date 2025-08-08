'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Plus, Building2, MapPin, Globe, Trash2, Edit } from 'lucide-react'

interface Client {
  id: string
  name: string
  slug: string
  industry: string
  location: string
  website: string
  serviceAreas: string[]
  description: string
  specialties: string[]
  articlesCount: number
  status: 'active' | 'pending' | 'paused'
}

const mockClients: Client[] = [
  {
    id: '1',
    name: 'Denver Plumbing Pro',
    slug: 'denver-plumbing-pro',
    industry: 'Plumbing Services',
    location: 'Denver, CO',
    website: 'https://denverplumbingpro.com',
    serviceAreas: ['Denver', 'Aurora', 'Lakewood'],
    description: 'Full-service plumbing company serving Denver metro area',
    specialties: ['Emergency Plumbing', 'Water Heater Repair'],
    articlesCount: 45,
    status: 'active'
  },
  {
    id: '2',
    name: 'Austin Legal Group',
    slug: 'austin-legal-group',
    industry: 'Legal Services',
    location: 'Austin, TX',
    website: 'https://austinlegalgroup.com',
    serviceAreas: ['Austin', 'Round Rock', 'Cedar Park'],
    description: 'Experienced legal team specializing in personal injury and family law',
    specialties: ['Personal Injury', 'Family Law'],
    articlesCount: 32,
    status: 'active'
  }
]

export default function ClientManager() {
  const [clients, setClients] = useState<Client[]>(mockClients)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newClient, setNewClient] = useState({
    name: '',
    industry: '',
    location: '',
    website: '',
    serviceAreas: '',
    description: '',
    specialties: ''
  })

  const handleAddClient = () => {
    const client: Client = {
      id: Date.now().toString(),
      name: newClient.name,
      slug: newClient.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      industry: newClient.industry,
      location: newClient.location,
      website: newClient.website,
      serviceAreas: newClient.serviceAreas.split(',').map(area => area.trim()),
      description: newClient.description,
      specialties: newClient.specialties.split(',').map(spec => spec.trim()),
      articlesCount: 0,
      status: 'pending'
    }
    
    setClients([...clients, client])
    setNewClient({
      name: '',
      industry: '',
      location: '',
      website: '',
      serviceAreas: '',
      description: '',
      specialties: ''
    })
    setShowAddForm(false)
  }

  const generateArticles = (clientId: string, count: number) => {
    setClients(clients.map(client => 
      client.id === clientId 
        ? { ...client, articlesCount: client.articlesCount + count, status: 'active' }
        : client
    ))
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Client Management</h1>
          <p className="text-gray-600">Manage clients and generate programmatic SEO content</p>
        </div>
        <Button onClick={() => setShowAddForm(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add New Client
        </Button>
      </div>

      {/* Add Client Form */}
      {showAddForm && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Add New Client</CardTitle>
            <CardDescription>Enter client details to start generating programmatic SEO content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Business Name</Label>
                <Input
                  id="name"
                  value={newClient.name}
                  onChange={(e) => setNewClient({...newClient, name: e.target.value})}
                  placeholder="Denver Plumbing Pro"
                />
              </div>
              <div>
                <Label htmlFor="industry">Industry</Label>
                <Select onValueChange={(value) => setNewClient({...newClient, industry: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Plumbing Services">Plumbing Services</SelectItem>
                    <SelectItem value="Legal Services">Legal Services</SelectItem>
                    <SelectItem value="HVAC Services">HVAC Services</SelectItem>
                    <SelectItem value="Roofing Services">Roofing Services</SelectItem>
                    <SelectItem value="Automotive Services">Automotive Services</SelectItem>
                    <SelectItem value="Dental Services">Dental Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={newClient.location}
                  onChange={(e) => setNewClient({...newClient, location: e.target.value})}
                  placeholder="Denver, CO"
                />
              </div>
              <div>
                <Label htmlFor="website">Website URL</Label>
                <Input
                  id="website"
                  value={newClient.website}
                  onChange={(e) => setNewClient({...newClient, website: e.target.value})}
                  placeholder="https://denverplumbingpro.com"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="serviceAreas">Service Areas (comma-separated)</Label>
              <Input
                id="serviceAreas"
                value={newClient.serviceAreas}
                onChange={(e) => setNewClient({...newClient, serviceAreas: e.target.value})}
                placeholder="Denver, Aurora, Lakewood, Thornton"
              />
            </div>
            
            <div>
              <Label htmlFor="specialties">Specialties (comma-separated)</Label>
              <Input
                id="specialties"
                value={newClient.specialties}
                onChange={(e) => setNewClient({...newClient, specialties: e.target.value})}
                placeholder="Emergency Plumbing, Water Heater Repair, Drain Cleaning"
              />
            </div>
            
            <div>
              <Label htmlFor="description">Business Description</Label>
              <Textarea
                id="description"
                value={newClient.description}
                onChange={(e) => setNewClient({...newClient, description: e.target.value})}
                placeholder="Full-service plumbing company serving the Denver metro area..."
                rows={3}
              />
            </div>
            
            <div className="flex gap-2">
              <Button onClick={handleAddClient}>Add Client</Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Client List */}
      <div className="grid gap-6">
        {clients.map((client) => (
          <Card key={client.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Building2 className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {client.name}
                      <Badge variant={client.status === 'active' ? 'default' : client.status === 'pending' ? 'secondary' : 'outline'}>
                        {client.status}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {client.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Globe className="h-4 w-4" />
                        <a href={client.website} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          Website
                        </a>
                      </span>
                    </CardDescription>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">{client.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Service Areas</h4>
                    <div className="flex flex-wrap gap-1">
                      {client.serviceAreas.map((area, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-1">
                      {client.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{client.articlesCount}</div>
                      <div className="text-sm text-gray-600">Articles Published</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{client.serviceAreas.length}</div>
                      <div className="text-sm text-gray-600">Service Areas</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      onClick={() => generateArticles(client.id, 25)}
                      disabled={client.status === 'paused'}
                    >
                      Generate 25 Articles
                    </Button>
                    <Button 
                      onClick={() => generateArticles(client.id, 50)}
                      disabled={client.status === 'paused'}
                    >
                      Generate 50 Articles
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
