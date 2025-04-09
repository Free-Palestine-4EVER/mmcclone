import { firstTimeVisit } from "./first-time-visit"

// Define the BlogPost interface
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

// Export all blog posts
export const blogPosts: BlogPost[] = [
  firstTimeVisit,
  // We'll add more posts here as they're created
  {
    id: "2",
    title: "The Best Time to Visit Wadi Rum: Month-by-Month Guide",
    slug: "best-time-to-visit",
    excerpt:
      "A comprehensive guide to the climate and conditions in Wadi Rum throughout the year to help you plan your trip.",
    date: "April 2, 2024",
    image: "/images/blog-landmarks.jpg",
    category: "Travel Tips",
    content: "Detailed content about the best time to visit Wadi Rum...",
  },
  {
    id: "3",
    title: "What Makes Wadi Rum Unique? Exploring the Desert's Landscape",
    slug: "unique-landscape",
    excerpt:
      "Discover the geological wonders and unique features that make Wadi Rum one of the most spectacular deserts in the world.",
    date: "March 28, 2024",
    image: "/images/blog-wonders.jpg",
    category: "Nature",
    content: "Detailed content about Wadi Rum's unique landscape...",
  },
  {
    id: "4",
    title: "How to Get to Wadi Rum from Amman, Aqaba, and Petra",
    slug: "how-to-get-there",
    excerpt:
      "A detailed guide on transportation options to reach Wadi Rum from major cities and tourist destinations in Jordan.",
    date: "March 25, 2024",
    image: "/images/blog-budget.jpg",
    category: "Travel Guide",
    content: "Detailed content about getting to Wadi Rum...",
  },
  {
    id: "5",
    title: "The Ultimate Wadi Rum Packing List",
    slug: "packing-list",
    excerpt: "Everything you need to pack for your Wadi Rum adventure, from clothing to equipment and essentials.",
    date: "March 20, 2024",
    image: "/images/blog-hidden-gems.jpg",
    category: "Travel Tips",
    content: "Detailed content about what to pack for Wadi Rum...",
  },
  {
    id: "6",
    title: "Wadi Rum Weather: What to Expect Throughout the Year",
    slug: "wadi-rum-weather",
    excerpt: "Understanding the desert climate and seasonal variations to prepare for your Wadi Rum adventure.",
    date: "March 15, 2024",
    image: "/images/blog-stargazing.jpg",
    category: "Travel Tips",
    content: "Detailed content about Wadi Rum weather...",
  },
  {
    id: "7",
    title: "How to Stay Safe While Exploring Wadi Rum",
    slug: "staying-safe",
    excerpt: "Essential safety tips and precautions for a worry-free desert adventure in Wadi Rum.",
    date: "March 10, 2024",
    image: "/images/blog-desert-night.jpg",
    category: "Travel Tips",
    content: "Detailed content about staying safe in Wadi Rum...",
  },
  {
    id: "8",
    title: "Why Wadi Rum is a Must-Visit Destination in Jordan",
    slug: "must-visit-destination",
    excerpt: "Discover why Wadi Rum should be at the top of your Jordan itinerary and what makes it so special.",
    date: "March 5, 2024",
    image: "/images/wadi-rum-landscape.jpg",
    category: "Travel Guide",
    content: "Detailed content about why Wadi Rum is a must-visit...",
  },
  {
    id: "9",
    title: "How to Choose the Best Wadi Rum Tour for Your Adventure",
    slug: "choosing-best-tour",
    excerpt: "A guide to selecting the right tour package based on your interests, time, and budget.",
    date: "March 1, 2024",
    image: "/images/jeep-tour-card.jpg",
    category: "Travel Guide",
    content: "Detailed content about choosing the best Wadi Rum tour...",
  },
  {
    id: "10",
    title: "5 Hidden Gems You Have to Visit in Wadi Rum",
    slug: "hidden-gems",
    excerpt: "Off-the-beaten-path locations in Wadi Rum that most tourists miss but are absolutely worth visiting.",
    date: "February 25, 2024",
    image: "/images/blog-hidden-gems.jpg",
    category: "Travel Guide",
    content: "Detailed content about hidden gems in Wadi Rum...",
  },
  {
    id: "11",
    title: "The Best Camps in Wadi Rum: Top Picks for Every Budget",
    slug: "best-camps-wadi-rum",
    excerpt: "A comprehensive guide to the best camping options in Wadi Rum for every type of traveler and budget.",
    date: "February 20, 2024",
    image: "/images/camping.jpg",
    category: "Accommodation",
    content: "Detailed content about the best camps in Wadi Rum...",
  },
  {
    id: "12",
    title: "How to Choose Between Tented Camps, Bubble Tents, and Bedouin Camps",
    slug: "camp-types-comparison",
    excerpt: "A comparison of different accommodation options in Wadi Rum to help you choose the perfect stay.",
    date: "February 15, 2024",
    image: "/images/camping.jpg",
    category: "Accommodation",
    content: "Detailed content comparing different camp types...",
  },
  {
    id: "13",
    title: "Sleeping Under the Stars in Wadi Rum: An Unforgettable Experience",
    slug: "sleeping-under-stars",
    excerpt: "Experience the magic of Wadi Rum's night sky and learn about the best stargazing spots in the desert.",
    date: "February 10, 2024",
    image: "/images/blog-stargazing.jpg",
    category: "Experiences",
    content: "Detailed content about sleeping under the stars...",
  },
  {
    id: "14",
    title: "Wadi Rum Bubble Tents: What's the Experience Like?",
    slug: "bubble-tent-experience",
    excerpt: "An inside look at the popular bubble tent experience in Wadi Rum and what to expect.",
    date: "February 5, 2024",
    image: "/images/camping.jpg",
    category: "Accommodation",
    content: "Detailed content about the bubble tent experience...",
  },
  {
    id: "15",
    title: "What to Expect from a Luxury Camp in Wadi Rum",
    slug: "luxury-camp-experience",
    excerpt: "Discover the amenities, services, and experiences offered by luxury desert camps in Wadi Rum.",
    date: "February 1, 2024",
    image: "/images/camping.jpg",
    category: "Accommodation",
    content: "Detailed content about luxury camping in Wadi Rum...",
  },
]
