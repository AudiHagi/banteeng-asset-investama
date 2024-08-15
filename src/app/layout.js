import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Banteng Asset Investama",
  description: "Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/bai-logo.ico" />
      </head>
      <body style={{ minHeight: "100vh" }} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
