import styles from "./root-layout.module.css";
import Sidebar from "../sidebar";
import classNames from "classnames";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    
    <div className={classNames(styles.container, inter.className)}>
      
      <Sidebar />
      
      <main className={styles.mainContent}>
      <div className={styles.searchBar}>
          <input type="text" placeholder="Sök efter en post här" className={styles.searchInput} />
          <button className={styles.searchButton}>Sök</button>
        </div>
        {children}
        </main>
    </div>
  );
}
