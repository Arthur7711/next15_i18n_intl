import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  const localeName = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;

  const messagesModule = await import(`../messages/${localeName}.json`);
  const messages = messagesModule?.default ?? {};

  return { locale: localeName, messages };
});
