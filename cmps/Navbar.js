import Link from 'next/link'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        window.document.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        let body = document.body
        let theDocument = document.documentElement
        theDocument = (theDocument.clientHeight) ? theDocument : body;

        if (theDocument.scrollTop === 0) setScroll(false)
        else if (!scroll) setScroll(true)
    }

    return (
        <header className={`navbar flex space-between align-center ${scroll ? 'scroll' : ''}`}>
            <a className="a-logo" href="#">
                <div className="logo rotate-center flex align-center">
                    <img src="/assets/img/logo.png" alt="SHAIDEV - Full Stack Developer" />
                    <h1>SHAIDEV</h1>
                </div>
            </a>
            <ul className={`main-nav clean-list flex ${menuOpen ? 'menu-open' : ''}`}>
                <li onClick={() => setMenuOpen(false)}><Link href="#projects">Projects</Link></li>
                <li onClick={() => setMenuOpen(false)}><Link href="#about-me">About</Link></li>
                <li onClick={() => setMenuOpen(false)}><Link href="#contact-me">Contact me</Link></li>
            </ul>
            <div className={`nav-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Navbar;