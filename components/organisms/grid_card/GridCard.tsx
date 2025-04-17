"use client";
import { HeadingField } from "@/components/atoms/heading_field";
import { ParagraphField } from "@/components/atoms/paragraph_field";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const GridCard = ({
  img_url,
  title,
  paragraph,
  can_be_checked,
}: {
  img_url: string;
  title: string;
  paragraph: string;
  can_be_checked?: boolean;
}) => {
  const t = useTranslations("my_plan.recipes");
  const [checked, setChecked] = useState(false);

  return (
    <div className="h-[242px] rounded-[5px] bg-white shadow-[0px_3px_6px_#0000001A] overflow-visible relative z-80">
      <Image
        src={img_url}
        alt={title}
        width={324}
        height={183}
        className="w-full h-[183px] object-cover"
      />
      <div className="h-[59px] pl-[12px] pr-[14.25px] flex justify-between items-center">
        <div className="flex flex-col items-start">
          <HeadingField heading_size="small" weight="bold" mt="none">
            {title}
          </HeadingField>
          <ParagraphField heading_size="tiny" mt="none" color="gray">
            {paragraph}
          </ParagraphField>
        </div>
        {can_be_checked && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex gap-[15px] relative z-20"
          >
            <div className="group relative">
              <Image
                src={"/refresh.svg"}
                width={28}
                height={28}
                alt="refresh"
                className="size-[28px] cursor-pointer"
              />
              <div className=" bg-purple rounded-[4px] p-[7px] absolute bottom-[37px] right-[14px] transform translate-x-1/2 hidden group-hover:block z-100 min-w-[164px]">
                <p className="text-white text-[13px] leading-[18px]">
                  {t("float_msg_1")}
                </p>
                <Image
                  src={"/red-triangle.svg"}
                  alt="triangle"
                  width={33}
                  height={15}
                  className="absolute bottom-[-11px] left-1/2 transform -translate-x-1/2 w-[33px] h-[15px]"
                />
              </div>
            </div>
            <div className="group relative">
              <Image
                onClick={() => setChecked(!checked)}
                src={checked ? "/check-green.svg" : "/check-light.svg"}
                width={28}
                height={28}
                alt="refresh"
                className="size-[28px] cursor-pointer"
              />
              <div className=" bg-purple rounded-[4px] p-[7px] absolute bottom-[37px] right-[14px] transform translate-x-1/2 hidden group-hover:block z-100 min-w-[164px]">
                <p className="text-white text-[13px] leading-[18px]">
                  {t("float_msg_2")}
                </p>
                <Image
                  src={"/red-triangle.svg"}
                  alt="triangle"
                  width={33}
                  height={15}
                  className="absolute bottom-[-11px] left-1/2 transform -translate-x-1/2 w-[33px] h-[15px]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default GridCard;
