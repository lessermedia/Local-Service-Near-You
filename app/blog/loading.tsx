export default function BlogLoading() {
  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="h-10 w-64 bg-muted animate-pulse rounded" />
          <div className="h-6 w-96 bg-muted animate-pulse rounded" />
        </div>

        {/* Featured Article Skeleton */}
        <div className="overflow-hidden rounded-lg border bg-card">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="aspect-video bg-muted animate-pulse" />
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <div className="h-6 w-20 bg-muted animate-pulse rounded-full" />
                  <div className="h-6 w-16 bg-muted animate-pulse rounded-full" />
                </div>
                <div className="h-8 w-full bg-muted animate-pulse rounded" />
                <div className="h-4 w-full bg-muted animate-pulse rounded" />
                <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
                <div className="h-10 w-32 bg-muted animate-pulse rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="h-10 w-64 bg-muted animate-pulse rounded" />
          <div className="flex gap-4">
            <div className="h-10 w-40 bg-muted animate-pulse rounded" />
            <div className="h-10 w-40 bg-muted animate-pulse rounded" />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-lg border bg-card">
              <div className="aspect-video bg-muted animate-pulse" />
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <div className="h-5 w-16 bg-muted animate-pulse rounded-full" />
                    <div className="h-5 w-12 bg-muted animate-pulse rounded-full" />
                  </div>
                  <div className="h-5 w-12 bg-muted animate-pulse rounded" />
                </div>
                <div className="h-6 w-full bg-muted animate-pulse rounded" />
                <div className="h-4 w-full bg-muted animate-pulse rounded" />
                <div className="h-4 w-2/3 bg-muted animate-pulse rounded" />
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="h-3 w-20 bg-muted animate-pulse rounded" />
                    <div className="h-3 w-24 bg-muted animate-pulse rounded" />
                  </div>
                  <div className="h-8 w-16 bg-muted animate-pulse rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
