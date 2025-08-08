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
import { Plus, X, TrendingUp, ArrowLeft, Save, Eye, Target, FileText } from 'lucide-react'
import Link from "next/link"

const pageTypes = [
  {
    id: 'service-location',
    name: 'Service + Location Pages',
    description: 'Generate pages for each service in each location',
    example: 'Plumbing Services in Denver, CO',
    variables: ['service', 'location']
  },
  {
    id: 'location-service',
    name: 'Location + Service Pages', 
    description: 'Generate location-focused service pages',
    example: 'Denver Plumbing Services',
    variables: ['location', 'service']
  },
  {
    id: 'comparison-pages',
    name: 'Comparison Pages',
    description: 'Compare services or solutions',
    example: 'Traditional vs Tankless Water Heaters',
    variables: ['option1', 'option2']
  },
  {
    id: 'cost-guides',
    name: 'Cost Guide Pages',
    description: 'Pricing and cost information pages',
    example: 'Cost of Plumbing Services in Denver',
    variables: ['service', 'location']
  }
]

export default function NewSEOPagesPage() {
  const [pageType, setPageType] = useState('')
  const [title, setTitle] = useState('')
  const [metaDescription, setMetaDescription] = useState('')
  const [targetKeywords, setTargetKeywords] = useState([''])
  const [variables, setVariables] = useState<{[key: string]: string[]}>({})
  const [contentTemplate, setContentTemplate] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [estimatedPages, setEstimatedPages] = useState(0)

  const selectedPageType = pageTypes.find(p => p.id === pageType)

  const addKeyword = () => {
    setTargetKeywords([...targetKeywords, ''])
  }

  const removeKeyword = (index: number) => {
    setTargetKeywords(targetKeywords.filter((_, i) => i !== index))
  }

  const updateKeyword = (index: number, value: string) => {
    setTargetKeywords(targetKeywords.map((keyword, i) => i === index ? value : keyword))
  }

  const addVariable = (variableName: string) => {
    setVariables(prev => ({
      ...prev,
      [variableName]: [...(prev[variableName] || []), '']
    }))
  }

  const removeVariable = (variableName: string, index: number) => {
    setVariables(prev => ({
      ...prev,
      [variableName]: prev[variableName].filter((_, i) => i !== index)
    }))
  }

  const updateVariable = (variableName: string, index: number, value: string) => {
    setVariables(prev => ({
      ...prev,
      [variableName]: prev[variableName].map((item, i) => i === index ? value : item)
    }))
  }

  const calculateEstimatedPages = () => {
    if (!selectedPageType) return 0
    
    let total = 1
    selectedPageType.variables.forEach(variable => {
      const values = variables[variable]?.filter(v => v.trim()) || []
      if (values.length > 0) {
        total *= values.length
      }
    })
    return total
  }

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate generation
    await new Promise(resolve => setTimeout(resolve, 3000))
    setIsGenerating(false)
    // Here you would typically generate the pages
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
                <h1 className="text-2xl font-bold">Create SEO Pages</h1>
                <p className="text-gray-600">Generate programmatic SEO pages at scale</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button onClick={handleGenerate} disabled={!pageType || isGenerating}>
                <Save className="h-4 w-4 mr-2" />
                {isGenerating ? 'Generating...' : 'Generate Pages'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Page Type Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Page Type
                </CardTitle>
                <CardDescription>
                  Choose the type of SEO pages you want to generate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {pageTypes.map((type) => (
                    <div
                      key={type.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        pageType === type.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setPageType(type.id)}
                    >
                      <div className="font-medium mb-2">{type.name}</div>
                      <div className="text-sm text-gray-600 mb-2">{type.description}</div>
                      <div className="text-xs text-blue-600 italic">
                        Example: {type.example}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Page Configuration */}
            {selectedPageType && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Page Configuration
                  </CardTitle>
                  <CardDescription>
                    Configure the template for your SEO pages
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Page Title Template</Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Best {service} in {location} - Expert Solutions"
                    />
                    <div className="text-xs text-gray-500 mt-1">
                      Use {'{variable}'} syntax for dynamic content
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="metaDescription">Meta Description Template</Label>
                    <Textarea
                      id="metaDescription"
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      placeholder="Professional {service} services in {location}. Get expert solutions..."
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <Label>Target Keywords</Label>
                    <div className="space-y-2 mt-2">
                      {targetKeywords.map((keyword, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            value={keyword}
                            onChange={(e) => updateKeyword(index, e.target.value)}
                            placeholder="{service} {location}, best {service}..."
                            className="flex-1"
                          />
                          {targetKeywords.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => removeKeyword(index)}
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
                        onClick={addKeyword}
                        className="w-full"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Keyword
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Variables */}
            {selectedPageType && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Variables
                  </CardTitle>
                  <CardDescription>
                    Define the values for each variable in your template
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {selectedPageType.variables.map((variable) => (
                    <div key={variable}>
                      <Label className="capitalize">{variable} Values</Label>
                      <div className="space-y-2 mt-2">
                        {(variables[variable] || ['']).map((value, index) => (
                          <div key={index} className="flex gap-2">
                            <Input
                              value={value}
                              onChange={(e) => updateVariable(variable, index, e.target.value)}
                              placeholder={`Enter ${variable} value...`}
                              className="flex-1"
                            />
                            {(variables[variable]?.length || 0) > 1 && (
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => removeVariable(variable, index)}
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
                          onClick={() => addVariable(variable)}
                          className="w-full"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add {variable}
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Content Template */}
            {selectedPageType && (
              <Card>
                <CardHeader>
                  <CardTitle>Content Template</CardTitle>
                  <CardDescription>
                    Define the content structure for your pages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={contentTemplate}
                    onChange={(e) => setContentTemplate(e.target.value)}
                    placeholder={`# {service} in {location}

Looking for professional {service} in {location}? Our expert team provides...

## Why Choose Our {service} Services?

- Professional and licensed technicians
- 24/7 emergency service available
- Competitive pricing in {location}

## Contact Us Today

Ready to get started? Contact us for {service} in {location}.`}
                    rows={12}
                    className="font-mono text-sm"
                  />
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Generation Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Generation Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-gray-600">Page Type</div>
                    <div>{selectedPageType?.name || 'Not selected'}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600">Estimated Pages</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {calculateEstimatedPages()}
                    </div>
                  </div>
                  <Separator />
                  <div className="text-xs text-gray-500">
                    Pages will be generated based on all combinations of your variables
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Example Output */}
            {selectedPageType && variables[selectedPageType.variables[0]]?.[0] && (
              <Card>
                <CardHeader>
                  <CardTitle>Example Output</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <div className="font-medium text-gray-600">Title:</div>
                      <div className="text-blue-600">
                        {title.replace(`{${selectedPageType.variables[0]}}`, variables[selectedPageType.variables[0]][0])}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-600">URL:</div>
                      <div className="text-gray-500 text-xs">
                        /{selectedPageType.variables[0]}-{variables[selectedPageType.variables[0]][0]?.toLowerCase().replace(/\s+/g, '-')}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* SEO Tips */}
            <Card>
              <CardHeader>
                <CardTitle>SEO Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Use location-specific keywords</div>
                  <div>• Include service variations</div>
                  <div>• Add local business schema</div>
                  <div>• Optimize for mobile users</div>
                  <div>• Include clear calls-to-action</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
