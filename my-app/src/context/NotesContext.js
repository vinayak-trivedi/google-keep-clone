import { createContext, useContext, useReducer } from 'react';
import { ACTIONS } from '../constants/actions';

export const NotesContext = createContext();

const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case ACTIONS.INITIALIZE_NOTES_STATE:
      return initializeNotesState(state);
    case ACTIONS.ADD_NOTES:
      return addNote(state, payload.note);
    case ACTIONS.DELETE_NOTES:
      return deleteNote(state, payload.noteId);
    case ACTIONS.UPDATE_NOTES:
      return updateNote(state, payload.noteId, payload.payloadToUpdate);
    default:
      return state;
  }
};

const initializeNotesState = () => {
  const notesFromLocal = localStorage.getItem('notes_from_local');

  if (notesFromLocal) {
    const parsedNotes = JSON.parse(notesFromLocal);
    return { ...parsedNotes };
  }

  return {};
};

const updateNote = (state, noteId, payloadToUpdate) => {
  return {
    ...state,
    [noteId]: {
      ...state[noteId],
      payloadToUpdate,
    },
  };
};

const addNote = (state, note) => {
  const newState = {
    ...state,
    [note.id]: note,
  };
  localStorage.setItem('notes_from_local', JSON.stringify(newState));
  return newState;
};

const deleteNote = (state, noteId) => {
  const newState = { ...state };
  delete newState[noteId];

  return newState;
};

export const NotesContextProvider = (props) => {
  const [notesState, dispatch] = useReducer(reducer, {});
  return (
    <NotesContext.Provider value={{ notesState, dispatch }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useNotesContext();
  const { notes } = context;
  return notes;
};

export const useNotesContext = () => {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotesContext must be used within the useNotesContext');
  }
  return { notes: context.notesState, notesDispatch: context.dispatch };
};
