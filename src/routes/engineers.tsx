import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { supabase } from "~/lib/supabase";
import type { Engineer } from "~/types/engineer";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {engineers.map((engineer: Engineer) => (
        <EngineerCard key={engineer.id} engineer={engineer} />
      ))}
    </div>
  );
}
