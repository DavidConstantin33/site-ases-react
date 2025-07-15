import { useState, useRef, useEffect } from 'react';
import './Header.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav>
            <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
            <ul ref={menuRef} className={menuOpen ? 'active' : ''}>
                <li><a href="#acasa" onClick={handleLinkClick}>Acasă</a></li>
                <li><a href="#despre" onClick={handleLinkClick}>Despre</a></li>
                <li><a href="#proiecte" onClick={handleLinkClick}>Proiecte</a></li>
                <li><a href="#servicii" onClick={handleLinkClick}>Servicii</a></li>
                <li><a href="#social" onClick={handleLinkClick}>Social</a></li>
                <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
            </ul>
        </nav>
    );
}