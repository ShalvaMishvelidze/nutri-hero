"use client";
import { Btn } from "@/components/atoms/btn";
import {
  active_style,
  active_style_light,
  btn,
  btn_light,
  container,
} from "./MiniNav.style";
import { Dispatch, SetStateAction } from "react";

const MiniNav = ({
  selectedKey,
  nav_links,
  is_light,
  setSelectedKey,
}: {
  selectedKey: number;
  nav_links: string[];
  is_light?: boolean;
  setSelectedKey: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className={container}>
      {nav_links.map((link, index) => (
        <Btn
          type="link"
          className={`${is_light ? btn_light : btn} ${
            !is_light && selectedKey === index && active_style
          } ${is_light && selectedKey === index && active_style_light}`}
          key={link}
          onClick={() => {
            setSelectedKey(index);
          }}
        >
          {link}
        </Btn>
      ))}
    </div>
  );
};
export default MiniNav;
