-- ==========================================
-- AIスクール応募サイト データベーススキーマ
-- ==========================================

-- 応募テーブル
CREATE TABLE IF NOT EXISTS applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  course TEXT NOT NULL CHECK (course IN ('basic', 'advanced', 'professional')),
  message TEXT,
  payment_status TEXT NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed')),
  payment_intent_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- インデックス作成
CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_payment_status ON applications(payment_status);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_applications_payment_intent_id ON applications(payment_intent_id);

-- 更新日時の自動更新トリガー
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON applications
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- RLS（Row Level Security）有効化
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- 管理者のみ全データ参照可能
CREATE POLICY "管理者は全データ参照可能" ON applications
  FOR SELECT
  USING (auth.jwt() ->> 'role' = 'authenticated');

-- 管理者のみデータ更新可能
CREATE POLICY "管理者はデータ更新可能" ON applications
  FOR UPDATE
  USING (auth.jwt() ->> 'role' = 'authenticated');

-- サービスロール or 匿名ユーザーがデータ挿入可能（フォーム送信用）
CREATE POLICY "応募データ挿入可能" ON applications
  FOR INSERT
  WITH CHECK (true);

-- コメント追加
COMMENT ON TABLE applications IS 'AIスクール応募情報';
COMMENT ON COLUMN applications.full_name IS '応募者氏名';
COMMENT ON COLUMN applications.email IS 'メールアドレス';
COMMENT ON COLUMN applications.phone IS '電話番号';
COMMENT ON COLUMN applications.course IS '希望コース (basic/advanced/professional)';
COMMENT ON COLUMN applications.message IS '任意メッセージ';
COMMENT ON COLUMN applications.payment_status IS '支払いステータス (pending/completed/failed)';
COMMENT ON COLUMN applications.payment_intent_id IS 'Stripe PaymentIntent ID';
