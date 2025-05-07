import { BtnField } from "@/components/atoms/btn_field";
import { Select } from "antd";
import { ComponentProps, Dispatch, ReactNode, SetStateAction } from "react";

export enum Btn_Size {
  auto = "auto",
  smallest = "smallest",
  tiny = "tiny",
  small = "small",
  medium = "medium",
  big = "big",
  full = "full",
  _59 = "_59",
  _88 = "_88",
  _139 = "_139",
}

export enum Btn_Height {
  small = "small",
  regular = "regular",
  medium = "medium",
  _25 = "_25",
}

export enum Btn_Mt {
  none = "none",
  regular = "regular",
  medium = "medium",
  big = "big",
  huge = "huge",
  _10 = "_10",
}

export enum Btn_Ml {
  none = "none",
  regular = "regular",
  medium = "medium",
  big = "big",
  huge = "huge",
}

export enum Btn_Pb {
  none = "none",
  tiny = "tiny",
  small = "small",
  regular = "regular",
  medium = "medium",
}

export enum Btn_Bg {
  filled = "filled",
  empty = "empty",
  light = "light",
  gray_light = "gray_light",
  gray = "gray",
  green = "green",
  purple_light = "purple_light",
  purple_dark = "purple_dark",
  blue = "blue",
}

export enum Btn_Text {
  tiny = "tiny",
  small = "small",
  normal = "normal",
}

export enum Btn_Radius {
  small = "small",
  regular = "regular",
  _3 = "_3",
  _18 = "_18",
}

export enum Btn_TextColor {
  white = "white",
  black = "black",
  purple = "purple",
  blue = "blue",
  gray = "gray",
  green = "green",
  gray_light = "gray_light",
  gray_dark = "gray_dark",
}

const buttonEnums = [
  { name: "btn_size", values: Btn_Size },
  { name: "h", values: Btn_Height },
  { name: "m_top", values: Btn_Mt },
  { name: "m_left", values: Btn_Ml },
  { name: "p_bottom", values: Btn_Pb },
  { name: "bg", values: Btn_Bg },
  { name: "text", values: Btn_Text },
  { name: "radius", values: Btn_Radius },
  { name: "textColor", values: Btn_TextColor },
];

const BtnEditor = ({
  btns,
  btn,
  setBtn,
  buttons,
  setButtons,
}: {
  btns: { value: number }[];
  btn: number;
  setBtn: Dispatch<SetStateAction<number>>;
  buttons: {
    btnProps?: ComponentProps<typeof BtnField>;
    children: ReactNode;
  }[];
  setButtons: Dispatch<
    SetStateAction<
      {
        btnProps?: ComponentProps<typeof BtnField>;
        children: ReactNode;
      }[]
    >
  >;
}) => {
  return (
    <>
      <label className="text-[20px] font-bold leading-[24px]">Button</label>
      <Select
        value={btn}
        className="w-full"
        defaultActiveFirstOption
        options={btns}
        onChange={(value) => {
          setBtn(value);
        }}
      />
      {buttonEnums.map((btnEnum) => (
        <div key={btnEnum.name} className="flex flex-col gap-[20px]">
          <label className="text-[20px] font-bold leading-[24px]">
            Button: {btnEnum.name}
          </label>
          <Select
            className="w-full"
            placeholder={`Select ${btnEnum.name}`}
            value={Object.keys(btnEnum.values).find(
              (key) =>
                buttons[btn]?.btnProps?.[
                  btnEnum.name as keyof typeof BtnField
                ] === btnEnum.values[key as keyof typeof btnEnum.values]
            )}
            options={Object.keys(btnEnum.values).map((key) => ({
              value: key,
              label: key,
            }))}
            onChange={(value) => {
              const newButtons = [...buttons];
              newButtons[btn].btnProps = {
                ...newButtons[btn].btnProps,
                children: newButtons[btn].children,
                ...newButtons[btn].btnProps,
                [btnEnum.name]:
                  btnEnum.values[value as keyof typeof btnEnum.values],
              };
              setButtons(newButtons);
            }}
          />
        </div>
      ))}
    </>
  );
};
export default BtnEditor;
