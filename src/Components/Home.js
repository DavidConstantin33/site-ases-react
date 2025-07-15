import { useEffect, useRef } from "react";
import './Home.css';

export default function Home() {
    const asesRef = useRef(null);

    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById('despre');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        function animateASES() {
            const asesText = asesRef.current;
            if (!asesText) return;

            asesText.innerHTML = "";
            const text = "ASES";

            for (let i = 0; i < text.length; i++) {
                let span = document.createElement("span");
                span.textContent = text[i];
                span.style.opacity = "0";
                span.style.position = "relative";
                span.style.right = "-50px";
                span.style.transition = "opacity 0.5s ease, right 0.5s ease";
                asesText.appendChild(span);
            }

            const letters = asesText.querySelectorAll("span");
            letters.forEach((letter, index) => {
                setTimeout(() => {
                    letter.style.opacity = "1";
                    letter.style.right = "0";
                }, index * 500);
            });
        }

        animateASES();
        const interval = setInterval(animateASES, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home">
            <section id="acasa">
                <h1 id="ases-text" ref={asesRef}>ASES</h1>
                <h3>Asociatia pentru Schimbare Economica si Sociala.</h3>
                <p>Promovăm dezvoltarea economică și socială prin proiecte sustenabile.</p>
                <button id="homeBtn" onClick={handleScrollToAbout}>Despre noi</button>
            </section>
        </div>
    );
}