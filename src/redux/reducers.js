const initialState = {
    notes: [],
  };
  
  const notesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_NOTES':
        return { ...state, notes: action.payload };
      case 'CREATE_NOTE':
        return { ...state, notes: [...state.notes, action.payload] };
      case 'DELETE_NOTE':
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== action.payload),
        };
      case 'EDIT_NOTE':
        return {
          ...state,
          notes: state.notes.map((note) =>
            note.id === action.payload.id ? action.payload : note
          ),
        };
      default:
        return state;
    }
  };
  
  export default notesReducer;
  