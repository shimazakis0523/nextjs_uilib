/**
 * アプリケーションで使用する正規表現パターンを一元管理するファイル
 */

/**
 * メールアドレスの正規表現パターン
 * example@example.com形式
 */
export const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * 電話番号の正規表現パターン
 * 000-0000-0000形式（ハイフン必須）
 */
export const PHONE_PATTERN = /^\d{2,4}-\d{2,4}-\d{3,4}$/;

/**
 * 携帯電話・IP電話番号の正規表現パターン
 * 090, 080, 070, 060, 050で始まる番号のみ許可
 * 090-0000-0000形式（ハイフン必須）
 */
export const MOBILE_PHONE_PATTERN = /^(090|080|070|060|050)-\d{4}-\d{4}$/;

/**
 * 郵便番号の正規表現パターン
 * 000-0000形式（ハイフン必須）
 */
export const POSTAL_CODE_PATTERN = /^\d{3}-\d{4}$/;

/**
 * URLの正規表現パターン
 * http:// または https:// から始まるURL
 */
export const URL_PATTERN = /^(https?:\/\/)[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/;

/**
 * 数字のみの正規表現パターン
 */
export const NUMBERS_ONLY_PATTERN = /^\d+$/;

/**
 * アルファベットのみの正規表現パターン（小文字・大文字）
 */
export const ALPHABET_ONLY_PATTERN = /^[a-zA-Z]+$/;

/**
 * アルファベット（小文字のみ）の正規表現パターン
 */
export const LOWERCASE_ONLY_PATTERN = /^[a-z]+$/;

/**
 * アルファベット（大文字のみ）の正規表現パターン
 */
export const UPPERCASE_ONLY_PATTERN = /^[A-Z]+$/;

/**
 * 英数字のみの正規表現パターン
 */
export const ALPHANUMERIC_PATTERN = /^[a-zA-Z0-9]+$/;

/**
 * ひらがなのみの正規表現パターン
 */
export const HIRAGANA_ONLY_PATTERN = /^[\u3040-\u309F]+$/;

/**
 * カタカナのみの正規表現パターン
 */
export const KATAKANA_ONLY_PATTERN = /^[\u30A0-\u30FF]+$/;

/**
 * 日本語（ひらがな・カタカナ・漢字）の正規表現パターン
 */
export const JAPANESE_PATTERN = /^[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]+$/;

/**
 * クレジットカード番号の正規表現パターン
 * 16桁の数字（ハイフンやスペースは任意）
 */
export const CREDIT_CARD_PATTERN = /^(\d{4}[-\s]?){3}\d{4}$/;

/**
 * パスワード強度チェックの正規表現パターン
 * 少なくとも1つの数字、1つの小文字、1つの大文字、1つの特殊文字を含む8文字以上
 */
export const STRONG_PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
