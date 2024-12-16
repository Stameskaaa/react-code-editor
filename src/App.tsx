import './App.css';
import { TextEditor } from './components/TextEditor/TextEditor';
import { Header } from './components/Header/Header';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    document.body.className = theme;
  }, []);

  return (
    <div className="App">
      <Header languageList={['JavaScript', 'Python', 'C++']} />
      <TextEditor />
    </div>
  );
}

export default App;
