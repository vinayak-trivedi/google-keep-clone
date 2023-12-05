import './App.css';
import NotesHeader from './components/NotesHeader';
import NotesInput from './components/NotesInput';
import { NotesContextProvider } from './context/NotesContext';
import Notes from './components/Notes';

function App() {
  return (
    <div className="app-container">
      <NotesHeader />
        <NotesContextProvider>
          <NotesInput />
          <Notes />
        </NotesContextProvider>
    </div>
  );
}

export default App;
