import { defineRouting } from "next-intl/routing";
export const locales = ["en", "hy", "ru"];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  // pathnames: {
  //   "/": "/",
  //   pathnames: {
  //     // other pages pats ...
  //     "/about": "/about",
  //   },
  //   "/about": "/about",
  // },
  localePrefix: "as-needed",
});
