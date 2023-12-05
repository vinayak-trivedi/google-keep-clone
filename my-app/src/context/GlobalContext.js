import { createContext, useContext, useEffect, useReducer } from 'react';
import { ACTIONS } from '../constants/actions';

export const GlobalContext = createContext();

const initialState = {
  updateNoteModalVisibility: false,
};

const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case ACTIONS.UPDATE_NOTE_MODAL_VISIBILITY:
      return updateNoteModalVisibility(state, payload.visibility);
    default:
      return state;
  }
};

const updateNoteModalVisibility = (state, visibility) => {
  return {
    ...state,
    updateNoteModalVisibility: visibility,
  };
};

export const GlobalContextProvider = (props) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ globalState, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error(
      'useGlobalContext must be used within the useGlobalContext'
    );
  }
  return { ...context.globalState, globalDispatch: context.dispatch };
};
