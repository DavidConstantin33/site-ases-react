import './About.css';

export default function About() {
    return (
        <div className="about">
            <section id="despre">
                <div className="despre-container">
                    <div className="despre1">
                        <h2>Despre noi</h2>
                        <p>
                            ASES este o organizație non-guvernamentală dedicată <strong>sprijinirii și dezvoltării comunității</strong> prin inițiative economice, sociale și educaționale. Misiunea noastră este să creăm oportunități durabile pentru indivizi și afaceri, promovând <strong>incluziunea, sustenabilitatea și inovația</strong> în fiecare proiect pe care îl desfășurăm.
                        </p>
                    </div>
                    <div className="despre2">
                        <img src="/images/despre.jpg" alt="imagine" />
                    </div>
                </div>

                <div className="banner-parteneriat">
                    <a href="https://procariera.ro" target="_blank" rel="noopener noreferrer">
                        <img src="/images/banner_05.jpg" alt="ProCariera Banner" className="banner-img"/>
                    </a>
                    <p className="parteneriat-text">Suntem parteneri OSC, susținând împreună educația și integrarea
                        profesională a tinerilor prin ProCariera.</p>
                </div>
            </section>
        </div>
    );
}