import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.title} className="project-card">
            {p.image && <img src={p.image} alt={p.title} />}
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="links">
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noreferrer">Live</a>
              )}
              {p.repoUrl && (
                <a href={p.repoUrl} target="_blank" rel="noreferrer">Source</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
