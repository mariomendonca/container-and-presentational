import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { CarListPage } from './pages/CarListPage'
import { CarDetailsPage } from './pages/CarDetailsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarListPage />} />
        <Route path="/car/:carId" element={<CarDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
