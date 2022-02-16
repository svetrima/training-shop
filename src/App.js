import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import PageWomen from './pages/Category/PageWomen';
import PageMen from './pages/Category/PageMen';
import NotFoundPage from './pages/NotFoundPage';
import Product from './pages/Product/Product';

function App() {
  return (
    <div className="App" data-test-id="app">
      <Routes>
        <Route index element={<Main />} />
        <Route path="/Women" element={<PageWomen />} />
        <Route path="/Men" element={<PageMen />} />
        <Route path="/NotFoundPage" element={<NotFoundPage />} />
        <Route path="/Men/:id" element={<Product />} />
        <Route path="/Women/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
