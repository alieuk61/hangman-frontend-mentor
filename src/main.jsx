import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/main.scss';
import HomePage from './pages/homepage/homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HowToPlayPage from './pages/how-to-play/howToPlay';
import CategoriesPage from './pages/categories/categoriespage';
import ContextProvider from './context/context';
import SelectedCategory from './pages/selected-category/selectedCategory';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextProvider>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Guide' element={<HowToPlayPage />} />
          <Route path='/Categories' element={<CategoriesPage />} />
          <Route path='/Categories/:id' element={<SelectedCategory />} />
      </Routes>
    </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
