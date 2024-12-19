import { appCategory, gameCategory } from "@/constant";
import Link from "next/link";

export const BreadCrumb = ({
  category,
  name,
  id,
}: {
  category: string;
  name: string;
  id: string;
}) => {
  const find = appCategory.find((item) => item.value === category);

  const cat = gameCategory.find((item) => item.value === category);

  return (
    <div className="w-full hidden text-sm text-gray-700 md:flex items-center justify-start gap-x-1.5">
      <Link href={"/"}>Home</Link>
      <span className="text-xs text-gray-500">{`>`}</span>
      <Link href={find ? "/categories" : "/games"}>
        {find ? find.label : cat ? cat.label : category}
      </Link>
      <span className="text-xs text-gray-500">{`>`}</span>
      <Link href={"/details/" + id} className="underline">
        {name}
      </Link>
    </div>
  );
};
