'use client'

import { Suspense } from 'react'
import { Skeleton } from "@/components/ui/skeleton"

interface SearchParamsWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function SearchParamsWrapper({ children, fallback }: SearchParamsWrapperProps) {
  return (
    <Suspense fallback={fallback || <SearchParamsSkeleton />}>
      {children}
    </Suspense>
  )
}

function SearchParamsSkeleton() {
  return (
    <div className="py-8 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-20" />
            ))}
          </div>
          <Skeleton className="h-10 w-48" />
        </div>
      </div>
    </div>
  )
}
