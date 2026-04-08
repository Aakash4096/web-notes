import '../styles/NoteItem.css';

function NoteItem({ note, onEdit, onDelete }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="note-item">
      <div className="note-content">
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <small className="note-date">
          {note.updatedAt !== note.createdAt ? 'Updated' : 'Created'}: {formatDate(note.updatedAt)}
        </small>
      </div>
      <div className="note-actions">
        <button
          className="btn btn-edit"
          onClick={() => onEdit(note)}
          title="Edit note"
        >
          ✏️
        </button>
        <button
          className="btn btn-delete"
          onClick={() => onDelete(note._id)}
          title="Delete note"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
