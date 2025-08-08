import { MetadataRoute } from 'next'
import { businesses, articles, locations } from '@/lib/data'
import { BUSINESS_CONFIG } from '@/lib/constants'
import { CITY_TO_STATE_MAP } from '@/lib/utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://localservicenearyou.com'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/businesses`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/local-guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/list-your-business`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Business pages
  const businessPages: MetadataRoute.Sitemap = businesses.flatMap(business => {
    const businessPages = [
      {
        url: `${baseUrl}/businesses/${business.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }
    ]

    // Add service pages for each business
    const servicePages = business.services.map(service => {
      const serviceSlug = service.toLowerCase()
        .replace(/&/g, 'and')  // Replace & with 'and'
        .replace(/\s+/g, '-')  // Replace spaces with hyphens
        .replace(/[^a-z0-9-]/g, '')  // Remove all non-alphanumeric except hyphens
      
      return {
        url: `${baseUrl}/businesses/${business.slug}/services/${serviceSlug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }
    })

    // Add service + location pages (limit to first 50 to avoid too many URLs)
    const serviceLocationPages = business.services.slice(0, 5).flatMap(service => 
      business.serviceAreas.slice(0, 10)
        .map(area => {
          const serviceSlug = service.toLowerCase()
            .replace(/&/g, 'and')  // Replace & with 'and'
            .replace(/\s+/g, '-')  // Replace spaces with hyphens
            .replace(/[^a-z0-9-]/g, '')  // Remove all non-alphanumeric except hyphens
            
          const stateAbbr = getStateAbbreviation(area)
          if (!stateAbbr) return null // Skip if no state found
          
          const locationSlug = `${area.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}-${stateAbbr}`
          
          return {
            url: `${baseUrl}/businesses/${business.slug}/services/${serviceSlug}/${locationSlug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
          }
        })
        .filter((item): item is NonNullable<typeof item> => item !== null) // Type-safe filter
    )

    return [...businessPages, ...servicePages, ...serviceLocationPages]
  })

  // Article pages
  const articlePages: MetadataRoute.Sitemap = articles.map(article => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Service area pages
  const serviceAreaPages: MetadataRoute.Sitemap = locations.slice(0, 100)
    .map(location => {
      if (!location.city || !location.state) return null // Skip invalid locations
      
      const citySlug = location.city.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
      const stateSlug = location.state.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
      
      return {
        url: `${baseUrl}/service-areas/${citySlug}-${stateSlug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)

  return [
    ...staticPages,
    ...businessPages,
    ...articlePages,
    ...serviceAreaPages,
  ]
}

// Helper function to get state abbreviation
function getStateAbbreviation(city: string): string | undefined {
  if (!city) return undefined
  
  const stateAbbr = CITY_TO_STATE_MAP[city]
  if (!stateAbbr) return undefined
  
  return stateAbbr.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}
