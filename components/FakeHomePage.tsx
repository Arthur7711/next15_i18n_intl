"use client";

import React from "react";
import { useTranslations } from "next-intl";
// import { getTranslations } from "next-intl/server";

export const FakeHomePage = () => {
  const t = useTranslations();
  // this working for server side, but it always returning only default locale messages, to it working correctly only use client side
  // const t = await getTranslations();
  return (
    <div>
      <h1>{t("home_title")}</h1>
    </div>
  );
};
