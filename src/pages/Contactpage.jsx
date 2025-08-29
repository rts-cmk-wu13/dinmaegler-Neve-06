import Contact from "./Contact";
import Contactinfo from "./Contactinfo";
import banner from "../img/banner.png"

export default function Contactpage() {

    return (
        <>
        <img className="full-width" src={banner} alt="banner" />
        <div className="contact__form">
        <h2 className="contact__form">Vi sidder klar til at besvare dine spørgsmål</h2>
        <p className="contact__form">Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.</p>
        </div>
        <Contact />
        <Contactinfo />
        </>
    )
}