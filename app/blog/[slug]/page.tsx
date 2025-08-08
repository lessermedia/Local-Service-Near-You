import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight, Eye, Calendar, Clock, User, ExternalLink } from 'lucide-react'
import { allArticles } from '@/lib/data'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const article = allArticles.find(a => a.slug === params.slug)
  
  if (!article) {
    notFound()
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = allArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <div className="space-y-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Badge>{article.category}</Badge>
              {article.type === 'client' && (
                <Badge variant="outline">Client Story</Badge>
              )}
              {article.featured && (
                <Badge variant="secondary">Featured</Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {article.excerpt}
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>By {article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(article.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
            {article.views && (
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>{article.views} views</span>
              </div>
            )}
          </div>

          {/* Featured Image */}
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="space-y-6">
            <p>
              In today's competitive digital landscape, local service businesses need more than just a basic website to succeed. They need a comprehensive strategy that combines programmatic SEO, high-quality backlinks, and consistent local citations to dominate their markets.
            </p>
            
            <p>
              This is exactly what we've helped {article.clientName || 'hundreds of businesses'} achieve through our proven methodology. By leveraging automation and data-driven insights, we create scalable content strategies that drive real results.
            </p>

            <h2>The Challenge</h2>
            <p>
              Local service businesses face unique challenges in the digital space. They need to rank for location-specific keywords, build trust with local customers, and compete against both local competitors and national chains. Traditional SEO approaches often fall short because they're too slow and resource-intensive.
            </p>

            <h2>Our Solution</h2>
            <p>
              Our programmatic approach solves these challenges by:
            </p>
            <ul>
              <li>Generating hundreds of location-specific pages automatically</li>
              <li>Building high-quality backlinks from relevant local and industry websites</li>
              <li>Creating consistent NAP citations across major directories</li>
              <li>Optimizing for local search intent and user behavior</li>
            </ul>

            <h2>Results That Matter</h2>
            <p>
              The results speak for themselves. Our clients typically see:
            </p>
            <ul>
              <li>300-500% increase in organic traffic within 6 months</li>
              <li>First page rankings for 100+ local keywords</li>
              <li>Significant improvement in local pack visibility</li>
              <li>Higher quality leads and increased conversion rates</li>
            </ul>

            {article.type === 'client' && article.clientName && (
              <>
                <h2>Case Study: {article.clientName}</h2>
                <p>
                  {article.clientName} came to us looking to expand their digital presence and compete more effectively in their local market. Through our programmatic SEO approach, we were able to help them achieve remarkable results in just a few months.
                </p>
                <p>
                  The key to their success was our ability to create highly targeted, location-specific content that resonated with their target audience while building the authority signals that Google values most.
                </p>
              </>
            )}

            <h2>Getting Started</h2>
            <p>
              If you're ready to take your local service business to the next level, our team is here to help. We'll work with you to develop a customized strategy that fits your specific needs and goals.
            </p>
          </div>
        </div>

        {/* Client Backlinks */}
        {article.backlinks && article.backlinks.length > 0 && (
          <div className="mb-12 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Featured Business</h3>
            <div className="space-y-2">
              {article.backlinks.map((link, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {article.clientName} - Visit Website
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedArticles.map((relatedArticle) => (
                <div key={relatedArticle.id} className="group">
                  <Link href={`/blog/${relatedArticle.slug}`}>
                    <div className="space-y-3">
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Badge variant="secondary">{relatedArticle.category}</Badge>
                        <h3 className="font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-muted rounded-lg p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Ready to Scale Your Business?</h2>
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
