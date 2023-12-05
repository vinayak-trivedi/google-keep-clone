import logo from './logo.svg';
import './App.css';
import NotesHeader from './components/NotesHeader';
import NotesInput from './components/NotesInput';
import { NotesContextProvider } from './context/NotesContext';

function App() {
  return (
    <div className="app-container">
      <NotesHeader />
      <NotesContextProvider>
        <NotesInput />
      </NotesContextProvider>
    </div>
  );
}

export default App;
