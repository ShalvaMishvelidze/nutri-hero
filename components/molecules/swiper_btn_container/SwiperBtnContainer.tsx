import Image from "next/image";
import { BtnField } from "@/components/atoms/btn_field";
import { swiper_btn_container } from "./SwiperBtnContainer.style";

const SwiperBtnContainer = ({
  hiddenBtn,
  prevRootClassName,
  nextRootClassName,
}: {
  hiddenBtn: "first" | "last" | "none";
  prevRootClassName: string;
  nextRootClassName: string;
}) => {
  return (
    <div
      className={`${swiper_btn_container} ${
        hiddenBtn === "none"
          ? " justify-between"
          : hiddenBtn === "first"
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <BtnField
        rootClassName={prevRootClassName}
        bg="gray"
        btn_size="tiny"
        h="small"
        m_top="none"
        className={hiddenBtn === "first" ? "!hidden" : "!block"}
      >
        <Image
          src={"/arrow-left.svg"}
          alt="Previous"
          width={11}
          height={18.8}
        />
      </BtnField>
      <BtnField
        rootClassName={nextRootClassName}
        bg="gray"
        btn_size="tiny"
        h="small"
        m_top="none"
        className={hiddenBtn === "last" ? "!hidden" : "!block"}
      >
        <Image
          src={"/arrow-right.svg"}
          alt="Previous"
          width={11}
          height={18.8}
        />
      </BtnField>
    </div>
  );
};
export default SwiperBtnContainer;
