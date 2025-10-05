# AIスクール応募サイト

AIスクールの受講希望者がオンラインで簡単に応募・支払いまで完了できる応募サイトです。

## 主な機能

### 一般ユーザー向け
- ✅ **ランディングページ**: スクール概要、コース紹介、講師紹介
- ✅ **申込フォーム**: 氏名、メール、電話番号、希望コース入力（バリデーション付き）
- ✅ **決済機能**: Stripe連携（申込金5,000円）※現在はダミー実装
- ✅ **申込完了ページ**: 申込ID表示と次のステップの案内

### 管理者向け
- ✅ **管理者ログイン**: Supabase Authによる認証
- ✅ **応募一覧**: 全応募データの閲覧・検索
- ✅ **CSVエクスポート**: 応募データのCSVダウンロード

## 技術スタック

- **フロントエンド**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **バックエンド**: Next.js API Routes
- **データベース**: Supabase (PostgreSQL)
- **認証**: Supabase Auth
- **決済**: Stripe (実装予定)
- **デプロイ**: Vercel (推奨)

## セットアップ手順

### 1. 環境変数の設定

`.env.local` ファイルを作成し、以下の環境変数を設定してください：

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe (現在未使用)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Application
NEXT_PUBLIC_APPLICATION_FEE=5000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 2. Supabaseプロジェクトの設定

1. [Supabase](https://supabase.com)でプロジェクトを作成
2. SQL Editorで `../supabase/schema.sql` を実行してテーブルを作成
3. Authentication > Users から管理者アカウントを作成

### 3. 依存パッケージのインストール

```bash
npm install
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 使い方

### ユーザーフロー

1. **トップページ**: http://localhost:3000
2. **申込フォーム**: http://localhost:3000/apply
3. **申込完了**: http://localhost:3000/apply/success

### 管理者フロー

1. **ログイン**: http://localhost:3000/admin/login
2. **応募管理**: http://localhost:3000/admin

## ライセンス

MIT
