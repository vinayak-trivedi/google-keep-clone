import logo from './logo.svg';
import './App.css';
import NotesHeader from './components/NotesHeader';
import NotesInput from './components/NotesInput';

function App() {
  return (
    <div className="app-container">
      <NotesHeader />
      <NotesInput />
    </div>
  );
}

export default App;
