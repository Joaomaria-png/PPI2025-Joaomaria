import styles from "./MyGrid.module.css";
export function MyGrid() {
  return (
    <div className={styles.container}>
        <header1 className={styles.header1}/>
        <header2 className={styles.header2}/>
        <aside className={styles.aside}/>
        <div className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h1>Card 1</h1>
            <p>This is the first card.</p>
          </div>
        <div className={styles.card}>
                <h1>Card 2</h1>
                <p>This is the second card.</p>
        </div>
        <div className={styles.card}>
                <h1>Card 3</h1>
                <p>This is the third card.</p>
        </div>
        </div>
        </div>
        <footer className={styles.footer}/>
    </div>
  );
}