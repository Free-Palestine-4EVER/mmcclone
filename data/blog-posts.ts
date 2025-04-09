export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  date: string
  image: string
  category: string
  content: string
}

// Import blog posts from individual files with their correct export names
import { firstTimeVisit } from "./blog-posts/first-time-visit"
import { bestTimeToVisit } from "./blog-posts/best-time-to-visit"
import { uniqueLandscape } from "./blog-posts/unique-landscape"
import { howToGetThere } from "./blog-posts/how-to-get-there"
import { packingList } from "./blog-posts/packing-list"
import { wadiRumWeather } from "./blog-posts/wadi-rum-weather"
import { stayingSafe } from "./blog-posts/staying-safe"
import { mustVisitDestination } from "./blog-posts/must-visit-destination"
import { choosingBestTour } from "./blog-posts/choosing-best-tour"
import { hiddenGems } from "./blog-posts/hidden-gems"
import { bestCamps } from "./blog-posts/best-camps"
import { campTypesComparison } from "./blog-posts/camp-types-comparison"
import { sleepingUnderStars } from "./blog-posts/sleeping-under-stars"
import { bubbleTentExperience } from "./blog-posts/bubble-tent-experience"
import { luxuryCampExperience } from "./blog-posts/luxury-camp-experience"

// Import tour-related blog posts
import { completeJeepToursGuide } from "./blog-posts/complete-jeep-tours-guide"
import { sunsetJeepTour } from "./blog-posts/sunset-jeep-tour"
import { halfDayJeepTour } from "./blog-posts/half-day-jeep-tour"
import { camelRideTours } from "./blog-posts/camel-ride-tours"
import { jeepCamelComboTour } from "./blog-posts/jeep-camel-combo-tour"

// Import adventure activity blog posts
import { sandboarding } from "./blog-posts/sandboarding"
import { rockClimbing } from "./blog-posts/rock-climbing"
import { hotAirBalloon } from "./blog-posts/hot-air-balloon"
import { hikingTrails } from "./blog-posts/hiking-trails"
import { stargazing } from "./blog-posts/stargazing"

// Import Bedouin culture blog posts - commenting out problematic imports for now
import { bedouinWayOfLife } from "./blog-posts/bedouin-way-of-life"
// We'll add the rest of the imports back once we've fixed the first one

// Import the new blog posts at the top with the other imports
import { wadiRumVisa } from "./blog-posts/wadi-rum-visa"
import { bestTravelAgencies } from "./blog-posts/best-travel-agencies"
import { transportationTips } from "./blog-posts/transportation-tips"
import { budgetingWadiRum } from "./blog-posts/budgeting-wadi-rum"
import { entryFees } from "./blog-posts/entry-fees"

// Import the 40 new Jeep tour blog posts
import { bestJeepToursFirstTime } from "./blog-posts/best-jeep-tours-first-time"
import { whatsIncludedJeepTour } from "./blog-posts/whats-included-jeep-tour"
import { jeepTourDuration } from "./blog-posts/jeep-tour-duration"
import { kidsJeepTours } from "./blog-posts/kids-jeep-tours"
import { privateVsGroupJeepTour } from "./blog-posts/private-vs-group-jeep-tour"
import { jeepToursWithLunch } from "./blog-posts/jeep-tours-with-lunch"
import { exploringValleysArches } from "./blog-posts/exploring-valleys-arches"
import { jeepTourItinerary } from "./blog-posts/jeep-tour-itinerary"
import { jeepTourReviews } from "./blog-posts/jeep-tour-reviews"
import { jeepToursFromVillage } from "./blog-posts/jeep-tours-from-village"
import { bookingAdvanceOrArrival } from "./blog-posts/booking-advance-or-arrival"
import { jeepToursOvernight } from "./blog-posts/jeep-tours-overnight"
import { jeepToursStargazing } from "./blog-posts/jeep-tours-stargazing"
import { jeepToursBedouinGuides } from "./blog-posts/jeep-tours-bedouin-guides"
import { topNaturalLandmarks } from "./blog-posts/top-natural-landmarks"
import { jeepTourCost2025 } from "./blog-posts/jeep-tour-cost-2025"
import { fullDayJeepWorthIt } from "./blog-posts/full-day-jeep-worth-it"
import { jeepToursSandboarding } from "./blog-posts/jeep-tours-sandboarding"
import { whatToWearJeepTour } from "./blog-posts/what-to-wear-jeep-tour"
import { bestJeepTourPhotographers } from "./blog-posts/best-jeep-tour-photographers"
import { jeepTourCouples } from "./blog-posts/jeep-tour-couples"
import { romanticSunsetJeepTours } from "./blog-posts/romantic-sunset-jeep-tours"
import { jeepCamelCombo } from "./blog-posts/jeep-camel-combo"
import { twoDayJeepItinerary } from "./blog-posts/two-day-jeep-itinerary"
import { bookingFromAqabaPetra } from "./blog-posts/booking-from-aqaba-petra"
import { jeepToursCampingStars } from "./blog-posts/jeep-tours-camping-stars"
import { earlyMorningJeepTours } from "./blog-posts/early-morning-jeep-tours"
import { adventureSeekersJeepTours } from "./blog-posts/adventure-seekers-jeep-tours"
import { jeepToursSeasons } from "./blog-posts/jeep-tours-seasons"
import { preparingJeepSafari } from "./blog-posts/preparing-jeep-safari"
import { bedouinLunchJeepTours } from "./blog-posts/bedouin-lunch-jeep-tours"
import { seniorsJeepTours } from "./blog-posts/seniors-jeep-tours"
import { historyCultureJeepTour } from "./blog-posts/history-culture-jeep-tour"
import { panoramicViewpointsJeep } from "./blog-posts/panoramic-viewpoints-jeep"
import { familyFriendlyJeepTours } from "./blog-posts/family-friendly-jeep-tours"
import { jeepHotAirBalloonPackages } from "./blog-posts/jeep-hot-air-balloon-packages"
import { jeepToursRockBridges } from "./blog-posts/jeep-tours-rock-bridges"
import { sunsetVsSunriseJeep } from "./blog-posts/sunset-vs-sunrise-jeep"
import { soloTravelersJeepTours } from "./blog-posts/solo-travelers-jeep-tours"
import { uniqueWadiRumJeepTours } from "./blog-posts/unique-wadi-rum-jeep-tours"

