import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import { handwriting, serif } from "./src/theme/fonts";
import { Providers } from "./providers";
import EmotionRegistry from "./emotion-registry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const brandonGrotesque = localFont({
  src: [
    {
      path: "../public/fonts/trade.woff",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-brandongrotesque",
  display: "swap",
});

const scriptin = localFont({
  src: [
    {
      path: "../public/fonts/scriptin-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/scriptin-webfont.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-scriptin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryne Estwing | Design Engineer",
  description:
    "Design-minded engineer with 15+ years of experience building thoughtful digital experiences at the intersection of design systems, accessibility, and front-end development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${brandonGrotesque.variable} ${scriptin.variable} ${handwriting.variable} ${serif.variable}`}
      >
        <EmotionRegistry>
          <Providers>{children}</Providers>
        </EmotionRegistry>
      </body>
    </html>
  );
}
