export default function ClientLoading() {
  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-8">
        {/* Breadcrumb */}
        <div className="h-4 w-32 bg-muted animate-pulse rounded" />

        {/* Header */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-muted animate-pulse rounded-lg" />
              <div className="flex-1 space-y-4">
                <div className="h-8 w-64 bg-muted animate-pulse rounded" />
                <div className="flex items-center space-x-4">
                  <div className="h-5 w-20 bg-muted animate-pulse rounded-full" />
                  <div className="h-4 w-24 bg-muted animate-pulse rounded" />
                  <div className="h-8 w-24 bg-muted animate-pulse rounded" />
                </div>
                <div className="h-4 w-full bg-muted animate-pulse rounded" />
                <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
              </div>
            </div>
          </div>
          <div className="w-full aspect-video bg-muted animate-pulse rounded-lg" />
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-lg border bg-card p-6">
              <div className="space-y-2">
                <div className="h-4 w-24 bg-muted animate-pulse rounded" />
                <div className="h-8 w-16 bg-muted animate-pulse rounded" />
                <div className="h-3 w-20 bg-muted animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Areas */}
            <div className="rounded-lg border bg-card p-6">
              <div className="space-y-4">
                <div className="h-6 w-32 bg-muted animate-pulse rounded" />
                <div className="h-4 w-48 bg-muted animate-pulse rounded" />
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="h-5 w-16 bg-muted animate-pulse rounded-full" />
                  ))}
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div className="rounded-lg border bg-card p-6">
              <div className="space-y-4">
                <div className="h-6 w-24 bg-muted animate-pulse rounded" />
                <div className="h-4 w-40 bg-muted animate-pulse rounded" />
                <div className="grid gap-2 md:grid-cols-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-muted animate-pulse rounded-full" />
                      <div className="h-4 w-24 bg-muted animate-pulse rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-lg border bg-card p-6">
                <div className="space-y-4">
                  <div className="h-6 w-32 bg-muted animate-pulse rounded" />
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-muted animate-pulse rounded" />
                    <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
                    <div className="h-4 w-1/2 bg-muted animate-pulse rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
