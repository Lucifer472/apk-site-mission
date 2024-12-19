import { Application, Images } from "@prisma/client";

export type GlobalLayoutType = {
  children: React.ReactNode;
};

export type BlogContent = {
  time: number;
  blocks: {
    id: string;
    type: string;
    data: unknown;
  }[];
  version: string;
};

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export type ApplicationWithImages = Application & {
  images: Images[];
};
