import { Form, useActionData } from "react-router"
import "./contact.scss"

export default function Contact() {
    const errors = useActionData();

    return (
    <>
        <Form method="post" className="contact__form">
            <div className="formgroup">
                <label className="formgroup__label" htmlFor="name">Navn</label>
                <input type="text" name="name" placeholder="Indtast navn" />
                <p className="error">{errors && errors?.name?.errors[0]}</p>
            </div>
            <div className="formgroup">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Indtast email" />
                <p className="error">{errors && errors?.email?.errors[0]}</p>
            </div>
            <div className="formgroup">
                <label htmlFor="message">Emne</label>
                <input type="text" name="subject" placeholder="Hvad drejer din henvendelse sig om?" />
                <p className="error">{errors && errors?.subject?.errors[0]}</p>
            </div>
            <div className="formgroup">
                <label htmlFor="message">Besked</label>
                <textarea className="textarea__size" maxLength={50} name="message" placeholder="Skriv din besked her..."></textarea>
                <p className="error">{errors && errors?.message?.errors[0]}</p>
            </div>
            <button type="submit" className="home__button">Send Besked</button>
        </Form>
        </>
    )
}