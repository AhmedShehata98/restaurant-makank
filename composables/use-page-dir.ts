export default function usePageDir() {
  const { locale } = useI18n();

  return locale.value === "ar" ? "rtl" : "ltr";
}
