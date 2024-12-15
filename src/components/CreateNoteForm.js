import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../redux/actions';
import './CreateNoteForm.css';

const CreateNoteForm = ({ closeForm }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      const newNote = { title, body };
      dispatch(createNote(newNote));
      closeForm(); // Close the form after submission
    }
  };

  return (
    <div className="create-note-form">
      <h3>Create a New Note</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Note Content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
};

export default CreateNoteForm;
