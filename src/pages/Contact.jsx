import { Form, useActionData } from "react-router"
import "./contact.scss"

export default function Contact() {
    const errors = useActionData();

    return (
    <>
        <h1>Contact</h1>
        <Form method="post">
            <div className="formgroup">
                <label className="formgroup__label" htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Name" />
                <p className="error">{errors && errors?.name?.errors[0]}</p>
            </div>
            <div className="formgroup">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="Email" />
                <p className="error">{errors && errors?.email?.errors[0]}</p>
            </div>
            <div className="formgroup">
                <label htmlFor="message">Message:</label>
                <textarea name="message" placeholder="Message"></textarea>
                <p className="error">{errors && errors?.message?.errors[0]}</p>
            </div>
            <button type="submit">Submit</button>
        </Form>
        </>
    )
}