import { useState } from "react";
import emailjs from 'emailjs-com';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        nume: '',
        email: '',
        mesaj: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: formData.nume,
            from_email: formData.email,
            message: formData.mesaj
        };

        emailjs.send(
            'service_mywr9d5',      // SERVICE_ID corect
            'template_m48n36f',     // TEMPLATE_ID corect
            templateParams,
            'VD0xUSpnUmsIRT1E7'     // PUBLIC_KEY corect
        )
            .then((response) => {
                console.log('Email trimis cu succes!', response.status, response.text);
                alert("Mesajul a fost trimis cu succes! Vă mulțumim pentru contact.");
                setFormData({
                    nume: '',
                    email: '',
                    mesaj: ''
                });
            })
            .catch((err) => {
                console.error('Eroare la trimiterea email-ului:', err);
                alert("A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou.");
            });
    };

    return (
        <section id="contact">
            <h2>Contact</h2>
            <form id="contactForm" onSubmit={handleSubmit}>
                <label htmlFor="nume">Nume:</label>
                <input
                    type="text"
                    id="nume"
                    name="nume"
                    value={formData.nume}
                    onChange={handleChange}
                    required
                    placeholder="Numele tău"
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="adresa@email.com"
                />

                <label htmlFor="mesaj">Mesaj:</label>
                <textarea
                    id="mesaj"
                    name="mesaj"
                    value={formData.mesaj}
                    onChange={handleChange}
                    required
                    placeholder="Scrie mesajul tău aici..."
                ></textarea>

                <button type="submit">Trimite</button>
            </form>
        </section>
    );
}