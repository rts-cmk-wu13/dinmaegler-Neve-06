import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router";
import logo from '../img/logo.svg';
export default function Footer() {

    return (
        <>
            <footer >
                <section>
                    <section className="footer__logo">
                        <figure className="logo__container">
                        <img src={logo} alt="logo" />
                        </figure>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                    </section>
                    <section>

                    </section>
                    <section className="footer__section">
                        <FaPhoneAlt />
                        <p>Ring til os</p>
                        <p>+45 7070 4000</p>
                        <FaPaperPlane />
                        <p>Send en mail</p>
                        <p>4000@dinmaegler.com</p>
                        <FaLocationPin />
                        <p>Butik</p>
                        <p>Stændertorvet 78, 4000 Roskilde</p>
                    </section>
                    <section className="footer__section">
                        <h2>Quick Links</h2>
                        <Link to="list">Boliger til salg</Link>
                        <Link to="agents">Mæglere</Link>
                        <Link to="contact">Kontakt os</Link>
                        <Link to="login">Log ind</Link>
                    </section>
                </section>
                <section className="footer__bottom full-width">
                    <p>Layout By Jit Banik 2020</p>
                </section>
            </footer>
        </>
    )
}