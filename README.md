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

# エンジニアプロフィールアプリケーション

エンジニアのプロフィール情報を管理・表示するための Web アプリケーションです。

## 必要要件

- Node.js >= 20.0.0
- npm >= 10.0.0

## クイックスタート

```bash
# Node.jsのバージョン確認
node --version  # v20.x.x以上であることを確認

# npmのバージョン確認
npm --version   # v10.x.x以上であることを確認

# リポジトリのクローン
git clone https://github.com/TakaoKishimoto/engineer-profile-app.git

# プロジェクトディレクトリに移動
cd engineer-profile-app

# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 機能

- エンジニア一覧の表示
- エンジニア詳細情報の表示
- スキル、経験年数、SNS リンクなどの管理

## 基本ディレクトリ

/src ├── /components // 共通の UI コンポーネント ├── /pages // ページコンポーネ
ント（トップ画面、ログイン画面など） ├── /routes // Remix のルート設定（ページ
URL とコンポーネントの紐付け） ├── /models // データの構造や型定義（エンジニアデ
ータなど） ├── /utils // ユーティリティ関数や API との通信処理など ├── /styles
// グローバル CSS やスタイル ├── /db // DB アクセスやリポジトリ（必要であれば）
├── /services // サービス層のビジネスロジック（認証、エンジニアデータの処理）
├── /types // TypeScript の型定義（共通型、ページ型、API 型など） └── /assets //
画像やアイコンなどの静的アセット
