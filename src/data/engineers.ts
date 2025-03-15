import { Engineer } from "../types/engineer";

export const engineers: Engineer[] = [
  {
    id: "1",
    name: "山田 太郎",
    position: "フルスタックエンジニア",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "10年以上のWeb開発経験を持つフルスタックエンジニア。React、Node.js、TypeScriptを使用した大規模アプリケーションの開発に従事。チームリーダーとして複数のプロジェクトを成功に導いた実績があります。",
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker", "GraphQL"],
    experience: 10,
    links: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
  },
  {
    id: "2",
    name: "鈴木 花子",
    position: "フロントエンドエンジニア",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "UIデザインとフロントエンド開発のスペシャリスト。モダンなWebアプリケーションの開発に情熱を持ち、ユーザー体験の向上に注力しています。デザインシステムの構築やパフォーマンス最適化の経験が豊富です。",
    skills: ["React", "Vue.js", "CSS", "Tailwind CSS", "JavaScript", "Figma"],
    experience: 5,
    links: {
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "3",
    name: "佐藤 健一",
    position: "バックエンドエンジニア",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "大規模システムのバックエンド設計・開発を得意とするエンジニア。マイクロサービスアーキテクチャの設計から実装まで、幅広い経験を持っています。パフォーマンスとスケーラビリティを重視したシステム開発が専門です。",
    skills: [
      "Go",
      "Python",
      "PostgreSQL",
      "Kubernetes",
      "gRPC",
      "Microservices",
    ],
    experience: 7,
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "4",
    name: "田中 美咲",
    position: "モバイルアプリエンジニア",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "iOS/Androidアプリ開発のエキスパート。クロスプラットフォーム開発からネイティブアプリまで幅広く対応。ユーザビリティとパフォーマンスの両立を重視したアプリ開発を得意としています。",
    skills: ["Swift", "Kotlin", "Flutter", "Firebase", "React Native", "UI/UX"],
    experience: 6,
    links: {
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "5",
    name: "中村 翔太",
    position: "インフラエンジニア",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "クラウドインフラの設計・構築のスペシャリスト。AWSを中心としたマルチクラウド環境の構築、運用自動化、セキュリティ対策まで、インフラ全般を担当しています。",
    skills: ["AWS", "Terraform", "Ansible", "Docker", "Kubernetes", "CI/CD"],
    experience: 8,
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "6",
    name: "小林 優子",
    position: "データサイエンティスト",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "機械学習とデータ分析の専門家。ビッグデータの分析から予測モデルの構築まで、データを活用したビジネス課題の解決を行っています。",
    skills: ["Python", "TensorFlow", "PyTorch", "SQL", "R", "統計解析"],
    experience: 4,
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "7",
    name: "加藤 雄一",
    position: "セキュリティエンジニア",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "情報セキュリティのスペシャリスト。脆弱性診断、セキュリティ監査、インシデント対応など、組織全体のセキュリティ向上に貢献しています。",
    skills: [
      "Penetration Testing",
      "CISSP",
      "Network Security",
      "Forensics",
      "Security Audit",
      "Risk Management",
    ],
    experience: 9,
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "8",
    name: "渡辺 真理",
    position: "QAエンジニア",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    bio: "品質保証のプロフェッショナル。自動化テスト基盤の構築から、パフォーマンステスト、セキュリティテストまで、幅広いテスト工程を担当しています。",
    skills: [
      "Selenium",
      "JUnit",
      "Jenkins",
      "TestNG",
      "Appium",
      "Load Testing",
    ],
    experience: 6,
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];
