import { DatePicker } from "antd";
import Image from "next/image";

const DateInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <DatePicker
      className="!h-[60px] !bg-blue-5 !w-full"
      placeholder={placeholder}
      suffixIcon={
        <Image
          className="size-[17px] cursor-pointer"
          src={"/calendar.svg"}
          alt="checked"
          width={17}
          height={16}
        />
      }
    />
  );
};
export default DateInput;
