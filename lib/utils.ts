import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { BUSINESS_CONFIG } from './constants'

// City to state mapping for proper service area URLs
export const CITY_TO_STATE_MAP: Record<string, string> = {
  "New York": "New York",
  "Los Angeles": "California", 
  "Chicago": "Illinois",
  "Houston": "Texas",
  "Phoenix": "Arizona",
  "Philadelphia": "Pennsylvania",
  "San Antonio": "Texas",
  "San Diego": "California",
  "Dallas": "Texas",
  "Jacksonville": "Florida",
  "Fort Worth": "Texas",
  "San Jose": "California",
  "Austin": "Texas",
  "Charlotte": "North Carolina",
  "Columbus": "Ohio",
  "Indianapolis": "Indiana",
  "San Francisco": "California",
  "Seattle": "Washington",
  "Denver": "Colorado",
  "Oklahoma City": "Oklahoma",
  "Nashville": "Tennessee",
  "Washington": "District of Columbia",
  "El Paso": "Texas",
  "Las Vegas": "Nevada",
  "Boston": "Massachusetts",
  "Detroit": "Michigan",
  "Louisville": "Kentucky",
  "Portland": "Oregon",
  "Memphis": "Tennessee",
  "Baltimore": "Maryland",
  "Milwaukee": "Wisconsin",
  "Albuquerque": "New Mexico",
  "Tucson": "Arizona",
  "Fresno": "California",
  "Sacramento": "California",
  "Atlanta": "Georgia",
  "Mesa": "Arizona",
  "Kansas City": "Missouri",
  "Raleigh": "North Carolina",
  "Colorado Springs": "Colorado",
  "Omaha": "Nebraska",
  "Miami": "Florida",
  "Virginia Beach": "Virginia",
  "Long Beach": "California",
  "Oakland": "California",
  "Minneapolis": "Minnesota",
  "Bakersfield": "California",
  "Tulsa": "Oklahoma",
  "Tampa": "Florida",
  "Arlington": "Texas",
  "Aurora": "Colorado",
  "Wichita": "Kansas",
  "Cleveland": "Ohio",
  "New Orleans": "Louisiana",
  "Henderson": "Nevada",
  "Honolulu": "Hawaii",
  "Anaheim": "California",
  "Orlando": "Florida",
  "Lexington": "Kentucky",
  "Stockton": "California",
  "Riverside": "California",
  "Irvine": "California",
  "Corpus Christi": "Texas",
  "Newark": "New Jersey",
  "Santa Ana": "California",
  "Cincinnati": "Ohio",
  "Pittsburgh": "Pennsylvania",
  "Saint Paul": "Minnesota",
  "Greensboro": "North Carolina",
  "Jersey City": "New Jersey",
  "Durham": "North Carolina",
  "Lincoln": "Nebraska",
  "North Las Vegas": "Nevada",
  "Plano": "Texas",
  "Anchorage": "Alaska",
  "Gilbert": "Arizona",
  "Madison": "Wisconsin",
  "Reno": "Nevada",
  "Chandler": "Arizona",
  "St. Louis": "Missouri",
  "Chula Vista": "California",
  "Buffalo": "New York",
  "Fort Wayne": "Indiana",
  "Lubbock": "Texas",
  "St. Petersburg": "Florida",
  "Toledo": "Ohio",
  "Laredo": "Texas",
  "Port St. Lucie": "Florida",
  "Glendale": "Arizona",
  "Irving": "Texas",
  "Winston-Salem": "North Carolina",
  "Chesapeake": "Virginia",
  "Garland": "Texas",
  "Scottsdale": "Arizona",
  "Boise": "Idaho",
  "Hialeah": "Florida",
  "Frisco": "Texas",
  "Richmond": "Virginia",
  "Cape Coral": "Florida",
  "Norfolk": "Virginia",
  "Spokane": "Washington",
  "Huntsville": "Alabama",
  "Santa Clarita": "California",
  "Tacoma": "Washington",
  "Fremont": "California",
  "McKinney": "Texas",
  "San Bernardino": "California",
  "Baton Rouge": "Louisiana",
  "Modesto": "California",
  "Fontana": "California",
  "Salt Lake City": "Utah",
  "Moreno Valley": "California",
  "Des Moines": "Iowa",
  "Worcester": "Massachusetts",
  "Yonkers": "New York",
  "Fayetteville": "North Carolina",
  "Sioux Falls": "South Dakota",
  "Grand Prairie": "Texas",
  "Rochester": "New York",
  "Tallahassee": "Florida",
  "Little Rock": "Arkansas",
  "Amarillo": "Texas",
  "Overland Park": "Kansas",
  "Augusta": "Georgia",
  "Mobile": "Alabama",
  "Oxnard": "California",
  "Grand Rapids": "Michigan",
  "Peoria": "Arizona",
  "Vancouver": "Washington",
  "Knoxville": "Tennessee",
  "Birmingham": "Alabama",
  "Montgomery": "Alabama",
  "Providence": "Rhode Island",
  "Huntington Beach": "California",
  "Brownsville": "Texas",
  "Chattanooga": "Tennessee",
  "Fort Lauderdale": "Florida",
  "Tempe": "Arizona",
  "Akron": "Ohio",
  "Clarksville": "Tennessee",
  "Ontario": "California",
  "Newport News": "Virginia",
  "Elk Grove": "California",
  "Cary": "North Carolina",
  "Salem": "Oregon",
  "Pembroke Pines": "Florida",
  "Eugene": "Oregon",
  "Santa Rosa": "California",
  "Rancho Cucamonga": "California",
  "Shreveport": "Louisiana",
  "Garden Grove": "California",
  "Oceanside": "California",
  "Fort Collins": "Colorado",
  "Springfield": "Missouri",
  "Murfreesboro": "Tennessee",
  "Surprise": "Arizona",
  "Lancaster": "California",
  "Denton": "Texas",
  "Roseville": "California",
  "Palmdale": "California",
  "Corona": "California",
  "Salinas": "California",
  "Killeen": "Texas",
  "Paterson": "New Jersey",
  "Alexandria": "Virginia",
  "Hollywood": "Florida",
  "Hayward": "California",
  "Charleston": "South Carolina",
  "Macon": "Georgia",
  "Lakewood": "Colorado",
  "Sunnyvale": "California",
  "Bellevue": "Washington",
  "Naperville": "Illinois",
  "Joliet": "Illinois",
  "Bridgeport": "Connecticut",
  "Mesquite": "Texas",
  "Pasadena": "Texas",
  "Olathe": "Kansas",
  "Escondido": "California",
  "Savannah": "Georgia",
  "McAllen": "Texas",
  "Gainesville": "Florida",
  "Pomona": "California",
  "Rockford": "Illinois",
  "Thornton": "Colorado",
  "Waco": "Texas",
  "Visalia": "California",
  "Syracuse": "New York",
  "Columbia": "South Carolina",
  "Midland": "Texas",
  "Miramar": "Florida",
  "Palm Bay": "Florida",
  "Jackson": "Mississippi",
  "Coral Springs": "Florida",
  "Victorville": "California",
  "Elizabeth": "New Jersey",
  "Fullerton": "California",
  "Meridian": "Idaho",
  "Torrance": "California",
  "Stamford": "Connecticut",
  "West Valley City": "Utah",
  "Orange": "California",
  "Cedar Rapids": "Iowa",
  "Warren": "Michigan",
  "Hampton": "Virginia",
  "New Haven": "Connecticut",
  "Kent": "Washington",
  "Dayton": "Ohio",
  "Fargo": "North Dakota",
  "Lewisville": "Texas",
  "Carrollton": "Texas",
  "Round Rock": "Texas",
  "Sterling Heights": "Michigan",
  "Santa Clara": "California",
  "Norman": "Oklahoma",
  "Abilene": "Texas",
  "Pearland": "Texas",
  "Athens": "Georgia",
  "College Station": "Texas",
  "Clovis": "California",
  "West Palm Beach": "Florida",
  "Allentown": "Pennsylvania",
  "North Charleston": "South Carolina",
  "Simi Valley": "California",
  "Topeka": "Kansas",
  "Wilmington": "North Carolina",
  "Lakeland": "Florida",
  "Thousand Oaks": "California",
  "Concord": "California",
  "Vallejo": "California",
  "Ann Arbor": "Michigan",
  "Broken Arrow": "Oklahoma",
  "Fairfield": "California",
  "Lafayette": "Louisiana",
  "Hartford": "Connecticut",
  "Arvada": "Colorado",
  "Berkeley": "California",
  "Independence": "Missouri",
  "Billings": "Montana",
  "Cambridge": "Massachusetts",
  "Lowell": "Massachusetts",
  "Odessa": "Texas",
  "High Point": "North Carolina",
  "League City": "Texas",
  "Antioch": "California",
  "Richardson": "Texas",
  "Goodyear": "Arizona",
  "Pompano Beach": "Florida",
  "Nampa": "Idaho",
  "Menifee": "California",
  "Las Cruces": "New Mexico",
  "Clearwater": "Florida",
  "West Jordan": "Utah",
  "New Braunfels": "Texas",
  "Manchester": "New Hampshire",
  "Miami Gardens": "Florida",
  "Waterbury": "Connecticut",
  "Provo": "Utah",
  "Evansville": "Indiana",
  "Westminster": "Colorado",
  "Elgin": "Illinois",
  "Conroe": "Texas",
  "Greeley": "Colorado",
  "Lansing": "Michigan",
  "Buckeye": "Arizona",
  "Tuscaloosa": "Alabama",
  "Allen": "Texas",
  "Carlsbad": "California",
  "Everett": "Washington",
  "Beaumont": "Texas",
  "Murrieta": "California",
  "Rio Rancho": "New Mexico",
  "Temecula": "California",
  "Tyler": "Texas",
  "Davie": "Florida",
  "South Fulton": "Georgia",
  "Sparks": "Nevada",
  "Gresham": "Oregon",
  "Santa Maria": "California",
  "Pueblo": "Colorado",
  "Hillsboro": "Oregon",
  "Edison": "New Jersey",
  "Sugar Land": "Texas",
  "Ventura": "California",
  "Downey": "California",
  "Costa Mesa": "California",
  "Centennial": "Colorado",
  "Edinburg": "Texas",
  "Spokane Valley": "Washington",
  "Jurupa Valley": "California",
  "Bend": "Oregon",
  "West Covina": "California",
  "Boulder": "Colorado",
  "Palm Coast": "Florida",
  "Lee's Summit": "Missouri",
  "Dearborn": "Michigan",
  "Green Bay": "Wisconsin",
  "St. George": "Utah",
  "Woodbridge": "New Jersey",
  "Brockton": "Massachusetts",
  "Renton": "Washington",
  "Sandy Springs": "Georgia",
  "Rialto": "California",
  "El Monte": "California",
  "Vacaville": "California",
  "Fishers": "Indiana",
  "South Bend": "Indiana",
  "Carmel": "Indiana",
  "Yuma": "Arizona",
  "Burbank": "California",
  "Lynn": "Massachusetts",
  "Quincy": "Massachusetts",
  "El Cajon": "California",
  "Suffolk": "Virginia",
  "San Mateo": "California",
  "Chico": "California",
  "Inglewood": "California",
  "Wichita Falls": "Texas",
  "Boca Raton": "Florida",
  "Hesperia": "California",
  "Daly City": "California",
  "Clinton": "Michigan",
  "Georgetown": "Texas",
  "New Bedford": "Massachusetts",
  "Albany": "New York",
  "Davenport": "Iowa",
  "Plantation": "Florida",
  "Deltona": "Florida",
  "Federal Way": "Washington",
  "San Angelo": "Texas",
  "Tracy": "California",
  "Sunrise": "Florida"
}

export function getServiceAreaSlug(city: string): string {
  const state = CITY_TO_STATE_MAP[city] || "Unknown"
  return `${city.toLowerCase().replace(/\s+/g, '-')}-${state.toLowerCase().replace(/\s+/g, '-')}`
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  return phoneRegex.test(phone)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export function generateMetaDescription(text: string, maxLength: number = 160): string {
  return truncateText(text, maxLength)
}

export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function generateSEOTitle(title: string, businessName?: string): string {
  if (businessName) {
    return `${title} | ${businessName}`
  }
  return `${title} | ${BUSINESS_CONFIG.companyName}`
}

export function generateBreadcrumbs(pathname: string) {
  const paths = pathname.split('/').filter(Boolean)
  const breadcrumbs: Array<{ name: string; href: string; isLast?: boolean }> = [{ name: 'Home', href: '/' }]
  
  let currentPath = ''
  paths.forEach((path, index) => {
    currentPath += `/${path}`
    const name = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
    breadcrumbs.push({
      name,
      href: currentPath,
      isLast: index === paths.length - 1
    })
  })
  
  return breadcrumbs
}
