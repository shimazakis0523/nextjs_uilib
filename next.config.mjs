/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercelデプロイの最適化設定
  output: 'standalone',
  
  // 画像最適化の設定
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // ビルド時の詳細ログを表示
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  
  // キャッシュ最適化
  experimental: {
    incrementalCacheHandlerPath: require.resolve('./cache-handler.js'),
    isrMemoryCacheSize: 0, // デフォルトは50MB
  },

  // 分析設定（必要に応じて有効化）
  // analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID,
};

export default nextConfig; 