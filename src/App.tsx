import './App.css';
import { Header } from './components/Header/Header';
import { useEffect } from 'react';
import { CodeWorkspace } from './components/CodeWorkspace/CodeWorkspace';

function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    document.body.className = theme;
  }, []);

  return (
    <div className="App">
      <Header />
      <CodeWorkspace />
    </div>
  );
}

export default App;
