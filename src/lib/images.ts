/**
 * Verified Unsplash photo IDs (return HTTP 200).
 * Use unsplash() for consistent sizing params.
 */
export const photo = {
  hero: "photo-1469474968028-56623f02e42e",
  snowyMountain: "photo-1626621341517-bbf3d9990a23",
  mountainRange: "photo-1506905925346-21bda4d32df4",
  mountainPeak: "photo-1464822759023-fed622ff2c3b",
  mountainNight: "photo-1519681393784-d120267933ba",
  temple: "photo-1548013146-72479768bada",
  indiaArch: "photo-1564507592333-c60657eea523",
  indiaStreet: "photo-1473496169904-658ba7c44d8a",
  indiaBuilding: "photo-1587474260584-136574528ed5",
  beach: "photo-1507525428034-b723cf961d3e",
  beachPalm: "photo-1519046904884-53103b34b206",
  beachSunset: "photo-1559827260-dc66d52bef19",
  city: "photo-1566554273541-37a9ca77b91f",
  palace: "photo-1596422846543-75c6fc197f07",
  resort: "photo-1571896349842-33c89424de2d",
  roadTrip: "photo-1469854523086-cc02fe5d8800",
  tropical: "photo-1573843981267-be1999ff37cd",
  travel: "photo-1488646953014-85cb44e25828",
} as const;

export function unsplash(id: string, width = 1200): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export function unsplashGallery(ids: string[], width = 1600): string[] {
  return ids.map((id) => unsplash(id, width));
}
