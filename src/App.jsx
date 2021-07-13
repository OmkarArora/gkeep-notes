import {
  NotesSection,
  Header,
  Navbar,
  Sidenav,
  TrashSection,
} from "./components";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { v4 as uuid } from "uuid";
import { useNotes } from "./contexts";
import "./App.css";

// const notes = [
//   {
//     id: uuid(),
//     title: "title 1",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempore.",
//     bgColor: "--color-pink",
//     isPinned: false,
//     tags: ["html", "css"],
//     isTrashed: false,
//     trashedDate: null,
//   },
//   {
//     id: uuid(),
//     title: "title 2",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempore.",
//     bgColor: "--color-brown",
//     isPinned: true,
//     tags: ["js", "react"],
//     isTrashed: false,
//     trashedDate: null,
//   },
//   {
//     id: uuid(),
//     title: "title 3",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde consequatur, tempore nihil neque debitis maiores explicabo sint fuga iusto cupiditate velit eius deleniti fugit quas quo dolor omnis? Eligendi beatae dolorem cum corrupti? Repellat esse hic quos accusamus modi quod nam perspiciatis quia dolores ea fugiat quaerat recusandae aut libero ad voluptas, alias ipsum. Vel facilis eligendi nostrum cupiditate atque repellendus, totam autem corporis, nihil fugit qui sed, magnam delectus repudiandae minima quae dolores architecto quam quibusdam. Ullam Laboriosam quam voluptatem voluptates obcaecati voluptas eligendi doloribus minima porro ipsam! Accusamus officiis iusto minima dolorem libero at magni odit laboriosam explicabo provident numquam itaque similique ad eos nam corporis laborum omnis, debitis on amet odit inventore! Fugit nostrum beatae officum blanditiis sunt illo voluptatibus culpa incidunt et vel, pariatur ipsum. Quisquam earum odit voluptatibus minus. Repudndaemblanditiis iste neque quidem nostrum beatae, rem eligendi, debitis quam reiciendis veritatis! Eligendi, ad.",
//     bgColor: "--color-yellow",
//     isPinned: true,
//     tags: [],
//     isTrashed: false,
//     trashedDate: null,
//   },
// ];

const App = () => {
  const { notes, dispatch } = useNotes();
  console.log({ notes });
  useEffect(() => {
    let savedNotes = JSON.parse(localStorage.getItem("gKeepAllNotes"));
    if (savedNotes) {
      dispatch({ type: "SET_NOTES", payload: { notes: savedNotes } });
    }
  }, [dispatch]);

  return (
    <div className="App">
      <div className="container-header">
        <Header />
      </div>
      <div className="container-sidenav">
        <Sidenav />
      </div>
      <main className="main">
        <Routes>
          <Route path="/trash" element={<TrashSection />} />
          <Route path="/" element={<NotesSection />} />
        </Routes>
      </main>
      <div className="container-footer">
        <Navbar />
      </div>
    </div>
  );
};

export default App;
