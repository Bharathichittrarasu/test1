import React from 'react';

const NoteList = ({ notes, deleteNote, setEditingNote }) => {
  return (
    <div>
      <h2>Your Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: note.content }} /> {/* To render HTML content */}
            <button onClick={() => setEditingNote(note)}>Edit</button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
