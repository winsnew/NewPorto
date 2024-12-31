import { FC, useState } from "react";
import clsx from "clsx";
import styles from "./index.module.scss"

const ContactSection: FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert("form Submitted")
        setFormData({ name: '', email: '', message: '' })
    }
    return (
        <section className={clsx(styles.ContactContainer)}>
            <h1 className={clsx(styles.ContactHeader)}>Contact</h1>
            <div className={clsx(styles.ContactWrapper)}>
                <form id={clsx(styles.ContactForm)} onSubmit={handleSubmit}>
                    <div className={clsx(styles.FormControl)}>
                        <input className={clsx(styles.FormInput)} type="text" id="name" placeholder="NAME" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className={clsx(styles.FormControl)}>
                        <input className={clsx(styles.FormInput)} type="email" id="email" placeholder="EMAIL" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <textarea className={clsx(styles.FormTextarea)} placeholder="MESSAGE" name="message" value={formData.message} onChange={handleChange} required></textarea>
                    <button className={clsx(styles.SendButton)} id="submit" type="submit" value="SEND">
                        <div className={clsx(styles.AltSendButton)}>
                            <span className={clsx(styles.SendText)}>SEND</span>
                        </div>
                    </button>
                </form>


                <div className={clsx(styles.DirectContainer)}>
                    <ul className={clsx(styles.ContactList)}>
                        <li className={clsx(styles.ListItem)}><i className="fa fa-map-marker fa-2x"><span className={clsx(styles.ContactText)}>City, State</span></i></li>
                        <li className={clsx(styles.ListItem)}><i className="fa fa-phone fa-2x"><span className={clsx(styles.ContactText)}><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
                        <li className={clsx(styles.ListItem)}><i className="fa fa-envelope fa-2x"><span className={clsx(styles.ContactText)}><a href="mailto:#" title="Send me an email">chairilpati11@gmail.com</a></span></i></li>
                    </ul>

                    <hr />
                    <ul className={clsx(styles.SocialMedia)}>
                        <li><a href="#" target="_blank" className={clsx(styles.ContactIcon)}>
                            <i className="fa fa-github" aria-hidden="true"></i></a>
                        </li>
                        <li><a href="#" target="_blank" className={clsx(styles.ContactIcon)}>
                            <i className="fa fa-codepen" aria-hidden="true"></i></a>
                        </li>
                        <li><a href="#" target="_blank" className={clsx(styles.ContactIcon)}>
                            <i className="fa fa-twitter" aria-hidden="true"></i></a>
                        </li>
                        <li><a href="#" target="_blank" className={clsx(styles.ContactIcon)}>
                            <i className="fa fa-instagram" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                    <hr />
                    {/* <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div> */}
                </div>

            </div>

        </section>
    )
}

export default ContactSection