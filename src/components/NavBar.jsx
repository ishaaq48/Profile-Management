import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminPanel from './AdminPanel';
import UserCard from './UserCard';
import DetailedProfile from './DetailedProfile';
export default function NavBar() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">My App</a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin Panel</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile Card</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/detailed">Detailed Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
                <Routes>
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="/profile" element={<UserCard />} />
                    <Route path="/detailed" element={<DetailedProfile />} />
                </Routes>
            </div>
        </Router>
    );
}
