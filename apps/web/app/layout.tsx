import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SocketProvider from "../context/SocketProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A Scalable Chat Application",
  authors: [{ name: "Syket Bhattachergee", url: "https://syketb.vercel.app" }],
  description:
    "Scalable chat application, build by using next.js 14, typescript, socket.io, and redis on aiven",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/techTong.ico" type="image/x-icon" />
      <SocketProvider>
        <body className={inter.className}>{children}</body>
      </SocketProvider>
    </html>
  );
}
