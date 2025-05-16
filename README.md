This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## UI Component System

This project includes a comprehensive UI component system with:

- Button components (Main, Secondary, Tertiary, Text)
- Color management system with consistent theming
- Component-based architecture following best practices

## Deploy on Vercel

### 準備

1. [Vercel](https://vercel.com)アカウントを作成する（GitHubアカウントでログイン可能）
2. Vercel CLIをインストールする（オプション）:

```bash
npm i -g vercel
```

### デプロイ手順

#### オプション1: Vercel Dashboard（推奨）

1. [Vercel New Project](https://vercel.com/new)ページにアクセス
2. GitHubリポジトリをインポート
3. 以下の設定を行う:
   - Framework Preset: `Next.js`
   - Root Directory: `./` (デフォルト)
   - Build Command: `npm run build` (自動検出)
   - Output Directory: `.next` (自動検出)
   - 必要な環境変数を設定（本番環境に応じて）
4. 「Deploy」ボタンをクリック

#### オプション2: Vercel CLI

```bash
# プロジェクトフォルダ内で
vercel

# 本番環境へのデプロイ
vercel --prod
```

### 環境変数の設定

Vercel Dashboardの「Settings」>「Environment Variables」から以下の変数を設定できます:

- `NEXT_PUBLIC_API_URL`: API接続先URL
- その他プロジェクトで必要な環境変数

### カスタムドメインの設定

1. Vercel Dashboardの「Settings」>「Domains」
2. 「Add」ボタンをクリック
3. ドメイン名を入力し、手順に従って設定

### 継続的デプロイ

GitHubリポジトリに接続している場合、`main`ブランチへのプッシュで自動的にデプロイされます。
プレビュー環境はプルリクエスト毎に自動生成されます。

### 詳細なデプロイ設定

詳細は[Next.jsデプロイドキュメント](https://nextjs.org/docs/app/building-your-application/deploying)または[Vercelのドキュメント](https://vercel.com/docs)を参照してください。

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
