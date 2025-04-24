"use client";
import { HeadingField } from "@/components/atoms/heading_field";
import { Bg, TextColor } from "./UnitCard.config";
import { useState } from "react";
import { bottom_container, container, text_container } from "./UnitCard.style";
import { EditBtn } from "@/components/atoms/edit_btn";

const ProgressHeaderCard = ({
  heading,
  amount,
  unit,
  edit,
  save,
  bg = "white",
  textColor = "black",
}: {
  heading: string;
  amount: string;
  unit: string;
  edit?: string;
  save?: string;
  bg?: keyof typeof Bg;
  textColor?: keyof typeof TextColor;
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={`${Bg[bg]} ${container}`}>
      <HeadingField
        weight="normal"
        heading_size="_16"
        color={textColor}
        mt="none"
      >
        {heading}
      </HeadingField>
      <div className={bottom_container}>
        <div className={text_container}>
          <HeadingField
            weight="bold"
            mt="none"
            heading_size="_30"
            color={textColor}
          >
            {amount}
          </HeadingField>
          <HeadingField mb="_5" weight="normal" mt="none" color={textColor}>
            {unit}
          </HeadingField>
        </div>
        <EditBtn
          edit={edit}
          save={save}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
        />
      </div>
    </div>
  );
};
export default ProgressHeaderCard;
