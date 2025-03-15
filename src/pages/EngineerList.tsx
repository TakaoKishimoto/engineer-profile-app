import { Link } from "react-router-dom";
import { engineers } from "../data/engineers";
import type { Engineer } from "../types/engineer";

export function EngineerList() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1>エンジニアを探す</h1>
        </div>
      </header>
      <main className="container">
        <div className="grid">
          {engineers.map((engineer: Engineer) => (
            <Link
              key={engineer.id}
              to={`/engineers/${engineer.id}`}
              className="card">
              <div className="card-image">
                <img src={engineer.avatar} alt={engineer.name} loading="lazy" />
              </div>
              <div className="card-content">
                <h2 className="engineer-name">{engineer.name}</h2>
                <p className="position">{engineer.position}</p>
                <p className="experience">経験年数: {engineer.experience}年</p>
                <div className="skills">
                  {engineer.skills.slice(0, 3).map((skill: string) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                  {engineer.skills.length > 3 && (
                    <span className="skill-tag">
                      +{engineer.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
