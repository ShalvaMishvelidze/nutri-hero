import Image from "next/image";

const Logo = ({ color }: { color: "black" | "blue" }) => {
  return (
    <Image src={`/logo-${color}.svg`} alt="Logo" width={125} height={24} />
  );
};
export default Logo;
