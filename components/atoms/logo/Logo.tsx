import Image from "next/image";

const Logo = ({ color }: { color: "black" | "blue" }) => {
  return (
    <Image
      src={`/logo-${color}.svg`}
      alt="Logo"
      width={125}
      height={24}
      className="w-[125px] h-[24px] max-xxs:w-[80px] max-xxs:h-[16px]"
    />
  );
};
export default Logo;
