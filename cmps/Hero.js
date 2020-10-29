import { useRouter } from 'next/router'

const Hero = ({ forwardedRef }) => {
    const router = useRouter()
    const onClickContact = () => {
        router.replace('#contact-me')
    }

    return (
        <section className="hero" ref={forwardedRef}>
            <h2 className="main-title shadow">Full Stack Developer</h2>
            <p className="desc shadow">I code, and I love what I do.</p>

            <button className="contact-btn" onClick={onClickContact}>Let's talk</button>
        </section>
    )
}

export default Hero;