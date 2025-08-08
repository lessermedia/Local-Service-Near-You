import { Skeleton } from "@/components/ui/skeleton"

export default function AdminSEOPagesLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Skeleton className="h-4 w-32" />
              <div>
                <Skeleton className="h-8 w-48 mb-2" />
                <Skeleton className="h-4 w-64" />
              </div>
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-9 w-20" />
              <Skeleton className="h-9 w-32" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form Skeleton */}
          <div className="lg:col-span-2 space-y-6">
            {/* Page Type Selection Card */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <Skeleton className="h-6 w-24 mb-2" />
                <Skeleton className="h-4 w-56" />
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="p-4 border-2 rounded-lg">
                      <Skeleton className="h-5 w-48 mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-3 w-40" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Page Configuration Card */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <Skeleton className="h-6 w-40 mb-2" />
                <Skeleton className="h-4 w-48" />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <Skeleton className="h-4 w-36 mb-2" />
                  <Skeleton className="h-10 w-full mb-1" />
                  <Skeleton className="h-3 w-48" />
                </div>
                <div>
                  <Skeleton className="h-4 w-44 mb-2" />
                  <Skeleton className="h-20 w-full" />
                </div>
                <div>
                  <Skeleton className="h-4 w-32 mb-2" />
                  <div className="space-y-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="flex gap-2">
                        <Skeleton className="h-10 flex-1" />
                        <Skeleton className="h-10 w-10" />
                      </div>
                    ))}
                    <Skeleton className="h-9 w-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Variables Card */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <Skeleton className="h-6 w-20 mb-2" />
                <Skeleton className="h-4 w-56" />
              </div>
              <div className="p-6 space-y-6">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={i}>
                    <Skeleton className="h-4 w-24 mb-2" />
                    <div className="space-y-2">
                      {Array.from({ length: 2 }).map((_, j) => (
                        <div key={j} className="flex gap-2">
                          <Skeleton className="h-10 flex-1" />
                          <Skeleton className="h-10 w-10" />
                        </div>
                      ))}
                      <Skeleton className="h-9 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Template Card */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <Skeleton className="h-6 w-36 mb-2" />
                <Skeleton className="h-4 w-48" />
              </div>
              <div className="p-6">
                <Skeleton className="h-64 w-full" />
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="space-y-6">
            {/* Generation Preview Card */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <Skeleton className="h-6 w-36" />
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div>
                    <Skeleton className="h-4 w-20 mb-1" />
                    <Skeleton className="h-5 w-32" />
                  </div>
                  <div>
                    <Skeleton className="h-4 w-28 mb-1" />
                    <Skeleton className="h-8 w-12" />
                  </div>
                  <Skeleton className="h-px w-full" />
                  <Skeleton className="h-3 w-full" />
                </div>
              </div>
            </div>

            {/* Example Output Card */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <Skeleton className="h-6 w-32" />
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  <div>
                    <Skeleton className="h-4 w-12 mb-1" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                  <div>
                    <Skeleton className="h-4 w-8 mb-1" />
                    <Skeleton className="h-3 w-40" />
                  </div>
                </div>
              </div>
            </div>

            {/* SEO Tips Card */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <Skeleton className="h-6 w-20" />
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-3 w-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
