import Image from "next/image";
import { container } from "./StoresContainer.style";

const StoresContainer = ({ storeStyles }: { storeStyles?: string }) => {
  return (
    <div className={`${container} ${storeStyles}`}>
      <Image
        src={"/app-store.svg"}
        alt="App Store"
        width={154}
        height={45}
        className="w-[154px] max-lg:w-[48%]"
      />
      <Image
        src={"/play-store.svg"}
        alt="App Store"
        width={154}
        height={45}
        className="w-[154px] max-lg:w-[48%]"
      />
    </div>
  );
};
export default StoresContainer;
