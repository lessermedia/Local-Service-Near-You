/**
 * Business Configuration Helper
 * 
 * This module provides easy access to business configuration data
 * and helper functions for common business information tasks.
 * 
 * To update business information site-wide, edit the BUSINESS_CONFIG
 * object in /lib/constants.ts
 */

import { BUSINESS_CONFIG } from './constants'

// Re-export the main config for easy access
export { BUSINESS_CONFIG }

/**
 * Get formatted business hours for display
 */
export function getFormattedBusinessHours(): Array<{day: string, hours: string}> {
  const days = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' },
  ]

  return days.map(({ key, label }) => {
    const dayConfig = BUSINESS_CONFIG.hours[key as keyof typeof BUSINESS_CONFIG.hours]
    return {
      day: label,
      hours: dayConfig.closed ? 'Closed' : `${dayConfig.open} - ${dayConfig.close}`
    }
  })
}

/**
 * Get full formatted address
 */
export function getFullAddress(): string {
  return BUSINESS_CONFIG.address.full
}

/**
 * Get primary contact information
 */
export function getPrimaryContact() {
  return {
    phone: BUSINESS_CONFIG.contact.phone,
    email: BUSINESS_CONFIG.contact.email,
    address: getFullAddress()
  }
}

/**
 * Generate structured data for SEO (Schema.org LocalBusiness)
 */
export function getBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_CONFIG.companyName,
    "alternateName": BUSINESS_CONFIG.brandName,
    "description": BUSINESS_CONFIG.description,
    "url": BUSINESS_CONFIG.website.url,
    "telephone": BUSINESS_CONFIG.contact.phone,
    "email": BUSINESS_CONFIG.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_CONFIG.address.street,
      "addressLocality": BUSINESS_CONFIG.address.city,
      "addressRegion": BUSINESS_CONFIG.address.state,
      "postalCode": BUSINESS_CONFIG.address.zipCode,
      "addressCountry": BUSINESS_CONFIG.address.country
    },
    "openingHoursSpecification": Object.entries(BUSINESS_CONFIG.hours).map(([day, config]) => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": day.charAt(0).toUpperCase() + day.slice(1),
      "opens": config.closed ? null : config.open.replace(' ', '').toLowerCase(),
      "closes": config.closed ? null : config.close.replace(' ', '').toLowerCase()
    })).filter(spec => spec.opens && spec.closes),
    "foundingDate": BUSINESS_CONFIG.founded.toString(),
    "sameAs": [
      BUSINESS_CONFIG.social.facebook,
      BUSINESS_CONFIG.social.twitter,
      BUSINESS_CONFIG.social.instagram,
      BUSINESS_CONFIG.social.linkedin
    ]
  }
}

/**
 * Get SEO-friendly page title
 */
export function getPageTitle(pageTitle: string, includeCompany = true): string {
  if (!includeCompany) return pageTitle
  return `${pageTitle} | ${BUSINESS_CONFIG.companyName}`
}

/**
 * Get SEO-friendly meta description
 */
export function getMetaDescription(customDescription?: string): string {
  return customDescription || BUSINESS_CONFIG.description
}
