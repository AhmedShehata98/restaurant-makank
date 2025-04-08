export function useLatLong(options = {}) {
  const coords = reactive<{
    latitude: number | null;
    longitude: number | null;
    error: string | null;
    loading: boolean;
    status: "idle" | "loading" | "success" | "error";
  }>({
    latitude: null,
    longitude: null,
    error: null,
    loading: false,
    status: "idle", // idle | loading | success | error
  });

  const defaultOptions = {
    enableHighAccuracy: true,
    timeout: 10000, // 10 seconds
    maximumAge: 0,
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      coords.error = "Geolocation is not supported by your browser.";
      coords.status = "error";
      return;
    }

    coords.loading = true;
    coords.status = "loading";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        coords.latitude = position.coords.latitude;
        coords.longitude = position.coords.longitude;
        coords.loading = false;
        coords.status = "success";
        coords.error = null;
        console.log("Location found.");
      },
      (err) => {
        coords.error = err.message;
        coords.loading = false;
        coords.status = "error";
        console.error(`Error getting location: ${err.message}`);
      },
      { ...defaultOptions, ...options }
    );
  };

  onMounted(() => {
    getLocation();
  });

  return {
    ...toRefs(coords),
    getLocation,
  };
}
