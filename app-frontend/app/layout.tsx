import type { Metadata } from "next";
import "./../sass/main.scss";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

export const metadata: Metadata = {
  title: "NextWave",
  description: "The NextWave App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
