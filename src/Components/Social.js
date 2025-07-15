import './Social.css';

export default function Social() {
    return (
        <section id="social">
            <h2>Implicare socială</h2>
            <p>Ne implicăm activ în inițiative sociale și proiecte de voluntariat.</p>

            <div className="social-container">
                {[
                    {
                        img: "images/social1.png",
                        alt: "Donatie 3,5%",
                        title: "Redirecționează 3,5% din impozit",
                        desc: "Contribuie la dezvoltarea proiectelor noastre prin redirecționarea a 3,5% din impozitul tău.",
                        btn: "Contribuie acum"
                    },
                    {
                        img: "images/social2.jpg",
                        alt: "Sponsorizări și donații",
                        title: "Sponsorizări și donații",
                        desc: "Fii alături de noi prin sponsorizări sau donații pentru a sprijini inițiativele comunitare.",
                        btn: "Donează acum"
                    }
                ].map((item, index) => (
                    <div className="social-card" key={index}>
                        <img src={item.img} alt={item.alt} />
                        <div className="social-content">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <button>{item.btn}</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="social-description">
                <h2>Fii parte din schimbare!</h2>
                <p>
                    Prin sponsorizări, donații și redirecționarea a 3,5% din impozit, poți ajuta la dezvoltarea unor proiecte esențiale pentru comunitate.
                    Fiecare contribuție contează și aduce un impact real în viețile celor care au nevoie!
                </p>
            </div>
        </section>
    );
}