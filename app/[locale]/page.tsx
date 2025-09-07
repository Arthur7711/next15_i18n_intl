import { useTranslations } from "next-intl";
import styles from "./page.module.css";

export default async function Home() {
  const t = useTranslations()
  return (
    <div className={styles.page}>
      <h1>{t('home_title')}</h1>
    </div>
  );
}
