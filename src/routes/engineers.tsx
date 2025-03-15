import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { supabase } from "../lib/supabase";
import type { Engineer } from "../types/engineer";

interface EngineerCardProps {
  engineer: Engineer;
}

function EngineerCard({ engineer }: EngineerCardProps) {
  return (
    <Link
      to={`/engineers/${engineer.id}`}
      className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={engineer.avatar}
            alt={engineer.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold text-gray-900">{engineer.name}</h2>
            <p className="text-gray-600">{engineer.position}</p>
          </div>
        </div>
        <p className="text-gray-500 mb-4 line-clamp-2">{engineer.bio}</p>
        <div className="flex flex-wrap gap-2">
          {engineer.skills.slice(0, 3).map((skill: string) => (
            <span
              key={skill}
              className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
          {engineer.skills.length > 3 && (
            <span className="text-gray-500 text-sm">
              +{engineer.skills.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export async function loader() {
  const { data: engineers, error } = await supabase
    .from("engineers")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("エンジニア一覧の取得に失敗しました");
  }

  return json({ engineers });
}

export default function Engineers() {
  const { engineers } = useLoaderData<typeof loader>();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">エンジニア一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {engineers.map((engineer: Engineer) => (
          <EngineerCard key={engineer.id} engineer={engineer} />
        ))}
      </div>
    </div>
  );
}
