export default function About() {
  return (
    <section id="about">
      <h2>About me</h2>
      <div className="about-content">
        <img
          src="/images/me.jpg"
          alt="Photo of Lucas Gobaco"
          className="about-photo"
        />
        <p>
           I’m a computer science student at UC Davis focusing on machine learning and computer vision. I enjoy building full-stack applications, from multi-stage inference pipelines to real-time vision systems. Right now I’m strengthening my skills in front-end web development to make my projects more presentable.
        </p>
      </div>
    </section>
  );
}