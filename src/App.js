import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Applayout from './components/layout/Applayout';

function App() {
  return (
   <Router>
     <Routes>
     <Route path="*" name="dashboard" element={<Applayout />} />

     </Routes>
   </Router>
  );
}

export default App;
