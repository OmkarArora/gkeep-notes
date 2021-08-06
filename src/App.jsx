import {
  NotesSection,
  Header,
  Navbar,
  Sidenav,
  TrashSection,
} from "./components";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNotes } from "./contexts";
import "./App.css";

const App = () => {
  const { notes, dispatch } = useNotes();
 
  useEffect(() => {
    let savedNotes = JSON.parse(localStorage.getItem("gKeepAllNotes"));
    if (savedNotes) {
      dispatch({ type: "SET_NOTES", payload: { notes: savedNotes } });
    }
  }, [dispatch]);

  useEffect(() => {
    if(localStorage)
      localStorage.setItem("gKeepAllNotes", JSON.stringify(notes));
  }, [notes]);

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
