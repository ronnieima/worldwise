import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <section className={styles.app}>
      <Sidebar />
      <Map />
    </section>
  );
}

export default AppLayout;
