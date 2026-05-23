import toursJson from "../../data/tours.json";
import { formatPriceInr } from "@/lib/destinations";

export type Tour = {
  slug: string;
  title: string;
  thumbnail: string;
  durationDays: number;
  durationLabel: string;
  price: number;
  rating: number;
  reviewCount: number;
  popularity: number;
  groupSizeMin: number;
  groupSizeMax: number;
  region: string;
  shortDescription: string;
};

export type SortOption =
  | "price-asc"
  | "price-desc"
  | "duration-asc"
  | "duration-desc"
  | "popularity-desc";

export type DurationFilter = "any" | "short" | "medium" | "long";

export type GroupSizeFilter = "any" | "solo" | "small" | "medium" | "large";

export const tours: Tour[] = toursJson as Tour[];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug);
}

export function getAllTourSlugs(): string[] {
  return tours.map((tour) => tour.slug);
}

export function getTourPriceBounds(): { min: number; max: number } {
  const prices = tours.map((tour) => tour.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
}

export { formatPriceInr };

export function matchesDurationFilter(
  days: number,
  filter: DurationFilter
): boolean {
  if (filter === "any") return true;
  if (filter === "short") return days <= 3;
  if (filter === "medium") return days >= 4 && days <= 6;
  return days >= 7;
}

export function matchesGroupSizeFilter(
  tour: Tour,
  filter: GroupSizeFilter
): boolean {
  if (filter === "any") return true;
  if (filter === "solo")
    return tour.groupSizeMin <= 2 && tour.groupSizeMax >= 1;
  if (filter === "small")
    return tour.groupSizeMin <= 4 && tour.groupSizeMax >= 2;
  if (filter === "medium")
    return tour.groupSizeMin <= 8 && tour.groupSizeMax >= 5;
  return tour.groupSizeMax >= 9;
}

export function sortTours(tourList: Tour[], sort: SortOption): Tour[] {
  const sorted = [...tourList];

  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "duration-asc":
      return sorted.sort((a, b) => a.durationDays - b.durationDays);
    case "duration-desc":
      return sorted.sort((a, b) => b.durationDays - a.durationDays);
    case "popularity-desc":
      return sorted.sort((a, b) => b.popularity - a.popularity);
    default:
      return sorted;
  }
}
