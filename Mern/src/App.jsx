import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import Contact from './Contact';
import Home from './Home';
import Signup from './Signup'; // Import the Signup component
import HealthInfo from './HealthInfo'; // Import the HealthInfo component

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <button><Link to="/">Home</Link></button>
                        <button><Link to="/login">Login</Link></button>
                        <button><Link to="/signup">Sign Up</Link></button>
                        <button><Link to="/health-info">Doctors</Link></button> {/* Link to Health Info */}
                        <button><Link to="/contact">Contact</Link></button>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/health-info" element={<HealthInfo />} /> {/* Route for Health Info */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;