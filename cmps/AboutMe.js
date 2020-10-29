import { useRouter } from 'next/router'
import EmailIcon from './icons/EmailIcon'
import FacebookIcon from './icons/FacebookIcon'
import GithubIcon from './icons/GithubIcon'
import LinkedInIcon from './icons/LinkedInIcon'

const AboutMe = ({ forwardedRef }) => {
    const router = useRouter()

    const onClickContact = () => {
        router.replace('#contact-me')
    }

    return (
        <section className="about-me flex column align-center" ref={forwardedRef}>
            <h3 className="section-title">About Me</h3>
            <p className="section-sub-title">Find out who I am, where I'm from and what I'm all about.</p>
            <div className="content flex">
                <div className="img">
                    <img src="/assets/img/me.png" alt="me" />
                </div>
                <div className="txt flex column">
                    <p>
                        Hi! I am Shai Sharakanski, a Full-Stack Web Developer specializing in React, Vue, Node.js and MongoDB.
                    </p>
                    <p>
                        I am a team player, a fast learner, I work well under pressure, and I am eager to create quality products
                        that bring high value to customers.
                    </p>
                    <p>
                        I enjoy challenging tasks and look forward to interesting and innovative projects.
                    </p>
                    <p>
                        I found myself into web development since 2014.
                    </p>
                    <p>
                        I enjoy creating beautifully designed, intuitive and functional websites.
                        In my free time you can find me at the gym, at the tennis court, at the beach or on tech meetups.
                    </p>
                    <div className="btn-social-container flex align-center">
                        <button className="contact-btn" onClick={onClickContact}>Contact Now</button>
                        <div className="social-container flex">
                            <FacebookIcon />
                            <LinkedInIcon />
                            <EmailIcon />
                            <GithubIcon />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;