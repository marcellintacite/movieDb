import "./globals.css";
import { Montserrat } from "@next/font/google";

const montSerrat = Montserrat({
  weights: [400, 700],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montSerrat.className}`}>{children}</body>
    </html>
  );
}
