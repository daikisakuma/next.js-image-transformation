import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";


export const metadata: Metadata = {
  title: "Next Image Transformation",
  description: "Next Image Transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className=" bg-slate-700 text-slate-50">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow my-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
