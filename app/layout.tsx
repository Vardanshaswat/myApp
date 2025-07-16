// app/layout.tsx
import Nav from "./(components)/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import SessionWrapper from "./(components)/SessionWrapper";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket System",
  description: "Creating a functional ticketing system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          {" "}
          {/* ✅ Now it's safe */}
        <div className="flex flex-col h-screen max-h-screen">
          <Nav />
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
            {children}
          </div>
        </div>
       </SessionWrapper>
      </body>
    </html>
  );
}
