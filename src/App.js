import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Category from './pages/Category/Category';
import NotFoundPage from './pages/NotFoundPage';
import Product from './pages/Product/Product';

function App() {
  return (
    <div className="App" data-test-id="app">
      <Routes>
        <Route index element={<Main />} />
        <Route path="/women" element={<Category typeProducts='women' />} />
        <Route path="/men" element={<Category typeProducts='men'/>} />
        <Route path="/NotFoundPage" element={<NotFoundPage />} />
        <Route path="/men/:id" element={<Product typeProducts='men'/>} />
        <Route path="/women/:id" element={<Product typeProducts='women'/>} />
      </Routes>
    </div>
  );
}

export default App;
