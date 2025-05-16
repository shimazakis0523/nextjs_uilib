// ステータスカラー定義
// エラーや警告などの状態を伝える際に使用する色です。アラートやスナックバーなどのコンポーネントで利用します。

export const STATUS_COLORS = {
  // 成功ステータス
  success: {
    container: '#E6F4EA',      // Green50 - 薄い緑背景
    onContainer: '#1E8E3E',    // Green800 - 濃い緑テキスト
  },
  
  // エラーステータス
  error: {
    high: '#B71C1C',          // Red900 - 濃い赤色（ホバー用）
    main: '#D32F2F',          // Red800 - 標準赤色
    container: '#FFEBEE',      // Red50 - 薄い赤背景
    onContainer: '#D32F2F',    // Red800 - 濃い赤テキスト
    contrastText: '#FFFFFF',   // White - 白色テキスト（赤背景上）
  },
  
  // 警告ステータス
  warning: {
    container: '#FFF8E1',      // Yellow50 - 薄い黄色背景
    onContainer: '#F9A825',    // Yellow800 - 濃い黄色テキスト
  },
  
  // 完了ステータス
  done: {
    container: '#F0F2F5',      // BlueGray100 - 薄いグレー背景
    onContainer: '#2F3845',    // BlueGray800 - 濃いグレーテキスト
  },
  
  // その他のステータス1（エメラルド）
  other1: {
    container: '#E0F7F5',      // Emerald50 - 薄いエメラルド背景
    onContainer: '#00958D',    // Emerald800 - 濃いエメラルドテキスト
  },
  
  // その他のステータス2（パープル）
  other2: {
    container: '#F3E5F5',      // Purple50 - 薄い紫背景
    onContainer: '#8E24AA',    // Purple800 - 濃い紫テキスト
  }
};

// 個別のカラー値にアクセスする際のエイリアス
export const STATUS = {
  // 成功
  SUCCESS_CONTAINER: STATUS_COLORS.success.container,
  SUCCESS_ON_CONTAINER: STATUS_COLORS.success.onContainer,
  
  // エラー
  ERROR_HIGH: STATUS_COLORS.error.high,
  ERROR_MAIN: STATUS_COLORS.error.main,
  ERROR_CONTAINER: STATUS_COLORS.error.container,
  ERROR_ON_CONTAINER: STATUS_COLORS.error.onContainer,
  ERROR_CONTRAST_TEXT: STATUS_COLORS.error.contrastText,
  
  // 警告
  WARNING_CONTAINER: STATUS_COLORS.warning.container,
  WARNING_ON_CONTAINER: STATUS_COLORS.warning.onContainer,
  
  // 完了
  DONE_CONTAINER: STATUS_COLORS.done.container,
  DONE_ON_CONTAINER: STATUS_COLORS.done.onContainer,
  
  // その他1
  OTHER1_CONTAINER: STATUS_COLORS.other1.container,
  OTHER1_ON_CONTAINER: STATUS_COLORS.other1.onContainer,
  
  // その他2
  OTHER2_CONTAINER: STATUS_COLORS.other2.container,
  OTHER2_ON_CONTAINER: STATUS_COLORS.other2.onContainer,
};
