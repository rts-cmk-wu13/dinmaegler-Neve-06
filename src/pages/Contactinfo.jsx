import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

export default function Contactinfo() {

    return (
        <>
        <section className="contactinfo__container">
        <section className="contactinfo__section">
            <FaPhoneAlt/>
            <h3>Ring til os</h3>
            <p>++45 7070 4000</p>
        </section>
        <section className="contactinfo__section">
            <FaPaperPlane/>
            <h3>Send os en besked</h3>
            <p>4000@dinmaegler.dk</p>
        </section>
        <section className="contactinfo__section">
            <FaLocationPin/>
            <h3>Besøg butikken</h3>
            <p>Stændertorvet 78,</p>
            <p>4000 Roskilde</p>
        </section>
        </section>
        </>
    )
}