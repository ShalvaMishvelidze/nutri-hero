export enum ParagraphSize {
  tiny = "text-[13px] leading-[18px] max-xm:text-[11px] max-xm:leading-[16px]",
  small = "text-[16px] leading-[20px] max-xm:text-[13px] max-xm:leading-[18px]",
  normal = "text-[19px] leading-[22px] max-xm:text-[14px] max-xm:leading-[20px]",
  medium = "text-[22px] leading-[28px] tracking-[0.01px] max-xm:text-[16px] max-xm:leading-[22px]",
  _12_22 = "text-[12px] leading-[22px] max-xm:text-[12px] max-xm:leading-[18px]",
  _13_22 = "text-[13px] leading-[22px] max-xm:text-[12px] max-xm:leading-[18px]",
  _14 = "text-[14px] leading-[18px] max-xm:text-[12px] max-xm:leading-[16px]",
  _16_24 = "text-[16px] leading-[24px] max-xm:text-[13px] max-xm:leading-[18px]",
  _16_31 = "text-[16px] leading-[31px] max-xm:text-[13px] max-xm:leading-[22px]",
  _18_31 = "text-[18px] leading-[31px] max-xm:text-[14px] max-xm:leading-[22px]",
  _22_24 = "text-[22px] leading-[24px] max-xm:text-[16px] max-xm:leading-[18px]",
  _22_28 = "text-[22px] leading-[28px] max-xm:text-[16px] max-xm:leading-[22px]",
}

export enum Leading {
  none = "",
  tiny = "!leading-[18px]",
  small = "!leading-[20px]",
  normal = "!leading-[22px]",
  big = "!leading-[30px]",
}

export enum MT {
  none = "mt-0",
  small = "mt-[10px]",
  normal = "mt-[20px]",
  medium = "mt-[30px]",
  big = "mt-[50px]",
  _15 = "mt-[15px]",
}

export enum Weight {
  light = "font-light",
  normal = "font-normal",
  medium = "font-medium",
  bold = "font-bold",
}

export enum Color {
  black = "text-black",
  white = "text-white",
  gray = "text-gray-30 opacity-90",
  light_blue = "text-blue-5",
  purple = "text-purple",
  light_purple = "text-purple-30",
  dark_gray = "text-gray-50",
  gray_60 = "text-gray-60",
}

export enum TextTransform {
  uppercase = "uppercase",
  capitalize = "capitalize",
  lowercase = "lowercase",
  normal = "normal-case",
}
