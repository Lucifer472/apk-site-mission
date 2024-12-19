"use client";

import { z } from "zod";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageIcon } from "lucide-react";

import dynamic from "next/dynamic";
import Image from "next/image";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ImageUpload } from "./image-upload";

import { editApkFormSchema } from "./schema";

import { ageGroup, allCategory, appRatings } from "@/constant";
import { ApplicationWithImages } from "@/types";
import { useUpdateApplication } from "./api/use-update-application";

const Editor = dynamic(() => import("./editor"), { ssr: false });

export const EditApkForm = ({ data }: { data: ApplicationWithImages }) => {
  const [content, setContent] = useState("");

  const { mutate, isPending } = useUpdateApplication();

  const images = data.images.map((i) => i.url);

  const form = useForm<z.infer<typeof editApkFormSchema>>({
    resolver: zodResolver(editApkFormSchema),
    defaultValues: {
      name: data.name,
      version: data.version,
      age: data.age,
      category: data.category,
      developer: data.developer,
      download: data.download,
      icon: data.icon,
      images: images,
      link: data.link,
      ratings: data.rating,
      features: data.features,
    },
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/svg+xml"];
      if (!validTypes.includes(file.type)) {
        alert("Only JPG, PNG, and SVG files are allowed.");
        return;
      }

      const maxSize = 500 * 1024;
      if (file.size > maxSize) {
        alert("File size must be less than 500kb.");
        return;
      }

      const reader = new FileReader();

      // This is where the file gets read and converted to Base64
      reader.onload = () => {
        const base64String = reader.result;
        console.log(base64String);
        form.setValue("icon", `${base64String}`);
      };

      reader.onerror = () => {
        alert("Failed to read file!");
      };

      // Initiate the reading of the file
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (!!content) {
      form.setValue("features", content);
    }
  }, [form, content]);

  const handleApkAction = (values: z.infer<typeof editApkFormSchema>) => {
    mutate({
      json: values,
      param: { id: data.id },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleApkAction)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>App Name:</FormLabel>
                <FormControl>
                  <Input {...field} type="text" placeholder="Clash of Clans" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="version"
            render={({ field }) => (
              <FormItem>
                <FormLabel>App Version:</FormLabel>
                <FormControl>
                  <Input {...field} type="text" placeholder="1.71.2" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="developer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>App Developer:</FormLabel>
                <FormControl>
                  <Input {...field} type="text" placeholder="Supercell" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="download"
            render={({ field }) => (
              <FormItem>
                <FormLabel>App Total Download:</FormLabel>
                <FormControl>
                  <Input {...field} type="text" placeholder="10+ M" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>App Link (Playstore):</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="https://play.google.com/store/apps/details?id=com.supercell.clashofclans"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age Group:</FormLabel>
                <Select
                  onValueChange={(e) => field.onChange(parseInt(e))}
                  defaultValue={field.value.toString()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a valid Age Group" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {ageGroup.map((age) => (
                      <SelectItem key={age.value} value={age.value.toString()}>
                        {age.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category:</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a valid Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {allCategory.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ratings"
            render={({ field }) => (
              <FormItem>
                <FormLabel>App Ratings:</FormLabel>
                <Select
                  onValueChange={(e) => field.onChange(parseInt(e))}
                  defaultValue={field.value.toString()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a valid Rating" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {appRatings.map((rat) => (
                      <SelectItem key={rat.value} value={rat.value.toString()}>
                        {rat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="icon"
            render={({ field }) => (
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-5">
                  {field.value ? (
                    <div className="size-[72px] relative rounded-md overflow-hidden">
                      <Image
                        src={field.value}
                        alt="Workspace Image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <Avatar className="size-[72px]">
                      <AvatarFallback>
                        <ImageIcon className="size-[36px] text-neutral-400" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div className="flex flex-col">
                    <p className="text-sm">App Icon</p>
                    <p className="text-xs text-muted-foreground">
                      JPG, PNG, SVG AND JPEG WITH MAX SIZE OF 1MB.
                    </p>
                    <input
                      className="hidden"
                      accept=".jpg,.png,.svg,.jpeg"
                      type="file"
                      ref={inputRef}
                      onChange={handleImageChange}
                    />
                    {field.value ? (
                      <Button
                        type="button"
                        variant={"destructive"}
                        className="w-fit px-2 mt-2"
                        onClick={() => {
                          field.onChange("");
                          if (inputRef.current) {
                            inputRef.current.value = "";
                          }
                        }}
                      >
                        Remove Image
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        variant={"primary"}
                        className="w-fit mt-2"
                        onClick={() => inputRef.current?.click()}
                      >
                        Upload Image
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Images</FormLabel>
                <div className="flex items-center justify-start w-full flex-wrap gap-4">
                  {[...field.value, ""].map((_v, index) => (
                    <ImageUpload
                      value={field.value}
                      onChange={field.onChange}
                      index={index}
                      key={index}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Editor
            setData={setContent}
            initialData={JSON.parse(form.getValues("features"))}
          />
        </div>
        <Button disabled={isPending} type="submit" size={"lg"}>
          Save
        </Button>
      </form>
    </Form>
  );
};
