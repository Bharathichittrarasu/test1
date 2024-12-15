import axios from 'axios';

// Fetch all notes
export const fetchNotes = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/notes'); // Replace with your backend API URL
    dispatch({ type: 'FETCH_NOTES', payload: response.data });
  } catch (error) {
    console.error('Error fetching notes:', error);
  }
};

// Create a new note
export const createNote = (newNote) => async (dispatch) => {
  try {
    const response = await axios.post('/api/notes', newNote); // Replace with your backend API URL
    dispatch({ type: 'CREATE_NOTE', payload: response.data });
  } catch (error) {
    console.error('Error creating note:', error);
  }
};

// Delete a note
export const deleteNote = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/notes/${id}`); // Replace with your backend API URL
    dispatch({ type: 'DELETE_NOTE', payload: id });
  } catch (error) {
    console.error('Error deleting note:', error);
  }
};

// Edit a note
export const editNote = (id, updatedNote) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/notes/${id}`, updatedNote); // Replace with your backend API URL
    dispatch({ type: 'EDIT_NOTE', payload: response.data });
  } catch (error) {
    console.error('Error editing note:', error);
  }
};

