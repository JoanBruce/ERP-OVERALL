import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Maquinas from './pages/Maquinas';
import Empleados from './pages/Empleados';
import Horarios from './pages/Horarios';
import Averias from './pages/Averias';
import Ordenes from './pages/Ordenes';
import Checklists from './pages/Checklists';
import Insumos from './pages/Insumos';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="maquinas" element={<Maquinas />} />
            <Route path="empleados" element={<Empleados />} />
            <Route path="horarios" element={<Horarios />} />
            <Route path="averias" element={<Averias />} />
            <Route path="ordenes" element={<Ordenes />} />
            <Route path="checklists" element={<Checklists />} />
            <Route path="insumos" element={<Insumos />} />
            <Route path="*" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
