import './App.css';
import { Routes, Route } from 'react-router-dom';
import  Main  from './pages/Main';

function App() {
  return (
    <div className="App" data-test-id="app">
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
