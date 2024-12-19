"use client";

import { useRef } from "react";
import { PlusCircleIcon, XIcon } from "lucide-react";
import { toast } from "sonner";

import Image from "next/image";

export const ImageUpload = ({
  value,
  onChange,
  index,
}: {
  value: string[];
  onChange: (v: unknown) => void;
  index: number;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const changeImage = (image: File | null) => {
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      fetch("https://images.drivingexamexpert.com/upload/blog.php", {
        method: "POST",
        body: formData,
      }).then((res) =>
        res.json().then((res) => {
          if (res.success) {
            value[index] = res.file.url;
            onChange(value);
          } else {
            toast.error("Failed to upload Image!");
          }
        })
      );
    }
  };

  const handleRemoveImage = () => {
    value.splice(index, 1);
    onChange(value);
  };

  if (!!value[index]) {
    return (
      <div className="size-[100px] relative gap-x-2 cursor-pointer border-2 border-neutral-100 border-dashed rounded-sm flex flex-col items-center justify-center">
        <button
          onClick={handleRemoveImage}
          className="absolute size-5 rounded-full bg-rose-600 flex items-center justify-center top-0 right-0 text-sm z-10 text-white"
        >
          <XIcon className="size-4" />
        </button>
        <Image
          src={value[index]}
          alt="Upload Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  }

  return (
    <div
      onClick={() => inputRef?.current?.click()}
      className="size-[100px] relative gap-x-2 cursor-pointer border-2 border-neutral-100 border-dashed rounded-sm flex flex-col items-center justify-center"
    >
      <PlusCircleIcon />
      <span className="text-center text-xs font-light text-neutral-500">
        Upload Image
      </span>
      <input
        className="hidden"
        ref={inputRef}
        onChange={(e) =>
          e.currentTarget &&
          e.currentTarget.files &&
          changeImage(e.currentTarget.files[0])
        }
        accept=".jpg,.svg,.jpeg,.png"
        type="file"
      />
    </div>
  );
};
