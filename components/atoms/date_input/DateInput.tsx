import { DatePicker } from "antd";
import Image from "next/image";

const DateInput = ({
  placeholder,
  img_url = "/calendar.svg",
  white = false,
}: {
  placeholder: string;
  img_url?: string;
  white?: boolean;
}) => {
  return (
    <DatePicker
      className={`!h-[60px] ${white ? "bg-white" : "!bg-blue-5"} !w-full`}
      placeholder={placeholder}
      suffixIcon={
        <Image
          className="size-[17px] cursor-pointer"
          src={img_url}
          alt="checked"
          width={17}
          height={16}
        />
      }
    />
  );
};
export default DateInput;
