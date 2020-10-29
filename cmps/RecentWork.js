import Link from 'next/link'
import { works } from '../services/workService'
import Work from './Work';

const RecentWork = ({ forwardedRef }) => {
    return (
        <section className="recent-work flex column align-center" ref={forwardedRef}>
            <h3 className="section-title">My Recent Work</h3>
            <p className="section-sub-title">Here are a few projects I’ve worked on recently. Want to see more? <Link href="#contact-me">Contact me</Link></p>

            <section className="works-container">
                {works.map((w, idx) => <Work key={idx} w={w} />)}
            </section>

            <section className="technologies flex wrap align-center justify-center">
                <img src="/assets/img/react.png" alt="react" />
                <img src="/assets/img/redux.png" alt="redux" />
                <img src="/assets/img/vue.png" alt="vue" />
                <img src="/assets/img/html5.png" alt="html5" />
                <img src="/assets/img/sass.png" alt="sass" />
                <img src="/assets/img/materialui.png" alt="materialui" />
                <img src="/assets/img/node.png" alt="node" />
            </section>
        </section >
    )
}

export default RecentWork;