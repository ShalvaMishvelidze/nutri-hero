import Image from "next/image";
import { Button } from "antd";

export default function Home() {
  return (
    <div className="flex justify-center items-center mt-[100px] ">
      <h1>Hello, world!</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <Button type="primary">Primary Button</Button>
    </div>
  );
}
