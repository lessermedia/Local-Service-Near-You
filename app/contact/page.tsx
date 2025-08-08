'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { MapPin, Phone, Mail, Clock, MessageSquare, HelpCircle, Building } from 'lucide-react'
import { isValidEmail } from '@/lib/utils'
import { BUSINESS_CONFIG, getFormattedBusinessHours } from '@/lib/business-config'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!isValidEmail(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

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

  const handleInputChange = (field: string, value: string) => {
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
            <MessageSquare className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Send Another Message
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our platform or need help with your business listing? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Phone Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-gray-900 mb-2">{BUSINESS_CONFIG.contact.phone}</p>
                <p className="text-gray-600 mb-4">{BUSINESS_CONFIG.supportHours}</p>
                <p className="text-sm text-gray-500">
                  Call us for immediate assistance with your account or technical issues.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-900 mb-2">{BUSINESS_CONFIG.contact.supportEmail}</p>
                <p className="text-gray-600 mb-4">Response within 24 hours</p>
                <p className="text-sm text-gray-500">
                  Send us detailed questions or feedback via email.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-gray-900 mb-1">{BUSINESS_CONFIG.companyName}</p>
                <p className="text-gray-600 mb-1">{BUSINESS_CONFIG.address.street}</p>
                <p className="text-gray-600 mb-4">{BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state} {BUSINESS_CONFIG.address.zipCode}</p>
                <p className="text-sm text-gray-500">
                  Visit us by appointment only.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  {getFormattedBusinessHours().map(({ day, hours }) => (
                    <div key={day} className="flex justify-between">
                      <span>{day}</span>
                      <span>{hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
                    </div>
                    
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
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className={errors.subject ? 'border-red-500' : ''}
                    />
                    {errors.subject && <p className="text-sm text-red-600 mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={errors.message ? 'border-red-500' : ''}
                      rows={6}
                    />
                    {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">How do I list my business?</h4>
                  <p className="text-gray-600 text-sm">
                    Visit our "List Your Business" page and fill out the application form. We'll review your submission and contact you within 2-3 business days.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What are the costs involved?</h4>
                  <p className="text-gray-600 text-sm">
                    We offer different pricing tiers based on your needs. Basic listings start at $99 one-time, with premium monthly plans available for enhanced features.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">How do customers find my business?</h4>
                  <p className="text-gray-600 text-sm">
                    Customers can search by service type, location, or browse our directory. We also optimize listings for local search engines.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Can I update my business information?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes, you can update your business information anytime by contacting our support team. Premium members get access to a self-service dashboard.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
