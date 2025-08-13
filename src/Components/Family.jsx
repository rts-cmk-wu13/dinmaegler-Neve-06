import { FaHandHoldingUsd } from "react-icons/fa";
import { FaHouse, FaLocationDot  } from "react-icons/fa6";


export default function Family() {

    return (
        <>
            <section className="family__container">
                <figure className="family">
                    <img src="src/img/family.png" alt="family" />
                </figure>
                <section className="family__side">
                    <h2>Vi har fulgt danskerne hjem i snart 4 årtier</h2>
                    <h3>Det synes vi siger noget om os!</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                    <div>
                        <FaHandHoldingUsd />
                        <p>4829</p>
                        <p>boliger solgt</p>
                    </div>
                    <div>
                        <FaHouse />
                        <p>4829</p>
                        <p>boliger solgt</p>
                    </div>
                </section>
            </section>
            <div className="family__under-grid">
                <section className="family__undergrid-section">
                    <FaHandHoldingUsd />
                    <h2>Bestil et slagstjek</h2>
                    <p>
                        Med et Din Mægler Salgstjek
                        bliver du opdateret på værdien
                        af din bolig.
                    </p>
                </section>
                <section className="family__undergrid-section">
                    <FaLocationDot/>
                    <h2>74 butikker</h2>
                    <p>
                        Hos Din Mægler er din bolig
                        til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.
                    </p>
                </section>
                <section className="family__undergrid-section">
                    <FaHandHoldingUsd />
                    <h2>Tilmeld køberkartotek</h2>
                    <p>
                        Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.
                    </p>
                </section>
            </div>
        </>
    )
}