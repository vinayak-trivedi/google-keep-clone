import './App.css';
import NotesHeader from './components/NotesHeader';
import NotesInput from './components/NotesInput';
import { NotesContextProvider } from './context/NotesContext';
import Notes from './components/Notes';
import { GlobalContextProvider } from './context/GlobalContext';

function App() {
  return (
    <div className="app-container">
      <NotesHeader />
      <GlobalContextProvider>
        <NotesContextProvider>
          <NotesInput />
          <Notes />
        </NotesContextProvider>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
