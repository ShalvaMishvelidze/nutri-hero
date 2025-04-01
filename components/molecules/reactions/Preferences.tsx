"use client";
import { BtnField } from "@/components/atoms/btn_field";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fragment, useState } from "react";

const Preferences = ({
  translationsFieldName,
  preferences,
}: {
  translationsFieldName: string;
  preferences: number[];
}) => {
  const t = useTranslations(translationsFieldName);
  const [active, setActive] = useState<{ [key: string]: boolean }>({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const handleClick = (preference: number) => {
    setActive((prev) => ({ ...prev, [preference]: !prev[preference] }));
  };

  return (
    <div className="grid grid-cols-2 gap-[10px] w-full">
      {preferences.map((preference) => (
        <Fragment key={`preference_${preference}`}>
          {active[preference] ? (
            <BtnField
              h="medium"
              bg="green"
              m_top="none"
              onClick={() => handleClick(preference)}
            >
              <Image
                src={"/check-white.svg"}
                alt="check"
                width={28}
                height={28}
                className="size-[28px]"
              />
            </BtnField>
          ) : (
            <BtnField
              h="medium"
              m_top="none"
              bg="light"
              onClick={() => handleClick(preference)}
              styleClassName="hover:!bg-green hover:!text-white"
            >
              {t(`preferences_list.${preference}`)}
            </BtnField>
          )}
        </Fragment>
      ))}
    </div>
  );
};
export default Preferences;
