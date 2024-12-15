import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, editNote } from '../redux/actions';
import './NoteItem.css';

const NoteItem = ({ note }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedNote = { title, body };
    dispatch(editNote(note.id, updatedNote));
    setIsEditing(false);
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={handleEdit} className="edit-btn">
            Edit
          </button>
          <button onClick={handleDelete} className="delete-btn">
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default NoteItem;
