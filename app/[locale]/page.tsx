import styles from "./page.module.css";
import { FakeHomePage } from "@/components/FakeHomePage";

export default async function Home() {
  return (
    <div className={styles.page}>
      <FakeHomePage />
    </div>
  );
}
