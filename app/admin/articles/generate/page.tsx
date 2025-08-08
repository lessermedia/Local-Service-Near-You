'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { FileText, ArrowLeft, Play, Settings, Building2, Target, Zap } from 'lucide-react'
import Link from "next/link"

const mockClients = [
  { id: '1', name: 'Denver Plumbing Pro', slug: 'denver-plumbing-pro', industry: 'Plumbing', articles: 45 },
  { id: '2', name: 'Austin Legal Group', slug: 'austin-legal-group', industry: 'Legal', articles: 32 },
  { id: '3', name: 'Miami Roofing Solutions', slug: 'miami-roofing-solutions', industry: 'Roofing', articles: 28 },
  { id: '4', name: 'Seattle HVAC Experts', slug: 'seattle-hvac-experts', industry: 'HVAC', articles: 38 },
  { id: '5', name: 'Phoenix Auto Repair', slug: 'phoenix-auto-repair', industry: 'Automotive', articles: 41 }
]

const articleTemplates = [
  {
    id: 'local-service',
    name: 'Local Service Pages',
    description: 'Generate location-specific service pages with backlinks',
    example: '[Service] in [Location]: Complete Guide',
    estimatedCount: '5-15 per location'
  },
  {
    id: 'how-to-guides',
    name: 'How-To Guides',
    description: 'Educational content that establishes expertise',
    example: 'How to [Action] in [Location]: Expert Tips',
    estimatedCount: '10-20 articles'
  },
  {
    id: 'comparison-posts',
    name: 'Comparison Posts',
    description: 'Compare services, products, or solutions',
    example: '[Service A] vs [Service B] in [Location]',
    estimatedCount: '5-10 articles'
  },
  {
    id: 'local-area-guides',
    name: 'Local Area Guides',
    description: 'Neighborhood and area-specific content',
    example: 'Best [Service] in [Neighborhood], [City]',
    estimatedCount: '3-8 per area'
  }
]

export default function GenerateArticlesPage() {
  const [selectedClient, setSelectedClient] = useState('')
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([])
  const [customPrompt, setCustomPrompt] = useState('')
  const [articleCount, setArticleCount] = useState('25')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationProgress, setGenerationProgress] = useState(0)
  const [generatedArticles, setGeneratedArticles] = useState<any[]>([])

  const handleGenerate = async () => {
    if (!selectedClient || selectedTemplates.length === 0) return
    
    setIsGenerating(true)
    setGenerationProgress(0)
    
    // Simulate article generation with progress
    const totalArticles = parseInt(articleCount)
    const articles = []
    
    for (let i = 0; i < totalArticles; i++) {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 200))
      
      const client = mockClients.find(c => c.id === selectedClient)
      const template = articleTemplates[Math.floor(Math.random() * selectedTemplates.length)]
      
      articles.push({
        id: i + 1,
        title: `${template.example.replace('[Service]', client?.industry || 'Service').replace('[Location]', 'Denver')}`,
        template: template.name,
        status: 'Generated',
        backlinks: [client?.slug || ''],
        wordCount: Math.floor(Math.random() * 1000) + 800
      })
      
      setGenerationProgress(((i + 1) / totalArticles) * 100)
    }
    
    setGeneratedArticles(articles)
    setIsGenerating(false)
  }

  const selectedClientData = mockClients.find(c => c.id === selectedClient)

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
                <h1 className="text-2xl font-bold">Generate Articles</h1>
                <p className="text-gray-600">Bulk generate backlink articles for clients</p>
              </div>
            </div>
            <Button 
              onClick={handleGenerate} 
              disabled={!selectedClient || selectedTemplates.length === 0 || isGenerating}
              size="lg"
            >
              <Play className="h-4 w-4 mr-2" />
              {isGenerating ? 'Generating...' : 'Generate Articles'}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration */}
          <div className="lg:col-span-2 space-y-6">
            {/* Client Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Select Client
                </CardTitle>
                <CardDescription>
                  Choose the client for whom you want to generate articles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select onValueChange={setSelectedClient}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a client" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockClients.map((client) => (
                      <SelectItem key={client.id} value={client.id}>
                        <div className="flex items-center justify-between w-full">
                          <span>{client.name}</span>
                          <Badge variant="outline" className="ml-2">
                            {client.articles} articles
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                {selectedClientData && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">{selectedClientData.name}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Industry: {selectedClientData.industry} • Current Articles: {selectedClientData.articles}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Article Templates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Article Templates
                </CardTitle>
                <CardDescription>
                  Select the types of articles you want to generate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {articleTemplates.map((template) => (
                    <div key={template.id} className="flex items-start space-x-3">
                      <Checkbox
                        id={template.id}
                        checked={selectedTemplates.includes(template.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedTemplates([...selectedTemplates, template.id])
                          } else {
                            setSelectedTemplates(selectedTemplates.filter(t => t !== template.id))
                          }
                        }}
                      />
                      <div className="flex-1">
                        <Label htmlFor={template.id} className="font-medium cursor-pointer">
                          {template.name}
                        </Label>
                        <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                        <div className="mt-2 text-xs text-gray-500">
                          Example: <em>{template.example}</em>
                        </div>
                        <Badge variant="outline" className="mt-2 text-xs">
                          {template.estimatedCount}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Generation Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Generation Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="articleCount">Number of Articles</Label>
                  <Select value={articleCount} onValueChange={setArticleCount}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10 Articles</SelectItem>
                      <SelectItem value="25">25 Articles</SelectItem>
                      <SelectItem value="50">50 Articles</SelectItem>
                      <SelectItem value="100">100 Articles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="customPrompt">Custom Instructions (Optional)</Label>
                  <Textarea
                    id="customPrompt"
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    placeholder="Add any specific instructions for content generation..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Generation Progress */}
            {isGenerating && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Generating Articles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Progress value={generationProgress} className="w-full" />
                    <div className="text-sm text-gray-600 text-center">
                      {Math.round(generationProgress)}% Complete
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Generated Articles */}
            {generatedArticles.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Generated Articles</CardTitle>
                  <CardDescription>
                    {generatedArticles.length} articles generated successfully
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {generatedArticles.map((article) => (
                      <div key={article.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium text-sm">{article.title}</div>
                          <div className="text-xs text-gray-600">
                            {article.template} • {article.wordCount} words
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {article.status}
                          </Badge>
                          <Badge className="text-xs bg-green-100 text-green-800">
                            Backlink
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button className="flex-1">Publish All</Button>
                    <Button variant="outline" className="flex-1">Review & Edit</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Generation Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Generation Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Client:</span>
                    <span className="text-sm font-medium">
                      {selectedClientData?.name || 'Not selected'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Templates:</span>
                    <span className="text-sm font-medium">{selectedTemplates.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Articles:</span>
                    <span className="text-sm font-medium">{articleCount}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Est. Time:</span>
                    <span className="text-sm font-medium">
                      {Math.ceil(parseInt(articleCount) * 0.2)} minutes
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Generation Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <div>• Each article will include backlinks to the client's website</div>
                  <div>• Articles are optimized for local SEO keywords</div>
                  <div>• Content is unique and plagiarism-free</div>
                  <div>• All articles follow Google's quality guidelines</div>
                  <div>• Generated content can be edited before publishing</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
