declare module 'jalaali-js' {
  export interface JalaaliDate {
    jy: number;
    jm: number;
    jd: number;
  }
  
  export interface GregorianDate {
    gy: number;
    gm: number;
    gd: number;
  }
  
  export function toJalaali(date: Date): JalaaliDate;
  export function toJalaali(gy: number, gm: number, gd: number): JalaaliDate;
  export function toGregorian(jy: number, jm: number, jd: number): GregorianDate;
  export function isValidJalaaliDate(jy: number, jm: number, jd: number): boolean;
  export function isLeapJalaaliYear(jy: number): boolean;
  export function jalaaliMonthLength(jy: number, jm: number): number;
  
  const jalaali: {
    toJalaali: typeof toJalaali;
    toGregorian: typeof toGregorian;
    isValidJalaaliDate: typeof isValidJalaaliDate;
    isLeapJalaaliYear: typeof isLeapJalaaliYear;
    jalaaliMonthLength: typeof jalaaliMonthLength;
  };
  
  export default jalaali;
} 