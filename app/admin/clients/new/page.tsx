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
import { Plus, X, Building2, ArrowLeft, Save, Eye } from 'lucide-react'
import Link from "next/link"

const industries = [
  "Plumbing Services",
  "Legal Services", 
  "HVAC Services",
  "Roofing Services",
  "Automotive Services",
  "Dental Services",
  "Electrical Services",
  "Landscaping Services",
  "Cleaning Services",
  "Real Estate Services"
]

export default function NewClientPage() {
  const [formData, setFormData] = useState({
    name: '',
    industry: '',
    location: '',
    website: '',
    phone: '',
    email: '',
    description: '',
    serviceAreas: [''],
    specialties: [''],
    targetKeywords: [''],
    monthlyBudget: '',
    contentGoals: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const addField = (fieldName: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: [...prev[fieldName as keyof typeof prev] as string[], '']
    }))
  }

  const removeField = (fieldName: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: (prev[fieldName as keyof typeof prev] as string[]).filter((_, i) => i !== index)
    }))
  }

  const updateField = (fieldName: string, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: (prev[fieldName as keyof typeof prev] as string[]).map((item, i) => i === index ? value : item)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Here you would typically send the data to your backend
    console.log('Client data:', formData)
    
    setIsSubmitting(false)
    // Redirect to client list or show success message
  }

  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="flex items-center text-blue-600 hover:text-blue-800">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Add New Client</h1>
                <p className="text-gray-600">Create a new client profile for content generation</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button form="client-form" type="submit" disabled={isSubmitting}>
                <Save className="h-4 w-4 mr-2" />
                {isSubmitting ? 'Saving...' : 'Save Client'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <form id="client-form" onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Basic Information
                  </CardTitle>
                  <CardDescription>
                    Enter the client's basic business information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Business Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Denver Plumbing Pro"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry *</Label>
                      <Select onValueChange={(value) => setFormData({...formData, industry: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location">Primary Location *</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        placeholder="Denver, CO"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="website">Website URL</Label>
                      <Input
                        id="website"
                        value={formData.website}
                        onChange={(e) => setFormData({...formData, website: e.target.value})}
                        placeholder="https://denverplumbingpro.com"
                        type="url"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(303) 555-0123"
                        type="tel"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="info@denverplumbingpro.com"
                        type="email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Business Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Full-service plumbing company serving the Denver metro area..."
                      rows={4}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card>
                <CardHeader>
                  <CardTitle>Service Areas</CardTitle>
                  <CardDescription>
                    Add all locations where the client provides services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {formData.serviceAreas.map((area, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={area}
                          onChange={(e) => updateField('serviceAreas', index, e.target.value)}
                          placeholder="Denver, Aurora, Lakewood..."
                          className="flex-1"
                        />
                        {formData.serviceAreas.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeField('serviceAreas', index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => addField('serviceAreas')}
                      className="w-full"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Service Area
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Specialties */}
              <Card>
                <CardHeader>
                  <CardTitle>Specialties & Services</CardTitle>
                  <CardDescription>
                    List the client's main services and specialties
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {formData.specialties.map((specialty, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={specialty}
                          onChange={(e) => updateField('specialties', index, e.target.value)}
                          placeholder="Emergency Plumbing, Water Heater Repair..."
                          className="flex-1"
                        />
                        {formData.specialties.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeField('specialties', index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => addField('specialties')}
                      className="w-full"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Specialty
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* SEO & Content Strategy */}
              <Card>
                <CardHeader>
                  <CardTitle>SEO & Content Strategy</CardTitle>
                  <CardDescription>
                    Define target keywords and content goals
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Target Keywords</Label>
                    <div className="space-y-3 mt-2">
                      {formData.targetKeywords.map((keyword, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            value={keyword}
                            onChange={(e) => updateField('targetKeywords', index, e.target.value)}
                            placeholder="plumber denver, emergency plumbing..."
                            className="flex-1"
                          />
                          {formData.targetKeywords.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => removeField('targetKeywords', index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => addField('targetKeywords')}
                        className="w-full"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Keyword
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="contentGoals">Content Goals</Label>
                    <Textarea
                      id="contentGoals"
                      value={formData.contentGoals}
                      onChange={(e) => setFormData({...formData, contentGoals: e.target.value})}
                      placeholder="Increase local search visibility, generate more leads, establish authority..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Client Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-gray-600">Business Name</div>
                      <div className="font-semibold">{formData.name || 'Not set'}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-600">URL Slug</div>
                      <div className="text-sm text-blue-600">
                        /clients/{formData.name ? generateSlug(formData.name) : 'business-name'}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-600">Industry</div>
                      <div>{formData.industry || 'Not selected'}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-600">Location</div>
                      <div>{formData.location || 'Not set'}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-600">Service Areas</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {formData.serviceAreas.filter(area => area.trim()).map((area, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                        {formData.serviceAreas.filter(area => area.trim()).length === 0 && (
                          <span className="text-sm text-gray-500">None added</span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Campaign Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="monthlyBudget">Monthly Budget</Label>
                    <Select onValueChange={(value) => setFormData({...formData, monthlyBudget: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="starter">$497/month - Starter</SelectItem>
                        <SelectItem value="professional">$997/month - Professional</SelectItem>
                        <SelectItem value="enterprise">$1,997/month - Enterprise</SelectItem>
                        <SelectItem value="custom">Custom Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Separator />
                  
                  <div className="text-sm text-gray-600">
                    <div className="font-medium mb-2">Next Steps:</div>
                    <ul className="space-y-1 text-xs">
                      <li>• Client profile will be created</li>
                      <li>• Initial content strategy will be generated</li>
                      <li>• First batch of articles will be queued</li>
                      <li>• Backlink campaign will begin</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
