import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, User, Share2, BookmarkPlus, TrendingUp, ArrowLeft } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"

// This would typically come from a CMS or database
const article = {
  title: "The Complete Guide to White Hat Link Building in 2025",
  excerpt: "Discover the most effective white hat link building strategies that actually work in 2025. Learn how to build high-quality backlinks that boost your rankings without risking penalties.",
  content: `
    <h2>Introduction to White Hat Link Building</h2>
    <p>Link building remains one of the most crucial aspects of SEO in 2025. However, the landscape has evolved significantly, and what worked five years ago might not only be ineffective today but could actually harm your rankings.</p>
    
    <p>In this comprehensive guide, we'll explore the most effective white hat link building strategies that not only comply with Google's guidelines but actually deliver measurable results for your business.</p>
    
    <h2>Why White Hat Link Building Matters More Than Ever</h2>
    <p>Google's algorithms have become increasingly sophisticated at detecting manipulative link building practices. The days of buying bulk backlinks or participating in link schemes are long gone. Today's successful SEO strategies focus on:</p>
    
    <ul>
      <li>Building genuine relationships with other websites</li>
      <li>Creating valuable content that naturally attracts links</li>
      <li>Earning links through expertise and authority</li>
      <li>Focusing on relevance and context over quantity</li>
    </ul>
    
    <h2>The Top 10 White Hat Link Building Strategies for 2025</h2>
    
    <h3>1. Resource Page Link Building</h3>
    <p>Resource pages are goldmines for white hat link building. These pages exist specifically to link out to valuable resources in a particular niche. Here's how to leverage them:</p>
    
    <ul>
      <li>Use search operators like "keyword + resources" or "keyword + useful links"</li>
      <li>Create genuinely valuable resources that deserve to be listed</li>
      <li>Reach out with personalized, value-focused emails</li>
    </ul>
    
    <h3>2. Broken Link Building</h3>
    <p>This strategy involves finding broken links on relevant websites and suggesting your content as a replacement. It's a win-win: you get a link, and the website owner fixes a user experience issue.</p>
    
    <h3>3. Guest Posting (Done Right)</h3>
    <p>Guest posting isn't dead, but it needs to be done strategically. Focus on:</p>
    <ul>
      <li>High-quality, relevant websites in your niche</li>
      <li>Creating exceptional content that provides real value</li>
      <li>Building long-term relationships with editors and site owners</li>
    </ul>
    
    <h2>Measuring Your Link Building Success</h2>
    <p>Success in link building isn't just about the number of links you acquire. Key metrics to track include:</p>
    
    <ul>
      <li>Domain Authority of linking sites</li>
      <li>Relevance of linking pages to your content</li>
      <li>Organic traffic increases</li>
      <li>Keyword ranking improvements</li>
      <li>Referral traffic from backlinks</li>
    </ul>
    
    <h2>Common Mistakes to Avoid</h2>
    <p>Even with the best intentions, it's easy to make mistakes that can hurt your link building efforts:</p>
    
    <ul>
      <li>Focusing solely on high DA sites without considering relevance</li>
      <li>Using the same anchor text repeatedly</li>
      <li>Neglecting to build relationships before asking for links</li>
      <li>Creating low-quality content for guest posts</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>White hat link building in 2025 is about creating genuine value, building real relationships, and earning links through expertise and authority. While it requires more effort than black hat tactics, the long-term benefits far outweigh the initial investment.</p>
    
    <p>Remember, successful link building is a marathon, not a sprint. Focus on quality over quantity, and always prioritize the user experience and value creation.</p>
  `,
  category: "Link Building",
  author: "Sarah Johnson",
  date: "2025-01-15",
  readTime: "12 min read",
  image: "/placeholder.svg?height=400&width=800",
  tags: ["Link Building", "SEO", "White Hat", "Digital Marketing", "Content Strategy"]
}

const relatedArticles = [
  {
    title: "How to Scale Your Backlink Campaign: A Programmatic Approach",
    excerpt: "Learn how to automate and scale your link building efforts while maintaining quality.",
    slug: "scale-backlink-campaign-programmatic",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Guest Posting vs Niche Edits: Which Strategy Works Better?",
    excerpt: "A comprehensive comparison of guest posting and niche edits for link building.",
    slug: "guest-posting-vs-niche-edits",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Local SEO Link Building: Dominate Your Geographic Market",
    excerpt: "Master local link building strategies to dominate your local market.",
    slug: "local-seo-link-building",
    image: "/placeholder.svg?height=200&width=300"
  }
]

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">LocalServiceNearYou</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Button>Get Started</Button>
          </nav>

          <MobileNav>
            <Link href="/" className="text-lg font-medium">Home</Link>
            <Link href="/blog" className="text-lg font-medium">Blog</Link>
            <Link href="/pricing" className="text-lg font-medium">Pricing</Link>
            <Button asChild className="w-full">
              <Link href="/contact">Get Started</Link>
            </Button>
          </MobileNav>
        </div>
      </header>

      {/* Back to Blog */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Badge className="mb-4">{article.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {article.excerpt}
          </p>
          
          {/* Author and Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{new Date(article.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <BookmarkPlus className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {/* Tags */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-blue-100">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="mb-12" />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Build High-Quality Backlinks?</h3>
          <p className="text-gray-600 mb-6">
            Let our experts handle your link building campaign while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Your Campaign
            </Button>
            <Button size="lg" variant="outline">
              View Our Pricing
            </Button>
          </div>
        </div>

        {/* Related Articles */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={relatedArticle.image || "/placeholder.svg"}
                    alt={relatedArticle.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2 hover:text-blue-600 cursor-pointer">
                    <Link href={`/blog/${relatedArticle.slug}`}>
                      {relatedArticle.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {relatedArticle.excerpt}
                  </p>
                  <Link href={`/blog/${relatedArticle.slug}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </article>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get More SEO Insights</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for weekly link building tips and strategies.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email"
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
