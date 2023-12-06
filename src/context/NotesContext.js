import { createContext, useContext, useEffect, useReducer } from 'react';
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
  const newState = {
    ...state,
    [noteId]: {
      ...state[noteId],
      ...payloadToUpdate,
    },
  };
  localStorage.setItem('notes_from_local', JSON.stringify(newState));
  return newState;
};

const addNote = (state, note) => {
  const currentNotesCount = Object.keys(state).length || 0;
  const newState = {
    [note.id]: {
      ...note,
      idx: currentNotesCount,
    },
    ...state,
  };
  localStorage.setItem('notes_from_local', JSON.stringify(newState));
  return newState;
};

const deleteNote = (state, noteId) => {
  const newState = { ...state };
  delete newState[noteId];
  localStorage.setItem('notes_from_local', JSON.stringify(newState));
  return newState;
};

export const NotesContextProvider = (props) => {
  const [notesState, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    dispatch({
      type: ACTIONS.INITIALIZE_NOTES_STATE,
    });
  }, []);

  return (
    <NotesContext.Provider value={{ notesState, dispatch }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export const useNotes = (searchQuery) => {
  const context = useNotesContext();
  const { notes } = context;
  const sortedNotes = Object.values(notes).sort((a, b) => b.idx - a.idx);

  if (searchQuery) {
    const searchQueryLowerCase = searchQuery?.toLowerCase();
    const filteredNotes = sortedNotes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchQueryLowerCase) ||
        note.note.toLowerCase().includes(searchQueryLowerCase)
    );
    return filteredNotes;
  }
  return sortedNotes;
};

export const useGetNotesById = (noteId) => {
  const context = useNotesContext();
  if (!noteId) return {};
  const notes = context.notes;
  return notes?.[noteId];
};

export const useNotesContext = () => {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotesContext must be used within the useNotesContext');
  }
  return { notes: context.notesState, notesDispatch: context.dispatch };
};
