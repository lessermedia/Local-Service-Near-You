import { Skeleton } from "@/components/ui/skeleton"

export default function AdminArticlesLoading() {
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
            <Skeleton className="h-10 w-36" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration Skeleton */}
          <div className="lg:col-span-2 space-y-6">
            {/* Client Selection Card */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-56" />
              </div>
              <div className="p-6">
                <Skeleton className="h-10 w-full mb-4" />
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Skeleton className="h-4 w-48 mb-2" />
                  <Skeleton className="h-3 w-64" />
                </div>
              </div>
            </div>

            {/* Article Templates Card */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <Skeleton className="h-6 w-36 mb-2" />
                <Skeleton className="h-4 w-64" />
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <Skeleton className="h-4 w-4 mt-1" />
                      <div className="flex-1">
                        <Skeleton className="h-4 w-48 mb-2" />
                        <Skeleton className="h-3 w-full mb-2" />
                        <Skeleton className="h-3 w-64 mb-2" />
                        <Skeleton className="h-5 w-24" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Generation Settings Card */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <Skeleton className="h-6 w-40 mb-2" />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div>
                  <Skeleton className="h-4 w-40 mb-2" />
                  <Skeleton className="h-20 w-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="space-y-6">
            {/* Generation Summary Card */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <Skeleton className="h-6 w-40" />
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex justify-between">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tips Card */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <Skeleton className="h-6 w-32" />
              </div>
              <div className="p-6">
                <div className="space-y-3">
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
