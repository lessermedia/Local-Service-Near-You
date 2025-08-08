import { Skeleton } from "@/components/ui/skeleton"

export default function ClientProfileLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-6 w-48" />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-9 w-24 rounded" />
          </nav>
        </div>
      </header>

      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Skeleton className="h-4 w-40" />
      </div>

      {/* Client Profile Header */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Profile Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-6 mb-6">
                <Skeleton className="w-20 h-20 rounded-lg" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Skeleton className="h-8 w-64" />
                    <Skeleton className="h-6 w-24" />
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <Skeleton className="h-6 w-24 mb-3" />
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Skeleton key={i} className="h-6 w-20" />
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div className="mb-6">
                <Skeleton className="h-6 w-28 mb-3" />
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <Skeleton key={i} className="h-6 w-16" />
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <Skeleton className="h-6 w-40 mb-3" />
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-6 w-32" />
                  ))}
                </div>
              </div>
            </div>

            {/* Contact & Stats Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white border rounded-lg p-6">
                <Skeleton className="h-6 w-40 mb-4" />
                <div className="space-y-3">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-48" />
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white border rounded-lg p-6">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="space-y-2">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="flex justify-between">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Stats */}
              <div className="bg-white border rounded-lg p-6">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="space-y-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Skeleton className="h-8 w-8 mx-auto mb-2" />
                    <Skeleton className="h-4 w-24 mx-auto" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <Skeleton className="h-6 w-12 mx-auto mb-1" />
                      <Skeleton className="h-3 w-16 mx-auto" />
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <Skeleton className="h-6 w-8 mx-auto mb-1" />
                      <Skeleton className="h-3 w-14 mx-auto" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-32 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Articles Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-6 w-64" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <Skeleton className="h-40 w-full" />
                <div className="p-6">
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <div className="flex items-center gap-4 mb-4">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-8 flex-1 mr-2" />
                    <Skeleton className="h-8 w-8" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
