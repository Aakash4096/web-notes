import NoteItem from './NoteItem';
import '../styles/NotesList.css';

function NotesList({ notes, onEdit, onDelete }) {
  if (notes.length === 0) {
    return <p className="no-notes">No notes yet. Create one to get started!</p>;
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note._id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NotesList;
