"use client";
import Image from "next/image";
import { HeadingField } from "../heading_field";
import { container } from "./PrintBtn.style";

const PrintBtn = ({ text }: { text: string }) => {
  return (
    <div className={container} onClick={() => window.print()}>
      <HeadingField mt="none" weight="bold" heading_size="small">
        {text}
      </HeadingField>
      <Image
        src={"/print.svg"}
        alt="print"
        width={20}
        height={20}
        className="size-[20px]"
      />
    </div>
  );
};
export default PrintBtn;
