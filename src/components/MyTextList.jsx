import styles from "./MyTextList.module.css";
import { MyText } from "./MyText";



export function MyTextList() {
    const texts = [
  {
    title: "Lorem ipsum dolor",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam totam eaque rerum aspernatur nihil, dicta nemo quisquam nostrum. Dolorem omnis voluptatibus adipisci laudantium voluptate explicabo nemo, aut at perferendis voluptatum!",
  },
  {
    title: "sit amet consectetur",
    content:
      "sit amet consectetur, adipisicing elit. Nam totam eaque rerum aspernatur nihil, dicta nemo quisquam nostrum. Dolorem omnis voluptatibus adipisci laudantium voluptate explicabo nemo, aut at perferendis voluptatum!",
  },
  {
    title: "adipisicing elit. Nam totam eaque",
    content:
      "adipisicing elit. Nam totam eaque rerum aspernatur nihil, dicta nemo quisquam nostrum. Dolorem omnis voluptatibus adipisci laudantium voluptate explicabo nemo, aut at perferendis voluptatum!",
  },
  

];
  return (
    <div className={styles.container}>
      <>
        {texts.map((text, index) => (
          <MyText key={index} title={`${index + 1} ${text.title}`}>
            {text.content}
          </MyText>
        ))}
      </>
    </div>
  );
}