import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <h2>Toolbox</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-group">
            <h3>{category}</h3>
            <div className="tags">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}