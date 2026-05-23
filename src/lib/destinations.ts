import { photo, unsplash, unsplashGallery } from "./images";

export const destinationStates = [
  "Himachal",
  "Uttarakhand",
  "Rajasthan",
  "Goa",
  "Maharashtra",
] as const;

export type DestinationState = (typeof destinationStates)[number];

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type Destination = {
  slug: string;
  name: string;
  state: DestinationState;
  shortDescription: string;
  description: string;
  priceFrom: number;
  duration: string;
  image: string;
  gallery: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
};

export const destinations: Destination[] = [
  {
    slug: "manali",
    name: "Manali",
    state: "Himachal",
    shortDescription:
      "Snow-capped peaks, pine forests, and adventure sports in the Kullu Valley.",
    description:
      "Manali is a Himalayan resort town beloved by honeymooners, trekkers, and skiers. Wander through Old Manali's cafés, cross the Rohtang Pass, or unwind beside the Beas River.",
    priceFrom: 12999,
    duration: "5 days / 4 nights",
    image: unsplash(photo.snowyMountain),
    gallery: unsplashGallery([
      photo.snowyMountain,
      photo.mountainRange,
      photo.mountainPeak,
      photo.mountainNight,
    ]),
    highlights: [
      "Solang Valley paragliding & skiing",
      "Hadimba Temple & Old Manali lanes",
      "Rohtang Pass day excursion",
      "Riverside bonfire evenings",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali",
        description:
          "Private transfer to your riverside lodge. Evening acclimatisation walk along Mall Road.",
      },
      {
        day: 2,
        title: "Solang Valley Adventure",
        description:
          "Paragliding or zorbing (seasonal), followed by lunch at a mountain café.",
      },
      {
        day: 3,
        title: "Rohtang Pass Excursion",
        description:
          "Full-day guided trip to snow viewpoints with photo stops and hot tea breaks.",
      },
      {
        day: 4,
        title: "Culture & Cafés",
        description:
          "Visit Hadimba Temple, explore Old Manali, and enjoy a farewell dinner.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Breakfast and transfer to Kullu airport or Chandigarh.",
      },
    ],
  },
  {
    slug: "shimla",
    name: "Shimla",
    state: "Himachal",
    shortDescription:
      "Colonial charm, ridge walks, and toy-train journeys in the Queen of Hills.",
    description:
      "Shimla's Victorian architecture and cedar forests make it one of India's most romantic hill stations. Ride the UNESCO toy train and stroll the famous Mall Road at sunset.",
    priceFrom: 11499,
    duration: "4 days / 3 nights",
    image: unsplash(photo.mountainNight),
    gallery: unsplashGallery([
      photo.mountainNight,
      photo.mountainRange,
      photo.hero,
    ]),
    highlights: [
      "Kalka–Shimla toy train ride",
      "The Ridge & Christ Church",
      "Jakhoo Temple sunrise hike",
      "Heritage hotel stay",
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Shimla",
        description:
          "Scenic drive or train arrival. Evening stroll on The Ridge.",
      },
      {
        day: 2,
        title: "Heritage Walk",
        description:
          "Guided colonial architecture tour with tea at a century-old lodge.",
      },
      {
        day: 3,
        title: "Jakhoo & Kufri",
        description: "Morning temple hike and afternoon excursion to Kufri.",
      },
      {
        day: 4,
        title: "Departure",
        description: "Leisurely breakfast before your onward journey.",
      },
    ],
  },
  {
    slug: "spiti-valley",
    name: "Spiti Valley",
    state: "Himachal",
    shortDescription:
      "Remote monasteries, high-altitude desert landscapes, and star-filled skies.",
    description:
      "Spiti is a trans-Himalayan wonderland of ancient Buddhist monasteries and dramatic barren valleys. Perfect for photographers and slow travellers seeking solitude.",
    priceFrom: 24999,
    duration: "7 days / 6 nights",
    image: unsplash(photo.mountainRange),
    gallery: unsplashGallery([
      photo.mountainRange,
      photo.mountainPeak,
      photo.mountainNight,
    ]),
    highlights: [
      "Key Monastery visit",
      "Chandratal Lake camping",
      "Village homestay experience",
      "Astrophotography nights",
    ],
    itinerary: [
      {
        day: 1,
        title: "Manali to Kaza",
        description:
          "Cross Rohtang and Kunzum Pass in a 4x4 convoy with lunch stops.",
      },
      {
        day: 2,
        title: "Monastery Circuit",
        description:
          "Explore Key, Tabo, and Dhankar monasteries with a local guide.",
      },
      {
        day: 3,
        title: "Pin Valley",
        description:
          "Wildlife spotting and short hikes in the Pin Valley National Park.",
      },
      {
        day: 4,
        title: "Chandratal Lake",
        description: "Camp beside the crescent lake under a blanket of stars.",
      },
      {
        day: 5,
        title: "Village Life",
        description:
          "Homestay in Langza or Komic — the highest motorable villages.",
      },
      {
        day: 6,
        title: "Return via Kunzum",
        description: "Scenic drive back toward Manali with farewell dinner.",
      },
      {
        day: 7,
        title: "Departure",
        description: "Early transfer to Manali or Bhuntar airport.",
      },
    ],
  },
  {
    slug: "rishikesh",
    name: "Rishikesh",
    state: "Uttarakhand",
    shortDescription:
      "Yoga capital on the Ganges with rafting, ashrams, and suspension bridges.",
    description:
      "Rishikesh blends spirituality and adventure at the foothills of the Himalayas. Meditate at sunrise, raft the Ganges by afternoon, and hear temple bells at dusk.",
    priceFrom: 8999,
    duration: "4 days / 3 nights",
    image: unsplash(photo.temple),
    gallery: unsplashGallery([photo.temple, photo.mountainRange, photo.hero]),
    highlights: [
      "Ganges white-water rafting",
      "Sunrise yoga session",
      "Laxman Jhula & Beatles Ashram",
      "Ganga Aarti ceremony",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Aarti",
        description: "Check in riverside. Evening Ganga Aarti at Triveni Ghat.",
      },
      {
        day: 2,
        title: "Yoga & Ashram Walk",
        description:
          "Morning yoga class and guided walk through spiritual Rishikesh.",
      },
      {
        day: 3,
        title: "Rafting Adventure",
        description:
          "16 km rafting stretch with cliff-jump options (optional).",
      },
      {
        day: 4,
        title: "Departure",
        description: "Breakfast and transfer to Haridwar or Dehradun airport.",
      },
    ],
  },
  {
    slug: "mussoorie",
    name: "Mussoorie",
    state: "Uttarakhand",
    shortDescription:
      "Misty hills, waterfall trails, and panoramic views of the Doon Valley.",
    description:
      "Mussoorie is a classic hill retreat above Dehradun. Cable-car rides, colonial bungalows, and Kempty Falls make it ideal for families and weekend getaways.",
    priceFrom: 9999,
    duration: "3 days / 2 nights",
    image: unsplash(photo.mountainNight),
    gallery: unsplashGallery([photo.mountainNight, photo.hero]),
    highlights: [
      "Gun Hill cable car",
      "Kempty Falls picnic",
      "Camel's Back Road walk",
      "Colonial library visit",
    ],
    itinerary: [
      {
        day: 1,
        title: "Hill Station Welcome",
        description:
          "Drive from Dehradun. Evening on Mall Road with local snacks.",
      },
      {
        day: 2,
        title: "Waterfalls & Views",
        description: "Kempty Falls morning trip and Gun Hill sunset cable car.",
      },
      {
        day: 3,
        title: "Departure",
        description: "Leisurely breakfast and scenic drive downhill.",
      },
    ],
  },
  {
    slug: "nainital",
    name: "Nainital",
    state: "Uttarakhand",
    shortDescription:
      "Emerald lake town surrounded by deodar forests and Himalayan viewpoints.",
    description:
      "Nainital centres on its namesake pear-shaped lake. Boat rides, ropeway views, and nearby Jim Corbett extensions make it a versatile Uttarakhand escape.",
    priceFrom: 10499,
    duration: "4 days / 3 nights",
    image: unsplash(photo.mountainPeak),
    gallery: unsplashGallery([photo.mountainPeak, photo.mountainRange]),
    highlights: [
      "Naini Lake boating",
      "Snow View Point ropeway",
      "Eco cave gardens",
      "Local market & candles",
    ],
    itinerary: [
      {
        day: 1,
        title: "Lake Arrival",
        description:
          "Check in lakeside. Evening boat ride as lights reflect on water.",
      },
      {
        day: 2,
        title: "Viewpoints",
        description: "Ropeway to Snow View and picnic at Tiffin Top meadow.",
      },
      {
        day: 3,
        title: "Surrounds",
        description:
          "Day trip to Bhimtal or Sattal for quieter lake experiences.",
      },
      {
        day: 4,
        title: "Departure",
        description: "Morning free time before transfer to Kathgodam station.",
      },
    ],
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    shortDescription:
      "The Pink City's palaces, bazaars, and royal Rajasthani hospitality.",
    description:
      "Jaipur is the gateway to Rajasthan — amber forts, bustling bazaars, and hand-block prints. Experience maharaja-era grandeur with modern boutique comfort.",
    priceFrom: 13999,
    duration: "5 days / 4 nights",
    image: unsplash(photo.indiaArch),
    gallery: unsplashGallery([photo.indiaArch, photo.temple, photo.hero]),
    highlights: [
      "Amber Fort elephant ride",
      "Hawa Mahal photo stop",
      "Johari Bazaar shopping",
      "Royal Rajasthani dinner",
    ],
    itinerary: [
      {
        day: 1,
        title: "Pink City Arrival",
        description:
          "Heritage haveli check-in. Evening bazaar walk with local guide.",
      },
      {
        day: 2,
        title: "Forts & Palaces",
        description:
          "Amber Fort, City Palace, and Jantar Mantar with expert historian.",
      },
      {
        day: 3,
        title: "Crafts & Cuisine",
        description:
          "Block-print workshop and cooking class in a noble family home.",
      },
      {
        day: 4,
        title: "Day at Leisure",
        description:
          "Optional hot-air balloon or spa afternoon. Farewell feast.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Transfer to Jaipur International Airport.",
      },
    ],
  },
  {
    slug: "udaipur",
    name: "Udaipur",
    state: "Rajasthan",
    shortDescription:
      "City of Lakes — romantic palaces, boat cruises, and sunset terraces.",
    description:
      "Udaipur enchants with Lake Pichola reflections, marble palaces, and rooftop dining. India's most romantic destination for couples and culture lovers.",
    priceFrom: 15499,
    duration: "4 days / 3 nights",
    image: unsplash(photo.palace),
    gallery: unsplashGallery([photo.palace, photo.indiaArch]),
    highlights: [
      "Lake Pichola sunset cruise",
      "City Palace museum",
      "Saheliyon-ki-Bari gardens",
      "Rooftop thali dinner",
    ],
    itinerary: [
      {
        day: 1,
        title: "Lake City Welcome",
        description:
          "Palace-view hotel check-in. Sunset boat cruise with champagne.",
      },
      {
        day: 2,
        title: "Royal Heritage",
        description: "City Palace tour and vintage car museum visit.",
      },
      {
        day: 3,
        title: "Countryside",
        description: "Excursion to Kumbhalgarh Fort or Ranakpur Jain temple.",
      },
      {
        day: 4,
        title: "Departure",
        description: "Morning at leisure before airport transfer.",
      },
    ],
  },
  {
    slug: "jaisalmer",
    name: "Jaisalmer",
    state: "Rajasthan",
    shortDescription:
      "Golden fort rising from the Thar Desert with camel safaris under stars.",
    description:
      "Jaisalmer's sandstone fort glows at dusk. Sleep in desert camps, ride camels over dunes, and hear folk music around a campfire in the Thar.",
    priceFrom: 16999,
    duration: "5 days / 4 nights",
    image: unsplash(photo.roadTrip),
    gallery: unsplashGallery([photo.roadTrip, photo.tropical, photo.travel]),
    highlights: [
      "Sam Sand Dunes camel trek",
      "Living fort exploration",
      "Desert luxury camp stay",
      "Rajasthani folk performance",
    ],
    itinerary: [
      {
        day: 1,
        title: "Golden Fort",
        description: "Arrive and wander the living fort's carved havelis.",
      },
      {
        day: 2,
        title: "Desert Camp",
        description:
          "Transfer to dunes. Camel ride and sunset photography session.",
      },
      {
        day: 3,
        title: "Desert Dawn",
        description: "Sunrise over dunes. Return for fort palace tour.",
      },
      {
        day: 4,
        title: "Village Visit",
        description:
          "Meet local artisans and enjoy a traditional desert feast.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Morning transfer to Jaisalmer station or airport.",
      },
    ],
  },
  {
    slug: "north-goa",
    name: "North Goa",
    state: "Goa",
    shortDescription:
      "Vibrant beaches, beach shacks, and Portuguese heritage in coastal Goa.",
    description:
      "North Goa pulses with energy — from Anjuna's flea markets to Calangute's waves. Perfect for groups seeking sun, seafood, and nightlife.",
    priceFrom: 11999,
    duration: "5 days / 4 nights",
    image: unsplash(photo.beachPalm),
    gallery: unsplashGallery([photo.beachPalm, photo.beachSunset]),
    highlights: [
      "Anjuna & Vagator beaches",
      "Fort Aguada sunset",
      "Seafood shack dinners",
      "Optional water sports",
    ],
    itinerary: [
      {
        day: 1,
        title: "Beach Arrival",
        description: "Coastal resort check-in. Sunset at Chapora Fort.",
      },
      {
        day: 2,
        title: "Beach Hopping",
        description: "Guided tour of Anjuna, Baga, and Calangute beaches.",
      },
      {
        day: 3,
        title: "Heritage Panjim",
        description: "Latin Quarter walk and river cruise in the capital.",
      },
      {
        day: 4,
        title: "Free Day",
        description: "Spa, scuba, or flea market — your choice.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Breakfast and transfer to Goa airport.",
      },
    ],
  },
  {
    slug: "south-goa",
    name: "South Goa",
    state: "Goa",
    shortDescription:
      "Quiet coves, luxury resorts, and pristine sands away from the crowds.",
    description:
      "South Goa offers a slower rhythm — palm-fringed Palolem, butterfly beaches, and spice plantation tours for travellers who prefer tranquillity.",
    priceFrom: 13499,
    duration: "5 days / 4 nights",
    image: unsplash(photo.beachSunset),
    gallery: unsplashGallery([photo.beachSunset, photo.beachPalm]),
    highlights: [
      "Palolem beach kayaking",
      "Spice plantation tour",
      "Cola Beach lagoon",
      "Beachfront yoga mornings",
    ],
    itinerary: [
      {
        day: 1,
        title: "Serene Arrival",
        description:
          "Boutique beach resort check-in. Candlelit dinner on sand.",
      },
      {
        day: 2,
        title: "Coastal Exploration",
        description: "Kayak Palolem bay and visit Cabo de Rama fort ruins.",
      },
      {
        day: 3,
        title: "Spice & Nature",
        description: "Plantation tour with traditional Goan lunch included.",
      },
      {
        day: 4,
        title: "Relaxation",
        description: "Spa day or dolphin-watching cruise (seasonal).",
      },
      {
        day: 5,
        title: "Departure",
        description: "Leisurely morning before airport transfer.",
      },
    ],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    shortDescription:
      "India's maximum city — Gateway of India, Bollywood, and coastal drives.",
    description:
      "Mumbai is a sensory feast of art deco architecture, street food, and Arabian Sea sunsets. Explore Elephanta Caves and the city's legendary food scene.",
    priceFrom: 12499,
    duration: "4 days / 3 nights",
    image: unsplash(photo.city),
    gallery: unsplashGallery([
      photo.city,
      photo.indiaStreet,
      photo.indiaBuilding,
    ]),
    highlights: [
      "Gateway of India & Elephanta",
      "Marine Drive sunset",
      "Dharavi slum tour (ethical)",
      "Street food tasting walk",
    ],
    itinerary: [
      {
        day: 1,
        title: "City Introduction",
        description:
          "Colaba check-in. Gateway of India and Colaba Causeway evening.",
      },
      {
        day: 2,
        title: "Heritage & Art",
        description:
          "Chhatrapati Shivaji Terminus, Kala Ghoda, and museum visits.",
      },
      {
        day: 3,
        title: "Food & Film",
        description: "Street food tour and optional Bollywood studio visit.",
      },
      {
        day: 4,
        title: "Departure",
        description: "Morning Marine Drive walk before airport transfer.",
      },
    ],
  },
  {
    slug: "lonavala",
    name: "Lonavala",
    state: "Maharashtra",
    shortDescription:
      "Monsoon mist, chikki sweets, and hilltop viewpoints above Mumbai.",
    description:
      "Lonavala is Maharashtra's favourite weekend escape. Waterfalls swell in monsoon, while winter brings clear views over the Western Ghats.",
    priceFrom: 7999,
    duration: "3 days / 2 nights",
    image: unsplash(photo.hero),
    gallery: unsplashGallery([photo.hero, photo.mountainRange]),
    highlights: [
      "Tiger Point sunrise",
      "Karla & Bhaja caves",
      "Chikki factory visit",
      "Bhushi Dam picnic",
    ],
    itinerary: [
      {
        day: 1,
        title: "Hill Escape",
        description:
          "Drive from Mumbai/Pune. Evening viewpoints and local chikki tasting.",
      },
      {
        day: 2,
        title: "Caves & Waterfalls",
        description: "Ancient Buddhist caves and seasonal waterfall hike.",
      },
      {
        day: 3,
        title: "Departure",
        description: "Morning at leisure before return drive.",
      },
    ],
  },
  {
    slug: "mahabaleshwar",
    name: "Mahabaleshwar",
    state: "Maharashtra",
    shortDescription:
      "Strawberry farms, misty plateaus, and panoramic Western Ghats views.",
    description:
      "Mahabaleshwar's cool climate and strawberry farms make it a refreshing plateau retreat. Combine with Pratapgad Fort for history and scenery.",
    priceFrom: 8499,
    duration: "3 days / 2 nights",
    image: unsplash(photo.mountainRange),
    gallery: unsplashGallery([photo.mountainRange, photo.hero]),
    highlights: [
      "Mapro Garden strawberries",
      "Arthur's Seat viewpoint",
      "Venna Lake boating",
      "Pratapgad Fort excursion",
    ],
    itinerary: [
      {
        day: 1,
        title: "Plateau Arrival",
        description: "Scenic drive up the ghats. Sunset at Arthur's Seat.",
      },
      {
        day: 2,
        title: "Farms & Fort",
        description: "Strawberry farm tour and Pratapgad history walk.",
      },
      {
        day: 3,
        title: "Departure",
        description: "Morning lake stroll before descending the ghats.",
      },
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug);
}

export function getAllDestinationSlugs(): string[] {
  return destinations.map((destination) => destination.slug);
}

export function formatPriceInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
