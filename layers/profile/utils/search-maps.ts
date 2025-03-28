export type SearchResultType = {
  latitude: number;
  longitude: number;
  displayName: string;
  name?: string;
};
export type NominatimResponse = {
  place_id: number;
  licence: string;
  osm_type: "node" | "way" | "relation";
  osm_id: number;
  boundingbox: [string, string, string, string]; // [min_lat, max_lat, min_lon, max_lon]
  lat: string;
  lon: string;
  display_name: string;
  class: string; // e.g., "place", "amenity"
  type: string; // e.g., "city", "village"
  importance: number;
  name: string;
  icon?: string; // Optional, some results include an icon
};

export async function nominatimPlugin({
  searchQuery,
  format,
  signal,
}: {
  searchQuery: string;
  format: "json" | "jsonv2" | "geojson";
  signal?: AbortSignal;
}): Promise<NominatimResponse[] | unknown> {
  const baseUrl = "https://nominatim.openstreetmap.org";
  try {
    const res = await $fetch<NominatimResponse[]>(`${baseUrl}/search`, {
      params: {
        q: searchQuery,
        format,
      },
      signal,
    });

    return res;
  } catch (error) {
    return error;
  }
}
export async function mapboxPlugin() {}
export async function searchMap(
  searchQuery: string,
  signal?: AbortSignal
): SearchResultType[] | [] {
  const result = await nominatimPlugin({ searchQuery, format: "json", signal });

  const mappedResult = result?.map(
    (item: NominatimResponse) =>
      ({
        latitude: item.lat,
        longitude: item.lon,
        displayName: item.display_name,
        name: item.name,
      } as SearchResultType)
  );

  return mappedResult || [];
}
