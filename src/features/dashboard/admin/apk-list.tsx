"use client";
import Image from "next/image";
import Link from "next/link";
import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { useGetApplication } from "./api/use-get-application";
import { useDeleteApplication } from "./api/use-delete-application";
import { useSearchApplication } from "./hooks/use-search";

export const ApkList = () => {
  const { search } = useSearchApplication();

  const { data, isPending } = useGetApplication(
    search === "" ? "null" : search
  );

  const { mutate, isPending: isDelete } = useDeleteApplication();

  const handleDelete = (id: string) => {
    const confirm = window.confirm(
      "Are you sure? this action is not irreversible"
    );

    if (!confirm) return;
    mutate({ param: { id } });
  };

  if (isPending || isDelete) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full border border-gray-300 rounded-md">
      {data &&
        data.map((d, i) => (
          <div
            className={cn(
              "grid grid-cols-9 w-full border-gray-300",
              i !== data.length - 1 && "border-b"
            )}
            key={d.id}
          >
            <p className="col-span-1 text-center content-center border-r">
              {i + 1}
            </p>
            <div className="col-span-6 py-2.5 pr-auto flex pl-12 gap-x-4 border-r">
              <Image
                src={d.icon}
                alt="Icon"
                width={30}
                height={30}
                style={{
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                  objectFit: "contain",
                }}
              />
              <p>{d.name}</p>
            </div>
            <div className="col-span-2 flex items-center justify-center gap-x-2">
              <Button variant={"outline"} asChild>
                <Link href={"/details/" + d.id}>View</Link>
              </Button>
              <Button asChild>
                <Link href={"/admin/list/" + d.id}>Edit</Link>
              </Button>
              <Button
                onClick={() => handleDelete(d.id)}
                variant={"destructive"}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
};
