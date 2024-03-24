import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
const inter = Inter({ subsets: ["latin"] });

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
