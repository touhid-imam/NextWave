import type { Metadata } from "next";
import "./../sass/main.scss";

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
      <body>{children}</body>
    </html>
  );
}
