export default function BlogPostLoading() {
  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <div className="h-9 w-24 bg-muted animate-pulse rounded" />
        </div>

        {/* Article Header */}
        <div className="space-y-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-5 w-20 bg-muted animate-pulse rounded-full" />
              <div className="h-5 w-16 bg-muted animate-pulse rounded-full" />
            </div>
            <div className="h-12 w-full bg-muted animate-pulse rounded" />
            <div className="h-6 w-3/4 bg-muted animate-pulse rounded" />
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-1">
                <div className="h-4 w-4 bg-muted animate-pulse rounded" />
                <div className="h-4 w-16 bg-muted animate-pulse rounded" />
              </div>
            ))}
          </div>

          {/* Featured Image */}
          <div className="aspect-video bg-muted animate-pulse rounded-lg" />
        </div>

        {/* Article Content */}
        <div className="space-y-6 mb-12">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-full bg-muted animate-pulse rounded" />
              <div className="h-4 w-5/6 bg-muted animate-pulse rounded" />
              <div className="h-4 w-4/5 bg-muted animate-pulse rounded" />
            </div>
          ))}
        </div>

        {/* Related Articles */}
        <div className="space-y-6">
          <div className="h-8 w-48 bg-muted animate-pulse rounded" />
          <div className="grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="aspect-video bg-muted animate-pulse rounded-lg" />
                <div className="space-y-2">
                  <div className="h-5 w-16 bg-muted animate-pulse rounded-full" />
                  <div className="h-6 w-full bg-muted animate-pulse rounded" />
                  <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
