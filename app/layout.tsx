import type { Metadata } from "next";

import "./globals.css";
import localFont from "next/font/local";

const ibmPlexSans = localFont({
  src: [
    { path: "./fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "bold" },
    { path: "./fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "medium" },
    // { path: "./fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "semibold" },
  ]
});

const bebasNeue = localFont({
  src: [
    { path: "./fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--bebas-neue",
});

export const metadata: Metadata = {
  title: "BookWise",
  description: "BookWise is a platform for managing your library and borrowing books.",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} ${bebasNeue.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;