// Base imports

// CSS
import "./pageStyling/socials.css";

// Images
import portrait from "../assets/images/socials/portrait.jpeg";

export default function Socials() {
    return (
        <main className="socials-container">
            <header className="socials-header">
                <img className="socials-portrait" src={portrait} />
                <h1 className="socials-title">Michael Yurachek</h1>
                <p className="socials-description">Here are all my socials!</p>
            </header>
            <section className="socials-links">
                <a href="https://www.instagram.com/michael.yurachek/" className="socials-button" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                <a href="https://github.com/michaelyurachek" className="socials-button" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
                <a href="https://www.linkedin.com/in/michael-yurachek-a873213b1/" className="socials-button" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a href="https://t.me/michaelyurachek/" className="socials-button" target="_blank" rel="noopener noreferrer">
                    Telegram
                </a>
            </section>
            <hr/>
            <footer className="socials-footer">
                <h2 className="socials-subtitle">Live Projects</h2>
                <a href="https://michaelyurachek.com/poem-website/" className="socials-button" target="_blank" rel="noopener noreferrer">
                    Digital Poem
                </a>
                <a href="https://michaelyurachek.com/foodtruckmenu/" className="socials-button" target="_blank" rel="noopener noreferrer">
                    Food Truck Dashboard
                </a>
                <hr/>
                <small>&copy; Michael Yurachek 2026</small>
            </footer>
        </main>
    )
}