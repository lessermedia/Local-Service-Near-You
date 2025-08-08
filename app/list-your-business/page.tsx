'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { industries } from '@/lib/constants'
import { isValidEmail, isValidPhone } from '@/lib/utils'
import { Building, Users, Award, TrendingUp, CheckCircle } from 'lucide-react'

export default function ListYourBusinessPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    website: '',
    industry: '',
    services: [] as string[],
    address: '',
    city: '',
    state: '',
    zipCode: '',
    yearEstablished: '',
    employeeCount: '',
    serviceRadius: '',
    emergencyService: false,
    certifications: [] as string[],
    description: '',
    specialties: [] as string[]
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required'
    if (!formData.ownerName.trim()) newErrors.ownerName = 'Owner name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!isValidEmail(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!isValidPhone(formData.phone)) newErrors.phone = 'Please enter a valid phone number'
    if (!formData.industry) newErrors.industry = 'Please select an industry'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.state.trim()) newErrors.state = 'State is required'
    if (!formData.description.trim()) newErrors.description = 'Business description is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in joining our network. We'll review your application and contact you within 2-3 business days.
            </p>
            <Button onClick={() => window.location.href = '/'}>
              Return to Homepage
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">List Your Business</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our network of trusted local service providers and connect with customers in your area.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">More Customers</h3>
            <p className="text-sm text-gray-600">Connect with local customers actively searching for your services</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Building className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">Professional Profile</h3>
            <p className="text-sm text-gray-600">Showcase your business with a detailed professional profile</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Build Trust</h3>
            <p className="text-sm text-gray-600">Display certifications, reviews, and credentials to build trust</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold mb-2">Grow Your Business</h3>
            <p className="text-sm text-gray-600">Increase visibility and grow your customer base online</p>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pay for Local Authority at Scale</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're not slowly building links — we're deploying entire local SEO environments. You get citations, backlinks, and articles indexed across our internal authority network, all pointing to you, instantly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Base Plan */}
            <Card className="relative border-2 border-gray-200">
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building className="w-6 h-6 text-gray-600" />
                </div>
                <CardTitle className="text-xl">Base</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$149</span>
                  <span className="text-gray-600"> one-time</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>1 citation per location + service area</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Permanent listings on our network</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>NAP, service keywords, internal schema</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-xs text-gray-500">Perfect for establishing your local presence</p>
                </div>
              </CardContent>
            </Card>

            {/* Tier 2 Plan */}
            <Card className="relative border-2 border-blue-300 shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Popular</span>
              </div>
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Tier 2</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$299</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Includes everything from Base</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>10 backlinks per service</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Links to homepage & citations</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Monthly content refresh</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Schema & location-targeted content</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-xs text-gray-500">Fast-start SEO boost with indexed links</p>
                </div>
              </CardContent>
            </Card>

            {/* Tier 3 Plan */}
            <Card className="relative border-2 border-purple-300">
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Tier 3</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$999</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Includes everything from Base</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>100 backlinks per service</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>100 articles per service</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Authority injection & schema bloat</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Long-tail keyword domination</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-xs text-gray-500">For aggressive dominance & national scale</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">Instant Authority. Ongoing Freshness.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-800">
                  We deploy complete local SEO environments with 100+ articles, citations, and backlinks 
                  indexed across our internal authority network, all pointing to you, instantly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader>
                <CardTitle className="text-lg text-amber-900">Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-amber-800">• Links & articles go offline within 7 days of cancellation</p>
                <p className="text-sm text-amber-800">• Option to pause ($99/mo) to preserve listings without fresh content</p>
                <p className="text-sm text-amber-800">• Rejoining triggers a full reindex cycle with new content</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Application Form */}
        <Card>
          <CardHeader>
            <CardTitle>Business Application</CardTitle>
            <CardDescription>
              Please provide accurate information about your business. All fields marked with * are required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Business Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      className={errors.businessName ? 'border-red-500' : ''}
                    />
                    {errors.businessName && <p className="text-sm text-red-600 mt-1">{errors.businessName}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="ownerName">Owner/Manager Name *</Label>
                    <Input
                      id="ownerName"
                      value={formData.ownerName}
                      onChange={(e) => handleInputChange('ownerName', e.target.value)}
                      className={errors.ownerName ? 'border-red-500' : ''}
                    />
                    {errors.ownerName && <p className="text-sm text-red-600 mt-1">{errors.ownerName}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={errors.phone ? 'border-red-500' : ''}
                    />
                    {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="website">Website URL</Label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="industry">Industry *</Label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                      <SelectTrigger className={errors.industry ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.industry && <p className="text-sm text-red-600 mt-1">{errors.industry}</p>}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Business Location</h3>
                
                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className={errors.city ? 'border-red-500' : ''}
                    />
                    {errors.city && <p className="text-sm text-red-600 mt-1">{errors.city}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className={errors.state ? 'border-red-500' : ''}
                    />
                    {errors.state && <p className="text-sm text-red-600 mt-1">{errors.state}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Business Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Business Details</h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="yearEstablished">Year Established</Label>
                    <Input
                      id="yearEstablished"
                      type="number"
                      min="1900"
                      max={new Date().getFullYear()}
                      value={formData.yearEstablished}
                      onChange={(e) => handleInputChange('yearEstablished', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="employeeCount">Number of Employees</Label>
                    <Select value={formData.employeeCount} onValueChange={(value) => handleInputChange('employeeCount', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 employees</SelectItem>
                        <SelectItem value="6-15">6-15 employees</SelectItem>
                        <SelectItem value="16-50">16-50 employees</SelectItem>
                        <SelectItem value="51-100">51-100 employees</SelectItem>
                        <SelectItem value="100+">100+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="serviceRadius">Service Radius</Label>
                    <Select value={formData.serviceRadius} onValueChange={(value) => handleInputChange('serviceRadius', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select radius" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10 miles">10 miles</SelectItem>
                        <SelectItem value="25 miles">25 miles</SelectItem>
                        <SelectItem value="50 miles">50 miles</SelectItem>
                        <SelectItem value="75 miles">75 miles</SelectItem>
                        <SelectItem value="100+ miles">100+ miles</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Business Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your business, services, and what makes you unique..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className={errors.description ? 'border-red-500' : ''}
                    rows={4}
                  />
                  {errors.description && <p className="text-sm text-red-600 mt-1">{errors.description}</p>}
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="emergencyService"
                    checked={formData.emergencyService}
                    onCheckedChange={(checked) => handleInputChange('emergencyService', checked as boolean)}
                  />
                  <Label htmlFor="emergencyService">We offer 24/7 emergency services</Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t">
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </Button>
                <p className="text-sm text-gray-500 text-center mt-2">
                  By submitting this application, you agree to our terms of service and privacy policy.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
