import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header/Header";
export const metadata = {
  title: "APPSCRIP",
  description: "E-commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
