export default function ClientsLoading() {
  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="h-10 w-64 bg-muted animate-pulse rounded" />
          <div className="h-6 w-96 bg-muted animate-pulse rounded" />
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="h-10 w-64 bg-muted animate-pulse rounded" />
          <div className="flex gap-4">
            <div className="h-10 w-40 bg-muted animate-pulse rounded" />
            <div className="h-10 w-40 bg-muted animate-pulse rounded" />
          </div>
        </div>

        {/* Results Count */}
        <div className="h-4 w-32 bg-muted animate-pulse rounded" />

        {/* Client Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-lg border bg-card p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="h-6 w-48 bg-muted animate-pulse rounded" />
                    <div className="flex items-center space-x-2">
                      <div className="h-5 w-20 bg-muted animate-pulse rounded-full" />
                      <div className="h-4 w-24 bg-muted animate-pulse rounded" />
                    </div>
                  </div>
                  <div className="h-8 w-8 bg-muted animate-pulse rounded" />
                </div>
                <div className="h-4 w-full bg-muted animate-pulse rounded" />
                <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="h-6 w-8 bg-muted animate-pulse rounded mx-auto" />
                    <div className="h-3 w-12 bg-muted animate-pulse rounded mx-auto" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-6 w-8 bg-muted animate-pulse rounded mx-auto" />
                    <div className="h-3 w-12 bg-muted animate-pulse rounded mx-auto" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-6 w-8 bg-muted animate-pulse rounded mx-auto" />
                    <div className="h-3 w-12 bg-muted animate-pulse rounded mx-auto" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <div key={j} className="h-4 w-4 bg-muted animate-pulse rounded" />
                    ))}
                  </div>
                  <div className="h-4 w-8 bg-muted animate-pulse rounded" />
                  <div className="h-4 w-16 bg-muted animate-pulse rounded" />
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="h-5 w-16 bg-muted animate-pulse rounded-full" />
                  ))}
                </div>

                <div className="h-9 w-full bg-muted animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
