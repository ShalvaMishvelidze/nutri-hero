import { BtnField } from "@/components/atoms/btn_field";
import EditIcon from "@/components/icons/EditIcon";
import { Dispatch, SetStateAction } from "react";

const EditBtn = ({
  edit,
  save,
  setIsEditing,
  isEditing,
}: {
  edit?: string;
  save?: string;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  isEditing: boolean;
}) => {
  return (
    <>
      {edit && save && (
        <BtnField
          m_top="none"
          radius="_18"
          btn_size="_59"
          h="_25"
          text="small"
          bg={isEditing ? "purple_dark" : "gray_light"}
          textColor={isEditing ? "white" : "gray"}
          onClick={(e) => {
            e.stopPropagation();
            setIsEditing(!isEditing);
          }}
        >
          {isEditing ? save : edit}
          {!isEditing && <EditIcon styleClassName="fill-gray-30" />}
        </BtnField>
      )}
    </>
  );
};
export default EditBtn;
