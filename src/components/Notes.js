import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes, deleteNote, editNote, createNote } from '../redux/actions'; // Import createNote here
import './Notes.css';

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes); // Access notes from Redux state
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', body: '' });

  // Fetch notes when the component is mounted
  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  // Create a new note
  const handleCreateNote = () => {
    if (newNote.title && newNote.body) {
      dispatch(createNote(newNote)); // Dispatch the action to create the note
      setNewNote({ title: '', body: '' });
      setIsFormVisible(false);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNote((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="notes-container">
      <h2 className="notes-title">My Notes</h2>
      
      {/* Create New Note Button */}
      <button
        className="create-note-btn"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        {isFormVisible ? 'Close Form' : '+ Create New Note'}
      </button>

      {/* Create New Note Form */}
      {isFormVisible && (
        <div className="create-note-form">
          <input
            type="text"
            placeholder="Note Title"
            name="title"
            value={newNote.title}
            onChange={handleInputChange}
          />
          <textarea
            placeholder="Note Body"
            name="body"
            value={newNote.body}
            onChange={handleInputChange}
          ></textarea>
          <button onClick={handleCreateNote}>Save Note</button>
        </div>
      )}

      {/* Display List of Notes */}
      <div className="notes-grid">
        {notes.length === 0 ? (
          <p>No notes available. Please create one!</p>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="note-card">
              <h3>{note.title}</h3>
              <p>{note.body}</p>
              <div className="note-actions">
                <button
                  className="edit-btn"
                  onClick={() => dispatch(editNote(note.id, { title: note.title, body: note.body }))}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => dispatch(deleteNote(note.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;
