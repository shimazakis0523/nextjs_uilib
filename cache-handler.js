/**
 * カスタムキャッシュハンドラー
 * Vercelのエッジキャッシュと連携するための設定です
 */
module.exports = {
  // キャッシュデータの取得
  async get(key) {
    return null
  },
  
  // キャッシュデータの保存
  async set(key, data, options) {
    return true
  },
  
  // キャッシュデータの削除
  // 特定のタグに関連するすべてのキャッシュを削除するために使用
  async revalidateTag(tag) {
    return true
  }
} 