import { useState } from 'react';
import '../styles/NoteForm.css';

function NoteForm({ onSubmit, initialTitle = '', initialContent = '', isEditing = false, onCancel }) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmit(title, content);
      setTitle('');
      setContent('');
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2>{isEditing ? 'Edit Note' : 'Create New Note'}</h2>
      <input
        type="text"
        placeholder="Note title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
        required
      />
      <textarea
        placeholder="Note content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="form-textarea"
        required
      />
      <div className="form-buttons">
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update Note' : 'Add Note'}
        </button>
        {isEditing && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default NoteForm;
