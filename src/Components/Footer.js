import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} ASES - Asociația pentru Schimbare Economică și Socială. Toate drepturile rezervate.</p>
            </div>
        </footer>
    );
}