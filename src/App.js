import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Applayout from './components/layout/Applayout';
import Cklogin from './views/checkor/login/Cklogin';
import Checklist from './views/checkor/checklist/Checklist';

function App() {
  return (
   <Router>
     <Routes>
     <Route path="*" name="dashboard" element={<Applayout />} />
     <Route path="/" name="checker login" element={<Cklogin />} />
     <Route path="/checklist" name="checker login" element={<Checklist />} />


     </Routes>
   </Router>
  );
}

export default App;
