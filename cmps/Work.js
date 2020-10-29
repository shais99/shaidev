import { useState } from "react";

const Work = ({ w }) => {
    const [hover, setHover] = useState(false)

    const onViewProject = () => {
        if (w.url) window.open(w.url, '_blank');
    }

    const onGitRepo = () => {
        if (w.gitRepo) window.open(w.gitRepo, '_blank');
    }

    return (
        <div className="work-container">
            <a href={w.url} target="_blank"><h3>{w.title}</h3></a>
            <div className="work" style={{ backgroundImage: `url(${w.img})` }} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div className="work-hover" style={hover ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }}>
                    <div className="btns-container">
                        <button className="take-a-look" onClick={onViewProject}>Take a look</button>
                        <button className="git-repo" onClick={onGitRepo}>Git repository</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;