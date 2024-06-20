import { useTranslation } from "react-i18next";

export function DirectionResolver() {
  const { i18n } = useTranslation();
  if (i18n.language === "en") return "ltr";
  if (i18n.language === "ar") return "rtl";

  return "ltr";
}
