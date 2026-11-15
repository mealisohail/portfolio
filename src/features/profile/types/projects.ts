import type { StaticImageData } from "next/image";

export type Project = {
  id: string;
  title: string;
  time: string;
  link: string;
  tags: string[];
  description?: string;
  /** Preview shown when the project is expanded */
  image?: StaticImageData;
};
