'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Users, TrendingUp, Search, Filter, Edit, Trash2, Eye, ArrowLeft, Plus } from 'lucide-react'
import Link from "next/link"

const mockContent = {
  articles: [
    {
      id: 1,
      title: "Emergency Plumbing Services in Denver: What You Need to Know",
      client: "Denver Plumbing Pro",
      status: "Published",
      type: "Client Article",
      date: "2025-01-15",
      views: "1.2K",
      backlinks: 3
    },
    {
      id: 2,
      title: "How to Build High-Quality Programmatic Backlinks",
      client: "Internal",
      status: "Published", 
      type: "SEO Article",
      date: "2025-01-14",
      views: "2.8K",
      backlinks: 0
    },
    {
      id: 3,
      title: "Austin Personal Injury Lawyers: Your Rights After an Accident",
      client: "Austin Legal Group",
      status: "Draft",
      type: "Client Article", 
      date: "2025-01-13",
      views: "0",
      backlinks: 2
    }
  ],
  clients: [
    {
      id: 1,
      name: "Denver Plumbing Pro",
      articles: 45,
      status: "Active",
      lastUpdate: "2025-01-15"
    },
    {
      id: 2,
      name: "Austin Legal Group", 
      articles: 32,
      status: "Active",
      lastUpdate: "2025-01-13"
    },
    {
      id: 3,
      name: "Miami Roofing Solutions",
      articles: 28,
      status: "Paused",
      lastUpdate: "2025-01-10"
    }
  ],
  seoPages: [
    {
      id: 1,
      title: "Plumbing Services in Denver, CO",
      type: "Service + Location",
      status: "Published",
      traffic: "850/month",
      keywords: 15
    },
    {
      id: 2,
      title: "Emergency Plumbing Denver",
      type: "Service + Location", 
      status: "Published",
      traffic: "1.2K/month",
      keywords: 8
    },
    {
      id: 3,
      title: "Cost of Plumbing Services in Denver",
      type: "Cost Guide",
      status: "Draft",
      traffic: "0",
      keywords: 12
    }
  ]
}

export default function ContentManagementPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')

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
                <h1 className="text-2xl font-bold">Content Management</h1>
                <p className="text-gray-600">Manage all your content in one place</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Content
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="client">Client Articles</SelectItem>
              <SelectItem value="seo">SEO Articles</SelectItem>
              <SelectItem value="internal">Internal Content</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="articles" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Articles ({mockContent.articles.length})
            </TabsTrigger>
            <TabsTrigger value="clients" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Clients ({mockContent.clients.length})
            </TabsTrigger>
            <TabsTrigger value="seo-pages" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              SEO Pages ({mockContent.seoPages.length})
            </TabsTrigger>
          </TabsList>

          {/* Articles Tab */}
          <TabsContent value="articles">
            <Card>
              <CardHeader>
                <CardTitle>Articles</CardTitle>
                <CardDescription>
                  Manage all published and draft articles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockContent.articles.map((article) => (
                    <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium mb-1">{article.title}</div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>Client: {article.client}</span>
                          <span>Type: {article.type}</span>
                          <span>Date: {article.date}</span>
                          <span>Views: {article.views}</span>
                          {article.backlinks > 0 && (
                            <Badge variant="secondary" className="text-xs">
                              {article.backlinks} backlinks
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={article.status === 'Published' ? 'default' : 'secondary'}>
                          {article.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clients Tab */}
          <TabsContent value="clients">
            <Card>
              <CardHeader>
                <CardTitle>Clients</CardTitle>
                <CardDescription>
                  Manage client profiles and their content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockContent.clients.map((client) => (
                    <div key={client.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium mb-1">{client.name}</div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{client.articles} articles</span>
                          <span>Last update: {client.lastUpdate}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={client.status === 'Active' ? 'default' : 'secondary'}>
                          {client.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Pages Tab */}
          <TabsContent value="seo-pages">
            <Card>
              <CardHeader>
                <CardTitle>SEO Pages</CardTitle>
                <CardDescription>
                  Manage programmatic SEO pages and their performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockContent.seoPages.map((page) => (
                    <div key={page.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium mb-1">{page.title}</div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>Type: {page.type}</span>
                          <span>Traffic: {page.traffic}</span>
                          <span>{page.keywords} keywords</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={page.status === 'Published' ? 'default' : 'secondary'}>
                          {page.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
