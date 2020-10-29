import Link from 'next/link'
import EmailIcon from './icons/EmailIcon';
import FacebookIcon from './icons/FacebookIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import GithubIcon from './icons/GithubIcon';

const Footer = () => {
    return (
        <footer className="main-footer flex column align-center">
            <div className="logo">
                <Link href="#"><img src="/assets/img/footer_logo.png" alt="footer_logo" /></Link>
            </div>
            <h3 className="footer-title">Living, learning, & leveling up one day at a time.</h3>
            <div className="social-container flex">
                <FacebookIcon />
                <LinkedInIcon />
                <EmailIcon />
                <GithubIcon />
            </div>
            <div className="copy-rights">
                Designed and developed by me @ shaidev.com
            </div>
        </footer>
    )
}

export default Footer;