import { NotesSection, Header, Sidenav } from "./components";
import "./App.css";

const notes = [
  {
    id: 1,
    title: "title 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempore.",
    bgColor: "--color-pink",
    isPinned: false,
    tags: ["html", "css"],
    isTrashed: false,
    trashedDate: new Date(),
  },
  {
    id: 2,
    title: "title 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempore.",
    bgColor: "--color-brown",
    isPinned: true,
    tags: ["js", "react"],
    isTrashed: false,
    trashedDate: new Date(),
  },
  {
    id: 3,
    title: "title 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde consequatur, tempore nihil neque debitis maiores explicabo sint fuga iusto cupiditate velit eius deleniti fugit quas quo dolor omnis? Eligendi beatae dolorem cum corrupti? Repellat esse hic quos accusamus modi quod nam perspiciatis quia dolores ea fugiat quaerat recusandae aut libero ad voluptas, alias ipsum. Vel facilis eligendi nostrum cupiditate atque repellendus, totam autem corporis, nihil fugit qui sed, magnam delectus repudiandae minima quae dolores architecto quam quibusdam. Ullam Laboriosam quam voluptatem voluptates obcaecati voluptas eligendi doloribus minima porro ipsam! Accusamus officiis iusto minima dolorem libero at magni odit laboriosam explicabo provident numquam itaque similique ad eos nam corporis laborum omnis, debitis on amet odit inventore! Fugit nostrum beatae officum blanditiis sunt illo voluptatibus culpa incidunt et vel, pariatur ipsum. Quisquam earum odit voluptatibus minus. Repudndaemblanditiis iste neque quidem nostrum beatae, rem eligendi, debitis quam reiciendis veritatis! Eligendi, ad.",
    bgColor: "--color-yellow",
    isPinned: true,
    tags: [],
    isTrashed: false,
    trashedDate: new Date(),
  },
];

const App = () => {
  if (
    localStorage.getItem("gKeepAllNotes") === null ||
    localStorage.getItem("gKeepAllNotes") === undefined
  ) {
    localStorage.setItem("gKeepAllNotes", JSON.stringify(notes));
  }
  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>
      <div><Sidenav/></div>
      <main className="main">
        <NotesSection />
      </main>
    </div>
  );
};

export default App;
