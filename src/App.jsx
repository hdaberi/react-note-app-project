import "./App.css";
import AddNewNote from "./components/AddNewNote";
function App() {
  return (
    <div className="container">
      <div className="note-header">
        <h1>NoteApp</h1>
      </div>
      <div className="note-app">
        <AddNewNote />
        <div className="note-container">note lists</div>
      </div>
    </div>
  );
}

export default App;
