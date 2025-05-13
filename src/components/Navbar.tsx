import { Link, useLocation } from 'react-router-dom'
import './Navbar.scss'

export function Navbar() {
    const location = useLocation()

    return (
        <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 100 }}>
            <Link to="/" className="nav-link" style={{ marginRight: 20, color: location.pathname === '/' ? 'lime' : 'white' }}>Grid</Link>
            <Link to="/spiral" className="nav-link" style={{ color: location.pathname === '/spiral' ? 'lime' : 'white' }}>ElemenTree</Link>
        </div>
    )
}
