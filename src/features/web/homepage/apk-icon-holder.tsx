import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ApkIconHolderProp = {
  src: string;
  name: string;
  href: string;
};

type ApkIconHolderLongProp = {
  category: string;
  star: number;
} & ApkIconHolderProp;

export const ApkIconHolder = ({ href, src, name }: ApkIconHolderProp) => {
  return (
    <Link
      href={"/details/" + href}
      className="relative h-[110px] w-[130px] md:h-[120px] md:w-[140px] hover:text-main block"
    >
      <div className="flex flex-col items-center overflow-hidden justify-center gap-y-2 relative z-20 transition-all">
        <Image
          src={src}
          alt={name}
          style={{ objectFit: "cover", aspectRatio: "1/1" }}
          className="rounded-xl"
          width={50}
          height={50}
        />
        <span className="text-sm text-left max-w-[100px] truncate font-medium">
          {name}
        </span>
      </div>
      <Image
        src={"/bg-icon.png"}
        alt="Bg Icon"
        fill
        style={{ objectFit: "contain" }}
        className="z-10"
      />
    </Link>
  );
};

export const ApkIconHolderLong = ({
  href,
  src,
  name,
  category,
  star,
}: ApkIconHolderLongProp) => {
  return (
    <Link
      href={"/details/" + href}
      className="relative h-[80px] w-[360px] md:h-[100px] md:w-[380px] block "
    >
      <div className="absolute border w-[60px] h-[60px] md:w-[72px] md:h-[72px] border-[#f6f6f6] table-cell rounded-xl top-1/2 left-0 -translate-y-1/2">
        <Image
          src={src}
          alt={name}
          style={{
            objectFit: "cover",
            aspectRatio: "1/1",
          }}
          className="rounded-xl"
          fill
        />
      </div>
      <div className="w-full h-full pl-8">
        <div className="w-full h-full pl-10 md:pl-16 pr-4 md:pr-6 py-2 rounded-md md:rounded-xl border-main border bg-gradient-to-tr from-[#FCFCFC] to-main-hover flex justify-between">
          <div className="flex flex-col items-start justify-between h-full ">
            <span className="text-sm md:text-base">{name}</span>
            <span className="text-slate-400 text-xs">{category}</span>
            <div className="flex items-center justify-center gap-x-1">
              <Star className="size-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">
                {star}.{Math.round(Math.random() * 10)}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <button className="py-1 px-2 bg-main text-white rounded-md text-sm">
              GET
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
