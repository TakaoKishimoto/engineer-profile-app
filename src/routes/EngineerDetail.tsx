import { Link, useParams } from "react-router-dom";
import { engineers } from "../data/engineers";
import { Engineer } from "../types/engineer";

export function EngineerDetail() {
  const { id } = useParams<{ id: string }>();
  const engineer = engineers.find((e: Engineer) => e.id === id);

  if (!engineer) {
    return (
      <div className="container">
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold mb-4">
            エンジニアが見つかりません
          </h1>
          <Link to="/" className="back-button">
            エンジニア一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-container py-8">
      <Link to="/" className="back-button">
        ← エンジニア一覧に戻る
      </Link>

      <div className="detail-header">
        <div className="detail-image">
          <img src={engineer.avatar} alt={engineer.name} />
        </div>
        <div className="detail-info">
          <h1>{engineer.name}</h1>
          <p className="position">{engineer.position}</p>
          <p className="experience">経験年数: {engineer.experience}年</p>
        </div>
      </div>

      <div className="detail-content">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">スキル</h2>
          <div className="skills">
            {engineer.skills.map((skill: string) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">自己紹介</h2>
          <p className="text-gray-600 leading-relaxed">{engineer.bio}</p>
        </section>

        {engineer.links && (
          <section className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold mb-4">ソーシャルリンク</h2>
            <div className="flex gap-4">
              {engineer.links.github && (
                <a
                  href={engineer.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  GitHub
                </a>
              )}
              {engineer.links.twitter && (
                <a
                  href={engineer.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  Twitter
                </a>
              )}
              {engineer.links.linkedin && (
                <a
                  href={engineer.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  LinkedIn
                </a>
              )}
              {engineer.links.website && (
                <a
                  href={engineer.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  Website
                </a>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
