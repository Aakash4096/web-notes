import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';
import Navbar from './components/Navbar';

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingNote, setEditingNote] = useState(null);

  // Fetch all notes
  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Create new note
  const handleCreateNote = async (title, content) => {
    try {
      const response = await axios.post('/api/notes', { title, content });
      setNotes([response.data, ...notes]);
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  // Update note
  const handleUpdateNote = async (id, title, content) => {
    try {
      const response = await axios.put(`/api/notes/${id}`, { title, content });
      setNotes(notes.map(note => note._id === id ? response.data : note));
      setEditingNote(null);
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  // Delete note
  const handleDeleteNote = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      setNotes(notes.filter(note => note._id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <NoteForm
          onSubmit={editingNote ? 
            (title, content) => handleUpdateNote(editingNote._id, title, content) :
            handleCreateNote
          }
          initialTitle={editingNote?.title || ''}
          initialContent={editingNote?.content || ''}
          isEditing={!!editingNote}
          onCancel={() => setEditingNote(null)}
        />
        {loading ? (
          <p className="loading">Loading notes...</p>
        ) : (
          <NotesList
            notes={notes}
            onEdit={setEditingNote}
            onDelete={handleDeleteNote}
          />
        )}
      </div>
    </div>
  );
}

export default App;
