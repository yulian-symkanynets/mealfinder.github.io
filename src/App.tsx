import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoadPage from './components/LoadPage/LoadPage';
import HomePage from './components/HomePage/HomePage';
import Placeholder from './components/AccountPage/Placeholder';
// import MealPlan from './components/MealPlan/MealPlan';
function App() {

  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<LoadPage />} />
      <Route path='/home' element={<HomePage/>}/>
      <Route path='account' element={<Placeholder name='Account'/>}/>
      <Route path='favorites' element={<Placeholder name='Favorites'/>}/>
      <Route path='plans' element={<Placeholder name='Meal Plan'/>}/>
      <Route path='settings' element={<Placeholder name='Settings'/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