// Use the same image for all blog posts
const standardBlogImage = "/images/stargazing-arch.png"

// Function to standardize the image for all blog posts
const standardizeImage = (post: BlogPost): BlogPost => ({
  ...post,
  image: standardBlogImage,
})

// Add the new blog posts to the blogPosts array
export const blogPosts: BlogPost[] = [
  firstTimeVisit,
  bestTimeToVisit,
  uniqueLandscape,
  howToGetThere,
  packingList,
  wadiRumWeather,
  stayingSafe,
  mustVisitDestination,
  choosingBestTour,
  hiddenGems,
  bestCamps,
  campTypesComparison,
  sleepingUnderStars,
  bubbleTentExperience,
  luxuryCampExperience,
  // Tour-related blog posts
  completeJeepToursGuide,
  sunsetJeepTour,
  halfDayJeepTour,
  camelRideTours,
  jeepCamelComboTour,
  // Adventure activity blog posts
  sandboarding,
  rockClimbing,
  hotAirBalloon,
  hikingTrails,
  stargazing,
  // Bedouin culture blog posts - only including the one we've fixed for now
  bedouinWayOfLife,
  // Add the new blog posts
  wadiRumVisa,
  bestTravelAgencies,
  transportationTips,
  budgetingWadiRum,
  entryFees,
  // Add the 40 new Jeep tour blog posts
  bestJeepToursFirstTime,
  whatsIncludedJeepTour,
  jeepTourDuration,
  kidsJeepTours,
  privateVsGroupJeepTour,
  jeepToursWithLunch,
  exploringValleysArches,
  jeepTourItinerary,
  jeepTourReviews,
  jeepToursFromVillage,
  bookingAdvanceOrArrival,
  jeepToursOvernight,
  jeepToursStargazing,
  jeepToursBedouinGuides,
  topNaturalLandmarks,
  jeepTourCost2025,
  fullDayJeepWorthIt,
  jeepToursSandboarding,
  whatToWearJeepTour,
  bestJeepTourPhotographers,
  jeepTourCouples,
  romanticSunsetJeepTours,
  jeepCamelCombo,
  twoDayJeepItinerary,
  bookingFromAqabaPetra,
  jeepToursCampingStars,
  earlyMorningJeepTours,
  adventureSeekersJeepTours,
  jeepToursSeasons,
  preparingJeepSafari,
  bedouinLunchJeepTours,
  seniorsJeepTours,
  historyCultureJeepTour,
  panoramicViewpointsJeep,
  familyFriendlyJeepTours,
  jeepHotAirBalloonPackages,
  jeepToursRockBridges,
  sunsetVsSunriseJeep,
  soloTravelersJeepTours,
  uniqueWadiRumJeepTours,
]
  .filter(Boolean) // Filter out any undefined posts
  .map(standardizeImage) // Apply the same image to all posts
