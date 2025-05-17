// ステータスカラー定義
// エラーや警告などの状態を伝える際に使用する色です。アラートやスナックバーなどのコンポーネントで利用します。

import { Green, Red, Yellow, Emerald, Purple, BlueGray, Common } from './Colors';

export const STATUS_COLORS = {
  // 成功ステータス
  success: {
    high: Green[900],           // 強調表示用（ホバー用）
    main: Green[800],           // 標準表示用
    container: Green[50],       // コンテナ背景用
    onContainer: Green[800],    // コンテナ内テキスト用
    contrastText: Common.WHITE, // コントラストテキスト用
  },
  
  // エラーステータス
  error: {
    high: Red[900],             // 強調表示用（ホバー用）
    main: Red[800],             // 標準表示用
    container: Red[50],         // コンテナ背景用
    onContainer: Red[800],      // コンテナ内テキスト用
    contrastText: Common.WHITE, // コントラストテキスト用
  },
  
  // 警告ステータス
  warning: {
    high: Yellow[900],          // 強調表示用（ホバー用）
    main: Yellow[800],          // 標準表示用
    container: Yellow[50],      // コンテナ背景用
    onContainer: Yellow[800],   // コンテナ内テキスト用
    contrastText: Common.WHITE, // コントラストテキスト用
  },
  
  // 完了ステータス
  done: {
    container: BlueGray[100],   // コンテナ背景用
    onContainer: BlueGray[800], // コンテナ内テキスト用
  },
  
  // その他のステータス1
  other1: {
    high: Emerald[900],         // 強調表示用（ホバー用）
    main: Emerald[800],         // 標準表示用
    container: Emerald[50],     // コンテナ背景用
    onContainer: Emerald[800],  // コンテナ内テキスト用
    contrastText: Common.WHITE, // コントラストテキスト用
  },
  
  // その他のステータス2
  other2: {
    high: Purple[900],          // 強調表示用（ホバー用）
    main: Purple[800],          // 標準表示用
    container: Purple[50],      // コンテナ背景用
    onContainer: Purple[800],   // コンテナ内テキスト用
    contrastText: Common.WHITE, // コントラストテキスト用
  }
};

// 個別のカラー値にアクセスする際のエイリアス
export const STATUS = {
  // 成功
  SUCCESS_HIGH: STATUS_COLORS.success.high,
  SUCCESS_MAIN: STATUS_COLORS.success.main,
  SUCCESS_CONTAINER: STATUS_COLORS.success.container,
  SUCCESS_ON_CONTAINER: STATUS_COLORS.success.onContainer,
  SUCCESS_CONTRAST_TEXT: STATUS_COLORS.success.contrastText,
  
  // エラー
  ERROR_HIGH: STATUS_COLORS.error.high,
  ERROR_MAIN: STATUS_COLORS.error.main,
  ERROR_CONTAINER: STATUS_COLORS.error.container,
  ERROR_ON_CONTAINER: STATUS_COLORS.error.onContainer,
  ERROR_CONTRAST_TEXT: STATUS_COLORS.error.contrastText,
  
  // 警告
  WARNING_HIGH: STATUS_COLORS.warning.high,
  WARNING_MAIN: STATUS_COLORS.warning.main,
  WARNING_CONTAINER: STATUS_COLORS.warning.container,
  WARNING_ON_CONTAINER: STATUS_COLORS.warning.onContainer,
  WARNING_CONTRAST_TEXT: STATUS_COLORS.warning.contrastText,
  
  // 完了
  DONE_CONTAINER: STATUS_COLORS.done.container,
  DONE_ON_CONTAINER: STATUS_COLORS.done.onContainer,
  
  // その他1
  OTHER1_HIGH: STATUS_COLORS.other1.high,
  OTHER1_MAIN: STATUS_COLORS.other1.main,
  OTHER1_CONTAINER: STATUS_COLORS.other1.container,
  OTHER1_ON_CONTAINER: STATUS_COLORS.other1.onContainer,
  OTHER1_CONTRAST_TEXT: STATUS_COLORS.other1.contrastText,
  
  // その他2
  OTHER2_HIGH: STATUS_COLORS.other2.high,
  OTHER2_MAIN: STATUS_COLORS.other2.main,
  OTHER2_CONTAINER: STATUS_COLORS.other2.container,
  OTHER2_ON_CONTAINER: STATUS_COLORS.other2.onContainer,
  OTHER2_CONTRAST_TEXT: STATUS_COLORS.other2.contrastText,
};
