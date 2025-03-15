# エンジニアプロフィールアプリケーション

エンジニアのプロフィール情報を管理・表示するための Web アプリケーションです。

## 機能

- エンジニア一覧の表示
- エンジニア詳細情報の表示
- スキル、経験年数、SNS リンクなどの管理

## 技術スタック

- フロントエンド: React + TypeScript
- バックエンド: Supabase
- スタイリング: TailwindCSS
- ルーティング: React Router

## セットアップ手順

1. リポジトリのクローン:

```bash
git clone [your-repository-url]
cd sns-app
```

2. 依存パッケージのインストール:

```bash
npm install
```

3. 環境変数の設定:

- `.env`ファイルを作成し、以下の変数を設定:

```
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. MCP の設定:

- `.mcp/settings.json`を作成し、Supabase 接続情報を設定

5. アプリケーションの起動:

```bash
npm run dev
```

## データベース構造

エンジニア情報は以下のような構造で保存されています：

```sql
create table engineers (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  position text not null,
  avatar text not null,
  bio text not null,
  skills text[] not null,
  experience integer not null,
  links jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

## 開発環境

- Node.js v19.3.0
- npm 9.2.0

## ライセンス

MIT

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the
configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install
[eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
and
[eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)
for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
