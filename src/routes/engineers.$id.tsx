import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { supabase } from "~/lib/supabase";
import type { Engineer } from "~/types/engineer";

export async function loader({ params }: { params: { id: string } }) {
  const { data: engineer, error } = await supabase
    .from("engineers")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !engineer) {
    throw new Error("エンジニアが見つかりません");
  }

  return json({ engineer });
}

export default function EngineerDetail() {
  const { engineer } = useLoaderData<typeof loader>();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-8">
          <img
            src={engineer.avatar}
            alt={engineer.name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="ml-8">
            <h1 className="text-3xl font-bold">{engineer.name}</h1>
            <p className="text-gray-600 text-xl mt-2">{engineer.position}</p>
            <p className="text-gray-500 mt-2">{engineer.experience}年の経験</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">自己紹介</h2>
          <p className="text-gray-700 whitespace-pre-wrap">{engineer.bio}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">スキル</h2>
          <div className="flex flex-wrap gap-2">
            {engineer.skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {engineer.links && (
          <div>
            <h2 className="text-2xl font-bold mb-4">リンク</h2>
            <div className="flex gap-4">
              {engineer.links.github && (
                <a
                  href={engineer.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900">
                  GitHub
                </a>
              )}
              {engineer.links.twitter && (
                <a
                  href={engineer.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900">
                  Twitter
                </a>
              )}
              {engineer.links.linkedin && (
                <a
                  href={engineer.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900">
                  LinkedIn
                </a>
              )}
              {engineer.links.website && (
                <a
                  href={engineer.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900">
                  Website
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
