'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { ArrowRight, Eye } from 'lucide-react'
import { allArticles, categories, contentTypes, getFeaturedArticle } from '@/lib/data'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedType, setSelectedType] = useState('All Content')

  const featuredArticle = getFeaturedArticle()
  const regularArticles = allArticles.filter(article => !article.featured)

  const filteredArticles = regularArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    const matchesType = selectedType === 'All Content' || 
                       (selectedType === 'Our Articles' && article.type === 'internal') ||
                       (selectedType === 'Client Success Stories' && article.type === 'client')
    
    return matchesSearch && matchesCategory && matchesType
  })

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Blog & Articles</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Insights, strategies, and success stories from the world of programmatic SEO and local business marketing.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="aspect-video md:aspect-square overflow-hidden">
                  <img
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Badge>{featuredArticle.category}</Badge>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <h2 className="text-2xl font-bold md:text-3xl">{featuredArticle.title}</h2>
                  <p className="text-muted-foreground">{featuredArticle.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>By {featuredArticle.author}</span>
                    <span>{featuredArticle.date}</span>
                    <span>{featuredArticle.readTime}</span>
                    {featuredArticle.views && (
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{featuredArticle.views}</span>
                      </div>
                    )}
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${featuredArticle.slug}`}>
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Filters */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex-1">
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <div className="flex gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {contentTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-muted-foreground">
          Showing {filteredArticles.length} of {regularArticles.length} articles
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    {article.type === 'client' && (
                      <Badge variant="outline">Client Story</Badge>
                    )}
                  </div>
                  {article.views && (
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Eye className="h-3 w-3" />
                      <span>{article.views}</span>
                    </div>
                  )}
                </div>
                <CardTitle className="line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <div>By {article.author}</div>
                    <div className="flex items-center space-x-2">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/blog/${article.slug}`}>Read</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-muted rounded-lg p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of local service businesses that are dominating their markets with our programmatic SEO and backlink solutions.
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
