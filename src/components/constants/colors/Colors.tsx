// 色の定義ファイル
// 色のバリエーションを一元管理するためのファイルです

export const Black = {
  900: '#212121',
  800: '#424242',
  700: '#616161',
  600: '#757575',
  500: '#9E9E9E',
  400: '#BDBDBD',
  300: '#E0E0E0',
  200: '#EEEEEE',
  100: '#F5F5F5',
  50: '#FAFAFA',
};

export const BlueGray = {
  900: '#282E37',
  800: '#434D5B',
  700: '#61607D',
  600: '#758192',
  500: '#7C8A9C',
  400: '#96A4B4',
  300: '#B0BBC9',
  200: '#CED6DE',
  100: '#F0F3F6',
  50: '#F8FAFC',
};

export const Blue = {
  // 青色のバリエーション
  50: '#EBF3FD',
  100: '#D6E7FB',
  200: '#CBE1FB',
  300: '#A3CBFA',
  400: '#77B1F3',
  500: '#4E97F0',
  600: '#2563eb',
  700: '#2554C7',
  800: '#1473E6',
  900: '#095ABA',
};

export const Red = {
  900: '#B42128',
  800: '#C9252D',
  700: '#CE3442',
  600: '#D35056',
  500: '#D9666C',
  400: '#DF7C81',
  300: '#E49296',
  200: '#E9A7AB',
  100: '#F4D3D5',
  50: '#F9E9EA',
};

export const Green = {
  900: '#2E974A',
  800: '#34A353',
  700: '#48B064',
  600: '#5CB975',
  500: '#70C286',
  400: '#85CA97',
  300: '#99D3A9',
  200: '#ADDCBA',
  100: '#D6EDDC',
  50: '#EAF6ED',
};

export const Yellow = {
  900: '#E19B12',
  800: '#FAAD14',
  700: '#FAB52B',
  600: '#FBBD42',
  500: '#FBC55A',
  400: '#FCCD72',
  300: '#FCD689',
  200: '#FDDEA1',
  100: '#FEEED0',
  50: '#FEF6E7',
};

export const Emerald = {
  900: '#18868A',
  800: '#1B959A',
  700: '#31BFA4',
  600: '#48AAAE',
  500: '#5FB4B8',
  400: '#76BFC2',
  300: '#8DCACC',
  200: '#A3D4D6',
  100: '#D1E9EA',
  50: '#E8F4F4',
};

export const Purple = {
  900: '#AC32B7',
  800: '#C038CC',
  700: '#C64BD1',
  600: '#CC5FD6',
  500: '#D273DB',
  400: '#D987E0',
  300: '#DF9BE5',
  200: '#E5AFEA',
  100: '#F2D7F4',
  50: '#F8EBF9',
};

// 基本色
export const Common = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  TRANSPARENT: 'transparent',
};

// 透明度付き色を生成するヘルパー関数
export const withAlpha = (color: string, alpha: number): string => {
  // 16進数カラーコードをRGBに変換
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}; 