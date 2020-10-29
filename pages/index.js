import Head from 'next/head'
import '../styles/global.scss'
import Navbar from '../cmps/Navbar'
import Hero from '../cmps/Hero'
import RecentWork from '../cmps/RecentWork'
import AboutMe from '../cmps/AboutMe'
import ContactMe from '../cmps/ContactMe'
import Footer from '../cmps/Footer'
import handleViewport from 'react-in-viewport';
const RecentWorkBlock = handleViewport(RecentWork);
const AboutMeBlock = handleViewport(AboutMe);
const ContactMeBlock = handleViewport(ContactMe);
const HeroBlock = handleViewport(Hero);

const Home = () => {
  const saveViewPort = (viewport) => {
    localStorage.setItem('viewport', viewport)
  }

  return (
    <main className="web-main-container">
      <Head>
        <title>SHAIDEV | Full Stack Developer</title>
        <link rel="icon" href="/assets/img/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
      </Head>

      <Navbar />
      <HeroBlock onEnterViewport={() => saveViewPort('')} />
      <div id="projects" className="recent-break"></div>
      <RecentWorkBlock onEnterViewport={() => saveViewPort('projects')} />
      <div id="about-me" className="about-break"></div>
      <AboutMeBlock onEnterViewport={() => saveViewPort('about-me')} />
      <div id="contact-me" className="contact-break"></div>
      <ContactMeBlock onEnterViewport={() => saveViewPort('contact-me')} />
      <Footer />
    </main>
  )
}

export default Home;