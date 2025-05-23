import "./styles/theme.css";
import "./styles/global.css";
import { MyText } from "./components/MyText";

//array de textos
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
  {
    title: "Nam totam eaque rerum",
    content:
      "Nam totam eaque rerum aspernatur nihil, dicta nemo quisquam nostrum. Dolorem omnis voluptatibus adipisci laudantium voluptate explicabo nemo, aut at perferendis voluptatum!",
  },
  {
    title: "dicta nemo quisquam nostrum",
    content:
      "dicta nemo quisquam nostrum. Dolorem omnis voluptatibus adipisci laudantium voluptate explicabo nemo, aut at perferendis voluptatum!",
  },
  {
    title: "Dolorem omnis voluptatibus",
    content:
      "Dolorem omnis voluptatibus adipisci laudantium voluptate explicabo nemo, aut at perferendis voluptatum!",
  },
];

export default function App() {
  return (
    <>
      {texts.map((text, index) => (
        <MyText key={index} title={`${index + 1} ${text.title}`}>
          {text.content}
        </MyText>
      ))}
    </>
  );
}
