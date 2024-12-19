import { z } from "zod";

export const addApkFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  icon: z.string().transform((value) => (value === "" ? "" : value)),
  category: z.string(),
  ratings: z.number(),
  age: z.number(),
  download: z.string(),
  link: z.string().min(1, { message: "link is required" }),
  images: z.string().array(),
  package_name: z.string().min(1, { message: "appId is required" }),
  developer: z.string().min(1, { message: "developer name is required" }),
  version: z.string(),
  features: z.string().min(1, { message: "Features is required" }),
});

export const editApkFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  icon: z.string().transform((value) => (value === "" ? "" : value)),
  category: z.string(),
  ratings: z.number(),
  age: z.number(),
  download: z.string(),
  link: z.string().min(1, { message: "link is required" }),
  images: z.string().array(),
  developer: z.string().min(1, { message: "developer name is required" }),
  version: z.string(),
  features: z.string().min(1, { message: "Features is required" }),
});
