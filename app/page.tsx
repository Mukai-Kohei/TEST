import Link from 'next/link'
import { ArrowRight, Brain, Zap, Users, Award, BookOpen, Target } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              未来を創る<br className="md:hidden" />AI人材へ
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              実践的なAI技術を学び、即戦力となるスキルを身につける。
              <br />
              初心者からプロフェッショナルまで、あなたに合ったコースを用意しています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors"
              >
                今すぐ申し込む
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#courses"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
              >
                コースを見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              選ばれる理由
            </h2>
            <p className="text-xl text-gray-600">
              実践重視のカリキュラムで、確実にスキルを身につけられます
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">実践的なカリキュラム</h3>
              <p className="text-gray-600">
                実際のプロジェクトを通じて、現場で使えるAI技術を習得。理論だけでなく、実践的なスキルを重視します。
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">現役エンジニアによる指導</h3>
              <p className="text-gray-600">
                AI業界の最前線で活躍する現役エンジニアが直接指導。実務経験に基づいたノウハウを学べます。
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">就職・転職サポート</h3>
              <p className="text-gray-600">
                キャリアカウンセリングから企業紹介まで、AI業界への就職・転職を全面的にサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              コース紹介
            </h2>
            <p className="text-xl text-gray-600">
              あなたのレベルと目標に合わせて選べる3つのコース
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">ベーシックコース</h3>
              <p className="text-gray-600 mb-4">
                AI初心者向け。基礎から丁寧に学べる3ヶ月コース。
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Python基礎</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>機械学習入門</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>データ分析基礎</span>
                </li>
              </ul>
              <div className="text-3xl font-bold text-blue-600 mb-4">¥198,000</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-blue-600">
              <div className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                人気No.1
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">アドバンスコース</h3>
              <p className="text-gray-600 mb-4">
                実践的なAI開発スキルを習得する6ヶ月コース。
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>深層学習</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>自然言語処理</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>コンピュータビジョン</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>実践プロジェクト</span>
                </li>
              </ul>
              <div className="text-3xl font-bold text-green-600 mb-4">¥398,000</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">プロフェッショナルコース</h3>
              <p className="text-gray-600 mb-4">
                AI業界のプロを目指す本格的な12ヶ月コース。
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>最新AI技術</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>MLOps</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>大規模プロジェクト</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>キャリアサポート</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>マンツーマン指導</span>
                </li>
              </ul>
              <div className="text-3xl font-bold text-purple-600 mb-4">¥698,000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              講師紹介
            </h2>
            <p className="text-xl text-gray-600">
              AI業界の最前線で活躍する現役エンジニアが直接指導
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">田中 健太</h3>
              <p className="text-blue-600 font-semibold mb-2">AI技術責任者</p>
              <p className="text-gray-600 text-sm">
                大手IT企業でAI開発を10年以上経験。自然言語処理の専門家として多数のプロジェクトを主導。
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">佐藤 美咲</h3>
              <p className="text-green-600 font-semibold mb-2">機械学習エンジニア</p>
              <p className="text-gray-600 text-sm">
                コンピュータビジョン分野で世界的な論文を発表。画像認識AIの実装において豊富な経験を持つ。
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">山田 大輔</h3>
              <p className="text-purple-600 font-semibold mb-2">データサイエンティスト</p>
              <p className="text-gray-600 text-sm">
                金融・ヘルスケア分野でのAI活用に従事。データ分析から実装まで幅広いスキルを持つ。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            今すぐAI人材への第一歩を踏み出そう
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            申込金5,000円で仮予約可能。まずはお気軽にお申し込みください。
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors"
          >
            今すぐ申し込む
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl font-bold text-white mb-2">AIスクール</p>
            <p className="text-sm">© 2025 AI School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
