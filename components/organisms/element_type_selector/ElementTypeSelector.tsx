import { Select } from "antd";

const ElementTypeSelector = ({
  elType,
  setElType,
}: {
  elType: "input" | "button" | "general";
  setElType: (value: "input" | "button" | "general") => void;
}) => (
  <>
    <label className="text-[20px] font-bold leading-[24px]">Element type</label>
    <Select
      value={elType}
      className="w-full"
      options={[
        { value: "input", label: "Input" },
        { value: "button", label: "Button" },
        { value: "general", label: "General" },
      ]}
      onChange={setElType}
    />
  </>
);

export default ElementTypeSelector;
