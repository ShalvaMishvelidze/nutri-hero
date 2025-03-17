import Image from "next/image";
import { container } from "./StoresContainer.style";

const StoresContainer = ({ storeStyles }: { storeStyles?: string }) => {
  return (
    <div className={`${container} ${storeStyles}`}>
      <Image src={"/app-store.svg"} alt="App Store" width={154} height={45} />
      <Image src={"/play-store.svg"} alt="App Store" width={154} height={45} />
    </div>
  );
};
export default StoresContainer;
