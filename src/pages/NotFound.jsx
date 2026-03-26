// CSS
import "./pageStyling/socials.css";


export default function NotFound() {
    return (
        <main className="socials-container">
            <div className="socials-centered">
                <h1 className="socials-title">404<br/>Page not found!</h1>
                <a className="socials-button" href="/">Go back Home</a>
            </div>
        </main>
    )
}