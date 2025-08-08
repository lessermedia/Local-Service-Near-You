# Business Configuration Management

This document explains how to manage and update business information throughout the Local Service Near You platform.

## Quick Start

To update any business information site-wide, edit the `BUSINESS_CONFIG` object in `/lib/constants.ts`. All business details are centralized in this single location.

## Configuration Structure

### Company Information
```typescript
companyName: "Local Service Near You",        // Full company name (used in headers, titles)
legalName: "Local Service Near You LLC",      // Legal entity name
brandName: "Local Service Near You",                 // Shorter brand name (used in logos, footers)
tagline: "Find trusted local service providers in your area",
description: "Connecting customers with trusted local service providers across the United States.",
```

### Contact Information
```typescript
contact: {
  phone: "(727) 637-7164",                   // Primary business phone
  email: "info@LocalServiceNearYou.com",         // General contact email
  supportEmail: "support@LocalServiceNearYou.com", // Support-specific email
  businessEmail: "business@LocalServiceNearYou.com", // Business inquiries email
},
```

### Address Information
```typescript
address: {
  street: "11045 Montcalm dr",
  city: "Spring Hill",
  state: "FL", 
  zipCode: "34608",
  country: "United States",
  full: "11045 Montcalm dr Spriong Hill, Fl 34608" // Auto-formatted
},
```

### Business Hours
```typescript
hours: {
  monday: { open: "9:00 AM", close: "6:00 PM", closed: false },
  tuesday: { open: "9:00 AM", close: "6:00 PM", closed: false },
  // ... for each day of the week
  sunday: { open: "12:00 PM", close: "4:00 PM", closed: true } // Set closed: true for closed days
},
```

### Website & Social Media
```typescript
website: {
  url: "https://localservicehub.com",
  domain: "localservicehub.com"
},

social: {
  facebook: "https://facebook.com/localservicehub",
  twitter: "https://twitter.com/localservicehub", 
  instagram: "https://instagram.com/localservicehub",
  linkedin: "https://linkedin.com/company/localservicehub"
},
```

## Helper Functions

The `/lib/business-config.ts` file provides helpful functions for working with business data:

### `getFormattedBusinessHours()`
Returns an array of formatted business hours for easy display:
```typescript
[
  { day: "Monday", hours: "9:00 AM - 6:00 PM" },
  { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
  { day: "Sunday", hours: "Closed" }
]
```

### `getFullAddress()`
Returns the complete formatted address string.

### `getPrimaryContact()`
Returns the primary contact information object.

### `getBusinessStructuredData()`
Generates Schema.org structured data for SEO.

### `getPageTitle(pageTitle, includeCompany)`
Generates SEO-friendly page titles with company branding.

## Files That Use Business Configuration

The following files automatically use the centralized business configuration:

- `/components/header.tsx` - Company name in header
- `/components/footer.tsx` - Company name, contact info, social links
- `/app/layout.tsx` - Page metadata and SEO information
- `/app/contact/page.tsx` - All contact information and business hours
- `/lib/utils.ts` - SEO title generation

## Making Changes

1. **Update Business Info**: Edit `/lib/constants.ts` > `BUSINESS_CONFIG`
2. **Changes Apply Everywhere**: All components using the config will automatically reflect changes
3. **No Code Changes Needed**: Just update the configuration values

## Examples

### Changing Company Name
```typescript
// In /lib/constants.ts
export const BUSINESS_CONFIG = {
  companyName: "Your New Company Name", // ← Change this
  // ... rest of config
}
```
This will update the header, footer, page titles, and all references site-wide.

### Updating Contact Information  
```typescript
// In /lib/constants.ts
contact: {
  phone: "(555) 987-6543",              // ← New phone number
  email: "hello@yournewdomain.com",     // ← New email
  // ...
},
```
This will update the footer, contact page, and anywhere contact info is displayed.

### Changing Business Hours
```typescript
// In /lib/constants.ts  
hours: {
  monday: { open: "8:00 AM", close: "7:00 PM", closed: false }, // ← Extended hours
  // ...
  sunday: { open: "10:00 AM", close: "2:00 PM", closed: false }, // ← Now open Sundays
},
```
This will update the contact page business hours display automatically.

## Benefits

- **Single Source of Truth**: All business information in one place
- **Consistent Branding**: Ensures consistent information across the entire site
- **Easy Maintenance**: Update once, changes everywhere
- **SEO Optimization**: Structured data and consistent information helps with search rankings
- **Developer Friendly**: Clear separation of content and code

## Need Help?

If you need to add new business information fields or modify how the configuration is used, refer to the existing patterns in `/lib/business-config.ts` and the component implementations.
