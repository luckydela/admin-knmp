import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Applayout from './components/layout/Applayout';
import Cklogin from './views/checkor/login/Cklogin';

function App() {
  return (
   <Router>
     <Routes>
     <Route path="*" name="dashboard" element={<Applayout />} />
     <Route path="/" name="checker login" element={<Cklogin />} />

     </Routes>
   </Router>
  );
}

export default App;
