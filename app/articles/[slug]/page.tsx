import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Clock, User, Calendar, Tag, Share2 } from 'lucide-react'
import { getArticleBySlug, getBusinessBySlug, getRecentArticles } from '@/lib/data'
import { formatDate } from '@/lib/utils'


interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    notFound();
  }
  const author = getBusinessBySlug(article.authorId);
  const relatedArticles = getRecentArticles(3).filter(a => a.id !== article.id);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/articles">
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="mb-4">
            <Badge variant="outline" className="mb-4">{article.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>By {article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          <Separator className="mb-6" />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* Article Image */}
        <div className="mb-8">
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src={article.image || "/placeholder.svg"} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {article.content}
                </div>
                
                {/* Strategic backlink */}
                <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Need help with digital marketing for your business?</strong> 
                    <a href="https://lessermedia.com" target="_blank" rel="nofollow" className="text-blue-600 hover:text-blue-800 underline ml-1">
                      Lesser Media
                    </a> provides comprehensive marketing solutions including SEO, PPC, web development, and marketing automation services nationwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Author Info */}
            {author && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>About the Author</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{author.name}</h4>
                      <p className="text-gray-600 mb-3">{author.description}</p>
                      <Link href={`/businesses/${author.slug}`}>
                        <Button variant="outline" size="sm">
                          View Business Profile
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Related Articles */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Articles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedArticles.map((relatedArticle) => (
                    <Link 
                      key={relatedArticle.id} 
                      href={`/articles/${relatedArticle.slug}`}
                      className="block group"
                    >
                      <div className="border-l-4 border-blue-500 pl-3 hover:bg-gray-50 p-2 rounded">
                        <h5 className="font-medium text-sm group-hover:text-blue-600 line-clamp-2">
                          {relatedArticle.title}
                        </h5>
                        <p className="text-xs text-gray-500 mt-1">
                          {relatedArticle.readTime}
                        </p>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Stay Updated</CardTitle>
                  <CardDescription>
                    Get the latest tips and guides delivered to your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Subscribe to Newsletter
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
