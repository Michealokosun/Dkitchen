import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Providers from "@/store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "D kitchen",
  description: "Fo your special delicacies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
