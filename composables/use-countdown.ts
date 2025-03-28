import { ref, onUnmounted, watch } from "vue";

export default function useCountdown({
  callback,
  mins = 5,
  isStartTime,
}: {
  callback: () => void;
  mins?: number;
  isStartTime: Ref<boolean>;
}) {
  const timeLeft = ref(mins * 60);
  const currentTime = ref("");
  let timer: number | null = null;

  const updateTimer = () => {
    const minutes = Math.floor(timeLeft.value / 60);
    const seconds = timeLeft.value % 60;
    currentTime.value = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  watch(
    isStartTime,
    (newVal) => {
      if (newVal) {
        if (timer !== null) clearInterval(timer);
        timeLeft.value = mins * 60; // Reset timer
        updateTimer();
        timer = setInterval(() => {
          if (timeLeft.value <= 0) {
            clearInterval(timer!);
            timer = null;
            callback();
          } else {
            timeLeft.value--;
            updateTimer();
          }
        }, 1000);
      } else {
        if (timer !== null) {
          clearInterval(timer);
          timer = null;
        }
      }
    },
    { immediate: true }
  );

  onUnmounted(() => {
    if (timer !== null) clearInterval(timer);
  });

  return { currentTime };
}
