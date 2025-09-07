import { useTranslations } from "next-intl";

export default async function About() {
  const t = useTranslations();

  return <h1>{t("about_title")}</h1>;
}
