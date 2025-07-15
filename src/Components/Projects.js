import { useState, useEffect, useRef } from "react";
import './Projects.css';

export default function Proiecte() {
    const sliderImages = [
        "images/despre2.jpg",
        "images/despre1.jpg",
        "images/despre4.jpg",
        "images/despre3.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    const changeSlide = (index) => {
        setCurrentIndex((index + sliderImages.length) % sliderImages.length);
    };

    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % sliderImages.length);
        }, 3000);
    };

    useEffect(() => {
        resetInterval();
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <section id="proiecte">
            <div className="proiecte-container">
                <div className="slider">
                    <img src={sliderImages[currentIndex]} alt="despre"/>
                    <div className="slider-controls">
                        <button onClick={() => {
                            changeSlide(currentIndex - 1);
                            resetInterval();
                        }}>❮
                        </button>
                        <button onClick={() => {
                            changeSlide(currentIndex + 1);
                            resetInterval();
                        }}>❯
                        </button>
                    </div>
                </div>
                <div className="proiecte-content">
                    <h2>Proiecte</h2>
                    <ul>
                        <li><strong>Programe de formare profesională și mentorat</strong> pentru tineri și antreprenori
                            aflați la început de drum.
                        </li>
                        <li><strong>Workshop-uri de educație financiară și antreprenorială</strong> pentru a încuraja
                            inovația și independența economică.
                        </li>
                        <li><strong>Proiecte sociale pentru incluziunea grupurilor vulnerabile</strong>, creând punți
                            între generații și comunități.
                        </li>
                        <li><strong>Colaborări cu instituții și companii</strong> pentru a facilita integrarea pe piața
                            muncii.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="proiecte-galerie">
                {[
                    {src: "images/project1.jpg", alt: "Proiect 1", desc: "Ne organizam"},
                    {src: "images/project2.jpg", alt: "Proiect 2", desc: "Implementam"},
                    {src: "images/project3.jpg", alt: "Proiect 3", desc: "Reusim impreuna!"},
                ].map((proiect, index) => (
                    <div className="proiect-box" key={index}>
                        <img src={proiect.src} alt={proiect.alt}/>
                        <div className="overlay">{proiect.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}