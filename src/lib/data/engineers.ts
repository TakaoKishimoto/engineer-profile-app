import { Engineer } from "../types/engineer";

export const engineers: Engineer[] = [
  {
    id: "1",
    name: "山田 太郎",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    title: "フルスタックエンジニア",
    bio: "10年以上のWeb開発経験を持つフルスタックエンジニア。React、Node.js、TypeScriptを主に使用しています。",
    skills: [
      { name: "React", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "Node.js", level: 4 },
      { name: "Python", level: 3 },
    ],
    experience: 10,
    github: "https://github.com/yamada-taro",
    twitter: "https://twitter.com/yamada-taro",
  },
  {
    id: "2",
    name: "鈴木 花子",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    title: "フロントエンドエンジニア",
    bio: "UIデザインとフロントエンド開発に特化したエンジニア。アクセシビリティとパフォーマンスに注力しています。",
    skills: [
      { name: "React", level: 5 },
      { name: "Vue.js", level: 4 },
      { name: "CSS", level: 5 },
      { name: "JavaScript", level: 4 },
    ],
    experience: 5,
    github: "https://github.com/suzuki-hanako",
    website: "https://suzuki-hanako.dev",
  },
  {
    id: "3",
    name: "佐藤 健一",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    title: "バックエンドエンジニア",
    bio: "スケーラブルなバックエンドシステムの設計・開発が得意。マイクロサービスアーキテクチャの実装経験が豊富です。",
    skills: [
      { name: "Go", level: 5 },
      { name: "Docker", level: 4 },
      { name: "Kubernetes", level: 4 },
      { name: "AWS", level: 4 },
    ],
    experience: 8,
    github: "https://github.com/sato-kenichi",
    linkedin: "https://linkedin.com/in/sato-kenichi",
  },
];
