import { FaPhoneAlt, FaPaperPlane  } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router";
export default function Footer() {

    return (
        <>
        <footer >
            <section> 
            <section className="footer__section">
                <FaPhoneAlt/>
                <p>Ring til os</p>
                <p>+45 7070 4000</p>
                <FaPaperPlane/>
                <p>Send en mail</p>
                <p>4000@dinmaegler.com</p>
                <FaLocationPin/>
                <p>Butik</p>
                <p>Stændertorvet 78, 4000 Roskilde</p>
            </section>
            <section className="footer__section">
                <h2>Quick Links</h2>
                <Link to="list">Boliger til salg</Link>
                <Link to="agents">Mæglere</Link>
                <Link to="contact">Kontakt os</Link>
            </section>
            </section>
            <section className="footer__bottom full-width">
                <p>Layout By Jit Banik 2020</p>
            </section>
        </footer>
        </>
    )
}