import Image from "next/image";
import styles from "./page.module.css";

import Gallery from "./gallery";

export default async function Home() {
  const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching users:", error);
        return null;
      }
    };

  const users = await fetchUsers();

  if(!users) {
    return (
      <main className={styles.main}>
        <h1 className={styles.heading}>Failed to load users</h1>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Gallery users={users} />
    </main>
  );
}
