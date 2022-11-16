import Login from './pages/Login';
import Footer from './pages/components/Footer';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/SignIn" element={<SignIn/>} />
          <Route exact path="/Dashboard" element={<Dashboard/>} />
        </Routes>
       
      </Router>
      <Footer />
    </div>
  );
}

export default App;
