import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
   <Router>
     <Routes>
     <Route path="*" name="dashboard" element={<Topbar />} />

     </Routes>
   </Router>
  );
}

export default App;
