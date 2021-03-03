import "./notesEditModal.css";

const NotesEditModal = ({ modalVisible, updateModalVisibility }) => {
  return (
    <div style={modalVisible ? { display: "block" } : { display: "none" }}
	className="container-modal"
	>
      <section className="section-modal">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nam
        assumenda vero necessitatibus iusto hic cupiditate consequuntur
        voluptates, id mollitia accusamus sint ex earum sed laudantium! Nobis,
        praesentium necessitatibus? Laborum?
        <button onClick={() => updateModalVisibility(false)}>Close</button>
      </section>
    </div>
  );
};

export default NotesEditModal;
