import { Lavishly_Yours } from "next/font/google";
import { Crimson_Text } from "next/font/google";

export const handwriting = Lavishly_Yours({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
});

export const serif = Crimson_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
