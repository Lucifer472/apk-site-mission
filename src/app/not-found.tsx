import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-y-8 items-center justify-center">
      <Image src={"/404.png"} alt="not-found" width={600} height={394} />
      <Link
        href={"/"}
        className="w-[280px] font-medium h-[40px] flex items-center justify-center text-white rounded-full bg-gradient-to-tr from-[#37CD78] to-[#38D9FF]"
      >
        Go Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
