const useFormatPrice = (value: number = 0, currency = "SAR"): string => {
  const { defaultLocale } = useI18n();
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  };
  return new Intl.NumberFormat(`${defaultLocale || "ar"}-SA`, options).format(
    value
  );
};

export default useFormatPrice;
