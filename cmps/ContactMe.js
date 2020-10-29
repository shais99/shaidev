import Axios from "axios";
import { useState } from "react";

const ContactMe = (props) => {
    const { forwardedRef } = props;
    const [contactDetails, setContactDetails] = useState({})
    const [msg, setMsg] = useState({ content: '', success: true })

    const handleChange = ({ target }) => setContactDetails(prevDetails => ({ ...prevDetails, [target.name]: target.value }))
    const onSubmit = async (e) => {
        e.preventDefault();
        const mail = {
            to: 'shaishar9@gmail.com',
            subject: 'New Mail From shaidev.com',
            html: `<p><p>Name: ${contactDetails.name}</p></p><p><p>Email: ${contactDetails.email}</p></p><p><p>Message: ${contactDetails.body}</p></p>`,
            company: 'shaidev.com',
            sendername: 'shaidev-restdb'
        }
        try {
            await Axios.post('https://shaidev-66bb.restdb.io/mail', mail, { headers: { 'x-apikey': '5f96f26e4b77c1637d147e2b' } });
            setMsg({ content: 'Your message has been successfully sent and will respond shortly', success: true })
        } catch (err) {
            setMsg({ content: 'System error, you message was not sent', success: false })
            console.log(err);
        }
    }

    return (
        <section className="contact-me flex column align-center" ref={forwardedRef}>
            <h3 className="section-title">Contact Me</h3>
            <p className="section-sub-title">If you’d like to chat about a project please fill in the form below and I’ll get back to you within 1-2 days.</p>
            <form className="contact-form flex column align-center" onSubmit={onSubmit}>
                <div className="name-email flex">
                    <label className="flex column align-start">
                        <span>Name</span>
                        <input type="text" name="name" onChange={handleChange} value={contactDetails.name ?? ''} autoComplete="off" required />
                    </label>
                    <label className="flex column align-start">
                        <span>Email</span>
                        <input type="email" name="email" onChange={handleChange} value={contactDetails.email ?? ''} autoComplete="off" required />
                    </label>
                </div>
                <div className="message">
                    <label className="flex column align-start">
                        <span>Message</span>
                        <textarea name="body" onChange={handleChange} defaultValue={contactDetails.body ?? ''}></textarea>
                    </label>
                </div>
                <div className={`msg-container ${msg.success ? 'success' : 'danger'}`} style={msg.content ? { visibility: 'visible', opacity: '1' } : {}}>{msg.content}</div>
                <button className="contact-btn">Send Message</button>
            </form>
        </section>
    )
}

export default ContactMe;