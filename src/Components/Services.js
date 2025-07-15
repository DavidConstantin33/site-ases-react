import { useEffect, useRef } from "react";
import './Services.css';

export default function Services() {
    const oreRef = useRef(null);
    const proiecteRef = useRef(null);
    const clientiRef = useRef(null);
    const experientaRef = useRef(null);

    const animateNumbers = (ref, targetValue, duration) => {
        let startValue = 0;
        const startTime = performance.now();

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * targetValue);
            if (ref.current) {
                ref.current.textContent = value;
            }
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                if (ref.current) {
                    ref.current.textContent = targetValue;
                }
            }
        };

        requestAnimationFrame(update);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateNumbers(oreRef, 7586, 3000);
                        animateNumbers(proiecteRef, 62, 3000);
                        animateNumbers(clientiRef, 93, 3000);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (experientaRef.current) {
            observer.observe(experientaRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="servicii">
            <h2>Serviciile noastre</h2>
            <p>Oferim consultanță, mentorat și resurse pentru dezvoltare economică.</p>

            <div className="servicii-container">
                {[
                    {
                        img: "images/services1.jpg",
                        alt: "Consultanță",
                        title: "Consultanță",
                        desc: "Oferim suport profesional pentru antreprenori și afaceri în dezvoltare, adaptat nevoilor tale."
                    },
                    {
                        img: "images/services2.jpg",
                        alt: "Mentorat",
                        title: "Mentorat",
                        desc: "Ghidare personalizată prin sesiuni de mentorat cu experți din diverse domenii."
                    },
                    {
                        img: "images/services3.jpg",
                        alt: "Resurse",
                        title: "Resurse",
                        desc: "Acces la instrumente, cursuri și materiale pentru dezvoltarea abilităților profesionale."
                    },
                ].map((serviciu, index) => (
                    <div className="serviciu-card" key={index}>
                        <img src={serviciu.img} alt={serviciu.alt} />
                        <div className="serviciu-content">
                            <h3>{serviciu.title}</h3>
                            <p>{serviciu.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="experienta-container" ref={experientaRef}>
                <h2>Experiență în cifre</h2>
                <div className="statistici">
                    <div className="stat">
                        <h3><span ref={oreRef}>0</span>+</h3>
                        <p>Ore investite</p>
                    </div>
                    <div className="stat">
                        <h3><span ref={proiecteRef}>0</span>+</h3>
                        <p>Proiecte lucrate</p>
                    </div>
                    <div className="stat">
                        <h3><span ref={clientiRef}>0</span>+</h3>
                        <p>Clienți</p>
                    </div>
                </div>
            </div>
        </section>
    );
}