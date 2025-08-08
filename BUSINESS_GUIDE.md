# Local Service Near You - Business Management Guide

## Overview

This guide explains how to add businesses and leverage the programmatic features for managing articles, business locations, and service areas in the Local Service Near You platform.

## Table of Contents

1. [Adding New Businesses](#adding-new-businesses)
2. [Service Area Management](#service-area-management)
3. [Article Generation & Management](#article-generation--management)
4. [Citations & Local SEO](#citations--local-seo)
5. [Programmatic Content Creation](#programmatic-content-creation)
6. [Admin Dashboard Usage](#admin-dashboard-usage)
7. [Data Structure Reference](#data-structure-reference)
8. [API Functions](#api-functions)

## Adding New Businesses

### Method 1: Direct Data Addition

Add businesses directly to the data file at `lib/data.ts`:

```typescript
export const businesses: Business[] = [
  // ... existing businesses
  {
    id: "your-business-id",
    name: "Your Business Name",
    slug: "your-business-slug",
    description: "Professional service description with key benefits and specialties.",
    industry: "Industry Category", // e.g., "Plumbing", "HVAC", "Electrical"
    services: [
      "Service 1",
      "Service 2", 
      "Service 3",
      // Add all services offered
    ],
    serviceAreas: ["City1", "City2", "City3"], // Cities served
    contact: {
      phone: "(xxx) xxx-xxxx",
      email: "contact@business.com",
      website: "https://business.com"
    },
    address: {
      street: "123 Business St",
      city: "Primary City",
      state: "ST",
      zipCode: "12345"
    },
    headquarters: {
      city: "HQ City",
      state: "State Name"
    },
    rating: 4.8,
    reviewCount: 150,
    yearEstablished: 2015,
    employeeCount: "6-15", // "1-5", "6-15", "16-50", "50+"
    emergencyService: true,
    certifications: ["Licensed", "Insured", "BBB Accredited"],
    businessHours: {
      monday: { open: "7:00 AM", close: "6:00 PM", closed: false },
      tuesday: { open: "7:00 AM", close: "6:00 PM", closed: false },
      wednesday: { open: "7:00 AM", close: "6:00 PM", closed: false },
      thursday: { open: "7:00 AM", close: "6:00 PM", closed: false },
      friday: { open: "7:00 AM", close: "6:00 PM", closed: false },
      saturday: { open: "8:00 AM", close: "4:00 PM", closed: false },
      sunday: { open: "", close: "", closed: true }
    },
    images: [
      "/path/to/business-image1.jpg",
      "/path/to/business-image2.jpg"
    ],
    featured: false, // Set to true for homepage featuring
    tier: "tier1" // "tier1", "tier2", "tier3" for service levels
  }
]
```

### Method 2: Client Data Files

For more detailed business profiles, create dedicated client files in `lib/clients/`:

1. Create a new file: `lib/clients/your-business-name.ts`
2. Use the structure from existing examples like `denver-plumbing-pros.ts`

```typescript
import { ClientData } from '../types'

export const yourBusinessData: ClientData = {
  business: {
    // Core business information
    id: 'your-business-id',
    name: 'Your Business Name',
    // ... complete business object
  },
  serviceAreas: [
    {
      id: 'city1-service',
      name: 'City Name',
      slug: 'city-service-slug',
      city: 'City Name',
      state: 'ST',
      description: 'Service description for this specific city',
      businessId: 'your-business-id',
      services: ['Service 1', 'Service 2'],
      // ... complete service area data
    }
  ],
  articles: [
    // Pre-written articles for this business
  ]
}
```

## Service Area Management

### Adding Service Areas

Service areas are automatically generated from the business's `serviceAreas` array, but you can customize them:

```typescript
// In lib/data.ts - automatically generated
export function getServiceAreasByBusiness(businessId: string): ServiceArea[] {
  const business = businesses.find(b => b.id === businessId)
  if (!business) return []
  
  return business.serviceAreas.map(area => ({
    id: `${businessId}-${area.toLowerCase().replace(/\s+/g, '-')}`,
    businessId,
    city: area,
    state: business.headquarters.state,
    services: business.services
  }))
}
```

### Service Area Benefits

Each service area automatically generates:
- Dedicated service pages (`/service-areas/[city-state-slug]`)
- Clickable links from business profile pages
- Local SEO optimization
- Citations with local business information
- Targeted article opportunities
- Cross-linking between businesses in the same area

## Article Generation & Management

### Manual Article Creation

Add articles to the `articles` array in `lib/data.ts`:

```typescript
export const articles: Article[] = [
  {
    id: "unique-article-id",
    title: "SEO-Optimized Article Title with Location/Service",
    slug: "seo-friendly-url-slug",
    excerpt: "Compelling summary that includes target keywords and location.",
    content: "Full article content with HTML formatting...",
    author: "Business Name",
    authorId: "business-id", // Links to business
    publishedAt: "2024-01-15",
    category: "Category Name", // "Home Maintenance", "HVAC", "Safety", etc.
    tags: ["keyword1", "keyword2", "location", "service"],
    readTime: "5 min read",
    featured: true, // Featured on homepage
    image: "/path/to/article-image.jpg"
  }
]
```

### Programmatic Article Generation

The system includes functions for automated article generation:

```typescript
// Get articles by business
getArticlesByBusiness(businessId: string): Article[]

// Get articles by category
getArticlesByCategory(category: string): Article[]

// Search articles
searchArticles(query: string): Article[]
```

### Article Templates

Create article templates for different service types:

1. **Emergency Services**: "Emergency [Service] in [City]: Complete Guide"
2. **Installation Guides**: "[Service] Installation in [City]: Expert Guide & Costs"
3. **Maintenance**: "[Service] Maintenance Tips for [City] Homeowners"
4. **Seasonal**: "Winter [Service] Tips for [City] Residents"

## Citations & Local SEO

### Automatic Citation Generation

Citations are automatically generated for each business service area:

```typescript
export function getBusinessCitations(businessId: string): Citation[] {
  const business = businesses.find(b => b.id === businessId)
  if (!business) return []
  
  return business.serviceAreas.map(area => ({
    id: `${businessId}-${area.toLowerCase().replace(/\s+/g, '-')}-citation`,
    businessId,
    businessName: business.name,
    address: business.address,
    phone: business.contact.phone,
    website: business.contact.website,
    serviceArea: area,
    services: business.services,
    description: `${business.name} provides ${business.services.join(', ')} in ${area}, ${business.headquarters.state}.`
  }))
}
```

### Citation Benefits

Each citation includes:
- NAP (Name, Address, Phone) consistency
- Service area specific information
- Local keyword optimization
- Schema markup ready data

## Programmatic Content Creation

### Bulk Content Generation

Use the admin interface to generate content at scale:

1. **Navigate to Admin Dashboard**: `/admin`
2. **Add New Client**: `/admin/clients/new`
3. **Generate Articles**: `/admin/articles/generate`
4. **Create SEO Pages**: `/admin/seo-pages/new`

### Content Templates

The system supports multiple content templates:

```typescript
// Service + Location combinations
const contentMatrix = {
  services: ['Emergency Plumbing', 'Water Heater Installation', 'Drain Cleaning'],
  locations: ['Denver', 'Aurora', 'Lakewood'],
  templates: [
    '{service} in {location}: Complete Guide 2024',
    'Best {service} Services in {location}',
    '{location} {service}: Costs, Tips & Local Experts'
  ]
}
```

### SEO Page Generation

Create location and service-specific pages:

- `/services/[service-slug]` - Service-specific pages
- `/locations/[city-slug]` - City-specific pages  
- `/[business-slug]` - Business profile pages
- `/service-areas/[area-slug]` - Service area pages

## Admin Dashboard Usage

### Dashboard Overview (`/admin`)

- **Total Clients**: Number of active businesses
- **Published Articles**: Content library size
- **SEO Pages**: Programmatic page count
- **Active Backlinks**: Citation and link count

### Quick Actions

1. **Add New Client** (`/admin/clients/new`)
   - Business information form
   - Service area selection
   - Contact details and credentials

2. **Generate Articles** (`/admin/articles/generate`)
   - Bulk article creation
   - Template selection
   - SEO optimization

3. **Create SEO Pages** (`/admin/seo-pages/new`)
   - Location-based pages
   - Service-specific content
   - Automated meta data

4. **Manage Content** (`/admin/content`)
   - Edit existing articles
   - Update business information
   - Content performance tracking

### Content Management

- **Draft Articles**: Content in development
- **Ready for Review**: Articles pending approval
- **Published**: Live content
- **Scheduled**: Future publication dates

## Data Structure Reference

### Core Types

```typescript
// Business entity
interface Business {
  id: string
  name: string
  slug: string
  description: string
  industry: string
  services: string[]
  serviceAreas: string[]
  contact: ContactInfo
  address: Address
  headquarters: Headquarters
  // ... additional fields
}

// Article entity
interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  authorId: string // Links to business
  publishedAt: string
  category: string
  tags: string[]
  // ... additional fields
}

// Service area entity
interface ServiceArea {
  id: string
  businessId: string
  city: string
  state: string
  services: string[]
}

// Citation entity
interface Citation {
  id: string
  businessId: string
  businessName: string
  address: Address
  phone: string
  website?: string
  serviceArea: string
  services: string[]
  description: string
}
```

## API Functions

### Business Functions

```typescript
// Get business by slug
getBusinessBySlug(slug: string): Business | undefined

// Filter businesses by industry
getBusinessesByIndustry(industry: string): Business[]

// Search businesses
searchBusinesses(query: string, location?: string): Business[]

// Get featured businesses
getFeaturedBusinesses(): Business[]
```

### Article Functions

```typescript
// Get article by slug  
getArticleBySlug(slug: string): Article | undefined

// Get featured articles
getFeaturedArticles(): Article[]

// Get recent articles
getRecentArticles(limit?: number): Article[]

// Get articles by category
getArticlesByCategory(category: string): Article[]

// Search articles
searchArticles(query: string): Article[]

// Get articles by business
getArticlesByBusiness(businessId: string): Article[]
```

### Service Area Functions

```typescript
// Get service areas for a business
getServiceAreasByBusiness(businessId: string): ServiceArea[]

// Get citations for a business
getBusinessCitations(businessId: string): Citation[]
```

## Best Practices

### SEO Optimization

1. **Keyword Integration**: Include city + service combinations in titles and content
2. **Local Intent**: Focus on "near me" and location-specific searches
3. **Content Depth**: Create comprehensive guides, not thin content
4. **Internal Linking**: Link between related services and locations

### Content Strategy

1. **Seasonal Content**: Create timely articles (winter plumbing, summer HVAC)
2. **Problem-Solution Format**: Address common customer pain points
3. **Local Authority**: Reference local landmarks, weather, regulations
4. **Multiple Formats**: How-to guides, cost breakdowns, comparison articles

### Technical Implementation

1. **Schema Markup**: Implement LocalBusiness structured data
2. **Mobile Optimization**: Ensure responsive design for local searches
3. **Page Speed**: Optimize for fast loading on mobile devices
4. **Local Citations**: Maintain consistent NAP across all platforms

## Troubleshooting

### Common Issues

1. **Duplicate Content**: Ensure each service area has unique content
2. **Missing Citations**: Verify all service areas have complete citation data
3. **Broken Links**: Check internal links between businesses and articles
4. **Image Optimization**: Use proper alt tags with local keywords

### Debug Functions

```typescript
// Check business data integrity
console.log(getBusinessBySlug('your-business-slug'))

// Verify service areas
console.log(getServiceAreasByBusiness('your-business-id'))

// Test article associations
console.log(getArticlesByBusiness('your-business-id'))
```

## Development Workflow

1. **Add Business Data**: Start with basic business information
2. **Create Service Areas**: Define geographic coverage
3. **Generate Articles**: Create location-specific content
4. **Build Citations**: Ensure local SEO consistency
5. **Test Pages**: Verify all routes and links work
6. **SEO Audit**: Check meta tags, schema, and performance

---

This guide provides a comprehensive overview of managing businesses and content in the Local Service Near You platform. For additional support or custom implementations, refer to the codebase documentation or contact the development team.
