import styles from "./MyText.module.css";

export function MyText() {
  return (
    <div classNamre ={styles.container}>
    <div className={styles.div}>
      <h1 className={styles.title}>Meu primeiro React App</h1>
      <p className="{styles.text}">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        maxime praesentium nam quibusdam soluta fugit commodi necessitatibus
        rerum accusantium facilis incidunt, veritatis sunt similique explicabo
        exercitationem dolor. Minima, laudantium harum.
      </p>
    </div>
    </div>
  );
}
